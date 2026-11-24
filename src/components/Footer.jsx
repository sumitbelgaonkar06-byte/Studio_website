import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* COLUMN 1 — BRAND */}
          <div className="footer-col">
            <h4 className="footer-brand-title">{STUDIO_INFO.name}</h4>
            <p className="footer-brand-tagline">
              Architecture &amp; Interior Design &mdash; Lucknow, India.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
              Considered spaces shaped by context, craft, and silence.
            </p>
            <span className="footer-est">EST. {STUDIO_INFO.establishedYear}</span>
          </div>

          {/* COLUMN 2 — NAVIGATE */}
          <div className="footer-col">
            <span className="footer-heading">Navigate</span>
            <ul className="footer-nav-list">
              <li>
                <Link to="/" className="footer-nav-link">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="footer-nav-link">Projects</Link>
              </li>
              <li>
                <Link to="/about" className="footer-nav-link">About</Link>
              </li>
              <li>
                <Link to="/services" className="footer-nav-link">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-nav-link">Contact</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — CONTACT */}
          <div className="footer-col">
            <span className="footer-heading">Contact</span>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Phone size={16} />
                <a href={`tel:${STUDIO_INFO.phoneRaw}`}>{STUDIO_INFO.phone}</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <a href={`mailto:${STUDIO_INFO.email}`}>{STUDIO_INFO.email}</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>
                  {STUDIO_INFO.address.line1},<br />
                  {STUDIO_INFO.address.line2}, {STUDIO_INFO.address.city},<br />
                  {STUDIO_INFO.address.state}, {STUDIO_INFO.address.country}.
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="footer-social-links">
              <a
                href={STUDIO_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Studio 711 on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={STUDIO_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Studio 711 on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* COLUMN 4 — FIND US (Google Maps Embed) */}
          <div className="footer-col">
            <span className="footer-heading">Find Us</span>
            <div className="footer-map-wrapper">
              <iframe
                title="Studio 711 Office Map Footer"
                src={STUDIO_INFO.mapsEmbedUrl}
                className="footer-map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={STUDIO_INFO.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-link"
            >
              Get Directions <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2026 STUDIO 711. ALL RIGHTS RESERVED.
          </p>
          <div className="footer-bottom-links">
            <Link to="/about">Design Philosophy</Link>
            <Link to="/projects">Portfolio</Link>
            <Link to="/contact">Get in Touch</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
