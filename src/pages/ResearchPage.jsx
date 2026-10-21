import React from 'react';
import PageHero from '../components/common/PageHero';
import ResearchSection from '../components/research/ResearchSection';
import CoreMetricsAndKpis from '../components/home/CoreMetricsAndKpis';
import ContactSection from '../components/contact/ContactSection';

export default function ResearchPage({ onOpenQuote, onNavigate }) {
  return (
    <div className="page-wrapper research-page">
      <PageHero
        badge="Engineering Simulation Research"
        badgeIcon="fas fa-microscope"
        title="FloDynCo Research &amp;"
        highlight="Practical Considerations"
        description="Our research focuses on identifying the real-world problems that require CFD modelling and the critical questions that arise throughout the simulation process. We explore these questions using the experience of FLODYNCO’s experts, uncovering the practical considerations that shape each simulation."
        breadcrumbs={[
          { label: 'Home', href: '#home', onClick: (e) => { e.preventDefault(); onNavigate('home'); } },
          { label: 'Research' }
        ]}
        actions={
          <button className="btn-primary-cyan" onClick={() => onOpenQuote()}>
            <i className="fas fa-file-signature"></i>
            <span>Consult On Your Research / Project</span>
          </button>
        }
      />

      {/* Main Research Section with Case Directory */}
      <ResearchSection showHeader={false} onOpenQuote={onOpenQuote} />

      {/* Verified Accuracy Benchmarks */}
      <CoreMetricsAndKpis />

      {/* Direct Inquiries */}
      <ContactSection />
    </div>
  );
}
