// EduSphere USA — core domain types

export type Role = 'visitor' | 'student' | 'instructor' | 'school_admin' | 'super_admin'

export type ReadinessStatus =
  | 'not_started'
  | 'needs_support'
  | 'building_readiness'
  | 'near_ready'
  | 'ready_for_final_review'

export const READINESS_STATUS_LABELS: Record<ReadinessStatus, string> = {
  not_started: 'Not started',
  needs_support: 'Needs support',
  building_readiness: 'Building readiness',
  near_ready: 'Near ready',
  ready_for_final_review: 'Ready for final review',
}

export interface Organization {
  id: string
  name: string
  type: 'career_academy' | 'workforce_program' | 'private_training' | 'school_district'
  contactName: string
  contactEmail: string
  contactPhone: string
  createdAt: string
  status: 'active' | 'pending' | 'suspended'
}

export interface User {
  id: string
  orgId: string | null // null for super admins and unaffiliated visitors
  name: string
  email: string
  password: string // demo only — a real deployment hashes this
  role: Role
  title?: string
  createdAt: string
  lastActiveAt?: string
}

export type PlanId = 'single' | 'field' | 'program' | 'academy' | 'enterprise'

export interface Plan {
  id: PlanId
  name: string
  priceAnnual: number | null // null = field-dependent or custom pricing (see data/pricing.ts)
  maxStudents: number | null // null = unlimited
  maxTracks: number | 'all'
  perStudentAtFullUse: number | null
  features: string[]
  /** True when the price depends on the chosen IRC field. */
  fieldScoped?: boolean
}

export type SubscriptionStatus = 'active' | 'trialing' | 'past_due' | 'canceled' | 'incomplete'

export interface Subscription {
  id: string
  orgId: string
  planId: PlanId
  /** IRC field the license covers, for single-track / field / program licenses. */
  fieldId?: FieldId | null
  status: SubscriptionStatus
  seats: number
  currentPeriodStart: string
  currentPeriodEnd: string
  stripeCustomerId: string
  stripeSubscriptionId: string | null // null for invoice/manual
  cancelAtPeriodEnd: boolean
  createdAt: string
}

export type PaymentStatus = 'succeeded' | 'failed' | 'pending' | 'refunded'

export interface Payment {
  id: string
  orgId: string
  subscriptionId: string | null
  amount: number
  currency: 'usd'
  status: PaymentStatus
  method: 'card' | 'invoice'
  description: string
  createdAt: string
  stripePaymentIntentId: string | null
  failureReason?: string
}

export interface InvoiceRequest {
  id: string
  schoolName: string
  contactName: string
  email: string
  phone: string
  studentCount: number
  desiredTracks: string[]
  planId: PlanId
  timeline: string
  notes: string
  status: 'new' | 'contacted' | 'approved' | 'closed'
  createdAt: string
}

export interface DemoRequest {
  id: string
  schoolName: string
  contactName: string
  email: string
  phone: string
  role: string
  studentCount: string
  message: string
  status: 'new' | 'scheduled' | 'completed'
  createdAt: string
}

export interface SeatLicense {
  id: string
  orgId: string
  totalSeats: number
  usedSeats: number
  updatedAt: string
}

export type FieldId =
  | 'healthcare'
  | 'it'
  | 'cybersecurity'
  | 'business'
  | 'finance'
  | 'marketing'
  | 'aviation'
  | 'engineering'

export interface Field {
  id: FieldId
  slug: string
  name: string
  shortName: string
  tagline: string
  description: string
  color: string
}

export interface CredentialTrack {
  id: string
  name: string
  shortName: string
  description: string
  credentialFocus: string
  estimatedWeeks: number
  color: string // tailwind-friendly hex for badges/charts
  category: FieldId
  isBundle?: boolean
  includedTrackIds?: string[]
  /** Track content exists in-app, but is not yet offered on marketing/checkout pages. */
  comingSoon?: boolean
  /** Marketing/catalog metadata */
  schoolOverview?: string
  studentOverview?: string
  prerequisites?: string
  alignmentNotes?: string
  domains?: string[]
}

export interface Module {
  id: string
  trackId: string
  title: string
  order: number
  description: string
}

export interface LessonBlock {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  steps?: string[] // rendered as a numbered procedure
  table?: { caption?: string; headers: string[]; rows: string[][] }
}

export interface LessonCallout {
  variant: 'tip' | 'warning' | 'safety' | 'exam'
  title: string
  text: string
}

export interface Lesson {
  id: string
  moduleId: string
  title: string
  order: number
  durationMin: number
  content: string[] // paragraphs (intro / fallback)
  keyPoints: string[]
  sections?: LessonBlock[] // rich structured body
  callouts?: LessonCallout[]
  media?: { src: string; alt: string; caption?: string; type?: 'image' | 'video' }[]
}

export type QuestionType = 'multiple_choice' | 'scenario' | 'true_false'
export type Difficulty = 'easy' | 'medium' | 'hard'

export interface Question {
  id: string
  trackId: string
  moduleId: string
  topic: string
  type: QuestionType
  difficulty: Difficulty
  text: string
  choices: string[] // 2 for true/false, 4 otherwise
  correctIndex: number
  explanation: string
  estimatedTimeSec: number
  tags: string[]
}

export type AssessmentKind = 'diagnostic' | 'knowledge_check' | 'practice' | 'timed_final'

export interface Assessment {
  id: string
  trackId: string
  moduleId: string | null // null for track-level diagnostic/final
  kind: AssessmentKind
  title: string
  questionIds: string[]
  timeLimitMin: number | null
}

export interface AssessmentResponse {
  questionId: string
  selectedIndex: number
  correct: boolean
}

export interface AssessmentAttempt {
  id: string
  assessmentId: string
  studentId: string
  trackId: string
  startedAt: string
  completedAt: string | null
  responses: AssessmentResponse[]
  scorePct: number | null
}

export interface Enrollment {
  id: string
  studentId: string
  trackId: string
  orgId: string
  assignedBy: string
  assignedAt: string
  status: 'active' | 'completed'
}

export interface StudentProgress {
  studentId: string
  trackId: string
  completedLessonIds: string[]
  practiceQuestionsCompleted: number
  practiceQuestionsCorrect: number
  topicStats: Record<string, { attempted: number; correct: number }>
  finalPracticeScorePct: number | null
  diagnosticBaselinePct: number | null
  lastActivityAt: string
}

export interface ReadinessScore {
  studentId: string
  trackId: string
  score: number // 0-100
  status: ReadinessStatus
  components: {
    practiceAccuracy: number
    diagnosticImprovement: number
    moduleCompletion: number
    finalPractice: number
  }
  computedAt: string
}

export interface ScoringWeights {
  practiceAccuracy: number // default 0.40
  diagnosticImprovement: number // default 0.25
  moduleCompletion: number // default 0.20
  finalPractice: number // default 0.15
}

export interface AuditLog {
  id: string
  actorId: string
  actorName: string
  action: string
  detail: string
  orgId: string | null
  createdAt: string
}

export interface Settings {
  scoringWeights: ScoringWeights
}

export interface Database {
  organizations: Organization[]
  users: User[]
  subscriptions: Subscription[]
  payments: Payment[]
  invoiceRequests: InvoiceRequest[]
  demoRequests: DemoRequest[]
  seatLicenses: SeatLicense[]
  tracks: CredentialTrack[]
  modules: Module[]
  lessons: Lesson[]
  questions: Question[]
  assessments: Assessment[]
  attempts: AssessmentAttempt[]
  enrollments: Enrollment[]
  progress: StudentProgress[]
  auditLogs: AuditLog[]
  settings: Settings
}
