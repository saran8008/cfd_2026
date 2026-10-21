import React from 'react';

export default function CaseStudyCard({ study, onOpenQuote }) {
  return (
    <div className="case-card-neat">
      <div className="case-card-header-neat">
        <div className="case-card-top-row">
          <span className="case-tag-cyan">{study.badge}</span>
          <div className="case-location-badge">
            <i className="fas fa-map-marker-alt text-cyan"></i>
            <span>{study.location}</span>
          </div>
        </div>
        <h3 className="case-card-title">{study.title}</h3>
        <span className="case-client-type">{study.clientType}</span>
      </div>

      <div className="case-card-body-neat">
        <div className="case-section-block">
          <div className="case-block-label">
            <i className="fas fa-exclamation-triangle text-amber"></i>
            <strong>Engineering Challenge</strong>
          </div>
          <p>{study.challenge}</p>
        </div>

        <div className="case-section-block">
          <div className="case-block-label">
            <i className="fas fa-microchip text-cyan"></i>
            <strong>Simulation Methodology</strong>
          </div>
          <p>{study.solution}</p>
        </div>

        {/* Metrics Row */}
        <div className="case-metrics-grid-neat">
          {study.metrics.map((m, mIdx) => (
            <div key={mIdx} className="metric-box-cyan">
              <strong className="metric-val-cyan">{m.value}</strong>
              <span className="metric-label-neat">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Outcome Box */}
        <div className="case-outcome-box-neat">
          <div className="outcome-icon-cyan">
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="outcome-text">
            <strong>Clearance Outcome:</strong> {study.result}
          </div>
        </div>
      </div>
    </div>
  );
}
