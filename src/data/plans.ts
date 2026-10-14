// License plans. Single / Field / Program prices depend on the IRC field —
// see data/pricing.ts for the matrix. Academy is flat; Enterprise is custom.
import type { Plan, PlanId } from '@/lib/types'

export const PLANS: Plan[] = [
  {
    id: 'single',
    name: 'Single IRC Track License',
    priceAnnual: null, // field-scoped: $7,500–$17,500
    maxStudents: 10,
    maxTracks: 1,
    perStudentAtFullUse: null,
    fieldScoped: true,
    features: [
      'Up to 10 students',
      'One credential readiness track',
      'Student diagnostics',
      'Practice question bank with rationales',
      'Instructor dashboard',
      'Monthly readiness report',
    ],
  },
  {
    id: 'field',
    name: 'Field License',
    priceAnnual: null, // field-scoped: $22,500–$47,500
    maxStudents: 25,
    maxTracks: 'all',
    perStudentAtFullUse: null,
    fieldScoped: true,
    features: [
      'Up to 25 students',
      'All readiness tracks in one IRC field',
      'All Single Track features',
      'Remediation plans',
      'Cohort analytics',
      'Admin reporting',
      'Priority onboarding',
    ],
  },
  {
    id: 'program',
    name: 'Multi-Field Program License',
    priceAnnual: null, // field-scoped: $39,500–$89,500 (higher-priced of up to 2 fields)
    maxStudents: 60,
    maxTracks: 'all',
    perStudentAtFullUse: null,
    fieldScoped: true,
    features: [
      'Up to 60 students',
      'All readiness tracks in up to 2 IRC fields',
      'Advanced analytics',
      'Multi-instructor access',
      'Quarterly readiness review',
      'Custom implementation support',
    ],
  },
  {
    id: 'academy',
    name: 'Career Academy License',
    priceAnnual: 125000,
    maxStudents: 150,
    maxTracks: 'all',
    perStudentAtFullUse: 833,
    features: [
      'Up to 150 students',
      'Any 4 IRC fields',
      'Implementation support',
      'Quarterly readiness review',
      'Admin reporting',
      'Procurement packet',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise / District License',
    priceAnnual: null, // custom, starting at $175,000
    maxStudents: null,
    maxTracks: 'all',
    perStudentAtFullUse: null,
    features: [
      'Multi-campus access',
      'Custom reporting',
      'Dedicated success manager',
      'Procurement support',
      'Custom implementation plan',
    ],
  },
]

export function getPlan(id: PlanId): Plan {
  return PLANS.find((p) => p.id === id)!
}
