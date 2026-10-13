import type { Plan, PlanId } from '@/lib/types'

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter Cohort',
    priceAnnual: 14500,
    maxStudents: 10,
    maxTracks: 1,
    perStudentAtFullUse: 1450,
    features: [
      'Up to 10 students',
      'One healthcare readiness track',
      'Student diagnostics',
      'Practice question bank',
      'Instructor dashboard',
      'Monthly readiness report',
    ],
  },
  {
    id: 'growth',
    name: 'Growth Cohort',
    priceAnnual: 31500,
    maxStudents: 25,
    maxTracks: 3,
    perStudentAtFullUse: 1260,
    features: [
      'Up to 25 students',
      'Up to three healthcare readiness tracks',
      'All Starter features',
      'Remediation plans',
      'Cohort analytics',
      'Admin reporting',
      'Priority onboarding',
    ],
  },
  {
    id: 'program',
    name: 'Program License',
    priceAnnual: 59500,
    maxStudents: 60,
    maxTracks: 'all',
    perStudentAtFullUse: 992,
    features: [
      'Up to 60 students',
      'All healthcare readiness tracks',
      'Advanced analytics',
      'Multi-instructor access',
      'Quarterly readiness review',
      'Custom implementation support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceAnnual: null,
    maxStudents: null,
    maxTracks: 'all',
    perStudentAtFullUse: null,
    features: [
      'Multi-campus access',
      'Custom reporting',
      'Procurement support',
      'Dedicated success manager',
    ],
  },
]

export function getPlan(id: PlanId): Plan {
  return PLANS.find((p) => p.id === id)!
}
