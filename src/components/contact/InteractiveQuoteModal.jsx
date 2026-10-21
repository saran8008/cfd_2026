import React, { useState } from 'react';
import Logo from '../common/Logo';

export default function InteractiveQuoteModal({ isOpen, onClose, initialService }) {
  const [projectType, setProjectType] = useState(initialService || 'Fire & Smoke FDS Simulation');
  const [buildingArea, setBuildingArea] = useState('10,000 - 50,000 sq.ft');
  const [targetCode, setTargetCode] = useState('NFPA 92 / NBC Part 4');
  const [urgency, setUrgency] = useState('Standard (5-7 Days)');
  const [clientInfo, setClientInfo] = useState({ name: '', email: '', phone: '', company: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!clientInfo.name || !clientInfo.email) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop-neat" onClick={handleClose}>
      <div className="modal-panel-neat" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn-neat" 
          onClick={handleClose} 
          aria-label="Close Modal"
        >
          <i className="fas fa-times"></i>
        </button>

        <div style={{ marginBottom: '14px' }}>
          <Logo size="small" showTagline={false} />
        </div>

        <h2 className="modal-heading-neat">
          FloDynCo CFD Scope &amp; Resource Estimator
        </h2>
        <p className="modal-subhead-neat">
          Configure your engineering parameters to get an instant scope report, HPC mesh calculation, and delivery estimate.
        </p>

        {submitted ? (
          <div className="quote-submitted-card">
            <div className="submitted-icon-wrap">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3>Proposal Request Generated!</h3>
            <p className="submitted-intro">
              Thank you <strong>{clientInfo.name}</strong>. We have generated an initial FloDynCo simulation scope report for <strong>{projectType}</strong> ({buildingArea}) under <strong>{targetCode}</strong>.
            </p>

            <div className="submitted-specs-box">
              <div className="spec-row">
                <span className="spec-label"><i className="fas fa-th text-cyan"></i> Estimated Mesh Cells:</span>
                <strong>~1.8M - 3.4M Polyhedral Elements</strong>
              </div>
              <div className="spec-row">
                <span className="spec-label"><i className="fas fa-server text-cyan"></i> Recommended Solver:</span>
                <strong>Parallel HPC Multiphysics Cluster</strong>
              </div>
              <div className="spec-row">
                <span className="spec-label"><i className="fas fa-clock text-cyan"></i> Target Turnaround:</span>
                <strong className="text-cyan">{urgency.includes('Rush') ? '48 - 72 Hours (Express Priority)' : '5 - 7 Business Days'}</strong>
              </div>
            </div>

            <p className="submitted-note">
              Our lead fluid dynamics engineer will reach out to <strong>{clientInfo.email}</strong> within 3 business hours with a formal proposal and geometry checklist.
            </p>

            <button 
              className="btn-primary-cyan w-full justify-center" 
              onClick={handleClose}
            >
              <span>Done &amp; Return to Website</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleCalculate} className="quote-form-neat">
            <div className="form-group-neat">
              <label className="form-label-neat">Select CFD Simulation Domain</label>
              <select 
                className="form-select-neat" 
                value={projectType} 
                onChange={(e) => setProjectType(e.target.value)}
              >
                <option value="Fire & Smoke">Fire &amp; Smoke Tenability (NFPA 92 / NBC Part 4)</option>
                <option value="Car Park Ventilation">Car Park Jet Fan Ventilation &amp; CO Clearance</option>
                <option value="Data Center">Data Center Thermal &amp; Hotspot Containment</option>
                <option value="Tunnel">Highway / Metro Tunnel Emergency Fire Study (NFPA 502)</option>
                <option value="HVAC">HVAC Airflow Distribution &amp; PMV/PPD Comfort (ASHRAE 55)</option>
                <option value="Cleanroom">Cleanroom Laminar Flow &amp; Particle Tracking (ISO 14644)</option>
                <option value="Wind Microclimate">High-Rise Wind Microclimate &amp; Facade Pressure</option>
                <option value="Industrial Stack">Industrial Stack &amp; Plume Dispersion</option>
                <option value="Livestock Ventilation & Agricultural Airflow Simulation">Livestock Ventilation &amp; Agricultural Airflow Simulation</option>
                <option value="Custom">Custom Multiphysics Modeling</option>
              </select>
            </div>

            <div className="form-grid-2-neat">
              <div className="form-group-neat">
                <label className="form-label-neat">Estimated Domain Size / Volume</label>
                <select 
                  className="form-select-neat" 
                  value={buildingArea} 
                  onChange={(e) => setBuildingArea(e.target.value)}
                >
                  <option value="Under 10,000 sq.ft">Compact / Single Zone (&lt; 10k sq.ft)</option>
                  <option value="10,000 - 50,000 sq.ft">Medium Complex (10k - 50k sq.ft)</option>
                  <option value="50,000 - 200,000 sq.ft">Large Infrastructure (50k - 200k sq.ft)</option>
                  <option value="Over 200,000 sq.ft / Long Tunnel">Mega Project (&gt; 200k sq.ft / Tunnel)</option>
                </select>
              </div>

              <div className="form-group-neat">
                <label className="form-label-neat">Primary Regulatory Standard</label>
                <select 
                  className="form-select-neat" 
                  value={targetCode} 
                  onChange={(e) => setTargetCode(e.target.value)}
                >
                  <option value="NFPA 92 / NBC Part 4">NFPA 92 / NBC 2016 Part 4</option>
                  <option value="ASHRAE 55 & 62.1">ASHRAE 55 (Thermal Comfort)</option>
                  <option value="NFPA 130 / 502 (Transit/Tunnel)">NFPA 130 / 502 (Transit &amp; Tunnels)</option>
                  <option value="ISO 14644 / US FDA">ISO 14644 (Pharma Cleanroom)</option>
                  <option value="Local CFO / Authority Guidelines">Local Chief Fire Officer (CFO) Specs</option>
                </select>
              </div>
            </div>

            <div className="form-group-neat">
              <label className="form-label-neat">Project Turnaround Priority</label>
              <div className="priority-options-grid">
                {[
                  { label: 'Standard (5-7 Days)', val: 'Standard (5-7 Days)', badge: 'Best Value' },
                  { label: 'Express Rush (48-72h)', val: 'Express Rush (48-72 Hours)', badge: 'High Priority HPC' },
                  { label: 'Feasibility / Concept', val: 'Feasibility Study', badge: 'Pre-Design' },
                ].map((opt, i) => (
                  <label 
                    key={i} 
                    className={`priority-radio-card ${urgency === opt.val ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="urgency"
                      value={opt.val}
                      checked={urgency === opt.val}
                      onChange={(e) => setUrgency(e.target.value)}
                    />
                    <div className="radio-content">
                      <span className="radio-label">{opt.label}</span>
                      <span className="radio-sub">{opt.badge}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-divider-neat">
              <span>Contact &amp; Delivery Details</span>
            </div>

            <div className="form-grid-2-neat">
              <div className="form-group-neat">
                <label className="form-label-neat">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  className="form-input-neat"
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                />
              </div>

              <div className="form-group-neat">
                <label className="form-label-neat">Business Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="form-input-neat"
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-grid-2-neat">
              <div className="form-group-neat">
                <label className="form-label-neat">Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="form-input-neat"
                  value={clientInfo.phone}
                  onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                />
              </div>

              <div className="form-group-neat">
                <label className="form-label-neat">Organization / Firm</label>
                <input
                  type="text"
                  placeholder="e.g. ABC MEP Consultants"
                  className="form-input-neat"
                  value={clientInfo.company}
                  onChange={(e) => setClientInfo({ ...clientInfo, company: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group-neat">
              <label className="form-label-neat">Project Description / CAD Details (Optional)</label>
              <textarea
                rows="3"
                placeholder="Briefly describe geometry, fire load (MW), air change requirements, or specific challenge..."
                className="form-textarea-neat"
                value={clientInfo.notes}
                onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
              ></textarea>
            </div>

            <div className="modal-actions-neat">
              <button type="button" className="btn-secondary-cyan" onClick={handleClose}>
                Cancel
              </button>
              <button type="submit" className="btn-primary-cyan">
                <i className="fas fa-paper-plane"></i>
                <span>Generate Scope Proposal</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
