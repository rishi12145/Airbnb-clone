import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Network, Layers, ShieldCheck, Database, Server, Cpu } from 'lucide-react';
import './ArchitectureModal.css';

export default function ArchitectureModal({ onClose }) {
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

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="System Architecture Diagram">
      <div className="modal-content arch-modal-content">
        <div className="arch-modal-header">
          <div className="arch-modal-title-wrap">
            <Network size={22} color="#3538CD" />
            <div>
              <h2 className="arch-modal-title">Production-Scale Vacation-Rental Architecture</h2>
              <p className="arch-modal-subtitle">High-throughput scaling strategy for Airbnb-scale marketplace</p>
            </div>
          </div>

          <div className="arch-modal-header-actions">
            <a 
              href="/architecture_diagram.svg" 
              download="Airbnb_Marketplace_Architecture_Diagram.svg"
              className="arch-download-btn"
            >
              <Download size={16} />
              <span>Download Diagram (SVG)</span>
            </a>
            <button 
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close architecture modal"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="arch-modal-body">
          {/* Architecture Diagram Interactive Preview */}
          <div className="arch-diagram-viewport">
            <img 
              src="/architecture_diagram.svg" 
              alt="Airbnb Production Scale Architecture Diagram"
              className="arch-diagram-img" 
            />
          </div>

          {/* Architecture Pillar Breakdowns */}
          <div className="arch-pillars-grid">
            <div className="arch-pillar-card">
              <div className="pillar-header">
                <Layers size={18} color="#0284C7" />
                <h4>1. Frontend & Global Edge CDN</h4>
              </div>
              <p>
                - Modern Single-Page & SSR Hybrid architecture using Vite & React.
                <br />- <strong>Cloudflare Anycast CDN</strong> edge caching static assets, 4K property photos, and virtual tours with sub-20ms TTFB across 300+ edge locations.
                <br />- Dynamic image pipeline with on-the-fly AVIF/WebP conversion and DPR resizing.
              </p>
            </div>

            <div className="arch-pillar-card">
              <div className="pillar-header">
                <Server size={18} color="#7C3AED" />
                <h4>2. Core Backend Microservices</h4>
              </div>
              <p>
                - <strong>Listings Service:</strong> High-read optimized service with geo-partitioning.
                <br />- <strong>Booking Engine:</strong> Distributed locking with <strong>Redis Redlock</strong> to prevent double-booking. Saga orchestrator for 2-phase transactions across payment and ledger.
                <br />- <strong>Dynamic Pricing:</strong> Real-time ML pricing models adjusting rates based on seasonality, occupancy, and Himalayan alpine demand signals.
              </p>
            </div>

            <div className="arch-pillar-card">
              <div className="pillar-header">
                <Cpu size={18} color="#E11D48" />
                <h4>3. Event Streaming & Search</h4>
              </div>
              <p>
                - <strong>Apache Kafka:</strong> High-throughput event backbone handling millions of events/sec for <code>booking.created</code>, <code>listing.updated</code>, and analytics.
                <br />- <strong>OpenSearch / Elasticsearch:</strong> Geo-spatial H3 hexagonal indexing and vector embeddings for instant semantic search and natural language filters.
              </p>
            </div>

            <div className="arch-pillar-card">
              <div className="pillar-header">
                <Database size={18} color="#059669" />
                <h4>4. Storage, Caching & Deployment</h4>
              </div>
              <p>
                - <strong>Storage:</strong> Sharded PostgreSQL / CockroachDB for ACID compliance, multi-region read replicas.
                <br />- <strong>Caching:</strong> Redis Enterprise Cluster caching active listing pages and reviews with 99.8% cache hit ratio.
                <br />- <strong>Deployment:</strong> Kubernetes (EKS/GKE), Terraform IaC, ArgoCD GitOps, and Canary zero-downtime rollouts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
