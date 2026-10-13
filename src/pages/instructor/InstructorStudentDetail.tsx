// Instructor view of a single student — org membership is verified before rendering.
import { Link, useParams } from 'react-router'
import { ArrowLeft, Mail } from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { useDB } from '@/lib/db'
import { computeReadiness, weakTopics } from '@/lib/scoring'
import { formatDate, initials, pct } from '@/lib/format'
import { ReadinessBadge } from '@/components/StatusBadge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'

const COMPONENT_LABELS: { key: 'practiceAccuracy' | 'diagnosticImprovement' | 'moduleCompletion' | 'finalPractice'; label: string }[] = [
  { key: 'practiceAccuracy', label: 'Practice accuracy' },
  { key: 'diagnosticImprovement', label: 'Diagnostic improvement' },
  { key: 'moduleCompletion', label: 'Module completion' },
  { key: 'finalPractice', label: 'Final practice' },
]

const KIND_LABELS: Record<string, string> = {
  diagnostic: 'Diagnostic',
  knowledge_check: 'Knowledge check',
  practice: 'Practice',
  timed_final: 'Timed final',
}

function accuracyBadge(accuracy: number, attempted: number) {
  if (attempted === 0) return <Badge variant="outline" className="bg-slate-100 text-slate-600 border-slate-200">No data</Badge>
  if (accuracy < 70) return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">{accuracy}%</Badge>
  if (accuracy < 80) return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">{accuracy}%</Badge>
  return <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">{accuracy}%</Badge>
}

export default function InstructorStudentDetail() {
  const { studentId } = useParams<{ studentId: string }>()
  const { user } = useAuth()
  const db = useDB()
  if (!user || !user.orgId) return null

  // Access rule: verify the student belongs to the instructor's own org.
  const student = db.users.find(
    (u) => u.id === studentId && u.orgId === user.orgId && u.role === 'student',
  )
  if (!student) {
    return (
      <Card className="mx-auto max-w-md">
        <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
          <h2 className="text-lg font-semibold">Student not found</h2>
          <p className="text-sm text-muted-foreground">
            This student is not enrolled in your organization, or the account no longer exists.
          </p>
          <Button asChild variant="outline">
            <Link to="/app/instructor/students">Back to students</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  const enrollments = db.enrollments.filter(
    (e) => e.orgId === user.orgId && e.studentId === student.id,
  )

  const trackViews = enrollments.map((e) => {
    const track = db.tracks.find((t) => t.id === e.trackId)
    const readiness = computeReadiness(db, student.id, e.trackId)
    const progress = db.progress.find((p) => p.studentId === student.id && p.trackId === e.trackId)
    const trackModules = db.modules
      .filter((m) => m.trackId === e.trackId)
      .sort((a, b) => a.order - b.order)
    const moduleRows = trackModules.map((m) => {
      const lessons = db.lessons.filter((l) => l.moduleId === m.id).sort((a, b) => a.order - b.order)
      const done = progress
        ? lessons.filter((l) => progress.completedLessonIds.includes(l.id)).length
        : 0
      return { module: m, done, total: lessons.length }
    })
    return { enrollment: e, track, readiness, progress, moduleRows }
  })

  const attempts = db.attempts
    .filter((a) => a.studentId === student.id)
    .sort((a, b) => (b.completedAt ?? b.startedAt).localeCompare(a.completedAt ?? a.startedAt))

  const allWeak = trackViews.flatMap((v) =>
    weakTopics(v.progress).map((t) => ({ ...t, trackName: v.track?.shortName ?? '' })),
  )

  return (
    <div className="space-y-6">
      <div>
        <Button asChild variant="ghost" size="sm" className="mb-2 -ml-2 text-muted-foreground">
          <Link to="/app/instructor/students">
            <ArrowLeft className="mr-1 h-4 w-4" /> All students
          </Link>
        </Button>
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarFallback className="bg-primary text-lg text-primary-foreground">
              {initials(student.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{student.name}</h1>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              <Mail className="h-3.5 w-3.5" /> {student.email}
            </p>
          </div>
        </div>
      </div>

      {/* Per-track readiness */}
      <div className="grid gap-4 lg:grid-cols-2">
        {trackViews.map((v) => (
          <Card key={v.enrollment.id}>
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <CardTitle className="text-base">{v.track?.name ?? 'Unknown track'}</CardTitle>
                  <CardDescription>Credential-aligned readiness score</CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-semibold tabular-nums">{v.readiness.score}</p>
                  <ReadinessBadge status={v.readiness.status} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {COMPONENT_LABELS.map((c) => (
                <div key={c.key} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">{c.label}</span>
                    <span className="tabular-nums font-medium">{v.readiness.components[c.key]}%</span>
                  </div>
                  <Progress value={v.readiness.components[c.key]} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Topic accuracy */}
      {trackViews.map((v) => {
        const stats = Object.entries(v.progress?.topicStats ?? {})
          .map(([topic, s]) => ({
            topic,
            attempted: s.attempted,
            accuracy: s.attempted > 0 ? Math.round((s.correct / s.attempted) * 100) : 0,
          }))
          .sort((a, b) => a.accuracy - b.accuracy)
        if (stats.length === 0) return null
        return (
          <Card key={`topics-${v.enrollment.id}`}>
            <CardHeader>
              <CardTitle className="text-base">Topic accuracy — {v.track?.shortName}</CardTitle>
              <CardDescription>Practice performance by topic</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Topic</TableHead>
                    <TableHead className="text-right">Attempted</TableHead>
                    <TableHead className="text-right">Accuracy</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats.map((s) => (
                    <TableRow key={s.topic}>
                      <TableCell className="font-medium">{s.topic}</TableCell>
                      <TableCell className="text-right tabular-nums">{s.attempted}</TableCell>
                      <TableCell className="text-right">{accuracyBadge(s.accuracy, s.attempted)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )
      })}

      {/* Weak topics & remediation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Weak topics & recommended remediation</CardTitle>
          <CardDescription>Topics below 70% accuracy with at least 2 attempts</CardDescription>
        </CardHeader>
        <CardContent>
          {allWeak.length === 0 ? (
            <p className="py-4 text-sm text-muted-foreground">
              No weak topics identified yet. Keep the practice momentum going.
            </p>
          ) : (
            <ul className="divide-y">
              {allWeak.map((t) => (
                <li key={`${t.trackName}-${t.topic}`} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium">
                      {t.topic} <span className="text-xs text-muted-foreground">({t.trackName})</span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.accuracy}% accuracy over {t.attempted} attempts
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground sm:max-w-md sm:text-right">
                    Re-teach {t.topic} in a small-group session and assign a focused practice set for review.
                  </p>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Attempt history */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Assessment attempt history</CardTitle>
          <CardDescription>Diagnostics, knowledge checks, and timed practice finals</CardDescription>
        </CardHeader>
        <CardContent>
          {attempts.length === 0 ? (
            <p className="py-4 text-sm text-muted-foreground">No assessment attempts recorded yet.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Assessment</TableHead>
                  <TableHead>Kind</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attempts.map((a) => {
                  const asm = db.assessments.find((x) => x.id === a.assessmentId)
                  return (
                    <TableRow key={a.id}>
                      <TableCell className="font-medium">{asm?.title ?? 'Unknown assessment'}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{KIND_LABELS[asm?.kind ?? ''] ?? '—'}</Badge>
                      </TableCell>
                      <TableCell>{formatDate(a.completedAt ?? a.startedAt)}</TableCell>
                      <TableCell className="text-right tabular-nums font-medium">
                        {a.scorePct != null ? pct(a.scorePct) : 'In progress'}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Lessons per module */}
      {trackViews.map((v) => (
        <Card key={`modules-${v.enrollment.id}`}>
          <CardHeader>
            <CardTitle className="text-base">Lessons completed — {v.track?.shortName}</CardTitle>
            <CardDescription>Module-by-module assignment completion</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {v.moduleRows.map((m) => (
                <li key={m.module.id} className="flex items-center justify-between gap-4 text-sm">
                  <span className="min-w-0 truncate">{m.module.title}</span>
                  <span className="flex shrink-0 items-center gap-2">
                    <Progress value={m.total > 0 ? (m.done / m.total) * 100 : 0} className="h-1.5 w-24" />
                    <span className="w-10 text-right tabular-nums text-muted-foreground">
                      {m.done}/{m.total}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
