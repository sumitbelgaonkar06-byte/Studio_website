// Studio 711 Data Store

export const STUDIO_INFO = {
  name: "Studio 711",
  fullName: "Studio 711 Architecture & Interior Design",
  tagline: "Architecture & Interiors, Thoughtfully Designed.",
  subTagline: "Residential architecture and interior design studio based in Lucknow, India. Considered spaces shaped by context, craft, and silence.",
  phone: "+91 88402 30877",
  phoneRaw: "+918840230877",
  whatsappNumber: "918840230877",
  email: "hello@studio711.in",
  address: {
    line1: "1st Floor, A/24 Raghunandan Ashiyana",
    line2: "Chinhat",
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    full: "1st Floor, A/24 Raghunandan Ashiyana, Chinhat, Lucknow, Uttar Pradesh, India"
  },
  coordinates: {
    lat: 26.894444,
    lng: 81.055778
  },
  social: {
    instagram: "https://www.instagram.com/_studio.711/",
    linkedin: "https://www.linkedin.com/company/studio711/"
  },
  establishedYear: 2023,
  mapsEmbedUrl: "https://www.google.com/maps?q=1st%20Floor,%20A/24%20Raghunandan%20Ashiyana,%20Chinhat,%20Lucknow,%20Uttar%20Pradesh,%20India&output=embed",
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=1st+Floor,+A/24+Raghunandan+Ashiyana,+Chinhat,+Lucknow,+Uttar+Pradesh,+India"
};

export const TEAM_MEMBERS = [
  {
    id: "harsh-singh",
    name: "Harsh Singh",
    role: "Associate / IT Head",
    roleCategory: "Technology & Operations",
    image: "/images/team/harsh-singh.jpg",
    bio: "As Associate and IT Head at Studio 711, Harsh Singh leads the studio's digital ecosystem and technology initiatives. He ensures that systems, workflows, and digital tools work seamlessly to support creativity, collaboration, and efficient project delivery, helping the studio stay future-ready."
  },
  {
    id: "ashwani-dhiman",
    name: "Ar. Ashwani Dhiman",
    role: "Associate - Vastu Consultant",
    roleCategory: "Architecture & Vastu",
    image: "/images/team/ashwani-dhiman.jpg",
    bio: "Ar. Ashwani Dhiman is the Vastu Consultant. With his deep understanding of Vastu principles and years of experience, he provides valuable guidance in creating spaces that are harmonious, balanced, and aligned with ancient spatial wisdom while seamlessly honoring contemporary architecture."
  },
  {
    id: "soumya-diwan",
    name: "Ar. Soumya Diwan",
    role: "Associate - Architect",
    roleCategory: "Architecture",
    image: "/images/team/soumya-diwan.jpg",
    bio: "Ar. Soumya Diwan is an Architect contributing to the development of thoughtful and innovative design solutions. With a strong eye for detail and spatial coherence, she translates conceptual visions into rigorous architectural drawings and meticulously articulated spaces."
  },
  {
    id: "ritik-singh",
    name: "Ritik Singh",
    role: "Associate",
    roleCategory: "Design & Direction",
    image: "/images/team/ritik-singh.jpg",
    bio: "Ritik Singh oversees design, management, and creative direction at Studio 711. He anchors the studio's design philosophy on context, material authenticity, and the tactile qualities of built architecture, guiding projects from inception to completion."
  },
  {
    id: "raghav-kapoor",
    name: "Raghav Kapoor",
    role: "Associate - Project Manager",
    roleCategory: "Project Management",
    image: "/images/team/raghav-kapoor.jpg",
    bio: "Raghav Kapoor brings creativity, rigorous site oversight, and a strong execution sensibility to the studio. He bridges design concepts with contractor coordination, materials procurement, and quality control across every project milestone."
  },
  {
    id: "vaibhavi-saxena",
    name: "Vaibhavi Saxena",
    role: "Associate",
    roleCategory: "Interior & Spatial Design",
    image: "/images/team/vaibhavi-saxena.jpg",
    bio: "Vaibhavi Saxena is the creative heart of the studio, bringing depth, emotion, and purpose to every design. With a natural ability to understand how people experience spaces, she transforms ideas into environments that feel alive, meaningful, and timeless."
  }
];

export const PROJECTS = [
  {
    id: "resident-sector-28-gurgaon",
    slug: "resident-at-sector-28",
    title: "Resident at Sector 28",
    subtitle: "A contemporary residence celebrating natural light and restrained materiality",
    location: "Gurgaon, India",
    category: "Residential Architecture & Interior Design",
    filterCategory: "Residential",
    year: "2026",
    coverImage: "/images/projects/resident-sector-28/cover.png",
    overview: "Located in Sector 28, Gurgaon, this private residential project combines modern architectural form with warm, inviting interiors. The building balances strong rectilinear volumes with warm wood tones, expansive glazing, and rhythmic textural louvers. Inside, spaces flow effortlessly from living to culinary zones, prioritizing natural airflow, refined joinery, and an atmosphere of enduring calm.",
    details: [
      { label: "Location", value: "Sector 28, Gurgaon, Haryana, India" },
      { label: "Typology", value: "Residential Architecture & Interior" },
      { label: "Scope", value: "Architectural Planning, Facade Design, Full Interior Architecture" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Completed" }
    ],
    features: [
      "Custom cantilevered exterior canopy with accent warm downlighting",
      "Perforated architectural screening for privacy and solar heat moderation",
      "Seamless open-plan kitchen and living transition with bespoke joinery",
      "Warm neutral palette featuring fluted oak panels and honed stone",
      "Generous full-height floor-to-ceiling windows maximizing natural daylight"
    ],
    gallery: [
      {
        url: "/images/projects/resident-sector-28/exterior-front.png",
        caption: "Exterior Front Elevation",
        description: "Front elevation featuring articulated geometric volumes, balanced wood-look cladding, and warm ambient exterior lighting.",
        aspect: "wide"
      },
      {
        url: "/images/projects/resident-sector-28/exterior-alternate.png",
        caption: "Alternate Exterior Perspective",
        description: "Architectural volume study showing corner glazing, floating balcony overhang, and integrated perimeter landscape design.",
        aspect: "wide"
      },
      {
        url: "/images/projects/resident-sector-28/interior-living.png",
        caption: "Residential Interior Living Room",
        description: "Open-plan living space framed by floor-to-ceiling glass, textured stone feature wall, and soft ambient cove lighting.",
        aspect: "wide"
      },
      {
        url: "/images/projects/resident-sector-28/interior-detail.png",
        caption: "Kitchen & Dining Detail",
        description: "Meticulously detailed kitchen joinery with handleless cabinetry, integrated island, and refined warm stone surfaces.",
        aspect: "wide"
      },
      {
        url: "/images/projects/resident-sector-28/cover.png",
        caption: "Architectural Overview",
        description: "Dusk architectural perspective highlighting warm illumination, fenestration patterns, and refined street presence.",
        aspect: "wide"
      }
    ]
  },
  {
    id: "shalimar-emerald-lucknow",
    slug: "shalimar-emerald",
    title: "Shalimar Emerald",
    subtitle: "A kitchen and interior designed to feel as good as it functions",
    location: "Lucknow, India",
    category: "Interior Design",
    filterCategory: "Interior",
    year: "2026",
    coverImage: "/images/projects/shalimar-emerald/cover.png",
    overview: "A kitchen designed to feel as good as it functions.\n\nWarm oak, muted olive tones, soft lighting and generous workspaces come together to create a calm, contemporary kitchen made for everyday living.\n\nDesigned with intention. Detailed for living.",
    details: [
      { label: "Location", value: "Shalimar Emerald, Lucknow, Uttar Pradesh, India" },
      { label: "Typology", value: "Residential Interior Design" },
      { label: "Scope", value: "Kitchen Architecture, Joinery Detailing, Material Specification & Lighting" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Completed" }
    ],
    features: [
      "Custom kitchen island with integrated undermount sink and waterfall countertop",
      "Two-tone cabinetry pairing muted sage olive with natural European oak veneers",
      "Seamless built-in appliance integration including tall storage pantry units",
      "Concealed linear LED task lighting washing backsplash tiles",
      "Minimalist hardware and soft-close ergonomic sliding mechanisms"
    ],
    gallery: [
      {
        url: "/images/projects/shalimar-emerald/kitchen-view-1.png",
        caption: "Kitchen Interiors Overview",
        description: "Longitudinal view of the kitchen showcasing the harmonious dialogue between muted cabinetry, oak accents, and linear lighting.",
        aspect: "wide"
      },
      {
        url: "/images/projects/shalimar-emerald/kitchen-island.png",
        caption: "Kitchen Central Island",
        description: "Central preparation island with seamless quartz worktop, modern matte faucet, and ample under-counter storage drawers.",
        aspect: "wide"
      },
      {
        url: "/images/projects/shalimar-emerald/kitchen-cabinetry.png",
        caption: "Cabinetry & Material Detailing",
        description: "Close-up perspective highlighting precise tolerances, custom milled profiles, and the warm texture of natural wood.",
        aspect: "wide"
      },
      {
        url: "/images/projects/shalimar-emerald/kitchen-detail.png",
        caption: "Appliance Wall & Prep Counter",
        description: "Integrated microwave/oven tower flanked by textured wall finishes and warm ambient backlighting.",
        aspect: "wide"
      },
      {
        url: "/images/projects/shalimar-emerald/cover.png",
        caption: "Overall Culinary Space",
        description: "Complete view of the culinary living zone designed for both functionality and relaxed family gatherings.",
        aspect: "wide"
      }
    ]
  }
];

export const SERVICES = [
  {
    id: "architectural-design",
    title: "Architectural Design",
    shortDescription: "Concept development, architectural planning, building layouts, elevations and detailed architectural design.",
    fullDescription: "From the first sketch to complete working drawings, we craft buildings that emerge naturally from their site, orientation, and climate. We focus on volumetric harmony, generous natural light, and clear circulation paths.",
    deliverables: [
      "Site analysis and solar orientation studies",
      "Concept development & spatial volumetric massing",
      "Architectural planning and functional layouts",
      "Exterior elevations, sections & detailed facade design",
      "Permit, municipal & comprehensive construction drawing sets"
    ],
    image: "/images/projects/resident-sector-28/exterior-front.png",
    icon: "Building2"
  },
  {
    id: "interior-design",
    title: "Interior Design",
    shortDescription: "Residential and commercial interiors, space planning, furniture layouts, material selection, lighting and detailing.",
    fullDescription: "We believe interiors should feel calm, cohesive, and deeply personal. We design tailored living environments with custom joinery, tactile natural materials, and nuanced lighting scenes that evolve throughout the day.",
    deliverables: [
      "Custom space planning and furniture layouts",
      "Bespoke joinery, cabinetry & millwork design",
      "Curated material, textile & finish palettes",
      "Architectural and decorative lighting plans",
      "3D spatial visualizations and material mood boards"
    ],
    image: "/images/projects/shalimar-emerald/kitchen-island.png",
    icon: "Sofa"
  },
  {
    id: "residential-design",
    title: "Residential Design",
    shortDescription: "Designing functional and aesthetically pleasing homes tailored to individual lifestyles.",
    fullDescription: "A home is an intimate framework for daily life. We work closely with homeowners to understand daily rituals, privacy needs, and family dynamics, translating them into enduring residences that elevate everyday living.",
    deliverables: [
      "Custom private residence and villa design",
      "Apartment interior overhauls and spatial reconfiguration",
      "Indoor-outdoor transition and courtyard integration",
      "Storage, utility and ergonomic lifestyle planning",
      "End-to-end design stewardship through every construction phase"
    ],
    image: "/images/projects/resident-sector-28/interior-living.png",
    icon: "Home"
  },
  {
    id: "commercial-design",
    title: "Commercial Design",
    shortDescription: "Designing practical and attractive commercial environments.",
    fullDescription: "We develop brand-defining commercial, office, and retail environments that inspire employees and welcome clients. Our spaces blend functional efficiency, acoustic comfort, and striking spatial identity.",
    deliverables: [
      "Boutique corporate office interiors",
      "Retail, showroom and hospitality concept design",
      "Workstation ergonomics and collaboration zoning",
      "Acoustic planning, HVAC coordination and durable materials",
      "Brand-aligned architectural identity"
    ],
    image: "/images/general/about-hero.png",
    icon: "Briefcase"
  },
  {
    id: "renovation-restoration",
    title: "Renovation and Restoration",
    shortDescription: "Transforming existing spaces through thoughtful redesign and upgrades.",
    fullDescription: "Existing structures possess inherent character. We breathe fresh life into older homes and commercial spaces through sensitive structural intervention, modern thermal and spatial upgrades, and respectful material preservation.",
    deliverables: [
      "Structural assessment and feasibility evaluation",
      "Internal wall reconfiguration and daylight optimization",
      "Modernization of plumbing, electrical, and HVAC infrastructure",
      "Material salvage, restoration and contemporary contrast",
      "Phased renovation planning to minimize disruption"
    ],
    image: "/images/projects/shalimar-emerald/kitchen-view-1.png",
    icon: "Hammer"
  },
  {
    id: "turnkey-solutions",
    title: "Turnkey Solutions",
    shortDescription: "Coordinating the design and execution process to deliver complete spaces.",
    fullDescription: "We remove the friction between design vision and physical reality by offering unified turnkey project delivery. From procuring custom finishes to rigorous site supervision, we ensure exact fidelity to the drawings.",
    deliverables: [
      "Single-point project coordination and responsibility",
      "Bill of Quantities (BOQ), budgeting and cost management",
      "Vetted contractor and artisan trades supervision",
      "Rigorous quality audits and milestone site inspections",
      "Flawless handover with snag-list completion"
    ],
    image: "/images/projects/resident-sector-28/cover.png",
    icon: "CheckCircle2"
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "Thoughtful Architecture",
    description: "Every line drawn has purpose. We craft architectural envelopes that respond with sensitivity to sunlight, breeze, and neighborhood context, avoiding frivolous decoration in favor of lasting proportion."
  },
  {
    number: "02",
    title: "Functional Interiors",
    description: "Beauty without utility quickly fades. We study the micro-moments of daily life—how you brew morning tea, how evening light hits the dining table, how storage remains invisible yet effortlessly accessible."
  },
  {
    number: "03",
    title: "Material Selection",
    description: "We champion genuine, tactile materials: warm natural woods, brushed metals, lime plasters, honed stone, and woven textiles. These materials age with grace, acquiring a rich patina over decades."
  },
  {
    number: "04",
    title: "Spatial Planning",
    description: "Great architecture is the art of choreography. We optimize proportions and sightlines, fostering seamless transitions between quiet solitary spaces and generous zones for gathering."
  },
  {
    number: "05",
    title: "Attention to Detail",
    description: "From custom shadow-gap baseboards to seamless joinery miters and flush light fittings, our obsession with execution ensures that what is envisioned on paper is built with uncompromising craft."
  }
];
