import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router'
import {
  Lock, Clock, ChevronLeft, ChevronRight, PlayCircle, CheckCircle2, XCircle, Timer, RotateCcw,
} from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { useDB, updateDB, uid } from '@/lib/db'
import { computeReadiness } from '@/lib/scoring'
import { pct } from '@/lib/format'
import type { Assessment, AssessmentKind, Question } from '@/lib/types'
import { ReadinessBadge } from '@/components/StatusBadge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const KIND_LABELS: Record<AssessmentKind, string> = {
  diagnostic: 'Diagnostic',
  knowledge_check: 'Knowledge check',
  practice: 'Practice',
  timed_final: 'Timed final',
}

const DIFFICULTY_STYLES: Record<Question['difficulty'], string> = {
  easy: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  medium: 'bg-amber-50 text-amber-700 border-amber-200',
  hard: 'bg-red-50 text-red-700 border-red-200',
}

type Phase = 'intro' | 'running' | 'results'

export default function AssessmentRunner() {
  const { user } = useAuth()
  const db = useDB()
  const { trackId, assessmentId } = useParams<{ trackId: string; assessmentId: string }>()

  const [phase, setPhase] = useState<Phase>('intro')
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [startedAt, setStartedAt] = useState<string | null>(null)
  const [timeLeftSec, setTimeLeftSec] = useState<number | null>(null)
  const [lastScore, setLastScore] = useState<number | null>(null)

  const answersRef = useRef(answers)
  answersRef.current = answers
  const startedAtRef = useRef(startedAt)
  startedAtRef.current = startedAt

  const assessment: Assessment | undefined = db.assessments.find(
    (a) => a.id === assessmentId && a.trackId === trackId,
  )
  const track = db.tracks.find((t) => t.id === trackId)
  const enrollment = db.enrollments.find((e) => e.studentId === user?.id && e.trackId === trackId)

  const questions: Question[] = useMemo(() => {
    if (!assessment) return []
    return assessment.questionIds
      .map((qid) => db.questions.find((q) => q.id === qid))
      .filter((q): q is Question => q !== undefined)
  }, [assessment, db.questions])

  const submit = () => {
    if (!user || !assessment || !track) return
    const now = new Date().toISOString()
    const current = answersRef.current
    const responses = questions.map((q) => {
      const selectedIndex = current[q.id] ?? -1
      return { questionId: q.id, selectedIndex, correct: selectedIndex === q.correctIndex }
    })
    const correctCount = responses.filter((r) => r.correct).length
    const scorePct = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0

    updateDB((d) => {
      d.attempts.push({
        id: uid('att'),
        assessmentId: assessment.id,
        studentId: user.id,
        trackId: track.id,
        startedAt: startedAtRef.current ?? now,
        completedAt: now,
        responses,
        scorePct,
      })
      let p = d.progress.find((x) => x.studentId === user.id && x.trackId === track.id)
      if (!p) {
        p = {
          studentId: user.id,
          trackId: track.id,
          completedLessonIds: [],
          practiceQuestionsCompleted: 0,
          practiceQuestionsCorrect: 0,
          topicStats: {},
          finalPracticeScorePct: null,
          diagnosticBaselinePct: null,
          lastActivityAt: now,
        }
        d.progress.push(p)
      }
      p.practiceQuestionsCompleted += questions.length
      p.practiceQuestionsCorrect += correctCount
      for (const q of questions) {
        const stat = p.topicStats[q.topic] ?? { attempted: 0, correct: 0 }
        stat.attempted += 1
        if ((current[q.id] ?? -1) === q.correctIndex) stat.correct += 1
        p.topicStats[q.topic] = stat
      }
      if (assessment.kind === 'diagnostic' && p.diagnosticBaselinePct == null) {
        p.diagnosticBaselinePct = scorePct
      }
      if (assessment.kind === 'timed_final') {
        p.finalPracticeScorePct = scorePct
      }
      p.lastActivityAt = now
    })

    setLastScore(scorePct)
    setPhase('results')
  }

  const submitRef = useRef(submit)
  submitRef.current = submit

  // Countdown timer — runs while the runner is active and the assessment has a time limit.
  useEffect(() => {
    if (phase !== 'running' || timeLeftSec == null) return
    if (timeLeftSec <= 0) {
      submitRef.current()
      return
    }
    const t = window.setTimeout(() => setTimeLeftSec((s) => (s == null ? s : s - 1)), 1000)
    return () => window.clearTimeout(t)
  }, [phase, timeLeftSec])

  if (!user) return null

  if (!track || !enrollment || !assessment) {
    return (
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <Lock className="h-8 w-8 text-muted-foreground" />
            <p className="font-medium">This assessment is locked</p>
            <p className="text-sm text-muted-foreground">
              You are not enrolled in this readiness track, or the assessment does not exist.
            </p>
            <Button variant="outline" asChild>
              <Link to="/app/student">Back to Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const estimatedMin = Math.max(
    1,
    Math.round(questions.reduce((s, q) => s + q.estimatedTimeSec, 0) / 60),
  )
  const priorAttempts = db.attempts.filter(
    (a) => a.assessmentId === assessment.id && a.studentId === user.id && a.completedAt != null,
  )

  const start = () => {
    setAnswers({})
    setIndex(0)
    setStartedAt(new Date().toISOString())
    setTimeLeftSec(assessment.timeLimitMin != null ? assessment.timeLimitMin * 60 : null)
    setPhase('running')
  }

  // ---------- Intro ----------
  if (phase === 'intro') {
    return (
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {KIND_LABELS[assessment.kind]}
              </Badge>
              <span className="text-xs text-muted-foreground">{track.name}</span>
            </div>
            <CardTitle className="text-xl">{assessment.title}</CardTitle>
            <CardDescription>
              Credential-aligned practice — results update your certification readiness score.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-md bg-slate-50 p-3">
                <p className="text-lg font-semibold tabular-nums">{questions.length}</p>
                <p className="text-xs text-muted-foreground">Questions</p>
              </div>
              <div className="rounded-md bg-slate-50 p-3">
                <p className="text-lg font-semibold tabular-nums">~{estimatedMin} min</p>
                <p className="text-xs text-muted-foreground">Estimated time</p>
              </div>
              <div className="rounded-md bg-slate-50 p-3">
                <p className="text-lg font-semibold tabular-nums">
                  {assessment.timeLimitMin != null ? `${assessment.timeLimitMin} min` : 'None'}
                </p>
                <p className="text-xs text-muted-foreground">Time limit</p>
              </div>
            </div>
            {assessment.kind === 'diagnostic' && priorAttempts.length > 0 && (
              <p className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">
                You have taken this diagnostic before. You can retake it, but your original baseline score is kept
                so your growth is measured accurately.
              </p>
            )}
            {assessment.kind === 'timed_final' && (
              <p className="rounded-md bg-blue-50 p-3 text-sm text-blue-800">
                This is a timed simulation. The test submits automatically when the timer reaches zero.
              </p>
            )}
            <Button className="w-full" onClick={start}>
              <PlayCircle className="h-4 w-4" /> Start assessment
            </Button>
            <Button variant="ghost" className="w-full" asChild>
              <Link to={`/app/student/track/${track.id}`}>Back to track</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // ---------- Results ----------
  if (phase === 'results') {
    const readiness = computeReadiness(db, user.id, track.id)
    return (
      <div className="mx-auto max-w-3xl space-y-6">
        <Card>
          <CardContent className="flex flex-col items-center gap-2 p-8 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {KIND_LABELS[assessment.kind]} complete
            </p>
            <p className="text-5xl font-semibold tabular-nums">{pct(lastScore ?? 0)}</p>
            <p className="text-sm text-muted-foreground">
              {lastScore != null && lastScore >= 70
                ? 'Strong result — this supports your certification readiness.'
                : 'Result recorded — review the explanations below and keep building readiness.'}
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Updated readiness score:</span>
              <span className="text-lg font-semibold tabular-nums">{readiness.score}</span>
              <ReadinessBadge status={readiness.status} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Question review</CardTitle>
            <CardDescription>Your answer vs. the correct answer, with an explanation for each question.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions.map((q, i) => {
              const selected = answers[q.id]
              const correct = selected === q.correctIndex
              return (
                <div key={q.id} className="rounded-md border p-4">
                  <div className="flex items-start gap-2">
                    {correct ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    ) : (
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">
                        {i + 1}. {q.text}
                      </p>
                      <p className="mt-1.5 text-sm">
                        <span className="text-muted-foreground">Your answer: </span>
                        <span className={correct ? 'text-emerald-700' : 'text-red-600'}>
                          {selected != null ? q.choices[selected] : 'No answer'}
                        </span>
                      </p>
                      {!correct && (
                        <p className="mt-0.5 text-sm">
                          <span className="text-muted-foreground">Correct answer: </span>
                          <span className="text-emerald-700">{q.choices[q.correctIndex]}</span>
                        </p>
                      )}
                      <p className="mt-1.5 rounded bg-slate-50 p-2 text-xs leading-relaxed text-muted-foreground">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <Link to={`/app/student/track/${track.id}`}>Back to track</Link>
          </Button>
          <Button variant="outline" onClick={() => setPhase('intro')}>
            <RotateCcw className="h-4 w-4" /> Retake
          </Button>
        </div>
      </div>
    )
  }

  // ---------- Runner ----------
  const q = questions[index]
  const mm = timeLeftSec != null ? Math.floor(timeLeftSec / 60) : 0
  const ss = timeLeftSec != null ? String(timeLeftSec % 60).padStart(2, '0') : ''
  const isLast = index === questions.length - 1

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>
              Question {index + 1} of {questions.length}
            </span>
            <span>{KIND_LABELS[assessment.kind]}</span>
          </div>
          <Progress value={((index + 1) / questions.length) * 100} className="mt-1" />
        </div>
        {timeLeftSec != null && (
          <Badge
            variant="outline"
            className={cn(
              'shrink-0 tabular-nums',
              timeLeftSec <= 60 ? 'bg-red-50 text-red-700 border-red-200' : 'bg-blue-50 text-blue-700 border-blue-200',
            )}
          >
            <Timer className="mr-1 h-3.5 w-3.5" />
            {mm}:{ss}
          </Badge>
        )}
      </div>

      {q && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className={DIFFICULTY_STYLES[q.difficulty]}>
                {q.difficulty}
              </Badge>
              <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200">
                {q.topic}
              </Badge>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> ~{q.estimatedTimeSec}s
              </span>
            </div>
            <CardTitle className="text-base leading-relaxed">{q.text}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup
              value={answers[q.id] != null ? String(answers[q.id]) : undefined}
              onValueChange={(v) => setAnswers((a) => ({ ...a, [q.id]: Number(v) }))}
              className="space-y-2"
            >
              {q.choices.map((choice, ci) => (
                <div
                  key={ci}
                  className={cn(
                    'flex items-center gap-3 rounded-md border p-3 transition-colors',
                    answers[q.id] === ci ? 'border-primary bg-accent' : 'hover:bg-slate-50',
                  )}
                >
                  <RadioGroupItem value={String(ci)} id={`q-${q.id}-${ci}`} />
                  <Label htmlFor={`q-${q.id}-${ci}`} className="flex-1 cursor-pointer text-sm font-normal">
                    {choice}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <Separator />
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                disabled={index === 0}
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
              {isLast ? (
                <Button size="sm" onClick={submit} disabled={answers[q.id] == null}>
                  Submit assessment
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}
                  disabled={answers[q.id] == null}
                >
                  Next <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
