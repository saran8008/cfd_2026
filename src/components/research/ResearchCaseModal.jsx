import React from 'react';
import Logo from '../common/Logo';

export default function ResearchCaseModal({ caseItem, isOpen, onClose, onOpenQuote }) {
  if (!isOpen || !caseItem) return null;

  return (
    <div className="modal-backdrop-neat" onClick={onClose}>
      <div 
        className="modal-panel-neat research-case-modal-panel" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '850px', maxHeight: '90vh', overflowY: 'auto' }}
      >
        <button 
          className="modal-close-btn-neat" 
          onClick={onClose} 
          aria-label="Close Case Modal"
        >
          <i className="fas fa-times"></i>
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
          <Logo size="small" showTagline={false} />
          <div style={{ display: 'flex', gap: '8px' }}>
            <span className="badge-pill-cyan" style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
              {caseItem.caseCode}
            </span>
            <span className="badge-pill-cyan">
              {caseItem.domain}
            </span>
          </div>
        </div>

        <h2 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.7rem)', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.3, marginBottom: '10px' }}>
          {caseItem.title}
        </h2>

        <div style={{ display: 'flex', gap: '16px', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '22px', flexWrap: 'wrap', borderBottom: '1px solid var(--theme-border)', paddingBottom: '12px' }}>
          <span><i className="fas fa-shield-alt text-cyan"></i> Standard: <strong>{caseItem.standard}</strong></span>
          <span><i className="fas fa-microchip text-cyan"></i> Solver: <strong>{caseItem.solver}</strong></span>
          <span><i className="fas fa-th text-cyan"></i> Mesh: <strong>{caseItem.mesh}</strong></span>
        </div>

        {/* 1. Real-World Problem Definition */}
        <div style={{ background: 'var(--bg-subtle)', borderRadius: '12px', border: '1px solid var(--card-border)', padding: '18px 20px', marginBottom: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <i className="fas fa-exclamation-triangle" style={{ color: '#F59E0B' }}></i>
            <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
              The Real-World Engineering Problem
            </h4>
          </div>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>
            {caseItem.problem}
          </p>
        </div>

        {/* 2. Critical Questions Raised */}
        <div style={{ background: 'var(--bg-subtle)', borderRadius: '12px', border: '1px solid var(--card-border)', padding: '18px 20px', marginBottom: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <i className="fas fa-question-circle text-cyan"></i>
            <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
              Critical Simulation Questions Explored
            </h4>
          </div>
          <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {caseItem.questions.map((q, i) => (
              <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
                {q}
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Practical Considerations from FloDynCo's Experts */}
        <div style={{ background: 'rgba(var(--theme-primary-rgb), 0.05)', borderRadius: '12px', border: '1px solid var(--theme-border-strong)', padding: '18px 20px', marginBottom: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <i className="fas fa-lightbulb text-cyan"></i>
            <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
              Practical Considerations Uncovered by FloDynCo's Experts
            </h4>
          </div>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>
            {caseItem.practicalConsiderations}
          </p>
        </div>

        {/* 4. Verification & Quantitative Engineering Results */}
        <div style={{ background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--card-border)', padding: '18px 20px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fas fa-chart-line text-cyan"></i>
            Quantitative Results &amp; Code Clearance
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '14px' }}>
            {caseItem.metrics.map((m, i) => (
              <div key={i} style={{ background: 'var(--bg-subtle)', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--card-border)' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block' }}>{m.label}</span>
                <strong style={{ fontSize: '1.25rem', color: 'var(--theme-primary)', fontWeight: 800 }}>{m.value}</strong>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
            <strong>Outcome:</strong> {caseItem.result}
          </p>
        </div>

        {/* Modal Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid var(--theme-border)', paddingTop: '16px' }}>
          <button className="btn-secondary-cyan" onClick={onClose}>
            <span>Back to Research Directory</span>
          </button>
          <button 
            className="btn-primary-cyan"
            onClick={() => {
              onClose();
              if (onOpenQuote) onOpenQuote(caseItem.title);
            }}
          >
            <i className="fas fa-file-signature"></i>
            <span>Consult on Similar {caseItem.domain} Project</span>
          </button>
        </div>
      </div>
    </div>
  );
}
