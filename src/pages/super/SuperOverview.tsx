// Super Admin — platform overview: KPIs, revenue charts, and recent activity.
import { Link } from 'react-router'
import {
  Building2, CreditCard, DollarSign, GraduationCap, AlertTriangle,
  ClipboardList, Presentation, TrendingUp,
} from 'lucide-react'
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell, Legend,
} from 'recharts'
import { useDB } from '@/lib/db'
import { computeReadiness } from '@/lib/scoring'
import { getPlan } from '@/data/plans'
import { priceFor, type LicenseTypeId } from '@/data/pricing'
import { formatUSD, formatDate } from '@/lib/format'
import { StatCard } from '@/components/StatCard'
import { PaymentStatusBadge } from '@/components/StatusBadge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'

const PIE_COLORS = ['#0e7490', '#7c3aed', '#b45309', '#1d4ed8']

export default function SuperOverview() {
  const db = useDB()

  const totalOrgs = db.organizations.length
  const activeSubs = db.subscriptions.filter((s) => s.status === 'active' || s.status === 'trialing')
  const arr = activeSubs.reduce((sum, s) => {
    const plan = getPlan(s.planId)
    // Field-scoped plans price from the field matrix; enterprise is custom
    // and excluded from ARR (reported via collected revenue instead).
    if (plan.fieldScoped) return sum + priceFor(s.planId as LicenseTypeId, s.fieldId ?? 'healthcare')
    return sum + (plan.priceAnnual ?? 0)
  }, 0)
  const revenueCollected = db.payments
    .filter((p) => p.status === 'succeeded')
    .reduce((sum, p) => sum + p.amount, 0)
  const activeStudents = db.users.filter((u) => u.role === 'student').length
  const openInvoiceRequests = db.invoiceRequests.filter((r) => r.status === 'new').length
  const openDemoRequests = db.demoRequests.filter((r) => r.status === 'new').length

  // At-risk orgs: avg readiness across their enrollments < 50, or ≥30% of enrolled
  // students are in needs_support status.
  const atRiskOrgIds = db.organizations
    .filter((org) => {
      const enrollments = db.enrollments.filter((e) => e.orgId === org.id)
      if (enrollments.length === 0) return false
      const scores = enrollments.map((e) => computeReadiness(db, e.studentId, e.trackId))
      const avg = scores.reduce((s, r) => s + r.score, 0) / scores.length
      const needsSupport = scores.filter((r) => r.status === 'needs_support').length
      return avg < 50 || needsSupport / scores.length >= 0.3
    })
    .map((o) => o.id)

  // Revenue by org (succeeded payments)
  const revenueByOrg = db.organizations
    .map((org) => ({
      name: org.name.replace(/ (Career Institute|Allied Health Academy|Workforce School)/, ''),
      revenue: db.payments
        .filter((p) => p.orgId === org.id && p.status === 'succeeded')
        .reduce((s, p) => s + p.amount, 0),
    }))
    .filter((r) => r.revenue > 0)

  // Subscriptions by plan
  const subsByPlan = db.subscriptions.reduce<Record<string, number>>((acc, s) => {
    const name = getPlan(s.planId).name
    acc[name] = (acc[name] ?? 0) + 1
    return acc
  }, {})
  const planPieData = Object.entries(subsByPlan).map(([name, value]) => ({ name, value }))

  const orgName = (id: string | null) =>
    db.organizations.find((o) => o.id === id)?.name ?? '—'

  const latestInvoiceRequests = [...db.invoiceRequests]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 5)
  const failedPayments = db.payments
    .filter((p) => p.status === 'failed')
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  const recentAudit = [...db.auditLogs]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 8)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Platform overview</h1>
        <p className="text-sm text-muted-foreground">
          All organizations, subscriptions, and certification readiness activity across EduSphere USA.
        </p>
      </div>

      {/* KPI cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Organizations"
          value={totalOrgs}
          hint={`${db.organizations.filter((o) => o.status === 'active').length} active`}
          icon={<Building2 className="h-4 w-4" />}
        />
        <StatCard
          label="Active subscriptions"
          value={activeSubs.length}
          hint={`${db.subscriptions.length} total`}
          icon={<CreditCard className="h-4 w-4" />}
        />
        <StatCard
          label="Annual recurring revenue"
          value={formatUSD(arr)}
          hint="Active + trialing plans"
          icon={<TrendingUp className="h-4 w-4" />}
          tone="success"
        />
        <StatCard
          label="Revenue collected"
          value={formatUSD(revenueCollected)}
          hint="Succeeded payments"
          icon={<DollarSign className="h-4 w-4" />}
          tone="success"
        />
        <StatCard
          label="Active students"
          value={activeStudents}
          hint={`${db.enrollments.filter((e) => e.status === 'active').length} enrollments`}
          icon={<GraduationCap className="h-4 w-4" />}
        />
        <StatCard
          label="At-risk cohorts"
          value={atRiskOrgIds.length}
          hint="Avg readiness < 50 or ≥30% need support"
          icon={<AlertTriangle className="h-4 w-4" />}
          tone={atRiskOrgIds.length > 0 ? 'danger' : 'default'}
        />
        <StatCard
          label="Open invoice requests"
          value={openInvoiceRequests}
          hint={`${db.invoiceRequests.length} total`}
          icon={<ClipboardList className="h-4 w-4" />}
          tone={openInvoiceRequests > 0 ? 'warning' : 'default'}
        />
        <StatCard
          label="Open demo requests"
          value={openDemoRequests}
          hint={`${db.demoRequests.length} total`}
          icon={<Presentation className="h-4 w-4" />}
          tone={openDemoRequests > 0 ? 'warning' : 'default'}
        />
      </div>

      {/* Charts */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Revenue by organization</CardTitle>
            <CardDescription>Succeeded payments, all time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueByOrg} margin={{ top: 4, right: 8, left: 8, bottom: 4 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(v: number) => `$${v / 1000}k`} />
                  <Tooltip formatter={(value) => formatUSD(Number(value))} />
                  <Bar dataKey="revenue" fill="#0e7490" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Subscriptions by plan</CardTitle>
            <CardDescription>All subscription statuses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={planPieData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={3}
                  >
                    {planPieData.map((_, i) => (
                      <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tables */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-base">Latest invoice requests</CardTitle>
              <CardDescription>Credential-aligned license inquiries</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/app/super/invoice-requests">View all</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>School</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {latestInvoiceRequests.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium">{r.schoolName}</TableCell>
                    <TableCell>{r.studentCount}</TableCell>
                    <TableCell>{getPlan(r.planId).name}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">{r.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
                {latestInvoiceRequests.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                      No invoice requests yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent failed payments</CardTitle>
            <CardDescription>Require follow-up with the organization</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Organization</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Reason</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {failedPayments.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-medium">{orgName(p.orgId)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {formatUSD(p.amount)}
                        <PaymentStatusBadge status={p.status} />
                      </div>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {p.failureReason ?? '—'}
                    </TableCell>
                  </TableRow>
                ))}
                {failedPayments.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center text-muted-foreground">
                      No failed payments.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-base">Recent audit activity</CardTitle>
            <CardDescription>Latest actions across the platform</CardDescription>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link to="/app/super/audit">Full audit log</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Actor</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Detail</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentAudit.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="whitespace-nowrap text-xs text-muted-foreground">
                    {formatDate(log.createdAt)}{' '}
                    {new Date(log.createdAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                  </TableCell>
                  <TableCell className="font-medium">{log.actorName}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-mono text-xs">{log.action}</Badge>
                  </TableCell>
                  <TableCell className="max-w-md truncate text-sm text-muted-foreground">
                    {log.detail}
                  </TableCell>
                </TableRow>
              ))}
              {recentAudit.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground">
                    No audit entries yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
