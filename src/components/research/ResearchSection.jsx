import React, { useState } from 'react';
import ResearchCaseModal from './ResearchCaseModal';

export default function ResearchSection({ onScrollToContact, showHeader = true }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [activeModalCase, setActiveModalCase] = useState(null);

  const researchCases = [
    {
      id: 'case-1',
      caseCode: 'CASE-1',
      domain: 'Building Physics',
      title: 'Advanced CFD Solutions for Building Physics: Atrium Smoke Tenability & Natural Ventilation',
      standard: 'NFPA 92 / NBC 2016 Part 4',
      solver: 'Pyrosim / FDS 6.8 & ANSYS Fluent',
      mesh: '2.8M Polyhedral & Cartesian Mesh Cells',
      problem: 'In a 42-story commercial tower atrium, a design-basis 5.0 MW fast growth t-squared fire produces high-temperature smoke. The architectural design required verifying that natural buoyancy and roof ventilators can maintain a clear smoke layer above 3.0m without compromising upper-floor evacuation corridors or egress stairwells.',
      questions: [
        'What is the transient optical density and visibility reduction along egress walkways at minute 5, 10, and 15?',
        'Can natural buoyancy exhaust maintain safe tenability (CO < 1000 PPM, Temp < 60°C) without expensive continuous powered fans?',
        'How does seasonal ambient temperature (stack effect) in summer vs winter influence smoke stratification?'
      ],
      practicalConsiderations: 'FloDynCo’s experts uncovered that relying solely on calculated volumetric exhaust rates neglects thermal radiation absorption by soot and turbulent entrainment along glass facade walls. In addition, ground-level makeup air louvers require precise velocity throttling (< 1.0 m/s) to prevent disruptive air pluming that destabilizes the smoke layer.',
      metrics: [
        { label: 'Egress Tenability Window', value: '> 18 Mins' },
        { label: 'Clear Smoke Layer Height', value: '3.2 Meters' },
        { label: 'Roof Exhaust Capex Saved', value: '22%' }
      ],
      result: 'Maintained tenable evacuation conditions 3.2m above floor level with visibility exceeding 15 meters for 18 minutes. Secured statutory Chief Fire Officer (CFO) and NFPA 92 clearance on initial submission.'
    },
    {
      id: 'case-2',
      caseCode: 'CASE-2',
      domain: 'Medical Devices',
      title: 'Advanced CFD Solutions for Medical Devices: Hemodynamic Shear Stress & Inhaler Aerosol Deposition',
      standard: 'FDA CDRH / ISO 14971 / ISO 18562',
      solver: 'OpenFOAM Bio-Solver & ANSYS Polyflow',
      mesh: '4.6M Boundary-Refined Polyhedral Cells',
      problem: 'Micro-scale biofluid transport in cardiovascular stents often induces high wall shear stress (> 10 Pa), causing hemolysis and blood clot (thrombosis) formation. Concurrently, pulmonary dry powder inhalers suffered from erratic drug particle deposition in the mouth cavity instead of deep lung alveoli.',
      questions: [
        'Where do localized peak shear stresses exceed allowable physiological thresholds during systolic blood pulsation?',
        'What micro-vortex structures in the inhaler mouthpiece cause premature particle impaction before entering the trachea?',
        'How does non-Newtonian blood rheology (shear-thinning) alter flow separation across stent struts?'
      ],
      practicalConsiderations: 'Our biofluid modeling revealed that standard Newtonian fluid assumptions underestimate peak wall shear stress near bifurcated blood vessels by over 28%. We integrated the Carreau-Yasuda viscosity model and modeled Lagrangian discrete phase (DPM) particle size distributions (D10, D50, D90) across transient breathing cycles.',
      metrics: [
        { label: 'Peak Shear Stress Reduction', value: '34%' },
        { label: 'Target Lung Aerosol Deposition', value: '98.4%' },
        { label: 'Clinical Trial Iterations Cut', value: '60%' }
      ],
      result: 'Redesigned stent strut curvature reduced peak shear stress below the 8.5 Pa threshold, mitigating thrombosis risks. Optimized inhaler nozzle swirl geometry increased deep lung drug delivery to 98.4%.'
    },
    {
      id: 'case-3',
      caseCode: 'CASE-3',
      domain: 'Industries',
      title: 'Advanced CFD Solutions for Industries: Stack Flue Gas Dispersion & Equipment Thermal Management',
      standard: 'EPA AERMOD Guidelines / CPCB India / EN 15259',
      solver: 'ANSYS Fluent & OpenFOAM Multiphase',
      mesh: '3.9M Conjugate Solid-Fluid Mesh Cells',
      problem: 'A heavy chemical manufacturing facility experienced excessive ground-level SO2 and NOx concentrations due to aerodynamic building downwash and terrain entrapment. Simultaneously, a high-temperature rotary calcination kiln suffered from refractory shell hotspot cracking (> 380°C).',
      questions: [
        'What stack exit velocity and plume momentum are necessary to pierce the atmospheric inversion boundary layer?',
        'How does crosswind shear induce wake recirculation behind adjacent 40m boiler structures?',
        'Can external shell air knife jackets prevent localized refractory thermal fatigue without excessive cooling power?'
      ],
      practicalConsiderations: 'FloDynCo simulation engineers verified that standard empirical dispersion equations fail to account for complex urban/industrial geometry wakes. By solving the 3D Reynolds-Averaged Navier-Stokes (RANS) equations with atmospheric thermal stratification and conjugate heat transfer (CHT), the real plume path was accurately mapped.',
      metrics: [
        { label: 'Ground-Level Pollutant Reduction', value: '47%' },
        { label: 'Rotary Shell Hotspot Cooled', value: 'ΔT -42°C' },
        { label: 'Stack Construction Capex Saved', value: '₹65 Lakhs' }
      ],
      result: 'Achieved 100% environmental compliance with Central Pollution Control Board (CPCB) standards while avoiding a costly 12m stack height extension. Extended rotary kiln refractory lifespan by 3.5 years.'
    },
    {
      id: 'case-4',
      caseCode: 'CASE-4',
      domain: 'Livestock Warehouse',
      title: 'Advanced CFD Solutions for Livestock Warehouse: Agricultural Airflow Microclimate & Ammonia Removal',
      standard: 'Agricultural Ventilation ASHRAE Handbook / USDA Guidelines',
      solver: 'Boussinesq Buoyancy & Species Transport CFD',
      mesh: '2.4M Full-Scale Agricultural Barn Mesh Cells',
      problem: 'In a 150m-long commercial livestock and poultry warehouse, high ambient summer temperatures (41°C) and animal metabolic heat output created severe heat stress (THI > 84), leading to high mortality rates and respiratory disease caused by ammonia (NH3) gas pockets trapped at floor level.',
      questions: [
        'How can airflow velocity across the animal-occupied zone (0.1m - 0.6m height) be uniformly maintained between 1.8 to 2.2 m/s?',
        'Why do conventional exhaust fan placements create stagnant dead-air zones in the center of the warehouse?',
        'What is the optimal evaporative cooling pad placement and water distribution rate to suppress thermal peaks?'
      ],
      practicalConsiderations: 'FloDynCo modeled each animal cluster as a volumetric heat and moisture generation source with porous media resistance. We discovered that traditional negative-pressure tunnel systems create velocity bypass along ceiling rafters, leaving ground-level animals in a stagnant thermal trap.',
      metrics: [
        { label: 'Dead-Air Pockets Eliminated', value: '100%' },
        { label: 'Max Barn Ammonia Level', value: '< 15 PPM' },
        { label: 'Heat Stress Mortality Drop', value: '78%' }
      ],
      result: 'Engineered an optimized baffle-deflector configuration and zoned fan sequencing. Maintained animal-level air speed at 2.1 m/s, stabilized barn temperatures within ±1.2°C, and cut ammonia concentrations below 15 PPM.'
    }
  ];

  const domains = [
    { id: 'all', label: 'All Cases' },
    { id: 'Building Physics', label: 'Building Physics' },
    { id: 'Medical Devices', label: 'Medical Devices' },
    { id: 'Industries', label: 'Industries' },
    { id: 'Livestock Warehouse', label: 'Livestock Warehouse' }
  ];

  const filteredCases = researchCases.filter((c) => {
    const matchesDomain = selectedDomain === 'all' || c.domain === selectedDomain;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesDomain;
    return matchesDomain && (
      c.title.toLowerCase().includes(query) ||
      c.problem.toLowerCase().includes(query) ||
      c.caseCode.toLowerCase().includes(query) ||
      c.domain.toLowerCase().includes(query) ||
      c.standard.toLowerCase().includes(query)
    );
  });

  const scrollToContact = () => {
    if (onScrollToContact) {
      onScrollToContact();
    } else {
      const elem = document.getElementById('contact-flodynco') || document.getElementById('contact');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="research-section-neat" style={{ padding: '80px 0', background: 'var(--bg-white)' }}>
      <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Research Header */}
        {showHeader && (
          <div className="section-header text-center" style={{ marginBottom: '36px' }}>
            <div className="section-tag-pill">
              <i className="fas fa-microscope"></i>
              <span>Engineering Simulation Research</span>
            </div>
            <h2 className="section-title-neat">
              Research
            </h2>
            <div className="divider-cyan center"></div>
          </div>
        )}

        {/* Exact Lead Research Copy from Prompt */}
        <div 
          className="research-intro-quote-card"
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--theme-border-strong)',
            borderRadius: '16px',
            padding: 'clamp(20px, 3vw, 32px)',
            marginBottom: '36px',
            boxShadow: 'var(--shadow-md)',
            textAlign: 'center'
          }}
        >
          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.18rem)', color: 'var(--text-main)', lineHeight: 1.7, fontWeight: 500, maxWidth: '960px', margin: '0 auto' }}>
            &ldquo;<strong>Our research focuses on identifying the real-world problems that require CFD modelling and the critical questions that arise throughout the simulation process. We explore these questions using the experience of FLODYNCO’s experts, uncovering the practical considerations that shape each simulation.</strong>&rdquo;
          </p>
        </div>

        {/* Opster-Style Interactive Search & Filter Controls */}
        <div 
          className="research-controls-bar"
          style={{
            background: 'var(--bg-subtle)',
            border: '1px solid var(--card-border)',
            borderRadius: '14px',
            padding: '20px',
            marginBottom: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {/* Search Box */}
          <div style={{ position: 'relative' }}>
            <i 
              className="fas fa-search" 
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--theme-primary)',
                fontSize: '1rem'
              }}
            ></i>
            <input
              type="text"
              placeholder="Search research cases, codes (NFPA, ISO, ASHRAE), problems, or keywords (smoke, shear, ammonia, stack)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 46px',
                borderRadius: '10px',
                border: '1px solid var(--theme-border)',
                background: 'var(--card-bg)',
                color: 'var(--text-main)',
                fontSize: '0.94rem',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer'
                }}
                title="Clear search"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>

          {/* Domain Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Filter by Domain:
            </span>
            {domains.map((dom) => {
              const isActive = selectedDomain === dom.id;
              return (
                <button
                  key={dom.id}
                  onClick={() => setSelectedDomain(dom.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: isActive ? '1px solid var(--theme-primary)' : '1px solid var(--card-border)',
                    background: isActive ? 'var(--theme-btn-gradient)' : 'var(--card-bg)',
                    color: isActive ? '#FFFFFF' : 'var(--text-main)',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? 'var(--theme-btn-glow)' : 'none'
                  }}
                >
                  {dom.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Grid (CASE-1, CASE-2, CASE-3, CASE-4) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '26px' }}>
          {filteredCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="research-case-card"
              style={{
                background: 'var(--card-bg)',
                borderRadius: '16px',
                border: '1px solid var(--card-border)',
                padding: '26px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Top Row: Case Code & Domain Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.9rem',
                      fontWeight: 900,
                      color: 'var(--theme-primary)',
                      background: 'rgba(var(--theme-primary-rgb), 0.1)',
                      padding: '4px 12px',
                      borderRadius: '6px'
                    }}
                  >
                    {caseItem.caseCode}
                  </span>
                  <span className="badge-pill-cyan" style={{ fontSize: '0.74rem' }}>
                    {caseItem.domain}
                  </span>
                </div>

                {/* Case Title */}
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.35, marginBottom: '10px' }}>
                  {caseItem.title}
                </h3>

                {/* Regulatory Standard */}
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                  <i className="fas fa-shield-alt text-cyan" style={{ marginRight: '6px' }}></i>
                  Standard: <strong>{caseItem.standard}</strong>
                </div>

                {/* Real-World Problem Box */}
                <div style={{ background: 'var(--bg-subtle)', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--card-border)', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#D97706', display: 'block', marginBottom: '4px' }}>
                    <i className="fas fa-exclamation-triangle" style={{ marginRight: '4px' }}></i>
                    Real-World Problem:
                  </span>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>
                    {caseItem.problem.slice(0, 150)}...
                  </p>
                </div>

                {/* Practical Consideration Preview */}
                <div style={{ marginBottom: '18px' }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--theme-primary)', display: 'block', marginBottom: '4px' }}>
                    <i className="fas fa-lightbulb" style={{ marginRight: '4px' }}></i>
                    Practical Considerations:
                  </span>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {caseItem.practicalConsiderations.slice(0, 130)}...
                  </p>
                </div>

                {/* Key Metrics Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', padding: '10px 0', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)', marginBottom: '18px' }}>
                  {caseItem.metrics.map((m, mIdx) => (
                    <div key={mIdx} style={{ textAlign: 'center' }}>
                      <strong style={{ fontSize: '0.98rem', color: 'var(--theme-primary)', display: 'block', fontWeight: 800 }}>
                        {m.value}
                      </strong>
                      <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block', lineHeight: 1.2 }}>
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  className="btn-primary-cyan w-full justify-center"
                  onClick={() => setActiveModalCase(caseItem)}
                  style={{ fontSize: '0.86rem', padding: '10px 14px' }}
                >
                  <i className="fas fa-book-open"></i>
                  <span>Inspect Case Brief</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Scope CTA */}
        <div 
          style={{
            marginTop: '50px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(var(--theme-primary-rgb), 0.08) 0%, rgba(6, 182, 212, 0.12) 100%)',
            border: '1px solid var(--theme-border-strong)',
            borderRadius: '16px',
            padding: '32px'
          }}
        >
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
            Have a Problem Requiring CFD Simulation?
          </h3>
          <p style={{ color: 'var(--text-body)', fontSize: '0.96rem', maxWidth: '640px', margin: '0 auto 20px auto' }}>
            We provide consultation, confidential assessment and simulations across Building Physics, Medical Devices, Industries, and Livestock Warehouses.
          </p>
          <button 
            className="btn-primary-cyan"
            onClick={scrollToContact}
          >
            <i className="fas fa-file-signature"></i>
            <span>Request for Consultation</span>
          </button>
        </div>

      </div>

      {/* Case Study Modal Reader */}
      <ResearchCaseModal
        caseItem={activeModalCase}
        isOpen={!!activeModalCase}
        onClose={() => setActiveModalCase(null)}
        onOpenQuote={scrollToContact}
      />
    </section>
  );
}
