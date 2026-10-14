// Super Admin — track detail: overview/alignment, full question bank,
// interactive activities, instructor resources, and the QA workflow panel.
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router'
import {
  CheckCircle2, Eye, Flag, GraduationCap, Layers, Plus, Save, ShieldAlert,
} from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { useDB, updateDB, logAction, uid } from '@/lib/db'
import { getField } from '@/data/fields'
import {
  getTrackQA, STATUS_META, RESOURCE_TYPE_META, resourcesForTrack,
} from '@/data/enrichment'
import { fullActivitiesForTrack } from '@/data/activities'
import { qualityScore, trackStats, qualityBadgeClass } from './SuperContent'
import { ActivityPlayer } from '@/components/activities/ActivityPlayer'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from '@/components/ui/dialog'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import type {
  ContentStatus, CredentialTrack, Difficulty, Question, QuestionType,
} from '@/lib/types'
import { formatDate } from '@/lib/format'
import { cn } from '@/lib/utils'

const QUESTION_TYPES: { value: QuestionType; label: string }[] = [
  { value: 'multiple_choice', label: 'Multiple choice' },
  { value: 'scenario', label: 'Scenario' },
  { value: 'true_false', label: 'True / False' },
]
const DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard']

const difficultyStyles: Record<Difficulty, string> = {
  easy: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  medium: 'bg-amber-50 text-amber-700 border-amber-200',
  hard: 'bg-red-50 text-red-700 border-red-200',
}

interface QuestionForm {
  moduleId: string
  topic: string
  type: QuestionType
  difficulty: Difficulty
  text: string
  choices: [string, string, string, string]
  correctIndex: number
  explanation: string
  tags: string
  estimatedTimeSec: number
}

const emptyForm = (moduleId: string): QuestionForm => ({
  moduleId,
  topic: '',
  type: 'multiple_choice',
  difficulty: 'medium',
  text: '',
  choices: ['', '', '', ''],
  correctIndex: 0,
  explanation: '',
  tags: '',
  estimatedTimeSec: 60,
})

/** Compact answer summary for extended question types. */
function AnswerSummary({ q }: { q: Question }) {
  if (q.type === 'multi_select' && q.correctIndexes) {
    return (
      <p className="text-sm">
        <span className="font-medium text-emerald-700">Correct: </span>
        {q.correctIndexes.map((i) => q.choices[i]).join(' · ')}
      </p>
    )
  }
  if (q.type === 'sequencing' && q.sequenceItems) {
    return (
      <ol className="list-decimal space-y-0.5 pl-5 text-sm">
        {q.sequenceItems.map((s, i) => (
          <li key={i} className="text-emerald-700">{s}</li>
        ))}
      </ol>
    )
  }
  if (q.type === 'matching' && q.pairs) {
    return (
      <ul className="space-y-0.5 text-sm">
        {q.pairs.map((p, i) => (
          <li key={i}>
            <span className="font-medium">{p.left}</span>
            <span className="text-muted-foreground"> → {p.right}</span>
          </li>
        ))}
      </ul>
    )
  }
  if (q.type === 'calculation' && q.numericAnswer) {
    return (
      <p className="text-sm">
        <span className="font-medium text-emerald-700">Answer: </span>
        {q.numericAnswer.value}
        {q.numericAnswer.unit ? ` ${q.numericAnswer.unit}` : ''}
        {q.numericAnswer.tolerance > 0 && <span className="text-muted-foreground"> (±{q.numericAnswer.tolerance})</span>}
      </p>
    )
  }
  if (q.type === 'short_response' && q.keywords) {
    return (
      <p className="text-sm">
        <span className="font-medium text-emerald-700">Expected keywords: </span>
        {q.keywords.join(', ')}
      </p>
    )
  }
  return (
    <ul className="mt-2 space-y-1">
      {q.choices.map((c, ci) => (
        <li key={ci} className="flex items-start gap-2 text-sm">
          {ci === q.correctIndex ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
          ) : (
            <span className="mt-0.5 h-4 w-4 shrink-0" />
          )}
          <span>
            <span className={ci === q.correctIndex ? 'font-medium text-emerald-700' : 'text-muted-foreground'}>{c}</span>
            {q.wrongRationales?.[ci] && ci !== q.correctIndex && (
              <span className="block text-xs text-red-600/80">Distractor rationale: {q.wrongRationales[ci]}</span>
            )}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function SuperTrackDetail() {
  const db = useDB()
  const { user } = useAuth()
  const actor = { id: user?.id ?? 'user_super', name: user?.name ?? 'Platform Admin' }
  const { trackId } = useParams<{ trackId: string }>()
  const track = db.tracks.find((t) => t.id === trackId)

  const [qSearch, setQSearch] = useState('')
  const [qModule, setQModule] = useState('all')
  const [qType, setQType] = useState('all')
  const [addOpen, setAddOpen] = useState(false)
  const [form, setForm] = useState<QuestionForm>(emptyForm(''))

  const modules = useMemo(
    () => (track ? db.modules.filter((m) => m.trackId === track.id).sort((a, b) => a.order - b.order) : []),
    [db, track],
  )

  if (!track) {
    return (
      <Card className="mx-auto max-w-xl">
        <CardContent className="p-8 text-center">
          <p className="font-medium">Track not found</p>
          <Button variant="outline" className="mt-4" asChild>
            <Link to="/app/super/content">Back to Content CMS</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  const stats = trackStats(db, track)
  const qa = getTrackQA(track, stats.questions, stats.activities)
  const quality = qualityScore(track, stats, qa)
  const meta = STATUS_META[qa.status]
  const field = getField(track.category)
  const moduleIds = new Set(modules.map((m) => m.id))
  const lessons = db.lessons.filter((l) => moduleIds.has(l.moduleId))
  const questions = db.questions.filter((q) => q.trackId === track.id)
  const diagnostic = db.assessments.find((a) => a.trackId === track.id && a.kind === 'diagnostic')
  const checks = db.assessments.filter((a) => a.trackId === track.id && a.kind === 'knowledge_check')
  const timedFinal = db.assessments.find((a) => a.trackId === track.id && a.kind === 'timed_final')
  const activities = fullActivitiesForTrack(
    track.id,
    db.questions.filter((q) => q.trackId === track.id),
  )
  const resources = resourcesForTrack(track)
  const lessonMinutes = lessons.reduce((s, l) => s + l.durationMin, 0)
  const assessMinutes = Math.round(
    db.assessments.filter((a) => a.trackId === track.id).reduce((s, a) => s + a.questionIds.length * 0.75, 0),
  )
  const seatMinutes = lessonMinutes + assessMinutes
  const seatLabel = `${Math.floor(seatMinutes / 60)}h ${seatMinutes % 60}m`

  const filteredQuestions = questions.filter((q) => {
    if (qModule !== 'all' && q.moduleId !== qModule) return false
    if (qType !== 'all' && q.type !== qType) return false
    if (qSearch && !q.text.toLowerCase().includes(qSearch.toLowerCase())) return false
    return true
  })

  const saveQA = (patch: Partial<CredentialTrack>) => {
    updateDB((d) => {
      const t = d.tracks.find((x) => x.id === track.id)
      if (t) Object.assign(t, patch, { updatedAt: new Date().toISOString() })
    })
    logAction(actor.id, actor.name, 'content.qa_updated', `QA metadata updated for ${track.name}`, null)
  }

  const setChoice = (i: number, value: string) => {
    const next = [...form.choices] as QuestionForm['choices']
    next[i] = value
    setForm({ ...form, choices: next })
  }

  const addQuestion = () => {
    if (!form.moduleId || !form.text.trim()) return
    const isTF = form.type === 'true_false'
    const choices = isTF ? ['True', 'False'] : form.choices.map((c) => c.trim())
    if (!isTF && choices.some((c) => !c)) return
    const correctIndex = isTF ? Math.min(form.correctIndex, 1) : form.correctIndex
    const moduleTitle = modules.find((m) => m.id === form.moduleId)?.title ?? ''
    updateDB((d) => {
      d.questions.push({
        id: uid('q'),
        trackId: track.id,
        moduleId: form.moduleId,
        topic: form.topic.trim() || moduleTitle,
        type: form.type,
        difficulty: form.difficulty,
        text: form.text.trim(),
        choices,
        correctIndex,
        explanation: form.explanation.trim(),
        estimatedTimeSec: Math.max(0, Math.floor(form.estimatedTimeSec)),
        tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      })
    })
    logAction(actor.id, actor.name, 'content.question_added', `Added question to ${track.name} — ${moduleTitle}`, null)
    setAddOpen(false)
  }

  const warnings: string[] = []
  if (qa.needsMoreQuestions) warnings.push(`Question bank has ${stats.questions} items — flagship standard is 50+.`)
  if (qa.noActivities) warnings.push('No interactive simulations or activities are attached to this track yet.')
  if (qa.flaggedQuestions > 0) warnings.push(`${qa.flaggedQuestions} questions are flagged for review.`)
  if (qa.status === 'needs_revision') warnings.push('Track is marked needs-revision and should not be promoted until resolved.')

  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link to="/app/super/content">Content CMS</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>{track.shortName}</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-3">
              <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: track.color }} />
              <div className="min-w-0">
                <CardTitle className="text-xl">{track.name}</CardTitle>
                <CardDescription className="mt-1">
                  {field.name} · {track.credentialFocus} · ~{track.estimatedWeeks} weeks
                </CardDescription>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <Badge variant="outline" className={meta.badgeClass}>{meta.label}</Badge>
                  <Badge variant="secondary">v{qa.version}</Badge>
                  <Badge variant="secondary">Author: {qa.author}</Badge>
                  <Badge variant="secondary">Reviewer: {qa.reviewer}</Badge>
                </div>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-2">
              <div className="mr-2 w-28">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Quality</span>
                  <span className={cn('font-semibold tabular-nums', qualityBadgeClass(quality))}>{quality}</span>
                </div>
                <Progress value={quality} className="mt-1 h-1.5" />
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link to={`/app/super/preview/${track.id}`}>
                  <Eye className="mr-1 h-4 w-4" /> Student preview
                </Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link to={`/app/super/preview/${track.id}?notes=1`}>
                  <GraduationCap className="mr-1 h-4 w-4" /> Instructor preview
                </Link>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3 text-center text-sm sm:grid-cols-7">
            {[
              ['Modules', stats.modules], ['Lessons', stats.lessons], ['Questions', stats.questions],
              ['Assessments', stats.assessments], ['Simulations', stats.activities],
              ['Resources', stats.resources], ['Seat time', seatLabel],
            ].map(([label, value]) => (
              <div key={label as string} className="rounded-md border bg-slate-50 p-2">
                <p className="font-semibold tabular-nums">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          {warnings.length > 0 && (
            <div className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-3">
              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800">
                <ShieldAlert className="h-3.5 w-3.5" /> Content warnings
              </p>
              <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-amber-900">
                {warnings.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      <Tabs defaultValue="overview">
        <TabsList className="flex-wrap">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="questions">Question bank ({questions.length})</TabsTrigger>
          <TabsTrigger value="activities">Activities ({activities.length})</TabsTrigger>
          <TabsTrigger value="resources">Instructor resources ({resources.length})</TabsTrigger>
          <TabsTrigger value="qa">QA workflow</TabsTrigger>
        </TabsList>

        {/* ---------- Overview ---------- */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-base">Credential alignment</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Credential focus</p>
                  <p className="mt-0.5">{track.credentialFocus}</p>
                </div>
                {track.alignmentNotes && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Alignment notes</p>
                    <p className="mt-0.5 text-muted-foreground">{track.alignmentNotes}</p>
                  </div>
                )}
                {track.prerequisites && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Prerequisites</p>
                    <p className="mt-0.5 text-muted-foreground">{track.prerequisites}</p>
                  </div>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-base">Domain map</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {(track.domains ?? []).map((d, i) => (
                    <Badge key={d} variant="outline" className="text-xs">
                      {i + 1}. {d}
                    </Badge>
                  ))}
                </div>
                <Separator className="my-4" />
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Assessment structure</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>Diagnostic baseline: {diagnostic ? `${diagnostic.questionIds.length} questions` : '—'}</li>
                  <li>Module knowledge checks: {checks.length}</li>
                  <li>Timed final practice: {timedFinal ? `${timedFinal.questionIds.length} questions${timedFinal.timeLimitMin ? ` · ${timedFinal.timeLimitMin} min` : ''}` : '—'}</li>
                </ul>
                <Separator className="my-4" />
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Remediation path</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Weak domains surface on the student dashboard → remediation assignment resources keyed to those
                  domains → re-attempt the module knowledge check → timed final practice confirms recovery.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-base">Competency checklist (from skills checklist resource)</CardTitle></CardHeader>
            <CardContent>
              <ul className="grid gap-1.5 text-sm sm:grid-cols-2">
                {(track.domains ?? []).map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    Demonstrates {d.toLowerCase()} correctly and explains why
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-base">Modules</CardTitle></CardHeader>
            <CardContent>
              <Accordion type="multiple">
                {modules.map((mod) => {
                  const modLessons = lessons.filter((l) => l.moduleId === mod.id).sort((a, b) => a.order - b.order)
                  const modQuestions = questions.filter((q) => q.moduleId === mod.id)
                  const modActs = activities.filter((a) => a.moduleId === mod.id)
                  return (
                    <AccordionItem key={mod.id} value={mod.id}>
                      <AccordionTrigger className="text-sm font-medium">
                        <span>
                          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs">
                            <Layers className="hidden" />{mod.order}
                          </span>
                          {mod.title}
                          <span className="ml-2 text-xs font-normal text-muted-foreground">
                            {modLessons.length} lessons · {modQuestions.length} questions
                            {modActs.length > 0 ? ` · ${modActs.length} activities` : ''}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2 text-sm text-muted-foreground">{mod.description}</p>
                        <ul className="space-y-1">
                          {modLessons.map((l) => (
                            <li key={l.id} className="flex items-center justify-between text-sm">
                              <span>{l.order}. {l.title}</span>
                              <span className="text-xs text-muted-foreground">{l.durationMin} min</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ---------- Question bank ---------- */}
        <TabsContent value="questions" className="space-y-4">
          <Card>
            <CardContent className="flex flex-wrap items-end gap-3 p-4">
              <div className="min-w-[180px] flex-1">
                <Label className="mb-1.5 block text-xs">Search question text</Label>
                <Input value={qSearch} onChange={(e) => setQSearch(e.target.value)} placeholder="Search…" />
              </div>
              <div>
                <Label className="mb-1.5 block text-xs">Module</Label>
                <Select value={qModule} onValueChange={setQModule}>
                  <SelectTrigger className="w-[220px]"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All modules</SelectItem>
                    {modules.map((m) => (
                      <SelectItem key={m.id} value={m.id}>{m.order}. {m.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-1.5 block text-xs">Type</Label>
                <Select value={qType} onValueChange={setQType}>
                  <SelectTrigger className="w-[170px]"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All types</SelectItem>
                    {[...new Set(questions.map((q) => q.type))].map((t) => (
                      <SelectItem key={t} value={t} className="capitalize">{t.replace('_', ' ')}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button size="sm" onClick={() => { setForm(emptyForm(modules[0]?.id ?? '')); setAddOpen(true) }}>
                <Plus className="mr-1 h-4 w-4" /> Add question
              </Button>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground">
            Showing {filteredQuestions.length} of {questions.length} questions.
          </p>

          <div className="space-y-3">
            {filteredQuestions.map((q, qi) => (
              <Card key={q.id}>
                <CardContent className="p-4">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-muted-foreground">Q{qi + 1}</span>
                    <Badge variant="outline" className="text-xs capitalize">{q.type.replace('_', ' ')}</Badge>
                    <Badge variant="outline" className={cn('text-xs capitalize', difficultyStyles[q.difficulty])}>
                      {q.difficulty}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {q.topic} · ~{q.estimatedTimeSec}s · weight {q.weight ?? 1}
                    </span>
                  </div>
                  {q.caseStem && (
                    <p className="mb-2 rounded-md border border-blue-200 bg-blue-50 p-2.5 text-sm text-blue-900">
                      {q.caseStem}
                    </p>
                  )}
                  <p className="text-sm font-medium">{q.text}</p>
                  <div className="mt-2"><AnswerSummary q={q} /></div>
                  {q.explanation && (
                    <p className="mt-2 rounded bg-slate-50 p-2 text-xs text-muted-foreground">{q.explanation}</p>
                  )}
                  {q.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {q.tags.map((t) => (
                        <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ---------- Activities ---------- */}
        <TabsContent value="activities" className="space-y-4">
          {activities.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center text-sm text-muted-foreground">
                No interactive activities are attached to this track yet.
              </CardContent>
            </Card>
          ) : (
            activities.map((act) => <ActivityPlayer key={act.id} activity={act} />)
          )}
        </TabsContent>

        {/* ---------- Instructor resources ---------- */}
        <TabsContent value="resources" className="space-y-3">
          <p className="text-sm text-muted-foreground">
            The 11 standard instructor resources generated for this track. Answer keys stay behind staff login.
          </p>
          <Accordion type="multiple" className="space-y-3">
            {resources.map((r) => {
              const typeMeta = RESOURCE_TYPE_META.find((t) => t.type === r.type)
              return (
                <AccordionItem key={r.id} value={r.id} className="rounded-lg border bg-white px-4">
                  <AccordionTrigger className="py-3 hover:no-underline">
                    <div className="flex min-w-0 flex-1 items-center gap-3 pr-2 text-left">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{r.title}</p>
                        <p className="truncate text-xs text-muted-foreground">{r.summary}</p>
                      </div>
                      <Badge variant="outline" className="shrink-0">{typeMeta?.label ?? r.type}</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      {r.items.map((it, i) => <li key={i}>{it}</li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </TabsContent>

        {/* ---------- QA workflow ---------- */}
        <TabsContent value="qa" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Publishing workflow</CardTitle>
              <CardDescription>
                Status, ownership, and internal notes. Changes save immediately and update the CMS dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Content status</Label>
                  <Select value={qa.status} onValueChange={(v) => saveQA({ contentStatus: v as ContentStatus })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {(['draft', 'in_review', 'published', 'needs_revision'] as ContentStatus[]).map((s) => (
                        <SelectItem key={s} value={s}>{STATUS_META[s].label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Version</Label>
                  <Input
                    defaultValue={qa.version}
                    onBlur={(e) => e.target.value !== qa.version && saveQA({ version: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Author</Label>
                  <Input
                    defaultValue={qa.author}
                    onBlur={(e) => e.target.value !== qa.author && saveQA({ author: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Reviewer</Label>
                  <Input
                    defaultValue={qa.reviewer}
                    onBlur={(e) => e.target.value !== qa.reviewer && saveQA({ reviewer: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Flagged questions</Label>
                  <Input
                    type="number" min={0}
                    defaultValue={qa.flaggedQuestions}
                    onBlur={(e) => Number(e.target.value) !== qa.flaggedQuestions && saveQA({ flaggedQuestions: Math.max(0, Number(e.target.value) || 0) })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Last content update</Label>
                  <Input value={formatDate(qa.updatedAt)} readOnly disabled />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Internal notes (staff only)</Label>
                <Textarea
                  rows={3}
                  defaultValue={qa.internalNotes}
                  placeholder="Review findings, known gaps, scheduled revisions…"
                  onBlur={(e) => e.target.value !== qa.internalNotes && saveQA({ internalNotes: e.target.value })}
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Save className="h-3.5 w-3.5" /> Edits persist on blur / change and are audit-logged.
              </div>
            </CardContent>
          </Card>

          {qa.flaggedQuestions > 0 && (
            <Card className="border-red-200 bg-red-50">
              <CardContent className="flex items-start gap-3 p-4">
                <Flag className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <p className="text-sm text-red-900">
                  {qa.flaggedQuestions} questions are flagged for review. Work the flag count down to zero before
                  promoting this track to Published.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Add question dialog */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Add question — {track.name}</DialogTitle>
            <DialogDescription>
              New questions must be original content aligned to the track's credential focus.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Module</Label>
                <Select value={form.moduleId} onValueChange={(v) => setForm({ ...form, moduleId: v })}>
                  <SelectTrigger><SelectValue placeholder="Select module" /></SelectTrigger>
                  <SelectContent>
                    {modules.map((m) => (
                      <SelectItem key={m.id} value={m.id}>{m.order}. {m.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="q-topic">Topic</Label>
                <Input id="q-topic" value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} placeholder="e.g. Infection Control" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Type</Label>
                <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v as QuestionType, correctIndex: 0 })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {QUESTION_TYPES.map((t) => (
                      <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Difficulty</Label>
                <Select value={form.difficulty} onValueChange={(v) => setForm({ ...form, difficulty: v as Difficulty })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {DIFFICULTIES.map((d) => (
                      <SelectItem key={d} value={d} className="capitalize">{d}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="q-time">Est. time (sec)</Label>
                <Input id="q-time" type="number" min={0} value={form.estimatedTimeSec} onChange={(e) => setForm({ ...form, estimatedTimeSec: Number(e.target.value) })} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="q-text">Question text</Label>
              <Textarea id="q-text" rows={3} value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} placeholder="Write an original question…" />
            </div>
            {form.type === 'true_false' ? (
              <p className="text-sm text-muted-foreground">
                Choices are set automatically: <span className="font-medium">True</span> / <span className="font-medium">False</span>.
              </p>
            ) : (
              <div className="space-y-2">
                <Label>Choices (4)</Label>
                {form.choices.map((c, i) => (
                  <Input key={i} value={c} onChange={(e) => setChoice(i, e.target.value)} placeholder={`Choice ${String.fromCharCode(65 + i)}`} />
                ))}
              </div>
            )}
            <div className="space-y-2">
              <Label>Correct answer</Label>
              <Select value={String(form.correctIndex)} onValueChange={(v) => setForm({ ...form, correctIndex: Number(v) })}>
                <SelectTrigger className="w-[240px]"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {(form.type === 'true_false' ? ['True', 'False'] : form.choices).map((c, i) => (
                    <SelectItem key={i} value={String(i)}>
                      {form.type === 'true_false' ? c : `${String.fromCharCode(65 + i)}${c ? ` — ${c.slice(0, 40)}` : ''}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="q-explanation">Explanation</Label>
              <Textarea id="q-explanation" rows={2} value={form.explanation} onChange={(e) => setForm({ ...form, explanation: e.target.value })} placeholder="Why the correct answer is correct…" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="q-tags">Tags (comma-separated)</Label>
              <Input id="q-tags" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="safety, procedures" />
            </div>
          </div>
          <Separator />
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddOpen(false)}>Cancel</Button>
            <Button
              onClick={addQuestion}
              disabled={!form.moduleId || !form.text.trim() || (form.type !== 'true_false' && form.choices.some((c) => !c.trim()))}
            >
              Add question
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
