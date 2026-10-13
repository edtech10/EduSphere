// Instructor cohort dashboard — scoped strictly to the instructor's own org.
import { Link } from 'react-router'
import {
  Users, Gauge, AlertTriangle, CircleHelp, ClipboardList, Percent, Download, ArrowRight,
} from 'lucide-react'
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell,
} from 'recharts'
import { useAuth } from '@/lib/auth'
import { useDB } from '@/lib/db'
import { computeReadiness, weakTopics } from '@/lib/scoring'
import { READINESS_STATUS_LABELS, type ReadinessStatus } from '@/lib/types'
import { formatDate } from '@/lib/format'
import { StatCard } from '@/components/StatCard'
import { ReadinessBadge } from '@/components/StatusBadge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'

const STATUS_ORDER: ReadinessStatus[] = [
  'not_started',
  'needs_support',
  'building_readiness',
  'near_ready',
  'ready_for_final_review',
]

const STATUS_COLORS: Record<ReadinessStatus, string> = {
  not_started: '#94a3b8',
  needs_support: '#dc2626',
  building_readiness: '#d97706',
  near_ready: '#2563eb',
  ready_for_final_review: '#059669',
}

const SEVEN_DAYS_MS = 7 * 86400000

export default function InstructorDashboard() {
  const { user } = useAuth()
  const db = useDB()
  if (!user || !user.orgId) return null
  const orgId = user.orgId

  // Access rule: instructors only ever see users/enrollments of their own org.
  const orgEnrollments = db.enrollments.filter((e) => e.orgId === orgId)
  const studentIds = [...new Set(orgEnrollments.map((e) => e.studentId))]
  const orgStudents = db.users.filter((u) => u.orgId === orgId && studentIds.includes(u.id))

  const rows = orgEnrollments.map((e) => {
    const readiness = computeReadiness(db, e.studentId, e.trackId)
    const progress = db.progress.find((p) => p.studentId === e.studentId && p.trackId === e.trackId)
    return { enrollment: e, readiness, progress }
  })

  const avgReadiness = rows.length
    ? Math.round(rows.reduce((s, r) => s + r.readiness.score, 0) / rows.length)
    : 0
  const completionRate = rows.length
    ? Math.round(rows.reduce((s, r) => s + r.readiness.components.moduleCompletion, 0) / rows.length)
    : 0

  const atRiskStudentIds = [...new Set(
    rows.filter((r) => r.readiness.status === 'needs_support').map((r) => r.enrollment.studentId),
  )]

  const isInactive = (studentId: string) => {
    const latest = db.progress
      .filter((p) => p.studentId === studentId)
      .map((p) => new Date(p.lastActivityAt).getTime())
      .sort((a, b) => b - a)[0]
    return !latest || Date.now() - latest >= SEVEN_DAYS_MS
  }
  const inactiveStudentIds = studentIds.filter(isInactive)
  const actionsNeeded = new Set([...atRiskStudentIds, ...inactiveStudentIds]).size

  const practiceCompleted = db.progress
    .filter((p) => studentIds.includes(p.studentId))
    .reduce((s, p) => s + p.practiceQuestionsCompleted, 0)

  // Readiness distribution by status bucket (one count per enrollment)
  const distribution = STATUS_ORDER.map((status) => ({
    status,
    label: READINESS_STATUS_LABELS[status],
    count: rows.filter((r) => r.readiness.status === status).length,
  }))

  // Per-track average readiness
  const perTrack = db.tracks
    .filter((t) => orgEnrollments.some((e) => e.trackId === t.id))
    .map((t) => {
      const trackRows = rows.filter((r) => r.enrollment.trackId === t.id)
      const avg = trackRows.length
        ? Math.round(trackRows.reduce((s, r) => s + r.readiness.score, 0) / trackRows.length)
        : 0
      return { name: t.shortName, avg, color: t.color }
    })

  // At-risk table rows
  const atRiskRows = rows
    .filter((r) => r.readiness.status === 'needs_support')
    .map((r) => {
      const student = orgStudents.find((s) => s.id === r.enrollment.studentId)
      const track = db.tracks.find((t) => t.id === r.enrollment.trackId)
      const weakest = weakTopics(r.progress)[0]
      return { ...r, student, track, weakest }
    })
    .filter((r) => r.student && r.track)
    .sort((a, b) => a.readiness.score - b.readiness.score)

  // Cohort-level weak-topic aggregation
  const topicMap = new Map<string, { students: number; totalAccuracy: number }>()
  for (const r of rows) {
    for (const t of weakTopics(r.progress)) {
      const entry = topicMap.get(t.topic) ?? { students: 0, totalAccuracy: 0 }
      entry.students += 1
      entry.totalAccuracy += t.accuracy
      topicMap.set(t.topic, entry)
    }
  }
  const cohortWeakTopics = [...topicMap.entries()]
    .map(([topic, v]) => ({ topic, students: v.students, avgAccuracy: Math.round(v.totalAccuracy / v.students) }))
    .sort((a, b) => b.students - a.students || a.avgAccuracy - b.avgAccuracy)
    .slice(0, 5)

  const remediationFor = (topic: string) => {
    const matchingModule = db.modules.find(
      (m) => m.title.toLowerCase() === topic.toLowerCase() ||
        topic.toLowerCase().includes(m.title.toLowerCase()),
    )
    return matchingModule
      ? `Re-teach ${topic} in small groups, then assign the "${matchingModule.title}" module review.`
      : `Re-teach ${topic} in small groups and assign targeted practice questions on this topic.`
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Cohort Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Certification readiness overview for your cohort.
          </p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link to="/app/instructor/report">
            <Download className="mr-2 h-4 w-4" /> Download cohort report
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard label="Students enrolled" value={studentIds.length} icon={<Users className="h-4 w-4" />} />
        <StatCard label="Avg readiness" value={avgReadiness} hint="out of 100" icon={<Gauge className="h-4 w-4" />} />
        <StatCard
          label="At risk"
          value={atRiskStudentIds.length}
          hint="needs support"
          tone={atRiskStudentIds.length > 0 ? 'danger' : 'default'}
          icon={<AlertTriangle className="h-4 w-4" />}
        />
        <StatCard
          label="Practice questions"
          value={practiceCompleted.toLocaleString()}
          hint="completed cohort-wide"
          icon={<CircleHelp className="h-4 w-4" />}
        />
        <StatCard
          label="Actions needed"
          value={actionsNeeded}
          hint="at-risk or inactive 7+ days"
          tone={actionsNeeded > 0 ? 'warning' : 'default'}
          icon={<ClipboardList className="h-4 w-4" />}
        />
        <StatCard label="Completion rate" value={`${completionRate}%`} hint="avg module completion" icon={<Percent className="h-4 w-4" />} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Readiness distribution</CardTitle>
            <CardDescription>Enrollments by readiness status</CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={distribution} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 11 }} interval={0} angle={-18} textAnchor="end" height={56} />
                <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {distribution.map((d) => (
                    <Cell key={d.status} fill={STATUS_COLORS[d.status]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Average readiness by track</CardTitle>
            <CardDescription>Credential-aligned track averages (0–100)</CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={perTrack} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={-18} textAnchor="end" height={56} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="avg" radius={[4, 4, 0, 0]}>
                  {perTrack.map((t) => (
                    <Cell key={t.name} fill={t.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-base">At-risk students</CardTitle>
            <CardDescription>Students whose readiness status is “Needs support”</CardDescription>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link to="/app/instructor/students">
              All students <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          {atRiskRows.length === 0 ? (
            <p className="py-6 text-center text-sm text-muted-foreground">
              No students currently need support. Great work keeping the cohort on track.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Track</TableHead>
                  <TableHead>Readiness</TableHead>
                  <TableHead>Weakest topic</TableHead>
                  <TableHead>Last activity</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {atRiskRows.map((r) => (
                  <TableRow key={r.enrollment.id}>
                    <TableCell className="font-medium">{r.student!.name}</TableCell>
                    <TableCell>{r.track!.shortName}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="tabular-nums font-medium">{r.readiness.score}</span>
                        <ReadinessBadge status={r.readiness.status} />
                      </div>
                    </TableCell>
                    <TableCell>{r.weakest ? `${r.weakest.topic} (${r.weakest.accuracy}%)` : '—'}</TableCell>
                    <TableCell>{r.progress ? formatDate(r.progress.lastActivityAt) : '—'}</TableCell>
                    <TableCell className="text-right">
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/app/instructor/student/${r.student!.id}`}>View</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recommended remediation</CardTitle>
          <CardDescription>Most common weak topics across your cohort and suggested next steps</CardDescription>
        </CardHeader>
        <CardContent>
          {cohortWeakTopics.length === 0 ? (
            <p className="py-4 text-sm text-muted-foreground">
              Not enough practice data yet to identify cohort-wide weak topics.
            </p>
          ) : (
            <ul className="divide-y">
              {cohortWeakTopics.map((t) => (
                <li key={t.topic} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium">{t.topic}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.students} student{t.students === 1 ? '' : 's'} struggling · avg accuracy {t.avgAccuracy}%
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground sm:max-w-md sm:text-right">{remediationFor(t.topic)}</p>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
