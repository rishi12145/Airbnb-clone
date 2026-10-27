import React, { useState } from 'react';
import Header from './components/Header';
import ListingHeader from './components/ListingHeader';
import HeroGrid from './components/HeroGrid';
import ListingInfo from './components/ListingInfo';
import Amenities from './components/Amenities';
import CalendarSection from './components/CalendarSection';
import BookingCard from './components/BookingCard';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import HostSection from './components/HostSection';
import MoreStaysNearby from './components/MoreStaysNearby';
import Footer from './components/Footer';

// Modals & Views
import PhotoTour from './components/PhotoTour';
import Lightbox from './components/Lightbox';
import ShareModal from './components/ShareModal';
import ReserveConfirmationModal from './components/ReserveConfirmationModal';
import ArchitectureModal from './components/ArchitectureModal';
import AuthModal from './components/AuthModal';

import { listingData } from './data/listingData';

export default function App() {
  // Navigation / View modes: 'listing' | 'photoTour' | 'lightbox'
  const [viewMode, setViewMode] = useState('listing');
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [tourCategory, setTourCategory] = useState('All');

  // User interaction states
  const [isSaved, setIsSaved] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState(false);
  const [reservationData, setReservationData] = useState(null);

  // Sign up & Log in Auth modal states
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('signup');
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('airbnb_clone_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  // Selected dates state (synced between Calendar and BookingCard)
  const [checkInDate, setCheckInDate] = useState('2026-11-12');
  const [checkOutDate, setCheckOutDate] = useState('2026-11-16');

  // Handlers for Views
  const handleOpenPhotoTour = (initialIndex = 0, category = 'All') => {
    setLightboxIndex(initialIndex);
    setTourCategory(category);
    setViewMode('photoTour');
  };

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setViewMode('lightbox');
  };

  const handleCloseLightbox = () => {
    // Returns back to Photo Tour as expected in Airbnb flow
    setViewMode('photoTour');
  };

  const handleClosePhotoTour = () => {
    setViewMode('listing');
  };

  const handleToggleSave = () => {
    setIsSaved(prev => !prev);
  };

  const handleDatesSelect = (checkIn, checkOut) => {
    setCheckInDate(checkIn);
    setCheckOutDate(checkOut);
  };

  const handleClearDates = () => {
    setCheckInDate(null);
    setCheckOutDate(null);
  };

  const handleReserve = (data) => {
    setReservationData(data);
  };

  const handleScrollToCalendar = () => {
    const calEl = document.getElementById('calendar-anchor');
    if (calEl) {
      calEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auth Handlers
  const handleOpenAuthModal = (mode = 'signup') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('airbnb_clone_user', JSON.stringify(user));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('airbnb_clone_user');
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  };

  return (
    <div className="airbnb-app">
      {/* View 1: Main Listing Page */}
      <Header 
        onOpenArchitecture={() => setIsArchitectureModalOpen(true)}
        currentUser={currentUser}
        onOpenAuthModal={handleOpenAuthModal}
        onLogout={handleLogout}
        savedCount={isSaved ? 1 : 0}
      />

      <main className="container" role="main">
        {/* Listing Title, Share, Save */}
        <ListingHeader 
          title={listingData.title}
          isSaved={isSaved}
          onToggleSave={handleToggleSave}
          onOpenShare={() => setIsShareModalOpen(true)}
        />

        {/* Hero 5-Photo Mosaic Grid */}
        <HeroGrid 
          photos={listingData.photos}
          onOpenPhotoTour={handleOpenPhotoTour}
        />

        {/* 2-Column Listing Layout */}
        <div className="listing-layout">
          {/* Left Column (65% width) */}
          <div className="listing-left-column">
            {/* Host summary, highlights, sleeping, description */}
            <ListingInfo 
              listing={listingData} 
              onOpenPhotoTour={handleOpenPhotoTour}
            />

            <div className="section-divider" />

            {/* 10 Key Amenities + Modal trigger */}
            <Amenities amenityCategories={listingData.amenityCategories} />

            <div className="section-divider" id="calendar-anchor" />

            {/* Dual Month Calendar */}
            <CalendarSection 
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              onSelectDates={handleDatesSelect}
              onClearDates={handleClearDates}
            />
          </div>

          {/* Right Column: Sticky Booking Widget (35% width) */}
          <div className="listing-right-column">
            <BookingCard 
              listing={listingData}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              onOpenCalendar={handleScrollToCalendar}
              onReserve={handleReserve}
            />
          </div>
        </div>

        <div className="section-divider" />

        {/* Full-width Reviews Section */}
        <ReviewsSection listing={listingData} />

        <div className="section-divider" />

        {/* Location & Mountain Map */}
        <LocationSection listing={listingData} />

        <div className="section-divider" />

        {/* Host Details, House Rules & Policies */}
        <HostSection listing={listingData} />

        <div className="section-divider" />

        {/* More stays nearby - Matching User Screenshot */}
        <MoreStaysNearby stays={listingData.moreStaysNearby} />
      </main>

      {/* Comprehensive Desktop Footer */}
      <Footer />

      {/* ================= VIEW 2: PHOTO TOUR MODAL ================= */}
      {viewMode === 'photoTour' && (
        <PhotoTour 
          photos={listingData.photos}
          onClose={handleClosePhotoTour}
          onSelectPhotoForLightbox={handleOpenLightbox}
          isSaved={isSaved}
          onToggleSave={handleToggleSave}
          onOpenShare={() => setIsShareModalOpen(true)}
          initialCategory={tourCategory}
        />
      )}

      {/* ================= VIEW 3: LIGHTBOX VIEWER ================= */}
      {viewMode === 'lightbox' && (
        <Lightbox 
          photos={listingData.photos}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onNavigate={(idx) => setLightboxIndex(idx)}
          isSaved={isSaved}
          onToggleSave={handleToggleSave}
          onOpenShare={() => setIsShareModalOpen(true)}
        />
      )}

      {/* Share Modal */}
      {isShareModalOpen && (
        <ShareModal 
          listing={listingData}
          onClose={() => setIsShareModalOpen(false)}
        />
      )}

      {/* Reservation Confirmed Modal */}
      {reservationData && (
        <ReserveConfirmationModal 
          reservation={reservationData}
          listing={listingData}
          onClose={() => setReservationData(null)}
        />
      )}

      {/* Architecture Diagram Modal */}
      {isArchitectureModalOpen && (
        <ArchitectureModal 
          onClose={() => setIsArchitectureModalOpen(false)}
        />
      )}

      {/* Sign Up / Log In Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        initialMode={authModalMode}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
