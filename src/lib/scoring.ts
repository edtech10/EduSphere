// Readiness scoring model.
// score = 40% practice accuracy + 25% diagnostic improvement
//       + 20% module completion + 15% final practice test
// Weights are stored in db.settings.scoringWeights and adjustable in Super Admin settings.
import type { Database, ReadinessScore, ReadinessStatus, ScoringWeights, StudentProgress } from './types'

export const DEFAULT_WEIGHTS: ScoringWeights = {
  practiceAccuracy: 0.4,
  diagnosticImprovement: 0.25,
  moduleCompletion: 0.2,
  finalPractice: 0.15,
}

export function statusForScore(score: number, hasActivity: boolean): ReadinessStatus {
  if (!hasActivity || score <= 0) return 'not_started'
  if (score < 40) return 'needs_support'
  if (score < 60) return 'building_readiness'
  if (score < 80) return 'near_ready'
  return 'ready_for_final_review'
}

export function computeReadiness(
  db: Database,
  studentId: string,
  trackId: string,
): ReadinessScore {
  const weights = db.settings?.scoringWeights ?? DEFAULT_WEIGHTS
  const progress = db.progress.find((p) => p.studentId === studentId && p.trackId === trackId)
  const trackModules = db.modules.filter((m) => m.trackId === trackId)
  const trackLessons = db.lessons.filter((l) => trackModules.some((m) => m.id === l.moduleId))

  const practiceAccuracy =
    progress && progress.practiceQuestionsCompleted > 0
      ? (progress.practiceQuestionsCorrect / progress.practiceQuestionsCompleted) * 100
      : 0

  let diagnosticImprovement = 0
  if (progress?.diagnosticBaselinePct != null) {
    const baseline = progress.diagnosticBaselinePct
    const currentProxy = Math.max(
      practiceAccuracy,
      progress.finalPracticeScorePct ?? 0,
    )
    // Improvement: how far the student has moved from baseline toward 100.
    diagnosticImprovement = Math.min(100, Math.max(0, ((currentProxy - baseline) / Math.max(1, 100 - baseline)) * 100))
  }

  const moduleCompletion =
    trackLessons.length > 0 && progress
      ? (progress.completedLessonIds.filter((id) => trackLessons.some((l) => l.id === id)).length /
          trackLessons.length) *
        100
      : 0

  const finalPractice = progress?.finalPracticeScorePct ?? 0

  const score = Math.round(
    practiceAccuracy * weights.practiceAccuracy +
      diagnosticImprovement * weights.diagnosticImprovement +
      moduleCompletion * weights.moduleCompletion +
      finalPractice * weights.finalPractice,
  )

  const hasActivity =
    !!progress &&
    (progress.practiceQuestionsCompleted > 0 ||
      progress.completedLessonIds.length > 0 ||
      progress.diagnosticBaselinePct != null)

  return {
    studentId,
    trackId,
    score,
    status: statusForScore(score, hasActivity),
    components: {
      practiceAccuracy: Math.round(practiceAccuracy),
      diagnosticImprovement: Math.round(diagnosticImprovement),
      moduleCompletion: Math.round(moduleCompletion),
      finalPractice: Math.round(finalPractice),
    },
    computedAt: new Date().toISOString(),
  }
}

export function weakTopics(progress: StudentProgress | undefined, minAttempts = 2): { topic: string; accuracy: number; attempted: number }[] {
  if (!progress) return []
  return Object.entries(progress.topicStats)
    .filter(([, s]) => s.attempted >= minAttempts)
    .map(([topic, s]) => ({ topic, accuracy: Math.round((s.correct / s.attempted) * 100), attempted: s.attempted }))
    .filter((t) => t.accuracy < 70)
    .sort((a, b) => a.accuracy - b.accuracy)
}

export function strongTopics(progress: StudentProgress | undefined, minAttempts = 2): { topic: string; accuracy: number; attempted: number }[] {
  if (!progress) return []
  return Object.entries(progress.topicStats)
    .filter(([, s]) => s.attempted >= minAttempts)
    .map(([topic, s]) => ({ topic, accuracy: Math.round((s.correct / s.attempted) * 100), attempted: s.attempted }))
    .filter((t) => t.accuracy >= 80)
    .sort((a, b) => b.accuracy - a.accuracy)
}
