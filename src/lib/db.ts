// Local persistence layer — a localStorage-backed stand-in for the production
// database (see docs/schema.sql for the PostgreSQL schema this mirrors).
import { useSyncExternalStore } from 'react'
import type { Database, AuditLog } from './types'
import { buildSeedDatabase } from '@/data/seed'

const STORAGE_KEY = 'edusphere_db_v1'
const VERSION_KEY = 'edusphere_db_version'
const SEED_VERSION = '6'

let db: Database
const listeners = new Set<() => void>()

function load(): Database {
  try {
    const version = localStorage.getItem(VERSION_KEY)
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw && version === SEED_VERSION) {
      return JSON.parse(raw) as Database
    }
  } catch {
    // fall through to seed
  }
  const seed = buildSeedDatabase()
  persist(seed)
  return seed
}

function persist(next: Database) {
  db = next
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    localStorage.setItem(VERSION_KEY, SEED_VERSION)
  } catch {
    // storage full or unavailable — keep in-memory copy
  }
}

export function getDB(): Database {
  if (!db) db = load()
  return db
}

/** Mutate the database inside `fn`; the change is persisted and subscribers notified. */
export function updateDB(fn: (draft: Database) => void) {
  const current = getDB()
  const next: Database = JSON.parse(JSON.stringify(current))
  fn(next)
  persist(next)
  listeners.forEach((l) => l())
}

export function resetDB() {
  persist(buildSeedDatabase())
  listeners.forEach((l) => l())
}

export function logAction(actorId: string, actorName: string, action: string, detail: string, orgId: string | null) {
  updateDB((d) => {
    d.auditLogs.unshift({
      id: `log_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      actorId,
      actorName,
      action,
      detail,
      orgId,
      createdAt: new Date().toISOString(),
    })
    if (d.auditLogs.length > 500) d.auditLogs.length = 500
  })
}

export function getAuditLogs(): AuditLog[] {
  return getDB().auditLogs
}

function subscribe(cb: () => void) {
  listeners.add(cb)
  return () => {
    listeners.delete(cb)
  }
}

/** React hook: re-renders whenever the database changes. */
export function useDB(): Database {
  return useSyncExternalStore(subscribe, getDB)
}

export function uid(prefix: string): string {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`
}
