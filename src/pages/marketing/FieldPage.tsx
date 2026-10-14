import { Link, useParams, Navigate } from 'react-router'
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, FileText, GraduationCap, ListChecks } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { fieldBySlug, FIELDS } from '@/data/fields'
import { ALL_TRACKS } from '@/data/content-all'
import { LICENSE_TYPES, priceFor } from '@/data/pricing'
import { formatUSD } from '@/lib/format'

export default function FieldPage() {
  const { slug } = useParams()
  const field = slug ? fieldBySlug(slug) : undefined
  if (!field) return <Navigate to="/catalog" replace />

  const tracks = ALL_TRACKS.filter((t) => !t.isBundle && t.category === field.id)
  const fieldPrice = priceFor('field', field.id)

  return (
    <div>
      {/* Hero */}
      <section className="border-b" style={{ backgroundColor: `${field.color}0d` }}>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
            <Link to="/catalog"><ArrowLeft className="mr-1 h-4 w-4" /> All fields</Link>
          </Button>
          <Badge variant="outline" className="mb-4" style={{ color: field.color, borderColor: field.color }}>
            IRC Field
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{field.name}</h1>
          <p className="mt-3 text-xl font-medium" style={{ color: field.color }}>{field.tagline}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{field.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" /> {tracks.length} readiness tracks
            </span>
            <span className="flex items-center gap-1.5">
              <ListChecks className="h-4 w-4" /> {tracks.reduce((n, t) => n + (t.domains?.length ?? 8), 0)} competency domains covered
            </span>
            <span className="flex items-center gap-1.5">
              <FileText className="h-4 w-4" /> Field License {formatUSD(fieldPrice)}/yr — all tracks, 25 students
            </span>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6">
          {tracks.map((t) => (
            <Card key={t.id} className="overflow-hidden">
              <div className="h-1.5" style={{ backgroundColor: field.color }} />
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-2xl">{t.name}</CardTitle>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{t.credentialFocus}</p>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> ~{t.estimatedWeeks} weeks
                  </Badge>
                </div>
                <p className="mt-3 max-w-3xl text-muted-foreground">{t.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-1 flex items-center gap-1.5 text-sm font-semibold">
                        <GraduationCap className="h-4 w-4" style={{ color: field.color }} /> For schools
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{t.schoolOverview}</p>
                    </div>
                    <div>
                      <h3 className="mb-1 flex items-center gap-1.5 text-sm font-semibold">
                        <BookOpen className="h-4 w-4" style={{ color: field.color }} /> For students
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{t.studentOverview}</p>
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-semibold">Prerequisites</h3>
                      <p className="text-sm text-muted-foreground">{t.prerequisites}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-sm font-semibold">Competency domains</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {(t.domains ?? []).map((d) => (
                          <span
                            key={d}
                            className="rounded-full border px-2.5 py-1 text-xs"
                            style={{ borderColor: `${field.color}55`, color: field.color }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg bg-slate-100 p-4">
                      <h3 className="mb-1 text-sm font-semibold">Alignment notes</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{t.alignmentNotes}</p>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: field.color }} />
                      <span>
                        Includes baseline diagnostic, 10 modules / 20 lessons, module knowledge checks,
                        original practice bank with rationales, and a timed final practice test.
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Licensing CTA */}
      <section className="border-t bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {LICENSE_TYPES.filter((l) => l.id !== 'academy').map((l) => (
              <Card key={l.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{l.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{l.bestFor}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{formatUSD(priceFor(l.id, field.id))}<span className="text-sm font-normal text-muted-foreground">/yr</span></p>
                  <p className="mt-1 text-sm text-muted-foreground">{l.scope} · up to {l.maxStudents} students</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild><Link to="/pricing">Full pricing matrix</Link></Button>
            <Button variant="outline" asChild>
              <Link to="/demo">Request School Demo <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Other fields */}
      <section className="border-t bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-5 text-lg font-semibold">Other IRC fields</h2>
          <div className="flex flex-wrap gap-2">
            {FIELDS.filter((f) => f.id !== field.id).map((f) => (
              <Button key={f.id} variant="outline" size="sm" asChild>
                <Link to={`/fields/${f.slug}`}>{f.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
