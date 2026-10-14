// Interactive activity player: renders all 7 activity types with instant
// feedback, scoring, and retry. Used in student lessons, track simulations,
// and the admin preview player.
import { useMemo, useState } from 'react'
import { ArrowDown, ArrowUp, CheckCircle2, RotateCcw, XCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import type { Activity } from '@/lib/types'
import { cn } from '@/lib/utils'

const TYPE_LABEL: Record<Activity['type'], string> = {
  matching: 'Matching',
  sequencing: 'Sequencing',
  scenario: 'Scenario decision',
  spotting: 'Spot the issues',
  checklist: 'Checklist challenge',
  calculator: 'Calculation',
  review_quiz: 'Review quiz',
}

function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr]
  let s = seed || 1
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280
    const j = Math.floor((s / 233280) * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function Feedback({ ok, text }: { ok: boolean; text: string }) {
  return (
    <div
      className={cn(
        'mt-3 flex items-start gap-2 rounded-md border p-3 text-sm',
        ok ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-red-200 bg-red-50 text-red-800',
      )}
    >
      {ok ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0" />}
      <span>{text}</span>
    </div>
  )
}

function MatchingPlayer({ activity, onDone }: { activity: Activity; onDone: (score: number, total: number) => void }) {
  const pairs = activity.pairs ?? []
  const rights = useMemo(() => shuffle(pairs.map((p) => p.right), activity.id.length * 7), [pairs, activity.id])
  const [selLeft, setSelLeft] = useState<number | null>(null)
  const [matched, setMatched] = useState<Record<number, number>>({}) // leftIdx -> rightIdx
  const [checked, setChecked] = useState(false)
  const usedRights = new Set(Object.values(matched))

  const pick = (side: 'l' | 'r', idx: number) => {
    if (checked) return
    if (side === 'l') {
      if (matched[idx] !== undefined) return
      setSelLeft(selLeft === idx ? null : idx)
      return
    }
    if (selLeft === null || usedRights.has(idx)) return
    setMatched((m) => ({ ...m, [selLeft]: idx }))
    setSelLeft(null)
  }

  const total = pairs.length
  const correct = pairs.filter((_, i) => matched[i] !== undefined && pairs[i].right === rights[matched[i]]).length
  const complete = Object.keys(matched).length === total

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          {pairs.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => pick('l', i)}
              disabled={checked || matched[i] !== undefined}
              className={cn(
                'w-full rounded-md border p-2.5 text-left text-sm transition-colors',
                matched[i] !== undefined
                  ? checked
                    ? pairs[i].right === rights[matched[i]]
                      ? 'border-emerald-300 bg-emerald-50'
                      : 'border-red-300 bg-red-50'
                    : 'border-primary/40 bg-primary/5'
                  : selLeft === i
                    ? 'border-primary bg-primary/10'
                    : 'hover:border-primary/50',
              )}
            >
              {p.left}
              {matched[i] !== undefined && <span className="mt-1 block text-xs text-muted-foreground">→ {rights[matched[i]]}</span>}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {rights.map((r, i) => (
            <button
              key={i}
              type="button"
              onClick={() => pick('r', i)}
              disabled={checked || usedRights.has(i)}
              className={cn(
                'w-full rounded-md border p-2.5 text-left text-sm transition-colors',
                usedRights.has(i) ? 'opacity-40' : selLeft !== null ? 'border-dashed border-primary/60 hover:bg-primary/5' : '',
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        {!checked ? (
          <Button size="sm" disabled={!complete} onClick={() => { setChecked(true); onDone(correct, total) }}>
            Check matches
          </Button>
        ) : (
          <>
            <Badge variant={correct === total ? 'default' : 'secondary'}>{correct} / {total} correct</Badge>
            {!checked || correct !== total ? (
              <Button size="sm" variant="outline" onClick={() => { setMatched({}); setChecked(false); setSelLeft(null) }}>
                <RotateCcw className="mr-1 h-3.5 w-3.5" /> Retry
              </Button>
            ) : null}
          </>
        )}
      </div>
      {checked && (
        <Feedback
          ok={correct === total}
          text={correct === total ? 'Perfect match — every pair is correct.' : 'Some pairs are mismatched. The red cards show errors; retry to fix them.'}
        />
      )}
    </div>
  )
}

function SequencingPlayer({ activity, onDone }: { activity: Activity; onDone: (score: number, total: number) => void }) {
  const correct = activity.steps ?? []
  const [items, setItems] = useState<string[]>(() => shuffle(correct, activity.id.length * 13))
  const [checked, setChecked] = useState(false)

  const move = (i: number, dir: -1 | 1) => {
    if (checked) return
    const j = i + dir
    if (j < 0 || j >= items.length) return
    const next = [...items]
    ;[next[i], next[j]] = [next[j], next[i]]
    setItems(next)
  }

  const placedRight = items.filter((it, i) => it === correct[i]).length
  const total = correct.length
  const perfect = placedRight === total

  return (
    <div>
      <ol className="space-y-2">
        {items.map((it, i) => (
          <li
            key={it}
            className={cn(
              'flex items-center gap-2 rounded-md border p-2.5 text-sm',
              checked ? (it === correct[i] ? 'border-emerald-300 bg-emerald-50' : 'border-red-300 bg-red-50') : '',
            )}
          >
            <span className="w-6 shrink-0 text-center font-semibold text-muted-foreground">{i + 1}</span>
            <span className="flex-1">{it}</span>
            {!checked && (
              <span className="flex gap-1">
                <Button size="icon" variant="ghost" className="h-7 w-7" disabled={i === 0} onClick={() => move(i, -1)}>
                  <ArrowUp className="h-3.5 w-3.5" />
                </Button>
                <Button size="icon" variant="ghost" className="h-7 w-7" disabled={i === items.length - 1} onClick={() => move(i, 1)}>
                  <ArrowDown className="h-3.5 w-3.5" />
                </Button>
              </span>
            )}
          </li>
        ))}
      </ol>
      <div className="mt-4 flex items-center gap-3">
        {!checked ? (
          <Button size="sm" onClick={() => { setChecked(true); onDone(placedRight, total) }}>Check order</Button>
        ) : (
          <>
            <Badge variant={perfect ? 'default' : 'secondary'}>{placedRight} / {total} in position</Badge>
            {!perfect && (
              <Button size="sm" variant="outline" onClick={() => setChecked(false)}>
                <RotateCcw className="mr-1 h-3.5 w-3.5" /> Keep arranging
              </Button>
            )}
          </>
        )}
      </div>
      {checked && (
        <Feedback
          ok={perfect}
          text={perfect ? 'Flawless sequence — exactly right.' : 'Green steps are in the correct position; red steps still need to move.'}
        />
      )}
    </div>
  )
}

function ScenarioPlayer({ activity, onDone }: { activity: Activity; onDone: (score: number, total: number) => void }) {
  const s = activity.scenario
  const [picked, setPicked] = useState<number | null>(null)
  if (!s) return null
  const ok = picked === s.correctIndex
  return (
    <div>
      <p className="rounded-md border border-blue-200 bg-blue-50 p-3 text-sm text-blue-900">{s.prompt}</p>
      <div className="mt-3 space-y-2">
        {s.options.map((o, i) => (
          <button
            key={i}
            type="button"
            disabled={picked !== null}
            onClick={() => { setPicked(i); onDone(i === s.correctIndex ? 1 : 0, 1) }}
            className={cn(
              'w-full rounded-md border p-2.5 text-left text-sm transition-colors',
              picked === null
                ? 'hover:border-primary/60'
                : i === s.correctIndex
                  ? 'border-emerald-300 bg-emerald-50'
                  : i === picked
                    ? 'border-red-300 bg-red-50'
                    : 'opacity-60',
            )}
          >
            {o}
          </button>
        ))}
      </div>
      {picked !== null && (
        <>
          <Feedback ok={ok} text={s.feedback} />
          <Button size="sm" variant="outline" className="mt-3" onClick={() => setPicked(null)}>
            <RotateCcw className="mr-1 h-3.5 w-3.5" /> Try again
          </Button>
        </>
      )}
    </div>
  )
}

function SpottingPlayer({ activity, onDone }: { activity: Activity; onDone: (score: number, total: number) => void }) {
  const spots = activity.spots ?? []
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [checked, setChecked] = useState(false)
  const issueIdx = spots.map((s, i) => (s.isIssue ? i : -1)).filter((i) => i >= 0)

  const toggle = (i: number) => {
    if (checked) return
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  const found = issueIdx.filter((i) => selected.has(i)).length
  const falseAlarms = [...selected].filter((i) => !spots[i].isIssue).length
  const perfect = found === issueIdx.length && falseAlarms === 0

  return (
    <div>
      <div className="space-y-2">
        {spots.map((s, i) => {
          const state = checked ? (s.isIssue ? (selected.has(i) ? 'hit' : 'missed') : selected.has(i) ? 'false' : 'ok') : selected.has(i) ? 'sel' : 'idle'
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              className={cn(
                'w-full rounded-md border p-2.5 text-left text-sm transition-colors',
                state === 'sel' && 'border-primary bg-primary/10',
                state === 'hit' && 'border-emerald-300 bg-emerald-50',
                state === 'missed' && 'border-amber-300 bg-amber-50',
                state === 'false' && 'border-red-300 bg-red-50',
                state === 'idle' && 'hover:border-primary/50',
              )}
            >
              {s.text}
              {checked && (s.isIssue || selected.has(i)) && (
                <span className="mt-1 block text-xs text-muted-foreground">{s.note}</span>
              )}
            </button>
          )
        })}
      </div>
      <div className="mt-4 flex items-center gap-3">
        {!checked ? (
          <Button size="sm" disabled={selected.size === 0} onClick={() => { setChecked(true); onDone(Math.max(0, found - falseAlarms), issueIdx.length) }}>
            Check findings
          </Button>
        ) : (
          <>
            <Badge variant={perfect ? 'default' : 'secondary'}>{found} / {issueIdx.length} issues found{falseAlarms > 0 ? ` · ${falseAlarms} false` : ''}</Badge>
            {!perfect && (
              <Button size="sm" variant="outline" onClick={() => { setChecked(false) }}>
                <RotateCcw className="mr-1 h-3.5 w-3.5" /> Keep looking
              </Button>
            )}
          </>
        )}
      </div>
      {checked && (
        <Feedback
          ok={perfect}
          text={perfect ? 'Sharp eye — every issue spotted, no false alarms.' : 'Green = found, amber = missed issue, red = flagged but actually fine.'}
        />
      )}
    </div>
  )
}

function ChecklistPlayer({ activity, onDone }: { activity: Activity; onDone: (score: number, total: number) => void }) {
  const items = activity.checklist ?? []
  const [checks, setChecks] = useState<Set<number>>(new Set())
  const [checked, setChecked] = useState(false)
  const required = items.map((it, i) => (it.required ? i : -1)).filter((i) => i >= 0)

  const toggle = (i: number) => {
    if (checked) return
    setChecks((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  const reqChecked = required.filter((i) => checks.has(i)).length
  const wrongChecks = [...checks].filter((i) => !items[i].required).length
  const perfect = reqChecked === required.length && wrongChecks === 0

  return (
    <div>
      <div className="space-y-2">
        {items.map((it, i) => {
          const state = checked ? (it.required ? (checks.has(i) ? 'hit' : 'missed') : checks.has(i) ? 'false' : 'ok') : 'idle'
          return (
            <label
              key={i}
              className={cn(
                'flex items-start gap-3 rounded-md border p-2.5 text-sm transition-colors',
                !checked && 'cursor-pointer hover:border-primary/50',
                state === 'hit' && 'border-emerald-300 bg-emerald-50',
                state === 'missed' && 'border-amber-300 bg-amber-50',
                state === 'false' && 'border-red-300 bg-red-50',
              )}
            >
              <Checkbox checked={checks.has(i)} onCheckedChange={() => toggle(i)} disabled={checked} className="mt-0.5" />
              <span>
                {it.item}
                {checked && it.note && <span className="mt-0.5 block text-xs text-muted-foreground">{it.note}</span>}
              </span>
            </label>
          )
        })}
      </div>
      <div className="mt-4 flex items-center gap-3">
        {!checked ? (
          <Button size="sm" onClick={() => { setChecked(true); onDone(Math.max(0, reqChecked - wrongChecks), required.length) }}>
            Check list
          </Button>
        ) : (
          <>
            <Badge variant={perfect ? 'default' : 'secondary'}>
              {reqChecked} / {required.length} required steps{wrongChecks > 0 ? ` · ${wrongChecks} unnecessary` : ''}
            </Badge>
            {!perfect && (
              <Button size="sm" variant="outline" onClick={() => setChecked(false)}>
                <RotateCcw className="mr-1 h-3.5 w-3.5" /> Retry
              </Button>
            )}
          </>
        )}
      </div>
      {checked && (
        <Feedback
          ok={perfect}
          text={perfect ? 'Complete and precise — every required step, nothing extra.' : 'Green = correctly checked, amber = required but missed, red = not part of this procedure.'}
        />
      )}
    </div>
  )
}

function CalculatorPlayer({ activity, onDone }: { activity: Activity; onDone: (score: number, total: number) => void }) {
  const calc = activity.calculator
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)
  if (!calc) return null
  const num = parseFloat(value.replace(/,/g, ''))
  const ok = !Number.isNaN(num) && Math.abs(num - calc.answer) <= calc.tolerance

  return (
    <div>
      <div className="rounded-md border bg-slate-50 p-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Given</p>
        <ul className="grid gap-1 text-sm sm:grid-cols-2">
          {calc.givens.map((g, i) => (
            <li key={i} className="flex justify-between gap-4 border-b border-dashed pb-1">
              <span>{g.label}</span>
              <span className="font-mono font-medium tabular-nums">{g.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-3 text-sm font-medium">{calc.question}</p>
      <div className="mt-2 flex items-center gap-2">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={checked}
          placeholder="Your answer"
          className="max-w-[180px] font-mono"
          inputMode="decimal"
        />
        {calc.unit && <span className="text-sm text-muted-foreground">{calc.unit}</span>}
        {!checked && (
          <Button size="sm" disabled={value.trim() === ''} onClick={() => { setChecked(true); onDone(ok ? 1 : 0, 1) }}>
            Check
          </Button>
        )}
      </div>
      {checked && (
        <>
          <Feedback
            ok={ok}
            text={ok ? `Correct — ${calc.answer}${calc.unit ? ` ${calc.unit}` : ''}. ${calc.explanation}` : `Not quite. ${calc.explanation}`}
          />
          {!ok && (
            <Button size="sm" variant="outline" className="mt-3" onClick={() => { setChecked(false); setValue('') }}>
              <RotateCcw className="mr-1 h-3.5 w-3.5" /> Try again
            </Button>
          )}
        </>
      )}
    </div>
  )
}

function ReviewQuizPlayer({ activity, onDone }: { activity: Activity; onDone: (score: number, total: number) => void }) {
  const qs = activity.questions ?? []
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [checked, setChecked] = useState(false)
  const total = qs.length
  const correct = qs.filter((q, i) => answers[i] === q.answer).length
  const complete = Object.keys(answers).length === total

  return (
    <div className="space-y-5">
      {qs.map((q, qi) => (
        <div key={qi}>
          <p className="text-sm font-medium">
            {qi + 1}. {q.q}
          </p>
          <div className="mt-2 space-y-1.5">
            {q.choices.map((c, ci) => {
              const picked = answers[qi] === ci
              return (
                <button
                  key={ci}
                  type="button"
                  disabled={checked}
                  onClick={() => setAnswers((a) => ({ ...a, [qi]: ci }))}
                  className={cn(
                    'w-full rounded-md border p-2 text-left text-sm transition-colors',
                    !checked && (picked ? 'border-primary bg-primary/10' : 'hover:border-primary/50'),
                    checked && ci === q.answer && 'border-emerald-300 bg-emerald-50',
                    checked && picked && ci !== q.answer && 'border-red-300 bg-red-50',
                    checked && !picked && ci !== q.answer && 'opacity-60',
                  )}
                >
                  {c}
                </button>
              )
            })}
          </div>
          {checked && <p className="mt-1.5 text-xs text-muted-foreground">{q.why}</p>}
        </div>
      ))}
      <div className="flex items-center gap-3">
        {!checked ? (
          <Button size="sm" disabled={!complete} onClick={() => { setChecked(true); onDone(correct, total) }}>
            Check answers
          </Button>
        ) : (
          <>
            <Badge variant={correct === total ? 'default' : 'secondary'}>{correct} / {total} correct</Badge>
            <Button size="sm" variant="outline" onClick={() => { setAnswers({}); setChecked(false) }}>
              <RotateCcw className="mr-1 h-3.5 w-3.5" /> Retry quiz
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export function ActivityPlayer({ activity, compact }: { activity: Activity; compact?: boolean }) {
  const [lastScore, setLastScore] = useState<{ score: number; total: number } | null>(null)
  const onDone = (score: number, total: number) => setLastScore({ score, total })
  return (
    <Card className={compact ? 'border-primary/20' : ''}>
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="text-base">{activity.title}</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{TYPE_LABEL[activity.type]}</Badge>
            <Badge variant="secondary" className="capitalize">{activity.difficulty}</Badge>
            <span className="text-xs text-muted-foreground">~{activity.estMinutes} min</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{activity.instructions}</p>
      </CardHeader>
      <CardContent>
        {activity.type === 'matching' && <MatchingPlayer activity={activity} onDone={onDone} />}
        {activity.type === 'sequencing' && <SequencingPlayer activity={activity} onDone={onDone} />}
        {activity.type === 'scenario' && <ScenarioPlayer activity={activity} onDone={onDone} />}
        {activity.type === 'spotting' && <SpottingPlayer activity={activity} onDone={onDone} />}
        {activity.type === 'checklist' && <ChecklistPlayer activity={activity} onDone={onDone} />}
        {activity.type === 'calculator' && <CalculatorPlayer activity={activity} onDone={onDone} />}
        {activity.type === 'review_quiz' && <ReviewQuizPlayer activity={activity} onDone={onDone} />}
        {lastScore && lastScore.score === lastScore.total && (
          <p className="mt-3 text-sm font-medium text-emerald-700">Completed — {lastScore.score}/{lastScore.total}. Well done.</p>
        )}
      </CardContent>
    </Card>
  )
}

/** Small inline quick-check MC with instant feedback, for lesson enrichment. */
export function QuickCheck({ items }: { items: { q: string; choices: string[]; answer: number; why: string }[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  return (
    <div className="space-y-4">
      {items.map((item, qi) => {
        const picked = answers[qi]
        return (
          <div key={qi} className="rounded-md border p-3">
            <p className="text-sm font-medium">{item.q}</p>
            <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {item.choices.map((c, ci) => (
                <button
                  key={ci}
                  type="button"
                  disabled={picked !== undefined}
                  onClick={() => setAnswers((a) => ({ ...a, [qi]: ci }))}
                  className={cn(
                    'rounded-md border p-2 text-left text-sm transition-colors',
                    picked === undefined
                      ? 'hover:border-primary/60'
                      : ci === item.answer
                        ? 'border-emerald-300 bg-emerald-50'
                        : ci === picked
                          ? 'border-red-300 bg-red-50'
                          : 'opacity-60',
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            {picked !== undefined && (
              <p className="mt-2 text-xs text-muted-foreground">
                {picked === item.answer ? 'Correct. ' : 'Not quite. '}
                {item.why}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
