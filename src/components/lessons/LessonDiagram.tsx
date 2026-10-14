// Renders an actual flow-map diagram for a lesson from its key points —
// numbered nodes connected by directional arrows, tinted with the track color.
import type { CSSProperties } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'

function shortLabel(point: string): string {
  // Lead phrase up to the first dash/colon, else first 6 words
  const lead = point.split(/[—–:;]/)[0].trim()
  const words = lead.split(/\s+/)
  const label = words.slice(0, 7).join(' ')
  return label.length > 46 ? `${label.slice(0, 44)}…` : label
}

export function LessonDiagram({
  title,
  points,
  color,
  caption,
}: {
  title: string
  points: string[]
  color: string
  caption?: string
}) {
  const nodes = points.slice(0, 8).map((p, i) => ({ n: i + 1, label: shortLabel(p), full: p }))
  if (nodes.length === 0) return null

  const accent: CSSProperties = { borderColor: `${color}55`, backgroundColor: `${color}0d` }
  const chip: CSSProperties = { backgroundColor: color }

  return (
    <figure className="rounded-md border border-violet-200 bg-violet-50/40 p-4">
      <figcaption className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-sm" style={chip} />
        <p className="text-sm font-semibold text-violet-900">{title}</p>
      </figcaption>

      {/* Desktop: horizontal flow with wrap; arrows link consecutive nodes */}
      <div className="mt-3 hidden flex-wrap items-stretch gap-y-3 sm:flex sm:items-center">
        {nodes.map((node, i) => (
          <span key={node.n} className="flex items-center">
            <span
              className="flex max-w-[190px] flex-col gap-1 rounded-lg border bg-white p-2.5 shadow-sm"
              style={accent}
              title={node.full}
            >
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-white"
                style={chip}
              >
                {node.n}
              </span>
              <span className="text-xs font-medium leading-snug">{node.label}</span>
            </span>
            {i < nodes.length - 1 && (
              <ArrowRight className="mx-1.5 h-4 w-4 shrink-0 text-violet-400" aria-hidden />
            )}
          </span>
        ))}
      </div>

      {/* Mobile: vertical flow */}
      <div className="mt-3 space-y-0 sm:hidden">
        {nodes.map((node, i) => (
          <div key={node.n}>
            <div className="flex items-center gap-2 rounded-lg border bg-white p-2.5 shadow-sm" style={accent}>
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                style={chip}
              >
                {node.n}
              </span>
              <span className="text-xs font-medium leading-snug">{node.label}</span>
            </div>
            {i < nodes.length - 1 && (
              <div className="flex justify-center py-0.5">
                <ArrowDown className="h-4 w-4 text-violet-400" aria-hidden />
              </div>
            )}
          </div>
        ))}
      </div>

      {caption && (
        <figcaption className="mt-3 border-t border-violet-100 pt-2 text-xs text-violet-900/75">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
