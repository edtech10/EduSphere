import { Link, useParams } from 'react-router'
import {
  Lock, CheckCircle2, Clock, ChevronLeft, ChevronRight, ClipboardCheck,
} from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { useDB, updateDB } from '@/lib/db'
import { LessonEnriched } from '@/components/lessons/LessonEnriched'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function ModuleView() {
  const { user } = useAuth()
  const db = useDB()
  const { trackId, moduleId } = useParams<{ trackId: string; moduleId: string }>()
  if (!user) return null

  const track = db.tracks.find((t) => t.id === trackId)
  const enrollment = db.enrollments.find((e) => e.studentId === user.id && e.trackId === trackId)
  const mod = db.modules.find((m) => m.id === moduleId && m.trackId === trackId)

  if (!track || !enrollment || !mod) {
    return (
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <Lock className="h-8 w-8 text-muted-foreground" />
            <p className="font-medium">This module is locked</p>
            <p className="text-sm text-muted-foreground">
              You are not enrolled in this readiness track, or the module does not exist.
            </p>
            <Button variant="outline" asChild>
              <Link to="/app/student/tracks">Back to My Tracks</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const progress = db.progress.find((p) => p.studentId === user.id && p.trackId === track.id)
  const lessons = db.lessons.filter((l) => l.moduleId === mod.id).sort((a, b) => a.order - b.order)
  const trackModules = db.modules.filter((m) => m.trackId === track.id).sort((a, b) => a.order - b.order)
  const idx = trackModules.findIndex((m) => m.id === mod.id)
  const prevMod = idx > 0 ? trackModules[idx - 1] : null
  const nextMod = idx >= 0 && idx < trackModules.length - 1 ? trackModules[idx + 1] : null
  const kc = db.assessments.find((a) => a.kind === 'knowledge_check' && a.moduleId === mod.id)

  const markComplete = (lessonId: string) => {
    const now = new Date().toISOString()
    updateDB((d) => {
      let p = d.progress.find((x) => x.studentId === user.id && x.trackId === track.id)
      if (!p) {
        p = {
          studentId: user.id,
          trackId: track.id,
          completedLessonIds: [],
          practiceQuestionsCompleted: 0,
          practiceQuestionsCorrect: 0,
          topicStats: {},
          finalPracticeScorePct: null,
          diagnosticBaselinePct: null,
          lastActivityAt: now,
        }
        d.progress.push(p)
      }
      if (!p.completedLessonIds.includes(lessonId)) p.completedLessonIds.push(lessonId)
      p.lastActivityAt = now
    })
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link to="/app/student/tracks">My Tracks</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={`/app/student/track/${track.id}`}>{track.shortName}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{mod.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Module {mod.order} of {trackModules.length} · {track.name}
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">{mod.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{mod.description}</p>
      </div>

      <div className="space-y-4">
        {lessons.map((lesson, i) => {
          const done = progress?.completedLessonIds.includes(lesson.id) ?? false
          return (
            <Card key={lesson.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <CardTitle className="flex items-center gap-2 text-base">
                      {done && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />}
                      Lesson {i + 1}: {lesson.title}
                    </CardTitle>
                    <CardDescription className="mt-1 flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {lesson.durationMin} min read
                    </CardDescription>
                  </div>
                  {done ? (
                    <span className="shrink-0 text-xs font-medium text-emerald-600">Completed</span>
                  ) : (
                    <Button size="sm" variant="outline" className="shrink-0" onClick={() => markComplete(lesson.id)}>
                      <CheckCircle2 className="h-4 w-4" /> Mark complete
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <LessonEnriched
                  lesson={lesson}
                  track={track}
                  moduleTitle={mod.title}
                  showInstructorNotes={user.role !== 'student'}
                />
              </CardContent>
            </Card>
          )
        })}
      </div>

      {kc && (
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4">
            <div>
              <p className="text-sm font-medium text-blue-900">Module knowledge check</p>
              <p className="text-sm text-blue-800/80">
                {kc.questionIds.length} questions on {mod.title} — counts toward your certification readiness score.
              </p>
            </div>
            <Button size="sm" asChild>
              <Link to={`/app/student/track/${track.id}/assessment/${kc.id}`}>
                <ClipboardCheck className="h-4 w-4" /> Take knowledge check
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center justify-between gap-3">
        {prevMod ? (
          <Button variant="outline" size="sm" asChild>
            <Link to={`/app/student/track/${track.id}/module/${prevMod.id}`}>
              <ChevronLeft className="h-4 w-4" /> {prevMod.title}
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {nextMod ? (
          <Button variant="outline" size="sm" asChild>
            <Link to={`/app/student/track/${track.id}/module/${nextMod.id}`}>
              {nextMod.title} <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button variant="outline" size="sm" asChild>
            <Link to={`/app/student/track/${track.id}`}>Back to track</Link>
          </Button>
        )}
      </div>
    </div>
  )
}
