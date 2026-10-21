import React, { useState } from 'react';

export default function Hero({ onScrollToContact }) {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: 'building-physics',
      title: 'Advanced CFD Solutions for Building Physics',
      shortTitle: 'Building Physics',
      icon: 'fas fa-building',
      tag: 'Architectural & Life Safety',
      highlight: 'Fire, Smoke Tenability & Microclimate',
      desc: 'Simulating complex buoyancy flows, atrium smoke clearance, basement jet fan layouts, and pedestrian wind comfort to guarantee occupant safety and statutory code compliance.',
      features: [
        'Atrium Smoke Clearance & Tenability (NFPA 92 / NBC Part 4)',
        'Ductless Car Park Jet Fan Optimization & CO Purging',
        'Pedestrian Wind Comfort & High-Rise Facade Pressures',
        'Thermal Comfort Modeling (PMV / PPD to ASHRAE 55)'
      ],
      solver: 'Pyrosim / FDS 6.8 & ANSYS Fluent',
      meshDetail: 'Multi-million polyhedral cells',
      metricVal: '100%',
      metricLabel: 'Statutory Approval Rate'
    },
    {
      id: 'medical-devices',
      title: 'Advanced CFD Solutions for Medical Devices',
      shortTitle: 'Medical Devices',
      icon: 'fas fa-heartbeat',
      tag: 'Biofluid & Micro-Scale Flows',
      highlight: 'Hemodynamics & Inhaler Aerosol Deposition',
      desc: 'High-fidelity modeling of non-Newtonian blood shear stress, cardiovascular implants, pulmonary inhaler aerosol trajectories, and sterile microfluidic diagnostic cartridges.',
      features: [
        'Hemolysis & Thrombosis Risk Prediction via Shear Stress',
        'Dry Powder & Nebulizer Aerosol Droplet Deposition (D10-D90)',
        'Cardiovascular Stent & Heart Valve Flow Dynamics',
        'Microfluidic Mixing & Lab-on-a-Chip Channel Transport'
      ],
      solver: 'OpenFOAM Bio-Solver & ANSYS Polyflow',
      meshDetail: 'Sub-micron boundary layer resolution',
      metricVal: '34% Lower',
      metricLabel: 'Peak Shear Stress'
    },
    {
      id: 'industries',
      title: 'Advanced CFD Solutions for Industries',
      shortTitle: 'Industries',
      icon: 'fas fa-industry',
      tag: 'Heavy Process & Multiphysics',
      highlight: 'Plume Dispersion & Rotary Equipment',
      desc: 'Solving conjugate heat transfer (CHT), atmospheric stack dispersion, combustion chambers, rotary kilns, and multi-phase chemical reactors under harsh operational regimes.',
      features: [
        'Atmospheric Stack Plume Dispersion & Environmental Compliance',
        'Conjugate Heat Transfer (CHT) in Furnaces & Kilns',
        'Rotary Equipment, Turbomachinery & Impeller Cavitation',
        'Particulate Cyclone Separation & Duct Erosion Analysis'
      ],
      solver: 'ANSYS Fluent & OpenFOAM Multiphase',
      meshDetail: 'Conjugate Solid-Fluid Mesh Conformal Interface',
      metricVal: '42°C',
      metricLabel: 'Hotspot Reduction'
    },
    {
      id: 'livestock-warehouse',
      title: 'Advanced CFD Solutions for Livestock Warehouse',
      shortTitle: 'Livestock Warehouse',
      icon: 'fas fa-warehouse',
      tag: 'Agricultural Microclimate',
      highlight: 'Ventilation & Ammonia Dissipation',
      desc: 'Optimizing tunnel and cross-ventilation, evaporative pad airflow distribution, animal-level cooling velocities, and toxic ammonia (NH3) gas evacuation in mega poultry and dairy houses.',
      features: [
        'Animal-Occupied Zone Air Velocity Optimization (1.5 - 2.5 m/s)',
        'Temperature Humidity Index (THI) & Heat Stress Mitigation',
        'Ammonia (NH3) & Moisture Stratification Clearance',
        'Evaporative Cooling Pad Airflow & Pressure Drop Tuning'
      ],
      solver: 'Boussinesq Buoyancy & Species Transport CFD',
      meshDetail: 'Full building domain with porous media pad modeling',
      metricVal: '< 15 PPM',
      metricLabel: 'Max Ammonia Threshold'
    }
  ];

  const currentSol = solutions[activeTab];

  const scrollToContact = (e) => {
    if (e) e.preventDefault();
    if (onScrollToContact) {
      onScrollToContact();
    } else {
      const elem = document.getElementById('contact-flodynco') || document.getElementById('contact');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResearch = (e) => {
    if (e) e.preventDefault();
    const elem = document.getElementById('research');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section-neat" style={{ paddingTop: '50px' }}>
      {/* Background Subtle Mesh & Soft Glow */}
      <div className="hero-bg-canvas">
        <div className="hero-bg-grid-pattern"></div>
        <div className="hero-orb hero-orb-cyan-1"></div>
        <div className="hero-orb hero-orb-cyan-2"></div>
        <div className="hero-orb hero-orb-subtle"></div>
      </div>

      <div className="hero-container-neat">
        {/* Top Header Block */}
        <div className="hero-top-intro" style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto 36px auto' }}>
          <div className="hero-badge-cyan" style={{ margin: '0 auto 16px auto', display: 'inline-flex' }}>
            <span className="hero-badge-dot"></span>
            <span>FloDynCo | Fluid Dynamics Corporation</span>
          </div>

          <h1 className="hero-title-neat" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 1.18, marginBottom: '20px' }}>
            FloDynCo | Advanced CFD Analysis &amp;<br />
            <span className="highlight-cyan">Fluid Dynamics Engineering Solutions</span>
          </h1>

          <p className="hero-desc-neat" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: 1.7, color: 'var(--text-body)', maxWidth: '900px', margin: '0 auto' }}>
            <strong>FLODYNCO</strong> uses advanced Computational Fluid Dynamics (CFD) to make complex building performance easier to understand. We help various stack holders and engineers to see how systems perform in the real world—and use that insight to design more efficient, comfortable, and safer buildings.
          </p>

          <div className="hero-actions-neat" style={{ justifyContent: 'center', marginTop: '28px', gap: '14px' }}>
            <button 
              className="btn-primary-cyan" 
              onClick={scrollToContact}
              id="hero-request-quote-btn"
            >
              <i className="fas fa-file-signature"></i>
              <span>Request for Consultation</span>
            </button>
            
            <a 
              href="#research" 
              className="btn-secondary-cyan" 
              onClick={scrollToResearch}
              id="hero-research-btn"
            >
              <i className="fas fa-microscope"></i>
              <span>Explore Research</span>
            </a>
          </div>
        </div>

        {/* 4 Solutions Interactive Selector (Mechartes-Inspired Technical Showcase) */}
        <div className="hero-solutions-showcase" style={{ marginTop: '30px' }}>
          {/* Tab Selector Pills */}
          <div className="hero-tabs-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '20px' }}>
            {solutions.map((sol, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(index)}
                  className={`hero-solution-tab ${isActive ? 'active' : ''}`}
                  style={{
                    padding: '14px 18px',
                    borderRadius: '12px',
                    border: isActive ? '2px solid var(--theme-primary)' : '1px solid var(--card-border)',
                    background: isActive ? 'var(--card-bg)' : 'rgba(var(--theme-primary-rgb), 0.04)',
                    boxShadow: isActive ? 'var(--shadow-md), 0 0 16px rgba(var(--theme-primary-rgb), 0.2)' : 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: isActive ? 'var(--theme-btn-gradient)' : 'var(--bg-subtle)',
                      color: isActive ? '#FFFFFF' : 'var(--theme-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      flexShrink: 0
                    }}
                  >
                    <i className={sol.icon}></i>
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <span style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700 }}>
                      Solution 0{index + 1}
                    </span>
                    <strong style={{ display: 'block', fontSize: '0.88rem', color: isActive ? 'var(--theme-primary)' : 'var(--text-main)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                      {sol.shortTitle}
                    </strong>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Solution Detail Card */}
          <div 
            className="hero-active-solution-card"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--theme-border-strong)',
              borderRadius: '18px',
              padding: 'clamp(20px, 3.5vw, 36px)',
              boxShadow: 'var(--shadow-xl)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Left Col: Details */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span className="badge-pill-cyan" style={{ fontSize: '0.78rem' }}>
                  <i className={currentSol.icon} style={{ marginRight: '6px' }}></i>
                  {currentSol.tag}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  <i className="fas fa-microchip" style={{ marginRight: '5px', color: 'var(--theme-primary)' }}></i>
                  {currentSol.solver}
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px', lineHeight: 1.25 }}>
                {currentSol.title}
              </h2>

              <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '20px' }}>
                {currentSol.desc}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '24px' }}>
                {currentSol.features.map((feat, fIdx) => (
                  <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <i className="fas fa-check-circle" style={{ color: 'var(--theme-primary)', marginTop: '4px', fontSize: '0.88rem' }}></i>
                    <span style={{ fontSize: '0.84rem', color: 'var(--text-main)', fontWeight: 500, lineHeight: 1.4 }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button 
                  className="btn-primary-cyan"
                  onClick={scrollToContact}
                >
                  <i className="fas fa-file-signature"></i>
                  <span>Request for Consultation</span>
                </button>
                <a 
                  href="#research" 
                  className="btn-secondary-cyan"
                  onClick={scrollToResearch}
                >
                  <span>Explore Research Cases &rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Col: Technical Visualizer */}
            <div 
              style={{
                background: 'var(--bg-subtle)',
                borderRadius: '14px',
                border: '1px solid var(--card-border)',
                padding: '24px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '290px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--theme-border)', paddingBottom: '12px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="pulse-dot"></span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--theme-primary)' }}>
                    CFD SOLVER MATRIX
                  </span>
                </div>
                <span style={{ fontSize: '0.72rem', background: 'rgba(var(--theme-primary-rgb), 0.1)', color: 'var(--theme-primary)', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
                  Active Mesh Simulation
                </span>
              </div>

              {/* Technical Streamline Graphic Canvas Simulation Box */}
              <div 
                style={{
                  height: '140px',
                  background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.08) 0%, rgba(6, 182, 212, 0.18) 100%)',
                  borderRadius: '10px',
                  border: '1px dashed var(--theme-border-strong)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <i className={currentSol.icon} style={{ fontSize: '2.5rem', color: 'var(--theme-primary)', marginBottom: '8px', zIndex: 1 }}></i>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)', zIndex: 1, textAlign: 'center', padding: '0 12px' }}>
                  {currentSol.highlight}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', zIndex: 1 }}>
                  {currentSol.meshDetail}
                </span>
              </div>

              {/* Metric & Verified Accuracy Badge */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '16px' }}>
                <div style={{ background: 'var(--card-bg)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--card-border)' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Key Target Metric</span>
                  <strong style={{ fontSize: '1.2rem', color: 'var(--theme-primary)', fontWeight: 800 }}>{currentSol.metricVal}</strong>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-body)', display: 'block' }}>{currentSol.metricLabel}</span>
                </div>
                <div style={{ background: 'var(--card-bg)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--card-border)' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Validation Benchmark</span>
                  <strong style={{ fontSize: '1.2rem', color: '#10B981', fontWeight: 800 }}>99.8%</strong>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-body)', display: 'block' }}>Sim vs Physical Data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
