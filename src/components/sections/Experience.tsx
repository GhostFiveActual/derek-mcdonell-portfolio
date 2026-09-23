import { experience } from '../../data/experience'

export function ExperienceSection() {
  return (
    <section
      className="section experience-section"
      id="experience"
    >
      <header className="section-heading">
        <p className="section-kicker">
          EXPERIENCE
        </p>

        <h2>
          Professional Experience
        </h2>

        <p className="section-intro">
          Government IT, higher education,
          independent contracting, sales,
          construction, and field operations.
        </p>
      </header>

      <div className="experience-list">
        {experience.map((item) => (
          <article
            className="experience-row"
            key={`${item.organization}-${item.period}`}
          >
            <div className="experience-period">
              {item.period}
            </div>

            <div className="experience-position">
              <h3>
                {item.organization}
              </h3>

              <strong>
                {item.role}
              </strong>
            </div>

            <div className="experience-detail">
              <p>
                {item.summary}
              </p>

              <div className="skill-tags">
                {item.evidence.map((entry) => (
                  <span key={entry}>
                    {entry}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
