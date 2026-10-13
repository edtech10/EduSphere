// Instructor student roster — filterable, org-scoped.
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { Search } from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { useDB } from '@/lib/db'
import { computeReadiness } from '@/lib/scoring'
import { READINESS_STATUS_LABELS, type ReadinessStatus } from '@/lib/types'
import { formatDate, initials, pct } from '@/lib/format'
import { ReadinessBadge } from '@/components/StatusBadge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'

export default function InstructorStudents() {
  const { user } = useAuth()
  const db = useDB()
  const navigate = useNavigate()
  const [trackFilter, setTrackFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [search, setSearch] = useState('')

  const rows = useMemo(() => {
    if (!user?.orgId) return []
    const orgId = user.orgId
    // Access rule: only students of the instructor's own org.
    const orgEnrollments = db.enrollments.filter((e) => e.orgId === orgId)
    const studentIds = [...new Set(orgEnrollments.map((e) => e.studentId))]

    return studentIds.map((studentId) => {
      const student = db.users.find((u) => u.id === studentId && u.orgId === orgId)
      const enrollments = orgEnrollments.filter((e) => e.studentId === studentId)
      const tracks = enrollments.map((e) => {
        const track = db.tracks.find((t) => t.id === e.trackId)
        const readiness = computeReadiness(db, studentId, e.trackId)
        const progress = db.progress.find((p) => p.studentId === studentId && p.trackId === e.trackId)
        const trackLessons = db.lessons.filter((l) =>
          db.modules.some((m) => m.id === l.moduleId && m.trackId === e.trackId),
        )
        const lessonsDone = progress
          ? progress.completedLessonIds.filter((id) => trackLessons.some((l) => l.id === id)).length
          : 0
        return { track, readiness, progress, lessonsDone, lessonsTotal: trackLessons.length }
      })
      const attempts = db.attempts.filter((a) => a.studentId === studentId && a.scorePct != null)
      const practiceTestAvg = attempts.length
        ? Math.round(attempts.reduce((s, a) => s + (a.scorePct ?? 0), 0) / attempts.length)
        : null
      const questionsCompleted = db.progress
        .filter((p) => p.studentId === studentId)
        .reduce((s, p) => s + p.practiceQuestionsCompleted, 0)
      const lastActivity = db.progress
        .filter((p) => p.studentId === studentId)
        .map((p) => p.lastActivityAt)
        .sort()
        .pop() ?? student?.lastActiveAt ?? null
      // Overall status: worst status across enrolled tracks
      const worst = tracks
        .map((t) => t.readiness)
        .sort((a, b) => a.score - b.score)[0]
      return { student, tracks, practiceTestAvg, questionsCompleted, lastActivity, worst }
    }).filter((r) => r.student)
  }, [db, user?.orgId])

  if (!user || !user.orgId) return null

  const orgTracks = db.tracks.filter((t) =>
    db.enrollments.some((e) => e.orgId === user.orgId && e.trackId === t.id),
  )

  const filtered = rows.filter((r) => {
    if (trackFilter !== 'all' && !r.tracks.some((t) => t.track?.id === trackFilter)) return false
    if (statusFilter !== 'all' && r.worst?.status !== statusFilter) return false
    if (search.trim() && !r.student!.name.toLowerCase().includes(search.trim().toLowerCase())) return false
    return true
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Students</h1>
        <p className="text-sm text-muted-foreground">
          Enrolled students in your organization. Select a row to open the student detail view.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Cohort roster</CardTitle>
          <CardDescription>{filtered.length} of {rows.length} students shown</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={trackFilter} onValueChange={setTrackFilter}>
              <SelectTrigger className="w-full sm:w-56">
                <SelectValue placeholder="All tracks" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All tracks</SelectItem>
                {orgTracks.map((t) => (
                  <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-52">
                <SelectValue placeholder="All statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                {Object.entries(READINESS_STATUS_LABELS).map(([value, label]) => (
                  <SelectItem key={value} value={value}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Track readiness</TableHead>
                <TableHead className="text-right">Practice Qs</TableHead>
                <TableHead>Assignments</TableHead>
                <TableHead className="text-right">Test avg</TableHead>
                <TableHead>Last activity</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="py-8 text-center text-sm text-muted-foreground">
                    No students match the current filters.
                  </TableCell>
                </TableRow>
              )}
              {filtered.map((r) => (
                <TableRow
                  key={r.student!.id}
                  className="cursor-pointer"
                  onClick={() => navigate(`/app/instructor/student/${r.student!.id}`)}
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-accent text-xs text-accent-foreground">
                          {initials(r.student!.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{r.student!.name}</p>
                        <p className="truncate text-xs text-muted-foreground">{r.student!.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {r.tracks.map((t) => (
                        <div key={t.track?.id} className="flex items-center gap-2 text-xs">
                          <span className="w-28 truncate text-muted-foreground">{t.track?.shortName}</span>
                          <span className="tabular-nums font-medium">{t.readiness.score}%</span>
                          <ReadinessBadge status={t.readiness.status} className="hidden xl:inline-flex" />
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right tabular-nums">{r.questionsCompleted}</TableCell>
                  <TableCell>
                    <div className="space-y-1 text-xs">
                      {r.tracks.map((t) => (
                        <p key={t.track?.id} className="tabular-nums">
                          {t.lessonsDone}/{t.lessonsTotal} lessons
                        </p>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {r.practiceTestAvg != null ? pct(r.practiceTestAvg) : '—'}
                  </TableCell>
                  <TableCell>{r.lastActivity ? formatDate(r.lastActivity) : '—'}</TableCell>
                  <TableCell>{r.worst && <ReadinessBadge status={r.worst.status as ReadinessStatus} />}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
