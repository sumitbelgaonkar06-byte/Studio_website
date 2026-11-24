import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Lightbox.css';

export default function Lightbox({
  isOpen,
  images = [],
  currentIndex = 0,
  projectTitle = '',
  onClose,
  onNext,
  onPrev
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || {};
  const imageUrl = typeof currentImage === 'string' ? currentImage : currentImage.url;
  const caption = currentImage.caption || '';
  const description = currentImage.description || '';

  return (
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="lightbox-header">
          <span className="lightbox-counter">
            {projectTitle && `${projectTitle} — `}
            {currentIndex + 1} / {images.length}
          </span>
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close Lightbox"
          >
            <X size={26} />
          </button>
        </div>

        {/* Stage */}
        <div className="lightbox-main-stage">
          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav-btn prev"
              onClick={onPrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <img
            src={imageUrl}
            alt={caption || projectTitle}
            className="lightbox-image"
          />

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav-btn next"
              onClick={onNext}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>

        {/* Caption */}
        <div className="lightbox-caption">
          {caption && <h4 className="lightbox-caption-title">{caption}</h4>}
          {description && <p className="lightbox-caption-desc">{description}</p>}
        </div>
      </div>
    </div>
  );
}
