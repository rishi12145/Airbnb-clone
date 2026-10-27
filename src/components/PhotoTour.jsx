import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  Share, 
  Heart, 
  Sparkles, 
  Compass, 
  Tv, 
  BookOpen, 
  BedDouble, 
  Droplets, 
  Utensils, 
  Sun, 
  Waves, 
  Dumbbell, 
  Trophy, 
  Activity, 
  Award, 
  Building 
} from 'lucide-react';
import './PhotoTour.css';

export default function PhotoTour({ 
  photos, 
  onClose, 
  onSelectPhotoForLightbox,
  isSaved,
  onToggleSave,
  onOpenShare,
  initialCategory = "All"
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const sectionRefs = useRef({});

  // Preferred category order matching user requirements
  const categoryOrder = [
    "Exterior view",
    "Living area 1",
    "Living area 2",
    "Bedroom",
    "Bathroom interior",
    "Kitchen",
    "Balcony",
    "Pool",
    "Gym",
    "Games / Indoor games",
    "Table Tennis (TT)",
    "Tennis court",
    "Walking lobby & Grounds"
  ];

  // Group photos by section/category
  const groupedPhotos = categoryOrder.reduce((acc, cat) => {
    const matched = photos.filter(p => p.category === cat);
    if (matched.length > 0) {
      acc[cat] = matched;
    }
    return acc;
  }, {});

  // Add any other categories not explicitly listed in categoryOrder
  photos.forEach(photo => {
    if (!groupedPhotos[photo.category]) {
      if (!groupedPhotos[photo.category]) groupedPhotos[photo.category] = [];
      groupedPhotos[photo.category].push(photo);
    }
  });

  const availableCategories = ["All", ...Object.keys(groupedPhotos)];

  // Helper for category icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Exterior view": return <Compass size={18} />;
      case "Living area 1": return <Tv size={18} />;
      case "Living area 2": return <BookOpen size={18} />;
      case "Bedroom": return <BedDouble size={18} />;
      case "Bathroom interior": return <Droplets size={18} />;
      case "Kitchen": return <Utensils size={18} />;
      case "Balcony": return <Sun size={18} />;
      case "Pool": return <Waves size={18} />;
      case "Gym": return <Dumbbell size={18} />;
      case "Games / Indoor games": return <Trophy size={18} />;
      case "Table Tennis (TT)": return <Activity size={18} />;
      case "Tennis court": return <Award size={18} />;
      default: return <Building size={18} />;
    }
  };

  // Helper for category descriptions
  const getCategoryDescription = (category) => {
    switch (category) {
      case "Exterior view":
        return "Breathtaking Himalayan mountain vistas, illuminated timber-and-stone chalet facade, and serene alpine pine valleys.";
      case "Living area 1":
        return "Main grand hearth fireside lounge with vaulted cedar ceilings, 4K Smart TV cinema console, and plush velvet seating.";
      case "Living area 2":
        return "Secondary sunlit glass-enclosed botanical conservatory with panoramic mountain views and quiet reading library.";
      case "Bedroom":
        return "Master bedroom suite with king-size memory foam mattress, goose-down duvets, and private mountain terrace access.";
      case "Bathroom interior":
        return "Spa-inspired bathroom featuring a private heated hydrotherapy jacuzzi with mood lighting, glass rain shower, and heated robes.";
      case "Kitchen":
        return "Chef's gourmet kitchenette with induction cooktop, espresso machine, microwave, and artisan timber breakfast bar.";
      case "Balcony":
        return "Private cedar outdoor terrace with panoramic mountain vistas, alpine seating, and warm evening fire pit.";
      case "Pool":
        return "Year-round heated indoor and infinity mountain pool surrounded by peaceful pine forest canopies.";
      case "Gym":
        return "State-of-the-art panoramic fitness center with cardio equipment, free weights rack, and dedicated yoga studio.";
      case "Games / Indoor games":
        return "Full-sized billiards table, vintage arcade console, and curated library of classic board games.";
      case "Table Tennis (TT)":
        return "Dedicated recreation room equipped with a tournament-grade table tennis table, pro paddles, and spectator seating.";
      case "Tennis court":
        return "All-weather outdoor lawn tennis court set against the backdrop of snow-capped Himalayan peaks.";
      case "Walking lobby & Grounds":
        return "Illuminated stone garden pathways winding through pine trees and the soaring timber reception atrium.";
      default:
        return "Curated spaces and amenities at The Grand Himalayan Chalet.";
    }
  };

  // Handle category tab click
  const handleSelectCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionRefs.current[cat]) {
      sectionRefs.current[cat].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Keyboard navigation: Escape key closes photo tour
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll when photo tour is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="photo-tour-overlay" role="dialog" aria-modal="true" aria-label="Photo tour">
      {/* Top Fixed Header */}
      <div className="photo-tour-header">
        <button 
          className="photo-tour-back-btn" 
          onClick={onClose}
          aria-label="Back to listing page"
        >
          <ArrowLeft size={18} strokeWidth={2.5} />
          <span>Back to listing</span>
        </button>

        <div className="photo-tour-header-actions">
          <button 
            className="tour-action-btn"
            onClick={onOpenShare}
            aria-label="Share listing"
          >
            <Share size={16} strokeWidth={2.2} />
            <span>Share</span>
          </button>
          
          <button 
            className={`tour-action-btn ${isSaved ? 'is-saved' : ''}`}
            onClick={onToggleSave}
            aria-label={isSaved ? "Saved" : "Save"}
          >
            <Heart 
              size={16} 
              strokeWidth={2.2} 
              fill={isSaved ? "#FF385C" : "none"} 
              color={isSaved ? "#FF385C" : "currentColor"} 
            />
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>

      {/* Sticky Categories Navigation Filter */}
      <div className="photo-tour-nav-bar">
        <div className="photo-tour-tabs-container">
          {availableCategories.map((cat) => {
            const count = cat === "All" ? photos.length : (groupedPhotos[cat]?.length || 0);
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                className={`category-tab-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => handleSelectCategory(cat)}
              >
                <span>{cat}</span>
                <span className="category-count">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Photo Gallery Content - Section-Wise Presentation */}
      <div className="photo-tour-body">
        <div className="photo-tour-inner">
          <div className="photo-tour-intro">
            <h2>Photo tour</h2>
            <p>Explore all {photos.length} photos of The Grand Himalayan Chalet & Spa, categorized section-by-section.</p>
          </div>

          {/* Render Sections */}
          <div className="photo-tour-sections-wrapper">
            {Object.keys(groupedPhotos)
              .filter(cat => activeCategory === "All" || activeCategory === cat)
              .map((category) => {
                const sectionPhotos = groupedPhotos[category];
                return (
                  <section 
                    key={category} 
                    className="photo-tour-section"
                    ref={(el) => (sectionRefs.current[category] = el)}
                  >
                    <div className="tour-section-header">
                      <div className="tour-section-title-wrap">
                        <div className="tour-section-icon">
                          {getCategoryIcon(category)}
                        </div>
                        <h3 className="tour-section-title">{category}</h3>
                        <span className="tour-section-badge">{sectionPhotos.length} {sectionPhotos.length === 1 ? 'photo' : 'photos'}</span>
                      </div>
                      <p className="tour-section-desc">{getCategoryDescription(category)}</p>
                    </div>

                    <div className="photo-tour-grid">
                      {sectionPhotos.map((photo) => {
                        const originalIndex = photos.findIndex(p => p.id === photo.id);
                        return (
                          <div 
                            key={photo.id}
                            className="photo-tour-card"
                            role="button"
                            tabIndex={0}
                            onClick={() => onSelectPhotoForLightbox(originalIndex)}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectPhotoForLightbox(originalIndex)}
                            aria-label={`Open photo in lightbox: ${photo.title}`}
                          >
                            <div className="tour-card-image-wrap">
                              <img 
                                src={photo.url} 
                                alt={photo.title}
                                loading="lazy" 
                                className="tour-card-img" 
                              />
                              <div className="tour-card-hover-scrim">
                                <span className="view-fullscreen-pill">
                                  <Sparkles size={14} /> Click to view fullscreen
                                </span>
                              </div>
                            </div>
                            <div className="tour-card-info">
                              <div className="tour-card-meta">
                                <span className="tour-card-category">{photo.category}</span>
                                <h4 className="tour-card-title">{photo.title}</h4>
                              </div>
                              <p className="tour-card-caption">{photo.caption}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
