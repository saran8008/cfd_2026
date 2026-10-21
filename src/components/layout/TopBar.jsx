import React from 'react';

export default function TopBar() {
  return (
    <div className="top-bar-neat">
      <div className="top-bar-inner">
        <div className="top-bar-left">
          <div className="top-bar-item">
            <i className="fas fa-wind top-icon-cyan"></i>
            <span><strong>FloDynCo</strong> • Fluid Dynamics Corporation</span>
          </div>
          <div className="top-bar-divider"></div>
          <div className="top-bar-item">
            <i className="fas fa-envelope top-icon-cyan"></i>
            <a href="mailto:contact@flodynco.com">contact@flodynco.com</a>
          </div>
        </div>
        <div className="top-bar-right">
          <div className="top-bar-item top-locations-item">
            <i className="fas fa-globe top-icon-cyan"></i>
            <span><strong>Operating Locations:</strong> Bengaluru • Chennai • Germany</span>
          </div>
          <div className="top-bar-divider"></div>
          <span className="badge-live-cyan">
            <span className="pulse-dot"></span>
            256-Core HPC Solvers Active
          </span>
        </div>
      </div>
    </div>
  );
}
