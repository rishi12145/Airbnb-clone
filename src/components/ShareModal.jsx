import React, { useState } from 'react';
import { X, Copy, Check, MessageCircle, Mail, Send, Share2 } from 'lucide-react';
import './ShareModal.css';

export default function ShareModal({ listing, onClose }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Share this place">
      <div className="modal-content share-modal-content">
        <div className="modal-header">
          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close share dialog"
          >
            <X size={20} />
          </button>
          <h3 className="modal-header-title">Share this place</h3>
        </div>

        <div className="share-modal-body">
          {/* Listing Preview Snippet */}
          <div className="share-listing-preview">
            <img 
              src={listing.photos[0].url} 
              alt={listing.title} 
              className="share-preview-thumb" 
            />
            <div className="share-preview-info">
              <h4 className="share-preview-title">{listing.title}</h4>
              <p className="share-preview-meta">
                ★ {listing.rating} ({listing.reviewCount}) · {listing.type}
              </p>
            </div>
          </div>

          {/* Share Channels */}
          <div className="share-options-grid">
            <button className="share-channel-btn" onClick={handleCopyLink}>
              <div className="channel-icon-circle">
                {copied ? <Check size={20} color="#008A05" /> : <Copy size={20} />}
              </div>
              <span>{copied ? "Link Copied!" : "Copy Link"}</span>
            </button>

            <a 
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${listing.title} - ${shareUrl}`)}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="share-channel-btn"
            >
              <div className="channel-icon-circle whatsapp-circle">
                <MessageCircle size={20} color="#FFFFFF" />
              </div>
              <span>WhatsApp</span>
            </a>

            <a 
              href={`mailto:?subject=${encodeURIComponent(listing.title)}&body=${encodeURIComponent(`Check out this listing on Airbnb: ${shareUrl}`)}`}
              className="share-channel-btn"
            >
              <div className="channel-icon-circle email-circle">
                <Mail size={20} color="#FFFFFF" />
              </div>
              <span>Email</span>
            </a>

            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${listing.title}: ${shareUrl}`)}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="share-channel-btn"
            >
              <div className="channel-icon-circle x-circle">
                <Send size={20} color="#FFFFFF" />
              </div>
              <span>Twitter / X</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
