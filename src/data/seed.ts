// Seed database — demo organizations, users, licenses, payments and progress.
// All names are fictional demo data. No real schools or students.
import type { Database } from '@/lib/types'
import { TRACKS, MODULES, LESSONS, QUESTIONS, ASSESSMENTS } from './content-all'
import { DEFAULT_WEIGHTS } from '@/lib/scoring'

const now = new Date()
const daysAgo = (n: number) => new Date(now.getTime() - n * 86400000).toISOString()
const daysAhead = (n: number) => new Date(now.getTime() + n * 86400000).toISOString()

export function buildSeedDatabase(): Database {
  const organizations: Database['organizations'] = [
    {
      id: 'org_northview',
      name: 'Northview Career Institute',
      type: 'career_academy',
      contactName: 'Dana Whitfield',
      contactEmail: 'admin@northview.edu',
      contactPhone: '(555) 214-8801',
      createdAt: daysAgo(210),
      status: 'active',
    },
    {
      id: 'org_harbor',
      name: 'Harbor Allied Health Academy',
      type: 'private_training',
      contactName: 'Marcus Bell',
      contactEmail: 'admin@harboracademy.org',
      contactPhone: '(555) 733-0924',
      createdAt: daysAgo(120),
      status: 'active',
    },
    {
      id: 'org_summit',
      name: 'Summit Workforce School',
      type: 'workforce_program',
      contactName: 'Priya Raman',
      contactEmail: 'admin@summitworkforce.org',
      contactPhone: '(555) 401-7762',
      createdAt: daysAgo(64),
      status: 'active',
    },
  ]

  const users: Database['users'] = [
    { id: 'user_super', orgId: null, name: 'Platform Admin', email: 'admin@edusphereusa.com', password: 'demo123', role: 'super_admin', title: 'EduSphere USA Operations', createdAt: daysAgo(400), lastActiveAt: daysAgo(0) },
    // Northview
    { id: 'user_nv_admin', orgId: 'org_northview', name: 'Dana Whitfield', email: 'admin@northview.edu', password: 'demo123', role: 'school_admin', title: 'Program Director', createdAt: daysAgo(210), lastActiveAt: daysAgo(1) },
    { id: 'user_nv_inst1', orgId: 'org_northview', name: 'Elena Ruiz', email: 'instructor@northview.edu', password: 'demo123', role: 'instructor', title: 'Allied Health Instructor', createdAt: daysAgo(205), lastActiveAt: daysAgo(0) },
    { id: 'user_nv_inst2', orgId: 'org_northview', name: 'James Carter', email: 'j.carter@northview.edu', password: 'demo123', role: 'instructor', title: 'Clinical Skills Instructor', createdAt: daysAgo(198), lastActiveAt: daysAgo(2) },
    { id: 'user_nv_inst3', orgId: 'org_northview', name: 'Daniel Osei', email: 'd.osei@northview.edu', password: 'demo123', role: 'instructor', title: 'IT & Cybersecurity Instructor', createdAt: daysAgo(190), lastActiveAt: daysAgo(0) },
    { id: 'user_nv_inst4', orgId: 'org_northview', name: 'Grace Whitman', email: 'g.whitman@northview.edu', password: 'demo123', role: 'instructor', title: 'Business & Finance Instructor', createdAt: daysAgo(185), lastActiveAt: daysAgo(1) },
    // Harbor
    { id: 'user_hb_admin', orgId: 'org_harbor', name: 'Marcus Bell', email: 'admin@harboracademy.org', password: 'demo123', role: 'school_admin', title: 'Academy Director', createdAt: daysAgo(120), lastActiveAt: daysAgo(3) },
    { id: 'user_hb_inst1', orgId: 'org_harbor', name: 'Sofia Nguyen', email: 'instructor@harboracademy.org', password: 'demo123', role: 'instructor', title: 'Phlebotomy Instructor', createdAt: daysAgo(118), lastActiveAt: daysAgo(1) },
    { id: 'user_hb_inst2', orgId: 'org_harbor', name: 'Luis Ortega', email: 'l.ortega@harboracademy.org', password: 'demo123', role: 'instructor', title: 'Health Sciences Instructor', createdAt: daysAgo(110), lastActiveAt: daysAgo(2) },
    // Summit
    { id: 'user_sm_admin', orgId: 'org_summit', name: 'Priya Raman', email: 'admin@summitworkforce.org', password: 'demo123', role: 'school_admin', title: 'Workforce Programs Lead', createdAt: daysAgo(64), lastActiveAt: daysAgo(0) },
    { id: 'user_sm_inst1', orgId: 'org_summit', name: 'Tom Alvarez', email: 'instructor@summitworkforce.org', password: 'demo123', role: 'instructor', title: 'Healthcare Careers Instructor', createdAt: daysAgo(60), lastActiveAt: daysAgo(1) },
    { id: 'user_sm_inst2', orgId: 'org_summit', name: 'Rachel Kim', email: 'r.kim@summitworkforce.org', password: 'demo123', role: 'instructor', title: 'Aviation & Engineering Instructor', createdAt: daysAgo(55), lastActiveAt: daysAgo(0) },
  ]

  // Students — fictional demo accounts
  const studentSeeds: { id: string; orgId: string; name: string; email: string }[] = [
    { id: 'stu_demo', orgId: 'org_northview', name: 'Alex Morgan', email: 'student@demo.com' },
    { id: 'stu_nv_02', orgId: 'org_northview', name: 'Jordan Hayes', email: 'j.hayes@student.northview.edu' },
    { id: 'stu_nv_03', orgId: 'org_northview', name: 'Casey Bennett', email: 'c.bennett@student.northview.edu' },
    { id: 'stu_nv_04', orgId: 'org_northview', name: 'Riley Okafor', email: 'r.okafor@student.northview.edu' },
    { id: 'stu_nv_05', orgId: 'org_northview', name: 'Taylor Nguyen', email: 't.nguyen@student.northview.edu' },
    { id: 'stu_nv_06', orgId: 'org_northview', name: 'Morgan Ellis', email: 'm.ellis@student.northview.edu' },
    { id: 'stu_nv_07', orgId: 'org_northview', name: 'Avery Brooks', email: 'a.brooks@student.northview.edu' },
    { id: 'stu_nv_08', orgId: 'org_northview', name: 'Quinn Delgado', email: 'q.delgado@student.northview.edu' },
    { id: 'stu_hb_01', orgId: 'org_harbor', name: 'Sam Whitaker', email: 's.whitaker@student.harboracademy.org' },
    { id: 'stu_hb_02', orgId: 'org_harbor', name: 'Jamie Foster', email: 'j.foster@student.harboracademy.org' },
    { id: 'stu_hb_03', orgId: 'org_harbor', name: 'Robin Castillo', email: 'r.castillo@student.harboracademy.org' },
    { id: 'stu_hb_04', orgId: 'org_harbor', name: 'Devon Marsh', email: 'd.marsh@student.harboracademy.org' },
    { id: 'stu_sm_01', orgId: 'org_summit', name: 'Charlie Reeves', email: 'c.reeves@student.summitworkforce.org' },
    { id: 'stu_sm_02', orgId: 'org_summit', name: 'Emerson Cole', email: 'e.cole@student.summitworkforce.org' },
    { id: 'stu_sm_03', orgId: 'org_summit', name: 'Frankie Ibarra', email: 'f.ibarra@student.summitworkforce.org' },
  ]

  users.push(
    ...studentSeeds.map((s, i) => ({
      id: s.id,
      orgId: s.orgId,
      name: s.name,
      email: s.email,
      password: 'demo123',
      role: 'student' as const,
      createdAt: daysAgo(90 - i * 3),
      lastActiveAt: daysAgo(i % 5),
    })),
  )

  // ---- Generated students (fictional, deterministic) ----
  // 65 additional demo students bring the total to 80 across the three schools.
  const GEN_FIRST = ['Aiden', 'Bella', 'Caleb', 'Dalia', 'Elias', 'Farrah', 'Gavin', 'Hana', 'Isaac', 'Jasmine', 'Kai', 'Luna', 'Mateo', 'Nadia', 'Oscar', 'Paloma', 'Ruben', 'Sana', 'Tobias', 'Uma', 'Victor', 'Willa', 'Xavier', 'Yara', 'Zane', 'Amara', 'Bennett', 'Cora', 'Darius', 'Elif']
  const GEN_LAST = ['Adler', 'Bishop', 'Calloway', 'Dunn', 'Espinoza', 'Flynn', 'Gallagher', 'Herrera', 'Ingram', 'Jeffers', 'Kaur', 'Lindqvist', 'McAllister', 'Nakamura', 'Osborne', 'Peralta', 'Quintero', 'Rasmussen', 'Serrano', 'Thornton', 'Ueda', 'Valenzuela', 'Winters', 'Xiong', 'Yates', 'Zamora']

  function mulberry32(seed: number) {
    return () => {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
  }

  interface GenStudent { id: string; orgId: string; name: string; email: string; rand: () => number }
  const genStudents: GenStudent[] = []
  const orgQuotas = [
    { orgId: 'org_northview', prefix: 'nv', domain: 'student.northview.edu', count: 17, offset: 9 },
    { orgId: 'org_harbor', prefix: 'hb', domain: 'student.harboracademy.org', count: 6, offset: 5 },
    { orgId: 'org_summit', prefix: 'sm', domain: 'student.summitworkforce.org', count: 42, offset: 4 },
  ]
  let gi = 0
  for (const q of orgQuotas) {
    for (let k = 0; k < q.count; k++) {
      const rand = mulberry32(1000 + gi * 97)
      const first = GEN_FIRST[Math.floor(rand() * GEN_FIRST.length)]
      const last = GEN_LAST[Math.floor(rand() * GEN_LAST.length)]
      const n = q.offset + k
      genStudents.push({
        id: `stu_${q.prefix}_g${String(n).padStart(2, '0')}`,
        orgId: q.orgId,
        name: `${first} ${last}`,
        email: `${first.toLowerCase()}.${last.toLowerCase()}${n}@${q.domain}`,
        rand,
      })
      gi++
    }
  }

  users.push(
    ...genStudents.map((s, i) => ({
      id: s.id,
      orgId: s.orgId,
      name: s.name,
      email: s.email,
      password: 'demo123',
      role: 'student' as const,
      createdAt: daysAgo(20 + (i % 60)),
      lastActiveAt: daysAgo(i % 7),
    })),
  )

  const subscriptions: Database['subscriptions'] = [
    {
      id: 'sub_northview',
      orgId: 'org_northview',
      planId: 'field',
      fieldId: 'healthcare',
      status: 'active',
      seats: 25,
      currentPeriodStart: daysAgo(180),
      currentPeriodEnd: daysAhead(185),
      stripeCustomerId: 'cus_demo_northview',
      stripeSubscriptionId: 'sub_demo_northview',
      cancelAtPeriodEnd: false,
      createdAt: daysAgo(180),
    },
    {
      id: 'sub_harbor',
      orgId: 'org_harbor',
      planId: 'single',
      fieldId: 'healthcare',
      status: 'past_due',
      seats: 10,
      currentPeriodStart: daysAgo(110),
      currentPeriodEnd: daysAhead(255),
      stripeCustomerId: 'cus_demo_harbor',
      stripeSubscriptionId: 'sub_demo_harbor',
      cancelAtPeriodEnd: false,
      createdAt: daysAgo(110),
    },
    {
      id: 'sub_summit',
      orgId: 'org_summit',
      planId: 'program',
      fieldId: 'healthcare',
      status: 'active',
      seats: 60,
      currentPeriodStart: daysAgo(60),
      currentPeriodEnd: daysAhead(305),
      stripeCustomerId: 'cus_demo_summit',
      stripeSubscriptionId: null, // invoice-paid
      cancelAtPeriodEnd: false,
      createdAt: daysAgo(60),
    },
  ]

  const payments: Database['payments'] = [
    { id: 'pay_001', orgId: 'org_northview', subscriptionId: 'sub_northview', amount: 37500, currency: 'usd', status: 'succeeded', method: 'card', description: 'Field License — Health Sciences (annual)', createdAt: daysAgo(180), stripePaymentIntentId: 'pi_demo_001' },
    { id: 'pay_002', orgId: 'org_harbor', subscriptionId: 'sub_harbor', amount: 12500, currency: 'usd', status: 'succeeded', method: 'card', description: 'Single Track License — Health Sciences (annual)', createdAt: daysAgo(110), stripePaymentIntentId: 'pi_demo_002' },
    { id: 'pay_003', orgId: 'org_harbor', subscriptionId: 'sub_harbor', amount: 12500, currency: 'usd', status: 'failed', method: 'card', description: 'Single Track License — renewal attempt', createdAt: daysAgo(9), stripePaymentIntentId: 'pi_demo_003', failureReason: 'Card declined (insufficient funds)' },
    { id: 'pay_004', orgId: 'org_harbor', subscriptionId: 'sub_harbor', amount: 12500, currency: 'usd', status: 'failed', method: 'card', description: 'Single Track License — renewal retry', createdAt: daysAgo(4), stripePaymentIntentId: 'pi_demo_004', failureReason: 'Card declined (do not honor)' },
    { id: 'pay_005', orgId: 'org_summit', subscriptionId: 'sub_summit', amount: 69500, currency: 'usd', status: 'succeeded', method: 'invoice', description: 'Program License — Health Sciences (annual, invoice INV-1042)', createdAt: daysAgo(58), stripePaymentIntentId: null },
  ]

  const invoiceRequests: Database['invoiceRequests'] = [
    {
      id: 'inv_001',
      schoolName: 'Riverbend Technical College',
      contactName: 'Laura Kim',
      email: 'l.kim@riverbendtc.example.org',
      phone: '(555) 902-3317',
      studentCount: 40,
      desiredTracks: ['Medical Assistant Readiness', 'Phlebotomy Technician Readiness'],
      planId: 'program',
      timeline: 'Next semester (2–3 months)',
      notes: 'Needs procurement paperwork for a public institution. Requesting a quote for 40 seats.',
      status: 'contacted',
      createdAt: daysAgo(6),
    },
    {
      id: 'inv_002',
      schoolName: 'Lakeshore Career Center',
      contactName: 'Andre Powell',
      email: 'a.powell@lakeshorecc.example.org',
      phone: '(555) 610-4480',
      studentCount: 12,
      desiredTracks: ['Clinical Laboratory Assisting Readiness'],
      planId: 'field',
      timeline: 'This quarter',
      notes: 'Grant-funded program; purchase order required before activation.',
      status: 'new',
      createdAt: daysAgo(2),
    },
  ]

  const demoRequests: Database['demoRequests'] = [
    {
      id: 'demo_001',
      schoolName: 'Cedar Valley Health Careers Academy',
      contactName: 'Monica Reyes',
      email: 'm.reyes@cedarvalley.example.org',
      phone: '(555) 818-2204',
      role: 'Program Coordinator',
      studentCount: '25–50',
      message: 'We run two allied health cohorts per year and want to see the instructor reporting workflow.',
      status: 'scheduled',
      createdAt: daysAgo(3),
    },
    {
      id: 'demo_002',
      schoolName: 'Gateway Workforce Institute',
      contactName: 'Hassan Ali',
      email: 'h.ali@gatewaywi.example.org',
      phone: '(555) 275-9910',
      role: 'Director of Workforce Training',
      studentCount: '50+',
      message: 'Evaluating readiness platforms for a state-funded healthcare pathways grant.',
      status: 'new',
      createdAt: daysAgo(1),
    },
  ]

  const seatLicenses: Database['seatLicenses'] = [
    { id: 'seat_northview', orgId: 'org_northview', totalSeats: 25, usedSeats: 25, updatedAt: daysAgo(5) },
    { id: 'seat_harbor', orgId: 'org_harbor', totalSeats: 10, usedSeats: 10, updatedAt: daysAgo(12) },
    { id: 'seat_summit', orgId: 'org_summit', totalSeats: 60, usedSeats: 45, updatedAt: daysAgo(20) },
  ]

  // Enrollments
  const enrollments: Database['enrollments'] = [
    { id: 'enr_001', studentId: 'stu_demo', trackId: 'track_ma', orgId: 'org_northview', assignedBy: 'user_nv_inst1', assignedAt: daysAgo(45), status: 'active' },
    { id: 'enr_001b', studentId: 'stu_demo', trackId: 'track_itsupport', orgId: 'org_northview', assignedBy: 'user_nv_inst3', assignedAt: daysAgo(40), status: 'active' },
    { id: 'enr_001c', studentId: 'stu_demo', trackId: 'track_cyberfound', orgId: 'org_northview', assignedBy: 'user_nv_inst3', assignedAt: daysAgo(38), status: 'active' },
    { id: 'enr_001d', studentId: 'stu_demo', trackId: 'track_p107', orgId: 'org_northview', assignedBy: 'user_sm_inst2', assignedAt: daysAgo(35), status: 'active' },
    { id: 'enr_001e', studentId: 'stu_demo', trackId: 'track_robotics', orgId: 'org_northview', assignedBy: 'user_nv_inst4', assignedAt: daysAgo(33), status: 'active' },
    { id: 'enr_002', studentId: 'stu_nv_02', trackId: 'track_ma', orgId: 'org_northview', assignedBy: 'user_nv_inst1', assignedAt: daysAgo(45), status: 'active' },
    { id: 'enr_003', studentId: 'stu_nv_03', trackId: 'track_ma', orgId: 'org_northview', assignedBy: 'user_nv_inst1', assignedAt: daysAgo(44), status: 'active' },
    { id: 'enr_004', studentId: 'stu_nv_04', trackId: 'track_phleb', orgId: 'org_northview', assignedBy: 'user_nv_inst2', assignedAt: daysAgo(40), status: 'active' },
    { id: 'enr_005', studentId: 'stu_nv_05', trackId: 'track_phleb', orgId: 'org_northview', assignedBy: 'user_nv_inst2', assignedAt: daysAgo(40), status: 'active' },
    { id: 'enr_006', studentId: 'stu_nv_06', trackId: 'track_cla', orgId: 'org_northview', assignedBy: 'user_nv_inst2', assignedAt: daysAgo(38), status: 'active' },
    { id: 'enr_007', studentId: 'stu_nv_07', trackId: 'track_ma', orgId: 'org_northview', assignedBy: 'user_nv_inst1', assignedAt: daysAgo(30), status: 'active' },
    { id: 'enr_008', studentId: 'stu_nv_08', trackId: 'track_phleb', orgId: 'org_northview', assignedBy: 'user_nv_inst2', assignedAt: daysAgo(28), status: 'active' },
    { id: 'enr_009', studentId: 'stu_hb_01', trackId: 'track_phleb', orgId: 'org_harbor', assignedBy: 'user_hb_inst1', assignedAt: daysAgo(50), status: 'active' },
    { id: 'enr_010', studentId: 'stu_hb_02', trackId: 'track_phleb', orgId: 'org_harbor', assignedBy: 'user_hb_inst1', assignedAt: daysAgo(50), status: 'active' },
    { id: 'enr_011', studentId: 'stu_hb_03', trackId: 'track_phleb', orgId: 'org_harbor', assignedBy: 'user_hb_inst1', assignedAt: daysAgo(48), status: 'active' },
    { id: 'enr_012', studentId: 'stu_hb_04', trackId: 'track_phleb', orgId: 'org_harbor', assignedBy: 'user_hb_inst1', assignedAt: daysAgo(20), status: 'active' },
    { id: 'enr_013', studentId: 'stu_sm_01', trackId: 'track_ma', orgId: 'org_summit', assignedBy: 'user_sm_inst1', assignedAt: daysAgo(25), status: 'active' },
    { id: 'enr_014', studentId: 'stu_sm_02', trackId: 'track_cla', orgId: 'org_summit', assignedBy: 'user_sm_inst1', assignedAt: daysAgo(25), status: 'active' },
    { id: 'enr_015', studentId: 'stu_sm_03', trackId: 'track_ma', orgId: 'org_summit', assignedBy: 'user_sm_inst1', assignedAt: daysAgo(22), status: 'active' },
    { id: 'enr_016', studentId: 'stu_sm_01', trackId: 'track_amt', orgId: 'org_summit', assignedBy: 'user_sm_inst1', assignedAt: daysAgo(18), status: 'active' },
    { id: 'enr_017', studentId: 'stu_sm_03', trackId: 'track_amt', orgId: 'org_summit', assignedBy: 'user_sm_inst1', assignedAt: daysAgo(15), status: 'active' },
  ]

  // Generated enrollments: spread students across all 8 IRC fields.
  const GEN_TRACK_IDS = TRACKS.filter((t) => !t.isBundle).map((t) => t.id)
  const instructorByOrg: Record<string, string[]> = {
    org_northview: ['user_nv_inst1', 'user_nv_inst2', 'user_nv_inst3', 'user_nv_inst4'],
    org_harbor: ['user_hb_inst1', 'user_hb_inst2'],
    org_summit: ['user_sm_inst1', 'user_sm_inst2'],
  }
  let enrCounter = 100
  for (const s of genStudents) {
    const nTracks = s.rand() < 0.35 ? 2 : 1
    const chosen = new Set<string>()
    for (let k = 0; k < nTracks; k++) {
      const t = GEN_TRACK_IDS[Math.floor(s.rand() * GEN_TRACK_IDS.length)]
      if (chosen.has(t)) continue
      chosen.add(t)
      const pool = instructorByOrg[s.orgId]
      enrollments.push({
        id: `enr_g${enrCounter++}`,
        studentId: s.id,
        trackId: t,
        orgId: s.orgId,
        assignedBy: pool[Math.floor(s.rand() * pool.length)],
        assignedAt: daysAgo(10 + Math.floor(s.rand() * 45)),
        status: 'active',
      })
    }
  }

  // Progress snapshots per enrolled student
  const progress: Database['progress'] = [
    {
      studentId: 'stu_demo', trackId: 'track_ma',
      completedLessonIds: [], practiceQuestionsCompleted: 0, practiceQuestionsCorrect: 0,
      topicStats: {}, finalPracticeScorePct: null, diagnosticBaselinePct: null, lastActivityAt: daysAgo(0),
    },
    {
      studentId: 'stu_demo', trackId: 'track_itsupport',
      completedLessonIds: [], practiceQuestionsCompleted: 0, practiceQuestionsCorrect: 0,
      topicStats: {}, finalPracticeScorePct: null, diagnosticBaselinePct: null, lastActivityAt: daysAgo(0),
    },
    {
      studentId: 'stu_demo', trackId: 'track_cyberfound',
      completedLessonIds: [], practiceQuestionsCompleted: 0, practiceQuestionsCorrect: 0,
      topicStats: {}, finalPracticeScorePct: null, diagnosticBaselinePct: null, lastActivityAt: daysAgo(0),
    },
    {
      studentId: 'stu_demo', trackId: 'track_p107',
      completedLessonIds: [], practiceQuestionsCompleted: 0, practiceQuestionsCorrect: 0,
      topicStats: {}, finalPracticeScorePct: null, diagnosticBaselinePct: null, lastActivityAt: daysAgo(0),
    },
    {
      studentId: 'stu_demo', trackId: 'track_robotics',
      completedLessonIds: [], practiceQuestionsCompleted: 0, practiceQuestionsCorrect: 0,
      topicStats: {}, finalPracticeScorePct: null, diagnosticBaselinePct: null, lastActivityAt: daysAgo(0),
    },
    {
      studentId: 'stu_nv_02', trackId: 'track_ma',
      completedLessonIds: pickLessons(LESSONS, 'mod_ma_', 14),
      practiceQuestionsCompleted: 86, practiceQuestionsCorrect: 66,
      topicStats: {
        'Patient Care Fundamentals': { attempted: 14, correct: 12 },
        'Vital Signs': { attempted: 12, correct: 10 },
        'Infection Control': { attempted: 12, correct: 9 },
        'Pharmacology Basics': { attempted: 10, correct: 6 },
        'Medical Terminology': { attempted: 14, correct: 11 },
        'EKG Basics': { attempted: 10, correct: 7 },
        'Legal and Ethical Responsibilities': { attempted: 8, correct: 7 },
        'Administrative Procedures': { attempted: 6, correct: 4 },
      },
      finalPracticeScorePct: 74, diagnosticBaselinePct: 52, lastActivityAt: daysAgo(1),
    },
    {
      studentId: 'stu_nv_03', trackId: 'track_ma',
      completedLessonIds: pickLessons(LESSONS, 'mod_ma_', 8),
      practiceQuestionsCompleted: 44, practiceQuestionsCorrect: 24,
      topicStats: {
        'Patient Care Fundamentals': { attempted: 8, correct: 5 },
        'Vital Signs': { attempted: 8, correct: 4 },
        'Infection Control': { attempted: 8, correct: 4 },
        'Pharmacology Basics': { attempted: 6, correct: 2 },
        'Medical Terminology': { attempted: 8, correct: 6 },
        'EKG Basics': { attempted: 6, correct: 3 },
      },
      finalPracticeScorePct: null, diagnosticBaselinePct: 38, lastActivityAt: daysAgo(2),
    },
    {
      studentId: 'stu_nv_04', trackId: 'track_phleb',
      completedLessonIds: pickLessons(LESSONS, 'mod_phleb_', 18),
      practiceQuestionsCompleted: 112, practiceQuestionsCorrect: 96,
      topicStats: {
        'Safety and Infection Control': { attempted: 16, correct: 15 },
        'Venipuncture Equipment': { attempted: 14, correct: 13 },
        'Order of Draw': { attempted: 16, correct: 14 },
        'Specimen Handling': { attempted: 14, correct: 12 },
        'Patient Identification': { attempted: 12, correct: 11 },
        'Complications and Corrective Action': { attempted: 14, correct: 11 },
        'Quality Assurance': { attempted: 14, correct: 11 },
        'Professional Standards': { attempted: 12, correct: 9 },
      },
      finalPracticeScorePct: 88, diagnosticBaselinePct: 61, lastActivityAt: daysAgo(0),
    },
    {
      studentId: 'stu_nv_05', trackId: 'track_phleb',
      completedLessonIds: pickLessons(LESSONS, 'mod_phleb_', 10),
      practiceQuestionsCompleted: 58, practiceQuestionsCorrect: 38,
      topicStats: {
        'Safety and Infection Control': { attempted: 10, correct: 8 },
        'Venipuncture Equipment': { attempted: 10, correct: 7 },
        'Order of Draw': { attempted: 12, correct: 7 },
        'Specimen Handling': { attempted: 10, correct: 6 },
        'Patient Identification': { attempted: 8, correct: 6 },
        'Complications and Corrective Action': { attempted: 8, correct: 4 },
      },
      finalPracticeScorePct: null, diagnosticBaselinePct: 44, lastActivityAt: daysAgo(3),
    },
    {
      studentId: 'stu_nv_06', trackId: 'track_cla',
      completedLessonIds: pickLessons(LESSONS, 'mod_cla_', 6),
      practiceQuestionsCompleted: 22, practiceQuestionsCorrect: 11,
      topicStats: {
        'Laboratory Safety': { attempted: 8, correct: 5 },
        'Specimen Collection': { attempted: 6, correct: 3 },
        'Specimen Processing': { attempted: 4, correct: 2 },
        'Quality Control': { attempted: 4, correct: 1 },
      },
      finalPracticeScorePct: null, diagnosticBaselinePct: 35, lastActivityAt: daysAgo(6),
    },
    {
      studentId: 'stu_nv_07', trackId: 'track_ma',
      completedLessonIds: pickLessons(LESSONS, 'mod_ma_', 4),
      practiceQuestionsCompleted: 12, practiceQuestionsCorrect: 7,
      topicStats: {
        'Patient Care Fundamentals': { attempted: 6, correct: 4 },
        'Medical Terminology': { attempted: 6, correct: 3 },
      },
      finalPracticeScorePct: null, diagnosticBaselinePct: 41, lastActivityAt: daysAgo(4),
    },
    {
      studentId: 'stu_nv_08', trackId: 'track_phleb',
      completedLessonIds: [],
      practiceQuestionsCompleted: 0, practiceQuestionsCorrect: 0,
      topicStats: {}, finalPracticeScorePct: null, diagnosticBaselinePct: null, lastActivityAt: daysAgo(28),
    },
    {
      studentId: 'stu_hb_01', trackId: 'track_phleb',
      completedLessonIds: pickLessons(LESSONS, 'mod_phleb_', 16),
      practiceQuestionsCompleted: 90, practiceQuestionsCorrect: 70,
      topicStats: {
        'Safety and Infection Control': { attempted: 14, correct: 12 },
        'Order of Draw': { attempted: 14, correct: 11 },
        'Specimen Handling': { attempted: 12, correct: 10 },
        'Venipuncture Equipment': { attempted: 12, correct: 9 },
        'Patient Identification': { attempted: 12, correct: 10 },
        'Complications and Corrective Action': { attempted: 12, correct: 8 },
        'Quality Assurance': { attempted: 14, correct: 10 },
      },
      finalPracticeScorePct: 79, diagnosticBaselinePct: 55, lastActivityAt: daysAgo(1),
    },
    {
      studentId: 'stu_hb_02', trackId: 'track_phleb',
      completedLessonIds: pickLessons(LESSONS, 'mod_phleb_', 12),
      practiceQuestionsCompleted: 64, practiceQuestionsCorrect: 45,
      topicStats: {
        'Safety and Infection Control': { attempted: 12, correct: 10 },
        'Order of Draw': { attempted: 12, correct: 8 },
        'Specimen Handling': { attempted: 12, correct: 8 },
        'Venipuncture Equipment': { attempted: 10, correct: 7 },
        'Patient Identification': { attempted: 8, correct: 6 },
        'Quality Assurance': { attempted: 10, correct: 6 },
      },
      finalPracticeScorePct: 71, diagnosticBaselinePct: 49, lastActivityAt: daysAgo(2),
    },
    {
      studentId: 'stu_hb_03', trackId: 'track_phleb',
      completedLessonIds: pickLessons(LESSONS, 'mod_phleb_', 7),
      practiceQuestionsCompleted: 34, practiceQuestionsCorrect: 19,
      topicStats: {
        'Safety and Infection Control': { attempted: 8, correct: 6 },
        'Order of Draw': { attempted: 8, correct: 4 },
        'Specimen Handling': { attempted: 6, correct: 3 },
        'Venipuncture Equipment': { attempted: 6, correct: 3 },
        'Patient Identification': { attempted: 6, correct: 3 },
      },
      finalPracticeScorePct: null, diagnosticBaselinePct: 42, lastActivityAt: daysAgo(5),
    },
    {
      studentId: 'stu_hb_04', trackId: 'track_phleb',
      completedLessonIds: pickLessons(LESSONS, 'mod_phleb_', 2),
      practiceQuestionsCompleted: 8, practiceQuestionsCorrect: 3,
      topicStats: {
        'Safety and Infection Control': { attempted: 4, correct: 2 },
        'Venipuncture Equipment': { attempted: 4, correct: 1 },
      },
      finalPracticeScorePct: null, diagnosticBaselinePct: 31, lastActivityAt: daysAgo(8),
    },
    {
      studentId: 'stu_sm_01', trackId: 'track_ma',
      completedLessonIds: pickLessons(LESSONS, 'mod_ma_', 11),
      practiceQuestionsCompleted: 52, practiceQuestionsCorrect: 38,
      topicStats: {
        'Patient Care Fundamentals': { attempted: 10, correct: 8 },
        'Vital Signs': { attempted: 10, correct: 7 },
        'Infection Control': { attempted: 8, correct: 6 },
        'Medical Terminology': { attempted: 10, correct: 8 },
        'EKG Basics': { attempted: 8, correct: 5 },
        'Pharmacology Basics': { attempted: 6, correct: 4 },
      },
      finalPracticeScorePct: 68, diagnosticBaselinePct: 47, lastActivityAt: daysAgo(1),
    },
    {
      studentId: 'stu_sm_02', trackId: 'track_cla',
      completedLessonIds: pickLessons(LESSONS, 'mod_cla_', 9),
      practiceQuestionsCompleted: 40, practiceQuestionsCorrect: 27,
      topicStats: {
        'Laboratory Safety': { attempted: 8, correct: 7 },
        'Specimen Collection': { attempted: 8, correct: 5 },
        'Specimen Processing': { attempted: 6, correct: 4 },
        'Basic Lab Equipment': { attempted: 6, correct: 4 },
        'Quality Control': { attempted: 6, correct: 3 },
        'Medical Terminology': { attempted: 6, correct: 4 },
      },
      finalPracticeScorePct: null, diagnosticBaselinePct: 40, lastActivityAt: daysAgo(2),
    },
    {
      studentId: 'stu_sm_03', trackId: 'track_ma',
      completedLessonIds: pickLessons(LESSONS, 'mod_ma_', 3),
      practiceQuestionsCompleted: 14, practiceQuestionsCorrect: 7,
      topicStats: {
        'Patient Care Fundamentals': { attempted: 8, correct: 4 },
        'Medical Terminology': { attempted: 6, correct: 3 },
      },
      finalPracticeScorePct: null, diagnosticBaselinePct: 36, lastActivityAt: daysAgo(7),
    },
    {
      studentId: 'stu_sm_01', trackId: 'track_amt',
      completedLessonIds: pickLessons(LESSONS, 'mod_amt_', 7),
      practiceQuestionsCompleted: 30, practiceQuestionsCorrect: 20,
      topicStats: {
        'Regulations and Maintenance Publications': { attempted: 8, correct: 6 },
        'Mathematics for Aviation': { attempted: 6, correct: 4 },
        'Basic Electricity': { attempted: 6, correct: 4 },
        'Weight and Balance': { attempted: 6, correct: 3 },
        'Materials and Processes': { attempted: 4, correct: 3 },
      },
      finalPracticeScorePct: null, diagnosticBaselinePct: 44, lastActivityAt: daysAgo(2),
    },
    {
      studentId: 'stu_sm_03', trackId: 'track_amt',
      completedLessonIds: pickLessons(LESSONS, 'mod_amt_', 2),
      practiceQuestionsCompleted: 10, practiceQuestionsCorrect: 5,
      topicStats: {
        'Regulations and Maintenance Publications': { attempted: 6, correct: 3 },
        'Mathematics for Aviation': { attempted: 4, correct: 2 },
      },
      finalPracticeScorePct: null, diagnosticBaselinePct: 33, lastActivityAt: daysAgo(4),
    },
  ]

  // Generated progress for generated enrollments (deterministic).
  const domainsByTrack = new Map(TRACKS.map((t) => [t.id, t.domains ?? []]))
  for (const e of enrollments.filter((en) => en.id.startsWith('enr_g'))) {
    const stu = genStudents.find((s) => s.id === e.studentId)!
    const r = stu.rand
    const domains = domainsByTrack.get(e.trackId) ?? []
    const short = e.trackId.replace(/^track_/, '')
    const activity = r()
    const lessonsDone = activity < 0.15 ? 0 : 2 + Math.floor(r() * 15)
    const topicStats: Record<string, { attempted: number; correct: number }> = {}
    const nTopics = Math.min(domains.length, 2 + Math.floor(r() * 6))
    for (let k = 0; k < nTopics; k++) {
      const d = domains[Math.floor(r() * domains.length)]
      if (!d || topicStats[d]) continue
      const attempted = 4 + Math.floor(r() * 12)
      const correct = Math.max(0, Math.min(attempted, Math.round(attempted * (0.3 + r() * 0.6))))
      topicStats[d] = { attempted, correct }
    }
    const completed = Object.values(topicStats).reduce((a, b) => a + b.attempted, 0)
    const correctTotal = Object.values(topicStats).reduce((a, b) => a + b.correct, 0)
    progress.push({
      studentId: e.studentId,
      trackId: e.trackId,
      completedLessonIds: pickLessons(LESSONS, `mod_${short}_`, lessonsDone),
      practiceQuestionsCompleted: completed,
      practiceQuestionsCorrect: correctTotal,
      topicStats,
      finalPracticeScorePct: activity > 0.6 ? 58 + Math.floor(r() * 36) : null,
      diagnosticBaselinePct: activity > 0.2 ? 28 + Math.floor(r() * 32) : null,
      lastActivityAt: daysAgo(Math.floor(r() * 14)),
    })
  }

  // A few completed attempts to anchor diagnostics / final tests
  const attempts: Database['attempts'] = []
  const attemptFor = (
    id: string, assessmentId: string, studentId: string, trackId: string,
    scorePct: number, completedDaysAgo: number,
  ) => {
    const asm = ASSESSMENTS.find((a) => a.id === assessmentId)
    const questions = asm ? asm.questionIds.map((qid) => QUESTIONS.find((q) => q.id === qid)!).filter(Boolean) : []
    const correctCount = Math.round((scorePct / 100) * Math.max(1, questions.length))
    attempts.push({
      id, assessmentId, studentId, trackId,
      startedAt: daysAgo(completedDaysAgo),
      completedAt: daysAgo(completedDaysAgo),
      responses: questions.map((q, i) => ({
        questionId: q.id,
        selectedIndex: i < correctCount ? q.correctIndex : (q.correctIndex + 1) % q.choices.length,
        correct: i < correctCount,
      })),
      scorePct,
    })
  }
  attemptFor('att_001', 'asm_ma_diag', 'stu_nv_02', 'track_ma', 52, 44)
  attemptFor('att_002', 'asm_ma_final', 'stu_nv_02', 'track_ma', 74, 6)
  attemptFor('att_003', 'asm_ma_diag', 'stu_nv_03', 'track_ma', 38, 43)
  attemptFor('att_004', 'asm_phleb_diag', 'stu_nv_04', 'track_phleb', 61, 39)
  attemptFor('att_005', 'asm_phleb_final', 'stu_nv_04', 'track_phleb', 88, 2)
  attemptFor('att_006', 'asm_phleb_diag', 'stu_nv_05', 'track_phleb', 44, 39)
  attemptFor('att_007', 'asm_phleb_diag', 'stu_hb_01', 'track_phleb', 55, 49)
  attemptFor('att_008', 'asm_phleb_final', 'stu_hb_01', 'track_phleb', 79, 4)
  attemptFor('att_009', 'asm_phleb_diag', 'stu_hb_02', 'track_phleb', 49, 49)
  attemptFor('att_010', 'asm_phleb_final', 'stu_hb_02', 'track_phleb', 71, 5)
  attemptFor('att_011', 'asm_phleb_diag', 'stu_hb_03', 'track_phleb', 42, 47)
  attemptFor('att_012', 'asm_phleb_diag', 'stu_hb_04', 'track_phleb', 31, 19)
  attemptFor('att_013', 'asm_ma_diag', 'stu_sm_01', 'track_ma', 47, 24)
  attemptFor('att_014', 'asm_ma_final', 'stu_sm_01', 'track_ma', 68, 3)
  attemptFor('att_015', 'asm_cla_diag', 'stu_sm_02', 'track_cla', 40, 24)
  attemptFor('att_016', 'asm_ma_diag', 'stu_sm_03', 'track_ma', 36, 21)
  attemptFor('att_017', 'asm_ma_diag', 'stu_nv_07', 'track_ma', 41, 29)
  attemptFor('att_018', 'asm_cla_diag', 'stu_nv_06', 'track_cla', 35, 37)
  attemptFor('att_019', 'asm_amt_diag', 'stu_sm_01', 'track_amt', 44, 17)
  attemptFor('att_020', 'asm_amt_diag', 'stu_sm_03', 'track_amt', 33, 14)

  // Diagnostic attempts for generated students who have taken the baseline.
  let attCounter = 100
  for (const p of progress.filter((pr) => pr.studentId.startsWith('stu_') && pr.studentId.includes('_g') && pr.diagnosticBaselinePct !== null)) {
    const short = p.trackId.replace(/^track_/, '')
    const asmId = `asm_${short}_diag`
    if (!ASSESSMENTS.some((a) => a.id === asmId)) continue
    attemptFor(`att_g${attCounter++}`, asmId, p.studentId, p.trackId, p.diagnosticBaselinePct!, 12 + (attCounter % 30))
  }

  const auditLogs: Database['auditLogs'] = [
    { id: 'log_001', actorId: 'user_super', actorName: 'Platform Admin', action: 'subscription.created', detail: 'Program License activated for Summit Workforce School via invoice INV-1042', orgId: 'org_summit', createdAt: daysAgo(58) },
    { id: 'log_002', actorId: 'user_nv_admin', actorName: 'Dana Whitfield', action: 'user.invited', detail: 'Invited instructor James Carter', orgId: 'org_northview', createdAt: daysAgo(198) },
    { id: 'log_003', actorId: 'user_nv_inst1', actorName: 'Elena Ruiz', action: 'track.assigned', detail: 'Assigned Medical Assistant Readiness to 4 students', orgId: 'org_northview', createdAt: daysAgo(45) },
    { id: 'log_004', actorId: 'user_super', actorName: 'Platform Admin', action: 'payment.failed', detail: 'Renewal payment failed for Harbor Allied Health Academy', orgId: 'org_harbor', createdAt: daysAgo(9) },
    { id: 'log_005', actorId: 'user_hb_admin', actorName: 'Marcus Bell', action: 'billing.updated', detail: 'Billing contact notified of past-due subscription', orgId: 'org_harbor', createdAt: daysAgo(8) },
    { id: 'log_006', actorId: 'user_super', actorName: 'Platform Admin', action: 'invoice_request.received', detail: 'Invoice request from Riverbend Technical College (40 seats)', orgId: null, createdAt: daysAgo(6) },
    { id: 'log_007', actorId: 'user_sm_inst1', actorName: 'Tom Alvarez', action: 'track.assigned', detail: 'Assigned readiness tracks to 3 students', orgId: 'org_summit', createdAt: daysAgo(25) },
  ]

  return {
    organizations,
    users,
    subscriptions,
    payments,
    invoiceRequests,
    demoRequests,
    seatLicenses,
    tracks: TRACKS,
    modules: MODULES,
    lessons: LESSONS,
    questions: QUESTIONS,
    assessments: ASSESSMENTS,
    attempts,
    enrollments,
    progress,
    auditLogs,
    settings: { scoringWeights: { ...DEFAULT_WEIGHTS } },
  }
}

/** Pick the first n lessons of a track (ordered) to simulate completion. */
function pickLessons(lessons: Database['lessons'], modulePrefix: string, n: number): string[] {
  const ids = lessons
    .filter((l) => l.moduleId.startsWith(modulePrefix))
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((l) => l.id)
  return ids.slice(0, Math.min(n, Math.floor(ids.length * 0.75)))
}
