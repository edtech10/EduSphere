import { Badge } from '@/components/ui/badge'
import { READINESS_STATUS_LABELS, type ReadinessStatus, type SubscriptionStatus } from '@/lib/types'
import { cn } from '@/lib/utils'

const readinessStyles: Record<ReadinessStatus, string> = {
  not_started: 'bg-slate-100 text-slate-600 border-slate-200',
  needs_support: 'bg-red-50 text-red-700 border-red-200',
  building_readiness: 'bg-amber-50 text-amber-700 border-amber-200',
  near_ready: 'bg-blue-50 text-blue-700 border-blue-200',
  ready_for_final_review: 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

export function ReadinessBadge({ status, className }: { status: ReadinessStatus; className?: string }) {
  return (
    <Badge variant="outline" className={cn('font-medium', readinessStyles[status], className)}>
      {READINESS_STATUS_LABELS[status]}
    </Badge>
  )
}

const subscriptionStyles: Record<SubscriptionStatus, string> = {
  active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  trialing: 'bg-blue-50 text-blue-700 border-blue-200',
  past_due: 'bg-red-50 text-red-700 border-red-200',
  canceled: 'bg-slate-100 text-slate-600 border-slate-200',
  incomplete: 'bg-amber-50 text-amber-700 border-amber-200',
}

const subscriptionLabels: Record<SubscriptionStatus, string> = {
  active: 'Active',
  trialing: 'Trialing',
  past_due: 'Past due',
  canceled: 'Canceled',
  incomplete: 'Incomplete',
}

export function SubscriptionBadge({ status, className }: { status: SubscriptionStatus; className?: string }) {
  return (
    <Badge variant="outline" className={cn('font-medium', subscriptionStyles[status], className)}>
      {subscriptionLabels[status]}
    </Badge>
  )
}

export function PaymentStatusBadge({ status }: { status: 'succeeded' | 'failed' | 'pending' | 'refunded' }) {
  const styles: Record<string, string> = {
    succeeded: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    failed: 'bg-red-50 text-red-700 border-red-200',
    pending: 'bg-amber-50 text-amber-700 border-amber-200',
    refunded: 'bg-slate-100 text-slate-600 border-slate-200',
  }
  return (
    <Badge variant="outline" className={cn('font-medium capitalize', styles[status])}>
      {status}
    </Badge>
  )
}
