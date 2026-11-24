# STUDIO 711 — Architecture & Interior Design Website

A modern, responsive multi-page portfolio website for **Studio 711**, an architecture and interior design studio based in Lucknow, India. Inspired by and authentically reflecting [Studio 711](https://studio711.in/).

---

## 🏛️ Project Overview

- **Studio:** Studio 711 Architecture & Interior Design
- **Location:** 1st Floor, A/24 Raghunandan Ashiyana, Chinhat, Lucknow, Uttar Pradesh, India
- **Contact:** +91 88402 30877 | hello@studio711.in
- **Philosophy:** *"Architecture & Interiors, Thoughtfully Designed. Considered spaces shaped by context, craft, and silence."*

---

## 🛠️ Technology Stack

- **React.js (v18.3)** with **Vite**
- **React Router DOM (v6.27)** for multi-page client-side routing
- **Lucide React** for architectural and utility icons
- **CSS3** with modular, component-level styling (No Tailwind CSS or Bootstrap)
- **HTML5 & Vanilla ES6+ JavaScript**

---

## 🎨 Design Language & Visual Identity

- **Background:** Warm off-white / pale beige (`#F5EFEB`, `#FAF6F4`, `#EFE8E3`)
- **Primary Text:** Deep charcoal (`#171311`)
- **Secondary Text:** Muted warm grey (`#6B635E`, `#8C847E`)
- **Accent:** Muted terracotta / rust (`#B85D43`, `#A85844`)
- **Borders:** Warm sand/grey (`#E2D8D5`)
- **WhatsApp Accent:** `#25D366`
- **Typography:**
  - **Headings:** *Playfair Display* (Editorial serif)
  - **Body:** *Inter* (Clean, legible sans-serif)

---

## 🗺️ Website Structure & Pages

1. **Home (`/`)**
   - Full-width hero with Studio 711 architectural photography, editorial headline, and dual CTAs
   - Studio introduction section with year badge (EST. 2023)
   - Featured projects preview (Resident at Sector 28 & Shalimar Emerald)
   - Services preview grid with Lucide icons
   - High-impact contact banner

2. **About (`/about`)**
   - Studio philosophy & context-driven approach
   - Design philosophy pillars (Thoughtful Architecture, Functional Interiors, Material Selection, Spatial Planning, Attention to Detail, Enduring Value)
   - **Team Section:** 6 authentic circular profile portraits with exact names and designations:
     1. **Harsh Singh** — Associate / IT Head
     2. **Ar. Ashwani Dhiman** — Associate - Vastu Consultant
     3. **Ar. Soumya Diwan** — Associate - Architect
     4. **Ritik Singh** — Associate
     5. **Raghav Kapoor** — Associate - Project Manager
     6. **Vaibhavi Saxena** — Associate

3. **Services (`/services`)**
   - 6 detailed core services with alternating editorial layouts, deliverables, and photography:
     - Architectural Design
     - Interior Design
     - Residential Design
     - Commercial Design
     - Renovation and Restoration
     - Turnkey Solutions
   - 4-stage methodology timeline (Consultation -> Concept -> Technical Drawings -> Turnkey Execution)

4. **Projects (`/projects`)**
   - Filter tabs (*All*, *Residential*, *Interior*)
   - **Resident at Sector 28** (Gurgaon) — Exterior front elevation, alternate exterior perspective, living room interior, kitchen & dining detail, overview
   - **Shalimar Emerald** (Lucknow) — Kitchen interiors overview, central island, cabinetry & material detailing, appliance wall & prep counter, complete culinary space
   - **Interactive Lightbox:** Full-screen modal with Next/Previous navigation, keyboard controls (`Esc`, `←`, `→`), photo counter, and captions

5. **Contact (`/contact`)**
   - Direct contact cards (Phone, Email, Physical Studio Address)
   - Social channels (Instagram, LinkedIn, WhatsApp)
   - Interactive inquiry form with real-time validation and `mailto:` client preparation fallback
   - **Google Maps Integration:** Responsive interactive embed for `1st Floor, A/24 Raghunandan Ashiyana, Chinhat, Lucknow` with *Get Directions* action

---

## 🚀 Running the Project

### 1. Install dependencies:
```bash
npm install
```

### 2. Start the development server:
```bash
npm run dev
```
The application will launch at `http://localhost:3000`.

### 3. Build for production:
```bash
npm run build
```

---

## 📁 Folder Structure

```
d:/st711/
├── public/
│   └── images/
│       ├── general/
│       │   ├── about-hero.png
│       │   ├── favicon.png
│       │   └── logo.png
│       ├── projects/
│       │   ├── resident-sector-28/
│       │   │   ├── cover.png
│       │   │   ├── exterior-alternate.png
│       │   │   ├── exterior-front.png
│       │   │   ├── interior-detail.png
│       │   │   └── interior-living.png
│       │   └── shalimar-emerald/
│       │       ├── cover.png
│       │       ├── kitchen-cabinetry.png
│       │       ├── kitchen-detail.png
│       │       ├── kitchen-island.png
│       │       └── kitchen-view-1.png
│       └── team/
│           ├── ashwani-dhiman.jpg
│           ├── harsh-singh.jpg
│           ├── raghav-kapoor.jpg
│           ├── ritik-singh.jpg
│           ├── soumya-diwan.jpg
│           └── vaibhavi-saxena.jpg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Lightbox.jsx
│   │   ├── Navbar.jsx
│   │   ├── PageHeading.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── TeamCard.jsx
│   │   └── WhatsAppButton.jsx
│   ├── data/
│   │   └── studioData.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Services.jsx
│   ├── styles/
│   │   ├── About.css
│   │   ├── Contact.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── Lightbox.css
│   │   ├── Navbar.css
│   │   ├── Projects.css
│   │   ├── Services.css
│   │   ├── WhatsAppButton.css
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
