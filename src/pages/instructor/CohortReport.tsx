// Printable instructor cohort report (print-page / no-print pattern).
import { Printer } from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { useDB } from '@/lib/db'
import { computeReadiness, strongTopics, weakTopics } from '@/lib/scoring'
import { formatDate, pct } from '@/lib/format'
import { ReadinessBadge } from '@/components/StatusBadge'
import { Button } from '@/components/ui/button'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'

export default function CohortReport() {
  const { user } = useAuth()
  const db = useDB()
  if (!user || !user.orgId) return null
  const orgId = user.orgId

  const org = db.organizations.find((o) => o.id === orgId)
  const orgEnrollments = db.enrollments.filter((e) => e.orgId === orgId)

  const rows = orgEnrollments.map((e) => {
    const student = db.users.find((u) => u.id === e.studentId && u.orgId === orgId)
    const track = db.tracks.find((t) => t.id === e.trackId)
    const readiness = computeReadiness(db, e.studentId, e.trackId)
    const progress = db.progress.find((p) => p.studentId === e.studentId && p.trackId === e.trackId)
    const strong = strongTopics(progress).slice(0, 2)
    const weak = weakTopics(progress).slice(0, 2)
    const remediation = weak.length > 0
      ? `Re-teach ${weak[0].topic} in small groups`
      : readiness.components.moduleCompletion < 100
        ? 'Continue module completion'
        : 'Proceed to timed final review'
    return { enrollment: e, student, track, readiness, progress, strong, weak, remediation }
  }).filter((r) => r.student && r.track)

  const studentCount = new Set(rows.map((r) => r.student!.id)).size
  const avgReadiness = rows.length
    ? Math.round(rows.reduce((s, r) => s + r.readiness.score, 0) / rows.length)
    : 0
  const atRiskCount = new Set(
    rows.filter((r) => r.readiness.status === 'needs_support').map((r) => r.student!.id),
  ).size
  const completionRate = rows.length
    ? Math.round(rows.reduce((s, r) => s + r.readiness.components.moduleCompletion, 0) / rows.length)
    : 0

  // Cohort-level topic weakness summary
  const topicMap = new Map<string, { attempted: number; correct: number }>()
  for (const r of rows) {
    for (const [topic, s] of Object.entries(r.progress?.topicStats ?? {})) {
      const entry = topicMap.get(topic) ?? { attempted: 0, correct: 0 }
      entry.attempted += s.attempted
      entry.correct += s.correct
      topicMap.set(topic, entry)
    }
  }
  const topicSummary = [...topicMap.entries()]
    .map(([topic, v]) => ({
      topic,
      accuracy: v.attempted > 0 ? Math.round((v.correct / v.attempted) * 100) : 0,
      attempted: v.attempted,
    }))
    .filter((t) => t.attempted >= 4)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 8)

  // Most missed questions across the cohort (from completed attempts).
  const orgStudentIds = new Set(rows.map((r) => r.student!.id))
  const questionMiss = new Map<string, { total: number; missed: number }>()
  for (const att of db.attempts) {
    if (!att.completedAt || !orgStudentIds.has(att.studentId)) continue
    for (const resp of att.responses) {
      const entry = questionMiss.get(resp.questionId) ?? { total: 0, missed: 0 }
      entry.total += 1
      if (!resp.correct) entry.missed += 1
      questionMiss.set(resp.questionId, entry)
    }
  }
  const mostMissed = [...questionMiss.entries()]
    .map(([qid, v]) => {
      const q = db.questions.find((x) => x.id === qid)
      return q
        ? { question: q, total: v.total, missed: v.missed, missRate: Math.round((v.missed / v.total) * 100) }
        : null
    })
    .filter((x): x is NonNullable<typeof x> => x !== null && x.total >= 3)
    .sort((a, b) => b.missRate - a.missRate)
    .slice(0, 8)

  // Instructor action recommendations, derived from the cohort data above.
  const recommendations: string[] = []
  for (const t of topicSummary.filter((t) => t.accuracy < 70).slice(0, 2)) {
    recommendations.push(`Re-teach "${t.topic}" in small groups — cohort accuracy is ${t.accuracy}%.`)
  }
  if (atRiskCount > 0) {
    recommendations.push(`Schedule 1:1 check-ins with the ${atRiskCount} student${atRiskCount > 1 ? 's' : ''} currently flagged at risk.`)
  }
  if (mostMissed.length > 0 && mostMissed[0].missRate >= 60) {
    recommendations.push(
      `Walk through the top-missed question ("${mostMissed[0].question.text.slice(0, 60)}…") as a bell ringer — ${mostMissed[0].missRate}% of attempts miss it.`,
    )
  }
  if (completionRate < 70) {
    recommendations.push('Protect seat time this week — module completion is below 70% across the cohort.')
  }
  const noDiagnostic = rows.filter((r) => r.progress?.diagnosticBaselinePct == null).length
  if (noDiagnostic > 0) {
    recommendations.push(`Have the ${noDiagnostic} enrollment${noDiagnostic > 1 ? 's' : ''} without a baseline complete the diagnostic so growth is measurable.`)
  }
  if (recommendations.length === 0) {
    recommendations.push('Cohort is on track — proceed to timed final practice and readiness reviews.')
  }

  return (
    <div className="space-y-4">
      <div className="no-print flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Print-ready cohort report. Use your browser's print dialog to save as PDF.
        </p>
        <Button onClick={() => window.print()} size="sm">
          <Printer className="mr-2 h-4 w-4" /> Print / Save PDF
        </Button>
      </div>

      <div className="print-page mx-auto max-w-5xl rounded-lg border bg-white p-8 shadow-sm">
        {/* Header */}
        <header className="border-b pb-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                EduSphere USA
              </p>
              <h1 className="mt-1 text-2xl font-semibold">Instructor Cohort Report</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {org?.name ?? 'Organization'} · Instructor: {user.name}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{formatDate(new Date().toISOString())}</p>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Students', value: String(studentCount) },
            { label: 'Avg readiness', value: `${avgReadiness}/100` },
            { label: 'At risk', value: String(atRiskCount) },
            { label: 'Completion rate', value: pct(completionRate) },
          ].map((s) => (
            <div key={s.label} className="rounded-md border p-3">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{s.label}</p>
              <p className="mt-1 text-xl font-semibold tabular-nums">{s.value}</p>
            </div>
          ))}
        </section>

        {/* Student table */}
        <section className="mt-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Student readiness detail
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Track</TableHead>
                <TableHead className="text-right">Completion</TableHead>
                <TableHead className="text-right">Diagnostic</TableHead>
                <TableHead className="text-right">Readiness</TableHead>
                <TableHead>Strong topics</TableHead>
                <TableHead>Weak topics</TableHead>
                <TableHead>Remediation</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.enrollment.id}>
                  <TableCell className="font-medium">{r.student!.name}</TableCell>
                  <TableCell>{r.track!.shortName}</TableCell>
                  <TableCell className="text-right tabular-nums">
                    {pct(r.readiness.components.moduleCompletion)}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {r.progress?.diagnosticBaselinePct != null ? pct(r.progress.diagnosticBaselinePct) : '—'}
                  </TableCell>
                  <TableCell className="text-right tabular-nums font-medium">{r.readiness.score}</TableCell>
                  <TableCell className="text-xs">
                    {r.strong.length > 0 ? r.strong.map((t) => t.topic).join(', ') : '—'}
                  </TableCell>
                  <TableCell className="text-xs">
                    {r.weak.length > 0 ? r.weak.map((t) => t.topic).join(', ') : '—'}
                  </TableCell>
                  <TableCell className="text-xs">{r.remediation}</TableCell>
                  <TableCell><ReadinessBadge status={r.readiness.status} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Cohort topic weakness summary */}
        <section className="mt-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Cohort topic weakness summary
          </h2>
          {topicSummary.length === 0 ? (
            <p className="text-sm text-muted-foreground">Not enough practice data to summarize topics.</p>
          ) : (
            <ul className="space-y-2">
              {topicSummary.map((t) => (
                <li key={t.topic} className="flex items-center gap-3 text-sm">
                  <span className="w-56 shrink-0 truncate">{t.topic}</span>
                  <div className="h-2.5 flex-1 rounded-full bg-slate-100">
                    <div
                      className={`h-2.5 rounded-full ${t.accuracy < 70 ? 'bg-red-500' : t.accuracy < 80 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                      style={{ width: `${t.accuracy}%` }}
                    />
                  </div>
                  <span className="w-10 shrink-0 text-right tabular-nums text-muted-foreground">
                    {t.accuracy}%
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Most missed questions */}
        <section className="mt-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Most missed questions
          </h2>
          {mostMissed.length === 0 ? (
            <p className="text-sm text-muted-foreground">Not enough completed attempts to rank questions.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Question</TableHead>
                  <TableHead>Track</TableHead>
                  <TableHead>Topic</TableHead>
                  <TableHead className="text-right">Attempts</TableHead>
                  <TableHead className="text-right">Miss rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mostMissed.map((m) => (
                  <TableRow key={m.question.id}>
                    <TableCell className="max-w-md text-xs">
                      {m.question.text.length > 110 ? `${m.question.text.slice(0, 110)}…` : m.question.text}
                    </TableCell>
                    <TableCell className="text-xs">
                      {db.tracks.find((t) => t.id === m.question.trackId)?.shortName ?? '—'}
                    </TableCell>
                    <TableCell className="text-xs">{m.question.topic}</TableCell>
                    <TableCell className="text-right tabular-nums">{m.total}</TableCell>
                    <TableCell className="text-right font-medium tabular-nums text-red-700">{m.missRate}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </section>

        {/* Instructor action recommendations */}
        <section className="mt-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Recommended instructor actions
          </h2>
          <ol className="list-decimal space-y-1.5 pl-5 text-sm">
            {recommendations.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ol>
        </section>

        {/* Footer */}
        <footer className="mt-8 border-t pt-4">
          <p className="text-xs text-muted-foreground">
            EduSphere USA readiness tracking supports instruction and credential-aligned preparation.
            Readiness scores are instructional indicators and do not guarantee certification exam passage.
          </p>
        </footer>
      </div>
    </div>
  )
}
