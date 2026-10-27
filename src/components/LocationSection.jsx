import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Plus, Minus, Mountain, Trees } from 'lucide-react';
import './LocationSection.css';

export default function LocationSection({ listing }) {
  const [zoomLevel, setZoomLevel] = useState(14);

  return (
    <section className="location-section" aria-label="Location and neighborhood">
      <h3 className="section-title">Where you'll be</h3>
      <h4 className="location-subhead">{listing.location}</h4>

      {/* Styled Interactive Visual Mountain Map */}
      <div className="custom-map-card">
        {/* Map Canvas Visual (SVG Vector Map of Manali Mountain Valley) */}
        <div className="map-canvas-container" style={{ transform: `scale(${zoomLevel / 14})` }}>
          <svg className="candolim-map-svg" viewBox="0 0 800 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="snowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E2E8F0" />
                <stop offset="50%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#94A3B8" />
              </linearGradient>
              <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>
              <linearGradient id="pineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ECFDF5" />
                <stop offset="100%" stopColor="#D1FAE5" />
              </linearGradient>
              <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="1" />
              </pattern>
            </defs>

            {/* Background Mountain Valley Terrain */}
            <rect x="0" y="0" width="800" height="400" fill="#F8FAFC" />
            <rect x="0" y="0" width="800" height="400" fill="url(#gridPattern)" />

            {/* Alpine Pine Forest Reserves */}
            <path d="M 0,0 L 300,0 L 220,160 L 120,400 L 0,400 Z" fill="url(#pineGrad)" opacity="0.8" />
            <path d="M 520,0 L 800,0 L 800,400 L 640,400 L 580,240 Z" fill="url(#pineGrad)" opacity="0.7" />

            {/* Snow Peaks Ridge (Top) */}
            <polygon points="120,30 180,90 60,90" fill="url(#snowGrad)" />
            <polygon points="170,20 230,85 110,85" fill="url(#snowGrad)" />
            <polygon points="680,25 750,95 610,95" fill="url(#snowGrad)" />
            <polygon points="730,15 800,85 660,85" fill="url(#snowGrad)" />
            <text x="60" y="45" fill="#64748B" fontSize="12" fontWeight="700">PIR PANJAL RANGE</text>
            <text x="640" y="40" fill="#64748B" fontSize="12" fontWeight="700">SOLANG RIDGE</text>

            {/* River Beas */}
            <path 
              d="M 280,0 C 290,80 340,150 370,220 C 400,290 390,340 430,400" 
              fill="none" 
              stroke="url(#riverGrad)" 
              strokeWidth="14" 
              opacity="0.85"
            />
            <text x="310" y="140" fill="#0284C7" fontSize="13" fontWeight="700" transform="rotate(65, 310, 140)">
              River Beas
            </text>

            {/* Mountain Roads & Trails */}
            <path d="M 180,400 C 260,310 250,180 340,0" fill="none" stroke="#94A3B8" strokeWidth="8" />
            <path d="M 180,400 C 260,310 250,180 340,0" fill="none" stroke="#FFFFFF" strokeWidth="5" />
            <text x="220" y="270" fill="#475569" fontSize="11" fontWeight="600" transform="rotate(-60, 220, 270)">
              Solang Valley Alpine Hwy
            </text>

            <path d="M 240,210 L 720,210" fill="none" stroke="#CBD5E1" strokeWidth="6" />
            <path d="M 240,210 L 720,210" fill="none" stroke="#FFFFFF" strokeWidth="4" />
            <text x="470" y="200" fill="#64748B" fontSize="11" fontWeight="600">Whispering Pines Estate Way</text>

            {/* Points of Interest */}
            <g transform="translate(480, 110)">
              <circle cx="0" cy="0" r="4" fill="#059669" />
              <text x="8" y="4" fill="#334155" fontSize="12" fontWeight="600">Old Manali Pine Sanctuary</text>
            </g>

            <g transform="translate(620, 170)">
              <circle cx="0" cy="0" r="4" fill="#2563EB" />
              <text x="8" y="4" fill="#334155" fontSize="12" fontWeight="600">Solang Valley Ski Centre</text>
            </g>

            <g transform="translate(420, 310)">
              <circle cx="0" cy="0" r="4" fill="#D97706" />
              <text x="8" y="4" fill="#334155" fontSize="12" fontWeight="600">Manali Mall Road & Cafes</text>
            </g>
          </svg>

          {/* Listing Pin Marker with Radar Circle */}
          <div className="map-pin-container" style={{ top: '48%', left: '56%' }}>
            <div className="pin-radar-ring" />
            <div className="pin-home-marker">
              <div className="pin-icon-inner">
                <MapPin size={22} color="#FFFFFF" fill="#FF385C" />
              </div>
              <div className="pin-bubble-card">
                <span className="pin-listing-title">The Grand Himalayan Chalet · Manali</span>
                <span className="pin-listing-exact">Exact mountain location provided after booking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Zoom Controls Overlay */}
        <div className="map-controls">
          <button 
            className="map-ctrl-btn" 
            onClick={() => setZoomLevel(prev => Math.min(18, prev + 1))}
            aria-label="Zoom in"
          >
            <Plus size={16} />
          </button>
          <div className="ctrl-divider" />
          <button 
            className="map-ctrl-btn" 
            onClick={() => setZoomLevel(prev => Math.max(10, prev - 1))}
            aria-label="Zoom out"
          >
            <Minus size={16} />
          </button>
        </div>
      </div>

      {/* Neighborhood Proximity Info */}
      <div className="neighborhood-info">
        <h4 className="neighborhood-title">About the mountain neighborhood</h4>
        <p className="neighborhood-desc">
          Perched in the tranquil upper hills of Manali overlooking the snow-capped Pir Panjal range, 
          Whispering Pines Estate offers pure alpine serenity, crisp Himalayan pine air, and immediate access to 
          hiking trails, apple orchards, heated hot springs, and skiing slopes, while being just an 8-minute 
          scenic drive from Manali's vibrant artisan cafes and Mall Road.
        </p>

        <div className="proximity-pills-row">
          <div className="proximity-pill">
            <Trees size={14} className="pill-icon" />
            <span>Pine Forest Trails – 2 min walk (Direct Estate Access)</span>
          </div>
          <div className="proximity-pill">
            <Mountain size={14} className="pill-icon" />
            <span>Solang Valley Ski Lifts – 14 min drive</span>
          </div>
          <div className="proximity-pill">
            <Navigation size={14} className="pill-icon" />
            <span>Old Manali & Mall Road – 8 min drive</span>
          </div>
          <div className="proximity-pill">
            <Compass size={14} className="pill-icon" />
            <span>Kullu-Manali Airport (Bhuntar) – 50 min scenic drive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
