import { Link } from 'react-router'
import { Printer, ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { useDB } from '@/lib/db'
import { computeReadiness, weakTopics, strongTopics } from '@/lib/scoring'
import { formatDate, pct } from '@/lib/format'
import type { Database, Module } from '@/lib/types'
import { READINESS_STATUS_LABELS } from '@/lib/types'
import { ReadinessBadge } from '@/components/StatusBadge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'

function moduleForTopic(modules: Module[], topic: string): Module | undefined {
  const t = topic.toLowerCase()
  return (
    modules.find((m) => m.title.toLowerCase() === t) ??
    modules.find((m) => m.title.toLowerCase().includes(t) || t.includes(m.title.toLowerCase()))
  )
}

function trackLessons(db: Database, trackId: string) {
  const moduleIds = new Set(db.modules.filter((m) => m.trackId === trackId).map((m) => m.id))
  return db.lessons.filter((l) => moduleIds.has(l.moduleId))
}

export default function StudentReport() {
  const { user } = useAuth()
  const db = useDB()
  if (!user) return null

  const enrollments = db.enrollments.filter((e) => e.studentId === user.id)
  const rows = enrollments
    .map((enrollment) => {
      const track = db.tracks.find((t) => t.id === enrollment.trackId)
      if (!track) return null
      const progress = db.progress.find((p) => p.studentId === user.id && p.trackId === track.id)
      const readiness = computeReadiness(db, user.id, track.id)
      const lessons = trackLessons(db, track.id)
      const done = progress
        ? progress.completedLessonIds.filter((id) => lessons.some((l) => l.id === id)).length
        : 0
      const completionPct = lessons.length > 0 ? (done / lessons.length) * 100 : 0
      const modules = db.modules.filter((m) => m.trackId === track.id).sort((a, b) => a.order - b.order)
      const attempts = db.attempts
        .filter((a) => a.studentId === user.id && a.trackId === track.id && a.completedAt != null)
        .sort((a, b) => (a.completedAt ?? '').localeCompare(b.completedAt ?? ''))
        .map((a) => ({
          attempt: a,
          title: db.assessments.find((x) => x.id === a.assessmentId)?.title ?? 'Assessment',
        }))
      return {
        track, progress, readiness, completionPct, modules, attempts,
        weak: weakTopics(progress),
        strong: strongTopics(progress),
      }
    })
    .filter((r): r is NonNullable<typeof r> => r !== null)

  return (
    <div className="mx-auto max-w-4xl space-y-4">
      <div className="flex items-center justify-between gap-3 no-print">
        <Button variant="outline" size="sm" asChild>
          <Link to="/app/student">
            <ArrowLeft className="h-4 w-4" /> Dashboard
          </Link>
        </Button>
        <div className="flex items-center gap-3">
          <p className="hidden text-xs text-muted-foreground sm:block">
            Reports are printable to PDF directly from your browser.
          </p>
          <Button size="sm" onClick={() => window.print()}>
            <Printer className="h-4 w-4" /> Download / Print PDF
          </Button>
        </div>
      </div>

      <div className="print-page rounded-lg border bg-white p-6 shadow-sm sm:p-10">
        {/* Report header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-bold tracking-tight">EduSphere USA</p>
            <p className="text-sm text-muted-foreground">Student Readiness Report</p>
          </div>
          <div className="text-right text-sm">
            <p className="font-medium">{user.name}</p>
            <p className="text-muted-foreground">{user.email}</p>
            <p className="mt-1 text-xs text-muted-foreground">Generated {formatDate(new Date().toISOString())}</p>
          </div>
        </div>
        <Separator className="my-6" />

        {rows.length === 0 && (
          <p className="py-8 text-center text-sm text-muted-foreground">
            No tracks assigned yet — contact your instructor.
          </p>
        )}

        {rows.map((r, i) => (
          <section key={r.track.id} className={i > 0 ? 'mt-10' : ''}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-base font-semibold">{r.track.name}</h2>
              <ReadinessBadge status={r.readiness.status} />
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">{r.track.credentialFocus}</p>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-md border p-3">
                <p className="text-xs text-muted-foreground">Completion</p>
                <p className="text-lg font-semibold tabular-nums">{pct(r.completionPct)}</p>
              </div>
              <div className="rounded-md border p-3">
                <p className="text-xs text-muted-foreground">Diagnostic baseline</p>
                <p className="text-lg font-semibold tabular-nums">
                  {r.progress?.diagnosticBaselinePct != null ? pct(r.progress.diagnosticBaselinePct) : 'Not taken'}
                </p>
              </div>
              <div className="rounded-md border p-3">
                <p className="text-xs text-muted-foreground">Readiness score</p>
                <p className="text-lg font-semibold tabular-nums">{r.readiness.score} / 100</p>
              </div>
              <div className="rounded-md border p-3">
                <p className="text-xs text-muted-foreground">Final practice</p>
                <p className="text-lg font-semibold tabular-nums">
                  {r.progress?.finalPracticeScorePct != null ? pct(r.progress.finalPracticeScorePct) : 'Not taken'}
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-emerald-700">
                  <TrendingUp className="h-3.5 w-3.5" /> Strong topics
                </p>
                {r.strong.length > 0 ? (
                  <ul className="space-y-1">
                    {r.strong.map((t) => (
                      <li key={t.topic} className="flex justify-between gap-2 text-sm">
                        <span>{t.topic}</span>
                        <span className="tabular-nums text-emerald-700">{pct(t.accuracy)}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">None yet — keep practicing.</p>
                )}
              </div>
              <div>
                <p className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-amber-700">
                  <TrendingDown className="h-3.5 w-3.5" /> Weak topics
                </p>
                {r.weak.length > 0 ? (
                  <ul className="space-y-1">
                    {r.weak.map((t) => (
                      <li key={t.topic} className="flex justify-between gap-2 text-sm">
                        <span>{t.topic}</span>
                        <span className="tabular-nums text-amber-700">{pct(t.accuracy)}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">No weak topics identified.</p>
                )}
              </div>
            </div>

            {r.weak.length > 0 && (
              <div className="mt-4">
                <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Recommended remediation
                </p>
                <ul className="space-y-1">
                  {r.weak.map((t) => {
                    const mod = moduleForTopic(r.modules, t.topic)
                    return (
                      <li key={t.topic} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {mod
                          ? `Review ${mod.title} lessons and retake the knowledge check (${t.topic}).`
                          : `Review ${t.topic} lessons and retake the knowledge check.`}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            <div className="mt-4">
              <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Practice test history
              </p>
              {r.attempts.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Assessment</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {r.attempts.map(({ attempt, title }) => (
                      <TableRow key={attempt.id}>
                        <TableCell className="text-sm">{title}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {attempt.completedAt ? formatDate(attempt.completedAt) : '—'}
                        </TableCell>
                        <TableCell className="text-right text-sm tabular-nums">
                          {attempt.scorePct != null ? pct(attempt.scorePct) : '—'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-sm text-muted-foreground">No assessments completed yet.</p>
              )}
            </div>

            <p className="mt-4 rounded-md bg-slate-50 p-3 text-sm">
              <span className="font-medium">Status: </span>
              {READINESS_STATUS_LABELS[r.readiness.status]} — readiness score {r.readiness.score}/100 on the{' '}
              {r.track.shortName} credential-aligned track.
            </p>
            {i < rows.length - 1 && <Separator className="mt-8" />}
          </section>
        ))}

        <Separator className="my-6" />
        <p className="text-xs leading-relaxed text-muted-foreground">
          This report summarizes progress on credential-aligned readiness content. Readiness scores indicate
          preparation progress only and do not guarantee certification exam outcomes. Generated by EduSphere USA.
        </p>
      </div>
    </div>
  )
}
