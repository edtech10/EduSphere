import { Link, useParams } from 'react-router'
import {
  Lock, CheckCircle2, Circle, Clock, PlayCircle, ClipboardCheck, Timer, ChevronRight,
} from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { useDB } from '@/lib/db'
import { computeReadiness } from '@/lib/scoring'
import { pct } from '@/lib/format'
import type { Database } from '@/lib/types'
import { ReadinessBadge } from '@/components/StatusBadge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

function trackLessons(db: Database, trackId: string) {
  const moduleIds = new Set(db.modules.filter((m) => m.trackId === trackId).map((m) => m.id))
  return db.lessons.filter((l) => moduleIds.has(l.moduleId))
}

export default function TrackDetail() {
  const { user } = useAuth()
  const db = useDB()
  const { trackId } = useParams<{ trackId: string }>()
  if (!user) return null

  const track = db.tracks.find((t) => t.id === trackId)
  const enrollment = db.enrollments.find((e) => e.studentId === user.id && e.trackId === trackId)

  if (!track || !enrollment) {
    return (
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <Lock className="h-8 w-8 text-muted-foreground" />
            <p className="font-medium">This track is locked</p>
            <p className="text-sm text-muted-foreground">
              You are not enrolled in this readiness track. Contact your instructor to request access.
            </p>
            <Button variant="outline" asChild>
              <Link to="/app/student/tracks">Back to My Tracks</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const progress = db.progress.find((p) => p.studentId === user.id && p.trackId === track.id)
  const readiness = computeReadiness(db, user.id, track.id)
  const modules = db.modules.filter((m) => m.trackId === track.id).sort((a, b) => a.order - b.order)
  const lessons = trackLessons(db, track.id)
  const doneLessons = progress
    ? progress.completedLessonIds.filter((id) => lessons.some((l) => l.id === id)).length
    : 0
  const completionPct = lessons.length > 0 ? (doneLessons / lessons.length) * 100 : 0

  const diagnostic = db.assessments.find((a) => a.trackId === track.id && a.kind === 'diagnostic')
  const timedFinal = db.assessments.find((a) => a.trackId === track.id && a.kind === 'timed_final')
  const finalUnlocked = completionPct >= 60

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link to="/app/student">Dashboard</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link to="/app/student/tracks">My Tracks</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{track.shortName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <CardTitle className="text-xl">{track.name}</CardTitle>
              <CardDescription className="mt-1">{track.description}</CardDescription>
            </div>
            <ReadinessBadge status={readiness.status} />
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-end gap-3">
            <span className="text-4xl font-semibold tabular-nums">{readiness.score}</span>
            <span className="pb-1 text-sm text-muted-foreground">/ 100 certification readiness score</span>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Lesson completion</span>
            <span className="tabular-nums">{doneLessons} / {lessons.length} lessons · {pct(completionPct)}</span>
          </div>
          <Progress value={completionPct} />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4">
          <div className="min-w-0">
            <p className="text-sm font-medium">Baseline diagnostic</p>
            {progress?.diagnosticBaselinePct != null ? (
              <p className="text-sm text-muted-foreground">
                Baseline score: <span className="font-medium tabular-nums">{pct(progress.diagnosticBaselinePct)}</span>
                {' '}— your readiness score measures growth from this starting point.
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Take the diagnostic to set your baseline and unlock personalized readiness tracking.
              </p>
            )}
          </div>
          {diagnostic && (
            <Button variant={progress?.diagnosticBaselinePct == null ? 'default' : 'outline'} size="sm" asChild>
              <Link to={`/app/student/track/${track.id}/assessment/${diagnostic.id}`}>
                <PlayCircle className="h-4 w-4" />
                {progress?.diagnosticBaselinePct == null ? 'Take baseline diagnostic' : 'Retake diagnostic'}
              </Link>
            </Button>
          )}
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight">Modules</h2>
        <Accordion type="multiple" className="space-y-3">
          {modules.map((mod) => {
            const modLessons = lessons.filter((l) => l.moduleId === mod.id).sort((a, b) => a.order - b.order)
            const modDone = progress
              ? modLessons.filter((l) => progress.completedLessonIds.includes(l.id)).length
              : 0
            const kc = db.assessments.find((a) => a.kind === 'knowledge_check' && a.moduleId === mod.id)
            const kcAttempt = kc
              ? db.attempts.find(
                  (a) => a.assessmentId === kc.id && a.studentId === user.id && a.completedAt != null,
                )
              : undefined
            return (
              <AccordionItem key={mod.id} value={mod.id} className="rounded-lg border bg-white px-4">
                <AccordionTrigger className="py-3 hover:no-underline">
                  <div className="flex min-w-0 flex-1 items-center gap-3 pr-2 text-left">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                      {mod.order}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{mod.title}</p>
                      <p className="truncate text-xs text-muted-foreground">{mod.description}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="hidden text-xs tabular-nums text-muted-foreground sm:inline">
                        {modDone}/{modLessons.length} lessons
                      </span>
                      {kcAttempt ? (
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                          Check {pct(kcAttempt.scorePct ?? 0)}
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200">
                          Check pending
                        </Badge>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="space-y-1.5 pt-1">
                    {modLessons.map((lesson) => {
                      const done = progress?.completedLessonIds.includes(lesson.id) ?? false
                      return (
                        <li
                          key={lesson.id}
                          className="flex items-center justify-between gap-3 rounded-md bg-slate-50 px-3 py-2"
                        >
                          <div className="flex min-w-0 items-center gap-2">
                            {done ? (
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                            ) : (
                              <Circle className="h-4 w-4 shrink-0 text-slate-300" />
                            )}
                            <span className="truncate text-sm">{lesson.title}</span>
                            <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" /> {lesson.durationMin} min
                            </span>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/app/student/track/${track.id}/module/${mod.id}`}>
                              Open <ChevronRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </li>
                      )
                    })}
                  </ul>
                  {kc && (
                    <div className="mt-3 flex justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/app/student/track/${track.id}/assessment/${kc.id}`}>
                          <ClipboardCheck className="h-4 w-4" />
                          {kcAttempt ? 'Retake knowledge check' : 'Take knowledge check'}
                        </Link>
                      </Button>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>

      {timedFinal && (
        <Card className={finalUnlocked ? 'border-blue-200' : ''}>
          <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4">
            <div className="flex min-w-0 items-start gap-3">
              <Timer className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
              <div className="min-w-0">
                <p className="text-sm font-medium">Timed final practice test</p>
                {progress?.finalPracticeScorePct != null ? (
                  <p className="text-sm text-muted-foreground">
                    Your best recorded score:{' '}
                    <span className="font-medium tabular-nums">{pct(progress.finalPracticeScorePct)}</span>.
                    Retake anytime to keep building certification readiness.
                  </p>
                ) : finalUnlocked ? (
                  <p className="text-sm text-muted-foreground">
                    Unlocked — {timedFinal.questionIds.length} questions
                    {timedFinal.timeLimitMin != null && ` · ${timedFinal.timeLimitMin} minute time limit`}.
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Unlocks at 60% lesson completion — you are at {pct(completionPct)}.
                  </p>
                )}
              </div>
            </div>
            {finalUnlocked ? (
              <Button size="sm" asChild>
                <Link to={`/app/student/track/${track.id}/assessment/${timedFinal.id}`}>
                  <PlayCircle className="h-4 w-4" />
                  {progress?.finalPracticeScorePct != null ? 'Retake final practice' : 'Start final practice'}
                </Link>
              </Button>
            ) : (
              <Button size="sm" variant="outline" disabled>
                <Lock className="h-4 w-4" /> Locked
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
