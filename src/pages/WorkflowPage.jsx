import React from 'react';
import PageHero from '../components/common/PageHero';
import WorkflowSection from '../components/workflow/WorkflowSection';
import StandardsCompliance from '../components/workflow/StandardsCompliance';
import ContactSection from '../components/contact/ContactSection';

export default function WorkflowPage({ onOpenQuote, onNavigate }) {
  const deliverableSpecs = [
    {
      title: 'High-Resolution 3D Vector Plots',
      desc: 'Planar slice contours of velocity (m/s), pressure (Pa), temperature (°C), smoke optical density, and CO concentrations (PPM).',
      icon: 'fas fa-chart-area'
    },
    {
      title: 'Transient Animation Videos',
      desc: 'Time-accurate video animations showing fire smoke progression, jet fan startup dynamics, and evacuation clearance windows.',
      icon: 'fas fa-video'
    },
    {
      title: 'Comprehensive Authority Report',
      desc: 'Formally stamped documentation with executive summary, mathematical equations, mesh independence validation, and code compliance certificates.',
      icon: 'fas fa-file-pdf'
    },
    {
      title: 'Interactive 3D Deliverables',
      desc: 'Web-compatible 3D viewer datasets and raw CAD/CFD post-processing outputs for integration into client BIM systems.',
      icon: 'fas fa-cube'
    }
  ];

  return (
    <div className="page-wrapper workflow-page">
      <PageHero
        badge="Quality Assurance & Methodology"
        badgeIcon="fas fa-project-diagram"
        title="Our Rigorous Numerical"
        highlight="Simulation Methodology"
        description="Every CFD simulation at FloDynCo follows a strict 5-stage validation pipeline with mesh convergence verification and code compliance benchmarking."
        breadcrumbs={[
          { label: 'Home', href: '#home', onClick: (e) => { e.preventDefault(); onNavigate('home'); } },
          { label: 'Methodology & Standards' }
        ]}
        actions={
          <button className="btn-primary-cyan" onClick={() => onOpenQuote()}>
            <i className="fas fa-calculator"></i>
            <span>Get Project Methodology Proposal</span>
          </button>
        }
      />

      {/* Main 5-Stage Workflow */}
      <WorkflowSection showHeader={false} />

      {/* Standards & Code Compliance */}
      <StandardsCompliance />

      {/* Deliverables Grid */}
      <section className="deliverables-section-neat">
        <div className="workflow-container-neat">
          <div className="section-header text-center">
            <div className="section-tag-pill">
              <i className="fas fa-box-open"></i>
              <span>Deliverables &amp; Output</span>
            </div>
            <h2 className="section-title-neat">
              What You Receive in <span className="highlight-cyan">Every CFD Package</span>
            </h2>
            <p className="section-sub-neat">
              Clear, transparent, and authoritative deliverables tailored for architects, MEP consultants, and fire authorities.
            </p>
            <div className="divider-cyan center"></div>
          </div>

          <div className="deliverables-grid-neat">
            {deliverableSpecs.map((d, i) => (
              <div key={i} className="deliverable-card-neat">
                <div className="deliv-icon-cyan">
                  <i className={d.icon}></i>
                </div>
                <h4>{d.title}</h4>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
