// Seed database — demo organizations, users, licenses, payments and progress.
// All names are fictional demo data. No real schools or students.
import type { Database } from '@/lib/types'
import { TRACKS, MODULES, LESSONS, QUESTIONS, ASSESSMENTS } from './content'
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
    // Harbor
    { id: 'user_hb_admin', orgId: 'org_harbor', name: 'Marcus Bell', email: 'admin@harboracademy.org', password: 'demo123', role: 'school_admin', title: 'Academy Director', createdAt: daysAgo(120), lastActiveAt: daysAgo(3) },
    { id: 'user_hb_inst1', orgId: 'org_harbor', name: 'Sofia Nguyen', email: 'instructor@harboracademy.org', password: 'demo123', role: 'instructor', title: 'Phlebotomy Instructor', createdAt: daysAgo(118), lastActiveAt: daysAgo(1) },
    // Summit
    { id: 'user_sm_admin', orgId: 'org_summit', name: 'Priya Raman', email: 'admin@summitworkforce.org', password: 'demo123', role: 'school_admin', title: 'Workforce Programs Lead', createdAt: daysAgo(64), lastActiveAt: daysAgo(0) },
    { id: 'user_sm_inst1', orgId: 'org_summit', name: 'Tom Alvarez', email: 'instructor@summitworkforce.org', password: 'demo123', role: 'instructor', title: 'Healthcare Careers Instructor', createdAt: daysAgo(60), lastActiveAt: daysAgo(1) },
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

  const subscriptions: Database['subscriptions'] = [
    {
      id: 'sub_northview',
      orgId: 'org_northview',
      planId: 'growth',
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
      planId: 'starter',
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
    { id: 'pay_001', orgId: 'org_northview', subscriptionId: 'sub_northview', amount: 31500, currency: 'usd', status: 'succeeded', method: 'card', description: 'Growth Cohort — annual subscription', createdAt: daysAgo(180), stripePaymentIntentId: 'pi_demo_001' },
    { id: 'pay_002', orgId: 'org_harbor', subscriptionId: 'sub_harbor', amount: 14500, currency: 'usd', status: 'succeeded', method: 'card', description: 'Starter Cohort — annual subscription', createdAt: daysAgo(110), stripePaymentIntentId: 'pi_demo_002' },
    { id: 'pay_003', orgId: 'org_harbor', subscriptionId: 'sub_harbor', amount: 14500, currency: 'usd', status: 'failed', method: 'card', description: 'Starter Cohort — renewal attempt', createdAt: daysAgo(9), stripePaymentIntentId: 'pi_demo_003', failureReason: 'Card declined (insufficient funds)' },
    { id: 'pay_004', orgId: 'org_harbor', subscriptionId: 'sub_harbor', amount: 14500, currency: 'usd', status: 'failed', method: 'card', description: 'Starter Cohort — renewal retry', createdAt: daysAgo(4), stripePaymentIntentId: 'pi_demo_004', failureReason: 'Card declined (do not honor)' },
    { id: 'pay_005', orgId: 'org_summit', subscriptionId: 'sub_summit', amount: 59500, currency: 'usd', status: 'succeeded', method: 'invoice', description: 'Program License — annual (invoice INV-1042)', createdAt: daysAgo(58), stripePaymentIntentId: null },
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
      planId: 'growth',
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
    { id: 'seat_northview', orgId: 'org_northview', totalSeats: 25, usedSeats: 8, updatedAt: daysAgo(5) },
    { id: 'seat_harbor', orgId: 'org_harbor', totalSeats: 10, usedSeats: 4, updatedAt: daysAgo(12) },
    { id: 'seat_summit', orgId: 'org_summit', totalSeats: 60, usedSeats: 3, updatedAt: daysAgo(20) },
  ]

  // Enrollments
  const enrollments: Database['enrollments'] = [
    { id: 'enr_001', studentId: 'stu_demo', trackId: 'track_ma', orgId: 'org_northview', assignedBy: 'user_nv_inst1', assignedAt: daysAgo(45), status: 'active' },
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

  // Progress snapshots per enrolled student
  const progress: Database['progress'] = [
    {
      studentId: 'stu_demo', trackId: 'track_ma',
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
