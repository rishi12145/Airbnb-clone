import React, { useState, useEffect } from 'react';
import { 
  X, 
  Search, 
  Sparkles, 
  Wind, 
  Sparkle, 
  Droplets, 
  Droplet, 
  Flame, 
  Check, 
  Disc, 
  BedDouble, 
  SunDim, 
  Archive, 
  Tv, 
  Film, 
  Volume2, 
  BookOpen, 
  Snowflake, 
  Fan, 
  Bell, 
  ShieldCheck, 
  Wifi, 
  Laptop, 
  Zap, 
  Utensils, 
  UtensilsCrossed, 
  Coffee, 
  Radio, 
  Compass, 
  Building, 
  Sun, 
  Waves, 
  Car, 
  ArrowUpCircle, 
  Key, 
  Luggage, 
  Calendar 
} from 'lucide-react';
import './Amenities.css';

export default function AmenitiesModal({ amenityCategories, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Keyboard close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Icon resolver
  const renderIcon = (iconName) => {
    const props = { size: 20, strokeWidth: 1.8, className: "amenity-icon" };
    switch(iconName) {
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'Sparkle': return <Sparkle {...props} />;
      case 'Droplets': return <Droplets {...props} />;
      case 'Droplet': return <Droplet {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'Disc': return <Disc {...props} />;
      case 'BedDouble': return <BedDouble {...props} />;
      case 'SunDim': return <SunDim {...props} />;
      case 'Archive': return <Archive {...props} />;
      case 'Tv': return <Tv {...props} />;
      case 'Film': return <Film {...props} />;
      case 'Volume2': return <Volume2 {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Snowflake': return <Snowflake {...props} />;
      case 'Fan': return <Fan {...props} />;
      case 'Bell': return <Bell {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Wifi': return <Wifi {...props} />;
      case 'Laptop': return <Laptop {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'UtensilsCrossed': return <UtensilsCrossed {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'Radio': return <Radio {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'Building': return <Building {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'Waves': return <Waves {...props} />;
      case 'Car': return <Car {...props} />;
      case 'ArrowUpCircle': return <ArrowUpCircle {...props} />;
      case 'Key': return <Key {...props} />;
      case 'Luggage': return <Luggage {...props} />;
      case 'Calendar': return <Calendar {...props} />;
      default: return <Check {...props} />;
    }
  };

  // Filter categories by search
  const filteredCategories = amenityCategories.map(cat => {
    const filteredItems = cat.items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...cat, items: filteredItems };
  }).filter(cat => cat.items.length > 0);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="What this place offers">
      <div className="modal-content amenities-modal-content">
        <div className="amenities-modal-header">
          <button 
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close amenities dialog"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
          <h2 className="amenities-modal-title">What this place offers</h2>
        </div>

        {/* Search Input */}
        <div className="amenities-search-wrap">
          <Search size={18} className="amenities-search-icon" />
          <input
            type="text"
            className="amenities-search-input"
            placeholder="Search amenities (e.g. jacuzzi, wifi, pool)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          {searchTerm && (
            <button 
              className="clear-search-btn"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Categories List */}
        <div className="amenities-modal-body">
          {filteredCategories.length === 0 ? (
            <div className="no-amenities-found">
              <p>No amenities matching "{searchTerm}"</p>
            </div>
          ) : (
            filteredCategories.map((cat, idx) => (
              <div key={idx} className="amenity-cat-block">
                <h3 className="amenity-cat-title">{cat.category}</h3>
                <div className="amenity-items-list">
                  {cat.items.map((item, i) => (
                    <div key={i} className="amenity-item-row">
                      <div className="item-icon-col">
                        {renderIcon(item.icon)}
                      </div>
                      <span className="item-name-col">{item.name}</span>
                    </div>
                  ))}
                </div>
                {idx < filteredCategories.length - 1 && <div className="section-divider" />}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
