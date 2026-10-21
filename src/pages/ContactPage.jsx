import React from 'react';
import PageHero from '../components/common/PageHero';
import ContactSection from '../components/contact/ContactSection';
import CoreMetricsAndKpis from '../components/home/CoreMetricsAndKpis';

export default function ContactPage({ onOpenQuote, onNavigate }) {
  return (
    <div className="page-wrapper contact-page">
      <PageHero
        badge="Engineering Simulation Inquiries"
        badgeIcon="fas fa-headset"
        title="Contact FloDynCo |"
        highlight="Simulation Consultation"
        description="We provide consultation, confidential assessment and simulations. Operating Locations: Bengaluru, Chennai, Germany. Email: contact@flodynco.com"
        breadcrumbs={[
          { label: 'Home', href: '#home', onClick: (e) => { e.preventDefault(); onNavigate('home'); } },
          { label: 'Contact' }
        ]}
        actions={
          <button className="btn-primary-cyan" onClick={() => onOpenQuote()}>
            <i className="fas fa-calculator"></i>
            <span>Interactive Scope Estimator</span>
          </button>
        }
      />

      {/* Main Consultation Section with Exact Form */}
      <ContactSection showHeader={false} />

      {/* Trust & Verified Metrics */}
      <CoreMetricsAndKpis />
    </div>
  );
}
