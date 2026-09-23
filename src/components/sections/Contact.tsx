import { ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
    >
      <div className="contact-heading">
        <p className="section-kicker">
          CONTACT
        </p>

        <h2>
          Get in touch
        </h2>
      </div>

      <div className="contact-copy">
        <p>
          Open to technical roles, project work,
          and conversations involving IT
          operations, systems, networking,
          hardware, security, infrastructure,
          or field technology.
        </p>

        <div className="contact-actions">
          <a
            className="button button-primary"
            href="mailto:DerekMcdonell136@gmail.com"
          >
            Email Derek
            <ArrowUpRight
              size={16}
              aria-hidden="true"
            />
          </a>

          <a
            className="button button-secondary"
            href="tel:+15713587773"
          >
            571-358-7773
          </a>

          <a
            className="button button-secondary"
            href="https://www.linkedin.com/in/derek-mcdonell-3674b1262/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <ArrowUpRight
              size={16}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
