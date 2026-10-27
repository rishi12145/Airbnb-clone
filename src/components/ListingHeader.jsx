import React from 'react';
import { Share, Heart } from 'lucide-react';
import './ListingHeader.css';

export default function ListingHeader({ title, isSaved, onToggleSave, onOpenShare }) {
  return (
    <div className="listing-header">
      <h1 className="listing-title">{title}</h1>
      <div className="listing-header-actions">
        <button 
          className="header-action-btn"
          onClick={onOpenShare}
          aria-label="Share this listing"
        >
          <Share size={16} strokeWidth={2.2} />
          <span className="btn-label">Share</span>
        </button>

        <button 
          className={`header-action-btn ${isSaved ? 'is-saved' : ''}`}
          onClick={onToggleSave}
          aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
        >
          <Heart 
            size={16} 
            strokeWidth={2.2} 
            fill={isSaved ? "#FF385C" : "none"} 
            color={isSaved ? "#FF385C" : "currentColor"} 
          />
          <span className="btn-label">{isSaved ? "Saved" : "Save"}</span>
        </button>
      </div>
    </div>
  );
}
