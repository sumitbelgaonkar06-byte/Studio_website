import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Tag,
  Maximize2,
  Calendar,
  CheckCircle,
  ArrowRight,
  Filter
} from 'lucide-react';
import { PROJECTS } from '../data/studioData';
import PageHeading from '../components/PageHeading';
import Lightbox from '../components/Lightbox';
import '../styles/Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(PROJECTS[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filters = ['All', 'Residential', 'Interior'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filterCategory === activeFilter);

  const handleOpenLightbox = (project, imgIndex = 0) => {
    setCurrentProject(project);
    setActiveImageIndex(imgIndex);
    setLightboxOpen(true);
  };

  // Asymmetric grid spans for a rich editorial layout
  const getSpanClass = (index) => {
    const layout = [
      'span-12', // First image: full wide feature
      'span-6',  // Second image: half
      'span-6',  // Third image: half
      'span-7',  // Fourth image: 7/12
      'span-5'   // Fifth image: 5/12
    ];
    return layout[index % layout.length];
  };

  return (
    <>
      {/* Page Hero */}
      <PageHeading
        eyebrow="Selected Works"
        title="Architecture & Interior Design Portfolio"
        description="A curated documentation of completed commissions by Studio 711. Each project embodies our dedication to context, tectonic clarity, tactile materials, and spatial serenity."
      />

      <section className="section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="projects-filter-bar">
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px', marginRight: '8px' }}>
              <Filter size={14} /> Filter Typology:
            </span>
            {filters.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Showcase */}
          <div className="projects-showcase-list">
            {filteredProjects.map((project) => (
              <article key={project.id} id={project.slug} className="project-block">
                {/* Project Header Info */}
                <div className="project-header-row">
                  <div>
                    <div className="project-meta-strip">
                      <span className="project-category-tag">
                        {project.category}
                      </span>
                      <span className="project-location-tag">
                        <MapPin size={14} /> {project.location}
                      </span>
                      <span className="project-location-tag">
                        <Calendar size={14} /> {project.year}
                      </span>
                    </div>

                    <h2 className="project-title-large">{project.title}</h2>
                    <p className="project-subtitle">{project.subtitle}</p>

                    {/* Quick Specs Box */}
                    <div className="project-details-grid">
                      {project.details.map((item, idx) => (
                        <div key={idx} className="project-detail-item">
                          <span className="project-detail-label">{item.label}</span>
                          <span className="project-detail-val">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Description Column */}
                  <div className="project-desc-col">
                    <span className="eyebrow">Project Context &amp; Intent</span>
                    <p className="project-overview-text">{project.overview}</p>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      style={{ alignSelf: 'flex-start' }}
                      onClick={() => handleOpenLightbox(project, 0)}
                    >
                      Open Full-Screen Gallery ({project.gallery.length} Views) <Maximize2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Premium Asymmetric Gallery Grid */}
                <div className="project-gallery-masonry">
                  {project.gallery.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      className={`gallery-item ${getSpanClass(imgIdx)}`}
                      onClick={() => handleOpenLightbox(project, imgIdx)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${img.caption}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleOpenLightbox(project, imgIdx);
                        }
                      }}
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="gallery-item-image"
                        loading="lazy"
                      />

                      <div className="gallery-overlay-badge">
                        <span className="gallery-zoom-icon">
                          <Maximize2 size={18} />
                        </span>
                        <h4 className="gallery-caption-title">{img.caption}</h4>
                        <span className="gallery-caption-sub">{img.description}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Architectural Features Box */}
                {project.features && (
                  <div className="project-features-box">
                    <h4 className="project-features-title">Design Highlights &amp; Material Craft</h4>
                    <div className="project-features-grid">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="project-feature-point">
                          <CheckCircle size={18} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Inquire CTA */}
      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <span className="eyebrow cta-banner-eyebrow">Commission a Space</span>
          <h2 className="cta-banner-title">
            Discuss your upcoming residence or interior project.
          </h2>
          <p className="cta-banner-sub">
            From sites in Lucknow to residences across Gurgaon and NCR, our design studio brings quiet precision to every architectural square foot.
          </p>
          <Link to="/contact" className="btn btn-accent">
            Get In Touch With Our Studio <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Global Interactive Lightbox Modal */}
      {currentProject && (
        <Lightbox
          isOpen={lightboxOpen}
          images={currentProject.gallery}
          currentIndex={activeImageIndex}
          projectTitle={currentProject.title}
          onClose={() => setLightboxOpen(false)}
          onNext={() =>
            setActiveImageIndex((prev) => (prev + 1) % currentProject.gallery.length)
          }
          onPrev={() =>
            setActiveImageIndex(
              (prev) => (prev - 1 + currentProject.gallery.length) % currentProject.gallery.length
            )
          }
        />
      )}
    </>
  );
}
