import { Link } from 'react-router'
import { ArrowRight, Check, Receipt } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { PLANS } from '@/data/plans'
import { FIELDS } from '@/data/fields'
import { PRICE_MATRIX, ACADEMY_PRICE, ENTERPRISE_STARTS_AT } from '@/data/pricing'
import { formatUSD } from '@/lib/format'
import { cn } from '@/lib/utils'

const PRICE_RANGE_LINES: Record<string, string> = {
  single: `${formatUSD(7500)}–${formatUSD(17500)} depending on field`,
  field: `${formatUSD(22500)}–${formatUSD(47500)} depending on field`,
  program: `${formatUSD(39500)}–${formatUSD(89500)} depending on field`,
}

const FAQ = [
  {
    q: 'How do student seats work?',
    a: 'Each license includes a maximum number of student seats per year. A seat is used when a student is enrolled in a track. You can reassign seats between cohorts during your license period, and larger licenses include more seats at a lower per-student cost.',
  },
  {
    q: 'What does a Field License include?',
    a: 'A Field License unlocks every readiness track in one IRC field — for example, all Health Sciences tracks — for up to 25 students. A Multi-Field Program License raises that to 60 students across up to 2 fields, and a Career Academy License covers any 4 fields for up to 150 students.',
  },
  {
    q: 'Can we pay by invoice or purchase order?',
    a: 'Yes. At checkout you can pay by card or request an invoice / purchase order. Our licensing team will follow up with procurement paperwork, and your organization is activated once payment or approval is complete.',
  },
  {
    q: 'Is the practice content official exam material?',
    a: 'All practice content in EduSphere USA is original and mapped to public competency domains for each credential style. EduSphere USA is not affiliated with or endorsed by any certification provider.',
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
            Annual school licenses, priced by field and seats
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Licenses are sold to schools, not individual students. Pick the license type and the IRC
            field that matches your program — every license includes the full readiness workflow.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {PLANS.map((plan) => {
              const isPopular = plan.id === 'field'
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
                      ) : isEnterprise ? (
                        <>
                          <span className="text-2xl font-bold">From {formatUSD(ENTERPRISE_STARTS_AT)}</span>
                          <span className="block text-sm text-muted-foreground">custom agreement</span>
                        </>
                      ) : (
                        <span className="text-lg font-bold leading-snug">{PRICE_RANGE_LINES[plan.id]}</span>
                      )}
                    </div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {plan.maxStudents ? `Up to ${plan.maxStudents} students` : 'Unlimited seats by agreement'}
                    </p>
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
            <div className="inline-flex items-center gap-2 rounded-lg border bg-white px-4 py-3 text-sm text-muted-foreground">
              <Receipt className="h-4 w-4 text-primary" />
              Invoice and purchase order are standard checkout options — no card required.
            </div>
          </div>
        </div>
      </section>

      {/* Price matrix */}
      <section className="border-t bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Full price matrix</h2>
            <p className="mt-3 text-muted-foreground">
              Annual pricing by license type and IRC field. Career Academy is a flat {formatUSD(ACADEMY_PRICE)}/yr for any 4 fields.
            </p>
          </div>
          <Card className="mx-auto max-w-4xl overflow-x-auto">
            <CardContent className="p-0">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b bg-slate-50 text-left">
                    <th className="px-4 py-3 font-semibold">IRC field</th>
                    <th className="px-4 py-3 text-right font-semibold">Single Track<br /><span className="text-xs font-normal text-muted-foreground">10 seats · 1 track</span></th>
                    <th className="px-4 py-3 text-right font-semibold">Field License<br /><span className="text-xs font-normal text-muted-foreground">25 seats · all field tracks</span></th>
                    <th className="px-4 py-3 text-right font-semibold">Multi-Field Program<br /><span className="text-xs font-normal text-muted-foreground">60 seats · up to 2 fields</span></th>
                  </tr>
                </thead>
                <tbody>
                  {FIELDS.map((f) => (
                    <tr key={f.id} className="border-b last:border-0">
                      <td className="px-4 py-3">
                        <Link to={`/fields/${f.slug}`} className="flex items-center gap-2 font-medium hover:text-primary">
                          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: f.color }} />
                          {f.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-right tabular-nums">{formatUSD(PRICE_MATRIX.single[f.id])}</td>
                      <td className="px-4 py-3 text-right tabular-nums font-medium">{formatUSD(PRICE_MATRIX.field[f.id])}</td>
                      <td className="px-4 py-3 text-right tabular-nums">{formatUSD(PRICE_MATRIX.program[f.id])}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Need more than 60 seats in one field or more than 4 fields?{' '}
            <Link to="/demo" className="font-medium text-primary hover:underline">Talk to us about Enterprise</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t bg-slate-50 py-16 sm:py-20">
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
