import React, { useState, useEffect } from 'react';
import Logo from '../common/Logo';
import ThemeSwitcher from '../common/ThemeSwitcher';

export default function Navbar({ onOpenQuote, currentPage = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Research', id: 'research' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    setMobileOpen(false);
    
    let targetId = pageId;
    if (pageId === 'home') targetId = 'hero';
    if (pageId === 'about') targetId = 'about-flodynco';
    if (pageId === 'contact') targetId = 'contact-flodynco';

    const elem = document.getElementById(targetId) || document.getElementById(pageId) || document.getElementById(`${pageId}-flodynco`);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleConsultationClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    const elem = document.getElementById('contact-flodynco') || document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className={`navbar-neat ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo Component */}
          <a 
            href="#hero" 
            className="nav-logo-link" 
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <Logo size="medium" showTagline={true} />
          </a>

          {/* Desktop Nav Links */}
          <div className="nav-links-neat">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id === 'home' ? 'hero' : item.id === 'about' ? 'about-flodynco' : item.id === 'contact' ? 'contact-flodynco' : item.id}`}
                  className={`nav-link-neat ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="nav-active-pill"></span>}
                </a>
              );
            })}

            {/* Theme & Palette Switcher Button in Navbar */}
            <ThemeSwitcher />
            
            <button 
              className="btn-quote-nav-cyan" 
              onClick={handleConsultationClick}
              id="quote-header-btn"
            >
              <i className="fas fa-file-signature"></i>
              <span>Request Consultation</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="mobile-nav-right">
            <ThemeSwitcher />
            <button 
              className="mobile-toggle-neat" 
              id="menu-toggle-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`drawer-backdrop-neat ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      >
        <div 
          className={`drawer-panel-neat ${mobileOpen ? 'open' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="drawer-header-neat">
            <Logo size="small" showTagline={false} />
            <button 
              className="drawer-close-btn"
              onClick={() => setMobileOpen(false)}
              aria-label="Close Menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="drawer-links-neat">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`drawer-link-neat ${currentPage === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                <span>{item.label}</span>
                <i className="fas fa-chevron-right chevron-icon"></i>
              </a>
            ))}
          </div>

          <div className="drawer-footer-neat">
            <button 
              className="btn-primary-cyan w-full"
              onClick={handleConsultationClick}
            >
              <i className="fas fa-file-signature"></i>
              <span>Request Consultation</span>
            </button>
            <div className="drawer-contact-mini">
              <a href="mailto:contact@flodynco.com"><i className="fas fa-envelope"></i> contact@flodynco.com</a>
              <span className="drawer-locations-text"><i className="fas fa-map-marker-alt"></i> Bengaluru • Chennai • Germany</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
