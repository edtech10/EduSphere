// School admin dashboard — scoped to the admin's own organization.
import { Link } from 'react-router'
import {
  BadgeCheck, Armchair, BookOpen, Gauge, UserPlus, Download, FileBarChart, AlertTriangle,
} from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { useDB } from '@/lib/db'
import { computeReadiness } from '@/lib/scoring'
import { getPlan } from '@/data/plans'
import { downloadCSV, formatDate, initials } from '@/lib/format'
import { READINESS_STATUS_LABELS } from '@/lib/types'
import { StatCard } from '@/components/StatCard'
import { SubscriptionBadge } from '@/components/StatusBadge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function AdminDashboard() {
  const { user } = useAuth()
  const db = useDB()
  if (!user || !user.orgId) return null
  const orgId = user.orgId

  // Access rule: everything below is filtered to the admin's own org.
  const org = db.organizations.find((o) => o.id === orgId)
  const subscription = db.subscriptions.find((s) => s.orgId === orgId)
  const seats = db.seatLicenses.find((s) => s.orgId === orgId)
  const orgEnrollments = db.enrollments.filter((e) => e.orgId === orgId)
  const studentIds = [...new Set(orgEnrollments.map((e) => e.studentId))]
  const instructors = db.users.filter((u) => u.orgId === orgId && u.role === 'instructor')

  const readinessRows = orgEnrollments.map((e) => ({
    enrollment: e,
    readiness: computeReadiness(db, e.studentId, e.trackId),
  }))
  const avgReadiness = readinessRows.length
    ? Math.round(readinessRows.reduce((s, r) => s + r.readiness.score, 0) / readinessRows.length)
    : 0
  const activeTrackIds = [...new Set(orgEnrollments.map((e) => e.trackId))]

  const perTrack = activeTrackIds.map((trackId) => {
    const track = db.tracks.find((t) => t.id === trackId)
    const rows = readinessRows.filter((r) => r.enrollment.trackId === trackId)
    const avg = rows.length ? Math.round(rows.reduce((s, r) => s + r.readiness.score, 0) / rows.length) : 0
    return { track, avg, count: rows.length }
  })

  // No subscription → activation card
  if (!subscription) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
            <span className="rounded-full bg-accent p-3 text-accent-foreground">
              <BadgeCheck className="h-6 w-6" />
            </span>
            <h2 className="text-xl font-semibold">Activate your cohort license</h2>
            <p className="text-sm text-muted-foreground">
              {org?.name ?? 'Your organization'} does not have an EduSphere USA subscription yet.
              Choose a cohort plan to unlock certification readiness tracking for your students.
            </p>
            <Button asChild>
              <Link to="/checkout?plan=field">View plans & activate</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const plan = getPlan(subscription.planId)

  const exportRoster = () => {
    const rows: (string | number)[][] = [['Name', 'Email', 'Track', 'Readiness', 'Status']]
    for (const r of readinessRows) {
      const student = db.users.find((u) => u.id === r.enrollment.studentId)
      const track = db.tracks.find((t) => t.id === r.enrollment.trackId)
      rows.push([
        student?.name ?? '',
        student?.email ?? '',
        track?.name ?? '',
        r.readiness.score,
        READINESS_STATUS_LABELS[r.readiness.status],
      ])
    }
    downloadCSV(`${org?.name ?? 'organization'}-student-roster.csv`, rows)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          {org?.name} — certification readiness program overview.
        </p>
      </div>

      {subscription.status === 'past_due' && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Payment past due</AlertTitle>
          <AlertDescription>
            Your latest renewal payment failed. Update your payment method to keep student access
            uninterrupted. <Link to="/app/admin/billing" className="font-medium underline">Go to billing</Link>
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="License plan"
          value={plan.name}
          hint={subscription.status}
          icon={<BadgeCheck className="h-4 w-4" />}
        />
        <StatCard
          label="Seats used"
          value={`${seats?.usedSeats ?? 0} / ${seats?.totalSeats ?? subscription.seats}`}
          hint="used / available"
          icon={<Armchair className="h-4 w-4" />}
        />
        <StatCard
          label="Active tracks"
          value={activeTrackIds.length}
          hint={perTrack.map((t) => t.track?.shortName).filter(Boolean).join(' · ')}
          icon={<BookOpen className="h-4 w-4" />}
        />
        <StatCard
          label="Cohort avg readiness"
          value={avgReadiness}
          hint="out of 100"
          icon={<Gauge className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Instructors & students */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">People</CardTitle>
            <CardDescription>{studentIds.length} students · {instructors.length} instructors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {instructors.length === 0 && (
              <p className="text-sm text-muted-foreground">No instructors invited yet.</p>
            )}
            {instructors.map((i) => (
              <div key={i.id} className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-accent text-xs text-accent-foreground">
                    {initials(i.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{i.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{i.title ?? i.email}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Cohort readiness summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Cohort readiness by track</CardTitle>
            <CardDescription>Average readiness score per active track</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {perTrack.length === 0 && (
              <p className="text-sm text-muted-foreground">No tracks assigned yet.</p>
            )}
            {perTrack.map((t) => (
              <div key={t.track?.id} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="truncate">{t.track?.shortName}</span>
                  <span className="tabular-nums font-medium">{t.avg}/100 · {t.count} enrolled</span>
                </div>
                <Progress value={t.avg} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Billing summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Billing status</CardTitle>
            <CardDescription>Subscription for {org?.name}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Plan</span>
              <span className="font-medium">{plan.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Status</span>
              <SubscriptionBadge status={subscription.status} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">
                {subscription.cancelAtPeriodEnd ? 'Ends' : 'Renews'}
              </span>
              <span className="tabular-nums">{formatDate(subscription.currentPeriodEnd)}</span>
            </div>
            {seats && (
              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Seat usage</span>
                  <span className="tabular-nums">{seats.usedSeats}/{seats.totalSeats}</span>
                </div>
                <Progress value={seats.totalSeats > 0 ? (seats.usedSeats / seats.totalSeats) * 100 : 0} className="h-2" />
              </div>
            )}
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link to="/app/admin/billing">Manage billing</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Quick actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/app/admin/users">
              <UserPlus className="mr-2 h-4 w-4" /> Invite users
            </Link>
          </Button>
          <Button variant="outline" onClick={exportRoster}>
            <Download className="mr-2 h-4 w-4" /> Export CSV
          </Button>
          <Button asChild variant="outline">
            <Link to="/app/admin/reports">
              <FileBarChart className="mr-2 h-4 w-4" /> View reports
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
