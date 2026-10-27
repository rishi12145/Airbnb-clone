import React from 'react';
import { LayoutGrid } from 'lucide-react';
import './HeroGrid.css';

export default function HeroGrid({ photos, onOpenPhotoTour }) {
  // Use first 5 photos for hero grid
  const heroPhotos = photos.slice(0, 5);

  return (
    <section className="hero-grid-section" aria-label="Photo gallery preview">
      <div className="hero-grid-container">
        {/* Main Large Photo (Left) */}
        <div 
          className="hero-col hero-col-main"
          role="button"
          tabIndex={0}
          onClick={() => onOpenPhotoTour(0)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenPhotoTour(0)}
          aria-label={`View photo 1: ${heroPhotos[0]?.title || 'Property'}`}
        >
          <img 
            src={heroPhotos[0]?.url} 
            alt={heroPhotos[0]?.title} 
            className="hero-img"
            loading="eager"
          />
          <div className="hero-img-overlay" />
        </div>

        {/* 4 Secondary Photos in 2x2 Grid (Right) */}
        <div className="hero-col hero-col-sub">
          {heroPhotos.slice(1, 5).map((photo, index) => {
            const photoIndex = index + 1;
            return (
              <div 
                key={photo.id || index}
                className={`hero-sub-cell cell-${index}`}
                role="button"
                tabIndex={0}
                onClick={() => onOpenPhotoTour(photoIndex)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenPhotoTour(photoIndex)}
                aria-label={`View photo ${photoIndex + 1}: ${photo.title}`}
              >
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="hero-img"
                  loading="lazy"
                />
                <div className="hero-img-overlay" />
              </div>
            );
          })}
        </div>

        {/* "Show all photos" Floating Button */}
        <button 
          className="show-all-photos-btn"
          onClick={() => onOpenPhotoTour(0)}
          aria-label={`Show all ${photos.length} photos in photo tour`}
        >
          <LayoutGrid size={16} strokeWidth={2.4} />
          <span>Show all {photos.length} photos</span>
        </button>
      </div>
    </section>
  );
}
