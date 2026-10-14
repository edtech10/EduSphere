// Generates procurement packet PDFs in public/reports/.
// Run: node scripts/generate-procurement-pdfs.mjs
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'reports')
mkdirSync(outDir, { recursive: true })

const navy = [15, 38, 71]
const slate = [71, 85, 105]
const lightBg = [241, 245, 249]
const M = 48

function newDoc(title, subtitle) {
  const doc = new jsPDF({ unit: 'pt', format: 'letter' })
  const W = doc.internal.pageSize.getWidth()
  doc.setFillColor(...navy)
  doc.rect(0, 0, W, 92, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(20)
  doc.text('EduSphere USA', M, 38)
  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  doc.text(title, M, 58)
  doc.setFontSize(9)
  doc.setTextColor(203, 213, 225)
  doc.text(subtitle, M, 76)
  return doc
}

function sectionTitle(doc, text, y) {
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(13)
  doc.text(text, M, y)
  return y + 10
}

function para(doc, text, y, opts = {}) {
  doc.setTextColor(...slate)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(opts.size ?? 10)
  const W = doc.internal.pageSize.getWidth()
  const lines = doc.splitTextToSize(text, W - M * 2)
  doc.text(lines, M, y + 10)
  return y + 10 + lines.length * (opts.size ?? 10) * 1.35
}

function bullets(doc, items, y) {
  doc.setTextColor(...slate)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  const W = doc.internal.pageSize.getWidth()
  for (const item of items) {
    const lines = doc.splitTextToSize(item, W - M * 2 - 14)
    doc.setFillColor(...navy)
    doc.circle(M + 4, y + 7, 1.6, 'F')
    doc.text(lines, M + 14, y + 10)
    y += 10 + lines.length * 12.5
  }
  return y
}

function footer(doc, note) {
  const H = doc.internal.pageSize.getHeight()
  const W = doc.internal.pageSize.getWidth()
  doc.setFontSize(8)
  doc.setTextColor(148, 163, 184)
  doc.text(note, M, H - 36)
  doc.text('EduSphere USA · Certification readiness systems for career-focused schools · edusphereusa.netlify.app', M, H - 24)
  doc.text(`Page 1 of 1`, W - M, H - 24, { align: 'right' })
}

const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
const validThrough = new Date(Date.now() + 90 * 86400000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

// ---------- 1. Sample quote ----------
{
  const doc = newDoc('Sample Quote — School License', 'Sample document for evaluation. All names, schools, and figures are fictional.')
  let y = sectionTitle(doc, 'Quote details', 120)
  autoTable(doc, {
    startY: y,
    margin: { left: M, right: M },
    theme: 'grid',
    styles: { fontSize: 9.5, cellPadding: 6, textColor: slate },
    headStyles: { fillColor: lightBg, textColor: navy, fontStyle: 'bold' },
    head: [['Quote no.', 'Date issued', 'Valid through', 'Prepared for', 'Billing terms']],
    body: [['Q-2026-0142', today, validThrough, 'Sample Career Academy (fictional)', 'Net 30 — invoice or PO']],
  })
  y = doc.lastAutoTable.finalY + 26
  y = sectionTitle(doc, 'License', y)
  autoTable(doc, {
    startY: y,
    margin: { left: M, right: M },
    theme: 'grid',
    styles: { fontSize: 9.5, cellPadding: 6, textColor: slate },
    headStyles: { fillColor: lightBg, textColor: navy, fontStyle: 'bold' },
    head: [['Item', 'Scope', 'Seats', 'Term', 'Price']],
    body: [
      ['Field License — Health Sciences', 'All Health Sciences readiness tracks (diagnostics, modules, question banks, timed finals, instructor & admin reporting)', '25 students', '12 months', '$37,500.00'],
    ],
    foot: [['', '', '', 'Annual total', '$37,500.00']],
    footStyles: { fillColor: lightBg, textColor: navy, fontStyle: 'bold' },
  })
  y = doc.lastAutoTable.finalY + 26
  y = sectionTitle(doc, 'Included at no additional cost', y)
  y = bullets(doc, [
    'Onboarding session for administrators and instructors (remote, 60 minutes).',
    'Procurement packet: W-9, vendor information, student data protection summary, accessibility statement.',
    'Seat reassignment between cohorts during the license term.',
    'Email support with one-business-day response.',
  ], y)
  y = para(doc, 'This sample quote illustrates EduSphere USA licensing format. Actual quotes are issued per school after a demo or invoice request. Pricing follows the published field license matrix.', y + 14)
  footer(doc, 'Sample quote — fictional school and figures. Not a binding offer.')
  doc.save(join(outDir, 'sample-quote.pdf'))
}

// ---------- 2. Sample invoice ----------
{
  const doc = newDoc('Sample Invoice — School License', 'Sample document for evaluation. All names, schools, and figures are fictional.')
  let y = sectionTitle(doc, 'Invoice details', 120)
  autoTable(doc, {
    startY: y,
    margin: { left: M, right: M },
    theme: 'grid',
    styles: { fontSize: 9.5, cellPadding: 6, textColor: slate },
    headStyles: { fillColor: lightBg, textColor: navy, fontStyle: 'bold' },
    head: [['Invoice no.', 'Date issued', 'Due date', 'Bill to', 'Reference']],
    body: [['INV-1042', today, validThrough, 'Sample Workforce School (fictional)', 'PO # pending']],
  })
  y = doc.lastAutoTable.finalY + 26
  y = sectionTitle(doc, 'Line items', y)
  autoTable(doc, {
    startY: y,
    margin: { left: M, right: M },
    theme: 'grid',
    styles: { fontSize: 9.5, cellPadding: 6, textColor: slate },
    headStyles: { fillColor: lightBg, textColor: navy, fontStyle: 'bold' },
    head: [['Description', 'Qty', 'Unit price', 'Amount']],
    body: [
      ['Program License — Health Sciences, 12-month term, up to 60 student seats', '1', '$69,500.00', '$69,500.00'],
      ['Implementation & onboarding (included)', '1', '$0.00', '$0.00'],
    ],
    foot: [['', '', 'Total due', '$69,500.00']],
    footStyles: { fillColor: lightBg, textColor: navy, fontStyle: 'bold' },
  })
  y = doc.lastAutoTable.finalY + 26
  y = sectionTitle(doc, 'Remittance', y)
  y = bullets(doc, [
    'ACH or check payable to EduSphere USA (sample remittance details provided on real invoices).',
    'Purchase order numbers are accepted and referenced on the invoice.',
    'License activation occurs on payment or approved invoice terms.',
  ], y)
  footer(doc, 'Sample invoice — fictional school and figures. Not a request for payment.')
  doc.save(join(outDir, 'sample-invoice.pdf'))
}

// ---------- 3. Implementation plan ----------
{
  const doc = newDoc('Implementation Plan — Sample', 'A typical 4-week school onboarding timeline. All names and schools are fictional.')
  let y = sectionTitle(doc, 'Overview', 120)
  y = para(doc, 'EduSphere USA deployments follow a four-week implementation plan from license activation to first diagnostic review. The plan below is the standard sequence; dates are agreed with each school during onboarding.', y)
  y += 16
  y = sectionTitle(doc, 'Week-by-week plan', y)
  autoTable(doc, {
    startY: y,
    margin: { left: M, right: M },
    theme: 'grid',
    styles: { fontSize: 9.5, cellPadding: 6, textColor: slate },
    headStyles: { fillColor: lightBg, textColor: navy, fontStyle: 'bold' },
    head: [['Week', 'Milestone', 'Owner', 'Outcome']],
    body: [
      ['Week 1', 'License activation & admin setup', 'EduSphere USA + school admin', 'Organization created; admin account active; tracks selected'],
      ['Week 1–2', 'Instructor onboarding (60-min remote session)', 'EduSphere USA', 'Instructors trained on assignment, monitoring, and reporting'],
      ['Week 2', 'Student accounts & seat allocation', 'School admin', 'Students invited; seats allocated from license'],
      ['Week 2–3', 'Baseline diagnostics', 'Students', 'Every enrolled student completes the track diagnostic'],
      ['Week 3–4', 'Study plans & guided practice begin', 'Students + instructors', 'Personalized module sequences underway'],
      ['Week 4', 'First readiness review', 'Instructor + EduSphere USA', 'Cohort report reviewed; at-risk students flagged with remediation plans'],
    ],
  })
  y = doc.lastAutoTable.finalY + 26
  y = sectionTitle(doc, 'Ongoing rhythm', y)
  y = bullets(doc, [
    'Weekly: instructor dashboard review of at-risk flags and practice volume.',
    'Monthly: readiness report export for program files.',
    'Quarterly (Program licenses and above): structured readiness review with our team.',
    'End of course: timed final practice tests and cohort readiness summary.',
  ], y)
  footer(doc, 'Sample implementation plan — timelines adapt to each school calendar.')
  doc.save(join(outDir, 'sample-implementation-plan.pdf'))
}

// ---------- 4. Cohort readiness report ----------
{
  const doc = newDoc('Cohort Readiness Report — Sample', 'Sample document for evaluation. All names, scores, and schools are fictional sample data.')
  let y = sectionTitle(doc, 'Cohort summary', 120)
  autoTable(doc, {
    startY: y,
    margin: { left: M, right: M },
    theme: 'grid',
    styles: { fontSize: 9.5, cellPadding: 6, textColor: slate },
    headStyles: { fillColor: lightBg, textColor: navy, fontStyle: 'bold' },
    head: [['Cohort', 'Track', 'Students', 'Avg readiness', 'Ready or near-ready', 'At risk']],
    body: [
      ['Fall Cohort A', 'Medical Assistant Readiness', '24', '74%', '15 (63%)', '4'],
      ['Fall Cohort B', 'IT Support Specialist Readiness', '21', '69%', '11 (52%)', '5'],
    ],
  })
  y = doc.lastAutoTable.finalY + 26
  y = sectionTitle(doc, 'Domain-level readiness — Fall Cohort A', y)
  autoTable(doc, {
    startY: y,
    margin: { left: M, right: M },
    theme: 'grid',
    styles: { fontSize: 9.5, cellPadding: 6, textColor: slate },
    headStyles: { fillColor: lightBg, textColor: navy, fontStyle: 'bold' },
    head: [['Competency domain', 'Avg score', 'Trend vs. baseline', 'Students below 50%']],
    body: [
      ['Patient Care Fundamentals', '81%', '+22 pts', '1'],
      ['Vital Signs', '78%', '+19 pts', '2'],
      ['Infection Control', '84%', '+24 pts', '0'],
      ['Pharmacology Basics', '63%', '+14 pts', '5'],
      ['Medical Terminology', '77%', '+18 pts', '2'],
      ['EKG Basics', '69%', '+16 pts', '3'],
      ['Legal and Ethical Responsibilities', '74%', '+17 pts', '2'],
      ['Administrative Procedures', '66%', '+15 pts', '4'],
    ],
  })
  y = doc.lastAutoTable.finalY + 26
  y = sectionTitle(doc, 'Recommended actions', y)
  y = bullets(doc, [
    'Pharmacology Basics is the weakest domain (63%): schedule a remediation session and reassign the module knowledge checks.',
    'Five students remain below 50% in pharmacology — targeted practice plans were auto-generated for each.',
    'Administrative Procedures (66%) improves fastest with the front-office scenario lessons in Module 8.',
    'Four at-risk students have not logged practice in 7+ days; instructor follow-up recommended.',
  ], y)
  footer(doc, 'Sample cohort report — fictional data for evaluation of reporting format.')
  doc.save(join(outDir, 'sample-cohort-readiness-report.pdf'))
}

// ---------- 5. Vendor packet checklist ----------
{
  const doc = newDoc('Vendor Packet Checklist', 'Documents schools typically need for procurement — all available from EduSphere USA.')
  let y = sectionTitle(doc, 'Standard procurement documents', 120)
  y = bullets(doc, [
    'Sample quote and sample invoice (this packet) — format reference for your purchasing office.',
    'W-9 and vendor registration information — provided with every quote.',
    'Student Data Protection summary — plain-language overview of data collection, storage, and retention (also at /student-data-protection).',
    'Accessibility statement — WCAG 2.1 AA conformance approach for student-facing software (also at /accessibility).',
    'Security overview — role-based access, audit logging, and payment handling (also at /privacy).',
    'Sample student readiness report and sample cohort readiness report — reporting format evidence.',
    'Implementation plan — standard 4-week onboarding timeline.',
    'Credential alignment notes — per-track competency mapping published on each field page.',
  ], y + 4)
  y += 16
  y = sectionTitle(doc, 'How purchasing works', y)
  autoTable(doc, {
    startY: y,
    margin: { left: M, right: M },
    theme: 'grid',
    styles: { fontSize: 9.5, cellPadding: 6, textColor: slate },
    headStyles: { fillColor: lightBg, textColor: navy, fontStyle: 'bold' },
    head: [['Step', 'What happens']],
    body: [
      ['1. Demo or invoice request', 'School requests a demo or submits an invoice / PO request from checkout'],
      ['2. Quote issued', 'Formal quote with W-9 and vendor packet, valid 90 days'],
      ['3. PO or payment', 'School issues a purchase order or pays the invoice'],
      ['4. Activation', 'Organization activated; implementation week 1 begins'],
    ],
  })
  y = doc.lastAutoTable.finalY + 26
  y = para(doc, 'Questions from purchasing offices: licensing@edusphereusa.com (sample address). We support district vendor registration, grant-funded purchases, and multi-year quotes on request.', y)
  footer(doc, 'Vendor packet checklist — all items available during the quote process.')
  doc.save(join(outDir, 'vendor-packet-checklist.pdf'))
}

console.log('Generated: sample-quote.pdf, sample-invoice.pdf, sample-implementation-plan.pdf, sample-cohort-readiness-report.pdf, vendor-packet-checklist.pdf')
