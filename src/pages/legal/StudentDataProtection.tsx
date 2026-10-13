export default function StudentDataProtection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Student Data Protection</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 15, 2026</p>

        <div className="mt-10 space-y-10">
          <div>
            <h2 className="text-xl font-semibold">1. Our role</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              EduSphere USA operates as a school service provider. Schools that license the platform
              retain ownership and control of their students' education records, and we process
              student data only to provide the contracted readiness services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. FERPA-conscious practices</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We handle student education records in a manner consistent with the Family Educational
              Rights and Privacy Act (FERPA). Access to student records is limited to authorized
              school personnel and to EduSphere USA staff with a legitimate operational need.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. What student data we process</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The platform processes student account details (name, email), enrollment and track
              assignments, assessment responses and scores, practice activity, module completion, and
              computed readiness scores. We collect only what the readiness workflow requires.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. What we never do</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We do not sell student data, use it for advertising, build marketing profiles, or share
              it with third parties except service providers necessary to operate the platform (such
              as payment processing), each bound by confidentiality obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. Readiness data is instructional, not a guarantee</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Readiness scores and reports support schools with readiness tracking but do not
              guarantee certification exam passage. All practice content on the platform is original
              and credential-aligned, with no affiliation or endorsement by any certification
              provider.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">6. Security safeguards</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Student data is protected with encryption in transit, role-based access controls, and
              audit logging of administrative actions. Access within a school is scoped by role —
              students, instructors, and administrators each see only what their role requires.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">7. Retention and deletion</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Student data is retained for the duration of the school's license. At the end of the
              relationship, or upon a school's verified request, student data is exported or deleted
              within a reasonable period, subject to legal obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">8. Contact</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              School administrators with questions about student data handling, data processing
              agreements, or deletion requests can contact privacy@edusphereusa.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
