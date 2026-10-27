import React, { useState, useEffect, useRef } from 'react';
import { Search, Globe, Menu, User, Sparkles, Network, Heart, MessageSquare, Luggage, LogOut } from 'lucide-react';
import './Header.css';

export default function Header({ 
  onOpenArchitecture, 
  currentUser, 
  onOpenAuthModal, 
  onLogout,
  savedCount = 0 
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  // Close dropdown on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showMenu) {
        setShowMenu(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showMenu]);

  return (
    <header className="site-header" role="banner">
      <div className="container header-container">
        {/* Airbnb Logo */}
        <a href="#" className="header-logo" aria-label="Airbnb Homepage">
          <svg
            className="airbnb-logo-svg"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.57-3.21 8.806-8.5 8.806-3.456 0-6.438-1.848-7.97-4.707l-.03-.058-.03.058C11.438 31.152 8.456 33 5 33 1.054 33-1.636 29.83.692 24.195l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C9.758 1.963 11.213 1 13.221 1H16zm0 2.2c-1.233 0-2.18.633-3.084 2.278l-.48 1.003c-1.925 3.774-6.046 12.39-7.017 14.652l-.128.312c-.524 1.25-.726 1.942-.767 2.656l-.008.243c0 3.415 2.378 6.656 6.484 6.656 2.87 0 5.437-1.667 6.643-4.296l.357-.847.357.847C19.563 29.333 22.13 31 25 31c4.106 0 6.484-3.241 6.484-6.656 0-.97-.247-1.868-.775-3.211l-.128-.312c-.971-2.262-5.092-10.878-7.017-14.652l-.48-1.003C22.18 3.833 21.233 3.2 20 3.2H16zm0 12.8c2.43 0 4.4 1.97 4.4 4.4 0 2.247-1.684 4.095-3.86 4.368l-.24.032c-2.43 0-4.4-1.97-4.4-4.4 0-2.247 1.684-4.095 3.86-4.368l.24-.032zm0 2.2c-1.215 0-2.2.985-2.2 2.2 0 1.127.846 2.057 1.932 2.186l.168.014c1.215 0 2.2-.985 2.2-2.2 0-1.127-.846-2.057-1.932-2.186L16 18.2z" />
          </svg>
          <span className="logo-text">airbnb</span>
        </a>

        {/* Compact Search Capsule */}
        <div 
          className="search-capsule" 
          role="button" 
          tabIndex={0}
          onClick={() => setShowSearchModal(true)}
          onKeyDown={(e) => e.key === 'Enter' && setShowSearchModal(true)}
          aria-label="Search mountain chalets in Manali"
        >
          <span className="search-part font-weight-medium">Manali, HP</span>
          <span className="search-divider" />
          <span className="search-part font-weight-medium">Any week</span>
          <span className="search-divider" />
          <span className="search-part search-part-dim">Add guests</span>
          <div className="search-icon-btn" aria-hidden="true">
            <Search size={14} color="#FFFFFF" strokeWidth={3} />
          </div>
        </div>

        {/* Right Nav Menu */}
        <div className="header-actions">
          {/* Architecture Diagram Quick Button for Reviewer */}
          <button 
            className="arch-diagram-btn"
            onClick={onOpenArchitecture}
            title="View Production Architecture Diagram"
          >
            <Network size={16} />
            <span>Architecture Diagram</span>
          </button>

          <button className="header-btn host-btn">
            Airbnb your home
          </button>

          <button className="header-btn globe-btn" aria-label="Choose a language and currency">
            <Globe size={18} />
          </button>

          {/* User Profile Pill Menu */}
          <div className="user-menu-wrapper" ref={menuRef}>
            <button
              className="user-pill-btn"
              onClick={() => setShowMenu(!showMenu)}
              aria-expanded={showMenu}
              aria-haspopup="true"
              aria-label="User navigation menu"
            >
              <Menu size={18} />
              {currentUser ? (
                <div className="user-avatar-active-wrap">
                  <img 
                    src={currentUser.avatar} 
                    alt={currentUser.name} 
                    className="user-avatar-img"
                  />
                  <span className="user-online-dot" />
                </div>
              ) : (
                <div className="user-avatar-placeholder">
                  <User size={16} color="#717171" />
                </div>
              )}
            </button>

            {showMenu && (
              <div className="user-dropdown-menu" role="menu">
                {!currentUser ? (
                  <>
                    <button 
                      className="menu-item font-weight-bold" 
                      onClick={() => {
                        setShowMenu(false);
                        onOpenAuthModal('signup');
                      }}
                      role="menuitem"
                    >
                      Sign up
                    </button>
                    <button 
                      className="menu-item" 
                      onClick={() => {
                        setShowMenu(false);
                        onOpenAuthModal('login');
                      }}
                      role="menuitem"
                    >
                      Log in
                    </button>
                    <div className="dropdown-divider" />
                    <button 
                      className="menu-item text-highlight"
                      onClick={() => { setShowMenu(false); onOpenArchitecture(); }}
                      role="menuitem"
                    >
                      <Sparkles size={16} color="#FF385C" />
                      <span>Production Architecture</span>
                    </button>
                    <a href="#host" className="menu-item" role="menuitem">Airbnb your home</a>
                    <a href="#help" className="menu-item" role="menuitem">Help Center</a>
                  </>
                ) : (
                  <>
                    <div className="menu-user-header">
                      <p className="menu-user-greeting">Signed in as</p>
                      <p className="menu-user-name">{currentUser.name}</p>
                    </div>
                    <div className="dropdown-divider" />
                    <a href="#messages" className="menu-item" role="menuitem">
                      <MessageSquare size={16} />
                      <span>Messages</span>
                    </a>
                    <a href="#trips" className="menu-item" role="menuitem">
                      <Luggage size={16} />
                      <span>Trips</span>
                    </a>
                    <a href="#wishlists" className="menu-item" role="menuitem">
                      <Heart size={16} />
                      <span>Wishlists {savedCount > 0 ? `(${savedCount})` : ''}</span>
                    </a>
                    <div className="dropdown-divider" />
                    <button 
                      className="menu-item text-highlight"
                      onClick={() => { setShowMenu(false); onOpenArchitecture(); }}
                      role="menuitem"
                    >
                      <Sparkles size={16} color="#FF385C" />
                      <span>Production Architecture</span>
                    </button>
                    <a href="#host" className="menu-item" role="menuitem">Airbnb your home</a>
                    <a href="#account" className="menu-item" role="menuitem">Account settings</a>
                    <div className="dropdown-divider" />
                    <button 
                      className="menu-item menu-item-logout"
                      onClick={() => {
                        setShowMenu(false);
                        onLogout();
                      }}
                      role="menuitem"
                    >
                      <LogOut size={16} />
                      <span>Log out</span>
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
