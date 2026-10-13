import { useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { CheckCircle2, ShieldCheck, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { updateDB, logAction, uid } from '@/lib/db'

const ROLE_OPTIONS = [
  'School Administrator / Program Director',
  'Instructor / Faculty',
  'Workforce Program Lead',
  'Curriculum or Instruction Lead',
  'Other',
]

const STUDENT_COUNT_OPTIONS = ['1–10', '11–25', '25–50', '50+']

const TRUST_BULLETS = [
  { icon: Clock, text: 'A live walkthrough with a readiness specialist — typically 30 minutes.' },
  { icon: Users, text: 'We tailor the demo to your tracks, cohort size, and reporting needs.' },
  { icon: ShieldCheck, text: 'Your information is used only to schedule your demo — never sold.' },
]

export default function DemoRequest() {
  const [schoolName, setSchoolName] = useState('')
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('')
  const [studentCount, setStudentCount] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!schoolName.trim() || !contactName.trim() || !email.trim() || !role || !studentCount) {
      setError('Please complete all required fields.')
      return
    }
    updateDB((d) => {
      d.demoRequests.unshift({
        id: uid('demo'),
        schoolName: schoolName.trim(),
        contactName: contactName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        role,
        studentCount,
        message: message.trim(),
        status: 'new',
        createdAt: new Date().toISOString(),
      })
    })
    logAction(
      'visitor',
      'Website visitor',
      'demo_request.submitted',
      `Demo request submitted for ${schoolName.trim()}`,
      null,
    )
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-lg px-4 sm:px-6">
          <Card>
            <CardContent className="p-8 text-center">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-7 w-7 text-emerald-600" />
              </span>
              <h1 className="text-2xl font-bold tracking-tight">Demo request received</h1>
              <p className="mt-3 text-muted-foreground">
                Thanks, {contactName.split(' ')[0] || 'there'} — we'll be in touch within one business
                day to schedule your school's walkthrough.
              </p>
              <Button className="mt-6" variant="outline" asChild>
                <Link to="/">Back to home</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Copy + trust */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Request a school demo</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              EduSphere USA gives schools a structured way to prepare students, monitor progress,
              identify risk early, and document certification readiness across an entire cohort.
            </p>
            <ul className="mt-8 space-y-4">
              {TRUST_BULLETS.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <p className="pt-1.5 text-sm text-muted-foreground">{b.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>Tell us about your school</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="schoolName">School name *</Label>
                    <Input id="schoolName" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} placeholder="e.g. Northview Career Institute" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact name *</Label>
                    <Input id="contactName" value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="Your full name" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email *</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@yourschool.edu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 000-0000" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Your role / position *</Label>
                    <Select value={role} onValueChange={setRole}>
                      <SelectTrigger><SelectValue placeholder="Select your role" /></SelectTrigger>
                      <SelectContent>
                        {ROLE_OPTIONS.map((r) => (
                          <SelectItem key={r} value={r}>{r}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Number of students *</Label>
                    <Select value={studentCount} onValueChange={setStudentCount}>
                      <SelectTrigger><SelectValue placeholder="Select a range" /></SelectTrigger>
                      <SelectContent>
                        {STUDENT_COUNT_OPTIONS.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">What would you like to see?</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your programs, cohorts, or reporting requirements…"
                    rows={4}
                  />
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <Button type="submit" className="w-full" size="lg">
                  Request School Demo
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  We'll be in touch within one business day.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
