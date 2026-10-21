import React from 'react';

export default function CoreMetricsAndKpis() {
  const coreMetrics = [
    {
      value: '12+',
      unit: 'Years',
      title: '12+ Years Expertise',
      desc: 'Deep specialization across fluid dynamics, multiphysics modeling & life safety physics.',
      icon: 'fas fa-award'
    },
    {
      value: '100%',
      unit: 'Compliant',
      title: '100% Code Compliant',
      desc: 'Zero-rejection track record with statutory fire officers, municipal authorities & NFPA/NBC standards.',
      icon: 'fas fa-shield-check'
    },
    {
      value: 'Core',
      unit: 'Domain',
      title: 'Building Physics Specialization',
      desc: 'Architectural aerodynamics, atrium smoke clearance, microclimate and high-rise wind loads.',
      icon: 'fas fa-building-circle-check'
    },
    {
      value: '500+',
      unit: 'Completed',
      title: '500+ Simulations Done',
      desc: 'Complex industrial, commercial, medical device, and warehouse infrastructure solved.',
      icon: 'fas fa-chart-line-up'
    }
  ];

  const kpis = [
    {
      metric: '99.8%',
      description: 'Simulation Accuracy vs Physical Data',
      subtext: 'Verified against full-scale physical smoke tests, anemometer field data, and wind tunnel benchmarks.',
      highlight: 'Validated High-Fidelity Physics',
      icon: 'fas fa-bullseye'
    },
    {
      metric: '500+',
      description: 'Industrial & Building Physics Projects Delivered',
      subtext: 'Clearances secured across high-rises, metro tunnels, chemical stacks, data centers & livestock facilities.',
      highlight: 'Delivered Globally',
      icon: 'fas fa-diagram-project'
    }
  ];

  return (
    <section className="core-metrics-kpi-section" style={{ padding: '60px 0', background: 'var(--bg-subtle)', borderTop: '1px solid var(--theme-border)', borderBottom: '1px solid var(--theme-border)' }}>
      <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Core Metrics Snapshot Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="section-tag-pill" style={{ display: 'inline-flex', marginBottom: '10px' }}>
            <i className="fas fa-microchip"></i>
            <span>Engineering Track Record</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
            Core Metrics Snapshot
          </h2>
          <div className="divider-cyan center" style={{ margin: '0 auto 12px auto' }}></div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', maxWidth: '650px', margin: '0 auto' }}>
            Quantifiable engineering precision delivered by FloDynCo: Fluid Dynamics Corporation across mission-critical domains.
          </p>
        </div>

        {/* 4 Core Metrics Snapshot Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '48px' }}>
          {coreMetrics.map((item, idx) => (
            <div
              key={idx}
              className="metric-snapshot-card"
              style={{
                background: 'var(--card-bg)',
                borderRadius: '14px',
                border: '1px solid var(--card-border)',
                padding: '24px 20px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(var(--theme-primary-rgb), 0.1)',
                    color: 'var(--theme-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem'
                  }}
                >
                  <i className={item.icon}></i>
                </div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700 }}>
                  Snapshot 0{idx + 1}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', margin: '4px 0 6px 0' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Performance Indicators (KPIs) Table / Executive Cards */}
        <div 
          className="kpi-panel-container"
          style={{
            background: 'var(--card-bg)',
            borderRadius: '18px',
            border: '1px solid var(--theme-border-strong)',
            padding: 'clamp(24px, 3.5vw, 40px)',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid var(--theme-border)', paddingBottom: '20px', marginBottom: '28px' }}>
            <div>
              <span style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--theme-primary)', fontWeight: 800 }}>
                Verified Performance Standards
              </span>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', fontWeight: 800, color: 'var(--text-main)', margin: '4px 0 0 0' }}>
                Key Performance Indicators (KPIs)
              </h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge-pill-cyan">
                <i className="fas fa-check-double" style={{ marginRight: '6px' }}></i>
                ISO 9001 &amp; Code Verified
              </span>
            </div>
          </div>

          {/* Structured KPI Table Layout matching user specification */}
          <div className="kpi-table-wrapper" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--theme-border)', background: 'rgba(var(--theme-primary-rgb), 0.05)' }}>
                  <th style={{ padding: '14px 20px', fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.05em', width: '220px' }}>
                    Metric
                  </th>
                  <th style={{ padding: '14px 20px', fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Description &amp; Engineering Benchmark
                  </th>
                  <th style={{ padding: '14px 20px', fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.05em', width: '180px', textAlign: 'right' }}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {kpis.map((kpi, kIdx) => (
                  <tr key={kIdx} style={{ borderBottom: '1px solid var(--card-border)', transition: 'background 0.2s ease' }}>
                    <td style={{ padding: '22px 20px', verticalAlign: 'top' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, color: 'var(--theme-primary)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                          {kpi.metric}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginTop: '4px' }}>
                        Physical Convergence
                      </span>
                    </td>
                    <td style={{ padding: '22px 20px', verticalAlign: 'top' }}>
                      <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '6px', fontWeight: 700 }}>
                        {kpi.description}
                      </strong>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                        {kpi.subtext}
                      </p>
                    </td>
                    <td style={{ padding: '22px 20px', verticalAlign: 'middle', textAlign: 'right' }}>
                      <span 
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: 'rgba(16, 185, 129, 0.1)',
                          color: '#10B981',
                          padding: '6px 12px',
                          borderRadius: '20px',
                          fontSize: '0.78rem',
                          fontWeight: 700
                        }}
                      >
                        <i className="fas fa-shield-check"></i>
                        {kpi.highlight}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
