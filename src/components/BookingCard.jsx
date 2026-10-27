import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Plus, Minus, Flag } from 'lucide-react';
import './BookingCard.css';

export default function BookingCard({
  listing,
  checkInDate,
  checkOutDate,
  onOpenCalendar,
  onReserve
}) {
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const totalGuests = adults + children;
  const maxGuests = listing.guestCount || 3;

  // Calculate nights
  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 4; // default preview: 4 nights
    const diff = Math.abs(new Date(checkOutDate) - new Date(checkInDate));
    return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  const nights = calculateNights();
  const basePrice = listing.pricePerNight * nights;
  const cleaningFee = listing.cleaningFee;
  const serviceFee = Math.round(basePrice * listing.serviceFeeRate);
  const total = basePrice + cleaningFee + serviceFee;

  const formatDateDisplay = (dateStr) => {
    if (!dateStr) return null;
    const [y, m, d] = dateStr.split('-');
    return `${m}/${d}/${y}`;
  };

  return (
    <aside className="booking-card-wrapper" aria-label="Reservation details">
      <div className="booking-card">
        {/* Header: Price & Rating */}
        <div className="booking-header">
          <div className="price-tag">
            <span className="price-amount">{listing.currencySymbol}{listing.pricePerNight.toLocaleString()}</span>
            <span className="price-unit"> / night</span>
          </div>

          <div className="booking-rating-pill">
            <Star size={12} fill="#222222" color="#222222" />
            <span className="rating-score">{listing.rating}</span>
            <span className="rating-dot">·</span>
            <a href="#reviews" className="rating-reviews-link">{listing.reviewCount} reviews</a>
          </div>
        </div>

        {/* Inputs Container (Date Box + Guests Box) */}
        <div className="booking-inputs-box">
          {/* Dates Selector */}
          <div 
            className="booking-dates-row"
            role="button"
            tabIndex={0}
            onClick={onOpenCalendar}
            onKeyDown={(e) => e.key === 'Enter' && onOpenCalendar()}
            aria-label="Select check-in and checkout dates"
          >
            <div className="date-input-cell check-in-cell">
              <span className="cell-label">CHECK-IN</span>
              <span className="cell-value">{formatDateDisplay(checkInDate) || '11/12/2026'}</span>
            </div>
            <div className="date-cell-divider" />
            <div className="date-input-cell checkout-cell">
              <span className="cell-label">CHECKOUT</span>
              <span className="cell-value">{formatDateDisplay(checkOutDate) || '11/16/2026'}</span>
            </div>
          </div>

          {/* Guests Selector */}
          <div className="booking-guests-row">
            <button
              type="button"
              className="guests-dropdown-trigger"
              onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
              aria-expanded={showGuestsDropdown}
              aria-label="Guest count selection"
            >
              <div className="guests-label-wrap">
                <span className="cell-label">GUESTS</span>
                <span className="cell-value">
                  {totalGuests} guest{totalGuests > 1 ? 's' : ''}
                  {infants > 0 ? `, ${infants} infant${infants > 1 ? 's' : ''}` : ''}
                </span>
              </div>
              {showGuestsDropdown ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {/* Dropdown Menu */}
            {showGuestsDropdown && (
              <div className="guests-dropdown-panel" role="region" aria-label="Guest selection controls">
                {/* Adults */}
                <div className="guest-counter-row">
                  <div>
                    <div className="guest-type-name">Adults</div>
                    <div className="guest-type-desc">Age 13+</div>
                  </div>
                  <div className="counter-controls">
                    <button
                      className="counter-btn"
                      disabled={adults <= 1}
                      onClick={() => setAdults(prev => prev - 1)}
                      aria-label="Decrease adults"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="counter-value">{adults}</span>
                    <button
                      className="counter-btn"
                      disabled={totalGuests >= maxGuests}
                      onClick={() => setAdults(prev => prev + 1)}
                      aria-label="Increase adults"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="guest-counter-row">
                  <div>
                    <div className="guest-type-name">Children</div>
                    <div className="guest-type-desc">Ages 2–12</div>
                  </div>
                  <div className="counter-controls">
                    <button
                      className="counter-btn"
                      disabled={children <= 0}
                      onClick={() => setChildren(prev => prev - 1)}
                      aria-label="Decrease children"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="counter-value">{children}</span>
                    <button
                      className="counter-btn"
                      disabled={totalGuests >= maxGuests}
                      onClick={() => setChildren(prev => prev + 1)}
                      aria-label="Increase children"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Infants */}
                <div className="guest-counter-row">
                  <div>
                    <div className="guest-type-name">Infants</div>
                    <div className="guest-type-desc">Under 2</div>
                  </div>
                  <div className="counter-controls">
                    <button
                      className="counter-btn"
                      disabled={infants <= 0}
                      onClick={() => setInfants(prev => prev - 1)}
                      aria-label="Decrease infants"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="counter-value">{infants}</span>
                    <button
                      className="counter-btn"
                      disabled={infants >= 5}
                      onClick={() => setInfants(prev => prev + 1)}
                      aria-label="Increase infants"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="guests-footer-note">
                  This place has a maximum of {maxGuests} guests, not including infants.
                </div>

                <button 
                  className="close-guests-dropdown-btn"
                  onClick={() => setShowGuestsDropdown(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Primary Reserve CTA Button */}
        <button 
          className="btn-primary reserve-cta-btn"
          onClick={() => onReserve({
            nights,
            checkIn: checkInDate || '2026-11-12',
            checkOut: checkOutDate || '2026-11-16',
            totalGuests,
            totalPrice: total
          })}
        >
          Reserve
        </button>

        <p className="wont-charge-notice">You won't be charged yet</p>

        {/* Dynamic Calculation breakdown */}
        <div className="price-breakdown">
          <div className="calc-row">
            <span className="calc-label">
              {listing.currencySymbol}{listing.pricePerNight.toLocaleString()} × {nights} nights
            </span>
            <span className="calc-val">{listing.currencySymbol}{basePrice.toLocaleString()}</span>
          </div>

          <div className="calc-row">
            <span className="calc-label">Cleaning fee</span>
            <span className="calc-val">{listing.currencySymbol}{cleaningFee.toLocaleString()}</span>
          </div>

          <div className="calc-row">
            <span className="calc-label">Airbnb service fee</span>
            <span className="calc-val">{listing.currencySymbol}{serviceFee.toLocaleString()}</span>
          </div>

          <div className="calc-divider" />

          <div className="calc-row total-row">
            <span className="total-label">Total before taxes</span>
            <span className="total-val">{listing.currencySymbol}{total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Report listing */}
      <div className="report-listing-wrap">
        <a href="#report" className="report-link">
          <Flag size={14} />
          <span>Report this listing</span>
        </a>
      </div>
    </aside>
  );
}
