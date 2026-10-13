import { Link } from 'react-router'
import {
  ArrowRight,
  LayoutDashboard,
  AlertTriangle,
  Target,
  RefreshCw,
  Download,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const CAPABILITIES = [
  {
    icon: LayoutDashboard,
    title: 'Cohort overview',
    text: 'See every student\'s readiness score, completion, and recent activity in one live dashboard — no more stitching together spreadsheets.',
  },
  {
    icon: AlertTriangle,
    title: 'At-risk flags',
    text: 'Students who stall, regress, or score below thresholds are flagged automatically, with an action queue of who needs attention today.',
  },
  {
    icon: Target,
    title: 'Topic weaknesses',
    text: 'Per-student and cohort-level topic breakdowns show exactly which competencies are dragging readiness scores down.',
  },
  {
    icon: RefreshCw,
    title: 'Recommended remediation',
    text: 'The platform suggests targeted remediation assignments for weak topics, so intervention is a click — not a guessing game.',
  },
  {
    icon: Download,
    title: 'Downloadable reports',
    text: 'Export student-level and cohort-level readiness reports for administrators, accreditation files, and funders.',
  },
]

const BULLETS = [
  'Live readiness scores for every enrolled student',
  'At-risk flags with a daily instructor action queue',
  'Topic-level weakness analysis per student and per cohort',
  'One-click remediation plan assignment',
  'Practice accuracy, diagnostic improvement, and completion trends',
  'Timed final practice test results with score history',
  'Downloadable student and cohort readiness reports',
  'Seat and enrollment visibility across your cohorts',
]

export default function ForInstructors() {
  return (
    <div>
      {/* Header */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4">For instructors</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Spend your time teaching, not tracking
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              EduSphere USA gives healthcare instructors a single operational view of every cohort:
              who is ready, who is at risk, which topics are weak, and what to do about it.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link to="/demo">
                Request School Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Capability sections */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">Built around the instructor's week</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Open the dashboard on Monday and know exactly where to focus before your first class.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <Card key={cap.title}>
                <CardContent className="p-6">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <cap.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cap.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bullet capability list */}
      <section className="border-t bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Everything in the instructor toolkit</h2>
              <p className="mt-3 text-muted-foreground">
                Every school license includes full instructor access — no per-instructor add-ons.
              </p>
              <ul className="mt-8 space-y-3">
                {BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">What instructors tell us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <blockquote className="border-l-2 border-primary pl-4">
                  <p className="text-sm italic text-muted-foreground">
                    "I used to find out a student was struggling three weeks too late. Now the at-risk
                    list tells me on Monday morning."
                  </p>
                  <footer className="mt-2 text-xs font-medium">Allied health instructor, demo cohort</footer>
                </blockquote>
                <blockquote className="border-l-2 border-primary pl-4">
                  <p className="text-sm italic text-muted-foreground">
                    "The topic weakness view changed how I plan review sessions — I teach to the gaps,
                    not to the calendar."
                  </p>
                  <footer className="mt-2 text-xs font-medium">Clinical skills instructor, demo cohort</footer>
                </blockquote>
                <p className="text-xs text-muted-foreground">
                  Quotes from instructors in our demo environment. EduSphere USA supports readiness
                  tracking but does not guarantee certification exam passage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Bring your instructors into the demo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We'll show your teaching team the live dashboard, at-risk workflow, and reporting with a
            realistic demo cohort.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link to="/demo">
              Request School Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
