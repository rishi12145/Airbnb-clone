# Airbnb Listing Page Clone (Take-Home Task)

A pixel-perfect, accessible, and high-performance clone of the Airbnb property listing page **"Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"**, built for the Playpower Labs Take-Home Engineering Assessment.

---

## 🌟 Key Features & Parity Overview

This application faithfully reproduces the reference application across visual aesthetics, interaction models, and motion:

### 1. View 1: Listing Page (Desktop-Optimized)
- **Airbnb Header:** Signature Bélo logo, interactive search capsule (*"Anywhere · Any week · Add guests"*), host quick actions, and user profile dropdown.
- **Header Actions:** Dynamic Save/Heart button with pop animation and Share modal with 1-click clipboard copy and social channels.
- **Hero Photo Grid:** 5-photo responsive mosaic layout with rounded outer borders, hover zoom with subtle scrim dimming, and floating *"Show all photos"* trigger button.
- **Property Details & Highlights:**
  - Capacity pills (*"3 guests · 1 bedroom · 1 bed · 1 bathroom"*).
  - Airbnb *Guest favorite* badge with laurel leaves, 4.98 rating score, and 128 review counter.
  - Host summary card (*Hosted by Mirashya · Superhost · 4 years hosting*).
  - Highlights list (*Private Jacuzzi, Dedicated workspace, Fast Wifi 150 Mbps, Keyless check-in, Free cancellation*).
  - Sleeping arrangements cards with room iconography.
  - Expandable *"About this space"* dialog with comprehensive property description.
- **Amenities Section:**
  - 10 key preview amenities with custom iconography.
  - *"Show all 45 amenities"* modal with grouped categories (Bathroom, Bedroom & laundry, Entertainment, Heating & cooling, Kitchen, Outdoor, etc.) and real-time live search filter.
- **Dual-Month Interactive Calendar:**
  - Two-month side-by-side view with range highlight, night count calculation, and clear dates trigger.
- **Sticky Booking Card:**
  - Sticky right-column placement with live price calculations:
    - Base price $\times$ nights
    - Cleaning fee
    - Airbnb service fee
    - Total before taxes
  - Expandable guest picker dropdown with Adults, Children, and Infants increment/decrement counters with maximum bounds enforcement.
  - Radiant Airbnb gradient *"Reserve"* button with celebratory booking confirmation modal.
- **Reviews Breakdown:**
  - Category ratings (Cleanliness 5.0, Accuracy 4.9, Check-in 5.0, Communication 5.0, Location 4.8, Value 4.9) with progress bars.
  - 6 verified guest review cards with helpful toggles.
- **Interactive Candolim Map:**
  - High-fidelity styled vector map of Candolim beach coastline, Fort Aguada road, and pulsating radar pin.
- **Host Profile & Policies:**
  - Host contact dialog, house rules, safety precautions, and cancellation policies.

### 2. View 2: Fullscreen Photo Tour
- Accessible via *"Show all photos"* or clicking any hero image.
- Categorized photo filter pills (*"All (20)", "Living room", "Jacuzzi & Terrace", "Bedroom", "Kitchen & Dining", "Bathroom", "Pool & Exterior"*).
- Masonry card layout with room tags and descriptions.
- Clicking any image transitions seamlessly into View 3 (Lightbox) at that exact index.

### 3. View 3: Single-Photo Lightbox Viewer
- Minimalist fullscreen single-photo display.
- Photo counter indicator (e.g., `1 / 20`).
- Prev ($\leftarrow$) and Next ($\rightarrow$) navigation arrows with wrap-around support.
- Full keyboard support:
  - `ArrowLeft`: Navigate to previous photo
  - `ArrowRight`: Navigate to next photo
  - `Escape`: Return to Photo Tour
- Bottom thumbnail strip for instant jumping between photos.

### 4. Production-Scale Architecture Diagram
- Built-in in-app architecture modal accessible via the header badge (*"Architecture Diagram"*).
- Scalability strategy for a vacation-rental marketplace (Frontend CDN, Kubernetes microservices, Kafka event streaming, Sharded PostgreSQL, Redis Redlock, and Elasticsearch).
- High-res vector diagram available at [`public/architecture_diagram.svg`](public/architecture_diagram.svg) and fully documented in [`ARCHITECTURE.md`](ARCHITECTURE.md).

---

## 🛠️ Technology Stack

- **Framework:** React 19 + Vite
- **Styling:** Modular Vanilla CSS with comprehensive CSS custom properties / design tokens
- **Icons:** `lucide-react`
- **Typography:** Google Fonts (*Inter* & *Plus Jakarta Sans*)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Local Run
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
├── .agents/
│   └── skills/
│       ├── code-quality-auditor/SKILL.md
│       ├── accessibility-checker/SKILL.md
│       └── pixel-parity-verifier/SKILL.md
├── public/
│   ├── favicon.svg
│   └── architecture_diagram.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx / Header.css
│   │   ├── ListingHeader.jsx / ListingHeader.css
│   │   ├── HeroGrid.jsx / HeroGrid.css
│   │   ├── ListingInfo.jsx / ListingInfo.css
│   │   ├── Amenities.jsx / AmenitiesModal.jsx / Amenities.css
│   │   ├── CalendarSection.jsx / CalendarSection.css
│   │   ├── BookingCard.jsx / BookingCard.css
│   │   ├── ReviewsSection.jsx / ReviewsSection.css
│   │   ├── LocationSection.jsx / LocationSection.css
│   │   ├── HostSection.jsx / HostSection.css
│   │   ├── PhotoTour.jsx / PhotoTour.css
│   │   ├── Lightbox.jsx / Lightbox.css
│   │   ├── ShareModal.jsx / ShareModal.css
│   │   ├── ReserveConfirmationModal.jsx / ReserveConfirmationModal.css
│   │   ├── ArchitectureModal.jsx / ArchitectureModal.css
│   │   └── Footer.jsx / Footer.css
│   ├── data/
│   │   └── listingData.js
│   ├── App.jsx / App.css
│   ├── index.css
│   └── main.jsx
├── ARCHITECTURE.md
├── AI_PROMPT_SEQUENCE.md
├── package.json
└── README.md
```

---

## 📄 Submission Notes

Per instructions:
1. Complete code, assets, and architecture diagram are packaged into `airbnb-clone-submission.zip`.
2. AI-assisted prompt sequence is documented in `AI_PROMPT_SEQUENCE.md`.
3. AI sub-agent/skill configurations are included in `.agents/skills/`.
4. Code will NOT be pushed to any public repository.
