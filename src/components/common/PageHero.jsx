import React from 'react';

export default function PageHero({
  title,
  highlight,
  description,
  badge = 'FloDynCo Engineering',
  badgeIcon = 'fas fa-wind',
  breadcrumbs = [],
  actions
}) {
  return (
    <div className="page-hero-banner">
      <div className="page-hero-bg-grid"></div>
      <div className="page-hero-cyan-glow"></div>
      
      <div className="page-hero-inner">
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
            <ol className="breadcrumbs-list">
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="breadcrumb-item">
                  {crumb.href ? (
                    <a href={crumb.href} onClick={crumb.onClick}>{crumb.label}</a>
                  ) : (
                    <span className="current">{crumb.label}</span>
                  )}
                  {idx < breadcrumbs.length - 1 && <span className="crumb-sep">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="page-hero-badge">
          <i className={badgeIcon}></i>
          <span>{badge}</span>
        </div>

        <h1 className="page-hero-title">
          {title} {highlight && <span className="highlight-cyan">{highlight}</span>}
        </h1>

        {description && <p className="page-hero-desc">{description}</p>}

        {actions && <div className="page-hero-actions">{actions}</div>}
      </div>
    </div>
  );
}
