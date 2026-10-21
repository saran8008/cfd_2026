import React from 'react';

export default function ServiceCard({ service, onSelectQuote }) {
  return (
    <div className="service-card-neat">
      <div className="service-card-header">
        <div className="service-icon-box-cyan">
          <i className={service.icon}></i>
        </div>
        <span className="service-category-badge">{service.categoryLabel}</span>
      </div>

      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-desc">{service.desc}</p>

      <div className="service-features-list">
        {service.features.map((feat, idx) => (
          <div key={idx} className="service-feature-item">
            <i className="fas fa-check-circle service-check-cyan"></i>
            <span>{feat}</span>
          </div>
        ))}
      </div>

      <div className="service-card-action">
        <button
          className="btn-secondary-cyan w-full"
          onClick={() => onSelectQuote(service.title)}
        >
          <i className="fas fa-calculator"></i>
          <span>Configure Scope / Quote</span>
        </button>
      </div>
    </div>
  );
}
