// Super Admin — Content CMS dashboard: platform-wide content stats, filters,
// and per-track quality. Track detail lives at /app/super/content/:trackId.
import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import {
  AlertTriangle, BookOpen, ClipboardCheck, FileText, Gamepad2, Layers,
  Library, Search, ShieldAlert, ChevronRight,
} from 'lucide-react'
import { useDB } from '@/lib/db'
import { FIELDS, getField } from '@/data/fields'
import { ACTIVITIES, getTrackQA, STATUS_META, resourcesForTrack, type TrackQA } from '@/data/enrichment'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import type { ContentStatus, CredentialTrack, Database, FieldId } from '@/lib/types'
import { formatDate as fmtDate } from '@/lib/format'
import { cn } from '@/lib/utils'

export interface TrackStats {
  modules: number
  lessons: number
  questions: number
  assessments: number
  activities: number
  resources: number
}

export function trackStats(db: Database, track: CredentialTrack): TrackStats {
  const modules = db.modules.filter((m) => m.trackId === track.id)
  const moduleIds = new Set(modules.map((m) => m.id))
  return {
    modules: modules.length,
    lessons: db.lessons.filter((l) => moduleIds.has(l.moduleId)).length,
    questions: db.questions.filter((q) => q.trackId === track.id).length,
    assessments: db.assessments.filter((a) => a.trackId === track.id).length,
    activities: ACTIVITIES.filter((a) => a.trackId === track.id).length,
    resources: resourcesForTrack(track).length,
  }
}

/** Deterministic 0–100 content quality score for a track. */
export function qualityScore(track: CredentialTrack, stats: TrackStats, qa: TrackQA): number {
  let score = 40
  if (stats.questions >= 50) score += 18
  else if (stats.questions >= 20) score += 10
  else if (stats.questions >= 10) score += 4
  if (stats.lessons >= 20) score += 12
  else if (stats.lessons >= 10) score += 6
  if (stats.activities > 0) score += 10
  if ((track.domains?.length ?? 0) >= 8) score += 6
  if (qa.status === 'published') score += 10
  else if (qa.status === 'in_review') score += 5
  if (qa.flaggedQuestions === 0) score += 4
  return Math.min(100, score)
}

export function qualityBadgeClass(score: number): string {
  if (score >= 85) return 'text-emerald-700'
  if (score >= 65) return 'text-amber-700'
  return 'text-red-700'
}

const Q_BUCKETS = [
  { id: 'all', label: 'Any size' },
  { id: 'lt20', label: 'Under 20 questions' },
  { id: 'mid', label: '20–49 questions' },
  { id: 'ge50', label: '50+ questions' },
]

export default function SuperContent() {
  const db = useDB()

  const [search, setSearch] = useState('')
  const [fieldFilter, setFieldFilter] = useState<'all' | FieldId>('all')
  const [statusFilter, setStatusFilter] = useState<'all' | ContentStatus>('all')
  const [qBucket, setQBucket] = useState('all')
  const [needsSims, setNeedsSims] = useState(false)

  const rows = useMemo(() => {
    const concrete = db.tracks.filter((t) => !t.isBundle && !t.comingSoon)
    return concrete.map((track) => {
      const stats = trackStats(db, track)
      const qa = getTrackQA(track, stats.questions, stats.activities)
      return { track, stats, qa, quality: qualityScore(track, stats, qa) }
    })
  }, [db])

  const totals = useMemo(() => {
    const published = rows.filter((r) => r.qa.status === 'published').length
    const needingReview = rows.filter((r) => r.qa.status !== 'published').length
    const lastUpdate = rows.reduce(
      (max, r) => (r.qa.updatedAt > max ? r.qa.updatedAt : max),
      '1970-01-01',
    )
    const avgQuality = Math.round(rows.reduce((s, r) => s + r.quality, 0) / Math.max(1, rows.length))
    return {
      tracks: rows.length,
      modules: rows.reduce((s, r) => s + r.stats.modules, 0),
      lessons: rows.reduce((s, r) => s + r.stats.lessons, 0),
      questions: rows.reduce((s, r) => s + r.stats.questions, 0),
      assessments: rows.reduce((s, r) => s + r.stats.assessments, 0),
      simulations: ACTIVITIES.length,
      resources: rows.reduce((s, r) => s + r.stats.resources, 0),
      published,
      needingReview,
      lastUpdate,
      avgQuality,
    }
  }, [rows])

  const filtered = rows.filter(({ track, stats, qa }) => {
    if (fieldFilter !== 'all' && track.category !== fieldFilter) return false
    if (statusFilter !== 'all' && qa.status !== statusFilter) return false
    if (needsSims && stats.activities === 0) return false
    if (qBucket === 'lt20' && stats.questions >= 20) return false
    if (qBucket === 'mid' && (stats.questions < 20 || stats.questions >= 50)) return false
    if (qBucket === 'ge50' && stats.questions < 50) return false
    if (search) {
      const q = search.toLowerCase()
      if (!track.name.toLowerCase().includes(q) && !track.shortName.toLowerCase().includes(q)) return false
    }
    return true
  })

  const statCards = [
    { label: 'Tracks', value: totals.tracks, icon: Layers },
    { label: 'Modules', value: totals.modules, icon: BookOpen },
    { label: 'Lessons', value: totals.lessons, icon: FileText },
    { label: 'Questions', value: totals.questions, icon: Library },
    { label: 'Assessments', value: totals.assessments, icon: ClipboardCheck },
    { label: 'Simulations', value: totals.simulations, icon: Gamepad2 },
    { label: 'Instructor resources', value: totals.resources, icon: Library },
    { label: 'Needs review', value: totals.needingReview, icon: AlertTriangle, warn: totals.needingReview > 0 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Content CMS</h1>
        <p className="text-sm text-muted-foreground">
          Platform-wide content inventory, quality scoring, and the QA publishing workflow.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {statCards.map((s) => (
          <Card key={s.label}>
            <CardContent className="flex items-center gap-3 p-4">
              <s.icon className={cn('h-5 w-5 shrink-0', s.warn ? 'text-amber-600' : 'text-primary')} />
              <div>
                <p className={cn('text-xl font-semibold tabular-nums', s.warn && 'text-amber-700')}>{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4 text-sm">
          <span>
            <span className="font-medium tabular-nums">{totals.published}</span> published ·{' '}
            <span className="font-medium tabular-nums">{totals.needingReview}</span> in QA workflow
          </span>
          <span className="text-muted-foreground">
            Last content update: {fmtDate(totals.lastUpdate)}
          </span>
          <span>
            Average quality score:{' '}
            <span className={cn('font-semibold tabular-nums', qualityBadgeClass(totals.avgQuality))}>
              {totals.avgQuality} / 100
            </span>
          </span>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardContent className="flex flex-wrap items-end gap-4 p-4">
          <div className="min-w-[200px] flex-1">
            <Label className="mb-1.5 block text-xs">Search</Label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Track name…"
                className="pl-8"
              />
            </div>
          </div>
          <div>
            <Label className="mb-1.5 block text-xs">Field</Label>
            <Select value={fieldFilter} onValueChange={(v) => setFieldFilter(v as 'all' | FieldId)}>
              <SelectTrigger className="w-[190px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All fields</SelectItem>
                {FIELDS.map((f) => (
                  <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-1.5 block text-xs">Status</Label>
            <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as 'all' | ContentStatus)}>
              <SelectTrigger className="w-[170px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                {(['published', 'in_review', 'draft', 'needs_revision'] as ContentStatus[]).map((s) => (
                  <SelectItem key={s} value={s}>{STATUS_META[s].label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-1.5 block text-xs">Question bank</Label>
            <Select value={qBucket} onValueChange={setQBucket}>
              <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                {Q_BUCKETS.map((b) => (
                  <SelectItem key={b.id} value={b.id}>{b.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2 pb-1">
            <Switch id="sims" checked={needsSims} onCheckedChange={setNeedsSims} />
            <Label htmlFor="sims" className="text-xs">Has simulations</Label>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="flex items-start gap-3 p-4">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-sm text-amber-900">
            All practice content must be original. Do not copy questions from official certification
            exams or third-party prep providers. Content is credential-aligned for certification
            readiness and claims no endorsement by any certification provider.
          </p>
        </CardContent>
      </Card>

      {/* Track cards */}
      <div className="space-y-3">
        {filtered.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center text-sm text-muted-foreground">
              No tracks match the current filters.
            </CardContent>
          </Card>
        )}
        {filtered.map(({ track, stats, qa, quality }) => {
          const field = getField(track.category)
          const meta = STATUS_META[qa.status]
          return (
            <Card key={track.id}>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex min-w-0 items-start gap-3">
                    <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: track.color }} />
                    <div className="min-w-0">
                      <CardTitle className="text-base">{track.name}</CardTitle>
                      <CardDescription className="mt-0.5">
                        {field.name} · ~{track.estimatedWeeks} weeks · v{qa.version} · updated {fmtDate(qa.updatedAt)}
                      </CardDescription>
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <Badge variant="outline" className={meta.badgeClass}>{meta.label}</Badge>
                        {qa.needsMoreQuestions && (
                          <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-700">
                            Needs more questions
                          </Badge>
                        )}
                        {qa.noActivities && (
                          <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-700">
                            No simulations
                          </Badge>
                        )}
                        {qa.flaggedQuestions > 0 && (
                          <Badge variant="outline" className="border-red-200 bg-red-50 text-red-700">
                            {qa.flaggedQuestions} flagged questions
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-5">
                    <div className="hidden gap-4 text-center text-sm md:flex">
                      <div><p className="font-semibold tabular-nums">{stats.modules}</p><p className="text-xs text-muted-foreground">Modules</p></div>
                      <div><p className="font-semibold tabular-nums">{stats.lessons}</p><p className="text-xs text-muted-foreground">Lessons</p></div>
                      <div><p className="font-semibold tabular-nums">{stats.questions}</p><p className="text-xs text-muted-foreground">Questions</p></div>
                      <div><p className="font-semibold tabular-nums">{stats.activities}</p><p className="text-xs text-muted-foreground">Sims</p></div>
                      <div><p className="font-semibold tabular-nums">{stats.resources}</p><p className="text-xs text-muted-foreground">Resources</p></div>
                    </div>
                    <div className="w-28">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Quality</span>
                        <span className={cn('font-semibold tabular-nums', qualityBadgeClass(quality))}>{quality}</span>
                      </div>
                      <Progress value={quality} className="mt-1 h-1.5" />
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link to={`/app/super/content/${track.id}`}>
                        Manage <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
