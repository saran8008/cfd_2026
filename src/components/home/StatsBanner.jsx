import React from 'react';

export default function StatsBanner() {
  const stats = [
    { value: '500+', label: 'CFD Projects Solved', icon: 'fas fa-chart-line', sub: 'High-Rise, Tunnels & Infra' },
    { value: '100%', label: 'CFO & Authority Approval', icon: 'fas fa-shield-check', sub: 'Zero Rejections Across India' },
    { value: '256 Cores', label: 'HPC Parallel Solvers', icon: 'fas fa-server', sub: 'ANSYS Fluent & FDS Cluster' },
    { value: '30%+', label: 'Capex Saved for Clients', icon: 'fas fa-coins', sub: 'Optimized Fan & Duct Sizing' },
  ];

  return (
    <div className="stats-banner-neat">
      <div className="stats-banner-container">
        <div className="stats-grid-neat">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card-neat">
              <div className="stat-icon-wrap-cyan">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-info-neat">
                <div className="stat-value-neat">{stat.value}</div>
                <div className="stat-label-neat">{stat.label}</div>
                <div className="stat-sub-neat">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
