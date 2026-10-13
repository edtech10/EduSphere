import { NavLink, Outlet, useNavigate } from 'react-router'
import {
  LayoutDashboard, Users, Settings, FileBarChart, CreditCard, LogOut,
  BookOpen, ShieldCheck, Building2, ClipboardList, Home,
} from 'lucide-react'
import { Logo } from '@/components/Logo'
import { useAuth } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { initials } from '@/lib/format'
import { cn } from '@/lib/utils'
import type { Role } from '@/lib/types'

interface NavItem {
  label: string
  to: string
  icon: typeof LayoutDashboard
  end?: boolean
}

const ROLE_NAV: Record<Exclude<Role, 'visitor'>, NavItem[]> = {
  student: [
    { label: 'Dashboard', to: '/app/student', icon: LayoutDashboard, end: true },
    { label: 'My Tracks', to: '/app/student/tracks', icon: BookOpen },
    { label: 'My Report', to: '/app/student/report', icon: FileBarChart },
  ],
  instructor: [
    { label: 'Cohort Dashboard', to: '/app/instructor', icon: LayoutDashboard, end: true },
    { label: 'Students', to: '/app/instructor/students', icon: Users },
    { label: 'Cohort Report', to: '/app/instructor/report', icon: FileBarChart },
  ],
  school_admin: [
    { label: 'Dashboard', to: '/app/admin', icon: LayoutDashboard, end: true },
    { label: 'Users & Seats', to: '/app/admin/users', icon: Users },
    { label: 'Reports', to: '/app/admin/reports', icon: FileBarChart },
    { label: 'Billing', to: '/app/admin/billing', icon: CreditCard },
    { label: 'Settings', to: '/app/admin/settings', icon: Settings },
  ],
  super_admin: [
    { label: 'Overview', to: '/app/super', icon: LayoutDashboard, end: true },
    { label: 'Organizations', to: '/app/super/organizations', icon: Building2 },
    { label: 'Subscriptions', to: '/app/super/subscriptions', icon: CreditCard },
    { label: 'Invoice Requests', to: '/app/super/invoice-requests', icon: ClipboardList },
    { label: 'Users', to: '/app/super/users', icon: Users },
    { label: 'Content', to: '/app/super/content', icon: BookOpen },
    { label: 'Audit Log', to: '/app/super/audit', icon: ShieldCheck },
    { label: 'Settings', to: '/app/super/settings', icon: Settings },
  ],
}

const ROLE_LABELS: Record<Role, string> = {
  visitor: 'Visitor',
  student: 'Student',
  instructor: 'Instructor',
  school_admin: 'School Admin',
  super_admin: 'Super Admin',
}

export function AppLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  if (!user) return null
  const nav = ROLE_NAV[user.role as Exclude<Role, 'visitor'>] ?? []

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="hidden w-60 shrink-0 flex-col border-r bg-white md:flex no-print">
        <div className="flex h-16 items-center border-b px-4">
          <Logo />
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:bg-slate-100 hover:text-foreground',
                )
              }
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t p-3">
          <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground" asChild>
            <NavLink to="/">
              <Home className="h-4 w-4" /> Marketing site
            </NavLink>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-muted-foreground"
            onClick={() => {
              logout()
              navigate('/')
            }}
          >
            <LogOut className="h-4 w-4" /> Sign out
          </Button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 sm:px-6 no-print">
          <div className="flex items-center gap-3">
            <div className="md:hidden">
              <Logo />
            </div>
            <Badge variant="secondary" className="hidden md:inline-flex">
              {ROLE_LABELS[user.role]}
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium leading-tight">{user.name}</p>
              <p className="text-xs text-muted-foreground leading-tight">{user.email}</p>
            </div>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                {initials(user.name)}
              </AvatarFallback>
            </Avatar>
            <div className="md:hidden">
              <Button variant="outline" size="sm" onClick={() => { logout(); navigate('/') }}>
                Sign out
              </Button>
            </div>
          </div>
        </header>
        {/* Mobile nav */}
        <nav className="flex gap-1 overflow-x-auto border-b bg-white px-3 py-2 md:hidden no-print">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium',
                  isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <main className="flex-1 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
