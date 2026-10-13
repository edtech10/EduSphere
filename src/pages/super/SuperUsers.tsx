// Super Admin — platform-wide user management.
import { useMemo, useState } from 'react'
import { Plus, KeyRound, Trash2, Search } from 'lucide-react'
import { useDB, updateDB, logAction, uid } from '@/lib/db'
import { useAuth } from '@/lib/auth'
import { formatDate } from '@/lib/format'
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
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import type { Role, User } from '@/lib/types'

const ROLE_LABELS: Record<Role, string> = {
  visitor: 'Visitor',
  student: 'Student',
  instructor: 'Instructor',
  school_admin: 'School Admin',
  super_admin: 'Super Admin',
}

const ROLE_STYLES: Record<Role, string> = {
  visitor: 'bg-slate-100 text-slate-600 border-slate-200',
  student: 'bg-blue-50 text-blue-700 border-blue-200',
  instructor: 'bg-violet-50 text-violet-700 border-violet-200',
  school_admin: 'bg-amber-50 text-amber-700 border-amber-200',
  super_admin: 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

const EDITABLE_ROLES: Role[] = ['student', 'instructor', 'school_admin', 'super_admin']

export default function SuperUsers() {
  const db = useDB()
  const { user: me } = useAuth()
  const actor = { id: me?.id ?? 'user_super', name: me?.name ?? 'Platform Admin' }

  const [roleFilter, setRoleFilter] = useState<'all' | Role>('all')
  const [orgFilter, setOrgFilter] = useState<string>('all')
  const [search, setSearch] = useState('')
  const [resetUser, setResetUser] = useState<User | null>(null)
  const [newPassword, setNewPassword] = useState('')
  const [deleteUser, setDeleteUser] = useState<User | null>(null)
  const [createOpen, setCreateOpen] = useState(false)
  const [createError, setCreateError] = useState('')
  const [createForm, setCreateForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student' as Role,
    orgId: '' as string,
  })

  const orgName = (id: string | null) =>
    id ? db.organizations.find((o) => o.id === id)?.name ?? '—' : '—'

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return db.users.filter((u) => {
      if (roleFilter !== 'all' && u.role !== roleFilter) return false
      if (orgFilter !== 'all' && u.orgId !== orgFilter) return false
      if (q && !u.name.toLowerCase().includes(q) && !u.email.toLowerCase().includes(q)) return false
      return true
    })
  }, [db.users, roleFilter, orgFilter, search])

  const changeRole = (target: User, role: Role) => {
    if (target.role === role) return
    updateDB((d) => {
      const u = d.users.find((x) => x.id === target.id)
      if (u) u.role = role
    })
    logAction(
      actor.id, actor.name, 'user.role_changed',
      `${target.name} role changed from ${target.role} to ${role}`,
      target.orgId,
    )
  }

  const resetPassword = () => {
    if (!resetUser || !newPassword.trim()) return
    updateDB((d) => {
      const u = d.users.find((x) => x.id === resetUser.id)
      if (u) u.password = newPassword.trim()
    })
    logAction(actor.id, actor.name, 'user.password_reset', `Password reset for ${resetUser.name} (${resetUser.email})`, resetUser.orgId)
    setResetUser(null)
    setNewPassword('')
  }

  const deactivate = () => {
    if (!deleteUser) return
    const target = deleteUser
    updateDB((d) => {
      d.users = d.users.filter((u) => u.id !== target.id)
      d.enrollments = d.enrollments.filter((e) => e.studentId !== target.id)
      d.progress = d.progress.filter((p) => p.studentId !== target.id)
      d.attempts = d.attempts.filter((a) => a.studentId !== target.id)
      if (target.role === 'student' && target.orgId) {
        const lic = d.seatLicenses.find((s) => s.orgId === target.orgId)
        if (lic && lic.usedSeats > 0) {
          lic.usedSeats -= 1
          lic.updatedAt = new Date().toISOString()
        }
      }
    })
    logAction(actor.id, actor.name, 'user.deactivated', `User ${target.name} (${target.email}) deactivated and removed`, target.orgId)
    setDeleteUser(null)
  }

  const createUser = () => {
    const email = createForm.email.trim().toLowerCase()
    if (!createForm.name.trim() || !email || !createForm.password.trim()) return
    if (db.users.some((u) => u.email.toLowerCase() === email)) {
      setCreateError('An account with this email already exists.')
      return
    }
    const orgId = createForm.role === 'super_admin' ? null : createForm.orgId || null
    if (createForm.role !== 'super_admin' && !orgId) {
      setCreateError('Select an organization for this role.')
      return
    }
    if (createForm.role === 'student' && orgId) {
      const lic = db.seatLicenses.find((s) => s.orgId === orgId)
      if (!lic || lic.usedSeats >= lic.totalSeats) {
        setCreateError('No seats available in this organization. Adjust seats first.')
        return
      }
    }
    const nowIso = new Date().toISOString()
    updateDB((d) => {
      d.users.push({
        id: uid('user'),
        orgId,
        name: createForm.name.trim(),
        email,
        password: createForm.password.trim(),
        role: createForm.role,
        createdAt: nowIso,
        lastActiveAt: nowIso,
      })
      if (createForm.role === 'student' && orgId) {
        const lic = d.seatLicenses.find((s) => s.orgId === orgId)
        if (lic) {
          lic.usedSeats += 1
          lic.updatedAt = nowIso
        }
      }
    })
    logAction(actor.id, actor.name, 'user.created', `Created ${createForm.role} account for ${createForm.name.trim()} (${email})`, orgId)
    setCreateForm({ name: '', email: '', password: '', role: 'student', orgId: '' })
    setCreateError('')
    setCreateOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Users</h1>
          <p className="text-sm text-muted-foreground">
            All accounts across every organization ({db.users.length} total).
          </p>
        </div>
        <Button onClick={() => setCreateOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Create user
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">All users</CardTitle>
          <CardDescription>{filtered.length} shown</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search name or email…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-64 pl-8"
              />
            </div>
            <Select value={roleFilter} onValueChange={(v) => setRoleFilter(v as 'all' | Role)}>
              <SelectTrigger className="w-[160px]"><SelectValue placeholder="Role" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All roles</SelectItem>
                {EDITABLE_ROLES.map((r) => (
                  <SelectItem key={r} value={r}>{ROLE_LABELS[r]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={orgFilter} onValueChange={setOrgFilter}>
              <SelectTrigger className="w-[220px]"><SelectValue placeholder="Organization" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All organizations</SelectItem>
                {db.organizations.map((o) => (
                  <SelectItem key={o.id} value={o.id}>{o.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Organization</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((u) => (
                <TableRow key={u.id}>
                  <TableCell className="font-medium">{u.name}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{u.email}</TableCell>
                  <TableCell className="text-sm">{orgName(u.orgId)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={ROLE_STYLES[u.role]}>
                        {ROLE_LABELS[u.role]}
                      </Badge>
                      <Select value={u.role} onValueChange={(v) => changeRole(u, v as Role)}>
                        <SelectTrigger className="h-7 w-[120px] text-xs"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {EDITABLE_ROLES.map((r) => (
                            <SelectItem key={r} value={r} className="text-xs">{ROLE_LABELS[r]}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                    {formatDate(u.createdAt)}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                    {u.lastActiveAt ? formatDate(u.lastActiveAt) : '—'}
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost" size="sm"
                        onClick={() => { setResetUser(u); setNewPassword('') }}
                      >
                        <KeyRound className="mr-1 h-3.5 w-3.5" /> Reset password
                      </Button>
                      <Button
                        variant="ghost" size="sm" className="text-red-600"
                        disabled={u.id === me?.id}
                        onClick={() => setDeleteUser(u)}
                      >
                        <Trash2 className="mr-1 h-3.5 w-3.5" /> Deactivate
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground">
                    No users match these filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Reset password dialog */}
      <Dialog open={!!resetUser} onOpenChange={(open) => !open && setResetUser(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reset password — {resetUser?.name}</DialogTitle>
            <DialogDescription>
              Demo environment: sets the password directly in the local data layer. In production
              this would trigger a secure reset email.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <Label htmlFor="new-password">New password</Label>
            <Input
              id="new-password"
              type="text"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="e.g. demo123"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setResetUser(null)}>Cancel</Button>
            <Button onClick={resetPassword} disabled={!newPassword.trim()}>Reset password</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Deactivate confirm */}
      <AlertDialog open={!!deleteUser} onOpenChange={(open) => !open && setDeleteUser(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Deactivate {deleteUser?.name}?</AlertDialogTitle>
            <AlertDialogDescription>
              This removes the user along with their enrollments and progress records. If they are a
              student, one seat is released back to the organization. This cannot be undone in the demo.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={deactivate}>Deactivate user</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Create user dialog */}
      <Dialog open={createOpen} onOpenChange={(open) => { setCreateOpen(open); if (!open) setCreateError('') }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create user</DialogTitle>
            <DialogDescription>
              Add an account to any organization. Student accounts consume one seat.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cu-name">Name</Label>
              <Input
                id="cu-name"
                value={createForm.name}
                onChange={(e) => setCreateForm({ ...createForm, name: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cu-email">Email</Label>
                <Input
                  id="cu-email"
                  type="email"
                  value={createForm.email}
                  onChange={(e) => setCreateForm({ ...createForm, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cu-password">Password</Label>
                <Input
                  id="cu-password"
                  value={createForm.password}
                  onChange={(e) => setCreateForm({ ...createForm, password: e.target.value })}
                  placeholder="demo123"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Role</Label>
                <Select
                  value={createForm.role}
                  onValueChange={(v) => setCreateForm({ ...createForm, role: v as Role })}
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {EDITABLE_ROLES.map((r) => (
                      <SelectItem key={r} value={r}>{ROLE_LABELS[r]}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {createForm.role !== 'super_admin' && (
                <div className="space-y-2">
                  <Label>Organization</Label>
                  <Select
                    value={createForm.orgId}
                    onValueChange={(v) => setCreateForm({ ...createForm, orgId: v })}
                  >
                    <SelectTrigger><SelectValue placeholder="Select organization" /></SelectTrigger>
                    <SelectContent>
                      {db.organizations.map((o) => (
                        <SelectItem key={o.id} value={o.id}>{o.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            {createForm.role === 'student' && createForm.orgId && (
              <p className="text-xs text-muted-foreground">
                Seats in use: {(() => {
                  const lic = db.seatLicenses.find((s) => s.orgId === createForm.orgId)
                  return lic ? `${lic.usedSeats}/${lic.totalSeats}` : '0/0'
                })()}
              </p>
            )}
            {createError && <p className="text-sm text-red-600">{createError}</p>}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateOpen(false)}>Cancel</Button>
            <Button
              onClick={createUser}
              disabled={!createForm.name.trim() || !createForm.email.trim() || !createForm.password.trim()}
            >
              Create user
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
