import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import {
  ArrowRight,
  ClipboardList,
  Compass,
  LineChart as LineChartIcon,
  FileBarChart,
  Users,
  Gauge,
  AlertTriangle,
  CheckCircle2,
  Calculator,
  FileText,
  Route as RouteIcon,
} from 'lucide-react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useDB } from '@/lib/db'
import { StatCard } from '@/components/StatCard'
import { ReadinessBadge } from '@/components/StatusBadge'
import type { FieldId, ReadinessStatus } from '@/lib/types'
import { FIELDS } from '@/data/fields'
import { LICENSE_TYPES, priceFor, ACADEMY_PRICE, ENTERPRISE_STARTS_AT } from '@/data/pricing'
import { formatUSD } from '@/lib/format'
import { cn } from '@/lib/utils'

const WEEKLY_READINESS = [
  { week: 'Wk 1', score: 54 },
  { week: 'Wk 2', score: 57 },
  { week: 'Wk 3', score: 61 },
  { week: 'Wk 4', score: 60 },
  { week: 'Wk 5', score: 64 },
  { week: 'Wk 6', score: 67 },
  { week: 'Wk 7', score: 69 },
  { week: 'Wk 8', score: 71 },
]

const MOCK_STUDENTS: { name: string; track: string; score: number; status: ReadinessStatus }[] = [
  { name: 'Jordan Hayes', track: 'Medical Assistant', score: 78, status: 'near_ready' },
  { name: 'Casey Bennett', track: 'Medical Assistant', score: 52, status: 'needs_support' },
  { name: 'Riley Okafor', track: 'Phlebotomy Technician', score: 84, status: 'ready_for_final_review' },
  { name: 'Taylor Nguyen', track: 'Phlebotomy Technician', score: 66, status: 'building_readiness' },
  { name: 'Morgan Ellis', track: 'Clinical Lab Assisting', score: 71, status: 'building_readiness' },
]

const HOW_IT_WORKS = [
  {
    icon: ClipboardList,
    title: 'Baseline diagnostics',
    text: 'Each student starts with a track-level diagnostic that establishes a baseline and surfaces topic-level gaps from day one.',
  },
  {
    icon: Compass,
    title: 'Personalized study plans',
    text: 'Diagnostic results generate a guided study plan with sequenced modules, lessons, and knowledge checks for each student.',
  },
  {
    icon: CheckCircle2,
    title: 'Guided practice & remediation',
    text: 'Students work through credential-aligned practice questions with explanations, and weak topics trigger targeted remediation plans.',
  },
  {
    icon: FileBarChart,
    title: 'Cohort readiness reporting',
    text: 'Instructors and administrators monitor readiness scores, at-risk flags, and completion across the whole cohort — with downloadable reports.',
  },
]

// Deterministic mock heatmap: 12 students × 8 competency domains.
const HEAT_DOMAINS = ['Domain 1', 'Domain 2', 'Domain 3', 'Domain 4', 'Domain 5', 'Domain 6', 'Domain 7', 'Domain 8']
const HEAT_STUDENTS = Array.from({ length: 12 }, (_, i) => {
  let seed = (i + 3) * 2654435761
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    return seed / 0x7fffffff
  }
  return {
    name: `Student ${String(i + 1).padStart(2, '0')}`,
    scores: HEAT_DOMAINS.map(() => Math.round(25 + rand() * 70)),
  }
})

function heatColor(score: number): string {
  if (score >= 80) return 'bg-emerald-500'
  if (score >= 65) return 'bg-emerald-300'
  if (score >= 50) return 'bg-amber-300'
  if (score >= 35) return 'bg-orange-400'
  return 'bg-red-400'
}

const PATHWAY_STEPS = [
  { title: 'Field', text: 'Pick one of 8 career fields' },
  { title: 'Track', text: 'Choose the credential track' },
  { title: 'Diagnostic', text: 'Baseline per domain' },
  { title: '10 Modules', text: 'Lessons + knowledge checks' },
  { title: 'Timed Final', text: 'Exam-style practice' },
  { title: 'Report', text: 'Readiness evidence' },
]

function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b bg-slate-100 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-slate-300" />
          <span className="h-3 w-3 rounded-full bg-slate-300" />
          <span className="h-3 w-3 rounded-full bg-slate-300" />
        </div>
        <div className="flex-1 rounded-md border bg-white px-3 py-1 text-xs text-muted-foreground">
          app.edusphereusa.com/instructor
        </div>
        <Badge variant="outline" className="hidden text-xs sm:inline-flex">Instructor view</Badge>
      </div>

      <div className="bg-slate-50 p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">Fall Cohort — Allied Health</p>
            <p className="text-xs text-muted-foreground">Northview Career Institute · updated today</p>
          </div>
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10">Live cohort</Badge>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          <StatCard label="Students enrolled" value={48} icon={<Users className="h-4 w-4" />} />
          <StatCard label="Avg readiness score" value="71%" icon={<Gauge className="h-4 w-4" />} tone="success" />
          <StatCard label="Students at risk" value={6} icon={<AlertTriangle className="h-4 w-4" />} tone="danger" hint="2 new this week" />
          <StatCard label="Practice questions completed" value="12,480" icon={<CheckCircle2 className="h-4 w-4" />} />
          <StatCard label="Instructor actions needed" value={9} icon={<ClipboardList className="h-4 w-4" />} tone="warning" />
          <StatCard label="Cohort completion rate" value="82%" icon={<LineChartIcon className="h-4 w-4" />} />
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average readiness by week</CardTitle>
            </CardHeader>
            <CardContent className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={WEEKLY_READINESS} margin={{ top: 4, right: 8, left: -24, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="week" tick={{ fontSize: 11 }} stroke="#94a3b8" />
                  <YAxis domain={[40, 100]} tick={{ fontSize: 11 }} stroke="#94a3b8" />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#0e7490" strokeWidth={2} dot={{ r: 3 }} name="Readiness score" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Students needing attention</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="px-4 py-2 font-medium">Student</th>
                    <th className="hidden px-4 py-2 font-medium sm:table-cell">Track</th>
                    <th className="px-4 py-2 font-medium">Score</th>
                    <th className="px-4 py-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_STUDENTS.map((s) => (
                    <tr key={s.name} className="border-b last:border-0">
                      <td className="px-4 py-2 font-medium">{s.name}</td>
                      <td className="hidden px-4 py-2 text-muted-foreground sm:table-cell">{s.track}</td>
                      <td className="px-4 py-2 tabular-nums">{s.score}%</td>
                      <td className="px-4 py-2"><ReadinessBadge status={s.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function FieldExplorer() {
  const [active, setActive] = useState<FieldId>('healthcare')
  const db = useDB()
  const field = FIELDS.find((f) => f.id === active)!
  const tracks = db.tracks.filter((t) => !t.isBundle && t.category === active)

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {FIELDS.map((f) => {
          const count = db.tracks.filter((t) => !t.isBundle && t.category === f.id).length
          const isActive = f.id === active
          return (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={cn(
                'rounded-xl border bg-white p-4 text-left transition-all hover:shadow-md',
                isActive && 'ring-2 shadow-md',
              )}
              style={isActive ? ({ '--tw-ring-color': f.color } as React.CSSProperties) : undefined}
            >
              <div className="mb-2 h-1.5 w-10 rounded-full" style={{ backgroundColor: f.color }} />
              <p className="font-semibold">{f.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{f.tagline}</p>
              <p className="mt-2 text-xs font-medium" style={{ color: f.color }}>
                {count} readiness tracks
              </p>
            </button>
          )
        })}
      </div>

      <Card className="mt-6">
        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <CardTitle className="text-xl">{field.name}</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">{field.description}</p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to={`/fields/${field.slug}`}>
                Field details <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((t) => (
              <div key={t.id} className="rounded-lg border p-3">
                <p className="text-sm font-semibold leading-snug">{t.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  ~{t.estimatedWeeks} weeks · 10 modules · {t.domains?.length ?? 8} domains
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function LicenseEstimator() {
  const [licenseType, setLicenseType] = useState<string>('field')
  const [fieldId, setFieldId] = useState<FieldId>('healthcare')

  const result = useMemo(() => {
    if (licenseType === 'enterprise') return null
    if (licenseType === 'academy') return { price: ACADEMY_PRICE, seats: 150 }
    const lt = LICENSE_TYPES.find((l) => l.id === licenseType)!
    return { price: priceFor(lt.id, fieldId), seats: lt.maxStudents ?? 0 }
  }, [licenseType, fieldId])

  const isFieldScoped = licenseType === 'single' || licenseType === 'field' || licenseType === 'program'

  return (
    <Card className="mx-auto max-w-3xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Calculator className="h-5 w-5 text-primary" /> License pricing estimator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Annual school licenses are priced by license type and field. Invoice and purchase order options are standard.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium">License type</label>
            <Select value={licenseType} onValueChange={setLicenseType}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {LICENSE_TYPES.map((l) => (
                  <SelectItem key={l.id} value={l.id}>
                    {l.name} — up to {l.maxStudents} students
                  </SelectItem>
                ))}
                <SelectItem value="enterprise">Enterprise — multi-campus / district</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">IRC field</label>
            <Select value={fieldId} onValueChange={(v) => setFieldId(v as FieldId)} disabled={!isFieldScoped}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {FIELDS.map((f) => (
                  <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 rounded-lg bg-slate-50 p-5 text-center">
          {licenseType === 'enterprise' ? (
            <>
              <p className="text-sm text-muted-foreground">Enterprise agreements start at</p>
              <p className="mt-1 text-4xl font-bold tracking-tight">{formatUSD(ENTERPRISE_STARTS_AT)}<span className="text-base font-normal text-muted-foreground">/yr</span></p>
              <p className="mt-2 text-sm text-muted-foreground">Multi-campus licensing, custom terms, and rollout support.</p>
              <Button className="mt-4" asChild><Link to="/demo">Talk to us</Link></Button>
            </>
          ) : result ? (
            <>
              <p className="text-sm text-muted-foreground">
                {LICENSE_TYPES.find((l) => l.id === licenseType)?.name ?? 'Career Academy License'}
                {isFieldScoped && ` — ${FIELDS.find((f) => f.id === fieldId)?.name}`}
              </p>
              <p className="mt-1 text-4xl font-bold tracking-tight">{formatUSD(result.price)}<span className="text-base font-normal text-muted-foreground">/yr</span></p>
              <p className="mt-2 text-sm text-muted-foreground">
                Up to {result.seats} students · {formatUSD(Math.round(result.price / result.seats))} per student at full use
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <Button asChild>
                  <Link to={`/checkout?plan=${licenseType}`}>Start checkout</Link>
                </Button>
                <Button variant="outline" asChild><Link to="/pricing">Full matrix</Link></Button>
              </div>
            </>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  const db = useDB()
  const trackCount = db.tracks.filter((t) => !t.isBundle).length

  return (
    <div>
      {/* Hero */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">Built for schools, not consumers</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Certification readiness systems for career-focused schools
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {trackCount} industry-recognized credential readiness tracks across {FIELDS.length} career fields —
              with diagnostics, guided practice, instructor reporting, and cohort-level readiness tracking.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/demo">
                  Request School Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/catalog">Browse the IRC Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Field explorer */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Explore the 8 IRC fields</h2>
            <p className="mt-3 text-muted-foreground">
              Select a field to see its credential readiness tracks — each with a diagnostic, ten guided
              modules, knowledge checks, and a timed final practice test.
            </p>
          </div>
          <FieldExplorer />
        </div>
      </section>

      {/* Product screenshot mock */}
      <section className="border-t bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">The instructor dashboard, at a glance</h2>
            <p className="mt-3 text-muted-foreground">
              One operational view of every cohort: enrollment, readiness, risk, and the actions that matter today.
            </p>
          </div>
          <DashboardMock />
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Illustrative dashboard — all names and figures are sample data.
          </p>
        </div>
      </section>

      {/* Pathway map */}
      <section className="border-t bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Badge variant="outline" className="mb-3"><RouteIcon className="mr-1 h-3 w-3" /> The readiness pathway</Badge>
            <h2 className="text-3xl font-bold tracking-tight">Every track follows the same evidence chain</h2>
            <p className="mt-3 text-muted-foreground">
              A consistent structure makes readiness comparable across students, cohorts, and fields.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {PATHWAY_STEPS.map((step, i) => (
              <div key={step.title} className="relative">
                <Card className="h-full">
                  <CardContent className="p-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="mt-3 font-semibold">{step.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{step.text}</p>
                  </CardContent>
                </Card>
                {i < PATHWAY_STEPS.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cohort heatmap */}
      <section className="border-t bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Cohort heatmaps expose gaps before exam day</h2>
            <p className="mt-3 text-muted-foreground">
              Domain-level mastery for every student in one view — so instructors remediate the right topic
              for the right student.
            </p>
          </div>
          <Card className="mx-auto max-w-4xl overflow-x-auto">
            <CardContent className="p-4 sm:p-6">
              <table className="w-full min-w-[560px] border-collapse text-xs">
                <thead>
                  <tr>
                    <th className="p-1.5 text-left font-medium text-muted-foreground">Student</th>
                    {HEAT_DOMAINS.map((d) => (
                      <th key={d} className="p-1.5 text-center font-medium text-muted-foreground">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {HEAT_STUDENTS.map((s) => (
                    <tr key={s.name}>
                      <td className="p-1.5 font-medium">{s.name}</td>
                      {s.scores.map((score, i) => (
                        <td key={i} className="p-0.5">
                          <div
                            className={cn('flex h-8 items-center justify-center rounded text-[11px] font-semibold text-white tabular-nums', heatColor(score))}
                            title={`${s.name} — ${HEAT_DOMAINS[i]}: ${score}%`}
                          >
                            {score}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-emerald-500" /> 80+ ready</span>
                <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-emerald-300" /> 65–79</span>
                <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-amber-300" /> 50–64</span>
                <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-orange-400" /> 35–49</span>
                <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-red-400" /> below 35</span>
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">Illustrative sample data.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* License estimator */}
      <section className="border-t bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Transparent license pricing</h2>
            <p className="mt-3 text-muted-foreground">
              Estimate an annual school license in seconds — no sales call required.
            </p>
          </div>
          <LicenseEstimator />
        </div>
      </section>

      {/* Sample report preview */}
      <section className="border-t bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Badge variant="outline" className="mb-3">Evidence for administrators</Badge>
              <h2 className="text-3xl font-bold tracking-tight">Readiness reports your board can read</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Every cohort produces a documented readiness story: baseline diagnostics, domain-level growth,
                practice volume, and timed-final results — exportable for program review and procurement files.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="/reports/sample-student-readiness-report.pdf" target="_blank" rel="noreferrer">
                    <FileText className="mr-2 h-4 w-4" /> Download sample student report
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/for-schools">Procurement packet</Link>
                </Button>
              </div>
            </div>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">What a report includes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  {[
                    'Baseline diagnostic vs. timed-final growth, per domain',
                    'Practice volume and accuracy with rationales reviewed',
                    'Readiness status with plain-language interpretation',
                    'Instructor notes and remediation history',
                    'Cohort aggregates for program-level review',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="mt-3 text-muted-foreground">
              A structured, repeatable readiness workflow for every cohort you run.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, i) => (
              <Card key={step.title}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">Step {i + 1}</span>
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion copy */}
      <section className="border-t bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">Readiness you can document</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            EduSphere USA gives schools a structured way to prepare students, monitor progress, identify
            risk early, and document certification readiness across an entire cohort — in any of the
            eight career fields.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/demo">
                Request School Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/catalog">Browse the IRC Catalog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
