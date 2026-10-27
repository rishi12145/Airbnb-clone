# 🏡 Airbnb Listing Page Clone

<div align="center">

<a href="https://airbnb-clone-umber-six.vercel.app/">
  <img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=700&size=28&pause=1000&color=FF5A5F&center=true&vCenter=true&width=700&lines=Discover+Your+Next+Getaway+%F0%9F%8C%8D;Pixel-Perfect+Airbnb+Experience+%E2%9C%A8;Built+with+React+%2B+Vite+%F0%9F%9A%80" alt="Animated project introduction" />
</a>

**A pixel-perfect, interactive Airbnb property listing experience.**

Recreating the property listing page **“Romantic Jacuzzi 1BHK Candolim | Mirashya UG10”** for the Playpower Labs Take-Home Engineering Assessment.

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Website-FF5A5F?style=for-the-badge)](https://airbnb-clone-umber-six.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Powered-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![CSS](https://img.shields.io/badge/Vanilla_CSS-Custom_Styled-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

</div>

---

## 🌐 Live Demo

### ✨ [Explore the Airbnb Clone →](https://airbnb-clone-umber-six.vercel.app/)

Experience the interactive property listing, browse photos, explore amenities, select dates, and try the booking interface.

---

## 🎨 Project Highlights

| Feature | Description |
|---|---|
| 🎯 Pixel-Accurate UI | Carefully recreated layouts, typography, spacing, colors, and interactions. |
| 🖼️ Interactive Gallery | Five-photo hero mosaic and fullscreen photo browsing experience. |
| 📸 Photo Lightbox | Fullscreen image viewer with keyboard navigation and thumbnails. |
| 🛁 Amenities Explorer | Searchable modal displaying 45 amenities grouped by category. |
| 📅 Interactive Calendar | Dual-month date selection with date-range highlighting and night counting. |
| 💳 Booking Calculator | Dynamic pricing based on selected nights, cleaning fees, and service fees. |
| 👥 Guest Selector | Interactive counters for adults, children, and infants. |
| ❤️ Save & Share | Interactive favorite button, share modal, and clipboard functionality. |
| ⭐ Reviews Section | Guest ratings, category breakdowns, and review cards. |
| 📍 Location & Host | Property location visualization, host details, and policy sections. |
| 🏗️ System Architecture | Production-scale marketplace architecture design. |

---

## 🖥️ Three Interactive Views

### 01 — 🏠 Property Listing Page

The main experience recreates the Airbnb property details page, including:

- Signature-style header and search capsule.
- Responsive five-image hero gallery.
- Property highlights, host details, and sleeping arrangements.
- Expandable property description.
- Searchable, categorized amenities modal.
- Interactive two-month calendar.
- Sticky booking card with dynamic price calculations.
- Guest selection and reservation confirmation modal.
- Reviews, location, house rules, and cancellation information.

### 02 — 🖼️ Fullscreen Photo Tour

Explore the property's photo collection through an immersive gallery.

- Browse all 20 property photos.
- Filter images by room or property area.
- Explore categories such as Living Room, Jacuzzi & Terrace, Bedroom, Kitchen & Dining, Bathroom, and Pool & Exterior.
- Open any image directly in the fullscreen lightbox.

### 03 — 🔍 Single-Photo Lightbox

A dedicated photo-viewing experience featuring:

- Fullscreen image display.
- Previous and next navigation.
- Keyboard support using `ArrowLeft`, `ArrowRight`, and `Escape`.
- Image counter and thumbnail navigation.
- Smooth transitions between the photo tour and lightbox.

---

## 🏗️ Architecture & Engineering

Beyond the frontend, this project includes a conceptual architecture design for a large-scale vacation-rental marketplace.

### Architecture Components

- **Frontend Delivery:** CDN-based content delivery and image optimization.
- **Application Services:** Containerized services orchestrated with Kubernetes.
- **Booking Integrity:** PostgreSQL range constraints and Redis-based locking strategies.
- **Event Streaming:** Apache Kafka for asynchronous event processing.
- **Search & Discovery:** Elasticsearch for property search and filtering.
- **Distributed Transactions:** Saga pattern for coordinating multi-service workflows.

📐 **Architecture resources**

- [View Architecture Documentation](ARCHITECTURE.md)
- [View Architecture Diagram](public/architecture_diagram.svg)

*Note: The architecture is a design proposal accompanying the frontend assessment, not a claim that these backend services have been deployed.*

---

## 🧰 Technology Stack

<div align="center">

| Technology | Purpose |
|---|---|
| ⚛️ React 19 | Component-based UI development |
| ⚡ Vite | Development server and production build |
| 🎨 Vanilla CSS | Custom styling, responsive layouts, and animations |
| 🧩 lucide-react | Consistent iconography |
| 🔤 Inter & Plus Jakarta Sans | Typography |
| 🚀 Vercel | Frontend deployment |
| 🐙 GitHub | Source control and project hosting |

</div>

---

## 🤖 AI-Native Development Workflow

The project follows a structured AI-assisted development workflow, with prompt documentation and specialized skills for reviewing implementation quality.

### Custom AI Skills

| Skill | Responsibility |
|---|---|
| 🎯 `pixel-parity-verifier` | Reviews visual similarity, spacing, colors, and transitions. |
| ♿ `accessibility-checker` | Reviews keyboard navigation, focus handling, and accessibility attributes. |
| 🧹 `code-quality-auditor` | Reviews component organization, modularity, and code quality. |

📄 **Prompt history:** [`AI_PROMPT_SEQUENCE.md`](AI_PROMPT_SEQUENCE.md)

📂 **Custom skills:** [`.agents/skills/`](.agents/skills/)

---

## 🚀 Run Locally

Want to explore or run the project on your machine? Follow these steps.

### Prerequisites

- Node.js 18 or later.
- npm 9 or later.
- Git.

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd Airbnb-clone
```

Replace `<YOUR_GITHUB_REPOSITORY_URL>` with your actual repository URL.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open the application

Visit:

```text
http://localhost:5173
```

### 5. Create a production build

```bash
npm run build
```

The optimized production output will be generated in the `dist/` directory.

---

## 📂 Project Structure

```text
Airbnb-clone/
│
├── .agents/
│   └── skills/
│       ├── code-quality-auditor/
│       ├── accessibility-checker/
│       └── pixel-parity-verifier/
│
├── public/
│   ├── favicon.svg
│   └── architecture_diagram.svg
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ListingHeader.jsx
│   │   ├── HeroGrid.jsx
│   │   ├── ListingInfo.jsx
│   │   ├── Amenities.jsx
│   │   ├── AmenitiesModal.jsx
│   │   ├── CalendarSection.jsx
│   │   ├── BookingCard.jsx
│   │   ├── ReviewsSection.jsx
│   │   ├── LocationSection.jsx
│   │   ├── HostSection.jsx
│   │   ├── PhotoTour.jsx
│   │   ├── Lightbox.jsx
│   │   ├── ShareModal.jsx
│   │   ├── ReserveConfirmationModal.jsx
│   │   ├── ArchitectureModal.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── listingData.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── ARCHITECTURE.md
├── AI_PROMPT_SEQUENCE.md
├── package.json
└── README.md
```

*This tree summarizes the intended organization; filenames may differ slightly in the actual repository.*

---

## ♿ Accessibility & User Experience

Accessibility and interaction quality were considered throughout the implementation.

- Keyboard-based photo navigation.
- Escape-key handling for returning between views.
- Background scroll locking for fullscreen overlays.
- Focus management and ARIA attributes.
- Interactive controls with clear user feedback.
- Responsive layouts and hover interactions.

---

## 🎯 Engineering Challenges & Learnings

One of the main engineering challenges was coordinating navigation across the listing page, fullscreen photo tour, and lightbox.

The solution was to centralize view navigation using a shared view-mode state in `App.jsx`. This helped preserve the photo index and selected room category when returning from the lightbox.

The project also provided practical experience in:

- Building reusable React components.
- Managing interactive UI state.
- Implementing keyboard event handling.
- Creating responsive layouts with custom CSS.
- Documenting system architecture and AI-assisted workflows.

---

## 📦 Assessment Submission

The project was prepared for the Playpower Labs Take-Home Engineering Assessment.

- Complete project source code and assets.
- Architecture diagram and supporting documentation.
- AI prompt sequence and custom skill configurations.
- Publicly deployed frontend demo.

---

<div align="center">

### 💗 Built with attention to detail.

**Designed to recreate the experience. Built to demonstrate the engineering.**

[🌐 Live Demo](https://airbnb-clone-umber-six.vercel.app/) · [📐 Architecture](ARCHITECTURE.md) · [🤖 AI Workflow](AI_PROMPT_SEQUENCE.md)

<br/>

*Thank you for visiting this project!*

</div>
