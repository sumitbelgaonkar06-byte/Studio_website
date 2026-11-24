import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES, STUDIO_INFO } from '../data/studioData';
import PageHeading from '../components/PageHeading';
import '../styles/Services.css';

export default function Services() {
  const processSteps = [
    {
      num: "01",
      title: "Consultation & Brief",
      desc: "We discuss your routines, spatial requirements, budget parameters, and stylistic aspirations to craft a clear design roadmap."
    },
    {
      num: "02",
      title: "Concept & Layouts",
      desc: "Translating the brief into volumetric studies, 2D floor plans, spatial circulation flows, and tactile material mood boards."
    },
    {
      num: "03",
      title: "Technical Drawings",
      desc: "Producing precise architectural drawing sets, structural coordination, joinery shop drawings, and MEP service integrations."
    },
    {
      num: "04",
      title: "Turnkey & Supervision",
      desc: "Guiding the project through rigorous site execution, contractor management, quality checks, and final snag-free handover."
    }
  ];

  return (
    <>
      {/* Editorial Page Hero */}
      <PageHeading
        eyebrow="Our Capabilities"
        title="Architecture & Interior Services Tailored to How You Live"
        description="From conceptual massing to turnkey site coordination, Studio 711 delivers thoughtful architectural planning and interior execution across Lucknow, Gurgaon, and beyond."
      />

      {/* Intro Stats Bar */}
      <div className="services-intro-bar">
        <div className="container services-intro-grid">
          <div className="services-intro-stat">
            <span className="services-intro-num">06</span>
            <span className="services-intro-label">Core Design Disciplines</span>
          </div>
          <div className="services-intro-stat">
            <span className="services-intro-num">100%</span>
            <span className="services-intro-label">Context-Driven &amp; Bespoke</span>
          </div>
          <div className="services-intro-stat">
            <span className="services-intro-num">End-to-End</span>
            <span className="services-intro-label">Concept Through Turnkey Execution</span>
          </div>
        </div>
      </div>

      {/* Alternating Services Layout */}
      <section className="container services-list-container">
        {SERVICES.map((srv, idx) => {
          const isReverse = idx % 2 === 1;
          return (
            <div
              key={srv.id}
              className={`service-item-row ${isReverse ? 'reverse' : ''}`}
              id={srv.id}
            >
              {/* Content Column */}
              <div className="service-content-col">
                <span className="service-step-index">0{idx + 1} &mdash; SERVICE</span>
                <h2 className="service-item-title">{srv.title}</h2>
                <p className="service-item-short">{srv.shortDescription}</p>
                <p className="service-item-body">{srv.fullDescription}</p>

                {/* Deliverables / Scope */}
                <div className="service-deliverables-box">
                  <h4 className="service-deliverables-title">Key Scope &amp; Deliverables</h4>
                  <ul className="service-deliverables-list">
                    {srv.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="service-deliverable-item">
                        <Check size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link to="/contact" className="btn btn-secondary">
                    Inquire About {srv.title} <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Media Column */}
              <div className="service-media-col">
                <div className="service-media-frame">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="service-media-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Design Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-header">
            <span className="eyebrow">The Studio 711 Methodology</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', marginBottom: '1rem' }}>
              How We Work With You
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)' }}>
              A disciplined four-stage trajectory ensuring transparency, artistic integrity, and on-time project handover.
            </p>
          </div>

          <div className="process-timeline-grid">
            {processSteps.map((step) => (
              <div key={step.num} className="process-step-card">
                <span className="process-step-num">{step.num}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <span className="eyebrow cta-banner-eyebrow">Ready to start?</span>
          <h2 className="cta-banner-title">
            Let's discuss the architectural possibilities of your space.
          </h2>
          <p className="cta-banner-sub">
            Reach out to our principal associates for an initial design consultation and feasibility review.
          </p>
          <Link to="/contact" className="btn btn-accent">
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
