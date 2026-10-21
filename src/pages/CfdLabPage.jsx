import React from 'react';
import PageHero from '../components/common/PageHero';
import LiveCfdSimulation from '../components/simulation/LiveCfdSimulation';
import ContactSection from '../components/contact/ContactSection';

export default function CfdLabPage({ onOpenQuote, onNavigate }) {
  const labHighlights = [
    {
      icon: 'fas fa-wind',
      title: 'Real-Time Navier-Stokes Streamlines',
      desc: 'Interactive 2D/3D numerical approximation showing flow velocity vectors, wake shedding, and vortex recirculation behind bluff obstacles.'
    },
    {
      icon: 'fas fa-temperature-high',
      title: 'Buoyancy & Thermal Convection',
      desc: 'Simulation of Boussinesq buoyancy approximation and thermal plume rise during high heat release rate fire scenarios.'
    },
    {
      icon: 'fas fa-smog',
      title: 'Turbulent Smoke Dispersion',
      desc: 'Transient tracking of soot particles, visibility reduction gradients, and occupant tenability thresholds.'
    }
  ];

  return (
    <div className="page-wrapper cfd-lab-page">
      <PageHero
        badge="Interactive Multiphysics Lab"
        badgeIcon="fas fa-atom"
        title="Real-Time CFD Flow"
        highlight="Simulation Laboratory"
        description="Experience fluid dynamic forces in real time. Interact directly with our digital wind tunnel visualizer to test aerodynamics, thermal buoyancy, and vortex shedding."
        breadcrumbs={[
          { label: 'Home', href: '#home', onClick: (e) => { e.preventDefault(); onNavigate('home'); } },
          { label: 'CFD Lab' }
        ]}
        actions={
          <button className="btn-primary-cyan" onClick={() => onOpenQuote('Live CFD Simulation Scope')}>
            <i className="fas fa-calculator"></i>
            <span>Calculate Full HPC Simulation Scope</span>
          </button>
        }
      />

      {/* Main Interactive Live CFD Simulation */}
      <LiveCfdSimulation showHeader={false} />

      {/* Lab Features Breakdown */}
      <section className="lab-features-section">
        <div className="sim-container-neat">
          <div className="section-header text-center">
            <div className="section-tag-pill">
              <i className="fas fa-flask"></i>
              <span>Physics Foundations</span>
            </div>
            <h2 className="section-title-neat">
              Mathematical Principles <span className="highlight-cyan">Behind Our Solvers</span>
            </h2>
            <p className="section-sub-neat">
              FloDynCo couples the continuity equation, momentum conservation, energy conservation, and advanced turbulence closures.
            </p>
            <div className="divider-cyan center"></div>
          </div>

          <div className="lab-highlights-grid">
            {labHighlights.map((item, idx) => (
              <div key={idx} className="lab-highlight-card">
                <div className="lab-icon-cyan">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="lab-cta-box-neat">
            <div className="lab-cta-text">
              <h3>Have a complex architectural or industrial flow geometry?</h3>
              <p>Upload your 3D CAD/BIM model to our 256-Core cluster for high-resolution 3D simulation.</p>
            </div>
            <button className="btn-primary-cyan" onClick={() => onOpenQuote('3D CFD Flow Analysis')}>
              <i className="fas fa-upload"></i>
              <span>Upload Model for Scope Review</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <ContactSection />
    </div>
  );
}
