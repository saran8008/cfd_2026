import React from 'react';

export default function QuickFeatures({ onNavigate, onOpenQuote }) {
  const features = [
    {
      icon: 'fas fa-fire-flame-curved',
      title: 'Performance Fire & Smoke (FDS)',
      desc: 'Transient computational modeling of smoke stratification, visibility, CO toxicity, and occupant evacuation under NFPA 92 and NBC 2016.',
      tag: 'Life Safety',
      page: 'services'
    },
    {
      icon: 'fas fa-fan',
      title: 'Car Park Jet Fan Ventilation',
      desc: 'Optimized induction thrust jet fan layouts eliminating ductwork, stagnant dead zones, and CO buildup while cutting power consumption.',
      tag: 'Basement Flow',
      page: 'services'
    },
    {
      icon: 'fas fa-server',
      title: 'Data Center Thermal & Cooling',
      desc: 'Conjugate heat transfer simulations eliminating localized rack hotspots, designing cold aisles, and validating CRAH N+1 failure scenarios.',
      tag: 'Mission Critical',
      page: 'services'
    },
    {
      icon: 'fas fa-wind',
      title: 'Pedestrian Wind Microclimate',
      desc: 'Atmospheric boundary layer modeling around skyscrapers assessing Lawson/Davenport comfort criteria and facade wind load pressures.',
      tag: 'Aerodynamics',
      page: 'services'
    }
  ];

  return (
    <section className="quick-features-neat">
      <div className="features-container">
        <div className="section-header text-center">
          <div className="section-tag-pill">
            <i className="fas fa-layer-group"></i>
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title-neat">
            Advanced Physics <span className="highlight-cyan">Turned Into Safe Engineering</span>
          </h2>
          <p className="section-sub-neat">
            From architectural atriums to highway tunnels and hyperscale cloud facilities, our simulations guarantee safety and efficiency.
          </p>
          <div className="divider-cyan center"></div>
        </div>

        <div className="features-grid-neat">
          {features.map((feat, idx) => (
            <div key={idx} className="feature-card-neat">
              <div className="feature-card-top">
                <span className="feature-pill-cyan">{feat.tag}</span>
                <div className="feature-icon-cyan">
                  <i className={feat.icon}></i>
                </div>
              </div>
              <h3 className="feature-card-title">{feat.title}</h3>
              <p className="feature-card-desc">{feat.desc}</p>
              <div className="feature-card-footer">
                <button
                  className="btn-text-cyan"
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Explore Technical Capabilities</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
