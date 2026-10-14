// Derived question boost for catalog tracks.
// Builds content-grounded "concept recognition" questions from each track's
// own lesson key points (correct statement vs. statements from other domains),
// bringing every published track to a defensible minimum bank size.
// Deterministic: same inputs always produce the same questions.
import type { CredentialTrack, Lesson, Question } from '@/lib/types'

const MIN_KP_LEN = 32
const MAX_KP_LEN = 160

function hash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

function shortLabel(track: CredentialTrack): string {
  return track.id.replace(/^track_/, '')
}

/** Module index (1-based) → domain index, inverse of the catalog bucketing. */
function domainIndexForModule(track: CredentialTrack, moduleOrder: number): number {
  const domains = track.domains ?? []
  if (domains.length === 0) return 0
  // module 10 is the review module; content modules are 1..9
  const di = Math.floor(((moduleOrder - 1) * domains.length) / 10)
  return Math.min(domains.length - 1, Math.max(0, di))
}

/**
 * For one track, generate additional multiple-choice questions until the bank
 * reaches `target`. Each question presents a real key point from the target
 * domain as the correct answer, with distractors drawn from other domains of
 * the same track.
 */
export function deriveBoostQuestions(
  track: CredentialTrack,
  lessons: Lesson[],
  existing: Question[],
  target = 30,
): Question[] {
  if (track.isBundle || track.comingSoon) return []
  const gap = target - existing.length
  if (gap <= 0) return []

  const domains = track.domains ?? []
  const trackModules = new Map<number, Lesson[]>()
  const trackLessons = lessons
    .filter((l) => l.moduleId.includes(`_${shortLabel(track)}_`) || l.moduleId.startsWith(`mod_${shortLabel(track)}`))
    .sort((a, b) => a.order - b.order)

  // Group lessons by module order (mod_<short>_NN → NN)
  for (const l of trackLessons) {
    const m = /_(\d+)$/.exec(l.moduleId)
    const order = m ? Number(m[1]) : 1
    const arr = trackModules.get(order) ?? []
    arr.push(l)
    trackModules.set(order, arr)
  }

  // Key points per domain index
  const kpByDomain: string[][] = domains.map(() => [])
  for (const [order, ls] of trackModules) {
    const di = domainIndexForModule(track, order)
    for (const l of ls) {
      for (const kp of l.keyPoints) {
        if (kp.length >= MIN_KP_LEN && kp.length <= MAX_KP_LEN) kpByDomain[di].push(kp)
      }
    }
  }

  const out: Question[] = []
  const short = shortLabel(track)
  let n = 0

  outer: for (let round = 0; round < 3; round++) {
    for (let di = 0; di < domains.length; di++) {
      if (out.length >= gap) break outer
      const pool = kpByDomain[di]
      if (pool.length === 0) continue
      const kpIdx = hash(`${track.id}:${di}:${round}`) % pool.length
      const correct = pool[kpIdx]
      // Distractors: one key point from three other domains
      const distractors: string[] = []
      for (let step = 1; distractors.length < 3 && step < domains.length + 3; step++) {
        const odi = (di + step + round) % domains.length
        if (odi === di) continue
        const opool = kpByDomain[odi]
        if (opool.length === 0) continue
        const cand = opool[hash(`${track.id}:d:${odi}:${round}:${kpIdx}`) % opool.length]
        if (cand !== correct && !distractors.includes(cand)) distractors.push(cand)
      }
      if (distractors.length < 3) continue
      n += 1
      // Deterministic shuffle of the 4 choices
      const choices = [correct, ...distractors]
      const seed = hash(`${track.id}:s:${n}`)
      for (let i = choices.length - 1; i > 0; i--) {
        const j = (seed + i * 7) % (i + 1)
        ;[choices[i], choices[j]] = [choices[j], choices[i]]
      }
      const domain = domains[di]
      out.push({
        id: `q_${short}_b${String(n).padStart(2, '0')}`,
        trackId: track.id,
        moduleId: `mod_${short}_${String(di + 1).padStart(2, '0')}`,
        topic: domain,
        type: 'multiple_choice',
        difficulty: 'easy',
        text: `Which statement about ${domain} is correct?`,
        choices,
        correctIndex: choices.indexOf(correct),
        explanation: `This is a key practice from the ${domain} material. The other options describe practices from different areas of this track.`,
        estimatedTimeSec: 35,
        tags: [domain.toLowerCase().replace(/[^a-z0-9]+/g, '-'), track.id, 'concept-check'],
        weight: 0.5,
      })
    }
  }
  return out
}

/** Apply the boost across all tracks. */
export function deriveAllBoosts(
  tracks: CredentialTrack[],
  lessons: Lesson[],
  existingQuestions: Question[],
  target = 30,
): Question[] {
  const out: Question[] = []
  for (const track of tracks) {
    const existing = existingQuestions.filter((q) => q.trackId === track.id)
    out.push(...deriveBoostQuestions(track, lessons, existing, target))
  }
  return out
}
