import React from 'react';
import PageHero from '../components/common/PageHero';
import BlogSection from '../components/blog/BlogSection';
import ContactSection from '../components/contact/ContactSection';

export default function BlogPage({ onOpenArticle, onOpenQuote, onNavigate }) {
  return (
    <div className="page-wrapper blog-page">
      <PageHero
        badge="Engineering Knowledge Hub"
        badgeIcon="fas fa-book-open"
        title="Technical Papers, Research &"
        highlight="CFD Best Practices"
        description="Explore in-depth technical guides on performance-based fire design, basement jet fan sizing, datacenter thermal modeling, and turbulent dispersion."
        breadcrumbs={[
          { label: 'Home', href: '#home', onClick: (e) => { e.preventDefault(); onNavigate('home'); } },
          { label: 'Technical Papers & Blog' }
        ]}
        actions={
          <button className="btn-primary-cyan" onClick={() => onOpenQuote()}>
            <i className="fas fa-calculator"></i>
            <span>Consult With Research Authors</span>
          </button>
        }
      />

      {/* Main Blog & Papers Directory */}
      <BlogSection showHeader={false} onOpenArticle={onOpenArticle} />

      {/* Research & Peer Review Callout */}
      <section className="research-callout-section">
        <div className="blog-container-neat">
          <div className="research-banner-neat">
            <div className="research-banner-text">
              <div className="section-tag-pill">
                <i className="fas fa-microscope"></i>
                <span>Academic &amp; Industry Collaboration</span>
              </div>
              <h3>Collaborate on Applied CFD Research &amp; Benchmark Studies</h3>
              <p>
                FloDynCo actively collaborates with university researchers, MEP consultants, and fire protection institutes on high-fidelity simulation benchmarking.
              </p>
            </div>
            <div className="research-banner-action">
              <button className="btn-primary-cyan" onClick={() => onOpenQuote('Academic / Research Collaboration')}>
                <i className="fas fa-paper-plane"></i>
                <span>Submit Collaboration Proposal</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
