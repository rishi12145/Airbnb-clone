import React, { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import './ReviewsSection.css';

export default function ReviewsSection({ listing }) {
  const [likes, setLikes] = useState({});

  const toggleLike = (reviewId) => {
    setLikes(prev => ({ ...prev, [reviewId]: !prev[reviewId] }));
  };

  const categories = [
    { label: "Cleanliness", score: listing.ratingsBreakdown.cleanliness },
    { label: "Accuracy", score: listing.ratingsBreakdown.accuracy },
    { label: "Check-in", score: listing.ratingsBreakdown.checkIn },
    { label: "Communication", score: listing.ratingsBreakdown.communication },
    { label: "Location", score: listing.ratingsBreakdown.location },
    { label: "Value", score: listing.ratingsBreakdown.value }
  ];

  return (
    <section id="reviews" className="reviews-section" aria-label="Guest reviews">
      {/* Header with Laurel wreath and score */}
      <div className="reviews-hero-header">
        <div className="reviews-laurel-badge">
          <span className="laurel-emoji">🌿</span>
          <span className="overall-score-big">{listing.rating}</span>
          <span className="laurel-emoji flip-emoji">🌿</span>
        </div>
        <h3 className="guest-favorite-text">Guest favorite</h3>
        <p className="guest-favorite-subtext">
          One of the most loved homes on Airbnb based on ratings, reviews, and reliability
        </p>
      </div>

      {/* Ratings Categories Breakdown Grid */}
      <div className="ratings-breakdown-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="breakdown-item">
            <div className="breakdown-text-row">
              <span className="category-label">{cat.label}</span>
              <span className="category-score">{cat.score.toFixed(1)}</span>
            </div>
            <div className="score-progress-bar-bg">
              <div 
                className="score-progress-bar-fill" 
                style={{ width: `${(cat.score / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="section-divider" />

      {/* Reviews Cards Grid */}
      <div className="reviews-cards-grid">
        {listing.reviews.map((rev) => (
          <article key={rev.id} className="review-card">
            <div className="reviewer-header">
              <img 
                src={rev.avatar} 
                alt={rev.author} 
                className="reviewer-avatar" 
                loading="lazy"
              />
              <div className="reviewer-info">
                <h4 className="reviewer-name">{rev.author}</h4>
                <p className="reviewer-location">{rev.location}</p>
              </div>
            </div>

            <div className="review-rating-row">
              <div className="review-stars">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={12} fill="#222222" color="#222222" />
                ))}
              </div>
              <span className="review-date">· {rev.date}</span>
              <span className="review-stay-type">· {rev.staySummary}</span>
            </div>

            <p className="review-comment-text">{rev.comment}</p>

            <div className="review-footer-action">
              <button 
                className={`helpful-btn ${likes[rev.id] ? 'is-liked' : ''}`}
                onClick={() => toggleLike(rev.id)}
                aria-label="Mark review as helpful"
              >
                <ThumbsUp size={14} />
                <span>{likes[rev.id] ? "Helpful (1)" : "Helpful"}</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      <button className="btn-pill show-all-reviews-btn">
        Show all {listing.reviewCount} reviews
      </button>
    </section>
  );
}
