import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { Search, ArrowRight, Clock, Layers, ListChecks } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FIELDS } from '@/data/fields'
import { ALL_TRACKS } from '@/data/content-all'
import type { FieldId } from '@/lib/types'
import { cn } from '@/lib/utils'

export default function Catalog() {
  const [query, setQuery] = useState('')
  const [field, setField] = useState<FieldId | 'all'>('all')

  const tracks = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ALL_TRACKS.filter((t) => !t.isBundle)
      .filter((t) => (field === 'all' ? true : t.category === field))
      .filter((t) =>
        q
          ? [t.name, t.shortName, t.description, t.credentialFocus, ...(t.domains ?? [])]
              .join(' ')
              .toLowerCase()
              .includes(q)
          : true,
      )
  }, [query, field])

  return (
    <div>
      {/* Header */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <Badge variant="outline" className="mb-4">IRC Catalog</Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {ALL_TRACKS.filter((t) => !t.isBundle).length} credential readiness tracks across {FIELDS.length} career fields
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every track includes a baseline diagnostic, ten guided modules with knowledge checks,
            an original question bank with rationales, and a timed final practice test — mapped to
            public competency domains for the credential style it supports.
          </p>

          {/* Search + field filter */}
          <div className="mt-8 flex max-w-xl items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tracks, domains, credentials…"
                className="pl-9"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setField('all')}
              className={cn(
                'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
                field === 'all' ? 'border-primary bg-primary text-white' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              All fields
            </button>
            {FIELDS.map((f) => (
              <button
                key={f.id}
                onClick={() => setField(f.id)}
                className={cn(
                  'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
                  field === f.id ? 'text-white' : 'text-muted-foreground hover:text-foreground',
                )}
                style={field === f.id ? { backgroundColor: f.color, borderColor: f.color } : undefined}
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Track grid */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-6 text-sm text-muted-foreground">
            Showing {tracks.length} track{tracks.length === 1 ? '' : 's'}
            {field !== 'all' && ` in ${FIELDS.find((f) => f.id === field)?.name}`}
            {query && ` matching “${query}”`}
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((t) => {
              const f = FIELDS.find((x) => x.id === t.category)!
              return (
                <Card key={t.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" style={{ color: f.color, borderColor: f.color }}>
                        {f.shortName}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" /> ~{t.estimatedWeeks} weeks
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-snug">{t.name}</CardTitle>
                    <p className="text-xs font-medium text-muted-foreground">{t.credentialFocus}</p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <p className="text-sm leading-relaxed text-muted-foreground">{t.description}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Layers className="h-3.5 w-3.5" /> 10 modules
                      </span>
                      <span className="flex items-center gap-1">
                        <ListChecks className="h-3.5 w-3.5" /> {t.domains?.length ?? 8} domains
                      </span>
                    </div>
                    {t.domains && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {t.domains.slice(0, 4).map((d) => (
                          <span key={d} className="rounded bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600">
                            {d}
                          </span>
                        ))}
                        {t.domains.length > 4 && (
                          <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] text-slate-500">
                            +{t.domains.length - 4} more
                          </span>
                        )}
                      </div>
                    )}
                    <div className="mt-4 flex-1" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to={`/fields/${f.slug}`}>
                        Explore {f.shortName} field <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          {tracks.length === 0 && (
            <p className="py-16 text-center text-muted-foreground">
              No tracks match that search. Try a broader term or clear the field filter.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-white py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold">Licensing is by field — one license covers every track in it</h2>
          <p className="max-w-xl text-muted-foreground">
            A Field License unlocks an entire column of this catalog for up to 25 students.
          </p>
          <div className="flex gap-3">
            <Button asChild><Link to="/pricing">See license pricing</Link></Button>
            <Button variant="outline" asChild><Link to="/demo">Request School Demo</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
