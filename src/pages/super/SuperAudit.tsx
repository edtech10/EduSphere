// Super Admin — platform audit log.
import { useMemo, useState } from 'react'
import { Download, Search } from 'lucide-react'
import { useDB } from '@/lib/db'
import { formatDate, downloadCSV } from '@/lib/format'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'

export default function SuperAudit() {
  const db = useDB()
  const [actionSearch, setActionSearch] = useState('')
  const [orgFilter, setOrgFilter] = useState<string>('all')

  const orgName = (id: string | null) =>
    id ? db.organizations.find((o) => o.id === id)?.name ?? '—' : 'Platform'

  const filtered = useMemo(() => {
    const q = actionSearch.trim().toLowerCase()
    return [...db.auditLogs]
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .filter((log) => {
        if (orgFilter !== 'all' && log.orgId !== orgFilter) return false
        if (
          q &&
          !log.action.toLowerCase().includes(q) &&
          !log.detail.toLowerCase().includes(q) &&
          !log.actorName.toLowerCase().includes(q)
        )
          return false
        return true
      })
  }, [db.auditLogs, actionSearch, orgFilter])

  const exportCsv = () => {
    const rows: (string | number)[][] = [
      ['Timestamp', 'Actor', 'Action', 'Detail', 'Organization'],
      ...filtered.map((log) => [
        new Date(log.createdAt).toISOString(),
        log.actorName,
        log.action,
        log.detail,
        orgName(log.orgId),
      ]),
    ]
    downloadCSV('edusphere-audit-log.csv', rows)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Audit log</h1>
          <p className="text-sm text-muted-foreground">
            Every administrative action across the platform, newest first.
          </p>
        </div>
        <Button variant="outline" onClick={exportCsv}>
          <Download className="mr-2 h-4 w-4" /> Export CSV
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Activity</CardTitle>
          <CardDescription>{filtered.length} of {db.auditLogs.length} entries shown</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search action, actor, or detail…"
                value={actionSearch}
                onChange={(e) => setActionSearch(e.target.value)}
                className="w-72 pl-8"
              />
            </div>
            <Select value={orgFilter} onValueChange={setOrgFilter}>
              <SelectTrigger className="w-[220px]"><SelectValue placeholder="Organization" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All organizations</SelectItem>
                {db.organizations.map((o) => (
                  <SelectItem key={o.id} value={o.id}>{o.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Actor</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Detail</TableHead>
                <TableHead>Organization</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                    {formatDate(log.createdAt)}{' '}
                    {new Date(log.createdAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                  </TableCell>
                  <TableCell className="font-medium">{log.actorName}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-mono text-xs">{log.action}</Badge>
                  </TableCell>
                  <TableCell className="max-w-md text-sm text-muted-foreground">{log.detail}</TableCell>
                  <TableCell className="text-sm">{orgName(log.orgId)}</TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    No audit entries match these filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
