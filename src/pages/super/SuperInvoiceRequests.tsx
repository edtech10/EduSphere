// Super Admin — invoice requests & demo requests pipeline.
import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { useDB, updateDB, logAction, uid } from '@/lib/db'
import { useAuth } from '@/lib/auth'
import { PLANS, getPlan } from '@/data/plans'
import { formatUSD, formatDate } from '@/lib/format'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from '@/components/ui/dialog'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import type { DemoRequest, InvoiceRequest, PlanId } from '@/lib/types'

const INV_STATUSES: InvoiceRequest['status'][] = ['new', 'contacted', 'approved', 'closed']
const DEMO_STATUSES: DemoRequest['status'][] = ['new', 'scheduled', 'completed']

function invStatusBadge(status: InvoiceRequest['status']) {
  const styles: Record<string, string> = {
    new: 'bg-blue-50 text-blue-700 border-blue-200',
    contacted: 'bg-amber-50 text-amber-700 border-amber-200',
    approved: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    closed: 'bg-slate-100 text-slate-600 border-slate-200',
  }
  return <Badge variant="outline" className={styles[status]}>{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>
}

function demoStatusBadge(status: DemoRequest['status']) {
  const styles: Record<string, string> = {
    new: 'bg-blue-50 text-blue-700 border-blue-200',
    scheduled: 'bg-amber-50 text-amber-700 border-amber-200',
    completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  }
  return <Badge variant="outline" className={styles[status]}>{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>
}

export default function SuperInvoiceRequests() {
  const db = useDB()
  const { user } = useAuth()
  const actor = { id: user?.id ?? 'user_super', name: user?.name ?? 'Platform Admin' }

  const [reviewReq, setReviewReq] = useState<InvoiceRequest | null>(null)
  const [reviewDemo, setReviewDemo] = useState<DemoRequest | null>(null)
  const [provisionReq, setProvisionReq] = useState<InvoiceRequest | null>(null)
  const [provisionForm, setProvisionForm] = useState({
    orgName: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    planId: 'program' as PlanId,
    seats: 0,
  })

  const setInvStatus = (req: InvoiceRequest, status: InvoiceRequest['status']) => {
    if (req.status === status) return
    updateDB((d) => {
      const r = d.invoiceRequests.find((x) => x.id === req.id)
      if (r) r.status = status
    })
    logAction(
      actor.id, actor.name, 'invoice_request.status_changed',
      `Invoice request from ${req.schoolName} changed from ${req.status} to ${status}`,
      null,
    )
    setReviewReq((cur) => (cur && cur.id === req.id ? { ...cur, status } : cur))
  }

  const setDemoStatus = (req: DemoRequest, status: DemoRequest['status']) => {
    if (req.status === status) return
    updateDB((d) => {
      const r = d.demoRequests.find((x) => x.id === req.id)
      if (r) r.status = status
    })
    logAction(
      actor.id, actor.name, 'demo_request.status_changed',
      `Demo request from ${req.schoolName} changed from ${req.status} to ${status}`,
      null,
    )
    setReviewDemo((cur) => (cur && cur.id === req.id ? { ...cur, status } : cur))
  }

  const openProvision = (req: InvoiceRequest) => {
    setProvisionForm({
      orgName: req.schoolName,
      contactName: req.contactName,
      contactEmail: req.email,
      contactPhone: req.phone,
      planId: req.planId,
      seats: req.studentCount,
    })
    setProvisionReq(req)
  }

  const provisionOrg = () => {
    if (!provisionReq) return
    const req = provisionReq
    const plan = getPlan(provisionForm.planId)
    const now = new Date()
    const nowIso = now.toISOString()
    const periodEnd = new Date(now.getTime() + 365 * 86400000).toISOString()
    const orgId = uid('org')
    const adminId = uid('user')
    const subId = uid('sub')
    const seats = Math.max(0, Math.floor(provisionForm.seats))

    updateDB((d) => {
      d.organizations.push({
        id: orgId,
        name: provisionForm.orgName.trim(),
        type: 'career_academy',
        contactName: provisionForm.contactName.trim(),
        contactEmail: provisionForm.contactEmail.trim(),
        contactPhone: provisionForm.contactPhone.trim(),
        createdAt: nowIso,
        status: 'active',
      })
      d.users.push({
        id: adminId,
        orgId,
        name: provisionForm.contactName.trim() || provisionForm.contactEmail.trim(),
        email: provisionForm.contactEmail.trim(),
        password: 'demo123',
        role: 'school_admin',
        createdAt: nowIso,
      })
      d.subscriptions.push({
        id: subId,
        orgId,
        planId: provisionForm.planId,
        status: 'active',
        seats,
        currentPeriodStart: nowIso,
        currentPeriodEnd: periodEnd,
        stripeCustomerId: `cus_invoice_${orgId}`,
        stripeSubscriptionId: null,
        cancelAtPeriodEnd: false,
        createdAt: nowIso,
      })
      d.payments.unshift({
        id: uid('pay'),
        orgId,
        subscriptionId: subId,
        amount: plan.priceAnnual ?? 0,
        currency: 'usd',
        status: 'succeeded',
        method: 'invoice',
        description: 'Invoice-approved license',
        createdAt: nowIso,
        stripePaymentIntentId: null,
      })
      d.seatLicenses.push({ id: uid('seat'), orgId, totalSeats: seats, usedSeats: 0, updatedAt: nowIso })
      const r = d.invoiceRequests.find((x) => x.id === req.id)
      if (r) r.status = 'approved'
    })
    logAction(
      actor.id, actor.name, 'license.manual_created',
      `Invoice-approved ${plan.name} license (${seats} seats) provisioned for ${provisionForm.orgName.trim()}`,
      orgId,
    )
    setProvisionReq(null)
    setReviewReq((cur) => (cur && cur.id === req.id ? { ...cur, status: 'approved' } : cur))
  }

  const invoiceRequests = [...db.invoiceRequests].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  const demoRequests = [...db.demoRequests].sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Invoice &amp; demo requests</h1>
        <p className="text-sm text-muted-foreground">
          Inbound interest in certification readiness programs — review, progress, and provision.
        </p>
      </div>

      <Tabs defaultValue="invoice">
        <TabsList>
          <TabsTrigger value="invoice">
            Invoice requests ({db.invoiceRequests.length})
          </TabsTrigger>
          <TabsTrigger value="demo">
            Demo requests ({db.demoRequests.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="invoice" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Invoice requests</CardTitle>
              <CardDescription>Schools requesting invoice-based licensing</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>School</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Desired tracks</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Timeline</TableHead>
                    <TableHead>Notes</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoiceRequests.map((r) => (
                    <TableRow key={r.id} className="cursor-pointer" onClick={() => setReviewReq(r)}>
                      <TableCell className="font-medium">{r.schoolName}</TableCell>
                      <TableCell>
                        <div className="text-sm">{r.contactName}</div>
                        <div className="text-xs text-muted-foreground">{r.email}</div>
                        <div className="text-xs text-muted-foreground">{r.phone}</div>
                      </TableCell>
                      <TableCell className="tabular-nums">{r.studentCount}</TableCell>
                      <TableCell>
                        <div className="flex max-w-[220px] flex-wrap gap-1">
                          {r.desiredTracks.map((t) => (
                            <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{getPlan(r.planId).name}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{r.timeline}</TableCell>
                      <TableCell className="max-w-[180px] truncate text-sm text-muted-foreground">
                        {r.notes}
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                        {formatDate(r.createdAt)}
                      </TableCell>
                      <TableCell>{invStatusBadge(r.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="outline" size="sm"
                          onClick={(e) => { e.stopPropagation(); setReviewReq(r) }}
                        >
                          Review
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {invoiceRequests.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={10} className="text-center text-muted-foreground">
                        No invoice requests.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demo" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Demo requests</CardTitle>
              <CardDescription>Schools that asked for a walkthrough</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>School</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {demoRequests.map((r) => (
                    <TableRow key={r.id} className="cursor-pointer" onClick={() => setReviewDemo(r)}>
                      <TableCell className="font-medium">{r.schoolName}</TableCell>
                      <TableCell>
                        <div className="text-sm">{r.contactName}</div>
                        <div className="text-xs text-muted-foreground">{r.email}</div>
                        <div className="text-xs text-muted-foreground">{r.phone}</div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{r.role}</TableCell>
                      <TableCell>{r.studentCount}</TableCell>
                      <TableCell className="max-w-[240px] truncate text-sm text-muted-foreground">
                        {r.message}
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                        {formatDate(r.createdAt)}
                      </TableCell>
                      <TableCell>{demoStatusBadge(r.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="outline" size="sm"
                          onClick={(e) => { e.stopPropagation(); setReviewDemo(r) }}
                        >
                          Review
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {demoRequests.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center text-muted-foreground">
                        No demo requests.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Invoice request review dialog */}
      <Dialog open={!!reviewReq} onOpenChange={(open) => !open && setReviewReq(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{reviewReq?.schoolName}</DialogTitle>
            <DialogDescription>Invoice request details and pipeline status</DialogDescription>
          </DialogHeader>
          {reviewReq && (
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                <div><span className="text-muted-foreground">Contact:</span> {reviewReq.contactName}</div>
                <div><span className="text-muted-foreground">Email:</span> {reviewReq.email}</div>
                <div><span className="text-muted-foreground">Phone:</span> {reviewReq.phone}</div>
                <div><span className="text-muted-foreground">Students:</span> {reviewReq.studentCount}</div>
                <div><span className="text-muted-foreground">Plan:</span> {getPlan(reviewReq.planId).name}</div>
                <div><span className="text-muted-foreground">Timeline:</span> {reviewReq.timeline}</div>
                <div className="col-span-2">
                  <span className="text-muted-foreground">Submitted:</span> {formatDate(reviewReq.createdAt)}
                </div>
              </div>
              <div>
                <p className="mb-1 text-muted-foreground">Desired tracks</p>
                <div className="flex flex-wrap gap-1">
                  {reviewReq.desiredTracks.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-1 text-muted-foreground">Notes</p>
                <p className="rounded-md bg-slate-50 p-3">{reviewReq.notes || '—'}</p>
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select
                  value={reviewReq.status}
                  onValueChange={(v) => setInvStatus(reviewReq, v as InvoiceRequest['status'])}
                >
                  <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {INV_STATUSES.map((s) => (
                      <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setReviewReq(null)}>Close</Button>
            {reviewReq?.status === 'approved' && (
              <Button onClick={() => openProvision(reviewReq)}>
                <CheckCircle2 className="mr-2 h-4 w-4" /> Create organization &amp; license
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Provision dialog */}
      <Dialog open={!!provisionReq} onOpenChange={(open) => !open && setProvisionReq(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create organization &amp; license</DialogTitle>
            <DialogDescription>
              Provisions the organization, a school admin account (password <span className="font-mono">demo123</span>),
              an active invoice-paid subscription, and the seat license.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="prov-name">Organization name</Label>
              <Input
                id="prov-name"
                value={provisionForm.orgName}
                onChange={(e) => setProvisionForm({ ...provisionForm, orgName: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="prov-contact">Contact name</Label>
                <Input
                  id="prov-contact"
                  value={provisionForm.contactName}
                  onChange={(e) => setProvisionForm({ ...provisionForm, contactName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prov-phone">Phone</Label>
                <Input
                  id="prov-phone"
                  value={provisionForm.contactPhone}
                  onChange={(e) => setProvisionForm({ ...provisionForm, contactPhone: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="prov-email">Admin email</Label>
              <Input
                id="prov-email"
                type="email"
                value={provisionForm.contactEmail}
                onChange={(e) => setProvisionForm({ ...provisionForm, contactEmail: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Plan</Label>
                <Select
                  value={provisionForm.planId}
                  onValueChange={(v) => setProvisionForm({ ...provisionForm, planId: v as PlanId })}
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {PLANS.map((p) => (
                      <SelectItem key={p.id} value={p.id}>
                        {p.name}{p.priceAnnual != null ? ` — ${formatUSD(p.priceAnnual)}/yr` : ' — custom'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="prov-seats">Seats</Label>
                <Input
                  id="prov-seats"
                  type="number"
                  min={0}
                  value={provisionForm.seats}
                  onChange={(e) => setProvisionForm({ ...provisionForm, seats: Number(e.target.value) })}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setProvisionReq(null)}>Cancel</Button>
            <Button
              onClick={provisionOrg}
              disabled={!provisionForm.orgName.trim() || !provisionForm.contactEmail.trim()}
            >
              Provision organization
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Demo request review dialog */}
      <Dialog open={!!reviewDemo} onOpenChange={(open) => !open && setReviewDemo(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{reviewDemo?.schoolName}</DialogTitle>
            <DialogDescription>Demo request details and pipeline status</DialogDescription>
          </DialogHeader>
          {reviewDemo && (
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                <div><span className="text-muted-foreground">Contact:</span> {reviewDemo.contactName}</div>
                <div><span className="text-muted-foreground">Role:</span> {reviewDemo.role}</div>
                <div><span className="text-muted-foreground">Email:</span> {reviewDemo.email}</div>
                <div><span className="text-muted-foreground">Phone:</span> {reviewDemo.phone}</div>
                <div><span className="text-muted-foreground">Students:</span> {reviewDemo.studentCount}</div>
                <div><span className="text-muted-foreground">Submitted:</span> {formatDate(reviewDemo.createdAt)}</div>
              </div>
              <div>
                <p className="mb-1 text-muted-foreground">Message</p>
                <p className="rounded-md bg-slate-50 p-3">{reviewDemo.message || '—'}</p>
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select
                  value={reviewDemo.status}
                  onValueChange={(v) => setDemoStatus(reviewDemo, v as DemoRequest['status'])}
                >
                  <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {DEMO_STATUSES.map((s) => (
                      <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setReviewDemo(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
