import React from 'react';
import PageHero from '../components/common/PageHero';
import AboutSection from '../components/about/AboutSection';
import CoreMetricsAndKpis from '../components/home/CoreMetricsAndKpis';
import ContactSection from '../components/contact/ContactSection';

export default function AboutPage({ onOpenQuote, onNavigate }) {
  return (
    <div className="page-wrapper about-page">
      <PageHero
        badge="Fluid Dynamics Corporation"
        badgeIcon="fas fa-building"
        title="About FloDynCo"
        highlight="Engineering & Simulation"
        description="With FLODYNCO, you get a complete multiphysics simulation solution to better understand, manage, and optimize your projects."
        breadcrumbs={[
          { label: 'Home', href: '#home', onClick: (e) => { e.preventDefault(); onNavigate('home'); } },
          { label: 'About Us' }
        ]}
        actions={
          <button className="btn-primary-cyan" onClick={() => onOpenQuote()}>
            <i className="fas fa-file-signature"></i>
            <span>Request for Consultation</span>
          </button>
        }
      />

      {/* Main Narrative About FloDynCo */}
      <AboutSection showHeader={false} onOpenQuote={onOpenQuote} />

      {/* Core Metrics & Key Performance Indicators */}
      <CoreMetricsAndKpis />

      {/* Direct Contact & RFQ */}
      <ContactSection />
    </div>
  );
}
