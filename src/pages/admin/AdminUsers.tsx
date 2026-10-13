// School admin user & seat management — strictly org-scoped.
import { useMemo, useState } from 'react'
import { UserPlus, Trash2 } from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { logAction, updateDB, uid, useDB } from '@/lib/db'
import { computeReadiness } from '@/lib/scoring'
import type { User } from '@/lib/types'
import { formatDate, initials } from '@/lib/format'
import { ReadinessBadge } from '@/components/StatusBadge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog'
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'

export default function AdminUsers() {
  const { user } = useAuth()
  const db = useDB()

  const [inviteOpen, setInviteOpen] = useState(false)
  const [inviteName, setInviteName] = useState('')
  const [inviteEmail, setInviteEmail] = useState('')
  const [inviteRole, setInviteRole] = useState<'student' | 'instructor'>('student')
  const [inviteTrack, setInviteTrack] = useState('')
  const [inviteError, setInviteError] = useState<string | null>(null)

  const orgId = user?.orgId ?? null

  const orgUsers = useMemo(
    () => db.users.filter((u) => u.orgId === orgId),
    [db, orgId],
  )

  if (!user || !orgId) return null

  const seats = db.seatLicenses.find((s) => s.orgId === orgId)
  const totalSeats = seats?.totalSeats ?? 0
  const usedSeats = seats?.usedSeats ?? 0
  const seatsFull = usedSeats >= totalSeats

  const students = orgUsers.filter((u) => u.role === 'student')
  const instructors = orgUsers.filter((u) => u.role === 'instructor')
  const concreteTracks = db.tracks.filter((t) => !t.isBundle)
  const bundle = db.tracks.find((t) => t.isBundle)

  const enrollmentsFor = (studentId: string) =>
    db.enrollments.filter((e) => e.orgId === orgId && e.studentId === studentId)

  const worstStatus = (studentId: string) => {
    const rows = enrollmentsFor(studentId).map((e) => computeReadiness(db, studentId, e.trackId))
    return rows.sort((a, b) => a.score - b.score)[0]
  }

  const lastActivity = (u: User) => {
    const latest = db.progress
      .filter((p) => p.studentId === u.id)
      .map((p) => p.lastActivityAt)
      .sort()
      .pop()
    return latest ?? u.lastActiveAt ?? null
  }

  /** Create enrollments (+ empty progress) for a student on the chosen track selection. */
  const assignTracks = (d: typeof db, studentId: string, selection: string, assignedBy: string) => {
    const trackIds =
      selection === 'bundle'
        ? (bundle?.includedTrackIds ?? concreteTracks.map((t) => t.id))
        : [selection]
    const now = new Date().toISOString()
    for (const trackId of trackIds) {
      const exists = d.enrollments.some(
        (e) => e.orgId === orgId && e.studentId === studentId && e.trackId === trackId,
      )
      if (exists) continue
      d.enrollments.push({
        id: uid('enr'),
        studentId,
        trackId,
        orgId: orgId!,
        assignedBy,
        assignedAt: now,
        status: 'active',
      })
      d.progress.push({
        studentId,
        trackId,
        completedLessonIds: [],
        practiceQuestionsCompleted: 0,
        practiceQuestionsCorrect: 0,
        topicStats: {},
        finalPracticeScorePct: null,
        diagnosticBaselinePct: null,
        lastActivityAt: now,
      })
    }
    return trackIds.length
  }

  const handleInvite = () => {
    setInviteError(null)
    const name = inviteName.trim()
    const email = inviteEmail.trim().toLowerCase()
    if (!name || !email) {
      setInviteError('Name and email are required.')
      return
    }
    if (db.users.some((u) => u.email.toLowerCase() === email)) {
      setInviteError('An account with this email already exists.')
      return
    }
    if (inviteRole === 'student') {
      if (seatsFull) {
        setInviteError('No seats available on your current license.')
        return
      }
      if (!inviteTrack) {
        setInviteError('Please select a track assignment for the student.')
        return
      }
    }

    const newUserId = uid('user')
    updateDB((d) => {
      d.users.push({
        id: newUserId,
        orgId,
        name,
        email,
        password: 'demo123',
        role: inviteRole,
        createdAt: new Date().toISOString(),
      })
      if (inviteRole === 'student') {
        assignTracks(d, newUserId, inviteTrack, user.id)
        const seat = d.seatLicenses.find((s) => s.orgId === orgId)
        if (seat) {
          seat.usedSeats += 1
          seat.updatedAt = new Date().toISOString()
        }
      }
    })
    logAction(
      user.id,
      user.name,
      'user.invited',
      inviteRole === 'student'
        ? `Invited student ${name} (${email}) with track assignment`
        : `Invited instructor ${name} (${email})`,
      orgId,
    )
    setInviteOpen(false)
    setInviteName('')
    setInviteEmail('')
    setInviteRole('student')
    setInviteTrack('')
  }

  const handleAssignTrack = (student: User, selection: string) => {
    if (!selection) return
    updateDB((d) => {
      assignTracks(d, student.id, selection, user.id)
    })
    logAction(user.id, user.name, 'track.assigned', `Assigned track to ${student.name}`, orgId)
  }

  const handleRemove = (target: User) => {
    updateDB((d) => {
      d.enrollments = d.enrollments.filter(
        (e) => !(e.orgId === orgId && e.studentId === target.id),
      )
      d.users = d.users.filter((u) => u.id !== target.id)
      if (target.role === 'student') {
        const seat = d.seatLicenses.find((s) => s.orgId === orgId)
        if (seat && seat.usedSeats > 0) {
          seat.usedSeats -= 1
          seat.updatedAt = new Date().toISOString()
        }
      }
    })
    logAction(user.id, user.name, 'user.removed', `Removed ${target.role} ${target.name} (${target.email})`, orgId)
  }

  const seatPct = totalSeats > 0 ? Math.round((usedSeats / totalSeats) * 100) : 0

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Users & Seats</h1>
          <p className="text-sm text-muted-foreground">
            Manage students and instructors for your organization.
          </p>
        </div>
        <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" /> Invite user
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite user</DialogTitle>
              <DialogDescription>
                New accounts are created with the demo password “demo123”.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              {inviteError && (
                <Alert variant="destructive">
                  <AlertTitle>Unable to invite</AlertTitle>
                  <AlertDescription>{inviteError}</AlertDescription>
                </Alert>
              )}
              {inviteRole === 'student' && seatsFull && (
                <Alert variant="destructive">
                  <AlertTitle>All seats are in use</AlertTitle>
                  <AlertDescription>
                    You have used {usedSeats} of {totalSeats} seats. To adjust seats, contact
                    EduSphere USA support or review your plan on the billing page.
                  </AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="invite-name">Full name</Label>
                <Input
                  id="invite-name"
                  value={inviteName}
                  onChange={(e) => setInviteName(e.target.value)}
                  placeholder="Jordan Smith"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="invite-email">Email</Label>
                <Input
                  id="invite-email"
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="j.smith@school.edu"
                />
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <Select value={inviteRole} onValueChange={(v) => setInviteRole(v as 'student' | 'instructor')}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="instructor">Instructor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {inviteRole === 'student' && (
                <div className="space-y-2">
                  <Label>Track assignment</Label>
                  <Select value={inviteTrack} onValueChange={setInviteTrack}>
                    <SelectTrigger><SelectValue placeholder="Select a track…" /></SelectTrigger>
                    <SelectContent>
                      {concreteTracks.map((t) => (
                        <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>
                      ))}
                      {bundle && (
                        <SelectItem value="bundle">
                          {bundle.name} (all {bundle.includedTrackIds?.length ?? 3} tracks)
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setInviteOpen(false)}>Cancel</Button>
              <Button onClick={handleInvite} disabled={inviteRole === 'student' && seatsFull}>
                Send invite
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Seat usage */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Seat usage</span>
            <span className="tabular-nums text-muted-foreground">
              {usedSeats} of {totalSeats} student seats used ({seatPct}%)
            </span>
          </div>
          <Progress value={seatPct} className="mt-2 h-2" />
          <p className="mt-2 text-xs text-muted-foreground">
            Student seats are consumed on invite and freed when a student is removed.
            Instructor accounts do not consume seats.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="students">
        <TabsList>
          <TabsTrigger value="students">Students ({students.length})</TabsTrigger>
          <TabsTrigger value="instructors">Instructors ({instructors.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="students">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Students</CardTitle>
              <CardDescription>Enrolled students in your organization</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Tracks</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last active</TableHead>
                    <TableHead>Assign track</TableHead>
                    <TableHead />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="py-8 text-center text-sm text-muted-foreground">
                        No students yet. Invite your first student to get started.
                      </TableCell>
                    </TableRow>
                  )}
                  {students.map((s) => {
                    const enrollments = enrollmentsFor(s.id)
                    const status = worstStatus(s.id)
                    return (
                      <TableRow key={s.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-accent text-xs text-accent-foreground">
                                {initials(s.name)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-medium">{s.name}</p>
                              <p className="truncate text-xs text-muted-foreground">{s.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">
                          {enrollments.length === 0
                            ? '—'
                            : enrollments
                                .map((e) => db.tracks.find((t) => t.id === e.trackId)?.shortName ?? e.trackId)
                                .join(', ')}
                        </TableCell>
                        <TableCell>
                          {status ? <ReadinessBadge status={status.status} /> : '—'}
                        </TableCell>
                        <TableCell className="text-sm">
                          {lastActivity(s) ? formatDate(lastActivity(s)!) : '—'}
                        </TableCell>
                        <TableCell>
                          <Select onValueChange={(v) => handleAssignTrack(s, v)}>
                            <SelectTrigger className="h-8 w-44">
                              <SelectValue placeholder="Assign…" />
                            </SelectTrigger>
                            <SelectContent>
                              {concreteTracks.map((t) => (
                                <SelectItem key={t.id} value={t.id}>{t.shortName}</SelectItem>
                              ))}
                              {bundle && <SelectItem value="bundle">All tracks (bundle)</SelectItem>}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="text-right">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-600">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Remove {s.name}?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This removes the student's enrollments and account from your
                                  organization and frees one seat. This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleRemove(s)}>
                                  Remove student
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="instructors">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Instructors</CardTitle>
              <CardDescription>Instructor accounts in your organization</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Last active</TableHead>
                    <TableHead />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {instructors.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="py-8 text-center text-sm text-muted-foreground">
                        No instructors yet. Invite an instructor to share cohort oversight.
                      </TableCell>
                    </TableRow>
                  )}
                  {instructors.map((i) => (
                    <TableRow key={i.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-accent text-xs text-accent-foreground">
                              {initials(i.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium">{i.name}</p>
                            <p className="truncate text-xs text-muted-foreground">{i.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">{i.title ?? '—'}</TableCell>
                      <TableCell className="text-sm">
                        {i.lastActiveAt ? formatDate(i.lastActiveAt) : '—'}
                      </TableCell>
                      <TableCell className="text-right">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Remove {i.name}?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This removes the instructor's account from your organization.
                                Student data and enrollments are not affected.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleRemove(i)}>
                                Remove instructor
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
