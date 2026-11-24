import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const SERVICE_OPTIONS = [
  "Architectural Design",
  "Interior Design",
  "Residential Design",
  "Commercial Design",
  "Renovation and Restoration",
  "Turnkey Solutions",
  "Vastu Consultation",
  "Comprehensive Consultation"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: 'Architectural Design',
    projectLocation: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedViaMailto, setSubmittedViaMailto] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    }
    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a service.';
    }
    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = 'Project Location is required.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on field change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    // Per instruction: "If no backend is configured, use a mailto-based fallback to prepare an email enquiry. Do not show a fake successful submission message."
    const subject = encodeURIComponent(`Project Inquiry: ${formData.serviceRequired} — ${formData.fullName}`);
    const body = encodeURIComponent(
      `Dear Studio 711 Team,\n\n` +
      `I would like to inquire about architectural and interior design services for my project.\n\n` +
      `--- INQUIRY DETAILS ---\n` +
      `Client Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service Required: ${formData.serviceRequired}\n` +
      `Project Location: ${formData.projectLocation}\n\n` +
      `Project Description & Requirements:\n${formData.message}\n\n` +
      `Sent via studio711.in inquiry form`
    );

    const mailtoUrl = `mailto:${STUDIO_INFO.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmittedViaMailto(true);
  };

  return (
    <div className="contact-form-col">
      <h3 className="form-header-title">Send a Project Enquiry</h3>
      <p className="form-header-sub">
        Share your vision, location, and requirements. We typically respond within 24–48 business hours.
      </p>

      {submittedViaMailto && (
        <div
          style={{
            backgroundColor: '#F5ECE9',
            border: '1px solid var(--color-accent)',
            padding: '1rem 1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            fontSize: '0.9rem',
            color: 'var(--color-text-primary)'
          }}
        >
          <CheckCircle2 size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong>Email Draft Prepared!</strong>
            <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Your default email client has been opened with your inquiry details addressed to <strong>{STUDIO_INFO.email}</strong>. If your email client did not open automatically, you can send an email directly to <a href={`mailto:${STUDIO_INFO.email}`} style={{ textDecoration: 'underline' }}>{STUDIO_INFO.email}</a>.
            </p>
          </div>
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name <span className="form-label-required">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ananya Sharma"
            className={`form-input ${errors.fullName ? 'has-error' : ''}`}
            required
          />
          {errors.fullName && <span className="form-error-msg">{errors.fullName}</span>}
        </div>

        {/* Email & Phone */}
        <div className="form-row-2col">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address <span className="form-label-required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. ananya@domain.com"
              className={`form-input ${errors.email ? 'has-error' : ''}`}
              required
            />
            {errors.email && <span className="form-error-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number <span className="form-label-required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className={`form-input ${errors.phone ? 'has-error' : ''}`}
              required
            />
            {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
          </div>
        </div>

        {/* Service Required & Project Location */}
        <div className="form-row-2col">
          <div className="form-group">
            <label htmlFor="serviceRequired" className="form-label">
              Service Required <span className="form-label-required">*</span>
            </label>
            <select
              id="serviceRequired"
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className={`form-select ${errors.serviceRequired ? 'has-error' : ''}`}
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.serviceRequired && (
              <span className="form-error-msg">{errors.serviceRequired}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="projectLocation" className="form-label">
              Project Location <span className="form-label-required">*</span>
            </label>
            <input
              type="text"
              id="projectLocation"
              name="projectLocation"
              value={formData.projectLocation}
              onChange={handleChange}
              placeholder="e.g. Gomti Nagar, Lucknow / Sector 28, Gurgaon"
              className={`form-input ${errors.projectLocation ? 'has-error' : ''}`}
              required
            />
            {errors.projectLocation && (
              <span className="form-error-msg">{errors.projectLocation}</span>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Project Overview &amp; Message <span className="form-label-required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about the property, plot/floor size, timeline, and what you want the space to feel like..."
            className={`form-textarea ${errors.message ? 'has-error' : ''}`}
            required
          />
          {errors.message && <span className="form-error-msg">{errors.message}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary form-submit-btn">
          Submit Enquiry <Send size={16} />
        </button>

        <p className="form-disclaimer">
          Clicking submit prepares an email enquiry addressed to <strong>{STUDIO_INFO.email}</strong>.
          <br />You can also reach us immediately via WhatsApp or direct phone call.
        </p>
      </form>
    </div>
  );
}
