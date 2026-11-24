import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  MessageCircle,
  ExternalLink,
  Clock,
  Navigation
} from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import PageHeading from '../components/PageHeading';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

export default function Contact() {
  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello Studio 711, I'd like to discuss a new architecture and interior design project."
  )}`;

  return (
    <>
      {/* Page Hero */}
      <PageHeading
        eyebrow="Get In Touch"
        title="Let's begin a conversation."
        description="Tell us about your site, your routine, and what you'd like your space to feel like. We'll take it from there."
      />

      <section className="section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Column: Studio Information & Direct Channels */}
            <div className="contact-info-col">
              <span className="eyebrow">Studio 711 Office</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
                Visit or Reach Out Directly
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                We welcome prospective clients, homeowners, and collaborators to discuss new projects, site assessments, and spatial consultations.
              </p>

              {/* Direct Info Cards */}
              <div className="contact-direct-cards">
                {/* Phone */}
                <div className="contact-info-card">
                  <div className="contact-icon-bubble">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="contact-card-label">Telephone</span>
                    <div className="contact-card-val">
                      <a href={`tel:${STUDIO_INFO.phoneRaw}`}>{STUDIO_INFO.phone}</a>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                      Available Mon &ndash; Sat, 10:00 AM &ndash; 7:00 PM IST
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-card">
                  <div className="contact-icon-bubble">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="contact-card-label">Email Address</span>
                    <div className="contact-card-val">
                      <a href={`mailto:${STUDIO_INFO.email}`}>{STUDIO_INFO.email}</a>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                      For project briefs, drawings &amp; media inquiries
                    </span>
                  </div>
                </div>

                {/* Studio Address */}
                <div className="contact-info-card">
                  <div className="contact-icon-bubble">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="contact-card-label">Studio Address</span>
                    <div className="contact-card-val" style={{ fontSize: '1.15rem' }}>
                      {STUDIO_INFO.address.line1},<br />
                      {STUDIO_INFO.address.line2}, {STUDIO_INFO.address.city},<br />
                      {STUDIO_INFO.address.state}, {STUDIO_INFO.address.country}.
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp & Social Links */}
              <div>
                <span className="contact-card-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
                  Connect on Social &amp; Messaging
                </span>
                <div className="contact-social-row">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                    style={{ gap: '0.5rem' }}
                  >
                    <MessageCircle size={18} /> WhatsApp Chat
                  </a>
                  <a
                    href={STUDIO_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ gap: '0.5rem' }}
                  >
                    <Instagram size={18} /> Instagram
                  </a>
                  <a
                    href={STUDIO_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ gap: '0.5rem' }}
                  >
                    <Linkedin size={18} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <ContactForm />
          </div>

          {/* COMPULSORY GOOGLE MAPS INTEGRATION */}
          <div className="map-showcase-section">
            <div className="map-showcase-header">
              <div className="map-showcase-title-box">
                <span className="eyebrow">Location &amp; Directions</span>
                <h2 className="map-showcase-title">Find Us</h2>
                <p className="map-showcase-desc">
                  Our architecture and design studio is situated in Chinhat, Lucknow, easily accessible from Gomti Nagar and Shaheed Path.
                </p>
              </div>
              <a
                href={STUDIO_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>

            {/* Responsive Google Maps Iframe */}
            <div className="map-embed-wrapper">
              <iframe
                title="Studio 711 Office Google Map"
                src={STUDIO_INFO.mapsEmbedUrl}
                className="map-embed-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
