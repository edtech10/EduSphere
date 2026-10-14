// Content enrichment layer: QA workflow defaults, instructor resources, and
// the rich lesson model. Defaults are deterministic; super admin QA edits are
// persisted onto db.tracks and override these.
import type {
  ContentStatus,
  CredentialTrack,
  InstructorResource,
  Lesson,
  LessonEnrichment,
  ResourceType,
} from '@/lib/types'
import { ACTIVITIES, activitiesForTrack } from './activities'

export { ACTIVITIES, activitiesForTrack }

export const FLAGSHIP_TRACK_IDS = [
  'track_cla',
  'track_ma',
  'track_phleb',
  'track_p107',
  'track_airframe',
  'track_powerplant',
  'track_itsupport',
  'track_cyberfound',
  'track_robotics',
]

// ---------- Content QA workflow ----------

const AUTHORS = ['C. Whitfield, Curriculum Lead', 'D. Osei, SME Reviewer', 'R. Kim, Instructional Design', 'M. Bell, Curriculum Lead']
const REVIEWERS = ['S. Nguyen, QA Reviewer', 'T. Alvarez, SME Reviewer', 'G. Whitman, Compliance Review']

// A small set of tracks deliberately in non-published states so the QA
// dashboard and filters are demonstrably useful.
const STATUS_OVERRIDES: Record<string, ContentStatus> = {
  track_avionics: 'in_review',
  track_ganalytics: 'in_review',
  track_social: 'in_review',
  track_cad: 'needs_revision',
  track_edp: 'needs_revision',
}

export interface TrackQA {
  status: ContentStatus
  author: string
  reviewer: string
  version: string
  updatedAt: string
  internalNotes: string
  flaggedQuestions: number
  needsMoreQuestions: boolean
  noActivities: boolean
  studentPerformanceWarning: boolean
}

function hashStr(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

export function getTrackQA(
  track: CredentialTrack,
  questionCount: number,
  activityCount: number,
): TrackQA {
  const h = hashStr(track.id)
  const updatedAt = new Date(Date.now() - (3 + (h % 40)) * 86400000).toISOString()
  const isFlagship = FLAGSHIP_TRACK_IDS.includes(track.id)
  return {
    status: track.contentStatus ?? STATUS_OVERRIDES[track.id] ?? 'published',
    author: track.author ?? AUTHORS[h % AUTHORS.length],
    reviewer: track.reviewer ?? REVIEWERS[h % REVIEWERS.length],
    version: track.version ?? (isFlagship ? '2.1' : `1.${h % 4}`),
    updatedAt: track.updatedAt ?? updatedAt,
    internalNotes: track.internalNotes ?? '',
    flaggedQuestions: track.flaggedQuestions ?? (isFlagship ? 0 : h % 3 === 0 ? 2 : 0),
    needsMoreQuestions: questionCount < 50,
    noActivities: activityCount === 0,
    studentPerformanceWarning: false, // computed live where attempt data is available
  }
}

export const STATUS_META: Record<ContentStatus, { label: string; badgeClass: string }> = {
  published: { label: 'Published', badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  in_review: { label: 'In Review', badgeClass: 'bg-blue-50 text-blue-700 border-blue-200' },
  draft: { label: 'Draft', badgeClass: 'bg-slate-100 text-slate-600 border-slate-300' },
  needs_revision: { label: 'Needs Revision', badgeClass: 'bg-amber-50 text-amber-700 border-amber-200' },
}

// ---------- Instructor resources ----------

export const RESOURCE_TYPE_META: { type: ResourceType; label: string }[] = [
  { type: 'pacing_guide', label: 'Pacing guide' },
  { type: 'lesson_plan', label: 'Lesson plan' },
  { type: 'bell_ringer', label: 'Bell ringer' },
  { type: 'exit_ticket', label: 'Exit ticket' },
  { type: 'worksheet', label: 'Printable worksheet' },
  { type: 'small_group', label: 'Small group activity' },
  { type: 'remediation_assignment', label: 'Remediation assignment' },
  { type: 'skills_checklist', label: 'Skills checklist' },
  { type: 'lab_checklist', label: 'Lab / activity checklist' },
  { type: 'answer_key', label: 'Answer key' },
  { type: 'progress_report', label: 'Progress report template' },
]

function res(
  track: CredentialTrack,
  type: ResourceType,
  title: string,
  summary: string,
  items: string[],
): InstructorResource {
  return { id: `res_${track.id.replace(/^track_/, '')}_${type}`, trackId: track.id, type, title, summary, items }
}

/** Generate the 11 standard instructor resources for a track from its metadata. */
export function resourcesForTrack(track: CredentialTrack): InstructorResource[] {
  const short = track.shortName
  const domains = track.domains ?? []
  const weeks = track.estimatedWeeks
  return [
    res(track, 'pacing_guide', `${short} — Pacing Guide`,
      `A ${weeks}-week pacing map covering all 10 modules with checkpoints.`,
      [
        `Weeks 1–2: orientation, baseline diagnostic, Modules 1–2`,
        `Weeks 3–${Math.max(4, weeks - 4)}: Modules 3–7 with knowledge checks each module`,
        `Weeks ${Math.max(5, weeks - 3)}–${Math.max(6, weeks - 2)}: Modules 8–9 and interactive activities`,
        `Week ${Math.max(6, weeks - 1)}: Module 10 review and timed final practice`,
        `Week ${weeks}: readiness review, remediation closures, readiness report`,
      ]),
    res(track, 'lesson_plan', `${short} — Lesson Plan Template`,
      'A reusable 50-minute lesson plan frame for any module in this track.',
      [
        '5 min — bell ringer reviewing the previous lesson',
        '10 min — learning objective and real-world scenario introduction',
        '20 min — guided instruction through the lesson sections',
        '10 min — interactive activity or practice questions with feedback',
        '5 min — exit ticket and preview of the next lesson',
      ]),
    res(track, 'bell_ringer', `${short} — Bell Ringers (10 pack)`,
      'Ten openers, one per module, to activate prior knowledge.',
      domains.slice(0, 10).map((d, i) => `Module ${i + 1}: "What do you already know about ${d.toLowerCase()}?" — 3-minute quick write`),
    ),
    res(track, 'exit_ticket', `${short} — Exit Tickets (10 pack)`,
      'Ten closing checks, one per module.',
      domains.slice(0, 10).map((d, i) => `Module ${i + 1}: "Name one rule from ${d.toLowerCase()} and one mistake it prevents."`),
    ),
    res(track, 'worksheet', `${short} — Printable Worksheets`,
      'Module worksheets mirroring the interactive activities for offline practice.',
      [
        'Worksheet A: vocabulary and key-term matching per module',
        'Worksheet B: scenario decisions with written justification',
        'Worksheet C: sequencing and procedure ordering practice',
      ]),
    res(track, 'small_group', `${short} — Small Group Activities`,
      'Collaborative tasks for pairs and trios.',
      [
        'Teach-back: pairs explain a domain to each other and quiz with bank questions',
        'Case carousel: groups rotate through scenario cards and defend decisions',
        'Error hunt: groups find the seeded mistakes in a sample workflow',
      ]),
    res(track, 'remediation_assignment', `${short} — Remediation Assignments`,
      'Targeted assignments keyed to weak domains.',
      domains.slice(0, 6).map((d) => `${d}: re-read the mapped module, redo its knowledge check, complete 10 tagged practice questions`),
    ),
    res(track, 'skills_checklist', `${short} — Skills Checklist`,
      'Observable competency checklist for sign-off.',
      domains.map((d) => `☐ Demonstrates ${d.toLowerCase()} correctly and explains why`),
    ),
    res(track, 'lab_checklist', `${short} — Lab / Activity Checklist`,
      'Setup and safety checklist for hands-on sessions.',
      [
        'Materials and equipment prepared per module activity list',
        'Safety briefing delivered and acknowledged',
        'Interactive activity assigned and completion verified in the dashboard',
        'Cleanup and reset completed; incidents logged',
      ]),
    res(track, 'answer_key', `${short} — Answer Key`,
      'Answers and rationales for worksheets, bell ringers, and exit tickets.',
      [
        'Full rationales mirror the in-platform question explanations',
        'Common wrong-answer patterns noted per module',
        'Keep behind instructor login; do not distribute to students',
      ]),
    res(track, 'progress_report', `${short} — Progress Report Template`,
      'Weekly student progress summary for guardians, counselors, or program files.',
      [
        'Readiness score and change since last report',
        'Modules completed and knowledge-check averages',
        'Weak domains with the assigned remediation',
        'Attendance/activity minutes and next milestones',
      ]),
  ]
}

// ---------- Lesson enrichment ----------

const SCENARIO_OPENERS = [
  (track: string, lesson: string) =>
    `It is the middle of a busy shift in a real ${track.toLowerCase()} environment. A situation lands on your desk that depends on exactly one thing: whether you understand ${lesson.toLowerCase()}. The next twenty minutes of study are about making that call correctly.`,
  (track: string, lesson: string) =>
    `A supervisor hands you a task that hinges on ${lesson.toLowerCase()}. There is no textbook open beside you — just the knowledge you build here. This lesson walks the scenario the way a working professional in ${track.toLowerCase()} would.`,
  (track: string, lesson: string) =>
    `Imagine your ${track.toLowerCase()} credential exam and your first month on the job arriving at once — because both will test ${lesson.toLowerCase()} the same way: applied, under mild time pressure, with no hints. That is the framing for this lesson.`,
]

const VISUAL_SUFFIXES = [
  'Notice how the elements group into a small number of categories — that grouping is what exam questions test.',
  'Trace the flow from start to finish once, then cover it and reconstruct it from memory.',
  'Pay attention to the boundaries: where one stage or category ends and the next begins.',
]

const MISTAKE_BANK = [
  'Confusing similar-sounding terms that belong to different categories',
  'Skipping a verification step because "it worked last time"',
  'Answering the question you expected instead of the one asked',
  'Memorizing the list without understanding the sequence behind it',
]

const REMEDIATION_TEMPLATES = [
  (mod: string) => `If the quick check felt shaky, re-read this lesson’s key points, then redo the module knowledge check for "${mod}" before moving on.`,
  (mod: string) => `Score below 70% on the quick check? Revisit the scenario section, then complete 10 tagged practice questions from "${mod}" in the question bank.`,
]

const INSTRUCTOR_NOTE_TEMPLATES = [
  'Common confusion point — pause here and ask students to explain the distinction in their own words before continuing.',
  'Pairs well with the module’s interactive activity; run the activity before the knowledge check for best retention.',
  'Watch for students who memorize terms without the underlying rule; the scenario questions expose this quickly.',
  'If time is short, prioritize the key points and the quick check over a second read-through.',
]

/** Deterministically build the rich lesson model from existing lesson content. */
export function enrichLesson(lesson: Lesson, track: CredentialTrack, moduleTitle: string): LessonEnrichment {
  const h = hashStr(lesson.id)
  const flat = [lesson.title, ...lesson.keyPoints]
  const vocabulary = lesson.keyPoints.slice(0, 4).map((kp) => {
    const parts = kp.split(/[—:–]/)
    if (parts.length >= 2) return { term: parts[0].trim(), definition: parts.slice(1).join(':').trim() }
    const words = kp.split(' ')
    return { term: words.slice(0, 3).join(' '), definition: kp }
  })
  const activities = activitiesForTrack(track.id)
  const activity = activities.length > 0 ? activities[h % activities.length] : undefined
  return {
    objective: `By the end of this lesson you can explain and apply: ${flat.slice(0, 2).join('; ').toLowerCase()}.`,
    scenario: SCENARIO_OPENERS[h % SCENARIO_OPENERS.length](track.shortName, lesson.title),
    visual: {
      title: `Concept map — ${lesson.title}`,
      description: `The map above lays out ${lesson.title.toLowerCase()} as linked ideas: ${lesson.keyPoints.slice(0, 3).join('; ').toLowerCase()}. ${VISUAL_SUFFIXES[h % VISUAL_SUFFIXES.length]}`,
    },
    activityId: activity?.id,
    vocabulary,
    commonMistakes: [MISTAKE_BANK[h % MISTAKE_BANK.length], MISTAKE_BANK[(h + 1) % MISTAKE_BANK.length]],
    quickCheck: [],
    remediation: REMEDIATION_TEMPLATES[h % REMEDIATION_TEMPLATES.length](moduleTitle),
    instructorNotes: INSTRUCTOR_NOTE_TEMPLATES[h % INSTRUCTOR_NOTE_TEMPLATES.length],
    worksheet: `Printable worksheet — "${lesson.title}": vocabulary matching, one scenario with written justification, and a short sequencing task drawn from this lesson.`,
  }
}

// Hand-authored showcase overlays for the two fully-flagship tracks.
const LESSON_OVERRIDES: Record<string, Partial<LessonEnrichment>> = {
  les_cla_02_1: {
    objective: 'Correctly state the order of draw and explain how additive carry-over corrupts results.',
    scenario:
      'Morning draw rounds: five tubes for one patient — blood cultures, a coag panel, a chemistry panel, a CBC, and a glucose. Drawing them in the wrong order can push EDTA or clot activator into the wrong tube and quietly ruin a potassium or coag result. Order is not bureaucracy; it is chemistry.',
    visual: {
      title: 'The order-of-draw rack',
      description:
        'Follow the map across the rack: yellow/sterile first, light blue citrate next, then red and gold serum tubes, green heparin, lavender EDTA, and gray fluoride last. Additives never travel backward in the sequence. Trace the line left to right and say the rationale for each position.',
    },
    activityId: 'act_cla_order_of_draw',
    vocabulary: [
      { term: 'Order of draw', definition: 'The mandated tube-filling sequence that prevents additive carry-over between tubes' },
      { term: 'Additive', definition: 'A substance in the tube (anticoagulant, clot activator, gel) that prepares the specimen for its test' },
      { term: 'Carry-over', definition: 'Contamination of one tube by the previous tube’s additive via the needle' },
      { term: 'Inversion', definition: 'Gently turning the tube to mix additive with blood — never shaking' },
    ],
    commonMistakes: [
      'Drawing EDTA (lavender) before serum tubes — potassium EDTA falsely elevates potassium and lowers calcium',
      'Shaking tubes instead of inverting, causing hemolysis',
      'Underfilling the citrate tube, breaking the 9:1 blood-to-anticoagulant ratio',
    ],
    quickCheck: [
      {
        q: 'Which tube is drawn first in a routine multi-tube draw?',
        choices: ['Lavender (EDTA)', 'Blood culture / sterile tube', 'Gray (fluoride)', 'Green (heparin)'],
        answer: 1,
        why: 'Sterile tubes come first to protect the blood culture from contamination.',
      },
      {
        q: 'Why must lavender never precede the serum (red/gold) tubes?',
        choices: ['Lavender tubes break easily', 'EDTA carry-over falsely changes potassium and calcium results', 'Serum tubes must stay warm', 'No reason — order is tradition'],
        answer: 1,
        why: 'EDTA contamination invalidates key chemistry results.',
      },
    ],
    remediation:
      'If you missed either quick check, redo the Order of Draw sequencing activity, then retake the Module 2 knowledge check. Aim for a flawless sequence twice in a row.',
    instructorNotes:
      'Bring physical tubes or color cards to class. Have students arrange them from memory, then explain each position. The "why" behind the sequence is what the exam tests.',
    worksheet:
      'Printable worksheet — "Order of Draw Mastery": tube colors to sequence from memory, three carry-over scenarios to diagnose, and a rationales section.',
  },
  les_cla_05_1: {
    objective: 'Verify patient identity using two independent identifiers before any collection.',
    scenario:
      'A double room, two patients with similar surnames, and a STAT order for only one of them. The wrong draw here is not a paperwork error — it can put the wrong result into the wrong chart and drive a harmful treatment decision. Identification is the single most critical step in the pre-analytic phase.',
    visual: {
      title: 'The two-identifier checkpoint',
      description:
        'The map shows the three-way match: the spoken answers (name and date of birth), the wristband, and the requisition — all three must agree before a needle is uncapped. Room numbers, bed labels, and "the nurse said so" are never identifiers.',
    },
    activityId: 'act_cla_patient_id',
    vocabulary: [
      { term: 'Two identifiers', definition: 'Independent data points — typically full name plus date of birth — verified actively' },
      { term: 'Active verification', definition: 'Asking the patient to state information rather than confirming yes/no' },
      { term: 'Requisition', definition: 'The order document specifying the patient and the tests' },
      { term: 'Pre-analytic phase', definition: 'Everything before testing: order, ID, collection, transport' },
    ],
    commonMistakes: [
      'Asking "Are you Mr. Lane?" — a confused or sleeping patient may say yes to anything',
      'Using the room number or bed label as an identifier',
      'Labeling tubes away from the bedside before verifying identity',
    ],
    quickCheck: [
      {
        q: 'Which is an acceptable identifier pair?',
        choices: ['Room number and bed', 'Full name and date of birth', 'Nurse’s confirmation and chart', 'Last name and approximate age'],
        answer: 1,
        why: 'Name plus date of birth are independent, patient-specific identifiers.',
      },
    ],
    remediation:
      'If the scenario tripped you up, replay the Patient Identification activity and review the "never acceptable identifiers" list in this lesson.',
    instructorNotes:
      'Role-play this one. Students reliably underestimate how often identification fails in practice — the sleeping-patient scenario gets strong discussion.',
    worksheet:
      'Printable worksheet — "ID Checkpoint": five bedside scenarios, students mark which identifiers are acceptable and script their verification dialogue.',
  },
  les_p107_03_1: {
    objective: 'Read a METAR and translate each element into a go / no-go input for a Part 107 flight.',
    scenario:
      'Your mapping client wants aerial photos at 2 PM. The METAR shows wind 240 at 12 gusting 20, visibility 10 miles, light rain moving through, ceiling broken at 4,500. Every element of that string is a decision input — wind limits, visibility minimums, cloud clearance. Decode it before you ever arm the motors.',
    visual: {
      title: 'Anatomy of a METAR',
      description:
        'Read the report block by block, as mapped above: station identifier, observation time, wind group, visibility, present weather, sky condition, temperature/dew point, altimeter. Each block answers one operational question: where, when, wind, how far you can see, what is falling, where the clouds are, and pressure.',
    },
    activityId: 'act_p107_metar',
    vocabulary: [
      { term: 'METAR', definition: 'Routine aviation weather observation reported in a standard coded format' },
      { term: 'Wind group', definition: 'Direction (degrees), speed (knots), and gusts — e.g., 24012G20KT' },
      { term: 'Visibility', definition: 'Reported in statute miles; 10SM is the maximum encoded' },
      { term: 'Ceiling', definition: 'The lowest broken or overcast cloud layer, in hundreds of feet AGL' },
      { term: 'Altimeter setting', definition: 'Barometric pressure in inches of mercury — the A2992 group' },
    ],
    commonMistakes: [
      'Reading visibility as nautical miles or kilometers — it is statute miles',
      'Confusing scattered layers with the ceiling (only broken/overcast count)',
      'Ignoring gust values and planning to the steady wind speed',
    ],
    quickCheck: [
      {
        q: 'In METAR "18012G25KT", the gust speed is:',
        choices: ['12 knots', '25 knots', '18 knots', '30 knots'],
        answer: 1,
        why: 'G25 = gusts to 25 knots; 12KT is the sustained speed.',
      },
      {
        q: 'Which sky condition sets the ceiling?',
        choices: ['Few clouds at 3,000 ft', 'Scattered at 5,000 ft', 'Broken at 4,500 ft', 'Clear skies'],
        answer: 2,
        why: 'Only broken or overcast layers constitute a ceiling.',
      },
    ],
    remediation:
      'If decoding felt slow, redo the METAR activity until each group reads fluently, then answer ten weather-domain questions in the bank.',
    instructorNotes:
      'Print a real METAR from a local airport each week and decode it as a bell ringer — repetition builds the fluency the exam expects.',
    worksheet:
      'Printable worksheet — "METAR Decode Grid": three sample METARs broken into labeled blanks, plus two go/no-go decisions to justify in writing.',
  },
  les_p107_02_1: {
    objective: 'Identify airspace classes from chart cues and determine whether authorization is required.',
    scenario:
      'A survey job sits three miles from a small towered airport. The sectional shows a dashed magenta circle nearby and blue rings farther out. Whether you can launch this afternoon — or need an authorization days in advance — depends entirely on reading those markings correctly.',
    visual: {
      title: 'Reading the sectional',
      description:
        'On the chart: solid blue circles mark Class D towers, solid magenta marks Class E to the surface, dashed magenta marks Class E starting at 700 ft AGL. Everything unmarked below those floors is Class G. Locate your site, find the floor of controlled airspace above it, and your authorization question answers itself.',
    },
    activityId: 'act_p107_airspace',
    vocabulary: [
      { term: 'Class G', definition: 'Uncontrolled airspace — no authorization needed for Part 107' },
      { term: 'Class D', definition: 'Airspace around a towered airport — authorization required' },
      { term: 'Sectional chart', definition: 'The VFR chart showing airspace boundaries, floors, and ceilings' },
      { term: 'LAANC', definition: 'The near-real-time authorization system for controlled airspace' },
    ],
    commonMistakes: [
      'Assuming "near an airport" always means authorization is required — the airspace class decides',
      'Confusing Class E floors (surface vs. 700 ft) on the chart',
      'Flying to the grid-map ceiling without confirming the authorization is in hand',
    ],
    quickCheck: [
      {
        q: 'Operations in Class G airspace require:',
        choices: ['LAANC authorization', 'A filed flight plan', 'No airspace authorization', 'Tower clearance'],
        answer: 2,
        why: 'Class G is uncontrolled — Part 107 rules apply but no authorization is needed.',
      },
    ],
    remediation:
      'If airspace classes blur together, redo the Airspace Identification drill, then review the sectional chart walkthrough in this module.',
    instructorNotes:
      'Project a sectional excerpt and have students point to the airspace at three different sites. Chart-reading is spatial — it needs practice, not memorization.',
    worksheet:
      'Printable worksheet — "Airspace at a Glance": chart excerpts with three sites to classify and an authorization decision for each.',
  },
}

export function getLessonEnrichment(lesson: Lesson, track: CredentialTrack, moduleTitle: string): LessonEnrichment {
  const base = enrichLesson(lesson, track, moduleTitle)
  const override = LESSON_OVERRIDES[lesson.id]
  return override ? { ...base, ...override } : base
}
