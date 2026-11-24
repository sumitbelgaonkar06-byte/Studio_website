import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Sofa,
  Hammer,
  ClipboardList,
  LayoutGrid,
  CheckCircle2
} from 'lucide-react';
import { STUDIO_INFO, PROJECTS, SERVICES } from '../data/studioData';
import ProjectCard from '../components/ProjectCard';
import Lightbox from '../components/Lightbox';
import '../styles/Home.css';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  const serviceIcons = {
    'architectural-design': <Building2 className="service-preview-icon" />,
    'interior-design': <Sofa className="service-preview-icon" />,
    'residential-design': <Building2 className="service-preview-icon" />,
    'commercial-design': <LayoutGrid className="service-preview-icon" />,
    'renovation-restoration': <Hammer className="service-preview-icon" />,
    'turnkey-solutions': <CheckCircle2 className="service-preview-icon" />
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <img
            src="/images/projects/resident-sector-28/cover.png"
            alt="Studio 711 Architecture"
            className="hero-bg-img"
          />
          <div className="hero-bg-overlay" />
        </div>

        <div className="container hero-content animate-fade-in">
          <span className="eyebrow hero-eyebrow">
            STUDIO 711 &bull; LUCKNOW, INDIA
          </span>
          <h1 className="hero-title">
            Architecture &amp; Interiors,<br />
            Thoughtfully Designed.
          </h1>
          <p className="hero-description">
            {STUDIO_INFO.subTagline}
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-accent">
              Explore Our Projects <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline-white">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT INTRODUCTION */}
      <section className="section">
        <div className="container">
          <div className="home-about-grid">
            <div className="home-about-text-col">
              <span className="eyebrow">About Studio 711</span>
              <h2 className="home-about-lead">
                Spaces that work before they impress.
              </h2>
              <p className="home-about-body">
                Studio 711 is an architecture and interior design studio based in Lucknow, India.
                We create thoughtful spaces that balance functionality, aesthetics and the everyday
                experiences of the people who inhabit them.
              </p>
              <p className="home-about-body" style={{ color: 'var(--color-text-muted)' }}>
                Our approach is rooted in understanding how people truly live—their morning rituals,
                circulation patterns, and desire for light, material warmth, and enduring serenity.
              </p>
              <Link to="/about" className="btn btn-text">
                Explore More About Us <ArrowRight size={15} />
              </Link>
            </div>

            <div className="home-about-media-wrapper">
              <img
                src="/images/general/about-hero.png"
                alt="Studio 711 Architectural Interior"
                className="home-about-img"
                loading="lazy"
              />
              <div className="home-about-badge">
                <span className="home-about-badge-year">EST. {STUDIO_INFO.establishedYear}</span>
                <span className="home-about-badge-text">Lucknow &bull; NCR &bull; Pan-India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS */}
      <section className="section section-border-top" style={{ backgroundColor: 'var(--color-bg-card)' }}>
        <div className="container">
          <div className="featured-header">
            <div>
              <span className="eyebrow">Selected Portfolio</span>
              <h2>Featured Projects</h2>
            </div>
            <Link to="/projects" className="btn btn-secondary">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="featured-projects-grid">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={handleOpenProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section className="section section-border-top">
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <span className="eyebrow">What We Offer</span>
            <h2>Our Architectural Services</h2>
            <p style={{ marginTop: '0.75rem', fontSize: '1.1rem' }}>
              We provide end-to-end design and supervision capabilities across residential and commercial domains.
            </p>
          </div>

          <div className="home-services-grid">
            {SERVICES.slice(0, 6).map((srv) => (
              <div key={srv.id} className="service-preview-card">
                {serviceIcons[srv.id] || <Building2 className="service-preview-icon" />}
                <h3 className="service-preview-title">{srv.title}</h3>
                <p className="service-preview-desc">{srv.shortDescription}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <Link to="/services" className="btn btn-primary">
              View Detailed Services &amp; Workflow <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CONTACT CTA */}
      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <span className="eyebrow cta-banner-eyebrow">Start Your Project</span>
          <h2 className="cta-banner-title">
            Have a project in mind?<br />
            Let's create something meaningful.
          </h2>
          <p className="cta-banner-sub">
            Whether you are conceptualizing a new residence, re-imagining an interior, or seeking architectural guidance in Lucknow or NCR, we are here to listen.
          </p>
          <Link to="/contact" className="btn btn-accent">
            Start a Conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* Gallery Lightbox */}
      {selectedProject && (
        <Lightbox
          isOpen={lightboxOpen}
          images={selectedProject.gallery}
          currentIndex={lightboxIndex}
          projectTitle={selectedProject.title}
          onClose={() => setLightboxOpen(false)}
          onNext={() =>
            setLightboxIndex((prev) => (prev + 1) % selectedProject.gallery.length)
          }
          onPrev={() =>
            setLightboxIndex(
              (prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length
            )
          }
        />
      )}
    </>
  );
}
