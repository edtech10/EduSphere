// Headless smoke test: render the built SPA in jsdom for each route and report
// render success + console/page errors.
import { JSDOM, VirtualConsole } from 'jsdom'
import fs from 'node:fs'
import path from 'node:path'

const bundle = fs.readFileSync(path.resolve('scripts/smoke-bundle.js'), 'utf8')
const html = `<!doctype html><html><body><div id="root"></div><script>${bundle.replace(/<\/script>/g, '<\\/script>')}</script></body></html>`

const routes = [
  { path: '/', session: null },
  { path: '/products', session: null },
  { path: '/products/healthcare-readiness', session: null },
  { path: '/catalog', session: null },
  { path: '/fields/health-sciences', session: null },
  { path: '/fields/information-technology', session: null },
  { path: '/fields/cybersecurity', session: null },
  { path: '/fields/business', session: null },
  { path: '/fields/finance', session: null },
  { path: '/fields/marketing', session: null },
  { path: '/fields/aviation-uas', session: null },
  { path: '/fields/engineering-robotics-safety', session: null },
  { path: '/fields/automotive', session: null },
  { path: '/app/student/track/track_autosvc', session: 'stu_demo' },
  { path: '/app/student/track/track_cla/module/mod_cla_02', session: 'stu_demo' },
  { path: '/app/super/content/track_cla', session: 'user_super' },
  { path: '/app/super/content/track_p107', session: 'user_super' },
  { path: '/app/super/preview/track_p107', session: 'user_super' },
  { path: '/app/super/preview/track_cla?notes=1', session: 'user_super' },
  { path: '/pricing', session: null },
  { path: '/for-schools', session: null },
  { path: '/for-instructors', session: null },
  { path: '/demo', session: null },
  { path: '/login', session: null },
  { path: '/privacy', session: null },
  { path: '/terms', session: null },
  { path: '/accessibility', session: null },
  { path: '/student-data-protection', session: null },
  { path: '/app/student', session: 'stu_demo' },
  { path: '/app/student/tracks', session: 'stu_demo' },
  { path: '/app/student/track/track_ma', session: 'stu_demo' },
  { path: '/app/student/track/track_ma/module/mod_ma_01', session: 'stu_demo' },
  { path: '/app/student/track/track_ma/assessment/asm_ma_diag', session: 'stu_demo' },
  { path: '/app/student/track/track_p107', session: 'stu_demo' },
  { path: '/app/student/track/track_itsupport/module/mod_itsupport_01', session: 'stu_demo' },
  { path: '/app/student/track/track_robotics/assessment/asm_robotics_final', session: 'stu_demo' },
  { path: '/app/student/track/track_cyberfound/module/mod_cyberfound_05', session: 'stu_demo' },
  { path: '/app/student/report', session: 'stu_demo' },
  { path: '/app/instructor', session: 'user_nv_inst1' },
  { path: '/app/instructor/students', session: 'user_nv_inst1' },
  { path: '/app/instructor/student/stu_nv_02', session: 'user_nv_inst1' },
  { path: '/app/instructor/report', session: 'user_nv_inst1' },
  { path: '/app/admin', session: 'user_nv_admin' },
  { path: '/app/admin/users', session: 'user_nv_admin' },
  { path: '/app/admin/reports', session: 'user_nv_admin' },
  { path: '/app/admin/billing', session: 'user_nv_admin' },
  { path: '/app/admin/settings', session: 'user_nv_admin' },
  { path: '/checkout?plan=field', session: 'user_nv_admin' },
  { path: '/checkout?plan=program', session: 'user_nv_admin' },
  { path: '/app/super', session: 'user_super' },
  { path: '/app/super/organizations', session: 'user_super' },
  { path: '/app/super/subscriptions', session: 'user_super' },
  { path: '/app/super/invoice-requests', session: 'user_super' },
  { path: '/app/super/users', session: 'user_super' },
  { path: '/app/super/content', session: 'user_super' },
  { path: '/app/super/audit', session: 'user_super' },
  { path: '/app/super/settings', session: 'user_super' },
]

let failures = 0

for (const route of routes) {
  const errors = []
  const vc = new VirtualConsole()
  vc.on('error', (msg) => errors.push(String(msg)))
  vc.on('jsdomError', (e) => {
    const m = String(e?.message ?? e)
    if (!/Could not load|Not implemented/i.test(m)) errors.push(m)
  })

  const dom = new JSDOM(html, {
    url: 'http://localhost' + route.path,
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
    virtualConsole: vc,
    beforeParse(window) {
      window.matchMedia = window.matchMedia || (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }))
      window.scrollTo = window.scrollTo || (() => {})
      window.ResizeObserver = window.ResizeObserver || class { observe() {} unobserve() {} disconnect() {} }
      if (route.session) window.localStorage.setItem('edusphere_session_user', route.session)
    },
  })

  await new Promise((r) => setTimeout(r, 2500))

  const root = dom.window.document.getElementById('root')
  const childCount = root ? root.children.length : 0
  const textLen = root ? (root.textContent || '').trim().length : 0
  const reactErrors = errors.filter((e) => !/favicon/i.test(e))
  const ok = childCount > 0 && textLen > 50 && reactErrors.length === 0
  if (!ok) failures++
  console.log(`${ok ? 'PASS' : 'FAIL'} ${route.path}  children=${childCount} textLen=${textLen}`)
  if (reactErrors.length > 0) console.log('   errors:', reactErrors.slice(0, 3).join(' | ').slice(0, 500))
  dom.window.close()
}

console.log(failures === 0 ? '\nALL ROUTES PASS' : `\n${failures} ROUTE(S) FAILED`)
process.exit(failures === 0 ? 0 : 1)
