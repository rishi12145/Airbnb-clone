import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  MessageSquare, 
  Award, 
  ChevronRight, 
  X, 
  Check, 
  AlertCircle 
} from 'lucide-react';
import './HostSection.css';

export default function HostSection({ listing }) {
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!contactMessage.trim()) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setShowContactModal(false);
      setContactMessage('');
    }, 2000);
  };

  return (
    <section className="host-section" aria-label="Host information and policies">
      {/* Host Profile Card */}
      <div className="host-profile-card">
        <div className="host-card-left">
          <div className="host-large-avatar-wrap">
            <img 
              src={listing.host.avatar} 
              alt={listing.host.name} 
              className="host-large-avatar" 
            />
            {listing.host.isSuperhost && (
              <div className="superhost-badge-icon" title="Superhost">
                <ShieldCheck size={16} fill="#FF385C" color="#FFFFFF" />
              </div>
            )}
          </div>
          <div className="host-card-titles">
            <h3 className="host-card-name">Hosted by {listing.host.name}</h3>
            <p className="host-card-joined">Superhost · Joined 4 years ago</p>
          </div>
        </div>

        <div className="host-card-stats">
          <div className="host-stat-col">
            <span className="host-stat-value">{listing.reviewCount}</span>
            <span className="host-stat-label">Reviews</span>
          </div>
          <div className="host-stat-col">
            <span className="host-stat-value">{listing.rating} ★</span>
            <span className="host-stat-label">Rating</span>
          </div>
          <div className="host-stat-col">
            <span className="host-stat-value">{listing.host.yearsHosting}</span>
            <span className="host-stat-label">Years hosting</span>
          </div>
        </div>
      </div>

      {/* Host Details & Perks */}
      <div className="host-details-grid">
        <div className="host-perks-col">
          <div className="host-perk-row">
            <Award size={20} className="perk-icon" />
            <div>
              <h4 className="perk-title">{listing.host.name} is a Superhost</h4>
              <p className="perk-desc">
                Superhosts are highly rated, experienced hosts committed to providing outstanding stays.
              </p>
            </div>
          </div>

          <div className="host-perk-row">
            <Clock size={20} className="perk-icon" />
            <div>
              <h4 className="perk-title">Fast communication</h4>
              <p className="perk-desc">
                Response rate: {listing.host.responseRate} · Responds {listing.host.responseTime}
              </p>
            </div>
          </div>

          <div className="host-bio">
            <p>{listing.host.about}</p>
          </div>

          {listing.host.coHosts && listing.host.coHosts.length > 0 && (
            <div className="co-hosts-wrap">
              <span className="co-hosts-title">Co-hosts:</span>
              <span className="co-hosts-names">{listing.host.coHosts.join(', ')}</span>
            </div>
          )}

          <button 
            className="btn-pill contact-host-btn"
            onClick={() => setShowContactModal(true)}
          >
            <MessageSquare size={16} />
            <span>Contact Host</span>
          </button>
        </div>
      </div>

      <div className="section-divider" />

      {/* Things to Know: House Rules, Safety, Cancellation */}
      <div className="things-to-know">
        <h3 className="section-title">Things to know</h3>

        <div className="things-to-know-grid">
          {/* House Rules */}
          <div className="things-col">
            <h4 className="things-col-title">House rules</h4>
            <ul className="things-list">
              {listing.houseRules.map((rule, idx) => (
                <li key={idx} className="things-list-item">
                  <span className="rule-title">{rule.title}:</span> {rule.detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Safety & Property */}
          <div className="things-col">
            <h4 className="things-col-title">Safety & property</h4>
            <ul className="things-list">
              {listing.safetyAndProperty.map((item, idx) => (
                <li key={idx} className="things-list-item">
                  <span className="rule-title">{item.title}:</span> {item.detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Cancellation Policy */}
          <div className="things-col">
            <h4 className="things-col-title">Cancellation policy</h4>
            <p className="cancel-policy-title font-weight-bold">
              {listing.cancellationPolicy.title}
            </p>
            <p className="cancel-policy-detail">
              {listing.cancellationPolicy.detail}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Host Modal */}
      {showContactModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Contact Host">
          <div className="modal-content contact-modal-content">
            <div className="modal-header">
              <button 
                className="modal-close-btn"
                onClick={() => setShowContactModal(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <h3 className="modal-header-title">Message {listing.host.name}</h3>
            </div>

            <div className="contact-modal-body">
              {messageSent ? (
                <div className="message-success-banner">
                  <Check size={28} color="#008A05" />
                  <h4>Message sent to {listing.host.name}!</h4>
                  <p>{listing.host.name} typically responds within an hour.</p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage}>
                  <div className="host-recipient-pill">
                    <img src={listing.host.avatar} alt={listing.host.name} className="recipient-avatar" />
                    <div>
                      <div className="recipient-name">{listing.host.name}</div>
                      <div className="recipient-meta">Superhost · {listing.title}</div>
                    </div>
                  </div>

                  <label className="message-field-label" htmlFor="hostMsg">
                    What would you like to ask the host?
                  </label>
                  <textarea
                    id="hostMsg"
                    className="contact-textarea"
                    rows={5}
                    placeholder="Hi! I'm planning a mountain getaway and have a quick question about the heated jacuzzi and snow views..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    required
                    autoFocus
                  />

                  <div className="contact-modal-actions">
                    <button 
                      type="button" 
                      className="btn-pill"
                      onClick={() => setShowContactModal(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary send-msg-btn">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
