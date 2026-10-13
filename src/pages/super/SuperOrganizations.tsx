// Super Admin — organization management: seats, manual licenses, suspend/reactivate, create org.
import { useState } from 'react'
import { Building2, Plus, Pencil, CreditCard, Ban, RotateCcw } from 'lucide-react'
import { useDB, updateDB, logAction, uid } from '@/lib/db'
import { useAuth } from '@/lib/auth'
import { PLANS, getPlan } from '@/data/plans'
import { formatUSD, formatDate } from '@/lib/format'
import { SubscriptionBadge } from '@/components/StatusBadge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from '@/components/ui/dialog'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import type { Organization, PlanId } from '@/lib/types'

const ORG_TYPE_LABELS: Record<Organization['type'], string> = {
  career_academy: 'Career academy',
  workforce_program: 'Workforce program',
  private_training: 'Private training',
  school_district: 'School district',
}

export default function SuperOrganizations() {
  const db = useDB()
  const { user } = useAuth()
  const actor = { id: user?.id ?? 'user_super', name: user?.name ?? 'Platform Admin' }

  const [seatOrg, setSeatOrg] = useState<Organization | null>(null)
  const [seatValue, setSeatValue] = useState(0)
  const [licenseOrg, setLicenseOrg] = useState<Organization | null>(null)
  const [licensePlan, setLicensePlan] = useState<PlanId>('starter')
  const [licenseSeats, setLicenseSeats] = useState(10)
  const [newOrgOpen, setNewOrgOpen] = useState(false)
  const [newOrg, setNewOrg] = useState({
    name: '',
    type: 'career_academy' as Organization['type'],
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  })

  const subFor = (orgId: string) => db.subscriptions.find((s) => s.orgId === orgId)
  const seatFor = (orgId: string) => db.seatLicenses.find((s) => s.orgId === orgId)
  const studentCount = (orgId: string) =>
    db.users.filter((u) => u.orgId === orgId && u.role === 'student').length

  const openSeats = (org: Organization) => {
    setSeatOrg(org)
    setSeatValue(seatFor(org.id)?.totalSeats ?? 0)
  }

  const saveSeats = () => {
    if (!seatOrg) return
    const seats = Math.max(0, Math.floor(seatValue))
    updateDB((d) => {
      const lic = d.seatLicenses.find((s) => s.orgId === seatOrg.id)
      if (lic) {
        lic.totalSeats = seats
        if (lic.usedSeats > seats) lic.usedSeats = seats
        lic.updatedAt = new Date().toISOString()
      } else {
        d.seatLicenses.push({
          id: uid('seat'),
          orgId: seatOrg.id,
          totalSeats: seats,
          usedSeats: 0,
          updatedAt: new Date().toISOString(),
        })
      }
      const sub = d.subscriptions.find((s) => s.orgId === seatOrg.id)
      if (sub) sub.seats = seats
    })
    logAction(actor.id, actor.name, 'seats.adjusted', `Seat total set to ${seats} for ${seatOrg.name}`, seatOrg.id)
    setSeatOrg(null)
  }

  const saveManualLicense = () => {
    if (!licenseOrg) return
    const seats = Math.max(0, Math.floor(licenseSeats))
    const plan = getPlan(licensePlan)
    const now = new Date()
    const periodEnd = new Date(now.getTime() + 365 * 86400000)
    updateDB((d) => {
      const existing = d.subscriptions.find((s) => s.orgId === licenseOrg.id)
      if (existing) {
        existing.planId = licensePlan
        existing.status = 'active'
        existing.seats = seats
        existing.currentPeriodStart = now.toISOString()
        existing.currentPeriodEnd = periodEnd.toISOString()
        existing.stripeSubscriptionId = null
        existing.cancelAtPeriodEnd = false
      } else {
        d.subscriptions.push({
          id: uid('sub'),
          orgId: licenseOrg.id,
          planId: licensePlan,
          status: 'active',
          seats,
          currentPeriodStart: now.toISOString(),
          currentPeriodEnd: periodEnd.toISOString(),
          stripeCustomerId: `cus_manual_${licenseOrg.id}`,
          stripeSubscriptionId: null,
          cancelAtPeriodEnd: false,
          createdAt: now.toISOString(),
        })
      }
      const lic = d.seatLicenses.find((s) => s.orgId === licenseOrg.id)
      if (lic) {
        lic.totalSeats = seats
        if (lic.usedSeats > seats) lic.usedSeats = seats
        lic.updatedAt = now.toISOString()
      } else {
        d.seatLicenses.push({ id: uid('seat'), orgId: licenseOrg.id, totalSeats: seats, usedSeats: 0, updatedAt: now.toISOString() })
      }
      const org = d.organizations.find((o) => o.id === licenseOrg.id)
      if (org) org.status = 'active'
      d.payments.unshift({
        id: uid('pay'),
        orgId: licenseOrg.id,
        subscriptionId: existing?.id ?? d.subscriptions.find((s) => s.orgId === licenseOrg.id)?.id ?? null,
        amount: plan.priceAnnual ?? 0,
        currency: 'usd',
        status: 'succeeded',
        method: 'invoice',
        description: `${plan.name} — manual license (invoice)`,
        createdAt: now.toISOString(),
        stripePaymentIntentId: null,
      })
    })
    logAction(
      actor.id, actor.name, 'license.manual_created',
      `Manual ${plan.name} license (${seats} seats) activated for ${licenseOrg.name}`,
      licenseOrg.id,
    )
    setLicenseOrg(null)
  }

  const toggleSuspend = (org: Organization) => {
    const next = org.status === 'suspended' ? 'active' : 'suspended'
    updateDB((d) => {
      const o = d.organizations.find((x) => x.id === org.id)
      if (o) o.status = next
    })
    logAction(
      actor.id, actor.name,
      next === 'suspended' ? 'org.suspended' : 'org.reactivated',
      `${org.name} ${next === 'suspended' ? 'suspended' : 'reactivated'}`,
      org.id,
    )
  }

  const createOrg = () => {
    if (!newOrg.name.trim() || !newOrg.contactEmail.trim()) return
    const orgId = uid('org')
    const now = new Date().toISOString()
    updateDB((d) => {
      d.organizations.push({
        id: orgId,
        name: newOrg.name.trim(),
        type: newOrg.type,
        contactName: newOrg.contactName.trim(),
        contactEmail: newOrg.contactEmail.trim(),
        contactPhone: newOrg.contactPhone.trim(),
        createdAt: now,
        status: 'active',
      })
      d.seatLicenses.push({ id: uid('seat'), orgId, totalSeats: 0, usedSeats: 0, updatedAt: now })
    })
    logAction(actor.id, actor.name, 'org.created', `Organization ${newOrg.name.trim()} created`, orgId)
    setNewOrg({ name: '', type: 'career_academy', contactName: '', contactEmail: '', contactPhone: '' })
    setNewOrgOpen(false)
  }

  const statusBadge = (status: Organization['status']) => {
    const styles: Record<string, string> = {
      active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      pending: 'bg-amber-50 text-amber-700 border-amber-200',
      suspended: 'bg-red-50 text-red-700 border-red-200',
    }
    return (
      <Badge variant="outline" className={styles[status]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Organizations</h1>
          <p className="text-sm text-muted-foreground">
            All schools and training providers on the platform.
          </p>
        </div>
        <Button onClick={() => setNewOrgOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> New organization
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">All organizations</CardTitle>
          <CardDescription>{db.organizations.length} organizations</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Organization</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Subscription</TableHead>
                <TableHead>Seats</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {db.organizations.map((org) => {
                const sub = subFor(org.id)
                const seat = seatFor(org.id)
                return (
                  <TableRow key={org.id}>
                    <TableCell className="font-medium">{org.name}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {ORG_TYPE_LABELS[org.type]}
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{org.contactName}</div>
                      <div className="text-xs text-muted-foreground">{org.contactEmail}</div>
                    </TableCell>
                    <TableCell>{sub ? getPlan(sub.planId).name : '—'}</TableCell>
                    <TableCell>
                      {sub ? <SubscriptionBadge status={sub.status} /> : <span className="text-muted-foreground">—</span>}
                    </TableCell>
                    <TableCell className="tabular-nums">
                      {seat ? `${seat.usedSeats}/${seat.totalSeats}` : '—'}
                    </TableCell>
                    <TableCell className="tabular-nums">{studentCount(org.id)}</TableCell>
                    <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                      {formatDate(org.createdAt)}
                    </TableCell>
                    <TableCell>{statusBadge(org.status)}</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="sm" onClick={() => openSeats(org)}>
                          <Pencil className="mr-1 h-3.5 w-3.5" /> Seats
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => { setLicenseOrg(org); setLicensePlan(sub?.planId ?? 'starter'); setLicenseSeats(seat?.totalSeats ?? 10) }}>
                          <CreditCard className="mr-1 h-3.5 w-3.5" /> License
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={org.status === 'suspended' ? 'text-emerald-700' : 'text-red-600'}
                          onClick={() => toggleSuspend(org)}
                        >
                          {org.status === 'suspended'
                            ? <><RotateCcw className="mr-1 h-3.5 w-3.5" /> Reactivate</>
                            : <><Ban className="mr-1 h-3.5 w-3.5" /> Suspend</>}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Adjust seats dialog */}
      <Dialog open={!!seatOrg} onOpenChange={(open) => !open && setSeatOrg(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adjust seats — {seatOrg?.name}</DialogTitle>
            <DialogDescription>
              Set the total number of student seats licensed to this organization.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <Label htmlFor="seat-total">Total seats</Label>
            <Input
              id="seat-total"
              type="number"
              min={0}
              value={seatValue}
              onChange={(e) => setSeatValue(Number(e.target.value))}
            />
            <p className="text-xs text-muted-foreground">
              Currently in use: {seatOrg ? seatFor(seatOrg.id)?.usedSeats ?? 0 : 0} seats
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSeatOrg(null)}>Cancel</Button>
            <Button onClick={saveSeats}>Save seats</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Manual license dialog */}
      <Dialog open={!!licenseOrg} onOpenChange={(open) => !open && setLicenseOrg(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manual license — {licenseOrg?.name}</DialogTitle>
            <DialogDescription>
              Create or update an invoice-paid subscription. Use this for purchase-order and invoice
              workflows that bypass card checkout.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Plan</Label>
              <Select value={licensePlan} onValueChange={(v) => setLicensePlan(v as PlanId)}>
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
              <Label htmlFor="license-seats">Seats</Label>
              <Input
                id="license-seats"
                type="number"
                min={0}
                value={licenseSeats}
                onChange={(e) => setLicenseSeats(Number(e.target.value))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setLicenseOrg(null)}>Cancel</Button>
            <Button onClick={saveManualLicense}>Activate license</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* New organization dialog */}
      <Dialog open={newOrgOpen} onOpenChange={setNewOrgOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" /> New organization
            </DialogTitle>
            <DialogDescription>
              Creates the organization with a zero-seat license. Add a subscription afterwards.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="org-name">Organization name</Label>
              <Input
                id="org-name"
                value={newOrg.name}
                onChange={(e) => setNewOrg({ ...newOrg, name: e.target.value })}
                placeholder="e.g. Riverside Career Academy"
              />
            </div>
            <div className="space-y-2">
              <Label>Type</Label>
              <Select
                value={newOrg.type}
                onValueChange={(v) => setNewOrg({ ...newOrg, type: v as Organization['type'] })}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {Object.entries(ORG_TYPE_LABELS).map(([value, label]) => (
                    <SelectItem key={value} value={value}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-contact">Contact name</Label>
              <Input
                id="org-contact"
                value={newOrg.contactName}
                onChange={(e) => setNewOrg({ ...newOrg, contactName: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="org-email">Contact email</Label>
                <Input
                  id="org-email"
                  type="email"
                  value={newOrg.contactEmail}
                  onChange={(e) => setNewOrg({ ...newOrg, contactEmail: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="org-phone">Contact phone</Label>
                <Input
                  id="org-phone"
                  value={newOrg.contactPhone}
                  onChange={(e) => setNewOrg({ ...newOrg, contactPhone: e.target.value })}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setNewOrgOpen(false)}>Cancel</Button>
            <Button onClick={createOrg} disabled={!newOrg.name.trim() || !newOrg.contactEmail.trim()}>
              Create organization
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
