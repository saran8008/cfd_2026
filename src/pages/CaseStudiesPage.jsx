import React from 'react';
import PageHero from '../components/common/PageHero';
import CaseStudiesSection from '../components/case-studies/CaseStudiesSection';
import ContactSection from '../components/contact/ContactSection';

export default function CaseStudiesPage({ onOpenQuote, onNavigate }) {
  const roiHighlights = [
    {
      metric: '₹42+ Lakhs',
      title: 'Average Capex Saved per Project',
      desc: 'Eliminating excessive sheet metal ducting and reducing total induction jet fans through precise numerical placement.'
    },
    {
      metric: '100%',
      title: 'First-Round Authority Approvals',
      desc: 'Flawless clearance records across municipal fire authorities, Chief Fire Officers (CFOs), and NBC inspection committees.'
    },
    {
      metric: '35%',
      title: 'Ongoing Energy Reduction',
      desc: 'Lower operating kWh costs through optimized fan staging, VFD control curves, and intelligent sensor thresholds.'
    }
  ];

  return (
    <div className="page-wrapper case-studies-page">
      <PageHero
        badge="Proven ROI & Project Impact"
        badgeIcon="fas fa-folder-open"
        title="Engineering Case Studies &"
        highlight="Client Success"
        description="Discover how FloDynCo's numerical simulation models solve critical safety hazards, pass rigorous fire approvals, and save millions in capital expenditure."
        breadcrumbs={[
          { label: 'Home', href: '#home', onClick: (e) => { e.preventDefault(); onNavigate('home'); } },
          { label: 'Case Studies' }
        ]}
        actions={
          <button className="btn-primary-cyan" onClick={() => onOpenQuote()}>
            <i className="fas fa-calculator"></i>
            <span>Get Case Study Methodology &amp; Proposal</span>
          </button>
        }
      />

      {/* ROI Highlights Bar */}
      <section className="roi-bar-section">
        <div className="case-studies-container">
          <div className="roi-grid-neat">
            {roiHighlights.map((item, idx) => (
              <div key={idx} className="roi-card-neat">
                <div className="roi-metric-cyan">{item.metric}</div>
                <h4 className="roi-title">{item.title}</h4>
                <p className="roi-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Case Studies Grid */}
      <CaseStudiesSection showHeader={false} onOpenQuote={onOpenQuote} />

      {/* Consultation / Contact */}
      <ContactSection />
    </div>
  );
}
