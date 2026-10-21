import React from 'react';

export default function AboutSection({ onOpenQuote, showHeader = true }) {
  const globalLocations = [
    { city: 'Bengaluru', country: 'India', hub: 'HPC Center & Computational Core', address: 'Technology Corridor, Whitefield' },
    { city: 'Chennai', country: 'India', hub: 'Industrial CFD & Wind Tunnel Engineering', address: 'Engineering Corridor, OMR' },
    { city: 'Germany', country: 'Europe', hub: 'European Multiphysics & R&D Advisory', address: 'Munich / Stuttgart Technology Hub' }
  ];

  return (
    <section id="about" className="about-section-neat">
      {/* Anchor for docs link compatibility */}
      <div id="about-flodynco"></div>

      <div className="about-container-neat" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {showHeader && (
          <div className="section-header text-center" style={{ marginBottom: '44px' }}>
            <div className="section-tag-pill">
              <i className="fas fa-building"></i>
              <span>Engineering Firm Profile</span>
            </div>
            <h2 className="section-title-neat">
              About <span className="highlight-cyan">FloDynCo</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--theme-primary)', fontWeight: 700, margin: '6px 0 12px 0' }}>
              Fluid Dynamics Corporation
            </p>
            <div className="divider-cyan center"></div>
          </div>
        )}

        {/* Lead Mission Statement from User Specification */}
        <div 
          className="about-lead-banner"
          style={{
            background: 'linear-gradient(135deg, rgba(var(--theme-primary-rgb), 0.08) 0%, rgba(6, 182, 212, 0.12) 100%)',
            border: '1px solid var(--theme-border-strong)',
            borderRadius: '16px',
            padding: '24px 32px',
            marginBottom: '40px',
            textAlign: 'center'
          }}
        >
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.5, margin: 0 }}>
            &ldquo;With FLODYNCO, you get a complete multiphysics simulation solution to better understand, manage, and optimize your projects.&rdquo;
          </p>
        </div>

        {/* 2-Column Progression: "How it Started" & "How it's Going" */}
        <div className="about-narrative-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '44px' }}>
          
          {/* Card 1: How it Started */}
          <div 
            className="about-history-card"
            style={{
              background: 'var(--card-bg)',
              borderRadius: '16px',
              border: '1px solid var(--card-border)',
              padding: 'clamp(24px, 3vw, 36px)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'var(--theme-btn-gradient)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem'
                }}
              >
                <i className="fas fa-seedling"></i>
              </div>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', fontWeight: 700 }}>
                  Genesis &amp; Foundation
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                  How it Started
                </h3>
              </div>
            </div>

            <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '14px' }}>
              <strong>FLODYNCO</strong> began with a simple idea: <em>let real-world data drive every engineering decision</em>. Our team combined real-world engineering know-how with industry standards to build simulation solutions that turn complex building behaviour into clear, actionable insight.
            </p>

            <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
              Today, FLODYNCO delivers CFD and multiphysics simulation that fits seamlessly into the engineering decision-making process. Engineers use our results to visualize airflow, temperature, pressure, fire and smoke behaviour, and thermal conditions—so they can evaluate performance, optimize designs, and make decisions with greater confidence.
            </p>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--card-border)', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <span className="badge-pill-cyan" style={{ fontSize: '0.74rem' }}>Real-World Data Driven</span>
              <span className="badge-pill-cyan" style={{ fontSize: '0.74rem' }}>Industry Standard Compliance</span>
            </div>
          </div>

          {/* Card 2: How it's Going */}
          <div 
            className="about-history-card"
            style={{
              background: 'var(--card-bg)',
              borderRadius: '16px',
              border: '1px solid var(--card-border)',
              padding: 'clamp(24px, 3vw, 36px)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem'
                }}
              >
                <i className="fas fa-rocket"></i>
              </div>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', fontWeight: 700 }}>
                  Active Innovation &amp; Research
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                  How it's Going
                </h3>
              </div>
            </div>

            <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '14px' }}>
              Today, <strong>FLODYNCO</strong> is going beyond simulation delivery. We are actively exploring the real-world engineering challenges where CFD and Multiphysics modelling can provide better answers—studying different scenarios, testing approaches, and sharing what we learn through our research.
            </p>

            <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
              Our goal is to bring more visibility to the real world problems with simulations and help the industry recognize where simulation-led engineering can improve the way buildings and systems are designed, evaluated, and optimized.
            </p>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--card-border)', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <span className="badge-pill-cyan" style={{ fontSize: '0.74rem' }}>Scenario Exploration</span>
              <span className="badge-pill-cyan" style={{ fontSize: '0.74rem' }}>Open Research Sharing</span>
            </div>
          </div>

        </div>

        {/* Operating Locations Card (Bengaluru, Chennai, Germany) */}
        <div 
          className="about-locations-box"
          style={{
            background: 'var(--bg-subtle)',
            borderRadius: '16px',
            border: '1px solid var(--theme-border)',
            padding: '28px',
            marginBottom: '40px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
            <div>
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--theme-primary)', fontWeight: 800 }}>
                Global Presence
              </span>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', margin: '4px 0 0 0' }}>
                Operating Locations
              </h4>
            </div>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Official Inquiries: <a href="mailto:contact@flodynco.com" style={{ color: 'var(--theme-primary)', fontWeight: 600 }}>contact@flodynco.com</a>
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            {globalLocations.map((loc, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'var(--card-bg)',
                  borderRadius: '12px',
                  border: '1px solid var(--card-border)',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px'
                }}
              >
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(var(--theme-primary-rgb), 0.1)',
                    color: 'var(--theme-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    flexShrink: 0
                  }}
                >
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <strong style={{ fontSize: '1.08rem', color: 'var(--text-main)' }}>{loc.city}</strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>({loc.country})</span>
                  </div>
                  <span style={{ fontSize: '0.84rem', color: 'var(--theme-primary)', fontWeight: 600, display: 'block', marginTop: '3px' }}>
                    {loc.hub}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>
                    {loc.address}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center' }}>
          <button 
            className="btn-primary-cyan"
            onClick={(e) => {
              e.preventDefault();
              if (onScrollToContact) onScrollToContact();
              else {
                const elem = document.getElementById('contact-flodynco') || document.getElementById('contact');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <i className="fas fa-file-signature"></i>
            <span>Request for Consultation</span>
          </button>
        </div>

      </div>
    </section>
  );
}
