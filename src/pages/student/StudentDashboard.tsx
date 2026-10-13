import { Link } from 'react-router'
import {
  BookOpen, ClipboardCheck, ListChecks, Gauge, CalendarClock, AlertTriangle, ArrowRight, PlayCircle,
} from 'lucide-react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import { useAuth } from '@/lib/auth'
import { useDB } from '@/lib/db'
import { computeReadiness, weakTopics } from '@/lib/scoring'
import { pct } from '@/lib/format'
import type { CredentialTrack, Database, StudentProgress } from '@/lib/types'
import { StatCard } from '@/components/StatCard'
import { ReadinessBadge } from '@/components/StatusBadge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

function trackLessons(db: Database, trackId: string) {
  const moduleIds = new Set(db.modules.filter((m) => m.trackId === trackId).map((m) => m.id))
  return db.lessons.filter((l) => moduleIds.has(l.moduleId))
}

function lessonsDone(db: Database, trackId: string, progress: StudentProgress | undefined) {
  if (!progress) return 0
  const ids = new Set(trackLessons(db, trackId).map((l) => l.id))
  return progress.completedLessonIds.filter((id) => ids.has(id)).length
}

export default function StudentDashboard() {
  const { user } = useAuth()
  const db = useDB()
  if (!user) return null

  const enrollments = db.enrollments.filter((e) => e.studentId === user.id)
  const rows = enrollments
    .map((enrollment) => {
      const track = db.tracks.find((t) => t.id === enrollment.trackId)
      if (!track) return null
      const progress = db.progress.find((p) => p.studentId === user.id && p.trackId === track.id)
      const readiness = computeReadiness(db, user.id, track.id)
      const total = trackLessons(db, track.id).length
      const done = lessonsDone(db, track.id, progress)
      const diagnostic = db.assessments.find((a) => a.trackId === track.id && a.kind === 'diagnostic')
      return { enrollment, track, progress, readiness, totalLessons: total, doneLessons: done, diagnostic }
    })
    .filter(Boolean) as {
      enrollment: (typeof enrollments)[number]
      track: CredentialTrack
      progress: StudentProgress | undefined
      readiness: ReturnType<typeof computeReadiness>
      totalLessons: number
      doneLessons: number
      diagnostic: Database['assessments'][number] | undefined
    }[]

  const avgReadiness = rows.length
    ? Math.round(rows.reduce((s, r) => s + r.readiness.score, 0) / rows.length)
    : 0
  const totalPractice = rows.reduce((s, r) => s + (r.progress?.practiceQuestionsCompleted ?? 0), 0)
  const totalLessonsDone = rows.reduce((s, r) => s + r.doneLessons, 0)

  // Weekly study plan — derived from the first enrollment.
  const first = rows[0]
  const firstWeak = first ? weakTopics(first.progress).slice(0, 3) : []
  const firstCompletion = first && first.totalLessons > 0 ? (first.doneLessons / first.totalLessons) * 100 : 0
  const upcomingTasks: string[] = []
  if (first) {
    if (first.progress?.diagnosticBaselinePct == null) {
      upcomingTasks.push('Complete your baseline diagnostic')
    } else if (firstCompletion >= 80 && first.progress?.finalPracticeScorePct == null) {
      upcomingTasks.push('Take the timed final practice test')
    } else {
      upcomingTasks.push('Continue your next module')
    }
    upcomingTasks.push('Review your weakest topics below')
    upcomingTasks.push('Log at least three study sessions this week')
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back, {user.name.split(' ')[0]}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Track your certification readiness across your assigned credential-aligned programs.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Assigned tracks" value={rows.length} icon={<BookOpen className="h-4 w-4" />} />
        <StatCard label="Avg readiness" value={pct(avgReadiness)} icon={<Gauge className="h-4 w-4" />} />
        <StatCard label="Practice questions" value={totalPractice} hint="completed" icon={<ClipboardCheck className="h-4 w-4" />} />
        <StatCard label="Lessons completed" value={totalLessonsDone} icon={<ListChecks className="h-4 w-4" />} />
      </div>

      {rows.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="font-medium">No tracks assigned yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Contact your instructor to get enrolled in a credential-aligned readiness track.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {rows.map(({ track, progress, readiness, totalLessons, doneLessons, diagnostic }) => (
          <Card key={track.id}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <CardTitle className="text-base">{track.name}</CardTitle>
                  <CardDescription className="mt-1 line-clamp-2">{track.credentialFocus}</CardDescription>
                </div>
                <ReadinessBadge status={readiness.status} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-end gap-3">
                <span className="text-4xl font-semibold tabular-nums">{readiness.score}</span>
                <span className="pb-1 text-sm text-muted-foreground">/ 100 readiness score</span>
              </div>
              <Progress value={readiness.score} />
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-md bg-slate-50 p-2.5">
                  <p className="text-xs text-muted-foreground">Lessons</p>
                  <p className="font-medium tabular-nums">{doneLessons} / {totalLessons} completed</p>
                </div>
                <div className="rounded-md bg-slate-50 p-2.5">
                  <p className="text-xs text-muted-foreground">Practice questions</p>
                  <p className="font-medium tabular-nums">{progress?.practiceQuestionsCompleted ?? 0} completed</p>
                </div>
              </div>
              {progress?.diagnosticBaselinePct == null && diagnostic ? (
                <Button className="w-full" asChild>
                  <Link to={`/app/student/track/${track.id}/assessment/${diagnostic.id}`}>
                    <PlayCircle className="h-4 w-4" /> Take baseline diagnostic
                  </Link>
                </Button>
              ) : (
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/app/student/track/${track.id}`}>
                    Continue <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {first && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <CalendarClock className="h-4 w-4" /> Weekly study plan
            </CardTitle>
            <CardDescription>
              Suggested focus blocks for {first.track.shortName}, based on your current topic performance.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {firstWeak.length > 0 ? (
              <div className="grid gap-2 sm:grid-cols-3">
                {firstWeak.map((t, i) => (
                  <div key={t.topic} className="rounded-md border p-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Focus block {i + 1} · ~25 min
                    </p>
                    <p className="mt-1 text-sm font-medium">{t.topic}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Current accuracy {pct(t.accuracy)} — review lessons, then retry practice questions.
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Focus blocks will appear here once you have answered a few practice questions.
              </p>
            )}
            <Separator />
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">Upcoming tasks</p>
              <ul className="space-y-1.5">
                {upcomingTasks.map((task) => (
                  <li key={task} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {rows.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Accuracy by topic</CardTitle>
            <CardDescription>Your practice-question accuracy in each credential-aligned topic area.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={rows[0].track.id}>
              {rows.length > 1 && (
                <TabsList className="mb-4">
                  {rows.map((r) => (
                    <TabsTrigger key={r.track.id} value={r.track.id}>
                      {r.track.shortName}
                    </TabsTrigger>
                  ))}
                </TabsList>
              )}
              {rows.map((r) => {
                const data = Object.entries(r.progress?.topicStats ?? {}).map(([topic, s]) => ({
                  topic,
                  accuracy: s.attempted > 0 ? Math.round((s.correct / s.attempted) * 100) : 0,
                }))
                return (
                  <TabsContent key={r.track.id} value={r.track.id}>
                    {data.length === 0 ? (
                      <p className="py-8 text-center text-sm text-muted-foreground">
                        No practice data yet — take the baseline diagnostic or a knowledge check to see topic accuracy.
                      </p>
                    ) : (
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 40 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="topic" angle={-25} textAnchor="end" interval={0} tick={{ fontSize: 11 }} />
                            <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                            <Tooltip formatter={(v) => [`${v}%`, 'Accuracy']} />
                            <Bar dataKey="accuracy" fill={r.track.color} radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    )}
                  </TabsContent>
                )
              })}
            </Tabs>
          </CardContent>
        </Card>
      )}

      {rows.some((r) => weakTopics(r.progress).length > 0) && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-4 w-4 text-amber-600" /> At-risk topics
            </CardTitle>
            <CardDescription>
              Topics below 70% accuracy. Focus your next study sessions here to build certification readiness.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="divide-y">
              {rows.flatMap((r) =>
                weakTopics(r.progress).map((t) => (
                  <li key={`${r.track.id}-${t.topic}`} className="flex items-center justify-between gap-3 py-2.5">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{t.topic}</p>
                      <p className="text-xs text-muted-foreground">
                        {r.track.shortName} · {t.attempted} questions attempted
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        t.accuracy < 50
                          ? 'bg-red-50 text-red-700 border-red-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }
                    >
                      {pct(t.accuracy)} accuracy
                    </Badge>
                  </li>
                )),
              )}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
