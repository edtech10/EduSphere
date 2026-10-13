// School admin settings — org profile, security notes, demo data reset.
import { useState } from 'react'
import { Building2, Pencil, ShieldCheck, Trash2 } from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { logAction, updateDB, useDB } from '@/lib/db'
import { formatDate } from '@/lib/format'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import type { Organization } from '@/lib/types'

const ORG_TYPE_LABELS: Record<Organization['type'], string> = {
  career_academy: 'Career academy',
  workforce_program: 'Workforce program',
  private_training: 'Private training provider',
  school_district: 'School district',
}

export default function AdminSettings() {
  const { user } = useAuth()
  const db = useDB()

  const [editOpen, setEditOpen] = useState(false)
  const [editName, setEditName] = useState('')
  const [editType, setEditType] = useState<Organization['type']>('career_academy')
  const [editContactName, setEditContactName] = useState('')
  const [editContactEmail, setEditContactEmail] = useState('')
  const [editContactPhone, setEditContactPhone] = useState('')

  if (!user || !user.orgId) return null
  const orgId = user.orgId

  // Access rule: school admins manage only their own organization.
  const org = db.organizations.find((o) => o.id === orgId)
  if (!org) return null

  const subscription = db.subscriptions.find((s) => s.orgId === orgId)
  const orgEnrollments = db.enrollments.filter((e) => e.orgId === orgId)
  const studentCount = new Set(orgEnrollments.map((e) => e.studentId)).size
  const instructorCount = db.users.filter((u) => u.orgId === orgId && u.role === 'instructor').length

  const openEdit = () => {
    setEditName(org.name)
    setEditType(org.type)
    setEditContactName(org.contactName)
    setEditContactEmail(org.contactEmail)
    setEditContactPhone(org.contactPhone)
    setEditOpen(true)
  }

  const handleSaveProfile = () => {
    updateDB((d) => {
      const o = d.organizations.find((x) => x.id === orgId)
      if (!o) return
      o.name = editName.trim() || o.name
      o.type = editType
      o.contactName = editContactName.trim()
      o.contactEmail = editContactEmail.trim()
      o.contactPhone = editContactPhone.trim()
    })
    logAction(user.id, user.name, 'org.profile_updated', `Updated organization profile for ${org.name}`, orgId)
    setEditOpen(false)
  }

  const handleResetDemoData = () => {
    updateDB((d) => {
      const studentIds = new Set(
        d.enrollments.filter((e) => e.orgId === orgId).map((e) => e.studentId),
      )
      d.enrollments = d.enrollments.filter((e) => e.orgId !== orgId)
      d.progress = d.progress.filter((p) => !studentIds.has(p.studentId))
      d.attempts = d.attempts.filter((a) => !studentIds.has(a.studentId))
      const seat = d.seatLicenses.find((s) => s.orgId === orgId)
      if (seat) {
        seat.usedSeats = 0
        seat.updatedAt = new Date().toISOString()
      }
    })
    logAction(user.id, user.name, 'org.demo_data_reset',
      `Reset demo learning data for ${org.name} (enrollments, progress, attempts cleared)`, orgId)
  }

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">Organization profile and preferences.</p>
      </div>

      {/* Org profile */}
      <Card>
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div>
            <CardTitle className="text-base">Organization profile</CardTitle>
            <CardDescription>How your organization appears across EduSphere USA</CardDescription>
          </div>
          <Dialog open={editOpen} onOpenChange={setEditOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" onClick={openEdit}>
                <Pencil className="mr-2 h-3.5 w-3.5" /> Edit
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit organization profile</DialogTitle>
                <DialogDescription>Changes apply immediately and are audit-logged.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="org-name">Organization name</Label>
                  <Input id="org-name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Organization type</Label>
                  <Select value={editType} onValueChange={(v) => setEditType(v as Organization['type'])}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {Object.entries(ORG_TYPE_LABELS).map(([value, label]) => (
                        <SelectItem key={value} value={value}>{label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-contact-name">Primary contact name</Label>
                  <Input id="org-contact-name" value={editContactName} onChange={(e) => setEditContactName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-contact-email">Primary contact email</Label>
                  <Input id="org-contact-email" type="email" value={editContactEmail} onChange={(e) => setEditContactEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-contact-phone">Primary contact phone</Label>
                  <Input id="org-contact-phone" value={editContactPhone} onChange={(e) => setEditContactPhone(e.target.value)} />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setEditOpen(false)}>Cancel</Button>
                <Button onClick={handleSaveProfile}>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Name</span>
            <span className="font-medium">{org.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Type</span>
            <span>{ORG_TYPE_LABELS[org.type]}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Primary contact</span>
            <span>{org.contactName} · {org.contactEmail}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Phone</span>
            <span className="tabular-nums">{org.contactPhone || '—'}</span>
          </div>
        </CardContent>
      </Card>

      {/* Organization info */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-base">Organization info</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Member since</span>
            <span>{formatDate(org.createdAt)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Enrolled students</span>
            <span className="tabular-nums">{studentCount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Instructors</span>
            <span className="tabular-nums">{instructorCount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Billing period ends</span>
            <span className="tabular-nums">
              {subscription ? formatDate(subscription.currentPeriodEnd) : '—'}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Data & security */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-base">Data & security</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            Access is role-based: instructors see only their own cohort's learning data and never
            see billing; school admins manage only their own organization and cannot edit global
            course content.
          </p>
          <p>
            Sensitive actions (invites, removals, plan changes, profile edits) are recorded in the
            organization audit log. Payments are processed securely by Stripe — EduSphere USA never
            stores card numbers.
          </p>
        </CardContent>
      </Card>

      {/* Danger zone */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-base text-red-700">Danger zone</CardTitle>
          <CardDescription>Irreversible actions for this demo organization</CardDescription>
        </CardHeader>
        <CardContent>
          <Separator className="mb-4" />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Reset my demo organization data</p>
              <p className="text-xs text-muted-foreground">
                Clears all enrollments, student progress, and assessment attempts for {org.name}.
                User accounts, subscription, and billing history are kept.
              </p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm" className="border-red-200 text-red-700 hover:bg-red-50">
                  <Trash2 className="mr-2 h-4 w-4" /> Reset demo data
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Reset demo organization data?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This permanently removes all enrollments, progress records, and assessment
                    attempts for {org.name}, and resets seat usage to zero. This cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleResetDemoData}>Reset data</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
