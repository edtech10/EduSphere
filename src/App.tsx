import { Routes, Route, Navigate } from 'react-router'
import { AuthProvider } from '@/lib/auth'
import { MarketingLayout } from '@/layouts/MarketingLayout'
import { AppLayout } from '@/layouts/AppLayout'
import { RequireRole, RequireLicense } from '@/components/RequireAuth'

// Marketing
import Home from '@/pages/marketing/Home'
import Products from '@/pages/marketing/Products'
import HealthcareReadiness from '@/pages/marketing/HealthcareReadiness'
import Catalog from '@/pages/marketing/Catalog'
import FieldPage from '@/pages/marketing/FieldPage'
import Pricing from '@/pages/marketing/Pricing'
import ForSchools from '@/pages/marketing/ForSchools'
import ForInstructors from '@/pages/marketing/ForInstructors'
import DemoRequest from '@/pages/marketing/DemoRequest'
import Login from '@/pages/marketing/Login'
import Checkout from '@/pages/marketing/Checkout'
import Privacy from '@/pages/legal/Privacy'
import Terms from '@/pages/legal/Terms'
import Accessibility from '@/pages/legal/Accessibility'
import StudentDataProtection from '@/pages/legal/StudentDataProtection'

// Student
import StudentDashboard from '@/pages/student/StudentDashboard'
import MyTracks from '@/pages/student/MyTracks'
import TrackDetail from '@/pages/student/TrackDetail'
import ModuleView from '@/pages/student/ModuleView'
import AssessmentRunner from '@/pages/student/AssessmentRunner'
import StudentReport from '@/pages/student/StudentReport'

// Instructor
import InstructorDashboard from '@/pages/instructor/InstructorDashboard'
import InstructorStudents from '@/pages/instructor/InstructorStudents'
import InstructorStudentDetail from '@/pages/instructor/InstructorStudentDetail'
import CohortReport from '@/pages/instructor/CohortReport'

// School admin
import AdminDashboard from '@/pages/admin/AdminDashboard'
import AdminUsers from '@/pages/admin/AdminUsers'
import AdminReports from '@/pages/admin/AdminReports'
import AdminBilling from '@/pages/admin/AdminBilling'
import AdminSettings from '@/pages/admin/AdminSettings'

// Super admin
import SuperOverview from '@/pages/super/SuperOverview'
import SuperOrganizations from '@/pages/super/SuperOrganizations'
import SuperSubscriptions from '@/pages/super/SuperSubscriptions'
import SuperInvoiceRequests from '@/pages/super/SuperInvoiceRequests'
import SuperUsers from '@/pages/super/SuperUsers'
import SuperContent from '@/pages/super/SuperContent'
import SuperAudit from '@/pages/super/SuperAudit'
import SuperSettings from '@/pages/super/SuperSettings'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public marketing */}
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/healthcare-readiness" element={<HealthcareReadiness />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/fields/:slug" element={<FieldPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/for-schools" element={<ForSchools />} />
          <Route path="/for-instructors" element={<ForInstructors />} />
          <Route path="/demo" element={<DemoRequest />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/student-data-protection" element={<StudentDataProtection />} />
          <Route
            path="/checkout"
            element={
              <RequireRole roles={['school_admin', 'super_admin']}>
                <Checkout />
              </RequireRole>
            }
          />
        </Route>

        {/* Student app */}
        <Route
          element={
            <RequireRole roles={['student']}>
              <RequireLicense>
                <AppLayout />
              </RequireLicense>
            </RequireRole>
          }
        >
          <Route path="/app/student" element={<StudentDashboard />} />
          <Route path="/app/student/tracks" element={<MyTracks />} />
          <Route path="/app/student/track/:trackId" element={<TrackDetail />} />
          <Route path="/app/student/track/:trackId/module/:moduleId" element={<ModuleView />} />
          <Route path="/app/student/track/:trackId/assessment/:assessmentId" element={<AssessmentRunner />} />
          <Route path="/app/student/report" element={<StudentReport />} />
        </Route>

        {/* Instructor app */}
        <Route
          element={
            <RequireRole roles={['instructor']}>
              <RequireLicense>
                <AppLayout />
              </RequireLicense>
            </RequireRole>
          }
        >
          <Route path="/app/instructor" element={<InstructorDashboard />} />
          <Route path="/app/instructor/students" element={<InstructorStudents />} />
          <Route path="/app/instructor/student/:studentId" element={<InstructorStudentDetail />} />
          <Route path="/app/instructor/report" element={<CohortReport />} />
        </Route>

        {/* School admin app */}
        <Route
          element={
            <RequireRole roles={['school_admin']}>
              <AppLayout />
            </RequireRole>
          }
        >
          <Route path="/app/admin" element={<AdminDashboard />} />
          <Route path="/app/admin/users" element={<AdminUsers />} />
          <Route path="/app/admin/reports" element={<AdminReports />} />
          <Route path="/app/admin/billing" element={<AdminBilling />} />
          <Route path="/app/admin/settings" element={<AdminSettings />} />
        </Route>

        {/* Super admin app */}
        <Route
          element={
            <RequireRole roles={['super_admin']}>
              <AppLayout />
            </RequireRole>
          }
        >
          <Route path="/app/super" element={<SuperOverview />} />
          <Route path="/app/super/organizations" element={<SuperOrganizations />} />
          <Route path="/app/super/subscriptions" element={<SuperSubscriptions />} />
          <Route path="/app/super/invoice-requests" element={<SuperInvoiceRequests />} />
          <Route path="/app/super/users" element={<SuperUsers />} />
          <Route path="/app/super/content" element={<SuperContent />} />
          <Route path="/app/super/audit" element={<SuperAudit />} />
          <Route path="/app/super/settings" element={<SuperSettings />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  )
}
