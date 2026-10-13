export default function Terms() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 15, 2026</p>

        <div className="mt-10 space-y-10">
          <div>
            <h2 className="text-xl font-semibold">1. The service</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              EduSphere USA provides a certification readiness platform licensed to schools. The
              platform includes diagnostics, study plans, lessons, practice questions, timed practice
              tests, instructor dashboards, and readiness reporting for healthcare credential tracks.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. School licenses and seats</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Licenses are sold to schools on an annual basis and include a defined number of student
              seats and credential tracks. A seat is consumed when a student is enrolled in a track.
              Schools are responsible for managing their users and seat allocation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. No guarantee of exam passage</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              EduSphere USA supports schools with readiness tracking, diagnostics, and guided
              practice, but does not guarantee that any student will pass a certification exam.
              Certification decisions are made solely by the relevant credentialing provider, and
              readiness scores are an instructional tool, not a prediction guarantee.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. Original, credential-aligned content</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              All practice content on the platform is original and credential-aligned, written by our
              curriculum team. EduSphere USA is not affiliated with, sponsored by, or endorsed by any
              certification provider. References to credential competencies describe alignment of our
              original content, not official exam material.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. Acceptable use</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Schools and their users agree to use the platform only for legitimate educational
              purposes, to keep credentials confidential, and not to copy, resell, or redistribute
              platform content outside their licensed organization.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">6. Payment and invoicing</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Licenses may be purchased by card at checkout or by invoice / purchase order. Card
              payments are processed by Stripe. Organizations purchasing by invoice are activated
              after payment or approval. Annual licenses renew unless canceled before the renewal
              date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">7. Student data</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Schools control their student data. EduSphere USA processes student data as a school
              service provider, consistent with FERPA and our Privacy Policy and Student Data
              Protection statement. We do not sell student data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">8. Service availability</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We work to keep the platform available and reliable, but the service is provided "as is"
              without warranties of uninterrupted availability. Scheduled maintenance is announced in
              advance where practical.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">9. Changes to these terms</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We may update these terms from time to time. Material changes will be communicated to
              school administrators before they take effect. Continued use of the platform after the
              effective date constitutes acceptance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
