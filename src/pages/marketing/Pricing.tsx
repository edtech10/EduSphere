import { Link } from 'react-router'
import { ArrowRight, Check, Receipt } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { PLANS } from '@/data/plans'
import { formatUSD } from '@/lib/format'
import { cn } from '@/lib/utils'

const PER_STUDENT_LINES: Record<string, string> = {
  starter: '$1,450 per student at full use',
  growth: '$1,260 per student at full use',
  program: '$992 per student at full use',
}

const FAQ = [
  {
    q: 'How do student seats work?',
    a: 'Each plan includes a maximum number of student seats per annual license. A seat is used when a student is enrolled in a track. You can reassign seats between cohorts during your license period, and larger plans include more seats at a lower per-student cost.',
  },
  {
    q: 'How many credential tracks are included?',
    a: 'Starter Cohort includes one healthcare readiness track, Growth Cohort includes up to three, and Program License and Enterprise include all tracks, including the multi-track bundle. You choose which tracks to assign to each cohort.',
  },
  {
    q: 'Can we pay by invoice or purchase order?',
    a: 'Yes. At checkout you can pay by card or request an invoice / purchase order. Our licensing team will follow up with procurement paperwork, and your organization is activated once payment or approval is complete.',
  },
  {
    q: 'Is the practice content official exam material?',
    a: 'All practice content in EduSphere USA is original and credential-aligned, written by our curriculum team. EduSphere USA is not affiliated with or endorsed by any certification provider.',
  },
  {
    q: 'Do you guarantee students will pass their certification exam?',
    a: 'No. EduSphere USA supports schools with diagnostics, guided practice, and readiness tracking, but we do not guarantee certification exam passage. Certification decisions are made solely by the credentialing provider.',
  },
]

export default function Pricing() {
  return (
    <div>
      {/* Header */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <Badge variant="outline" className="mb-4">School licenses</Badge>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Annual school licenses, priced by student seats
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Licenses are sold to schools, not individual students. Pick the seat count and track
            coverage that matches your cohorts — every plan includes the full readiness workflow.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-4">
            {PLANS.map((plan) => {
              const isPopular = plan.id === 'growth'
              const isEnterprise = plan.id === 'enterprise'
              return (
                <Card
                  key={plan.id}
                  className={cn(
                    'flex flex-col',
                    isPopular && 'relative border-primary shadow-lg ring-1 ring-primary',
                  )}
                >
                  {isPopular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most popular</Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <div className="pt-2">
                      {plan.priceAnnual !== null ? (
                        <>
                          <span className="text-3xl font-bold tabular-nums">{formatUSD(plan.priceAnnual)}</span>
                          <span className="text-sm text-muted-foreground"> / year</span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold">Custom pricing</span>
                      )}
                    </div>
                    {PER_STUDENT_LINES[plan.id] && (
                      <p className="text-xs font-medium text-muted-foreground">
                        {PER_STUDENT_LINES[plan.id]}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <ul className="flex-1 space-y-2.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="mt-6 w-full"
                      variant={isPopular ? 'default' : 'outline'}
                      asChild
                    >
                      {isEnterprise ? (
                        <Link to="/demo">Talk to our team</Link>
                      ) : (
                        <Link to={`/checkout?plan=${plan.id}`}>
                          Get {plan.name} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              EduSphere USA gives schools a structured way to prepare students, monitor progress,
              identify risk early, and document certification readiness across an entire cohort.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border bg-white px-4 py-3 text-sm text-muted-foreground">
              <Receipt className="h-4 w-4 text-primary" />
              Schools can also request an invoice or purchase order at checkout.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="mt-8">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <Link to="/demo">
                Request School Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
