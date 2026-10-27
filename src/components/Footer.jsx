import React from 'react';
import { Globe, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-container">
        {/* 4 Navigation Columns */}
        <div className="footer-columns-grid">
          <div className="footer-col">
            <h4 className="footer-col-title">Support</h4>
            <ul className="footer-links-list">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#aircover">AirCover</a></li>
              <li><a href="#anti-discrimination">Anti-discrimination</a></li>
              <li><a href="#disability">Disability support</a></li>
              <li><a href="#cancellation">Cancellation options</a></li>
              <li><a href="#neighborhood-concern">Report neighborhood concern</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Hosting</h4>
            <ul className="footer-links-list">
              <li><a href="#host-home">Airbnb your home</a></li>
              <li><a href="#aircover-hosts">AirCover for Hosts</a></li>
              <li><a href="#hosting-resources">Hosting resources</a></li>
              <li><a href="#community-forum">Community forum</a></li>
              <li><a href="#hosting-responsibly">Hosting responsibly</a></li>
              <li><a href="#join-class">Join a free Hosting class</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Airbnb</h4>
            <ul className="footer-links-list">
              <li><a href="#newsroom">Newsroom</a></li>
              <li><a href="#features">New features</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#investors">Investors</a></li>
              <li><a href="#giftcards">Gift cards</a></li>
              <li><a href="#emergency">Airbnb.org emergency stays</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Vacation Rentals</h4>
            <ul className="footer-links-list">
              <li><a href="#himalayan-chalets">Himalayan Luxury Chalets</a></li>
              <li><a href="#manali-stays">Manali Mountain Retreats</a></li>
              <li><a href="#jacuzzi-suites">Private Heated Jacuzzi Suites</a></li>
              <li><a href="#superhost-homes">Superhost Mountain Estates</a></li>
              <li><a href="#alpine-retreats">Alpine Pine Forest Villas</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        {/* Bottom Legal & Currency row */}
        <div className="footer-bottom-row">
          <div className="footer-legal-left">
            <span>© 2026 Airbnb, Inc.</span>
            <span className="footer-dot">·</span>
            <a href="#privacy">Privacy</a>
            <span className="footer-dot">·</span>
            <a href="#terms">Terms</a>
            <span className="footer-dot">·</span>
            <a href="#sitemap">Sitemap</a>
            <span className="footer-dot">·</span>
            <a href="#company">Company details</a>
          </div>

          <div className="footer-actions-right">
            <button className="footer-currency-btn">
              <Globe size={16} />
              <span>English (IN)</span>
            </button>
            <button className="footer-currency-btn">
              <span>₹ INR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
