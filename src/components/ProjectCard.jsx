import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <article
      className="project-card"
      onClick={() => onSelect && onSelect(project)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect && onSelect(project);
        }
      }}
      aria-label={`View project details for ${project.title}`}
    >
      <div className="project-card-media">
        <img
          src={project.coverImage}
          alt={project.title}
          className="project-card-img"
          loading="lazy"
        />
        <span className="project-card-category-badge">
          {project.filterCategory}
        </span>
      </div>

      <div className="project-card-info">
        <span className="project-card-location">
          <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
          {project.location}
        </span>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">
          {project.subtitle || project.category}
        </p>

        <div className="project-card-footer">
          <span>Explore Gallery ({project.gallery.length} Images)</span>
          <ArrowRight size={18} className="project-card-arrow" />
        </div>
      </div>
    </article>
  );
}
