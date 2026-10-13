import { Link } from 'react-router'
import {
  ArrowRight,
  ClipboardList,
  Compass,
  BookOpen,
  CheckCircle2,
  ListChecks,
  Timer,
  Award,
  RefreshCw,
  LayoutDashboard,
  FileBarChart,
  Gauge,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { useDB } from '@/lib/db'
import { READINESS_STATUS_LABELS, type ReadinessStatus } from '@/lib/types'

const CAPABILITIES = [
  { icon: ClipboardList, title: 'Diagnostic assessment', text: 'Track-level baseline diagnostics establish each student\'s starting point.' },
  { icon: Compass, title: 'Study plans', text: 'Personalized plans sequence modules and lessons around diagnostic gaps.' },
  { icon: BookOpen, title: 'Lessons', text: 'Original instructional content with key points and estimated durations.' },
  { icon: CheckCircle2, title: 'Knowledge checks', text: 'Short module-level checks confirm understanding before students move on.' },
  { icon: ListChecks, title: 'Practice questions', text: 'Credential-aligned practice banks with explanations for every question.' },
  { icon: Timer, title: 'Timed practice test', text: 'A timed, exam-style practice test builds pacing and stamina.' },
  { icon: Award, title: 'Final readiness review', text: 'A structured end-of-track review confirms readiness before students sit for their credential.' },
  { icon: RefreshCw, title: 'Remediation plans', text: 'Weak topics automatically surface targeted remediation assignments.' },
  { icon: LayoutDashboard, title: 'Instructor dashboard', text: 'Live cohort view with at-risk flags, topic weaknesses, and action queues.' },
  { icon: FileBarChart, title: 'Readiness reports', text: 'Downloadable student and cohort reports that document readiness.' },
]

const SCORE_COMPONENTS = [
  { weight: '40%', label: 'Practice question accuracy', text: 'How accurately the student answers practice questions across all topics.' },
  { weight: '25%', label: 'Diagnostic improvement', text: 'Growth from the baseline diagnostic to current performance.' },
  { weight: '20%', label: 'Module completion', text: 'Share of assigned modules and lessons completed.' },
  { weight: '15%', label: 'Final practice test score', text: 'Score on the timed, exam-style final practice test.' },
]

const STATUS_ORDER: ReadinessStatus[] = [
  'not_started',
  'needs_support',
  'building_readiness',
  'near_ready',
  'ready_for_final_review',
]

const STATUS_DESCRIPTIONS: Record<ReadinessStatus, string> = {
  not_started: 'The student has been enrolled but has not yet completed the baseline diagnostic.',
  needs_support: 'Early signals show significant gaps; the student needs instructor attention and a remediation plan.',
  building_readiness: 'The student is progressing through the study plan and building competency.',
  near_ready: 'The student is close to readiness; focused review of remaining weak topics is recommended.',
  ready_for_final_review: 'The student is prepared to attempt the final readiness review before sitting for their credential.',
}

export default function HealthcareReadiness() {
  const db = useDB()
  const concreteTracks = db.tracks.filter((t) => !t.isBundle && t.category === 'healthcare')

  return (
    <div>
      {/* Overview */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4">Healthcare Certification Readiness System</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              A complete readiness system for healthcare career programs
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              EduSphere USA's flagship system takes students from baseline diagnostic to documented
              certification readiness. Schools license the platform, instructors run cohorts, and every
              student's readiness score is visible, explainable, and reportable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

      {/* Tracks with modules */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">The credential tracks</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Each track is structured as ten sequenced modules with lessons, knowledge checks, and a
            dedicated practice bank.
          </p>
          <Tabs defaultValue={concreteTracks[0]?.id} className="mt-8">
            <TabsList className="flex h-auto flex-wrap">
              {concreteTracks.map((track) => (
                <TabsTrigger key={track.id} value={track.id} className="text-sm">
                  {track.shortName}
                </TabsTrigger>
              ))}
            </TabsList>
            {concreteTracks.map((track) => {
              const modules = db.modules
                .filter((m) => m.trackId === track.id)
                .sort((a, b) => a.order - b.order)
              return (
                <TabsContent key={track.id} value={track.id}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: track.color }} />
                        <CardTitle>{track.name}</CardTitle>
                      </div>
                      <p className="text-sm text-muted-foreground">{track.description}</p>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        ~{track.estimatedWeeks} weeks · {modules.length} modules
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ol className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {modules.map((mod) => (
                          <li key={mod.id} className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                              {mod.order}
                            </span>
                            <div>
                              <p className="text-sm font-medium">{mod.title}</p>
                              <p className="text-xs text-muted-foreground">{mod.description}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="border-t bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">Platform capabilities</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The full readiness workflow — every capability is included in every track license.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {CAPABILITIES.map((cap) => (
              <Card key={cap.title}>
                <CardContent className="p-5">
                  <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <cap.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-semibold">{cap.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{cap.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Readiness scoring */}
      <section className="border-t bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2">
                <Gauge className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight">How readiness is scored</h2>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every student carries a single 0–100 readiness score per track, computed from four
                weighted components. The formula is transparent — instructors can see exactly what is
                driving each score.
              </p>
              <div className="mt-6 rounded-lg border bg-white p-5 font-mono text-sm">
                Readiness = 40% practice question accuracy + 25% diagnostic improvement + 20% module
                completion + 15% final practice test score
              </div>
              <ul className="mt-6 space-y-4">
                {SCORE_COMPONENTS.map((c) => (
                  <li key={c.label} className="flex gap-4">
                    <span className="flex h-10 w-14 shrink-0 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary">
                      {c.weight}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{c.label}</p>
                      <p className="text-sm text-muted-foreground">{c.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">The five readiness statuses</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Scores map to five statuses, so instructors can triage a cohort in seconds.
              </p>
              <div className="mt-6 space-y-3">
                {STATUS_ORDER.map((status, i) => (
                  <Card key={status}>
                    <CardContent className="flex items-start gap-4 p-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold text-muted-foreground">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{READINESS_STATUS_LABELS[status]}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{STATUS_DESCRIPTIONS[status]}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <Separator className="my-12" />
          <div className="flex flex-col items-center justify-between gap-6 rounded-lg border bg-white p-8 sm:flex-row">
            <div>
              <h3 className="text-xl font-semibold">See the readiness system with your own cohort data</h3>
              <p className="mt-1 text-muted-foreground">
                We'll walk your team through diagnostics, scoring, and reporting in a live demo.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Button asChild>
                <Link to="/demo">Request School Demo</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
