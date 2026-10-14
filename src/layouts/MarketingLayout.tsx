import { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/Logo'
import { useAuth, homeForRole } from '@/lib/auth'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Products', to: '/products' },
  { label: 'IRC Catalog', to: '/catalog' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'For Schools', to: '/for-schools' },
  { label: 'For Instructors', to: '/for-instructors' },
]

export function MarketingLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur no-print">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            {user ? (
              <>
                <Button variant="ghost" size="sm" onClick={() => navigate(homeForRole(user.role))}>
                  Dashboard
                </Button>
                <Button variant="outline" size="sm" onClick={logout}>
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/login">Log in</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/demo">Request School Demo</Link>
                </Button>
              </>
            )}
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t bg-white px-4 py-3 md:hidden">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2 flex gap-2 border-t pt-3">
              {user ? (
                <Button size="sm" className="w-full" onClick={() => navigate(homeForRole(user.role))}>
                  Go to dashboard
                </Button>
              ) : (
                <>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/login">Log in</Link>
                  </Button>
                  <Button size="sm" className="w-full" asChild>
                    <Link to="/demo">Request Demo</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-slate-900 text-slate-300 no-print">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
          <div>
            <Logo dark />
            <p className="mt-3 text-sm text-slate-400">
              Certification readiness systems for career-focused schools.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-white" to="/products">Products</Link></li>
              <li><Link className="hover:text-white" to="/catalog">IRC Catalog</Link></li>
              <li><Link className="hover:text-white" to="/products/healthcare-readiness">Healthcare Readiness System</Link></li>
              <li><Link className="hover:text-white" to="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Schools</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-white" to="/for-schools">For Schools</Link></li>
              <li><Link className="hover:text-white" to="/for-instructors">For Instructors</Link></li>
              <li><Link className="hover:text-white" to="/demo">Request a Demo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-white" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:text-white" to="/terms">Terms of Service</Link></li>
              <li><Link className="hover:text-white" to="/accessibility">Accessibility</Link></li>
              <li><Link className="hover:text-white" to="/student-data-protection">Student Data Protection</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} EduSphere USA. Credential-aligned practice content. EduSphere USA is not affiliated with or endorsed by any certification provider.
        </div>
      </footer>
    </div>
  )
}
