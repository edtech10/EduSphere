export default function Privacy() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 15, 2026</p>

        <div className="mt-10 space-y-10">
          <div>
            <h2 className="text-xl font-semibold">1. Overview</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              EduSphere USA provides certification readiness systems to schools. This Privacy Policy
              explains how we collect, use, and protect information when schools, instructors, and
              students use our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. Schools control student data</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Schools that license EduSphere USA retain control of their students' education records.
              The platform acts as a school service provider, processing student data only on behalf
              of, and at the direction of, the school. We handle student information in a manner
              consistent with the Family Educational Rights and Privacy Act (FERPA).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Information we collect</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We collect account information (name, email, role), school organization details, and
              learning activity data such as assessment results, practice question responses, module
              completion, and readiness scores. Demo and invoice request forms collect contact
              information so our team can respond.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. How we use information</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We use information to operate the platform: generating study plans, computing readiness
              scores, producing instructor and administrator reports, processing subscription
              payments, and providing support. We do not use student data for advertising.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. No sale of student data</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We do not sell student data — or any personal data — to third parties. Student
              information is never shared with advertisers or data brokers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">6. Payment information</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              EduSphere USA does not store credit card data. Card payments are processed by Stripe;
              card details are transmitted directly to Stripe and never touch our servers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">7. Data retention and deletion</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We retain school and student data for the duration of the school's license. Schools may
              request export or deletion of their data at any time by contacting us; deletion requests
              are honored within a reasonable period, subject to legal obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">8. Security</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We apply industry-standard administrative, technical, and physical safeguards, including
              encryption in transit, access controls, and audit logging of administrative actions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">9. Contact</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Questions about this policy or your data can be directed to privacy@edusphereusa.com.
              Schools with data processing agreement requirements should contact our licensing team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
