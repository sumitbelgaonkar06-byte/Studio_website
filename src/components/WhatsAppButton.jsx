import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import '../styles/WhatsAppButton.css';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello Studio 711, I'd like to inquire about architectural and interior design services."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Chat with Studio 711 on WhatsApp"
    >
      <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
      <MessageCircle size={28} />
    </a>
  );
}
