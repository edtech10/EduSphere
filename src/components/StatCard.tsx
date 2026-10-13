import type { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function StatCard({
  label,
  value,
  hint,
  icon,
  tone = 'default',
}: {
  label: string
  value: ReactNode
  hint?: string
  icon?: ReactNode
  tone?: 'default' | 'danger' | 'warning' | 'success'
}) {
  const tones = {
    default: 'text-foreground',
    danger: 'text-red-600',
    warning: 'text-amber-600',
    success: 'text-emerald-600',
  }
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
            <p className={cn('mt-1 text-2xl font-semibold tabular-nums', tones[tone])}>{value}</p>
            {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
          </div>
          {icon && <div className="shrink-0 rounded-md bg-accent p-2 text-accent-foreground">{icon}</div>}
        </div>
      </CardContent>
    </Card>
  )
}
