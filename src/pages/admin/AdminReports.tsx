// School admin executive report — printable, org-scoped, with CSV export.
import { Printer, Download } from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { useDB } from '@/lib/db'
import { computeReadiness, strongTopics, weakTopics } from '@/lib/scoring'
import { getPlan } from '@/data/plans'
import { downloadCSV, formatDate, pct } from '@/lib/format'
import { READINESS_STATUS_LABELS } from '@/lib/types'
import { ReadinessBadge, SubscriptionBadge } from '@/components/StatusBadge'
import { Button } from '@/components/ui/button'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'

export default function AdminReports() {
  const { user } = useAuth()
  const db = useDB()
  if (!user || !user.orgId) return null
  const orgId = user.orgId

  // Access rule: this report only ever includes the admin's own org.
  const org = db.organizations.find((o) => o.id === orgId)
  const subscription = db.subscriptions.find((s) => s.orgId === orgId)
  const seats = db.seatLicenses.find((s) => s.orgId === orgId)
  const plan = subscription ? getPlan(subscription.planId) : null
  const orgEnrollments = db.enrollments.filter((e) => e.orgId === orgId)

  const rows = orgEnrollments.map((e) => {
    const student = db.users.find((u) => u.id === e.studentId && u.orgId === orgId)
    const track = db.tracks.find((t) => t.id === e.trackId)
    const readiness = computeReadiness(db, e.studentId, e.trackId)
    const progress = db.progress.find((p) => p.studentId === e.studentId && p.trackId === e.trackId)
    const strong = strongTopics(progress).slice(0, 2)
    const weak = weakTopics(progress).slice(0, 2)
    const remediation = weak.length > 0
      ? `Re-teach ${weak[0].topic} in small groups`
      : readiness.components.moduleCompletion < 100
        ? 'Continue module completion'
        : 'Proceed to timed final review'
    const trackAttempts = db.attempts.filter(
      (a) => a.studentId === e.studentId && a.trackId === e.trackId && a.scorePct != null,
    )
    const latestAttempt = trackAttempts
      .slice()
      .sort((a, b) => (b.completedAt ?? b.startedAt).localeCompare(a.completedAt ?? a.startedAt))[0]
    return {
      enrollment: e, student, track, readiness, progress, strong, weak, remediation,
      attemptCount: trackAttempts.length,
      latestScore: latestAttempt?.scorePct ?? null,
    }
  }).filter((r) => r.student && r.track)

  const trackIds = [...new Set(orgEnrollments.map((e) => e.trackId))]
  const perTrack = trackIds.map((trackId) => {
    const track = db.tracks.find((t) => t.id === trackId)
    const trackRows = rows.filter((r) => r.enrollment.trackId === trackId)
    const avg = trackRows.length
      ? Math.round(trackRows.reduce((s, r) => s + r.readiness.score, 0) / trackRows.length)
      : 0
    const atRisk = trackRows.filter((r) => r.readiness.status === 'needs_support').length
    const avgCompletion = trackRows.length
      ? Math.round(trackRows.reduce((s, r) => s + r.readiness.components.moduleCompletion, 0) / trackRows.length)
      : 0
    return { track, enrolled: trackRows.length, avg, atRisk, avgCompletion }
  })

  const exportCSV = () => {
    const csvRows: (string | number)[][] = [[
      'Name', 'Email', 'Track', 'Completion %', 'Diagnostic score', 'Readiness score',
      'Strong topics', 'Weak topics', 'Recommended remediation', 'Practice tests', 'Latest test score', 'Status',
    ]]
    for (const r of rows) {
      csvRows.push([
        r.student!.name,
        r.student!.email,
        r.track!.name,
        r.readiness.components.moduleCompletion,
        r.progress?.diagnosticBaselinePct ?? '',
        r.readiness.score,
        r.strong.map((t) => t.topic).join('; '),
        r.weak.map((t) => t.topic).join('; '),
        r.remediation,
        r.attemptCount,
        r.latestScore ?? '',
        READINESS_STATUS_LABELS[r.readiness.status],
      ])
    }
    downloadCSV(`${org?.name ?? 'organization'}-executive-report.csv`, csvRows)
  }

  return (
    <div className="space-y-4">
      <div className="no-print flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Executive summary of your organization's certification readiness program.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={exportCSV}>
            <Download className="mr-2 h-4 w-4" /> Export CSV
          </Button>
          <Button size="sm" onClick={() => window.print()}>
            <Printer className="mr-2 h-4 w-4" /> Print / Save PDF
          </Button>
        </div>
      </div>

      <div className="print-page mx-auto max-w-6xl rounded-lg border bg-white p-8 shadow-sm">
        {/* Header */}
        <header className="border-b pb-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                EduSphere USA
              </p>
              <h1 className="mt-1 text-2xl font-semibold">School Admin Executive Report</h1>
              <p className="mt-1 text-sm text-muted-foreground">{org?.name ?? 'Organization'}</p>
            </div>
            <p className="text-sm text-muted-foreground">{formatDate(new Date().toISOString())}</p>
          </div>
        </header>

        {/* License summary */}
        <section className="mt-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            License summary
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-md border p-3">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Plan</p>
              <p className="mt-1 font-semibold">{plan?.name ?? 'No active plan'}</p>
            </div>
            <div className="rounded-md border p-3">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Seats</p>
              <p className="mt-1 font-semibold tabular-nums">
                {seats ? `${seats.usedSeats} / ${seats.totalSeats}` : '—'}
              </p>
            </div>
            <div className="rounded-md border p-3">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Billing status</p>
              <p className="mt-1">
                {subscription ? <SubscriptionBadge status={subscription.status} /> : '—'}
              </p>
            </div>
            <div className="rounded-md border p-3">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {subscription?.cancelAtPeriodEnd ? 'Access ends' : 'Renews'}
              </p>
              <p className="mt-1 font-semibold tabular-nums">
                {subscription ? formatDate(subscription.currentPeriodEnd) : '—'}
              </p>
            </div>
          </div>
        </section>

        {/* Cohort readiness summary per track */}
        <section className="mt-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Cohort readiness by track
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Track</TableHead>
                <TableHead className="text-right">Enrolled</TableHead>
                <TableHead className="text-right">Avg readiness</TableHead>
                <TableHead className="text-right">At risk</TableHead>
                <TableHead className="text-right">Avg completion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {perTrack.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="py-6 text-center text-sm text-muted-foreground">
                    No enrollments yet.
                  </TableCell>
                </TableRow>
              )}
              {perTrack.map((t) => (
                <TableRow key={t.track?.id}>
                  <TableCell className="font-medium">{t.track?.name}</TableCell>
                  <TableCell className="text-right tabular-nums">{t.enrolled}</TableCell>
                  <TableCell className="text-right tabular-nums">{t.avg}/100</TableCell>
                  <TableCell className="text-right tabular-nums">{t.atRisk}</TableCell>
                  <TableCell className="text-right tabular-nums">{pct(t.avgCompletion)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Full student table */}
        <section className="mt-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Student detail
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Track</TableHead>
                <TableHead className="text-right">Completion</TableHead>
                <TableHead className="text-right">Diagnostic</TableHead>
                <TableHead className="text-right">Readiness</TableHead>
                <TableHead>Strong topics</TableHead>
                <TableHead>Weak topics</TableHead>
                <TableHead>Remediation</TableHead>
                <TableHead className="text-right">Practice tests</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.enrollment.id}>
                  <TableCell className="font-medium">{r.student!.name}</TableCell>
                  <TableCell>{r.track!.shortName}</TableCell>
                  <TableCell className="text-right tabular-nums">
                    {pct(r.readiness.components.moduleCompletion)}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {r.progress?.diagnosticBaselinePct != null ? pct(r.progress.diagnosticBaselinePct) : '—'}
                  </TableCell>
                  <TableCell className="text-right tabular-nums font-medium">{r.readiness.score}</TableCell>
                  <TableCell className="text-xs">
                    {r.strong.length > 0 ? r.strong.map((t) => t.topic).join(', ') : '—'}
                  </TableCell>
                  <TableCell className="text-xs">
                    {r.weak.length > 0 ? r.weak.map((t) => t.topic).join(', ') : '—'}
                  </TableCell>
                  <TableCell className="text-xs">{r.remediation}</TableCell>
                  <TableCell className="text-right tabular-nums">
                    {r.attemptCount}
                    {r.latestScore != null && (
                      <span className="block text-xs text-muted-foreground">
                        latest {pct(r.latestScore)}
                      </span>
                    )}
                  </TableCell>
                  <TableCell><ReadinessBadge status={r.readiness.status} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Footer */}
        <footer className="mt-8 border-t pt-4">
          <p className="text-xs text-muted-foreground">
            EduSphere USA readiness tracking supports instruction and credential-aligned preparation.
            Readiness scores are instructional indicators and do not guarantee certification exam passage.
          </p>
        </footer>
      </div>
    </div>
  )
}
