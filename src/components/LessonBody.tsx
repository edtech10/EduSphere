import { Lightbulb, AlertTriangle, ShieldAlert, GraduationCap, ListChecks } from 'lucide-react'
import type { Lesson, LessonCallout } from '@/lib/types'
import { cn } from '@/lib/utils'

const CALLOUT_STYLES: Record<LessonCallout['variant'], { box: string; icon: typeof Lightbulb; label: string }> = {
  tip: { box: 'border-blue-200 bg-blue-50 text-blue-900', icon: Lightbulb, label: 'Clinical tip' },
  warning: { box: 'border-amber-200 bg-amber-50 text-amber-900', icon: AlertTriangle, label: 'Watch out' },
  safety: { box: 'border-red-200 bg-red-50 text-red-900', icon: ShieldAlert, label: 'Safety alert' },
  exam: { box: 'border-teal-200 bg-teal-50 text-teal-900', icon: GraduationCap, label: 'Readiness focus' },
}

function CalloutBox({ callout }: { callout: LessonCallout }) {
  const style = CALLOUT_STYLES[callout.variant]
  const Icon = style.icon
  return (
    <div className={cn('rounded-md border p-3.5', style.box)}>
      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide">
        <Icon className="h-3.5 w-3.5" /> {callout.title || style.label}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed">{callout.text}</p>
    </div>
  )
}

/** Renders the full rich body of a lesson: media, intro paragraphs, structured
 * sections (paragraphs / bullets / numbered procedures / reference tables),
 * callout boxes, and the key-points summary. */
export function LessonBody({ lesson }: { lesson: Lesson }) {
  return (
    <div className="space-y-5">
      {lesson.media?.map((m, i) => (
        <figure key={i} className="overflow-hidden rounded-lg border bg-white">
          {m.type === 'video' ? (
            <video
              src={(import.meta.env?.BASE_URL ?? '/') + m.src}
              controls
              preload="metadata"
              className="w-full"
              aria-label={m.alt}
            />
          ) : (
            <img src={(import.meta.env?.BASE_URL ?? '/') + m.src} alt={m.alt} className="w-full object-cover" loading="lazy" />
          )}
          {m.caption && (
            <figcaption className="border-t px-3 py-2 text-xs text-muted-foreground">{m.caption}</figcaption>
          )}
        </figure>
      ))}

      {lesson.content.map((para, j) => (
        <p key={j} className="text-[15px] leading-relaxed text-slate-700">
          {para}
        </p>
      ))}

      {lesson.sections?.map((sec, i) => (
        <section key={i} className="space-y-3">
          <h3 className="border-b pb-1.5 text-base font-semibold tracking-tight text-slate-900">
            {sec.heading}
          </h3>
          {sec.paragraphs?.map((p, j) => (
            <p key={j} className="text-[15px] leading-relaxed text-slate-700">
              {p}
            </p>
          ))}
          {sec.bullets && (
            <ul className="space-y-1.5">
              {sec.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-2 text-[15px] leading-relaxed text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          {sec.steps && (
            <ol className="space-y-2.5">
              {sec.steps.map((s, j) => (
                <li key={j} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {j + 1}
                  </span>
                  <span className="pt-0.5">{s}</span>
                </li>
              ))}
            </ol>
          )}
          {sec.table && (
            <div className="overflow-hidden rounded-md border">
              {sec.table.caption && (
                <p className="border-b bg-slate-50 px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {sec.table.caption}
                </p>
              )}
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-slate-50/60">
                    {sec.table.headers.map((h, j) => (
                      <th key={j} className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sec.table.rows.map((row, j) => (
                    <tr key={j} className="border-b last:border-0">
                      {row.map((cell, k) => (
                        <td key={k} className="px-3 py-2 align-top text-slate-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}

      {lesson.callouts?.map((c, i) => (
        <CalloutBox key={i} callout={c} />
      ))}

      {lesson.keyPoints.length > 0 && (
        <div className="rounded-md bg-slate-50 p-3.5">
          <p className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <ListChecks className="h-3.5 w-3.5" /> Key points
          </p>
          <ul className="space-y-1">
            {lesson.keyPoints.map((kp, j) => (
              <li key={j} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {kp}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
