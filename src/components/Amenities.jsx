import React, { useState } from 'react';
import { 
  Sparkles, 
  Waves, 
  Wifi, 
  Car, 
  Utensils, 
  Laptop, 
  Snowflake, 
  Sun, 
  Tv, 
  Disc 
} from 'lucide-react';
import AmenitiesModal from './AmenitiesModal';
import './Amenities.css';

export default function Amenities({ amenityCategories }) {
  const [showAllModal, setShowAllModal] = useState(false);

  // Top 10 key preview amenities
  const previewAmenities = [
    { name: "Private hydrotherapy jacuzzi hot tub", icon: <Sparkles size={24} strokeWidth={1.8} /> },
    { name: "Shared designer swimming pool", icon: <Waves size={24} strokeWidth={1.8} /> },
    { name: "High-speed Wi-Fi (150 Mbps)", icon: <Wifi size={24} strokeWidth={1.8} /> },
    { name: "Free parking on premises", icon: <Car size={24} strokeWidth={1.8} /> },
    { name: "Fully equipped kitchen & dining", icon: <Utensils size={24} strokeWidth={1.8} /> },
    { name: "Dedicated workspace desk & chair", icon: <Laptop size={24} strokeWidth={1.8} /> },
    { name: "Split-type ductless air conditioning", icon: <Snowflake size={24} strokeWidth={1.8} /> },
    { name: "Private balcony & sun terrace", icon: <Sun size={24} strokeWidth={1.8} /> },
    { name: "55-inch 4K Smart TV with Netflix", icon: <Tv size={24} strokeWidth={1.8} /> },
    { name: "Washer in building (free)", icon: <Disc size={24} strokeWidth={1.8} /> },
  ];

  // Calculate total count
  const totalCount = amenityCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="amenities-section">
      <h3 className="section-title">What this place offers</h3>

      <div className="amenities-preview-grid">
        {previewAmenities.map((item, idx) => (
          <div key={idx} className="amenity-preview-item">
            <span className="amenity-icon-cell">{item.icon}</span>
            <span className="amenity-name-cell">{item.name}</span>
          </div>
        ))}
      </div>

      <button 
        className="btn-pill show-amenities-btn"
        onClick={() => setShowAllModal(true)}
      >
        Show all {totalCount} amenities
      </button>

      {showAllModal && (
        <AmenitiesModal 
          amenityCategories={amenityCategories}
          onClose={() => setShowAllModal(false)}
        />
      )}
    </div>
  );
}
