// Super Admin — platform settings: readiness scoring weights, demo controls, Stripe status.
import { useState } from 'react'
import { RotateCcw, Save, CreditCard } from 'lucide-react'
import { useDB, updateDB, logAction, resetDB } from '@/lib/db'
import { useAuth } from '@/lib/auth'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import type { ScoringWeights } from '@/lib/types'

const WEIGHT_META: { key: keyof ScoringWeights; label: string }[] = [
  { key: 'practiceAccuracy', label: 'Practice accuracy' },
  { key: 'diagnosticImprovement', label: 'Diagnostic improvement' },
  { key: 'moduleCompletion', label: 'Module completion' },
  { key: 'finalPractice', label: 'Final practice' },
]

export default function SuperSettings() {
  const db = useDB()
  const { user } = useAuth()
  const actor = { id: user?.id ?? 'user_super', name: user?.name ?? 'Platform Admin' }

  const [weights, setWeights] = useState<Record<keyof ScoringWeights, number>>({
    practiceAccuracy: Math.round(db.settings.scoringWeights.practiceAccuracy * 100),
    diagnosticImprovement: Math.round(db.settings.scoringWeights.diagnosticImprovement * 100),
    moduleCompletion: Math.round(db.settings.scoringWeights.moduleCompletion * 100),
    finalPractice: Math.round(db.settings.scoringWeights.finalPractice * 100),
  })
  const [saved, setSaved] = useState(false)

  const total = WEIGHT_META.reduce((s, w) => s + weights[w.key], 0)
  const valid = total === 100

  const saveWeights = () => {
    if (!valid) return
    updateDB((d) => {
      d.settings.scoringWeights = {
        practiceAccuracy: weights.practiceAccuracy / 100,
        diagnosticImprovement: weights.diagnosticImprovement / 100,
        moduleCompletion: weights.moduleCompletion / 100,
        finalPractice: weights.finalPractice / 100,
      }
    })
    logAction(
      actor.id, actor.name, 'settings.scoring_updated',
      `Readiness weights updated: practice accuracy ${weights.practiceAccuracy}%, diagnostic improvement ${weights.diagnosticImprovement}%, module completion ${weights.moduleCompletion}%, final practice ${weights.finalPractice}%`,
      null,
    )
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Platform settings</h1>
        <p className="text-sm text-muted-foreground">
          Readiness scoring configuration and demo environment controls.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Scoring weights */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Readiness scoring weights</CardTitle>
            <CardDescription>
              How each component contributes to the certification readiness score. Weights must
              total 100% to save.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {WEIGHT_META.map(({ key, label }) => (
              <div key={key} className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>{label}</Label>
                  <div className="flex items-center gap-2">
                    <Slider
                      className="w-40"
                      min={0}
                      max={100}
                      step={5}
                      value={[weights[key]]}
                      onValueChange={([v]) => setWeights({ ...weights, [key]: v })}
                    />
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      className="h-8 w-20 text-right tabular-nums"
                      value={weights[key]}
                      onChange={(e) =>
                        setWeights({
                          ...weights,
                          [key]: Math.max(0, Math.min(100, Number(e.target.value) || 0)),
                        })
                      }
                    />
                    <span className="text-sm text-muted-foreground">%</span>
                  </div>
                </div>
              </div>
            ))}

            <Separator />

            <div className="flex items-center justify-between">
              <p className="text-sm">
                Total:{' '}
                <span className={`font-semibold tabular-nums ${valid ? 'text-emerald-600' : 'text-red-600'}`}>
                  {total}%
                </span>
                {!valid && (
                  <span className="ml-2 text-xs text-red-600">Must equal 100% to save</span>
                )}
              </p>
              <div className="flex items-center gap-2">
                {saved && <span className="text-xs text-emerald-600">Saved</span>}
                <Button onClick={saveWeights} disabled={!valid}>
                  <Save className="mr-2 h-4 w-4" /> Save weights
                </Button>
              </div>
            </div>

            <div className="rounded-md bg-slate-50 p-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Formula:</span> Readiness ={' '}
              {weights.practiceAccuracy}% practice accuracy + {weights.diagnosticImprovement}%
              diagnostic improvement + {weights.moduleCompletion}% module completion +{' '}
              {weights.finalPractice}% final practice
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {/* Thresholds */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Readiness status thresholds</CardTitle>
              <CardDescription>Fixed bands applied to the computed readiness score</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Needs support</Badge>
                  <span className="tabular-nums text-muted-foreground">&lt; 40</span>
                </li>
                <li className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Building readiness</Badge>
                  <span className="tabular-nums text-muted-foreground">40–59</span>
                </li>
                <li className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Near ready</Badge>
                  <span className="tabular-nums text-muted-foreground">60–79</span>
                </li>
                <li className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">Ready for final review</Badge>
                  <span className="tabular-nums text-muted-foreground">≥ 80</span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Readiness scores indicate preparation progress for credential-aligned coursework;
                they are not a guarantee of certification exam outcomes.
              </p>
            </CardContent>
          </Card>

          {/* Stripe status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <CreditCard className="h-4 w-4" /> Stripe integration
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  Test mode — simulated locally
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p className="mb-2">This demo simulates the full billing flow locally:</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Checkout session creation and completion</li>
                <li>Subscription creation, updates, and cancellation</li>
                <li>Customer portal actions (plan and seat changes)</li>
                <li>Webhook-driven status transitions</li>
                <li>Failed payment handling and past-due states</li>
              </ul>
            </CardContent>
          </Card>

          {/* Demo controls */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Demo controls</CardTitle>
              <CardDescription>Reset the local demo database to its seeded state</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">
                    <RotateCcw className="mr-2 h-4 w-4" /> Reset all demo data
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Reset all demo data?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This restores the seeded organizations, users, subscriptions, payments, and
                      content. All changes made in this demo — including new organizations, users,
                      questions, and settings — will be discarded. Refresh the page afterwards to
                      see the restored state everywhere.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => resetDB()}>Reset demo data</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
