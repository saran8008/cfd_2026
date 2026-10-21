import React from 'react';
import PageHero from '../components/common/PageHero';
import ServicesSection from '../components/services/ServicesSection';
import StandardsCompliance from '../components/workflow/StandardsCompliance';
import ContactSection from '../components/contact/ContactSection';

export default function ServicesPage({ onOpenQuote, onNavigate }) {
  const solverSpecs = [
    {
      solver: 'ANSYS Fluent & CFX',
      usage: 'General Aerodynamics, Turbomachinery, Multi-phase, Conjugate Heat Transfer',
      meshCap: 'Up to 50M+ Polyhedral Cells',
      highlight: 'Industry Standard'
    },
    {
      solver: 'Pyrosim & FDS 6.8',
      usage: 'Performance-Based Fire, Smoke Tenability, Atrium Plumes, Flashover',
      meshCap: 'High-Resolution Rectilinear Structured Grids',
      highlight: 'NFPA 92 Benchmark'
    },
    {
      solver: 'OpenFOAM v2312',
      usage: 'Large-Scale Tunnel Aerodynamics, Atmospheric Boundary Layers, IAQ',
      meshCap: 'Unbounded Parallel Domain Decomposition',
      highlight: 'Open Source HPC'
    }
  ];

  return (
    <div className="page-wrapper services-page">
      <PageHero
        badge="Specialized Physics Solvers"
        badgeIcon="fas fa-cubes"
        title="Computational Fluid Dynamics"
        highlight="Engineering Services"
        description="From fire smoke tenability in 50-story atriums to micro-thermal airflow in hyperscale cloud server racks, FloDynCo delivers verified numerical insights."
        breadcrumbs={[
          { label: 'Home', href: '#home', onClick: (e) => { e.preventDefault(); onNavigate('home'); } },
          { label: 'Services' }
        ]}
        actions={
          <button className="btn-primary-cyan" onClick={() => onOpenQuote()}>
            <i className="fas fa-calculator"></i>
            <span>Request Service Proposal</span>
          </button>
        }
      />

      {/* Main Services Filter & Grid */}
      <ServicesSection 
        showHeader={false}
        onSelectServiceQuote={(serviceName) => onOpenQuote(serviceName)} 
      />

      {/* Numerical Solvers Matrix Card */}
      <section className="solver-matrix-section">
        <div className="services-container">
          <div className="section-header text-center">
            <div className="section-tag-pill">
              <i className="fas fa-server"></i>
              <span>Physics Engines</span>
            </div>
            <h2 className="section-title-neat">
              Certified <span className="highlight-cyan">Computational Solvers</span>
            </h2>
            <p className="section-sub-neat">
              We leverage validated, industry-gold-standard numerical solvers executed across high-speed parallel computing clusters.
            </p>
            <div className="divider-cyan center"></div>
          </div>

          <div className="solver-grid-neat">
            {solverSpecs.map((s, i) => (
              <div key={i} className="solver-card-neat">
                <div className="solver-badge-cyan">{s.highlight}</div>
                <h3 className="solver-title">{s.solver}</h3>
                <div className="solver-spec-row">
                  <span className="spec-label">Applications:</span>
                  <p>{s.usage}</p>
                </div>
                <div className="solver-spec-row">
                  <span className="spec-label">Grid Resolution:</span>
                  <p className="text-cyan font-mono">{s.meshCap}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Code Compliance */}
      <StandardsCompliance />

      {/* Quick Inquiry */}
      <ContactSection />
    </div>
  );
}
