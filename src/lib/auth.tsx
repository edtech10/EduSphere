// Auth context — demo authentication against the local data layer.
// In production this maps to Supabase Auth + row-level security.
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Role, User } from './types'
import { getDB, updateDB, logAction } from './db'

const SESSION_KEY = 'edusphere_session_user'

interface AuthContextValue {
  user: User | null
  login: (email: string, password: string) => { ok: boolean; error?: string }
  logout: () => void
  signupSchoolAdmin: (input: { name: string; email: string; password: string; schoolName: string }) => { ok: boolean; error?: string }
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const id = localStorage.getItem(SESSION_KEY)
      if (!id) return null
      return getDB().users.find((u) => u.id === id) ?? null
    } catch {
      return null
    }
  })

  // Keep the in-memory user in sync with DB updates (e.g. role/org changes).
  useEffect(() => {
    if (!user) return
    const fresh = getDB().users.find((u) => u.id === user.id)
    if (fresh && JSON.stringify(fresh) !== JSON.stringify(user)) setUser(fresh)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id])

  const login: AuthContextValue['login'] = (email, password) => {
    const found = getDB().users.find(
      (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password,
    )
    if (!found) return { ok: false, error: 'Invalid email or password.' }
    updateDB((d) => {
      const u = d.users.find((x) => x.id === found.id)
      if (u) u.lastActiveAt = new Date().toISOString()
    })
    logAction(found.id, found.name, 'login', `${found.name} signed in`, found.orgId)
    localStorage.setItem(SESSION_KEY, found.id)
    setUser(found)
    return { ok: true }
  }

  const logout = () => {
    if (user) logAction(user.id, user.name, 'logout', `${user.name} signed out`, user.orgId)
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  const signupSchoolAdmin: AuthContextValue['signupSchoolAdmin'] = ({ name, email, password, schoolName }) => {
    const db = getDB()
    if (db.users.some((u) => u.email.toLowerCase() === email.trim().toLowerCase())) {
      return { ok: false, error: 'An account with this email already exists.' }
    }
    const orgId = `org_${Date.now().toString(36)}`
    const userId = `user_${Date.now().toString(36)}`
    const newUser: User = {
      id: userId,
      orgId,
      name,
      email: email.trim(),
      password,
      role: 'school_admin',
      createdAt: new Date().toISOString(),
    }
    updateDB((d) => {
      d.organizations.push({
        id: orgId,
        name: schoolName,
        type: 'career_academy',
        contactName: name,
        contactEmail: email.trim(),
        contactPhone: '',
        createdAt: new Date().toISOString(),
        status: 'pending',
      })
      d.users.push(newUser)
      d.seatLicenses.push({ id: `seat_${orgId}`, orgId, totalSeats: 0, usedSeats: 0, updatedAt: new Date().toISOString() })
    })
    logAction(userId, name, 'signup', `New school admin registered for ${schoolName}`, orgId)
    localStorage.setItem(SESSION_KEY, userId)
    setUser(newUser)
    return { ok: true }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signupSchoolAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}

export function homeForRole(role: Role): string {
  switch (role) {
    case 'student':
      return '/app/student'
    case 'instructor':
      return '/app/instructor'
    case 'school_admin':
      return '/app/admin'
    case 'super_admin':
      return '/app/super'
    default:
      return '/'
  }
}
