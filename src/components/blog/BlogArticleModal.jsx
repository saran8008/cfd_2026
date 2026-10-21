import React from 'react';
import Logo from '../common/Logo';

export default function BlogArticleModal({ article, isOpen, onClose, onOpenQuote }) {
  if (!isOpen || !article) return null;

  return (
    <div className="blog-modal-backdrop" onClick={onClose}>
      <div className="blog-modal-panel-neat" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div className="blog-modal-header-neat">
          <div className="blog-modal-brand">
            <Logo size="small" showTagline={false} />
            <span className="blog-modal-badge">{article.category}</span>
          </div>
          <button 
            className="blog-modal-close-btn" 
            onClick={onClose}
            aria-label="Close Article"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="blog-modal-body-neat">
          <div className="blog-article-meta-row">
            <div className="author-avatar-cyan">
              <span>{article.authorInitials || 'FD'}</span>
            </div>
            <div className="author-details">
              <strong>{article.author}</strong>
              <span>{article.authorRole} • {article.date} • {article.readTime}</span>
            </div>
          </div>

          <h1 className="blog-modal-title">{article.title}</h1>

          <div className="blog-summary-callout">
            <i className="fas fa-quote-left text-cyan"></i>
            <p>{article.summary}</p>
          </div>

          <div className="blog-article-text">
            <h3 className="blog-subhead">1. Physics Background &amp; Mathematical Formulation</h3>
            <p>{article.section1}</p>

            <h3 className="blog-subhead">2. Computational Domain &amp; Turbulence Modeling</h3>
            <p>{article.section2}</p>

            <h3 className="blog-subhead">3. Engineering Verification &amp; Statutory Approvals</h3>
            <p>{article.section3}</p>
          </div>

          {article.takeaways && article.takeaways.length > 0 && (
            <div className="blog-takeaways-card">
              <div className="takeaways-header">
                <i className="fas fa-lightbulb text-cyan"></i>
                <h4>Key Engineering Takeaways</h4>
              </div>
              <ul className="takeaways-list">
                {article.takeaways.map((item, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check-circle text-cyan"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Modal Footer CTA */}
          <div className="blog-modal-cta-box">
            <div className="cta-text">
              <h4>Need similar CFD simulation for your ongoing project?</h4>
              <p>Consult with our lead fluid dynamics specialists for custom scope &amp; turnaround time.</p>
            </div>
            <button
              className="btn-primary-cyan"
              onClick={() => {
                onClose();
                if (onOpenQuote) onOpenQuote(article.title);
              }}
            >
              <i className="fas fa-calculator"></i>
              <span>Request Project Proposal</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
