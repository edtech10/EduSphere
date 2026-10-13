import { Link } from 'react-router'
import {
  ArrowRight,
  TrendingDown,
  EyeOff,
  FileSpreadsheet,
  TrendingUp,
  Eye,
  FileBarChart,
  AlertTriangle,
  Download,
  ShieldCheck,
  Receipt,
  Accessibility as AccessibilityIcon,
  Lock,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const PAINS_AND_OUTCOMES = [
  {
    pain: { icon: TrendingDown, title: 'Uncertain pass rates', text: 'You find out whether students were ready only after exam results come back.' },
    outcome: { icon: TrendingUp, title: 'Measured readiness', text: 'A transparent 0–100 readiness score per student, updated continuously as they practice.' },
  },
  {
    pain: { icon: EyeOff, title: 'No cohort visibility', text: 'Instructors track progress in personal spreadsheets, so nobody sees the whole cohort.' },
    outcome: { icon: Eye, title: 'One cohort view', text: 'A live dashboard shows readiness, completion, and at-risk students across every cohort.' },
  },
  {
    pain: { icon: FileSpreadsheet, title: 'Manual tracking', text: 'Compiling readiness evidence for accreditation or funders takes days of manual work.' },
    outcome: { icon: FileBarChart, title: 'Downloadable reports', text: 'Student and cohort readiness reports export in one click, whenever you need them.' },
  },
]

const PROCUREMENT_ITEMS = [
  {
    icon: Download,
    title: 'Sample readiness report (PDF)',
    text: 'A sample student readiness report with fictional data — share it with program directors and funders.',
    link: { href: '/reports/sample-student-readiness-report.pdf', label: 'Download sample report', external: true },
  },
  {
    icon: Receipt,
    title: 'Quote & PO support',
    text: 'We work with purchase orders, district procurement workflows, and grant-funded purchases.',
    link: { href: '/checkout?plan=growth', label: 'Request invoice / PO', external: false },
  },
  {
    icon: ShieldCheck,
    title: 'Privacy & student data',
    text: 'How we collect, store, and protect student information, in plain language.',
    link: { href: '/student-data-protection', label: 'Student Data Protection', external: false },
  },
  {
    icon: AccessibilityIcon,
    title: 'Accessibility',
    text: 'Our accessibility commitment and conformance approach for student-facing software.',
    link: { href: '/accessibility', label: 'Accessibility statement (WCAG 2.1 AA)', external: false },
  },
  {
    icon: Lock,
    title: 'Security overview',
    text: 'Role-based access for students, instructors, and admins; audit logging of administrative actions; card payments processed by a third-party PCI-compliant provider — card data never touches our servers.',
    link: { href: '/privacy', label: 'Privacy Policy', external: false },
  },
]

const WORKFLOW_STEPS = [
  { title: 'Admin chooses a plan', text: 'Your school administrator selects the license that matches your cohort size and tracks.' },
  { title: 'Pays by card or invoice', text: 'Checkout supports card payment or an invoice / purchase order request for procurement.' },
  { title: 'Organization created', text: 'Your school\'s organization is created automatically after payment or invoice approval.' },
  { title: 'Admin receives access', text: 'The administrator account is activated with full access to the school console.' },
  { title: 'Invites instructors & students', text: 'The admin invites instructors and students; seats are allocated from your license.' },
  { title: 'Assigns tracks', text: 'Instructors assign credential tracks to each student based on their program.' },
  { title: 'Students complete baseline diagnostics', text: 'Every student starts with a track-level diagnostic to establish their baseline.' },
  { title: 'Students get study plan + readiness score', text: 'Each student receives a personalized study plan and a live readiness score.' },
  { title: 'Instructor monitors progress', text: 'Instructors track readiness, review at-risk flags, and assign remediation where needed.' },
  { title: 'Admin downloads cohort readiness reports', text: 'Administrators export cohort-level reports for accreditation, funders, and leadership.' },
]

export default function ForSchools() {
  return (
    <div>
      {/* Header */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4">For school administrators</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Know your cohort is ready — before exam day
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              EduSphere USA replaces guesswork and spreadsheets with a structured readiness system
              your whole team can see: diagnostics, guided practice, instructor reporting, and
              cohort-level documentation.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link to="/demo">
                Request School Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pain points → outcomes */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">From pain points to outcomes</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The problems we hear from program directors — and what changes when readiness is structured.
          </p>
          <div className="mt-10 space-y-6">
            {PAINS_AND_OUTCOMES.map(({ pain, outcome }) => (
              <div key={pain.title} className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
                <Card className="border-red-200 bg-red-50/50">
                  <CardContent className="flex items-start gap-4 p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-100 text-red-600">
                      <pain.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold">{pain.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{pain.text}</p>
                    </div>
                  </CardContent>
                </Card>
                <div className="hidden items-center md:flex">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
                <Card className="border-emerald-200 bg-emerald-50/50">
                  <CardContent className="flex items-start gap-4 p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-emerald-600">
                      <outcome.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold">{outcome.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{outcome.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase workflow */}
      <section className="border-t bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">The school purchase workflow</h2>
          <p className="mt-3 text-muted-foreground">
            From license purchase to downloadable cohort reports — the full journey in ten steps.
          </p>
          <ol className="mt-10 space-y-4">
            {WORKFLOW_STEPS.map((step, i) => (
              <Card key={step.title}>
                <CardContent className="flex items-start gap-4 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ol>
        </div>
      </section>

      {/* Procurement packet */}
      <section className="border-t bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Badge variant="outline" className="mb-4">Procurement packet</Badge>
          <h2 className="text-3xl font-bold tracking-tight">Everything your business office will ask for</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The documents and answers schools typically need before a license can be approved.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCUREMENT_ITEMS.map((item) => (
              <Card key={item.title}>
                <CardContent className="flex h-full flex-col p-5">
                  <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                  {item.link.external ? (
                    <a
                      href={item.link.href}
                      download
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {item.link.label} <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <Link
                      to={item.link.href}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {item.link.label} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <AlertTriangle className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            See how it works with your program
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We'll walk your leadership team through the purchase workflow, instructor dashboards, and
            readiness reporting in a live demo.
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
