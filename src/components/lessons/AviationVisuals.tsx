// Purpose-built aviation training visuals for the AMT General Readiness
// track. Each component renders a real, artifact-style visual — an annotated
// logbook entry, a maintenance-manual page layout, a wiring schematic, a
// weight-and-balance worksheet, and an inspection decision tree — instead of
// a generic concept map. Pure HTML/SVG, tinted with the track color.
import type { CSSProperties, ComponentType } from 'react'

interface VisualProps {
  color: string
  caption?: string
}

function Frame({
  title,
  color,
  caption,
  children,
}: {
  title: string
  color: string
  caption?: string
  children: React.ReactNode
}) {
  return (
    <figure className="rounded-md border border-violet-200 bg-violet-50/40 p-4">
      <figcaption className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: color }} />
        <p className="text-sm font-semibold text-violet-900">{title}</p>
      </figcaption>
      <div className="mt-3">{children}</div>
      {caption && (
        <figcaption className="mt-3 border-t border-violet-100 pt-2 text-xs text-violet-900/75">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function Callout({ n, label, color }: { n: number; label: string; color: string }) {
  return (
    <li className="flex items-start gap-2 text-xs">
      <span
        className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
        style={{ backgroundColor: color }}
      >
        {n}
      </span>
      <span className="leading-snug text-slate-700">{label}</span>
    </li>
  )
}

function Num({ n, color }: { n: number; color: string }) {
  const style: CSSProperties = { backgroundColor: color }
  return (
    <sup
      className="ml-0.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full text-[8px] font-bold text-white"
      style={style}
    >
      {n}
    </sup>
  )
}

// ---------------------------------------------------------------------------
// 1. Annotated maintenance record (logbook) entry — 14 CFR 43.9 / 43.11
// ---------------------------------------------------------------------------
export function LogbookEntryVisual({ color, caption }: VisualProps) {
  return (
    <Frame title="Annotated maintenance record entry" color={color} caption={caption}>
      <div className="grid gap-4 md:grid-cols-[1fr_220px]">
        {/* The entry itself, styled like a logbook page */}
        <div className="rounded-lg border border-amber-300/70 bg-amber-50/70 p-3 shadow-sm">
          <div className="border-b border-amber-300/70 pb-1 text-[10px] font-semibold uppercase tracking-wide text-amber-800">
            Aircraft Maintenance Record — Airframe
          </div>
          <div className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed text-slate-800">
            <p>
              N12345 &nbsp; Cessna 172S &nbsp; S/N 172S9876 &nbsp; Hobbs 1,245.6
            </p>
            <p>
              Date: 2025-03-14
              <Num n={2} color={color} />
            </p>
            <p>
              Removed and replaced right main landing gear tire and tube, P/N
              6.00-6, torqued axle nut to manufacturer’s specification and
              installed new cotter pin. Serviced strut with nitrogen to 45 psi.
              Operational check satisfactory.
              <Num n={1} color={color} />
            </p>
            <p>
              I certify that this aircraft has been inspected in accordance with
              the scope and detail of the work described above and is approved
              for return to service.
              <Num n={4} color={color} />
            </p>
            <p>
              J. Rivera, A&amp;P 3456789
              <Num n={3} color={color} />
            </p>
          </div>
        </div>
        {/* Callouts */}
        <ul className="space-y-2">
          <Callout n={1} color={color} label="Description of the work performed — specific enough that another technician could repeat it" />
          <Callout n={2} color={color} label="Date of completion — the entry is not valid without it" />
          <Callout n={3} color={color} label="Signature and certificate number of the person approving the work" />
          <Callout n={4} color={color} label="Approval for return to service statement (43.9 / 43.11 wording)" />
        </ul>
      </div>
    </Frame>
  )
}

// ---------------------------------------------------------------------------
// 2. Maintenance-manual page layout — ATA-style block numbering
// ---------------------------------------------------------------------------
export function ManualLayoutVisual({ color, caption }: VisualProps) {
  const zone = 'rounded border border-slate-300 bg-white p-2 text-[11px] leading-snug text-slate-700'
  const tag = 'mb-1 text-[9px] font-semibold uppercase tracking-wide text-slate-500'
  return (
    <Frame title="Anatomy of a maintenance-manual page" color={color} caption={caption}>
      <div className="mx-auto max-w-lg space-y-2">
        <div className={`${zone} flex items-center justify-between`}>
          <div>
            <p className={tag}>Header block</p>
            <p className="font-semibold">Model 172S Maintenance Manual</p>
          </div>
          <div className="text-right font-mono text-[10px]">
            Chapter 32-40-01<Num n={1} color={color} />
            <br />
            Page 201 · Rev 12
          </div>
        </div>
        <div className={zone}>
          <p className={tag}>Effectivity + revision</p>
          Applies to S/N 172S9001 and on. Revised 2025-01-30 — always confirm the
          latest revision before using data.
          <Num n={2} color={color} />
        </div>
        <div className={zone}>
          <p className={tag}>Numbered procedure steps</p>
          <ol className="list-decimal space-y-0.5 pl-4 font-mono text-[10px]">
            <li>Remove wheel fairing and axle nut cotter pin.</li>
            <li>Deflate tire fully before breaking the bead.</li>
            <li>Torque axle nut per Table 201, then install a new cotter pin.</li>
          </ol>
          <Num n={3} color={color} />
        </div>
        <div className="rounded border border-red-300 bg-red-50 p-2 text-[11px] leading-snug text-red-800">
          <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wide text-red-600">
            Warning / caution / note boxes
          </p>
          WARNING: A tire under pressure can explode when the bead is broken.
          Deflate completely before disassembly.
          <Num n={4} color={color} />
        </div>
      </div>
      <ul className="mx-auto mt-3 max-w-lg space-y-2">
        <Callout n={1} color={color} label="ATA-style chapter-section-subject block number locates the task in the manual" />
        <Callout n={2} color={color} label="Effectivity and revision — data is only approved for the listed serial numbers and revision" />
        <Callout n={3} color={color} label="Procedure steps are performed in order; torque values come from the manual, never memory" />
        <Callout n={4} color={color} label="Warnings protect people; cautions protect equipment; notes add clarity" />
      </ul>
    </Frame>
  )
}

// ---------------------------------------------------------------------------
// 3. Wiring diagram — battery → fuse → switch → load → ground
// ---------------------------------------------------------------------------
export function WiringDiagramVisual({ color, caption }: VisualProps) {
  const wire = '#475569'
  const lbl = { fontSize: 8.5, fill: '#334155' } as const
  return (
    <Frame title="Reading a simple aircraft wiring diagram" color={color} caption={caption}>
      <svg viewBox="0 0 560 170" className="w-full" role="img" aria-label="Wiring diagram: battery through fuse and switch to landing light, returning to ground">
        {/* Battery */}
        <g>
          <line x1="40" y1="60" x2="40" y2="110" stroke={wire} strokeWidth="1.5" />
          <line x1="34" y1="85" x2="46" y2="85" stroke={wire} strokeWidth="3" />
          <line x1="36" y1="93" x2="44" y2="93" stroke={wire} strokeWidth="1.2" />
          <text x="14" y="82" style={lbl}>24V</text>
          <text x="8" y="94" style={lbl}>batt</text>
        </g>
        {/* Top conductor with wire number circle */}
        <line x1="40" y1="60" x2="120" y2="60" stroke={wire} strokeWidth="1.5" />
        <circle cx="80" cy="60" r="10" fill="white" stroke={wire} strokeWidth="1.2" />
        <text x="73" y="63" style={lbl}>P2A</text>
        {/* Fuse */}
        <line x1="120" y1="60" x2="150" y2="60" stroke={wire} strokeWidth="1.5" />
        <rect x="150" y="52" width="34" height="16" fill="white" stroke={wire} strokeWidth="1.5" />
        <line x1="150" y1="60" x2="184" y2="60" stroke={wire} strokeWidth="1" strokeDasharray="3 2" />
        <line x1="184" y1="60" x2="214" y2="60" stroke={wire} strokeWidth="1.5" />
        <text x="150" y="46" style={lbl}>Fuse 5A</text>
        {/* Switch */}
        <line x1="214" y1="60" x2="240" y2="60" stroke={wire} strokeWidth="1.5" />
        <circle cx="242" cy="60" r="2.6" fill={wire} />
        <line x1="242" y1="60" x2="268" y2="44" stroke={wire} strokeWidth="1.5" />
        <circle cx="272" cy="60" r="2.6" fill={wire} />
        <line x1="272" y1="60" x2="300" y2="60" stroke={wire} strokeWidth="1.5" />
        <text x="238" y="34" style={lbl}>Switch S1 (shown OFF)</text>
        {/* Lamp / load */}
        <line x1="300" y1="60" x2="330" y2="60" stroke={wire} strokeWidth="1.5" />
        <circle cx="345" cy="60" r="13" fill="white" stroke={wire} strokeWidth="1.5" />
        <line x1="336" y1="51" x2="354" y2="69" stroke={wire} strokeWidth="1.2" />
        <line x1="354" y1="51" x2="336" y2="69" stroke={wire} strokeWidth="1.2" />
        <text x="322" y="88" style={lbl}>Landing light L1</text>
        <line x1="358" y1="60" x2="420" y2="60" stroke={wire} strokeWidth="1.5" />
        {/* Ground side */}
        <line x1="420" y1="60" x2="420" y2="110" stroke={wire} strokeWidth="1.5" />
        <line x1="40" y1="110" x2="420" y2="110" stroke={wire} strokeWidth="1.5" />
        {/* Ground symbol at 440 */}
        <line x1="410" y1="110" x2="430" y2="110" stroke={wire} strokeWidth="2" />
        <line x1="413" y1="116" x2="427" y2="116" stroke={wire} strokeWidth="2" />
        <line x1="416" y1="122" x2="424" y2="122" stroke={wire} strokeWidth="2" />
        <text x="436" y="115" style={lbl}>Structure ground</text>
        {/* Wire number on return */}
        <circle cx="230" cy="110" r="10" fill="white" stroke={wire} strokeWidth="1.2" />
        <text x="223" y="113" style={lbl}>P2B</text>
        {/* Annotation arrows */}
        <text x="60" y="140" style={lbl}>Circled codes = wire identification numbers</text>
        <text x="330" y="140" style={lbl}>Ground = return path through airframe structure</text>
      </svg>
    </Frame>
  )
}

// ---------------------------------------------------------------------------
// 4. Weight-and-balance worksheet — worked loading computation
// ---------------------------------------------------------------------------
export function WeightBalanceVisual({ color, caption }: VisualProps) {
  const rows: { item: string; w: number; arm: number; m: number }[] = [
    { item: 'Basic empty weight', w: 1500, arm: 39.0, m: 58500 },
    { item: 'Pilot + front passenger', w: 340, arm: 37.0, m: 12580 },
    { item: 'Fuel (24 gal × 6 lb)', w: 144, arm: 48.0, m: 6912 },
  ]
  const totalW = rows.reduce((s, r) => s + r.w, 0)
  const totalM = rows.reduce((s, r) => s + r.m, 0)
  const cg = totalM / totalW
  const th = 'px-2 py-1 text-left text-[10px] font-semibold uppercase tracking-wide text-slate-500'
  const td = 'px-2 py-1.5 font-mono text-xs text-slate-800'
  return (
    <Frame title="Worked weight-and-balance sheet" color={color} caption={caption}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse overflow-hidden rounded-lg border border-slate-300 bg-white">
          <thead className="bg-slate-100">
            <tr>
              <th className={th}>Item</th>
              <th className={`${th} text-right`}>Weight (lb)</th>
              <th className={`${th} text-right`}>Arm (in)</th>
              <th className={`${th} text-right`}>Moment (lb·in)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((r) => (
              <tr key={r.item}>
                <td className={`${td} font-sans`}>{r.item}</td>
                <td className={`${td} text-right`}>{r.w.toLocaleString()}</td>
                <td className={`${td} text-right`}>{r.arm.toFixed(1)}</td>
                <td className={`${td} text-right`}>{r.m.toLocaleString()}</td>
              </tr>
            ))}
            <tr className="bg-slate-50 font-semibold">
              <td className={`${td} font-sans`}>Totals</td>
              <td className={`${td} text-right`}>{totalW.toLocaleString()}</td>
              <td className={`${td} text-right`}>—</td>
              <td className={`${td} text-right`}>{totalM.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="mt-3 rounded-lg border p-2.5 text-xs leading-relaxed"
        style={{ borderColor: `${color}66`, backgroundColor: `${color}0f` }}
      >
        <span className="font-semibold">CG = total moment ÷ total weight</span>
        <span className="mx-1.5 font-mono">
          = {totalM.toLocaleString()} ÷ {totalW.toLocaleString()} = {cg.toFixed(1)} in
        </span>
        <span className="text-slate-600">
          — compare against the POH envelope (here 35.0–41.5 in):{' '}
          <strong>{cg >= 35 && cg <= 41.5 ? 'within limits ✓' : 'OUT OF LIMITS ✗'}</strong>
        </span>
      </div>
    </Frame>
  )
}

// ---------------------------------------------------------------------------
// 5. Inspection decision tree — annual vs 100-hour vs AD compliance
// ---------------------------------------------------------------------------
export function InspectionDecisionTree({ color, caption }: VisualProps) {
  const q = 'rounded-lg border bg-white p-2 text-[11px] leading-snug shadow-sm'
  const a = 'rounded-lg border p-2 text-[11px] leading-snug'
  const arrow = 'mx-auto h-3 w-px bg-slate-400'
  const aStyle: CSSProperties = { borderColor: `${color}66`, backgroundColor: `${color}0f` }
  return (
    <Frame title="Which inspection applies?" color={color} caption={caption}>
      <div className="mx-auto max-w-xl">
        <div className={`${q} text-center font-semibold`}>Aircraft is due for inspection — decide what is required</div>
        <div className={arrow} />
        <div className="grid gap-2 sm:grid-cols-3">
          <div>
            <div className={q}>
              <span className="font-semibold">Q1.</span> Has 12 calendar months passed since the last annual?
            </div>
            <div className={arrow} />
            <div className={a} style={aStyle}>
              Yes → <strong>Annual inspection</strong> (Part 91.409(a)), signed by an IA
            </div>
          </div>
          <div>
            <div className={q}>
              <span className="font-semibold">Q2.</span> Flown for hire or used for flight instruction?
            </div>
            <div className={arrow} />
            <div className={a} style={aStyle}>
              Yes → <strong>100-hour inspection</strong> every 100 h TIS (91.409(b)), in addition to the annual
            </div>
          </div>
          <div>
            <div className={q}>
              <span className="font-semibold">Q3.</span> Any AD issued against airframe, engine, prop, or appliance?
            </div>
            <div className={arrow} />
            <div className={a} style={aStyle}>
              Yes → <strong>Comply with the AD</strong> on its own schedule — mandatory regardless of inspection cycle
            </div>
          </div>
        </div>
        <p className="mt-2 text-center text-[10px] text-slate-500">
          Alternative: an operator may use an approved progressive inspection program instead of annual / 100-hour.
        </p>
      </div>
    </Frame>
  )
}

/** Registry used by LessonEnriched to render purpose-built visuals by key. */
export const AVIATION_VISUALS: Record<string, ComponentType<VisualProps>> = {
  'logbook-entry': LogbookEntryVisual,
  'manual-layout': ManualLayoutVisual,
  'wiring-diagram': WiringDiagramVisual,
  'wb-sheet': WeightBalanceVisual,
  'inspection-tree': InspectionDecisionTree,
}
