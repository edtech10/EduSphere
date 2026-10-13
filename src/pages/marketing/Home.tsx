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
import { useDB } from '@/lib/db'
import { StatCard } from '@/components/StatCard'
import { ReadinessBadge } from '@/components/StatusBadge'
import type { ReadinessStatus } from '@/lib/types'

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

export default function Home() {
  const db = useDB()

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
              EduSphere USA helps schools prepare students for healthcare credentials with diagnostics,
              guided practice, instructor reporting, and cohort-level readiness tracking.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/demo">
                  Request School Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product screenshot mock */}
      <section className="bg-slate-50 py-16 sm:py-24">
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

      {/* Credential tracks */}
      <section className="border-t bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Healthcare credential tracks</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Four credential-aligned tracks with original practice content, structured modules, and readiness scoring.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/products/healthcare-readiness">
                Explore the readiness system <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {db.tracks.filter((t) => !t.comingSoon).map((track) => (
              <Card key={track.id} className="flex flex-col">
                <div className="h-1.5 rounded-t-lg" style={{ backgroundColor: track.color }} />
                <CardHeader>
                  <CardTitle className="text-base">{track.shortName}</CardTitle>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    ~{track.estimatedWeeks} weeks
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">{track.description}</p>
                </CardContent>
              </Card>
            ))}
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
            risk early, and document certification readiness across an entire cohort.
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
