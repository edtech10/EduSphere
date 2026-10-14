import { useMemo, useState, type FormEvent } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { ArrowRight, CheckCircle2, CreditCard, Receipt, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { PLANS, getPlan } from '@/data/plans'
import { FIELDS } from '@/data/fields'
import { priceFor, licenseLabel, ENTERPRISE_STARTS_AT, type LicenseTypeId } from '@/data/pricing'
import { useAuth } from '@/lib/auth'
import { useDB, updateDB, logAction, uid } from '@/lib/db'
import { formatUSD, formatDate } from '@/lib/format'
import type { FieldId, PlanId } from '@/lib/types'
import { cn } from '@/lib/utils'

const TIMELINE_OPTIONS = ['Immediately', 'This quarter', 'Next semester (2–3 months)', 'Exploring']

export default function Checkout() {
  const { user } = useAuth()
  const db = useDB()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const planParam = searchParams.get('plan') ?? 'field'
  const planId: PlanId = (['single', 'field', 'program', 'academy', 'enterprise'] as PlanId[]).includes(planParam as PlanId)
    ? (planParam as PlanId)
    : 'field'
  const plan = getPlan(planId)
  const isEnterprise = plan.id === 'enterprise'
  const paidPlans = PLANS.filter((p) => p.id !== 'enterprise')

  // Field selection for field-scoped licenses (single / field / program)
  const [fieldId, setFieldId] = useState<FieldId>('healthcare')
  const price = plan.fieldScoped
    ? priceFor(plan.id as LicenseTypeId, fieldId)
    : plan.priceAnnual
  const priceLabel = plan.fieldScoped
    ? licenseLabel(plan.id as LicenseTypeId, fieldId)
    : plan.name

  const orgId = user?.orgId ?? ''
  const org = db.organizations.find((o) => o.id === orgId)
  const concreteTracks = db.tracks.filter((t) => !t.isBundle && !t.comingSoon)
  const trackGroups = FIELDS.map((f) => ({
    field: f.name,
    color: f.color,
    tracks: concreteTracks.filter((t) => t.category === f.id).map((t) => ({ id: t.id, name: t.name })),
  })).filter((g) => g.tracks.length > 0)

  // Card form state
  const [cardName, setCardName] = useState(user?.name ?? '')
  const [cardNumber, setCardNumber] = useState('4242 4242 4242 4242')
  const [expiry, setExpiry] = useState('12/28')
  const [cvc, setCvc] = useState('424')
  const [billingEmail, setBillingEmail] = useState(user?.email ?? '')
  const [processing, setProcessing] = useState(false)
  const [paid, setPaid] = useState(false)

  // Invoice form state
  const [invSchoolName, setInvSchoolName] = useState(org?.name ?? '')
  const [invContactName, setInvContactName] = useState(user?.name ?? '')
  const [invEmail, setInvEmail] = useState(user?.email ?? '')
  const [invPhone, setInvPhone] = useState('')
  const [invStudentCount, setInvStudentCount] = useState('')
  const [invTracks, setInvTracks] = useState<string[]>([])
  const [invTimeline, setInvTimeline] = useState('')
  const [invNotes, setInvNotes] = useState('')
  const [invSubmitted, setInvSubmitted] = useState(false)
  const [invError, setInvError] = useState<string | null>(null)

  const periodEnd = useMemo(
    () => new Date(Date.now() + 365 * 86400000).toISOString(),
    [],
  )

  // Simulated card checkout is a sales-demo sandbox path only (?demo=1).
  // Public buyers use invoice / PO until the live payment processor is connected.
  const showDemoCard = searchParams.get('demo') === '1'

  const selectPlan = (id: PlanId) => {
    setSearchParams({ plan: id })
    setPaid(false)
    setInvSubmitted(false)
  }

  const handlePay = (e: FormEvent) => {
    e.preventDefault()
    if (!user || !orgId || price === null) return
    setProcessing(true)
    window.setTimeout(() => {
      const now = new Date().toISOString()
      const subId = uid('sub')
      const seats = plan.maxStudents ?? 0
      updateDB((d) => {
        // Replace any existing subscription for this org
        d.subscriptions = d.subscriptions.filter((s) => s.orgId !== orgId)
        d.subscriptions.push({
          id: subId,
          orgId,
          planId: plan.id,
          fieldId: plan.fieldScoped ? fieldId : plan.id === 'academy' ? null : null,
          status: 'active',
          seats,
          currentPeriodStart: now,
          currentPeriodEnd: new Date(Date.now() + 365 * 86400000).toISOString(),
          stripeCustomerId: `cus_${orgId}`,
          stripeSubscriptionId: uid('sub_demo'),
          cancelAtPeriodEnd: false,
          createdAt: now,
        })
        d.payments.push({
          id: uid('pay'),
          orgId,
          subscriptionId: subId,
          amount: price,
          currency: 'usd',
          status: 'succeeded',
          method: 'card',
          description: `${priceLabel} — annual subscription`,
          createdAt: now,
          stripePaymentIntentId: uid('pi'),
        })
        const organization = d.organizations.find((o) => o.id === orgId)
        if (organization) organization.status = 'active'
        const seat = d.seatLicenses.find((s) => s.orgId === orgId)
        if (seat) {
          seat.totalSeats = seats
          seat.updatedAt = now
        } else {
          d.seatLicenses.push({ id: uid('seat'), orgId, totalSeats: seats, usedSeats: 0, updatedAt: now })
        }
      })
      logAction(
        user.id,
        user.name,
        'subscription.created',
        `${priceLabel} subscription activated for ${org?.name ?? orgId} (${seats} seats, card payment)`,
        orgId,
      )
      setProcessing(false)
      setPaid(true)
    }, 1200)
  }

  const toggleTrack = (name: string) => {
    setInvTracks((prev) =>
      prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name],
    )
  }

  const handleInvoice = (e: FormEvent) => {
    e.preventDefault()
    setInvError(null)
    if (!invSchoolName.trim() || !invContactName.trim() || !invEmail.trim() || !invStudentCount || !invTimeline) {
      setInvError('Please complete all required fields.')
      return
    }
    updateDB((d) => {
      d.invoiceRequests.unshift({
        id: uid('inv'),
        schoolName: invSchoolName.trim(),
        contactName: invContactName.trim(),
        email: invEmail.trim(),
        phone: invPhone.trim(),
        studentCount: Number(invStudentCount) || 0,
        desiredTracks: invTracks,
        planId: plan.id,
        timeline: invTimeline,
        notes: invNotes.trim(),
        status: 'new',
        createdAt: new Date().toISOString(),
      })
    })
    logAction(
      user?.id ?? 'visitor',
      user?.name ?? 'Website visitor',
      'invoice_request.submitted',
      `Invoice / PO request submitted for ${invSchoolName.trim()} (${plan.name})`,
      orgId || null,
    )
    setInvSubmitted(true)
  }

  // ---- Success states ----
  if (paid) {
    return (
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-lg px-4 sm:px-6">
          <Card>
            <CardContent className="p-8 text-center">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-7 w-7 text-emerald-600" />
              </span>
              <h1 className="text-2xl font-bold tracking-tight">Subscription active</h1>
              <p className="mt-3 text-muted-foreground">
                Your {priceLabel} license is active with {plan.maxStudents ?? 0} student seats through{' '}
                {formatDate(periodEnd)}. Your organization is ready — invite instructors and students
                to get started.
              </p>
              <Button className="mt-6" size="lg" onClick={() => navigate('/app/admin')}>
                Go to admin dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  if (invSubmitted) {
    return (
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-lg px-4 sm:px-6">
          <Card>
            <CardContent className="p-8 text-center">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-7 w-7 text-emerald-600" />
              </span>
              <h1 className="text-2xl font-bold tracking-tight">Invoice request received</h1>
              <p className="mt-3 text-muted-foreground">
                A licensing specialist will follow up within one business day with a quote and
                procurement paperwork. Your request now appears in the EduSphere USA super admin
                console for processing.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <Button variant="outline" asChild>
                  <Link to="/pricing">Back to pricing</Link>
                </Button>
                {user?.role === 'school_admin' && (
                  <Button onClick={() => navigate('/app/admin')}>Go to admin dashboard</Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Checkout</h1>
          <p className="mt-2 text-muted-foreground">
            Activate your school's {priceLabel} license.
          </p>
        </div>

        {/* Plan switcher */}
        <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {paidPlans.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => selectPlan(p.id)}
              className={cn(
                'rounded-lg border bg-white p-4 text-left transition-colors',
                p.id === plan.id ? 'border-primary ring-1 ring-primary' : 'hover:border-slate-400',
              )}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">{p.name}</p>
                {p.id === plan.id && <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />}
              </div>
              <p className="mt-1 text-sm font-bold tabular-nums">
                {p.priceAnnual !== null
                  ? <>{formatUSD(p.priceAnnual)}<span className="text-xs font-normal text-muted-foreground"> / year</span></>
                  : p.fieldScoped
                    ? (() => {
                        const prices = FIELDS.map((f) => priceFor(p.id as LicenseTypeId, f.id))
                        return `${formatUSD(Math.min(...prices))}–${formatUSD(Math.max(...prices))}`
                      })()
                    : 'Custom'}
              </p>
              <p className="text-xs text-muted-foreground">Up to {p.maxStudents} students{p.fieldScoped ? ' · one field' : ''}</p>
            </button>
          ))}
        </div>
        {!isEnterprise && (
          <button
            type="button"
            onClick={() => selectPlan('enterprise')}
            className="mb-8 w-full rounded-lg border border-dashed bg-white p-3 text-sm text-muted-foreground transition-colors hover:border-slate-400"
          >
            Need multi-campus or custom licensing? <span className="font-medium text-foreground">Switch to Enterprise</span> — invoiced only.
          </button>
        )}

        {/* Selected plan summary */}
        <Card className="mb-8">
          <CardContent className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Selected license</p>
              <p className="mt-1 text-xl font-bold">{priceLabel}</p>
              <p className="text-sm text-muted-foreground">
                {plan.maxStudents !== null ? `Up to ${plan.maxStudents} student seats` : 'Unlimited student seats'} ·{' '}
                {plan.fieldScoped
                  ? plan.id === 'single'
                    ? 'One credential track in the selected field'
                    : 'All tracks in the selected field'
                  : plan.id === 'academy'
                    ? 'Any 4 IRC fields'
                    : 'All credential tracks'}
              </p>
              {plan.fieldScoped && (
                <div className="mt-3 max-w-xs">
                  <Label className="mb-1.5 block text-xs">IRC field</Label>
                  <Select value={fieldId} onValueChange={(v) => setFieldId(v as FieldId)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {FIELDS.map((f) => (
                        <SelectItem key={f.id} value={f.id}>
                          {f.name} — {formatUSD(priceFor(plan.id as LicenseTypeId, f.id))}/yr
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            <div className="text-left sm:text-right">
              {price !== null ? (
                <p className="text-2xl font-bold tabular-nums">{formatUSD(price)}<span className="text-sm font-normal text-muted-foreground"> / year</span></p>
              ) : (
                <p className="text-xl font-bold">From {formatUSD(ENTERPRISE_STARTS_AT)}</p>
              )}
              {price !== null && plan.maxStudents && (
                <p className="text-xs text-muted-foreground">{formatUSD(Math.round(price / plan.maxStudents))} per student at full use</p>
              )}
            </div>
          </CardContent>
        </Card>

        {isEnterprise ? (
          /* Enterprise: invoice path only */
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Receipt className="h-5 w-5 text-primary" /> Request Enterprise licensing
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Enterprise licenses are invoiced. Tell us about your deployment and a licensing
                specialist will prepare a custom quote.
              </p>
            </CardHeader>
            <CardContent>
              <InvoiceForm
                schoolName={invSchoolName} setSchoolName={setInvSchoolName}
                contactName={invContactName} setContactName={setInvContactName}
                email={invEmail} setEmail={setInvEmail}
                phone={invPhone} setPhone={setInvPhone}
                studentCount={invStudentCount} setStudentCount={setInvStudentCount}
                tracks={invTracks} toggleTrack={toggleTrack}
                timeline={invTimeline} setTimeline={setInvTimeline}
                notes={invNotes} setNotes={setInvNotes}
                trackGroups={trackGroups}
                error={invError}
                onSubmit={handleInvoice}
              />
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="invoice">
            {showDemoCard && (
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="invoice" className="gap-2"><Receipt className="h-4 w-4" /> Request invoice / PO</TabsTrigger>
                <TabsTrigger value="card" className="gap-2"><CreditCard className="h-4 w-4" /> Pay by card</TabsTrigger>
              </TabsList>
            )}

            {/* Card payment — demo sandbox only; public schools procure by invoice / PO */}
            {showDemoCard && (
            <TabsContent value="card">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Card payment</CardTitle>
                    <Badge variant="outline" className="border-amber-300 bg-amber-50 text-amber-700">
                      Demo sandbox — simulated, no real charge
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sandbox checkout for guided demos. No real charge is made and no card data is stored.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePay} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on card</Label>
                      <Input id="cardName" value={cardName} onChange={(e) => setCardName(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card number</Label>
                      <Input id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry</Label>
                        <Input id="expiry" value={expiry} onChange={(e) => setExpiry(e.target.value)} placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" value={cvc} onChange={(e) => setCvc(e.target.value)} required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billingEmail">Billing email</Label>
                      <Input id="billingEmail" type="email" value={billingEmail} onChange={(e) => setBillingEmail(e.target.value)} required />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Total due today</p>
                      <p className="text-xl font-bold tabular-nums">{formatUSD(price ?? 0)}</p>
                    </div>
                    <Button type="submit" className="w-full" size="lg" disabled={processing}>
                      <Lock className="mr-2 h-4 w-4" />
                      {processing ? 'Processing…' : `Pay ${formatUSD(price ?? 0)}`}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      No real payment is processed in the demo sandbox. Live card processing will be
                      handled by our payment provider; EduSphere USA will not store credit card data.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            )}

            {/* Invoice / PO */}
            <TabsContent value="invoice">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Request an invoice or purchase order</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    How schools buy: submit this form and we'll send a formal quote, W-9, and vendor
                    packet for your approval workflow. Your organization activates after payment or
                    invoice approval. Card payments open after payment processor onboarding.
                  </p>
                </CardHeader>
                <CardContent>
                  <InvoiceForm
                    schoolName={invSchoolName} setSchoolName={setInvSchoolName}
                    contactName={invContactName} setContactName={setInvContactName}
                    email={invEmail} setEmail={setInvEmail}
                    phone={invPhone} setPhone={setInvPhone}
                    studentCount={invStudentCount} setStudentCount={setInvStudentCount}
                    tracks={invTracks} toggleTrack={toggleTrack}
                    timeline={invTimeline} setTimeline={setInvTimeline}
                    notes={invNotes} setNotes={setInvNotes}
                    trackGroups={trackGroups}
                    error={invError}
                    onSubmit={handleInvoice}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </section>
  )
}

function InvoiceForm({
  schoolName, setSchoolName,
  contactName, setContactName,
  email, setEmail,
  phone, setPhone,
  studentCount, setStudentCount,
  tracks, toggleTrack,
  timeline, setTimeline,
  notes, setNotes,
  trackGroups,
  error,
  onSubmit,
}: {
  schoolName: string; setSchoolName: (v: string) => void
  contactName: string; setContactName: (v: string) => void
  email: string; setEmail: (v: string) => void
  phone: string; setPhone: (v: string) => void
  studentCount: string; setStudentCount: (v: string) => void
  tracks: string[]; toggleTrack: (name: string) => void
  timeline: string; setTimeline: (v: string) => void
  notes: string; setNotes: (v: string) => void
  trackGroups: { field: string; color: string; tracks: { id: string; name: string }[] }[]
  error: string | null
  onSubmit: (e: FormEvent) => void
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="inv-school">School name *</Label>
          <Input id="inv-school" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inv-contact">Contact name *</Label>
          <Input id="inv-contact" value={contactName} onChange={(e) => setContactName(e.target.value)} required />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="inv-email">Email *</Label>
          <Input id="inv-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inv-phone">Phone</Label>
          <Input id="inv-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="inv-count">Number of students *</Label>
          <Input id="inv-count" type="number" min={1} value={studentCount} onChange={(e) => setStudentCount(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label>Purchase timeline *</Label>
          <Select value={timeline} onValueChange={setTimeline}>
            <SelectTrigger><SelectValue placeholder="Select a timeline" /></SelectTrigger>
            <SelectContent>
              {TIMELINE_OPTIONS.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Desired tracks</Label>
        <div className="max-h-80 space-y-4 overflow-y-auto rounded-lg border p-4">
          {trackGroups.map((g) => (
            <div key={g.field}>
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide" style={{ color: g.color }}>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: g.color }} />
                {g.field}
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {g.tracks.map((track) => (
                  <label key={track.id} className="flex items-center gap-2 text-sm">
                    <Checkbox
                      checked={tracks.includes(track.name)}
                      onCheckedChange={() => toggleTrack(track.name)}
                    />
                    {track.name}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="inv-notes">Notes</Label>
        <Textarea
          id="inv-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Procurement requirements, grant funding, purchase order details…"
          rows={4}
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button type="submit" className="w-full" size="lg">Submit invoice request</Button>
    </form>
  )
}
