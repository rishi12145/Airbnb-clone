import React, { useEffect } from 'react';
import { X, CheckCircle2, Calendar, Users, MapPin, Sparkles, Receipt } from 'lucide-react';
import './ReserveConfirmationModal.css';

export default function ReserveConfirmationModal({ reservation, listing, onClose }) {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const bookingCode = "AIRBNB-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Reservation Confirmed">
      {/* Confetti particles */}
      <div className="confetti-container" aria-hidden="true">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="confetti-particle" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 0.8}s`,
              backgroundColor: ['#FF385C', '#00A699', '#FC642D', '#484848', '#FFB400'][i % 5]
            }} 
          />
        ))}
      </div>

      <div className="modal-content confirmation-modal-content">
        <div className="confirmation-header">
          <button 
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close confirmation dialog"
          >
            <X size={20} />
          </button>
          <div className="confirmation-badge">
            <CheckCircle2 size={28} color="#008A05" />
            <h3>Reservation Confirmed!</h3>
          </div>
        </div>

        <div className="confirmation-body">
          <div className="confirmation-recap-banner">
            <img 
              src={listing.photos[0].url} 
              alt={listing.title} 
              className="confirmation-thumb" 
            />
            <div className="confirmation-details">
              <h4>{listing.title}</h4>
              <p className="confirmation-code">Confirmation code: <strong>{bookingCode}</strong></p>
              <p className="confirmation-host">Hosted by {listing.host.name} · Superhost</p>
            </div>
          </div>

          <div className="confirmation-specs-grid">
            <div className="spec-card">
              <Calendar size={18} className="spec-icon" />
              <div>
                <span className="spec-label">Dates</span>
                <span className="spec-value">{reservation.checkIn} → {reservation.checkOut}</span>
                <span className="spec-sub">{reservation.nights} nights</span>
              </div>
            </div>

            <div className="spec-card">
              <Users size={18} className="spec-icon" />
              <div>
                <span className="spec-label">Guests</span>
                <span className="spec-value">{reservation.totalGuests} guests</span>
                <span className="spec-sub">Unit UG10</span>
              </div>
            </div>

            <div className="spec-card">
              <MapPin size={18} className="spec-icon" />
              <div>
                <span className="spec-label">Location</span>
                <span className="spec-value">{listing.location || "Manali, Himachal Pradesh"}</span>
                <span className="spec-sub">Keypad check-in</span>
              </div>
            </div>

            <div className="spec-card">
              <Receipt size={18} className="spec-icon" />
              <div>
                <span className="spec-label">Total Paid</span>
                <span className="spec-value">₹{reservation.totalPrice.toLocaleString()}</span>
                <span className="spec-sub">All taxes included</span>
              </div>
            </div>
          </div>

          <div className="arrival-instructions-box">
            <div className="instructions-header">
              <Sparkles size={18} color="#FF385C" />
              <strong>Private Jacuzzi & Arrival Guide</strong>
            </div>
            <p>
              Your keyless smart lock code and heated Jacuzzi user guide will be sent 
              to your phone number 24 hours prior to check-in. {listing.host.name}'s concierge team is on standby 
              to ensure a magical alpine mountain getaway!
            </p>
          </div>

          <button className="btn-primary done-btn" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
