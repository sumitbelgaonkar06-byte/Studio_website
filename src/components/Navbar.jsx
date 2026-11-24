import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Wordmark & Logo */}
        <Link to="/" className="nav-brand" aria-label="Studio 711 Home">
          <img
            src="/images/general/logo.png"
            alt="Studio 711"
            className="nav-brand-logo"
            onError={(e) => {
              // Fallback to text if logo fails
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="nav-brand-text">
            <span className="nav-brand-title">{STUDIO_INFO.name}</span>
            <span className="nav-brand-sub">Architecture & Interiors</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary Navigation">
          <ul className="nav-links">
            {navLinks.map((item) => (
              <li key={item.path} className="nav-link-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  end={item.path === '/'}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link to="/contact" className="btn nav-cta-btn">
          Inquire
        </Link>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-toggle"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Drawer Overlay */}
        <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            {navLinks.map((item) => (
              <li key={item.path} className="mobile-nav-link">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  end={item.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-footer">
            <p className="mobile-nav-contact-item">
              <strong>Studio 711</strong>
              <br />
              Lucknow, Uttar Pradesh, India
            </p>
            <p className="mobile-nav-contact-item">
              <a href={`tel:${STUDIO_INFO.phoneRaw}`}>{STUDIO_INFO.phone}</a>
              <br />
              <a href={`mailto:${STUDIO_INFO.email}`}>{STUDIO_INFO.email}</a>
            </p>
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ marginTop: '0.5rem', width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Conversation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
