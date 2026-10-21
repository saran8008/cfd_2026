import React from 'react';

export default function SectionHeader({
  tag,
  icon = 'fas fa-wind',
  title,
  highlight,
  subtitle,
  centered = true,
  className = ''
}) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''} ${className}`}>
      {tag && (
        <div className="section-tag-pill">
          <i className={icon}></i>
          <span>{tag}</span>
        </div>
      )}
      <h2 className="section-title-neat">
        {title} {highlight && <span className="highlight-cyan">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-sub-neat">{subtitle}</p>}
      <div className={`divider-cyan ${centered ? 'center' : ''}`}></div>
    </div>
  );
}
