// Generates public/reports/sample-student-readiness-report.pdf
// Run: node scripts/generate-sample-report.mjs
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'reports', 'sample-student-readiness-report.pdf')
mkdirSync(dirname(out), { recursive: true })

const doc = new jsPDF({ unit: 'pt', format: 'letter' })
const W = doc.internal.pageSize.getWidth()
const M = 48 // margin

const navy = [15, 38, 71]
const slate = [71, 85, 105]
const green = [5, 122, 85]
const lightBg = [241, 245, 249]

// ---------- Header band ----------
doc.setFillColor(...navy)
doc.rect(0, 0, W, 92, 'F')
doc.setTextColor(255, 255, 255)
doc.setFont('helvetica', 'bold')
doc.setFontSize(20)
doc.text('EduSphere USA', M, 38)
doc.setFontSize(12)
doc.setFont('helvetica', 'normal')
doc.text('Student Readiness Report — Sample', M, 58)
doc.setFontSize(9)
doc.setTextColor(203, 213, 225)
doc.text('Generated for evaluation purposes. All names, scores, and schools on this page are fictional sample data.', M, 76)

// ---------- Student summary ----------
let y = 120
doc.setTextColor(...navy)
doc.setFont('helvetica', 'bold')
doc.setFontSize(13)
doc.text('Student summary', M, y)

autoTable(doc, {
  startY: y + 10,
  margin: { left: M, right: M },
  theme: 'grid',
  styles: { fontSize: 9.5, cellPadding: 6, textColor: slate },
  headStyles: { fillColor: lightBg, textColor: navy, fontStyle: 'bold' },
  head: [['Student', 'Program track', 'Cohort', 'Report date', 'Overall readiness', 'Status']],
  body: [[
    'Sample Student (S-1042)',
    'Medical Assistant (Clinical & Administrative)',
    'Spring Cohort — Sample High School',
    new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    '74 / 100',
    'On Track',
  ]],
})

// ---------- Score components ----------
y = doc.lastAutoTable.finalY + 26
doc.setTextColor(...navy)
doc.setFont('helvetica', 'bold')
doc.setFontSize(13)
doc.text('Readiness score components', M, y)
doc.setFont('helvetica', 'normal')
doc.setFontSize(9)
doc.setTextColor(...slate)
doc.text('Weights follow the standard EduSphere readiness model; schools can adjust them with their implementation specialist.', M, y + 14)

autoTable(doc, {
  startY: y + 24,
  margin: { left: M, right: M },
  theme: 'striped',
  styles: { fontSize: 9.5, cellPadding: 6, textColor: slate },
  headStyles: { fillColor: navy, textColor: [255, 255, 255] },
  head: [['Component', 'Weight', 'Student result', 'Weighted contribution']],
  body: [
    ['Practice question accuracy', '40%', '78% correct across 412 items', '31.2'],
    ['Diagnostic improvement', '25%', '52% → 81% (+29 pts)', '20.3'],
    ['Module completion', '20%', '14 of 16 modules complete', '17.5'],
    ['Final practice exam', '15%', '71% on timed full-length exam', '10.7'],
    [{ content: 'Overall readiness score', styles: { fontStyle: 'bold', textColor: navy } }, '100%', '', { content: '74 / 100', styles: { fontStyle: 'bold', textColor: green } }],
  ],
})

// ---------- Topic mastery ----------
y = doc.lastAutoTable.finalY + 26
doc.setTextColor(...navy)
doc.setFont('helvetica', 'bold')
doc.setFontSize(13)
doc.text('Competency domain mastery', M, y)

autoTable(doc, {
  startY: y + 10,
  margin: { left: M, right: M },
  theme: 'striped',
  styles: { fontSize: 9.5, cellPadding: 6, textColor: slate },
  headStyles: { fillColor: navy, textColor: [255, 255, 255] },
  head: [['Competency domain', 'Mastery', 'Trend', 'Flag']],
  body: [
    ['Clinical patient care & vitals', '86%', 'Improving', '—'],
    ['Medical terminology & anatomy', '82%', 'Stable', '—'],
    ['Administrative & front-office procedures', '79%', 'Improving', '—'],
    ['Pharmacology basics & medication safety', '71%', 'Improving', 'Watch'],
    ['Infection control & safety compliance', '68%', 'Flat', 'Watch'],
    ['EKG, lab & diagnostic procedures', '61%', 'Declining', 'Priority'],
  ],
})

// ---------- Recommended remediation ----------
y = doc.lastAutoTable.finalY + 26
doc.setTextColor(...navy)
doc.setFont('helvetica', 'bold')
doc.setFontSize(13)
doc.text('Recommended next steps', M, y)

autoTable(doc, {
  startY: y + 10,
  margin: { left: M, right: M },
  theme: 'plain',
  styles: { fontSize: 9.5, cellPadding: 5, textColor: slate },
  body: [
    ['1.', 'Assign remediation module "EKG & Diagnostic Procedures — Lab Workflow" (est. 45 min) and its 25-item practice set.'],
    ['2.', 'Schedule one instructor check-in this week on infection-control scenarios; re-take the domain quiz after review.'],
    ['3.', 'Attempt the second timed full-length practice exam after both items above are complete.'],
  ],
})

// ---------- Footer ----------
const H = doc.internal.pageSize.getHeight()
doc.setDrawColor(226, 232, 240)
doc.line(M, H - 78, W - M, H - 78)
doc.setFontSize(8)
doc.setTextColor(...slate)
doc.text(
  'Sample report for evaluation. EduSphere USA provides readiness analytics and preparation content; it does not administer credentials\n' +
  'and does not guarantee exam outcomes. Credential names and exams are the property of their respective organizations.',
  M, H - 62,
)
doc.text('edusphereusa.netlify.app · Sample data — not a real student record', M, H - 40)

doc.save(out)
console.log('Wrote', out)
