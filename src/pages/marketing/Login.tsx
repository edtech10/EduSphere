import { useState, type FormEvent } from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useAuth, homeForRole } from '@/lib/auth'
import { getDB } from '@/lib/db'

const DEMO_ACCOUNTS = [
  { label: 'Super admin', email: 'admin@edusphereusa.com' },
  { label: 'School admin', email: 'admin@northview.edu' },
  { label: 'Instructor', email: 'instructor@northview.edu' },
  { label: 'Student', email: 'student@demo.com' },
]

export default function Login() {
  const { user, login, signupSchoolAdmin } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Log in state
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginError, setLoginError] = useState<string | null>(null)

  // Signup state
  const [signupName, setSignupName] = useState('')
  const [signupSchool, setSignupSchool] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupError, setSignupError] = useState<string | null>(null)

  // Reset state
  const [resetEmail, setResetEmail] = useState('')
  const [resetSent, setResetSent] = useState(false)

  if (user) {
    return <Navigate to={homeForRole(user.role)} replace />
  }

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    setLoginError(null)
    const result = login(loginEmail, loginPassword)
    if (!result.ok) {
      setLoginError(result.error ?? 'Login failed.')
      return
    }
    const from = (location.state as { from?: string } | null)?.from
    // login() succeeded — resolve the role from the DB to route correctly.
    const u = getDB().users.find((x) => x.email.toLowerCase() === loginEmail.trim().toLowerCase())
    navigate(from ?? (u ? homeForRole(u.role) : '/'), { replace: true })
  }

  const handleSignup = (e: FormEvent) => {
    e.preventDefault()
    setSignupError(null)
    if (!signupName.trim() || !signupSchool.trim() || !signupEmail.trim() || !signupPassword) {
      setSignupError('Please complete all fields.')
      return
    }
    const result = signupSchoolAdmin({
      name: signupName.trim(),
      email: signupEmail.trim(),
      password: signupPassword,
      schoolName: signupSchool.trim(),
    })
    if (!result.ok) {
      setSignupError(result.error ?? 'Signup failed.')
      return
    }
    navigate('/app/admin', { replace: true })
  }

  const handleReset = (e: FormEvent) => {
    e.preventDefault()
    setResetSent(true)
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-md px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome to EduSphere USA</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Access your school's readiness platform.
          </p>
        </div>

        <Card>
          <Tabs defaultValue="login">
            <CardHeader className="pb-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="login">Log in</TabsTrigger>
                <TabsTrigger value="signup">Create school account</TabsTrigger>
                <TabsTrigger value="reset">Reset password</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              {/* Log in */}
              <TabsContent value="login" className="mt-0">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="you@yourschool.edu"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  {loginError && (
                    <Alert variant="destructive">
                      <AlertDescription>{loginError}</AlertDescription>
                    </Alert>
                  )}
                  <Button type="submit" className="w-full">Log in</Button>
                </form>

                <div className="mt-6 rounded-lg border bg-slate-50 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Badge variant="outline">Demo environment</Badge>
                    <span className="text-xs text-muted-foreground">password: demo123</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {DEMO_ACCOUNTS.map((acct) => (
                      <button
                        key={acct.email}
                        type="button"
                        onClick={() => {
                          setLoginEmail(acct.email)
                          setLoginPassword('demo123')
                          setLoginError(null)
                        }}
                        className="rounded-md border bg-white px-3 py-2 text-left transition-colors hover:border-primary hover:bg-primary/5"
                      >
                        <p className="text-xs font-semibold">{acct.label}</p>
                        <p className="truncate text-xs text-muted-foreground">{acct.email}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Create school account */}
              <TabsContent value="signup" className="mt-0">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Your name</Label>
                    <Input id="signup-name" value={signupName} onChange={(e) => setSignupName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-school">School name</Label>
                    <Input id="signup-school" value={signupSchool} onChange={(e) => setSignupSchool(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Work email</Label>
                    <Input id="signup-email" type="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} required />
                  </div>
                  {signupError && (
                    <Alert variant="destructive">
                      <AlertDescription>{signupError}</AlertDescription>
                    </Alert>
                  )}
                  <Button type="submit" className="w-full">Create school account</Button>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Creating an account registers a pending organization for your school. It activates
                    after checkout — by card payment or invoice approval.
                  </p>
                </form>
              </TabsContent>

              {/* Reset password */}
              <TabsContent value="reset" className="mt-0">
                {resetSent ? (
                  <Alert>
                    <AlertDescription>
                      If an account exists for {resetEmail}, a password reset link has been sent.
                      Please check your inbox.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleReset} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reset-email">Email</Label>
                      <Input
                        id="reset-email"
                        type="email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        placeholder="you@yourschool.edu"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Send reset link</Button>
                  </form>
                )}
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </section>
  )
}
