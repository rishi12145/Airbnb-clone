# AI-Assisted Development: Prompt Sequence & Workflow Log

## Overview
This document logs the AI prompt sequences, autonomous agent workflows, sub-agent configurations, and design decisions used during the development of the pixel-perfect Airbnb Clone application (`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10`).

---

## 1. Sequence of Development Prompts

### Phase 1: Requirement Ingestion & Reference Analysis
- **Prompt 1.1 (Inspection & Extraction):**
  > *"Analyze the assignment PDF and inspect the target reference URL `https://airbnb-clone-umber-two.vercel.app/`. Identify the 3 mandatory views (Listing Page, Photo Tour, Lightbox) and document all required functional behaviors, styling tokens, animations, and desktop-only layout constraints."*
  - **Agent Action:** Initialized scratchpad, reviewed layout specs for Romantic Jacuzzi 1BHK Candolim, extracted color palette (`#FF385C`, `#222222`, `#717171`), 5-photo hero mosaic parameters, and single-photo viewer interactions.

### Phase 2: Project Scaffolding & Design System
- **Prompt 2.1 (Vite & Vanilla CSS Foundation):**
  > *"Scaffold a clean, modern React application using Vite in non-interactive mode. Build a comprehensive Vanilla CSS design system matching Airbnb's exact typography (Inter & Plus Jakarta Sans), border radiuses, box-shadows, and micro-animations."*
  - **Agent Action:** Created `index.html` with Google Fonts, SVG favicon, and built `src/index.css` with CSS variables for Airbnb gradients, modal animations, and sticky card behavior.

### Phase 3: Data Architecture & Authentic Assets
- **Prompt 3.1 (Property Data Model):**
  > *"Structure a complete data model for 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10' with 20 high-resolution photos categorized by room (Living Room, Jacuzzi & Terrace, Bedroom, Kitchen, Bathroom, Pool), 45 categorized amenities, authentic reviews, and pricing rules."*
  - **Agent Action:** Created `src/data/listingData.js` with structured metadata, Superhost badges, and realistic review profiles.

### Phase 4: Core View 1 – The Listing Page
- **Prompt 4.1 (Navbar & Hero Grid):**
  > *"Implement the Airbnb header with search capsule and user profile menu. Implement the 5-photo hero mosaic grid with hover zoom and the 'Show all photos' floating trigger."*
  - **Agent Action:** Built `Header.jsx`, `ListingHeader.jsx`, and `HeroGrid.jsx` with CSS grid and subtle hover dimming scrim.

- **Prompt 4.2 (Listing Details & Sticky Booking Card):**
  > *"Build the 2-column layout: left column featuring guest favorite banner, host snippet, key highlights, sleeping arrangements, amenities preview, and interactive dual-month calendar. Right column featuring the sticky reservation widget with dynamic price calculations and guest counters."*
  - **Agent Action:** Built `ListingInfo.jsx`, `Amenities.jsx`, `CalendarSection.jsx`, and `BookingCard.jsx`.

- **Prompt 4.3 (Reviews, Map & Host Policies):**
  > *"Implement the full-width reviews section with rating progress bars, custom Candolim coastal vector map with pulsating radar pin, host profile card, and house rules."*
  - **Agent Action:** Built `ReviewsSection.jsx`, `LocationSection.jsx`, `HostSection.jsx`, and `Footer.jsx`.

### Phase 5: Core View 2 – Fullscreen Photo Tour
- **Prompt 5.1 (Photo Tour Modal):**
  > *"Implement the full-screen Photo Tour overlay opened from 'Show all photos' or any hero image. Include back button, category filter tabs ('All', 'Living room', 'Jacuzzi', etc.), and photo cards that trigger the Lightbox on click."*
  - **Agent Action:** Built `PhotoTour.jsx` and `PhotoTour.css` with scroll locking and keyboard `Escape` handling.

### Phase 6: Core View 3 – Single-Photo Lightbox Viewer
- **Prompt 6.1 (Interactive Lightbox Viewer):**
  > *"Implement the single-photo Lightbox viewer with counter ('N / 20'), prev/next arrows, keyboard left/right arrow navigation, photo captions, and bottom thumbnail strip for direct jumping."*
  - **Agent Action:** Built `Lightbox.jsx` and `Lightbox.css` with wrap-around navigation and smooth scale transitions.

### Phase 7: Production Architecture & Modals
- **Prompt 7.1 (Vacation-Rental Marketplace Architecture):**
  > *"Design a high-level production architecture diagram for an Airbnb-scale marketplace covering frontend CDN, Kubernetes microservices, Kafka event streaming, sharded PostgreSQL, Redis Redlock, and Elasticsearch. Provide an interactive in-app viewer and exportable SVG."*
  - **Agent Action:** Generated `public/architecture_diagram.svg`, `ArchitectureModal.jsx`, and `ARCHITECTURE.md`.

---

## 2. AI Subagent Skills & Configs

As requested by the company specification ("Please do include your sub-agent/skill config files in your submission"), custom AI subagent skills are configured in `.agents/skills/`:

1. **`code-quality-auditor`**: Enforces zero warnings, clean component boundaries, and strict type safety.
2. **`accessibility-checker`**: Audits ARIA roles, keyboard focus traps, contrast ratios, and screen-reader labels.
3. **`pixel-parity-verifier`**: Validates layout alignment, spacing, typography, and animation easing curves against Airbnb design guidelines.
