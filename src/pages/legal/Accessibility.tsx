export default function Accessibility() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Accessibility Statement</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 15, 2026</p>

        <div className="mt-10 space-y-10">
          <div>
            <h2 className="text-xl font-semibold">1. Our commitment</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              EduSphere USA is committed to making our certification readiness platform accessible to
              all users, including students and instructors with disabilities. We believe every
              learner should be able to use the tools their school provides.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. Conformance target</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We design and develop the platform to conform to the Web Content Accessibility
              Guidelines (WCAG) 2.1 at Level AA. Accessibility is treated as an ongoing requirement,
              not a one-time project.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. What we do</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Our practices include semantic HTML structure, keyboard-navigable interfaces, visible
              focus indicators, sufficient color contrast, text alternatives for meaningful graphics,
              and form fields with explicit labels. Assessments and dashboards are designed to be
              operable without a mouse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. Assessment experience</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Diagnostics, knowledge checks, practice questions, and timed tests are built to work
              with screen readers and keyboard navigation. Schools can make local accommodations —
              such as extended time — within their own policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. Known limitations</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Some data visualizations, such as trend charts, may present information graphically.
              We provide the underlying values in adjacent text or tabular form wherever practical,
              and we continue to improve these areas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">6. Feedback</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We welcome accessibility feedback from schools, instructors, and students. If you
              encounter a barrier, contact us at accessibility@edusphereusa.com and include the page
              or feature involved. We aim to respond to accessibility reports within two business
              days.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
