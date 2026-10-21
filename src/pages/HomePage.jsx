import React from 'react';
import Hero from '../components/home/Hero';
import CoreMetricsAndKpis from '../components/home/CoreMetricsAndKpis';
import AboutSection from '../components/about/AboutSection';
import ResearchSection from '../components/research/ResearchSection';
import ContactSection from '../components/contact/ContactSection';

export default function HomePage({ onScrollToContact }) {
  return (
    <div className="page-wrapper home-page">
      {/* 1. Hero Section (Mechartes-Inspired 4 Solutions) */}
      <div id="hero">
        <Hero onScrollToContact={onScrollToContact} />
      </div>

      {/* 2. Core Metrics Snapshot & Key Performance Indicators (KPIs) */}
      <CoreMetricsAndKpis />

      {/* 3. About FloDynCo: Fluid Dynamics Corporation */}
      <div id="about-flodynco">
        <AboutSection onScrollToContact={onScrollToContact} />
      </div>

      {/* 4. Research & Case Studies (CASE-1, CASE-2, CASE-3, CASE-4) */}
      <div id="research">
        <ResearchSection onScrollToContact={onScrollToContact} />
      </div>

      {/* 5. Contact FloDynCo & Request for Consultation */}
      <div id="contact-flodynco">
        <ContactSection />
      </div>
    </div>
  );
}
