import {
  BadgeCheck,
  Binary,
  GraduationCap,
  Network,
  Server,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

import { credentialGroups } from '../../data/credentials'

const coreTools = [
  'Active Directory',
  'Azure AD',
  'ServiceNow',
  'Microsoft 365',
  'Bomgar',
  'Ivanti VPN',
  'TOPdesk',
  'PowerShell',
  'Wireshark',
]

function iconFor(category: string): LucideIcon {
  if (category === 'SYSTEMS & ADMINISTRATION') {
    return Server
  }

  if (
    category ===
    'SERVICE & ENDPOINT OPERATIONS'
  ) {
    return Wrench
  }

  if (category === 'NETWORKING') {
    return Network
  }

  if (category === 'CYBERSECURITY') {
    return ShieldCheck
  }

  if (
    category ===
    'SCRIPTING, DATA & TOOLS'
  ) {
    return Binary
  }

  if (category === 'EDUCATION') {
    return GraduationCap
  }

  return BadgeCheck
}

export function Proof() {
  return (
    <section
      className="section proof-section"
      id="systems"
      aria-labelledby="systems-title"
    >
      <div className="systems-intro-grid">
        <header className="systems-heading">
          <p className="section-kicker">
            SYSTEMS / TOOLKIT
          </p>

          <h2 id="systems-title">
            Systems &
            <br />
            Technical Stack
          </h2>

          <p className="section-intro">
            Enterprise platforms, endpoint
            tools, operating systems,
            networking technologies, security
            tooling, and scripting used across
            Derek's technical background.
          </p>

          <div className="systems-context">
            <span>
              SUPPORT
            </span>

            <span>
              IDENTITY
            </span>

            <span>
              ENDPOINT
            </span>

            <span>
              NETWORK
            </span>

            <span>
              SECURITY
            </span>
          </div>
        </header>

        <figure
          className="systems-map"
          aria-label="Abstract system map combining network topology and terrain."
        >
          <div className="systems-map-header">
            <span>
              INFRASTRUCTURE MAP
            </span>

            <span>
              IDENTITY / ENDPOINT / NETWORK
            </span>
          </div>

          <svg
            viewBox="0 0 760 310"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="systems-grid"
                width="38"
                height="38"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M38 0H0V38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.6"
                />
              </pattern>

              <radialGradient
                id="systems-glow"
                cx="52%"
                cy="48%"
                r="42%"
              >
                <stop
                  offset="0%"
                  stopColor="#c8272d"
                  stopOpacity="0.18"
                />

                <stop
                  offset="100%"
                  stopColor="#c8272d"
                  stopOpacity="0"
                />
              </radialGradient>
            </defs>

            <rect
              width="760"
              height="310"
              fill="url(#systems-grid)"
              className="systems-grid-pattern"
            />

            <circle
              cx="405"
              cy="157"
              r="155"
              fill="url(#systems-glow)"
            />

            <g className="systems-contours">
              <path d="M0 56 C86 22 157 39 226 20 C302 0 368 29 438 12 C518 -6 590 20 660 7 C703 -2 730 2 760 0" />
              <path d="M0 91 C84 57 157 71 230 51 C305 31 376 56 448 41 C526 24 596 45 666 34 C709 27 735 28 760 25" />
              <path d="M0 126 C91 92 163 106 239 86 C315 67 387 92 461 77 C538 60 608 80 678 69 C717 62 739 63 760 60" />
            </g>

            <g className="systems-ridge">
              <path d="M0 268 L87 217 L144 240 L235 171 L305 226 L394 143 L479 226 L553 182 L646 245 L704 207 L760 236" />
            </g>

            <g className="systems-network-links">
              <path d="M389 161 L214 114" />
              <path d="M389 161 L558 101" />
              <path d="M389 161 L275 249" />
              <path d="M389 161 L529 241" />
              <path d="M389 161 L389 65" />
            </g>

            <g className="systems-network-nodes">
              <circle
                cx="389"
                cy="161"
                r="9"
              />

              <circle
                cx="214"
                cy="114"
                r="5"
              />

              <circle
                cx="558"
                cy="101"
                r="5"
              />

              <circle
                cx="275"
                cy="249"
                r="5"
              />

              <circle
                cx="529"
                cy="241"
                r="5"
              />

              <circle
                cx="389"
                cy="65"
                r="5"
              />
            </g>

            <path
              className="systems-signal-path"
              d="M214 114 C291 124 333 145 389 161 C460 182 512 156 558 101"
            />
          </svg>

          <figcaption>
            <strong>
              Enterprise systems are connected
              systems.
            </strong>

            <span>
              Accounts · endpoints · service
              management · network access
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="core-tooling">
        <div className="core-tooling-label">
          <span>
            CORE TOOLING
          </span>

          <strong>
            Platforms used across support
            environments
          </strong>
        </div>

        <div className="core-tooling-items">
          {coreTools.map((tool) => (
            <span key={tool}>
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="credential-grid">
        {credentialGroups.map((group) => {
          const Icon = iconFor(
            group.category
          )

          return (
            <article
              className="credential-card"
              key={group.category}
            >
              <header className="credential-card-header">
                <span className="credential-icon">
                  <Icon
                    size={24}
                    aria-hidden="true"
                  />
                </span>

                <h3>
                  {group.category}
                </h3>
              </header>

              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
