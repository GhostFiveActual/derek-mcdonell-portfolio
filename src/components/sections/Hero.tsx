import {
  ArrowDownRight,
  ArrowUpRight,
  Cpu,
  HardDrive,
  Network,
  ShieldCheck,
} from 'lucide-react'

import { site } from '../../data/site'
import { SystemGraphic } from '../graphics/SystemGraphic'

const focusAreas = [
  {
    icon: Cpu,
    label: 'IT Support & Systems',
  },
  {
    icon: Network,
    label: 'Networking & Infrastructure',
  },
  {
    icon: HardDrive,
    label: 'Hardware & Field Technology',
  },
  {
    icon: ShieldCheck,
    label: 'Security & Technical Operations',
  },
]

export function Hero() {
  return (
    <section
      className="hero"
      id="top"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <p className="hero-overline">
          IT SUPPORT · SYSTEMS · NETWORKING · HARDWARE
        </p>

        <h1 id="hero-title">
          <span className="hero-first-name">
            Derek
          </span>

          <span className="hero-last-name">
            McDonell
          </span>
        </h1>

        <p className="thesis">
          {site.thesis}
        </p>

        <p className="hero-summary">
          IT support professional with experience
          supporting government and higher-education
          environments. My work spans endpoint
          operations, identity and access, deployment,
          networking, hardware, incident resolution,
          and technical troubleshooting.
        </p>

        <div className="hero-domain-grid">
          {focusAreas.map(({ icon: Icon, label }) => (
            <div
              className="hero-domain"
              key={label}
            >
              <Icon
                size={17}
                aria-hidden="true"
              />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <a
            className="button button-primary"
            href="#experience"
          >
            View experience
            <ArrowDownRight
              size={17}
              aria-hidden="true"
            />
          </a>

          <a
            className="button button-secondary"
            href="#projects"
          >
            Project archive
            <ArrowUpRight
              size={16}
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="hero-facts">
          <div>
            <span>Current role</span>
            <strong>
              Government IT / Deskside Support
            </strong>
          </div>

          <div>
            <span>Certification</span>
            <strong>CompTIA A+</strong>
          </div>

          <div>
            <span>Professional development</span>
            <strong>
              Security+ in progress
            </strong>
          </div>
        </div>
      </div>

      <SystemGraphic />
    </section>
  )
}
