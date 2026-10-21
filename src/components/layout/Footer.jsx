import React, { useState } from 'react';
import Logo from '../common/Logo';
import LegalModal from '../legal/LegalModal';

export default function Footer({ onOpenQuote, onNavigate }) {
  const [legalModal, setLegalModal] = useState({ open: false, type: 'privacy' });

  const handleLinkClick = (e, pageId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
    const elem = document.getElementById(pageId) || document.getElementById(`${pageId}-flodynco`);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openLegal = (e, type) => {
    e.preventDefault();
    setLegalModal({ open: true, type });
  };

  return (
    <>
      <footer className="footer-neat">
        <div className="footer-top-accent"></div>
        
        <div className="footer-container">
          <div className="footer-grid">
            {/* Column 1: Brand & Tagline */}
            <div className="footer-col brand-col">
              <div className="footer-logo-wrap">
                <Logo size="medium" showTagline={true} />
              </div>
              <p className="footer-desc" style={{ marginTop: '12px' }}>
                <strong>FloDynCo: Fluid Dynamics Corporation</strong> delivers advanced Computational Fluid Dynamics (CFD), multiphysics modeling, and high-fidelity numerical simulation solutions to optimize engineering decision-making worldwide.
              </p>
              <div className="footer-compliance-badges">
                <span className="badge-pill-cyan">Building Physics</span>
                <span className="badge-pill-cyan">Medical Devices</span>
                <span className="badge-pill-cyan">Industries</span>
                <span className="badge-pill-cyan">Livestock Warehouses</span>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="footer-col">
              <h4 className="footer-heading-neat">Navigation</h4>
              <ul className="footer-links-list">
                <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
                <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About Us</a></li>
                <li><a href="#research" onClick={(e) => handleLinkClick(e, 'research')}>Research &amp; Case Studies</a></li>
                <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact FloDynCo</a></li>
              </ul>
            </div>

            {/* Column 3: Advanced CFD Solutions */}
            <div className="footer-col">
              <h4 className="footer-heading-neat">CFD Solution Areas</h4>
              <ul className="footer-links-list">
                <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Advanced CFD for Building Physics</a></li>
                <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Advanced CFD for Medical Devices</a></li>
                <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Advanced CFD for Industries</a></li>
                <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Advanced CFD for Livestock Warehouse</a></li>
                <li><a href="#research" onClick={(e) => handleLinkClick(e, 'research')}>Explore Research Methodology</a></li>
              </ul>
            </div>

            {/* Column 4: Contact & Operating Locations */}
            <div className="footer-col">
              <h4 className="footer-heading-neat">Contact &amp; Offices</h4>
              <div className="footer-contact-items">
                <div className="footer-contact-item">
                  <i className="fas fa-globe footer-cyan-icon"></i>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.86rem' }}>Operating Locations:</strong>
                    <span style={{ fontSize: '0.86rem' }}>Bengaluru • Chennai • Germany</span>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <i className="fas fa-envelope footer-cyan-icon"></i>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.86rem' }}>Direct Email:</strong>
                    <a href="mailto:contact@flodynco.com" style={{ color: 'var(--theme-primary)', fontWeight: 600 }}>
                      contact@flodynco.com
                    </a>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <i className="fas fa-link footer-cyan-icon"></i>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.86rem' }}>Website:</strong>
                    <a href="https://www.flodynco.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--theme-primary)' }}>
                      https://www.flodynco.com/
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '16px' }}>
                <button 
                  className="btn-primary-cyan w-full text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    const elem = document.getElementById('contact-flodynco') || document.getElementById('contact');
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <i className="fas fa-file-signature"></i>
                  <span>Request for Consultation</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom with Exact Legal Specs */}
          <div className="footer-bottom-neat">
            <div className="footer-bottom-copy">
              &copy; 2026 FloDynCo. All Rights Reserved. Advanced CFD Analysis &amp; Simulation Engineering.
            </div>

            <div className="footer-legal-links" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <a 
                href="#privacy" 
                onClick={(e) => openLegal(e, 'privacy')}
                style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.82rem', transition: 'color 0.2s ease' }}
              >
                Privacy Policy
              </a>
              <span style={{ color: 'var(--card-border)' }}>|</span>
              <a 
                href="#terms" 
                onClick={(e) => openLegal(e, 'terms')}
                style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.82rem', transition: 'color 0.2s ease' }}
              >
                Terms of Service
              </a>
              <span style={{ color: 'var(--card-border)' }}>|</span>
              <a 
                href="#sitemap" 
                onClick={(e) => openLegal(e, 'sitemap')}
                style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.82rem', transition: 'color 0.2s ease' }}
              >
                Sitemap
              </a>
            </div>

            <div className="footer-bottom-tags">
              <span>FloDynCo: Fluid Dynamics Corporation</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Legal Modal */}
      <LegalModal
        isOpen={legalModal.open}
        onClose={() => setLegalModal({ open: false, type: 'privacy' })}
        type={legalModal.type}
      />
    </>
  );
}
