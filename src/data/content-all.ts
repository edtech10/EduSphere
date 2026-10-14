// Unified content: hand-authored tracks (content.ts + content-amt.ts) merged
// with the expanded IRC catalog (catalog-health / catalog-tech / catalog-business).
// All pages and the seed should import from here.
import {
  TRACKS as BASE_TRACKS,
  MODULES as BASE_MODULES,
  LESSONS as BASE_LESSONS,
  QUESTIONS as BASE_QUESTIONS,
  ASSESSMENTS as BASE_ASSESSMENTS,
} from './content'
import { expandAll, EXISTING_TRACK_META } from './catalog'
import { HEALTH_SPECS } from './catalog-health'
import { synthesizeAll } from './catalog-compact'
import { TECH_COMPACT } from './catalog-tech'
import { BUSINESS_COMPACT } from './catalog-business'

// Expand generated catalogs.
const health = expandAll(HEALTH_SPECS)
const tech = expandAll(synthesizeAll(TECH_COMPACT))
const business = expandAll(synthesizeAll(BUSINESS_COMPACT))

// Apply rich metadata overlays to the four hand-authored tracks.
const handAuthored = BASE_TRACKS.map((t) => {
  const meta = EXISTING_TRACK_META[t.id]
  return meta ? { ...t, ...meta, comingSoon: undefined } : t
})

export const ALL_TRACKS = [...handAuthored, ...health.tracks, ...tech.tracks, ...business.tracks]
export const ALL_MODULES = [...BASE_MODULES, ...health.modules, ...tech.modules, ...business.modules]
export const ALL_LESSONS = [...BASE_LESSONS, ...health.lessons, ...tech.lessons, ...business.lessons]
export const ALL_QUESTIONS = [...BASE_QUESTIONS, ...health.questions, ...tech.questions, ...business.questions]
export const ALL_ASSESSMENTS = [
  ...BASE_ASSESSMENTS,
  ...health.assessments,
  ...tech.assessments,
  ...business.assessments,
]

// Backwards-compatible aliases for existing imports.
export {
  ALL_TRACKS as TRACKS,
  ALL_MODULES as MODULES,
  ALL_LESSONS as LESSONS,
  ALL_QUESTIONS as QUESTIONS,
  ALL_ASSESSMENTS as ASSESSMENTS,
}
