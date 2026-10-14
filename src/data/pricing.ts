// Field-based license pricing matrix (annual, USD).
// Prices reflect school-license value: readiness documentation, instructor
// reporting, and cohort analytics — not consumer test prep.
import type { FieldId, PlanId } from '@/lib/types'
import { getField } from './fields'

export type LicenseTypeId = Exclude<PlanId, 'enterprise'> // single | field | program | academy

export const LICENSE_TYPES: {
  id: LicenseTypeId
  name: string
  bestFor: string
  maxStudents: number | null
  scope: string
}[] = [
  { id: 'single', name: 'Single IRC Track License', bestFor: 'One teacher or one small credential cohort', maxStudents: 10, scope: '1 credential track' },
  { id: 'field', name: 'Field License', bestFor: 'A full program pathway in one field', maxStudents: 25, scope: 'All tracks in one field' },
  { id: 'program', name: 'Program License', bestFor: 'Schools running multiple cohorts in one field', maxStudents: 60, scope: 'All tracks in one field' },
  { id: 'academy', name: 'Career Academy License', bestFor: 'Career academies spanning several fields', maxStudents: 150, scope: 'Any 4 IRC fields' },
]

// Annual price per license type per field. Academy is flat (any 4 fields).
export const PRICE_MATRIX: Record<'single' | 'field' | 'program', Record<FieldId, number>> = {
  single: {
    business: 7500, marketing: 8500, finance: 9500, it: 11500,
    healthcare: 12500, engineering: 13500, cybersecurity: 14500, aviation: 17500,
  },
  field: {
    business: 22500, marketing: 24500, finance: 27500, it: 32500,
    engineering: 34500, healthcare: 37500, cybersecurity: 39500, aviation: 47500,
  },
  program: {
    business: 39500, marketing: 44500, finance: 49500, it: 59500,
    engineering: 64500, healthcare: 69500, cybersecurity: 74500, aviation: 89500,
  },
}

export const ACADEMY_PRICE = 125000
export const ENTERPRISE_STARTS_AT = 175000

/** Annual price for a license type + field. Academy ignores field. */
export function priceFor(type: LicenseTypeId, fieldId: FieldId | null): number {
  if (type === 'academy') return ACADEMY_PRICE
  return PRICE_MATRIX[type][fieldId ?? 'healthcare']
}

/** Human label like "Field License — Health Sciences". */
export function licenseLabel(type: LicenseTypeId, fieldId: FieldId | null): string {
  const t = LICENSE_TYPES.find((x) => x.id === type)!
  if (type === 'academy') return t.name
  return `${t.name} — ${fieldId ? getField(fieldId).name : 'Health Sciences'}`
}
