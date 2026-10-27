import React, { useState } from 'react';
import { 
  Sparkles, 
  Award, 
  KeyRound, 
  Wifi, 
  CalendarCheck, 
  BedDouble, 
  Sofa, 
  ChevronRight, 
  Star,
  X
} from 'lucide-react';
import './ListingInfo.css';

export default function ListingInfo({ listing, onOpenPhotoTour }) {
  const [showFullDescModal, setShowFullDescModal] = useState(false);

  const spacesList = [
    { name: "Exterior view", label: "Exterior View", icon: "🌄" },
    { name: "Living area 1", label: "Living Area 1", icon: "🛋️" },
    { name: "Living area 2", label: "Living Area 2", icon: "☕" },
    { name: "Bedroom", label: "Bedroom Suite", icon: "🛏️" },
    { name: "Bathroom interior", label: "Bathroom & Jacuzzi", icon: "🛁" },
    { name: "Kitchen", label: "Kitchen & Dining", icon: "🍳" },
    { name: "Balcony", label: "Balcony & Terrace", icon: "🌲" },
    { name: "Pool", label: "Swimming Pool", icon: "🏊" },
    { name: "Gym", label: "Fitness Gym", icon: "🏋️" },
    { name: "Games / Indoor games", label: "Games Lounge", icon: "🎱" },
    { name: "Table Tennis (TT)", label: "Table Tennis (TT)", icon: "🏓" },
    { name: "Tennis court", label: "Tennis Court", icon: "🎾" }
  ];

  // Icon mapping helper
  const getHighlightIcon = (iconName) => {
    switch(iconName) {
      case 'Sparkles': return <Sparkles size={24} strokeWidth={1.8} />;
      case 'Award': return <Award size={24} strokeWidth={1.8} />;
      case 'KeyRound': return <KeyRound size={24} strokeWidth={1.8} />;
      case 'Wifi': return <Wifi size={24} strokeWidth={1.8} />;
      case 'CalendarCheck': return <CalendarCheck size={24} strokeWidth={1.8} />;
      default: return <Sparkles size={24} strokeWidth={1.8} />;
    }
  };

  return (
    <div className="listing-info-container">
      {/* Property Subtitle & Capacity */}
      <div className="property-specs">
        <h2 className="property-subtitle">{listing.type}</h2>
        <p className="property-capacity-pills">
          <span>{listing.guestCount} guests</span>
          <span className="dot-sep">·</span>
          <span>{listing.bedroomCount} bedroom</span>
          <span className="dot-sep">·</span>
          <span>{listing.bedCount} bed</span>
          <span className="dot-sep">·</span>
          <span>{listing.bathroomCount} bathroom</span>
        </p>
      </div>

      {/* Guest Favorite Badge Banner */}
      {listing.isGuestFavorite && (
        <div className="guest-favorite-banner">
          <div className="gf-left">
            <div className="gf-laurel-badge">
              <span className="laurel-leaf">🌿</span>
              <span className="gf-label">Guest favorite</span>
              <span className="laurel-leaf right-leaf">🌿</span>
            </div>
            <p className="gf-subtitle">
              One of the most loved homes on Airbnb based on ratings, reviews, and reliability
            </p>
          </div>

          <div className="gf-metrics">
            <div className="metric-box">
              <span className="metric-value">{listing.rating}</span>
              <div className="metric-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="#222222" color="#222222" />
                ))}
              </div>
            </div>
            <div className="metric-divider" />
            <div className="metric-box">
              <span className="metric-value">{listing.reviewCount}</span>
              <span className="metric-label">Reviews</span>
            </div>
          </div>
        </div>
      )}

      {/* Host Preview Card */}
      <div className="host-snippet-card">
        <img 
          src={listing.host.avatar} 
          alt={listing.host.name} 
          className="host-snippet-avatar"
        />
        <div className="host-snippet-details">
          <h3 className="host-name">Hosted by {listing.host.name}</h3>
          <p className="host-meta">
            Superhost · {listing.host.yearsHosting} years hosting
          </p>
        </div>
      </div>

      <div className="section-divider" />

      {/* Key Highlights */}
      <div className="highlights-list">
        {listing.highlights.map((item, idx) => (
          <div key={idx} className="highlight-item">
            <div className="highlight-icon-wrap">
              {getHighlightIcon(item.icon)}
            </div>
            <div className="highlight-content">
              <h4 className="highlight-title">{item.title}</h4>
              <p className="highlight-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="section-divider" />

      {/* Explore Property Spaces Section-Wise */}
      <div className="spaces-section">
        <div className="spaces-header-row">
          <div>
            <h3 className="section-title">Explore the spaces</h3>
            <p className="spaces-subtitle">Browse photos room-by-room across all 12 luxury spaces</p>
          </div>
          <button 
            className="show-spaces-btn"
            onClick={() => onOpenPhotoTour && onOpenPhotoTour(0, 'All')}
            aria-label="View all spaces in photo tour"
          >
            <span>View all</span>
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="spaces-chips-grid">
          {spacesList.map((space) => {
            const firstPhotoIndex = listing.photos.findIndex(p => p.category === space.name);
            const count = listing.photos.filter(p => p.category === space.name).length;
            return (
              <button
                key={space.name}
                className="space-chip-card"
                onClick={() => onOpenPhotoTour && onOpenPhotoTour(firstPhotoIndex >= 0 ? firstPhotoIndex : 0, space.name)}
                title={`Open photos of ${space.label}`}
              >
                <span className="space-chip-icon">{space.icon}</span>
                <div className="space-chip-text">
                  <span className="space-chip-label">{space.label}</span>
                  {count > 0 && <span className="space-chip-count">{count} {count === 1 ? 'photo' : 'photos'}</span>}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="section-divider" />

      {/* Sleeping Arrangements */}
      <div className="sleeping-section">
        <h3 className="section-title">Where you'll sleep</h3>
        <div className="sleeping-cards-grid">
          {listing.sleepingArrangements.map((item, idx) => (
            <div key={idx} className="sleeping-card">
              <div className="sleeping-icon-wrap">
                {item.icon === 'BedDouble' ? (
                  <BedDouble size={26} strokeWidth={1.8} />
                ) : (
                  <Sofa size={26} strokeWidth={1.8} />
                )}
              </div>
              <h4 className="sleeping-room">{item.room}</h4>
              <p className="sleeping-bed-type">{item.bedType}</p>
              <p className="sleeping-detail">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider" />

      {/* About this space */}
      <div className="about-section">
        <h3 className="section-title">About this space</h3>
        <p className="about-preview-text">
          {listing.description.slice(0, 380)}...
        </p>
        
        <button 
          className="show-more-link-btn"
          onClick={() => setShowFullDescModal(true)}
          aria-haspopup="dialog"
        >
          <span>Show more</span>
          <ChevronRight size={16} strokeWidth={2.5} />
        </button>
      </div>

      {/* Full Description Modal */}
      {showFullDescModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="About this space">
          <div className="modal-content modal-desc-content">
            <div className="modal-header">
              <button 
                className="modal-close-btn"
                onClick={() => setShowFullDescModal(false)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
              <h3 className="modal-header-title">About this space</h3>
            </div>
            <div className="modal-body modal-desc-body">
              {listing.description.split('\n\n').map((paragraph, i) => (
                <p key={i} className="desc-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
