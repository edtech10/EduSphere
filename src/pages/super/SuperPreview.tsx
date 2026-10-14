// Preview-as-student: super admin / school admin / instructor can walk a track
// exactly as a student sees it. Read-only — no progress is recorded.
// ?notes=1 shows instructor notes (instructor preview).
import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router'
import { ChevronLeft, Clock, Eye, GraduationCap, Layers } from 'lucide-react'
import { useDB } from '@/lib/db'
import { useAuth } from '@/lib/auth'
import { LessonEnriched } from '@/components/lessons/LessonEnriched'
import { getField } from '@/data/fields'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function SuperPreview() {
  const db = useDB()
  const { user } = useAuth()
  const { trackId } = useParams<{ trackId: string }>()
  const [searchParams] = useSearchParams()
  const showNotes = searchParams.get('notes') === '1'
  const track = db.tracks.find((t) => t.id === trackId)
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null)

  if (!track) {
    return (
      <Card className="mx-auto max-w-xl">
        <CardContent className="p-8 text-center">
          <p className="font-medium">Track not found</p>
          <Button variant="outline" className="mt-4" asChild>
            <Link to="/app/super/content">Back to Content CMS</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  const modules = db.modules.filter((m) => m.trackId === track.id).sort((a, b) => a.order - b.order)
  const activeModule = modules.find((m) => m.id === activeModuleId) ?? modules[0]
  const lessons = activeModule
    ? db.lessons.filter((l) => l.moduleId === activeModule.id).sort((a, b) => a.order - b.order)
    : []
  const field = getField(track.category)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="ghost" size="sm" asChild>
          <Link to={`/app/super/content/${track.id}`}>
            <ChevronLeft className="h-4 w-4" /> Back to track manager
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button size="sm" variant={showNotes ? 'outline' : 'default'} asChild>
            <Link to={`/app/super/preview/${track.id}`}>
              <Eye className="mr-1 h-4 w-4" /> Student view
            </Link>
          </Button>
          <Button size="sm" variant={showNotes ? 'default' : 'outline'} asChild>
            <Link to={`/app/super/preview/${track.id}?notes=1`}>
              <GraduationCap className="mr-1 h-4 w-4" /> Instructor view
            </Link>
          </Button>
        </div>
      </div>

      <Card className={cn('border-blue-200', showNotes ? 'bg-violet-50/60 border-violet-200' : 'bg-blue-50/60')}>
        <CardContent className="flex items-start gap-3 p-4">
          {showNotes ? (
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-violet-700" />
          ) : (
            <Eye className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
          )}
          <p className="text-sm">
            {showNotes ? (
              <span className="text-violet-900">
                <span className="font-medium">Instructor preview</span> — the student experience plus instructor
                notes and teaching guidance. Nothing here is recorded.
              </span>
            ) : (
              <span className="text-blue-900">
                <span className="font-medium">Student preview</span> — exactly what a student sees in this track.
                Logged in as {user?.name ?? 'admin'}; no progress or attempts are recorded.
              </span>
            )}
          </p>
        </CardContent>
      </Card>

      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {field.name} · {track.credentialFocus}
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">{track.name}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{track.studentOverview ?? track.description}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        {/* Module nav */}
        <Card className="h-fit lg:sticky lg:top-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Modules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 p-2">
            {modules.map((m) => {
              const count = db.lessons.filter((l) => l.moduleId === m.id).length
              const active = m.id === activeModule?.id
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveModuleId(m.id)}
                  className={cn(
                    'flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm transition-colors',
                    active ? 'bg-primary/10 font-medium text-primary' : 'hover:bg-slate-100',
                  )}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold">
                    <Layers className="hidden" />{m.order}
                  </span>
                  <span className="min-w-0 flex-1 truncate">{m.title}</span>
                  <span className="text-xs text-muted-foreground">{count}</span>
                </button>
              )
            })}
          </CardContent>
        </Card>

        {/* Lessons of active module */}
        <div className="space-y-5">
          {activeModule && (
            <div>
              <Badge variant="secondary" className="mb-1">Module {activeModule.order} of {modules.length}</Badge>
              <h2 className="text-xl font-semibold tracking-tight">{activeModule.title}</h2>
              <p className="mt-0.5 text-sm text-muted-foreground">{activeModule.description}</p>
            </div>
          )}
          {lessons.map((lesson, i) => (
            <Card key={lesson.id}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">
                  Lesson {i + 1}: {lesson.title}
                </CardTitle>
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {lesson.durationMin} min read
                </p>
              </CardHeader>
              <CardContent>
                <LessonEnriched
                  lesson={lesson}
                  track={track}
                  moduleTitle={activeModule?.title ?? ''}
                  showInstructorNotes={showNotes}
                />
              </CardContent>
            </Card>
          ))}
          {modules.length > 1 && (
            <div className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const idx = modules.findIndex((m) => m.id === activeModule?.id)
                  if (idx < modules.length - 1) setActiveModuleId(modules[idx + 1].id)
                }}
              >
                Next module
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
