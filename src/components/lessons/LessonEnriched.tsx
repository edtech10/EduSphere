// Rich lesson renderer: objective → scenario → core teaching (LessonBody) →
// visual explanation → interactive activity → vocabulary → common mistakes →
// quick check → remediation → instructor notes → worksheet.
import { AlertTriangle, BookOpen, FileText, GraduationCap, Lightbulb, Target } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { LessonBody } from '@/components/LessonBody'
import { LessonDiagram } from '@/components/lessons/LessonDiagram'
import { AVIATION_VISUALS } from '@/components/lessons/AviationVisuals'
import { ActivityPlayer, QuickCheck } from '@/components/activities/ActivityPlayer'
import { getLessonEnrichment } from '@/data/enrichment'
import { getActivity } from '@/data/activities'
import type { CredentialTrack, Lesson } from '@/lib/types'

export function LessonEnriched({
  lesson,
  track,
  moduleTitle,
  showInstructorNotes,
}: {
  lesson: Lesson
  track: CredentialTrack
  moduleTitle: string
  showInstructorNotes?: boolean
}) {
  const en = getLessonEnrichment(lesson, track, moduleTitle)
  const activity = en.activityId ? getActivity(en.activityId) : undefined

  return (
    <div className="space-y-5">
      {/* Objective */}
      <div className="flex items-start gap-3 rounded-md border border-emerald-200 bg-emerald-50/60 p-3">
        <Target className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">Learning objective</p>
          <p className="mt-0.5 text-sm text-emerald-900">{en.objective}</p>
        </div>
      </div>

      {/* Scenario first */}
      <div className="flex items-start gap-3 rounded-md border border-blue-200 bg-blue-50/60 p-3">
        <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-800">The scenario</p>
          <p className="mt-0.5 text-sm text-blue-900">{en.scenario}</p>
        </div>
      </div>

      {/* Core teaching content */}
      <LessonBody lesson={lesson} />

      {/* Visual explanation — purpose-built visuals when assigned, else the
          generic concept map rendered from key points */}
      {en.customVisuals && en.customVisuals.length > 0 ? (
        en.customVisuals.map((key) => {
          const Visual = AVIATION_VISUALS[key]
          return Visual ? (
            <Visual
              key={key}
              color={track.color}
              caption={key === en.customVisuals![en.customVisuals!.length - 1] ? en.visual.description : undefined}
            />
          ) : null
        })
      ) : (
        <LessonDiagram
          title={en.visual.title}
          points={lesson.keyPoints}
          color={track.color}
          caption={en.visual.description}
        />
      )}

      {/* Interactive activity */}
      {activity && (
        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <GraduationCap className="h-4 w-4" /> Interactive practice
          </p>
          <ActivityPlayer activity={activity} compact />
        </div>
      )}

      {/* Vocabulary */}
      {en.vocabulary.length > 0 && (
        <div className="rounded-md border p-4">
          <p className="text-sm font-semibold">Key vocabulary</p>
          <dl className="mt-2 divide-y text-sm">
            {en.vocabulary.map((v) => (
              <div key={v.term} className="flex flex-col gap-0.5 py-2 sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 font-medium">{v.term}</dt>
                <dd className="text-muted-foreground">{v.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* Common mistakes */}
      {en.commonMistakes.length > 0 && (
        <div className="rounded-md border border-amber-200 bg-amber-50/60 p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-amber-900">
            <AlertTriangle className="h-4 w-4" /> Common mistakes to avoid
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900/85">
            {en.commonMistakes.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Quick check */}
      {en.quickCheck.length > 0 && (
        <div className="rounded-md border border-slate-200 bg-slate-50/60 p-4">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Lightbulb className="h-4 w-4 text-amber-500" /> Quick check
          </p>
          <QuickCheck items={en.quickCheck} />
        </div>
      )}

      {/* Remediation + worksheet */}
      <div className="rounded-md border p-4 text-sm">
        <p className="font-medium">If this felt shaky</p>
        <p className="mt-1 text-muted-foreground">{en.remediation}</p>
        {en.worksheet && (
          <p className="mt-3 flex items-center gap-2 text-muted-foreground">
            <FileText className="h-4 w-4 shrink-0" />
            <span>{en.worksheet}</span>
          </p>
        )}
      </div>

      {/* Instructor notes — staff view only */}
      {showInstructorNotes && en.instructorNotes && (
        <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 p-4">
          <Badge variant="outline" className="mb-2">Instructor notes</Badge>
          <p className="text-sm text-muted-foreground">{en.instructorNotes}</p>
        </div>
      )}
    </div>
  )
}
