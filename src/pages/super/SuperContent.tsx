// Super Admin — content management: tracks, modules, lessons, and question bank.
import { useState } from 'react'
import { Plus, ShieldAlert, CheckCircle2 } from 'lucide-react'
import { useDB, updateDB, logAction, uid } from '@/lib/db'
import { useAuth } from '@/lib/auth'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from '@/components/ui/dialog'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import type { CredentialTrack, Difficulty, QuestionType } from '@/lib/types'

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

export default function SuperContent() {
  const db = useDB()
  const { user } = useAuth()
  const actor = { id: user?.id ?? 'user_super', name: user?.name ?? 'Platform Admin' }

  const [addTrack, setAddTrack] = useState<CredentialTrack | null>(null)
  const [form, setForm] = useState<QuestionForm>(emptyForm(''))

  // Concrete tracks first, bundle last
  const tracks = [...db.tracks].sort((a, b) => Number(!!a.isBundle) - Number(!!b.isBundle))

  const openAdd = (track: CredentialTrack) => {
    const firstModule = db.modules.find((m) => m.trackId === track.id)
    setForm(emptyForm(firstModule?.id ?? ''))
    setAddTrack(track)
  }

  const setChoice = (i: number, value: string) => {
    const next = [...form.choices] as QuestionForm['choices']
    next[i] = value
    setForm({ ...form, choices: next })
  }

  const addQuestion = () => {
    if (!addTrack || !form.moduleId || !form.text.trim()) return
    const isTF = form.type === 'true_false'
    const choices = isTF ? ['True', 'False'] : form.choices.map((c) => c.trim())
    if (!isTF && choices.some((c) => !c)) return
    const correctIndex = isTF ? Math.min(form.correctIndex, 1) : form.correctIndex
    const moduleTitle = db.modules.find((m) => m.id === form.moduleId)?.title ?? ''
    updateDB((d) => {
      d.questions.push({
        id: uid('q'),
        trackId: addTrack.id,
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
    logAction(
      actor.id, actor.name, 'content.question_added',
      `Added ${form.type.replace('_', ' ')} question to ${addTrack.name} — ${moduleTitle}`,
      null,
    )
    setAddTrack(null)
  }

  const trackModules = (trackId: string) =>
    db.modules.filter((m) => m.trackId === trackId).sort((a, b) => a.order - b.order)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Content management</h1>
        <p className="text-sm text-muted-foreground">
          Credential-aligned tracks, modules, lessons, and the practice question bank.
        </p>
      </div>

      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="flex items-start gap-3 p-4">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-sm text-amber-900">
            All practice content must be original. Do not copy questions from official certification
            exams or third-party prep providers. EduSphere USA content is credential-aligned for
            certification readiness and claims no endorsement by any certification provider.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {tracks.map((track) => {
          const modules = trackModules(track.id)
          const lessons = db.lessons.filter((l) => modules.some((m) => m.id === l.moduleId))
          const questions = db.questions.filter((q) => q.trackId === track.id)
          const assessments = db.assessments.filter((a) => a.trackId === track.id)
          return (
            <Card key={track.id}>
              <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: track.color }}
                  />
                  <div>
                    <CardTitle className="text-base">
                      {track.name}
                      {track.isBundle && (
                        <Badge variant="secondary" className="ml-2 text-xs">Bundle</Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="mt-1 max-w-2xl">{track.description}</CardDescription>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {track.credentialFocus} · ~{track.estimatedWeeks} weeks
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-4">
                  <div className="flex gap-4 text-center text-sm">
                    <div><p className="font-semibold tabular-nums">{modules.length}</p><p className="text-xs text-muted-foreground">Modules</p></div>
                    <div><p className="font-semibold tabular-nums">{lessons.length}</p><p className="text-xs text-muted-foreground">Lessons</p></div>
                    <div><p className="font-semibold tabular-nums">{questions.length}</p><p className="text-xs text-muted-foreground">Questions</p></div>
                    <div><p className="font-semibold tabular-nums">{assessments.length}</p><p className="text-xs text-muted-foreground">Assessments</p></div>
                  </div>
                  {!track.isBundle && (
                    <Button variant="outline" size="sm" onClick={() => openAdd(track)}>
                      <Plus className="mr-1 h-4 w-4" /> Add question
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {track.isBundle ? (
                  <p className="text-sm text-muted-foreground">
                    Includes:{' '}
                    {track.includedTrackIds
                      ?.map((id) => db.tracks.find((t) => t.id === id)?.name ?? id)
                      .join(', ')}
                    . Manage content on the individual tracks above.
                  </p>
                ) : (
                  <Accordion type="multiple" className="w-full">
                    {modules.map((mod) => {
                      const modLessons = db.lessons
                        .filter((l) => l.moduleId === mod.id)
                        .sort((a, b) => a.order - b.order)
                      const modQuestions = db.questions.filter((q) => q.moduleId === mod.id)
                      return (
                        <AccordionItem key={mod.id} value={mod.id}>
                          <AccordionTrigger className="text-sm font-medium">
                            <span>
                              Module {mod.order}: {mod.title}
                              <span className="ml-2 text-xs font-normal text-muted-foreground">
                                {modLessons.length} lessons · {modQuestions.length} questions
                              </span>
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 pl-2">
                              <p className="text-sm text-muted-foreground">{mod.description}</p>
                              <div>
                                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">Lessons</p>
                                <ul className="space-y-1">
                                  {modLessons.map((l) => (
                                    <li key={l.id} className="flex items-center justify-between text-sm">
                                      <span>{l.order}. {l.title}</span>
                                      <span className="text-xs text-muted-foreground">{l.durationMin} min</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              {modQuestions.length > 0 && (
                                <div>
                                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                    Questions ({modQuestions.length})
                                  </p>
                                  <div className="space-y-3">
                                    {modQuestions.map((q, qi) => (
                                      <div key={q.id} className="rounded-md border bg-white p-3">
                                        <div className="mb-2 flex flex-wrap items-center gap-2">
                                          <span className="text-xs font-medium text-muted-foreground">Q{qi + 1}</span>
                                          <Badge variant="outline" className="text-xs capitalize">
                                            {q.type.replace('_', ' ')}
                                          </Badge>
                                          <Badge variant="outline" className={`text-xs capitalize ${difficultyStyles[q.difficulty]}`}>
                                            {q.difficulty}
                                          </Badge>
                                          <span className="text-xs text-muted-foreground">
                                            {q.topic} · ~{q.estimatedTimeSec}s
                                          </span>
                                        </div>
                                        <p className="text-sm font-medium">{q.text}</p>
                                        <ul className="mt-2 space-y-1">
                                          {q.choices.map((c, ci) => (
                                            <li key={ci} className="flex items-center gap-2 text-sm">
                                              {ci === q.correctIndex ? (
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                                              ) : (
                                                <span className="h-4 w-4 shrink-0" />
                                              )}
                                              <span className={ci === q.correctIndex ? 'font-medium text-emerald-700' : 'text-muted-foreground'}>
                                                {c}
                                              </span>
                                            </li>
                                          ))}
                                        </ul>
                                        {q.explanation && (
                                          <p className="mt-2 rounded bg-slate-50 p-2 text-xs text-muted-foreground">
                                            {q.explanation}
                                          </p>
                                        )}
                                        {q.tags.length > 0 && (
                                          <div className="mt-2 flex flex-wrap gap-1">
                                            {q.tags.map((t) => (
                                              <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      )
                    })}
                  </Accordion>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Add question dialog */}
      <Dialog open={!!addTrack} onOpenChange={(open) => !open && setAddTrack(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Add question — {addTrack?.name}</DialogTitle>
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
                    {addTrack && trackModules(addTrack.id).map((m) => (
                      <SelectItem key={m.id} value={m.id}>
                        {m.order}. {m.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="q-topic">Topic</Label>
                <Input
                  id="q-topic"
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                  placeholder="e.g. Infection Control"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Type</Label>
                <Select
                  value={form.type}
                  onValueChange={(v) =>
                    setForm({ ...form, type: v as QuestionType, correctIndex: 0 })
                  }
                >
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
                <Select
                  value={form.difficulty}
                  onValueChange={(v) => setForm({ ...form, difficulty: v as Difficulty })}
                >
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
                <Input
                  id="q-time"
                  type="number"
                  min={0}
                  value={form.estimatedTimeSec}
                  onChange={(e) => setForm({ ...form, estimatedTimeSec: Number(e.target.value) })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="q-text">Question text</Label>
              <Textarea
                id="q-text"
                rows={3}
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                placeholder="Write an original question…"
              />
            </div>

            {form.type === 'true_false' ? (
              <p className="text-sm text-muted-foreground">
                Choices are set automatically: <span className="font-medium">True</span> /{' '}
                <span className="font-medium">False</span>.
              </p>
            ) : (
              <div className="space-y-2">
                <Label>Choices (4)</Label>
                {form.choices.map((c, i) => (
                  <Input
                    key={i}
                    value={c}
                    onChange={(e) => setChoice(i, e.target.value)}
                    placeholder={`Choice ${String.fromCharCode(65 + i)}`}
                  />
                ))}
              </div>
            )}

            <div className="space-y-2">
              <Label>Correct answer</Label>
              <Select
                value={String(form.correctIndex)}
                onValueChange={(v) => setForm({ ...form, correctIndex: Number(v) })}
              >
                <SelectTrigger className="w-[240px]"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {(form.type === 'true_false' ? ['True', 'False'] : form.choices).map((c, i) => (
                    <SelectItem key={i} value={String(i)}>
                      {form.type === 'true_false'
                        ? c
                        : `${String.fromCharCode(65 + i)}${c ? ` — ${c.slice(0, 40)}` : ''}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="q-explanation">Explanation</Label>
              <Textarea
                id="q-explanation"
                rows={2}
                value={form.explanation}
                onChange={(e) => setForm({ ...form, explanation: e.target.value })}
                placeholder="Why the correct answer is correct…"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="q-tags">Tags (comma-separated)</Label>
              <Input
                id="q-tags"
                value={form.tags}
                onChange={(e) => setForm({ ...form, tags: e.target.value })}
                placeholder="safety, procedures"
              />
            </div>
          </div>
          <Separator />
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddTrack(null)}>Cancel</Button>
            <Button
              onClick={addQuestion}
              disabled={
                !form.moduleId ||
                !form.text.trim() ||
                (form.type !== 'true_false' && form.choices.some((c) => !c.trim()))
              }
            >
              Add question
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
