import { Link } from 'react-router'
import { BookOpen, ArrowRight, Layers, Info } from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { useDB } from '@/lib/db'
import { computeReadiness } from '@/lib/scoring'
import { pct } from '@/lib/format'
import { ReadinessBadge } from '@/components/StatusBadge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export default function MyTracks() {
  const { user } = useAuth()
  const db = useDB()
  if (!user) return null

  const enrollments = db.enrollments.filter((e) => e.studentId === user.id)
  const rows = enrollments
    .map((enrollment) => {
      const track = db.tracks.find((t) => t.id === enrollment.trackId)
      if (!track) return null
      const progress = db.progress.find((p) => p.studentId === user.id && p.trackId === track.id)
      const readiness = computeReadiness(db, user.id, track.id)
      const moduleCount = db.modules.filter((m) => m.trackId === track.id).length
      return { enrollment, track, progress, readiness, moduleCount }
    })
    .filter((r): r is NonNullable<typeof r> => r !== null)

  const bundle = db.tracks.find((t) => t.isBundle)
  const bundleTrackCount = bundle
    ? rows.filter((r) => bundle.includedTrackIds?.includes(r.track.id)).length
    : 0

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">My Tracks</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Your assigned credential-aligned readiness tracks.
        </p>
      </div>

      {rows.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-2 p-10 text-center">
            <BookOpen className="h-8 w-8 text-muted-foreground" />
            <p className="font-medium">No tracks assigned yet</p>
            <p className="text-sm text-muted-foreground">
              Contact your instructor to get enrolled in a certification readiness track.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map(({ enrollment, track, readiness, moduleCount }) => (
            <Card key={track.id} className="flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base leading-snug">
                    {track.name}
                    {track.comingSoon && (
                      <Badge variant="secondary" className="ml-2 align-middle text-[10px]">Pilot program</Badge>
                    )}
                  </CardTitle>
                  <span
                    className="mt-1 h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: track.color }}
                  />
                </div>
                <CardDescription className="line-clamp-2">{track.credentialFocus}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-3">
                <div className="flex items-center gap-2">
                  <ReadinessBadge status={readiness.status} />
                  <Badge variant={enrollment.status === 'completed' ? 'secondary' : 'outline'} className="capitalize">
                    {enrollment.status}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Readiness score</span>
                    <span className="tabular-nums">{pct(readiness.score)}</span>
                  </div>
                  <Progress value={readiness.score} />
                </div>
                <p className="text-xs text-muted-foreground">
                  {moduleCount} modules · ~{track.estimatedWeeks} weeks
                </p>
                <div className="mt-auto pt-1">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to={`/app/student/track/${track.id}`}>
                      Open track <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {bundle && bundleTrackCount > 1 && (
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="flex items-start gap-3 p-4">
            <Layers className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
            <div className="min-w-0">
              <p className="text-sm font-medium text-blue-900">{bundle.name}</p>
              <p className="mt-0.5 text-sm text-blue-800/80">
                {bundle.description} You are enrolled in {bundleTrackCount} of{' '}
                {bundle.includedTrackIds?.length ?? 0} included tracks — progress in each track counts toward your
                overall certification readiness pathway.
              </p>
              <p className="mt-2 flex items-center gap-1 text-xs text-blue-700">
                <Info className="h-3.5 w-3.5" /> Credential-aligned content; completion supports readiness and does
                not guarantee exam outcomes.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
