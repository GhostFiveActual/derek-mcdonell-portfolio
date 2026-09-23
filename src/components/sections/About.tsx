const facts = [
  {
    value: '12,000+',
    label: 'users in the current support environment',
  },
  {
    value: '40+',
    label: 'county departments supported',
  },
  {
    value: 'A+',
    label: 'CompTIA certified',
  },
  {
    value: 'A.S.',
    label: 'Fire Science · 2025',
  },
]

export function About() {
  return (
    <section
      className="section about-section"
      id="about"
    >
      <header className="section-heading">
        <p className="section-kicker">
          ABOUT
        </p>

        <h2>
          Technical experience across support,
          operations, and field environments.
        </h2>

        <p className="section-intro">
          My background includes field engineering,
          independent contracting, higher-education
          support, and local-government IT.
        </p>
      </header>

      <div className="about-layout">
        <div className="about-copy">
          <p>
            I currently work in deskside support
            for Montgomery County Government,
            supporting endpoints, user access,
            deployments, hardware, software,
            networking, and incident resolution.
          </p>

          <p>
            Before moving into government IT, I
            worked in higher-education support,
            independent contracting, customer-facing
            sales, and construction field operations.
            Those environments required different
            combinations of troubleshooting,
            coordination, documentation, and
            technical problem solving.
          </p>

          <p>
            My technical interests include systems,
            networking, hardware, security, and
            scripting. I use this portfolio to
            document the work and experience behind
            those areas as the record develops.
          </p>
        </div>

        <aside
          className="about-snapshot"
          aria-label="Professional snapshot"
        >
          <div className="snapshot-heading">
            <span>PROFESSIONAL SNAPSHOT</span>
            <strong>Verified experience</strong>
          </div>

          <div className="about-facts">
            {facts.map((fact) => (
              <div
                className="about-fact"
                key={fact.label}
              >
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
