// School admin billing — plan management, simulated Stripe payment method, payment history.
import { useState } from 'react'
import { Link } from 'react-router'
import { CreditCard, ShieldCheck, AlertTriangle, BadgeCheck } from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { logAction, updateDB, uid, useDB } from '@/lib/db'
import { PLANS, getPlan } from '@/data/plans'
import type { PlanId } from '@/lib/types'
import { formatDate, formatUSD } from '@/lib/format'
import { PaymentStatusBadge, SubscriptionBadge } from '@/components/StatusBadge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
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

export default function AdminBilling() {
  const { user } = useAuth()
  const db = useDB()

  const [planDialogOpen, setPlanDialogOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<PlanId | ''>('')
  const [cardDialogOpen, setCardDialogOpen] = useState(false)
  const [cardNumber, setCardNumber] = useState('4242 4242 4242 4242')
  const [cardExpiry, setCardExpiry] = useState('12/28')
  const [cardCvc, setCardCvc] = useState('123')
  const [cardSaved, setCardSaved] = useState(false)

  if (!user || !user.orgId) return null
  const orgId = user.orgId

  // Access rule: billing is strictly limited to the admin's own org.
  const org = db.organizations.find((o) => o.id === orgId)
  const subscription = db.subscriptions.find((s) => s.orgId === orgId)
  const payments = db.payments
    .filter((p) => p.orgId === orgId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  if (!subscription) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
            <span className="rounded-full bg-accent p-3 text-accent-foreground">
              <BadgeCheck className="h-6 w-6" />
            </span>
            <h2 className="text-xl font-semibold">No subscription yet</h2>
            <p className="text-sm text-muted-foreground">
              Activate a cohort license to manage billing for {org?.name ?? 'your organization'}.
            </p>
            <Button asChild>
              <Link to="/checkout?plan=field">Choose a plan</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const plan = getPlan(subscription.planId)
  const latestFailure = payments.find((p) => p.status === 'failed')

  const handlePlanChange = () => {
    if (!selectedPlan || selectedPlan === subscription.planId) return
    const target = getPlan(selectedPlan)

    if (selectedPlan === 'enterprise') {
      // Enterprise is custom-priced: create an invoice request instead of a charge.
      updateDB((d) => {
        d.invoiceRequests.unshift({
          id: uid('inv'),
          schoolName: org?.name ?? '',
          contactName: user.name,
          email: user.email,
          phone: org?.contactPhone ?? '',
          studentCount: subscription.seats,
          desiredTracks: [],
          planId: 'enterprise',
          timeline: 'To discuss',
          notes: 'Enterprise plan change requested from the billing page.',
          status: 'new',
          createdAt: new Date().toISOString(),
        })
      })
      logAction(user.id, user.name, 'subscription.plan_changed',
        'Requested Enterprise plan (custom pricing) — invoice request created for sales follow-up', orgId)
      setPlanDialogOpen(false)
      setSelectedPlan('')
      return
    }

    const amount = target.priceAnnual ?? 0
    const seats = target.maxStudents ?? subscription.seats
    updateDB((d) => {
      const sub = d.subscriptions.find((s) => s.orgId === orgId)
      if (sub) {
        sub.planId = selectedPlan
        sub.seats = seats
      }
      const seat = d.seatLicenses.find((s) => s.orgId === orgId)
      if (seat) {
        seat.totalSeats = seats
        seat.updatedAt = new Date().toISOString()
      }
      d.payments.unshift({
        id: uid('pay'),
        orgId,
        subscriptionId: subscription.id,
        amount,
        currency: 'usd',
        status: 'succeeded',
        method: 'card',
        description: `Plan change to ${target.name} (prorated demo charge)`,
        createdAt: new Date().toISOString(),
        stripePaymentIntentId: `pi_demo_${Date.now().toString(36)}`,
      })
    })
    logAction(user.id, user.name, 'subscription.plan_changed',
      `Plan changed from ${plan.name} to ${target.name}`, orgId)
    setPlanDialogOpen(false)
    setSelectedPlan('')
  }

  const handleCancel = () => {
    updateDB((d) => {
      const sub = d.subscriptions.find((s) => s.orgId === orgId)
      if (sub) sub.cancelAtPeriodEnd = true
    })
    logAction(user.id, user.name, 'subscription.cancel_scheduled',
      `Subscription set to cancel at period end (${formatDate(subscription.currentPeriodEnd)})`, orgId)
  }

  const handleResume = () => {
    updateDB((d) => {
      const sub = d.subscriptions.find((s) => s.orgId === orgId)
      if (sub) sub.cancelAtPeriodEnd = false
    })
    logAction(user.id, user.name, 'subscription.resumed', 'Subscription cancellation withdrawn', orgId)
  }

  const handleSaveCard = () => {
    logAction(user.id, user.name, 'billing.payment_method_updated',
      'Payment method updated (card ending 4242, test mode)', orgId)
    setCardDialogOpen(false)
    setCardSaved(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Billing</h1>
        <p className="text-sm text-muted-foreground">
          Subscription and payment management for {org?.name}.
        </p>
      </div>

      {subscription.status === 'past_due' && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Payment past due</AlertTitle>
          <AlertDescription>
            Your renewal payment failed{latestFailure?.failureReason ? ` (${latestFailure.failureReason})` : ''}.
            We automatically retry failed payments, but please update your payment method to avoid
            an interruption to student access.
          </AlertDescription>
        </Alert>
      )}

      {cardSaved && (
        <Alert>
          <ShieldCheck className="h-4 w-4" />
          <AlertTitle>Payment method updated</AlertTitle>
          <AlertDescription>Your new card is now on file for future renewals.</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Current plan */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Current plan</CardTitle>
                <CardDescription>Annual cohort license</CardDescription>
              </div>
              <SubscriptionBadge status={subscription.status} />
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Plan</span>
              <span className="font-medium">{plan.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Annual price</span>
              <span className="font-medium tabular-nums">
                {plan.priceAnnual != null ? formatUSD(plan.priceAnnual) : 'Custom pricing'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Seats</span>
              <span className="tabular-nums">{subscription.seats}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Current period</span>
              <span className="tabular-nums">
                {formatDate(subscription.currentPeriodStart)} – {formatDate(subscription.currentPeriodEnd)}
              </span>
            </div>
            {subscription.cancelAtPeriodEnd && (
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Cancellation scheduled</AlertTitle>
                <AlertDescription>
                  Access ends on {formatDate(subscription.currentPeriodEnd)}. Resume anytime before then.
                </AlertDescription>
              </Alert>
            )}
            <Separator />
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => setPlanDialogOpen(true)}>
                Change plan
              </Button>
              {subscription.cancelAtPeriodEnd ? (
                <Button size="sm" onClick={handleResume}>Resume subscription</Button>
              ) : (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      Cancel subscription
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Cancel subscription?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Your cohort license stays active until {formatDate(subscription.currentPeriodEnd)},
                        then student and instructor access ends. You can resume anytime before that date.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Keep subscription</AlertDialogCancel>
                      <AlertDialogAction onClick={handleCancel}>Cancel at period end</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Payment method */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Payment method</CardTitle>
            <CardDescription>Card on file for renewals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 rounded-md border p-4">
              <span className="rounded-md bg-accent p-2 text-accent-foreground">
                <CreditCard className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-medium tabular-nums">Visa ···· 4242</p>
                <p className="text-xs text-muted-foreground">Expires 12/28 · demo card</p>
              </div>
              <Badge variant="secondary" className="ml-auto">Test mode</Badge>
            </div>
            <Button variant="outline" size="sm" onClick={() => setCardDialogOpen(true)}>
              Update payment method
            </Button>
            <p className="text-xs text-muted-foreground">
              Payments processed securely by Stripe. EduSphere USA never stores card numbers.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Payment history */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Payment history</CardTitle>
          <CardDescription>All charges for {org?.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="py-8 text-center text-sm text-muted-foreground">
                    No payments recorded yet.
                  </TableCell>
                </TableRow>
              )}
              {payments.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="tabular-nums">{formatDate(p.createdAt)}</TableCell>
                  <TableCell className="text-sm">{p.description}</TableCell>
                  <TableCell className="text-right tabular-nums font-medium">{formatUSD(p.amount)}</TableCell>
                  <TableCell className="capitalize">{p.method}</TableCell>
                  <TableCell><PaymentStatusBadge status={p.status} /></TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {p.status === 'failed' ? p.failureReason ?? 'Payment failed' : '—'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Plan change dialog */}
      <Dialog open={planDialogOpen} onOpenChange={setPlanDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change plan</DialogTitle>
            <DialogDescription>
              Plan changes apply immediately with a prorated demo charge to the card on file.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>New plan</Label>
              <Select value={selectedPlan} onValueChange={(v) => setSelectedPlan(v as PlanId)}>
                <SelectTrigger><SelectValue placeholder="Select a plan…" /></SelectTrigger>
                <SelectContent>
                  {PLANS.map((p) => (
                    <SelectItem key={p.id} value={p.id} disabled={p.id === subscription.planId}>
                      {p.name}
                      {p.priceAnnual != null ? ` — ${formatUSD(p.priceAnnual)}/yr` : ' — contact sales'}
                      {p.id === subscription.planId ? ' (current)' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {selectedPlan === 'enterprise' && (
              <Alert>
                <AlertTitle>Custom pricing</AlertTitle>
                <AlertDescription>
                  Enterprise plans are priced per deployment. Confirming creates an invoice request
                  and our sales team will contact you to finalize terms.
                </AlertDescription>
              </Alert>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setPlanDialogOpen(false)}>Cancel</Button>
            <Button onClick={handlePlanChange} disabled={!selectedPlan || selectedPlan === subscription.planId}>
              {selectedPlan === 'enterprise' ? 'Request Enterprise quote' : 'Confirm plan change'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Update card dialog (simulated Stripe form) */}
      <Dialog open={cardDialogOpen} onOpenChange={setCardDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center gap-2">
              <DialogTitle>Update payment method</DialogTitle>
              <Badge variant="secondary">Test mode</Badge>
            </div>
            <DialogDescription>
              Simulated Stripe checkout form — no real charge is made in this demo.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="card-number">Card number</Label>
              <Input
                id="card-number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="4242 4242 4242 4242"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="card-expiry">Expiry</Label>
                <Input
                  id="card-expiry"
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  placeholder="MM/YY"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="card-cvc">CVC</Label>
                <Input
                  id="card-cvc"
                  value={cardCvc}
                  onChange={(e) => setCardCvc(e.target.value)}
                  placeholder="123"
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Payments processed securely by Stripe. EduSphere USA never stores card numbers.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCardDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveCard}>Save card</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
