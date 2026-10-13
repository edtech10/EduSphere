import type { ReactNode } from 'react'
import { Navigate, useLocation, Link } from 'react-router'
import { Lock } from 'lucide-react'
import { useAuth, homeForRole } from '@/lib/auth'
import { getDB } from '@/lib/db'
import type { Role } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

/** Requires a logged-in user with one of the given roles. */
export function RequireRole({ roles, children }: { roles: Role[]; children: ReactNode }) {
  const { user } = useAuth()
  const location = useLocation()
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname + location.search }} replace />
  }
  if (!roles.includes(user.role)) {
    return <Navigate to={homeForRole(user.role)} replace />
  }
  return <>{children}</>
}

/**
 * Paywall: students and instructors need their organization to hold an active
 * license before they can reach paid course content.
 */
export function RequireLicense({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  if (!user || !user.orgId) return <Navigate to="/login" replace />
  const db = getDB()
  const sub = db.subscriptions.find((s) => s.orgId === user.orgId)
  const licensed = sub && (sub.status === 'active' || sub.status === 'trialing' || sub.status === 'past_due')

  if (!licensed) {
    const org = db.organizations.find((o) => o.id === user.orgId)
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-6">
        <Card className="max-w-md">
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
            <span className="rounded-full bg-amber-50 p-3 text-amber-600">
              <Lock className="h-6 w-6" />
            </span>
            <h2 className="text-xl font-semibold">License required</h2>
            <p className="text-sm text-muted-foreground">
              {org ? `${org.name} does not have an active EduSphere USA license yet. ` : ''}
              Paid course content is available once your school activates a cohort license.
              Please contact your school administrator.
            </p>
            <Button asChild variant="outline">
              <Link to="/">Back to site</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }
  return <>{children}</>
}
