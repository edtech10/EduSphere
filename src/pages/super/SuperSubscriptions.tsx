// Super Admin — subscriptions & payments console.
import { Download, Webhook } from 'lucide-react'
import { useDB, updateDB, logAction } from '@/lib/db'
import { useAuth } from '@/lib/auth'
import { getPlan } from '@/data/plans'
import { formatUSD, formatDate, downloadCSV } from '@/lib/format'
import { SubscriptionBadge, PaymentStatusBadge } from '@/components/StatusBadge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import type { SubscriptionStatus } from '@/lib/types'

const SUB_STATUSES: SubscriptionStatus[] = ['active', 'trialing', 'past_due', 'canceled', 'incomplete']

export default function SuperSubscriptions() {
  const db = useDB()
  const { user } = useAuth()
  const actor = { id: user?.id ?? 'user_super', name: user?.name ?? 'Platform Admin' }

  const orgName = (id: string) => db.organizations.find((o) => o.id === id)?.name ?? '—'

  const changeStatus = (subId: string, status: SubscriptionStatus) => {
    const sub = db.subscriptions.find((s) => s.id === subId)
    if (!sub || sub.status === status) return
    updateDB((d) => {
      const s = d.subscriptions.find((x) => x.id === subId)
      if (s) s.status = status
    })
    logAction(
      actor.id, actor.name, 'subscription.status_changed',
      `Subscription for ${orgName(sub.orgId)} changed from ${sub.status} to ${status}`,
      sub.orgId,
    )
  }

  const toggleCancelAtPeriodEnd = (subId: string, value: boolean) => {
    const sub = db.subscriptions.find((s) => s.id === subId)
    if (!sub) return
    updateDB((d) => {
      const s = d.subscriptions.find((x) => x.id === subId)
      if (s) s.cancelAtPeriodEnd = value
    })
    logAction(
      actor.id, actor.name, 'subscription.cancel_at_period_end',
      `${orgName(sub.orgId)}: cancel at period end ${value ? 'enabled' : 'disabled'}`,
      sub.orgId,
    )
  }

  const payments = [...db.payments].sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  const exportPayments = () => {
    const rows: (string | number)[][] = [
      ['Date', 'Organization', 'Description', 'Amount (USD)', 'Method', 'Status', 'Failure reason', 'Stripe PaymentIntent'],
      ...payments.map((p) => [
        new Date(p.createdAt).toISOString(),
        orgName(p.orgId),
        p.description,
        p.amount,
        p.method,
        p.status,
        p.failureReason ?? '',
        p.stripePaymentIntentId ?? '',
      ]),
    ]
    downloadCSV('edusphere-payments.csv', rows)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Subscriptions &amp; payments</h1>
        <p className="text-sm text-muted-foreground">
          Manage credential-aligned program licenses, billing status, and payment history.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">All subscriptions</CardTitle>
          <CardDescription>{db.subscriptions.length} subscriptions across all organizations</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Organization</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Seats</TableHead>
                <TableHead>Period end</TableHead>
                <TableHead>ARR value</TableHead>
                <TableHead>Stripe IDs</TableHead>
                <TableHead>Cancel at period end</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {db.subscriptions.map((sub) => {
                const plan = getPlan(sub.planId)
                return (
                  <TableRow key={sub.id}>
                    <TableCell className="font-medium">{orgName(sub.orgId)}</TableCell>
                    <TableCell>{plan.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <SubscriptionBadge status={sub.status} />
                        <Select
                          value={sub.status}
                          onValueChange={(v) => changeStatus(sub.id, v as SubscriptionStatus)}
                        >
                          <SelectTrigger className="h-7 w-[110px] text-xs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {SUB_STATUSES.map((s) => (
                              <SelectItem key={s} value={s} className="text-xs">
                                {s.replace('_', ' ')}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </TableCell>
                    <TableCell className="tabular-nums">{sub.seats}</TableCell>
                    <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                      {formatDate(sub.currentPeriodEnd)}
                    </TableCell>
                    <TableCell className="tabular-nums">
                      {plan.priceAnnual != null ? (
                        <>
                          <div>{formatUSD(plan.priceAnnual)}/yr</div>
                          <div className="text-xs text-muted-foreground">
                            {formatUSD(Math.round(plan.priceAnnual / 12))}/mo
                          </div>
                        </>
                      ) : (
                        <span className="text-muted-foreground">Custom</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="font-mono text-xs text-muted-foreground">
                        <div>{sub.stripeCustomerId}</div>
                        <div>{sub.stripeSubscriptionId ?? 'invoice / manual'}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Switch
                        checked={sub.cancelAtPeriodEnd}
                        onCheckedChange={(v) => toggleCancelAtPeriodEnd(sub.id, v)}
                      />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-base">Payments</CardTitle>
            <CardDescription>{db.payments.length} payments, newest first</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={exportPayments}>
            <Download className="mr-2 h-4 w-4" /> Export payments CSV
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Organization</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Failure reason</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                    {formatDate(p.createdAt)}
                  </TableCell>
                  <TableCell className="font-medium">{orgName(p.orgId)}</TableCell>
                  <TableCell className="max-w-xs truncate text-sm">{p.description}</TableCell>
                  <TableCell className="tabular-nums">{formatUSD(p.amount)}</TableCell>
                  <TableCell className="capitalize text-sm text-muted-foreground">{p.method}</TableCell>
                  <TableCell><PaymentStatusBadge status={p.status} /></TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {p.failureReason ?? '—'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Webhook className="h-4 w-4" /> Stripe webhooks (production flow)
          </CardTitle>
          <CardDescription>How billing state transitions are driven in production</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            In production, Stripe webhooks drive every subscription and payment state transition.
            This demo simulates webhook handling locally — validated webhook payloads would drive
            these same state transitions:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li><span className="font-mono text-xs text-foreground">checkout.session.completed</span> — creates the subscription and records the first succeeded payment.</li>
            <li><span className="font-mono text-xs text-foreground">invoice.payment_failed</span> — marks the subscription <span className="font-mono text-xs text-foreground">past_due</span> and records the failed payment with its reason.</li>
            <li><span className="font-mono text-xs text-foreground">customer.subscription.updated</span> — syncs plan, seats, status, and cancel-at-period-end changes.</li>
            <li><span className="font-mono text-xs text-foreground">customer.subscription.deleted</span> — marks the subscription <span className="font-mono text-xs text-foreground">canceled</span> and freezes seat access.</li>
          </ul>
          <Separator />
          <p>
            Manual status changes above mirror what the webhook handler would apply after signature
            verification against the Stripe event payload.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
