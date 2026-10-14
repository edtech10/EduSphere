// IRC catalog engine.
// Track *specs* (compact, hand-authored metadata + question seeds) live in
// catalog-health.ts, catalog-tech.ts, and catalog-business.ts. This module
// expands them into the full content model (modules, lessons, question bank,
// diagnostic / knowledge-check / final assessments) used across the app.
//
// Content rules (per product spec): all practice questions are original and
// mapped only to public skill categories; no real exam questions; no claim of
// endorsement by any credential provider.
import type {
  Assessment,
  CredentialTrack,
  Difficulty,
  FieldId,
  Lesson,
  Module,
  Question,
  QuestionType,
} from '@/lib/types'
import { getField } from './fields'

// ---------- Spec schema (what the per-field data files provide) ----------

export interface LessonSpec {
  title: string
  minutes: number
  intro: string[] // 2–3 paragraphs
  sections: { heading: string; paragraphs?: string[]; bullets?: string[]; steps?: string[] }[]
  keyPoints: string[]
  callout?: { variant: 'tip' | 'warning' | 'safety' | 'exam'; title: string; text: string }
}

export interface QuestionSpec {
  domain: string // must match one of the track's domains
  difficulty: Difficulty
  type?: QuestionType // default multiple_choice
  q: string
  choices: string[] // 4 for mc/scenario, 2 for true_false
  answer: number // index of correct choice
  why: string // rationale
}

export interface ModuleSpec {
  title: string
  description: string
  lessons: [LessonSpec, LessonSpec]
}

export interface TrackSpec {
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
  domains: string[] // 8–12 competency domains
  modules: ModuleSpec[] // exactly 10
  questions: QuestionSpec[] // >= 2 per domain
}

// ---------- Metadata for the four hand-authored tracks ----------

export const EXISTING_TRACK_META: Record<string, Partial<CredentialTrack>> = {
  track_ma: {
    schoolOverview:
      'A complete clinical and administrative medical assisting readiness system with diagnostics, guided modules, and documented readiness reporting for program accountability.',
    studentOverview:
      'Build the clinical and front-office skills medical assistants use every day — vitals, patient care, terminology, pharmacology basics, EKG and lab procedures — with practice that shows you exactly where you stand.',
    prerequisites: 'None. A biology or health-science foundations course is helpful but not required.',
    alignmentNotes:
      'Modules and practice banks are mapped to CCMA/CMA/RMA-style competency domains published for medical assisting credentials.',
    domains: [
      'Patient Care Fundamentals', 'Vital Signs', 'Infection Control', 'Pharmacology Basics',
      'Medical Terminology', 'EKG Basics', 'Legal and Ethical Responsibilities', 'Administrative Procedures',
      'Anatomy and Physiology', 'Laboratory Procedures',
    ],
  },
  track_phleb: {
    schoolOverview:
      'Structured phlebotomy readiness with order-of-draw mastery, specimen handling decision practice, and cohort-level readiness evidence for externship and exam sign-off.',
    studentOverview:
      'Learn collection technique, safety, order of draw, and specimen handling the way working phlebotomists use them — then prove readiness with timed practice.',
    prerequisites: 'None. Recommended alongside or after a medical terminology course.',
    alignmentNotes:
      'Content is mapped to CPT-style competency domains: safety, collection technique, order of draw, specimen processing, and quality assurance.',
    domains: [
      'Safety and Infection Control', 'Venipuncture Equipment', 'Order of Draw', 'Specimen Handling',
      'Patient Identification', 'Complications and Corrective Action', 'Quality Assurance', 'Professional Standards',
    ],
  },
  track_cla: {
    schoolOverview:
      'Clinical laboratory assisting readiness covering lab safety, specimen workflow, and quality control — with the documentation schools need for program review.',
    studentOverview:
      'Learn how clinical labs actually run: safety, specimen accessioning and processing, core hematology/chemistry/microbiology concepts, and quality control.',
    prerequisites: 'None. Basic biology recommended.',
    alignmentNotes:
      'Mapped to lab safety, specimen handling, quality control, waived testing, microbiology basics, and laboratory workflow competency categories.',
    domains: [
      'Laboratory Safety', 'Specimen Collection', 'Specimen Processing', 'Quality Control',
      'Basic Lab Equipment', 'Medical Terminology', 'Hematology Basics', 'Chemistry Basics', 'Microbiology Basics',
    ],
  },
  track_amt: {
    schoolOverview:
      'Aviation maintenance General knowledge readiness within a Part 147-style curriculum framework — regulations, math, physics, electricity, drawings, weight and balance, materials, ground operations, and human factors.',
    studentOverview:
      'Master the General subject areas every aviation maintenance technician builds on — with drills, scenarios, and a timed final practice test.',
    prerequisites: 'None. Algebra fundamentals recommended for the mathematics module.',
    alignmentNotes:
      'Mapped to the General subject areas of aviation maintenance technician certification within a Part 147-style curriculum framework.',
    domains: [
      'Regulations and Maintenance Publications', 'Mathematics for Aviation', 'Physics Fundamentals',
      'Basic Electricity', 'Aircraft Drawings and Schematics', 'Weight and Balance',
      'Materials and Processes', 'Ground Operations and Servicing', 'Human Factors in Maintenance',
    ],
  },
}

// ---------- Expansion engine ----------

const TRACK_ID_RE = /^track_[a-z0-9_]+$/

export function expandTrack(spec: TrackSpec): {
  track: CredentialTrack
  modules: Module[]
  lessons: Lesson[]
  questions: Question[]
  assessments: Assessment[]
} {
  if (!TRACK_ID_RE.test(spec.id)) throw new Error(`Bad track id: ${spec.id}`)
  if (spec.modules.length !== 10) throw new Error(`${spec.id}: expected 10 modules, got ${spec.modules.length}`)
  if (spec.domains.length < 8) throw new Error(`${spec.id}: expected >= 8 domains`)

  const field = getField(spec.category)
  const track: CredentialTrack = {
    id: spec.id,
    name: spec.name,
    shortName: spec.shortName,
    description: spec.description,
    credentialFocus: spec.credentialFocus,
    estimatedWeeks: spec.weeks,
    color: field.color,
    category: spec.category,
    schoolOverview: spec.schoolOverview,
    studentOverview: spec.studentOverview,
    prerequisites: spec.prerequisites,
    alignmentNotes: spec.alignmentNotes,
    domains: spec.domains,
  }

  const modules: Module[] = spec.modules.map((m, i) => ({
    id: `mod_${spec.id.replace(/^track_/, '')}_${String(i + 1).padStart(2, '0')}`,
    trackId: spec.id,
    title: m.title,
    order: i + 1,
    description: m.description,
  }))

  const lessons: Lesson[] = spec.modules.flatMap((m, mi) =>
    m.lessons.map((l, li) => ({
      id: `les_${spec.id.replace(/^track_/, '')}_${String(mi + 1).padStart(2, '0')}_${li + 1}`,
      moduleId: modules[mi].id,
      title: l.title,
      order: li + 1,
      durationMin: l.minutes,
      content: l.intro,
      keyPoints: l.keyPoints,
      sections: l.sections,
      callouts: l.callout ? [l.callout] : [],
    })),
  )

  // Assign questions to modules in domain order, spread evenly across modules.
  const domainModule = new Map<string, number>()
  spec.domains.forEach((d, di) => {
    domainModule.set(d, Math.min(9, Math.floor((di * 10) / spec.domains.length)))
  })
  const questions: Question[] = spec.questions.map((q, i) => {
    const modIdx = domainModule.get(q.domain) ?? 0
    return {
      id: `q_${spec.id.replace(/^track_/, '')}_${String(i + 1).padStart(2, '0')}`,
      trackId: spec.id,
      moduleId: modules[modIdx].id,
      topic: q.domain,
      type: q.type ?? (q.choices.length === 2 ? 'true_false' : 'multiple_choice'),
      difficulty: q.difficulty,
      text: q.q,
      choices: q.choices,
      correctIndex: q.answer,
      explanation: q.why,
      estimatedTimeSec: q.difficulty === 'hard' ? 60 : q.difficulty === 'medium' ? 45 : 35,
      tags: [q.domain.toLowerCase().replace(/[^a-z0-9]+/g, '-'), spec.id],
    }
  })

  // Diagnostic: one question per domain for the first 8 domains (first occurrence).
  const firstByDomain = new Map<string, string>()
  for (const q of questions) {
    if (!firstByDomain.has(q.topic)) firstByDomain.set(q.topic, q.id)
  }
  const diagIds = spec.domains.slice(0, 8).map((d) => firstByDomain.get(d)).filter(Boolean) as string[]
  // Final: second occurrence per domain where available.
  const secondByDomain = new Map<string, string>()
  const seen = new Map<string, number>()
  for (const q of questions) {
    const n = seen.get(q.topic) ?? 0
    seen.set(q.topic, n + 1)
    if (n === 1) secondByDomain.set(q.topic, q.id)
  }
  let finalIds = spec.domains.map((d) => secondByDomain.get(d)).filter(Boolean) as string[]
  if (finalIds.length < 8) {
    const used = new Set([...diagIds, ...finalIds])
    finalIds = [...finalIds, ...questions.filter((q) => !used.has(q.id)).map((q) => q.id)].slice(0, 8)
  } else {
    finalIds = finalIds.slice(0, 10)
  }

  const short = spec.id.replace(/^track_/, '')
  const assessments: Assessment[] = [
    {
      id: `asm_${short}_diag`,
      trackId: spec.id,
      moduleId: null,
      kind: 'diagnostic',
      title: `${spec.shortName} Baseline Diagnostic`,
      questionIds: diagIds,
      timeLimitMin: 25,
    },
    {
      id: `asm_${short}_final`,
      trackId: spec.id,
      moduleId: null,
      kind: 'timed_final',
      title: `${spec.shortName} Timed Final Practice Test`,
      questionIds: finalIds,
      timeLimitMin: 30,
    },
    ...modules.map((m) => ({
      id: `asm_${short}_kc_${m.id.slice(-2)}`,
      trackId: spec.id,
      moduleId: m.id,
      kind: 'knowledge_check' as const,
      title: `${m.title} Knowledge Check`,
      questionIds: questions.filter((q) => q.moduleId === m.id).slice(0, 3).map((q) => q.id),
      timeLimitMin: null,
    })),
  ]

  return { track, modules, lessons, questions, assessments }
}

export function expandAll(specs: TrackSpec[]) {
  const tracks: CredentialTrack[] = []
  const modules: Module[] = []
  const lessons: Lesson[] = []
  const questions: Question[] = []
  const assessments: Assessment[] = []
  for (const spec of specs) {
    const e = expandTrack(spec)
    tracks.push(e.track)
    modules.push(...e.modules)
    lessons.push(...e.lessons)
    questions.push(...e.questions)
    assessments.push(...e.assessments)
  }
  return { tracks, modules, lessons, questions, assessments }
}
