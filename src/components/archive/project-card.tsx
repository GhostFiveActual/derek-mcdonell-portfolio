import { FC } from 'react';

interface Project {
  id: string;
  title: string;
  date: string;
  tags: string[];
  status: 'active' | 'archived';
  description: string;
}

const ProjectCard: FC<{ project: Project }> = ({ project }) => (
  <div className="project-card">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="tags">
      {project.tags.map(tag => (
        <span key={tag} className="tag">{tag}</span>
      ))}
    </div>
  </div>
);

export default ProjectCard;