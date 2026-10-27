import React, { useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Share, Heart } from 'lucide-react';
import './Lightbox.css';

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
  isSaved,
  onToggleSave,
  onOpenShare
}) {
  const currentPhoto = photos[currentIndex] || photos[0];
  const totalPhotos = photos.length;

  const handlePrev = useCallback(() => {
    const nextIdx = (currentIndex - 1 + totalPhotos) % totalPhotos;
    onNavigate(nextIdx);
  }, [currentIndex, totalPhotos, onNavigate]);

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % totalPhotos;
    onNavigate(nextIdx);
  }, [currentIndex, totalPhotos, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Single photo viewer">
      {/* Header Bar */}
      <div className="lightbox-header">
        <button 
          className="lightbox-close-btn" 
          onClick={onClose}
          aria-label="Close photo viewer (Press Escape)"
        >
          <X size={20} strokeWidth={2.5} />
          <span>Close</span>
        </button>

        <div className="lightbox-counter" aria-live="polite">
          {currentIndex + 1} / {totalPhotos}
        </div>

        <div className="lightbox-actions">
          <button 
            className="lightbox-action-btn"
            onClick={onOpenShare}
            aria-label="Share listing"
          >
            <Share size={16} strokeWidth={2.2} />
          </button>
          
          <button 
            className={`lightbox-action-btn ${isSaved ? 'is-saved' : ''}`}
            onClick={onToggleSave}
            aria-label={isSaved ? "Saved" : "Save"}
          >
            <Heart 
              size={16} 
              strokeWidth={2.2} 
              fill={isSaved ? "#FF385C" : "none"} 
              color={isSaved ? "#FF385C" : "currentColor"} 
            />
          </button>
        </div>
      </div>

      {/* Main Photo Viewer Stage */}
      <div className="lightbox-stage">
        {/* Previous Button */}
        <button 
          className="lightbox-nav-btn btn-prev"
          onClick={handlePrev}
          aria-label="Previous photo (Left arrow key)"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>

        {/* Central Displayed Photo */}
        <div className="lightbox-photo-container">
          <img 
            key={currentPhoto.id}
            src={currentPhoto.url} 
            alt={currentPhoto.title} 
            className="lightbox-active-img"
          />
        </div>

        {/* Next Button */}
        <button 
          className="lightbox-nav-btn btn-next"
          onClick={handleNext}
          aria-label="Next photo (Right arrow key)"
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* Footer Caption & Thumbnail Strip */}
      <div className="lightbox-footer">
        <div className="lightbox-caption-area">
          <div className="lightbox-caption-top">
            <span className="lightbox-room-tag">{currentPhoto.category}</span>
            <h4 className="lightbox-photo-title">{currentPhoto.title}</h4>
          </div>
          <p className="lightbox-photo-desc">{currentPhoto.caption}</p>
        </div>

        {/* Thumbnail Strip */}
        <div className="lightbox-thumbnails">
          {photos.map((photo, idx) => (
            <button
              key={photo.id}
              className={`thumb-btn ${idx === currentIndex ? 'is-active' : ''}`}
              onClick={() => onNavigate(idx)}
              aria-label={`Jump to photo ${idx + 1}`}
            >
              <img src={photo.url} alt={photo.title} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
