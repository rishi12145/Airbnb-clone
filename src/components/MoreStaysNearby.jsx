import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';
import './MoreStaysNearby.css';

export default function MoreStaysNearby({ stays = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [savedStayIds, setSavedStayIds] = useState({});

  const itemsPerPage = 5;
  const totalPages = Math.ceil(stays.length / itemsPerPage) || 2;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStays = stays.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage(prev => (prev > 1 ? prev - 1 : totalPages));
  };

  const handleNext = () => {
    setCurrentPage(prev => (prev < totalPages ? prev + 1 : 1));
  };

  const toggleSaveStay = (id, e) => {
    e.stopPropagation();
    setSavedStayIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="more-stays-section" aria-label="More stays nearby">
      <div className="more-stays-header">
        <h2 className="more-stays-title">More stays nearby</h2>
        <div className="more-stays-pagination">
          <span className="pagination-counter">{currentPage}/{totalPages}</span>
          <div className="pagination-buttons">
            <button 
              className={`pagination-arrow-btn ${currentPage === 1 ? 'is-disabled' : ''}`}
              onClick={handlePrev}
              aria-label="Previous stays"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              className={`pagination-arrow-btn ${currentPage === totalPages ? 'is-disabled' : ''}`}
              onClick={handleNext}
              aria-label="Next stays"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="more-stays-grid">
        {currentStays.map((stay) => {
          const isSaved = !!savedStayIds[stay.id];
          return (
            <div key={stay.id} className="stay-card" tabIndex={0} role="article">
              <div className="stay-image-wrapper">
                <img 
                  src={stay.image} 
                  alt={stay.title} 
                  className="stay-card-image"
                  loading="lazy"
                />
                <button 
                  className={`stay-heart-btn ${isSaved ? 'is-saved' : ''}`}
                  onClick={(e) => toggleSaveStay(stay.id, e)}
                  aria-label={isSaved ? "Saved to wishlist" : "Save to wishlist"}
                >
                  <Heart 
                    size={18} 
                    strokeWidth={2.2} 
                    fill={isSaved ? "#FF385C" : "rgba(0, 0, 0, 0.5)"} 
                    color={isSaved ? "#FF385C" : "#FFFFFF"} 
                  />
                </button>
              </div>

              <div className="stay-card-info">
                <h3 className="stay-card-title" title={stay.title}>
                  {stay.title}
                </h3>
                <div className="stay-card-details">
                  <span className="stay-card-price">{stay.price}</span>
                  <div className="stay-card-rating">
                    <Star size={13} fill="#222222" color="#222222" />
                    <span>{stay.rating.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
