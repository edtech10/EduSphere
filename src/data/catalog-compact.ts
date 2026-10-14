// Compact track specs + synthesizer.
// Hand-authoring every lesson paragraph for 30+ tracks is not maintainable, so
// these tracks are authored compactly: each lesson contributes a title and a
// bank of substantive teaching points, and `synthesizeTrack` builds the full
// TrackSpec (intro paragraphs, sections, key points, exam callout) from them.
// The deep, fully hand-written tracks live in catalog-health.ts and content.ts.
import type { FieldId } from '@/lib/types'
import type { LessonSpec, ModuleSpec, QuestionSpec, TrackSpec } from './catalog'

export interface CompactLesson {
  title: string
  /** 6 substantive teaching points — the engine builds sections/key points from these. */
  points: string[]
}

export interface CompactModule {
  title: string
  description: string
  lessons: [CompactLesson, CompactLesson]
}

export interface CompactTrack {
  id: string
  name: string
  shortName: string
  category: FieldId
  weeks: number
  description: string
  credentialFocus: string
  schoolOverview: string
  studentOverview: string
  prerequisites: string
  alignmentNotes: string
  domains: string[]
  modules: CompactModule[] // exactly 10
  questions: QuestionSpec[] // >= 2 per domain
}

const INTRO_TEMPLATES: ((track: string, mod: string, les: string) => string)[] = [
  (t, m, l) =>
    `${l} is a core building block of the ${t} track. Within the "${m}" module, this lesson moves from concept to practice: you will learn the terminology professionals use, see how the ideas apply in real workplace situations, and check your understanding as you go.`,
  (t, m, l) =>
    `Every competency in ${t} rests on a small set of ideas used consistently and correctly. In this lesson — part of the "${m}" module — you focus on ${l.toLowerCase()}, working through the rules, the reasoning behind them, and the mistakes examiners and employers see most often.`,
  (t, m, l) =>
    `This lesson tackles ${l.toLowerCase()} within the broader "${m}" module of the ${t} track. The goal is not memorization; it is judgment. You will learn what to look for, how to decide, and how to document or communicate your decision the way the credential expects.`,
  (t, m, l) =>
    `In ${t}, ${l.toLowerCase()} shows up constantly — in daily work and on the credential exam. As part of the "${m}" module, this lesson breaks the topic into manageable pieces, pairs each with a concrete example, and ends with the key points you should be able to explain in your own words.`,
]

const BRIDGE_TEMPLATES: ((mod: string, les: string) => string)[] = [
  (m, l) =>
    `Work through the sections below in order. Each one isolates a single skill from ${l.toLowerCase()}, states the rule or procedure, and shows where it fits inside ${m.toLowerCase()}. Note anything you could not explain to a classmate — those are your review targets.`,
  (m, l) =>
    `Approach this lesson on ${l.toLowerCase()} actively: before each section, predict what the correct procedure or answer should be, then check yourself against the material. ${m} rewards precision, and precision comes from exactly this kind of deliberate practice.`,
  (m, l) =>
    `As you read about ${l.toLowerCase()}, connect each point back to the bigger picture of ${m.toLowerCase()}. Credential exams test whether you can apply these ideas under time pressure, so pause on the examples and mentally rehearse the decision, not just the definition.`,
]

const PRACTICE_HEADINGS = ['In practice', 'Applying it on the job', 'Step by step', 'Watch for these']
const CORE_HEADINGS = ['Core concepts', 'What you need to know', 'The essentials', 'Key ideas']

const EXAM_CALLOUTS = [
  'Exam questions on this topic usually describe a situation rather than ask for a definition. Practice identifying which rule applies before you look at the answer choices.',
  'A common exam trap pairs a correct-sounding action with the wrong sequence or the wrong role. Check both what is done and who may do it.',
  'Expect at least one question that tests the exception, not the rule. Know the standard procedure cold, then learn the two or three cases where it changes.',
]

function hash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

function synthesizeLesson(track: CompactTrack, mod: CompactModule, les: CompactLesson, salt: number): LessonSpec {
  const h = hash(track.id + mod.title + les.title) + salt
  const intro = [
    INTRO_TEMPLATES[h % INTRO_TEMPLATES.length](track.shortName, mod.title, les.title),
    BRIDGE_TEMPLATES[h % BRIDGE_TEMPLATES.length](mod.title, les.title),
  ]
  const half = Math.ceil(les.points.length / 2)
  const sections = [
    { heading: CORE_HEADINGS[h % CORE_HEADINGS.length], bullets: les.points.slice(0, half) },
    { heading: PRACTICE_HEADINGS[h % PRACTICE_HEADINGS.length], bullets: les.points.slice(half) },
  ]
  const keyPoints = les.points.slice(0, 4)
  return {
    title: les.title,
    minutes: 15 + (h % 4) * 5,
    intro,
    sections,
    keyPoints,
    callout: { variant: 'exam', title: 'Exam focus', text: EXAM_CALLOUTS[h % EXAM_CALLOUTS.length] },
  }
}

export function synthesizeTrack(ct: CompactTrack): TrackSpec {
  if (ct.modules.length !== 10) throw new Error(`${ct.id}: expected 10 modules, got ${ct.modules.length}`)
  const modules: ModuleSpec[] = ct.modules.map((m, mi) => ({
    title: m.title,
    description: m.description,
    lessons: [
      synthesizeLesson(ct, m, m.lessons[0], mi * 2),
      synthesizeLesson(ct, m, m.lessons[1], mi * 2 + 1),
    ],
  }))
  return { ...ct, modules }
}

export function synthesizeAll(tracks: CompactTrack[]): TrackSpec[] {
  return tracks.map(synthesizeTrack)
}
