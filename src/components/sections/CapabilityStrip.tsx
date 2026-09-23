import { site } from '../../data/site'

export function CapabilityStrip() {
  return (
    <section
      className="capability-strip"
      id="technical-focus"
      aria-label="Technical focus"
    >
      <strong>Technical focus</strong>

      <div className="capability-list">
        {site.domains.map((domain) => (
          <span key={domain}>
            {domain}
          </span>
        ))}
      </div>
    </section>
  )
}
