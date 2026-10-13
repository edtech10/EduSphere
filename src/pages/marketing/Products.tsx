import { Link } from 'react-router'
import {
  ArrowRight,
  ClipboardList,
  Compass,
  BookOpen,
  RefreshCw,
  LayoutDashboard,
  FileBarChart,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useDB } from '@/lib/db'

const INCLUDED = [
  {
    icon: ClipboardList,
    title: 'Diagnostics',
    text: 'Track-level baseline assessments that measure where each student starts.',
  },
  {
    icon: Compass,
    title: 'Study plans',
    text: 'Personalized, sequenced study plans generated from diagnostic results.',
  },
  {
    icon: BookOpen,
    title: 'Practice banks',
    text: 'Original, credential-aligned practice questions with explanations.',
  },
  {
    icon: RefreshCw,
    title: 'Remediation',
    text: 'Targeted remediation plans when topic-level weakness is detected.',
  },
  {
    icon: LayoutDashboard,
    title: 'Instructor dashboards',
    text: 'Live cohort views with readiness scores, at-risk flags, and action queues.',
  },
  {
    icon: FileBarChart,
    title: 'Readiness reports',
    text: 'Downloadable student and cohort reports that document certification readiness.',
  },
]

export default function Products() {
  const db = useDB()

  return (
    <div>
      {/* Header */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4">Product line</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              One readiness system. Every healthcare credential track your school runs.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              EduSphere USA is built for schools that need structured, measurable certification
              readiness — not consumer test prep. Every product is licensed to your school and
              administered by your instructors.
            </p>
          </div>
        </div>
      </section>

      {/* Featured product */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="p-8 sm:p-10 lg:col-span-3">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">Featured product</Badge>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Healthcare Certification Readiness System
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  A complete readiness platform for healthcare career programs: baseline diagnostics,
                  personalized study plans, guided practice with explanations, remediation workflows,
                  instructor dashboards, and cohort-level readiness reporting — all aligned to the
                  competencies your students' credentials expect.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link to="/products/healthcare-readiness">
                      Explore the system <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/demo">Request School Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="border-t bg-white p-8 sm:p-10 lg:col-span-2 lg:border-l lg:border-t-0">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Credential tracks
                </h3>
                <ul className="mt-4 space-y-3">
                  {db.tracks.map((track) => (
                    <li key={track.id} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-3 w-3 shrink-0 rounded-sm"
                        style={{ backgroundColor: track.color }}
                      />
                      <div>
                        <p className="text-sm font-medium">{track.name}</p>
                        <p className="text-xs text-muted-foreground">~{track.estimatedWeeks} weeks</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Track cards */}
      <section className="border-t bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">Credential tracks</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Each track contains structured modules, lessons, knowledge checks, practice banks, and a
            timed final readiness review.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {db.tracks.map((track) => (
              <Card key={track.id} className="flex flex-col overflow-hidden">
                <div className="h-1.5" style={{ backgroundColor: track.color }} />
                <CardHeader>
                  <CardTitle className="text-base">{track.name}</CardTitle>
                  {track.isBundle && (
                    <Badge variant="outline" className="w-fit">Bundle</Badge>
                  )}
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="flex-1 text-sm text-muted-foreground">{track.description}</p>
                  <p className="mt-4 text-xs font-medium text-muted-foreground">
                    Estimated completion: ~{track.estimatedWeeks} weeks
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">What's included</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Every license includes the full readiness workflow — from first diagnostic to final report.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex items-start gap-3 rounded-lg border bg-white p-5">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              All practice content in EduSphere USA is original and credential-aligned, written by our
              curriculum team. EduSphere USA is not affiliated with or endorsed by any certification
              provider.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
