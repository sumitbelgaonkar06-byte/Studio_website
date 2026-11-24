import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { STUDIO_INFO, TEAM_MEMBERS, PHILOSOPHY_PILLARS } from '../data/studioData';
import PageHeading from '../components/PageHeading';
import TeamCard from '../components/TeamCard';
import '../styles/About.css';

export default function About() {
  return (
    <>
      {/* Editorial Page Hero */}
      <PageHeading
        eyebrow="About Studio 711"
        title="We design spaces that work for the people who use them."
        description="Studio 711 is an architecture and interior design studio established in 2023, based in Lucknow, India. We work with clients who value thoughtful design, quiet material honesty, and meticulous spatial execution."
      />

      {/* 1. STUDIO INTRODUCTION & PHILOSOPHY */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <span className="eyebrow">Our Ethos</span>
              <blockquote className="about-quote">
                "Our approach is grounded in practicality. Good design emerges from understanding how people actually live."
              </blockquote>
              <p className="about-lead-para">
                We believe architecture is not about grand gestures or chasing fleeting trends. Instead, we focus on creating environments that are calm, deeply functional, and built to last.
              </p>
              <p className="about-secondary-para">
                Every project begins with listening. We take time to understand your routines, your daily rituals, your spatial constraints, and your long-term aspirations. From there, we develop designs that respond directly to your brief: nothing more, nothing less.
              </p>
              <div style={{ marginTop: '2.5rem' }}>
                <Link to="/contact" className="btn btn-primary">
                  Start a Collaboration <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="about-intro-media">
              <img
                src="/images/general/about-hero.png"
                alt="Studio 711 Architectural Design Space"
                className="about-hero-image"
                loading="lazy"
              />
              <span className="about-media-caption">
                Material harmony &bull; Tactile textures &bull; Considered proportion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DESIGN PHILOSOPHY PILLARS */}
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-header">
            <span className="eyebrow">Our Framework</span>
            <h2 className="philosophy-title">Design Philosophy</h2>
            <p style={{ fontSize: '1.1rem' }}>
              Five core principles guide our studio from initial volumetric massing through final on-site detail resolution.
            </p>
          </div>

          <div className="philosophy-grid">
            {PHILOSOPHY_PILLARS.map((pillar) => (
              <div key={pillar.number} className="philosophy-card">
                <span className="philosophy-number">{pillar.number}</span>
                <h3 className="philosophy-card-title">{pillar.title}</h3>
                <p className="philosophy-card-desc">{pillar.description}</p>
              </div>
            ))}

            {/* Sixth complementary highlight card */}
            <div className="philosophy-card" style={{ backgroundColor: 'var(--color-bg-dark)', color: '#FAF5F2' }}>
              <span className="philosophy-number" style={{ color: '#E2D8D5' }}>06</span>
              <h3 className="philosophy-card-title" style={{ color: '#FAF5F2' }}>Enduring Value</h3>
              <p className="philosophy-card-desc" style={{ color: 'rgba(250, 245, 242, 0.8)' }}>
                By pairing timeless architectural geometry with durable, authentic materials, we create residences and interiors that grow more meaningful over generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TEAM SECTION */}
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <span className="eyebrow">The People Behind Studio 711</span>
            <h2 className="team-title">Our Studio Team</h2>
            <p className="team-subtitle">
              A collaborative team of architects, interior specialists, Vastu consultants, and technical managers dedicated to thoughtful spatial craft.
            </p>
          </div>

          {/* Strict Team Grid: 3 per row on desktop, 2 on tablet, 1-2 on mobile */}
          <div className="team-grid">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. STUDIO STATS & LOCATION HIGHLIGHT */}
      <section className="section section-border-top" style={{ backgroundColor: 'var(--color-bg-card)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <span className="eyebrow">Studio Location</span>
          <h2 style={{ marginBottom: '1.25rem' }}>Based in Lucknow, Working Pan-India</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Our central studio is located in Chinhat, Lucknow, serving residential and commercial clients across Uttar Pradesh, Delhi NCR, and beyond.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/projects" className="btn btn-secondary">
              Explore Our Portfolio
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Visit or Contact Our Studio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
