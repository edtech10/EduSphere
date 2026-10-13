import { GraduationCap } from 'lucide-react'
import { Link } from 'react-router'
import { cn } from '@/lib/utils'

export function Logo({ dark = false, to = '/' }: { dark?: boolean; to?: string }) {
  return (
    <Link to={to} className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <GraduationCap className="h-5 w-5" />
      </span>
      <span className={cn('text-lg font-semibold tracking-tight', dark ? 'text-white' : 'text-foreground')}>
        EduSphere <span className="text-primary">USA</span>
      </span>
    </Link>
  )
}
