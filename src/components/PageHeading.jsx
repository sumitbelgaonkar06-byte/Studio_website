import React from 'react';

export default function PageHeading({ eyebrow, title, description, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-inner animate-fade-in">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h1 className="page-hero-title">{title}</h1>}
          {description && <p className="page-hero-description">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
