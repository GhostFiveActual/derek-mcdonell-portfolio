import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../types/content'

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-index">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span>{project.id}</span>
      </div>

      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <ul className="evidence-list" aria-label={`${project.name} evidence`}>
          {project.evidence.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="project-status">
        <span>{project.disclosure}</span>
        <ArrowUpRight aria-hidden="true" />
      </div>
    </article>
  )
}
