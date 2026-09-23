const areas = [
  {
    title: 'Systems & Automation',
    detail:
      'Infrastructure, scripting, endpoint systems, and software work.',
  },
  {
    title: 'Hardware & Networking',
    detail:
      'Computers, networking equipment, electronics, and physical builds.',
  },
  {
    title: 'Field Technology',
    detail:
      'Technical systems shaped by physical environments and real-world constraints.',
  },
]

export function SelectedWork() {
  return (
    <section
      className="section archive-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <header className="section-heading">
        <p className="section-kicker">
          PROJECTS
        </p>

        <h2 id="projects-title">
          Project Archive
        </h2>

        <p className="section-intro">
          I am documenting projects as complete
          case studies rather than listing work
          without enough context. Each record will
          cover the problem, constraints, build
          decisions, revisions, and results.
        </p>
      </header>

      <div className="project-archive">
        <div className="project-archive-intro">
          <span className="status-dot" />

          <strong>
            Case studies are being prepared.
          </strong>

          <p>
            Until the supporting material is ready,
            this portfolio focuses on verified
            professional experience and technical
            capability.
          </p>
        </div>

        <div className="project-area-grid">
          {areas.map((area) => (
            <article
              className="project-area-card"
              key={area.title}
            >
              <span>
                In documentation
              </span>

              <h3>{area.title}</h3>

              <p>{area.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SelectedWork
