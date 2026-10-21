import React, { useState } from 'react';

export default function ContactSection({ showHeader = true, initialDomain = '' }) {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    simulationDomain: initialDomain || 'Fire & Smoke',
    projectLocation: '',
    projectScope: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const domains = [
    'Fire & Smoke',
    'Car Park Ventilation',
    'Data Center',
    'Tunnel',
    'HVAC',
    'Cleanroom',
    'Wind Microclimate',
    'Industrial Stack',
    'Livestock Ventilation & Agricultural Airflow Simulation',
    'Custom'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.fullName || !formState.email || !formState.projectLocation || !formState.projectScope) {
      return;
    }
    const generatedId = `FDC-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormState({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      simulationDomain: 'Fire & Smoke',
      projectLocation: '',
      projectScope: ''
    });
  };

  return (
    <section id="contact" className="contact-section-neat" style={{ padding: '80px 0', background: 'var(--bg-subtle)' }}>
      {/* Anchor for doc link compatibility */}
      <div id="contact-flodynco"></div>

      <div className="contact-container-neat" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {showHeader && (
          <div className="section-header text-center" style={{ marginBottom: '40px' }}>
            <div className="section-tag-pill">
              <i className="fas fa-headset"></i>
              <span>Engineering Simulation Inquiries</span>
            </div>
            <h2 className="section-title-neat">
              Contact <span className="highlight-cyan">FloDynCo</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', fontWeight: 500, margin: '8px 0 12px 0' }}>
              We provide consultation, confidential assessment and simulations.
            </p>
            <div className="divider-cyan center"></div>
          </div>
        )}

        <div className="contact-grid-neat" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'flex-start' }}>
          
          {/* Left Column: Direct Info & Global Operating Locations */}
          <div className="contact-info-col">
            <div 
              className="contact-card-info-neat"
              style={{
                background: 'var(--card-bg)',
                borderRadius: '16px',
                border: '1px solid var(--theme-border-strong)',
                padding: 'clamp(24px, 3.5vw, 36px)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--theme-primary)', fontWeight: 800 }}>
                FloDynCo Engineering
              </span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', margin: '6px 0 12px 0' }}>
                Engineering Simulation Inquiries
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '24px' }}>
                We provide consultation, confidential assessment and simulations for architects, MEP consultants, device designers, and industrial plant managers worldwide.
              </p>

              {/* Direct Inquiries Channel */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '28px' }}>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
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
                      fontSize: '1.1rem',
                      flexShrink: 0
                    }}
                  >
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, display: 'block' }}>
                      Official Inquiries Email
                    </span>
                    <a 
                      href="mailto:contact@flodynco.com" 
                      style={{ fontSize: '1.1rem', color: 'var(--theme-primary)', fontWeight: 700, textDecoration: 'none' }}
                    >
                      contact@flodynco.com
                    </a>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>
                      Direct inbox to Lead Fluid Dynamics Specialists
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
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
                      fontSize: '1.1rem',
                      flexShrink: 0
                    }}
                  >
                    <i className="fas fa-link"></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, display: 'block' }}>
                      Official Website
                    </span>
                    <a 
                      href="https://www.flodynco.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ fontSize: '1.05rem', color: 'var(--theme-primary)', fontWeight: 600, textDecoration: 'none' }}
                    >
                      https://www.flodynco.com/
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
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
                      fontSize: '1.1rem',
                      flexShrink: 0
                    }}
                  >
                    <i className="fas fa-globe"></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, display: 'block' }}>
                      Operating Locations
                    </span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--text-main)', display: 'block', marginTop: '2px' }}>
                      Bengaluru, Chennai, Germany
                    </strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>
                      Multi-time-zone engineering coverage across IST and CET
                    </span>
                  </div>
                </div>

              </div>

              {/* Confidentiality & NDA Guarantee */}
              <div 
                style={{
                  background: 'var(--bg-subtle)',
                  borderRadius: '12px',
                  border: '1px solid var(--card-border)',
                  padding: '16px 18px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}
              >
                <i className="fas fa-shield-alt text-cyan" style={{ fontSize: '1.3rem', marginTop: '2px' }}></i>
                <div>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--text-main)', display: 'block' }}>
                    Confidential Assessment &amp; Strict NDA
                  </strong>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.5, margin: '4px 0 0 0' }}>
                    All CAD geometries, Revit models, and proprietary system schematics submitted are protected under standard non-disclosure terms and processed on isolated HPC clusters.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Request for Consultation Form */}
          <div className="contact-form-col">
            <div 
              className="contact-form-card-neat"
              style={{
                background: 'var(--card-bg)',
                borderRadius: '16px',
                border: '1px solid var(--theme-border-strong)',
                padding: 'clamp(24px, 3.5vw, 36px)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '20px 10px' }}>
                  <div 
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: '#10B981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      margin: '0 auto 18px auto'
                    }}
                  >
                    <i className="fas fa-check"></i>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--theme-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Consultation Request Received
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', margin: '6px 0 10px 0' }}>
                    Thank You, {formState.fullName}
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 20px auto' }}>
                    Your consultation brief for <strong>{formState.simulationDomain}</strong> at <strong>{formState.projectLocation}</strong> has been logged under inquiry reference <strong>{inquiryId}</strong>.
                  </p>

                  <div style={{ background: 'var(--bg-subtle)', padding: '16px', borderRadius: '10px', border: '1px solid var(--card-border)', marginBottom: '24px', textAlign: 'left' }}>
                    <div style={{ fontSize: '0.84rem', color: 'var(--text-body)', marginBottom: '6px' }}>
                      <strong>Email:</strong> {formState.email}
                    </div>
                    {formState.phone && (
                      <div style={{ fontSize: '0.84rem', color: 'var(--text-body)', marginBottom: '6px' }}>
                        <strong>Phone:</strong> {formState.phone}
                      </div>
                    )}
                    {formState.organization && (
                      <div style={{ fontSize: '0.84rem', color: 'var(--text-body)', marginBottom: '6px' }}>
                        <strong>Organization:</strong> {formState.organization}
                      </div>
                    )}
                    <div style={{ fontSize: '0.84rem', color: 'var(--theme-primary)', fontWeight: 600 }}>
                      <i className="fas fa-clock" style={{ marginRight: '6px' }}></i>
                      Our lead simulation engineer will review your brief and reply within 3 business hours.
                    </div>
                  </div>

                  <button 
                    className="btn-primary-cyan"
                    onClick={handleReset}
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                      Request for Consultation
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                      Please provide your project parameters below. Fields marked with an asterisk (*) are required.
                    </p>
                  </div>

                  {/* Full Name * */}
                  <div className="form-group-neat" style={{ marginBottom: '16px' }}>
                    <label className="form-label-neat" style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Jennifer Weber / Rajesh Nair"
                      className="form-input-neat"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    />
                  </div>

                  {/* Email * & Phone Number */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '16px' }}>
                    <div className="form-group-neat">
                      <label className="form-label-neat" style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        className="form-input-neat"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group-neat">
                      <label className="form-label-neat" style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 / +49 phone number"
                        className="form-input-neat"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Organization / Firm Name & Simulation Domain * */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '16px' }}>
                    <div className="form-group-neat">
                      <label className="form-label-neat" style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Organization / Firm Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Foster & Partners / MEP Consultant"
                        className="form-input-neat"
                        value={formState.organization}
                        onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      />
                    </div>

                    <div className="form-group-neat">
                      <label className="form-label-neat" style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Simulation Domain *
                      </label>
                      <select
                        className="form-select-neat"
                        required
                        value={formState.simulationDomain}
                        onChange={(e) => setFormState({ ...formState, simulationDomain: e.target.value })}
                      >
                        {domains.map((dom, i) => (
                          <option key={i} value={dom}>{dom}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Location * */}
                  <div className="form-group-neat" style={{ marginBottom: '16px' }}>
                    <label className="form-label-neat" style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                      Project location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bengaluru, India / Munich, Germany / Singapore"
                      className="form-input-neat"
                      value={formState.projectLocation}
                      onChange={(e) => setFormState({ ...formState, projectLocation: e.target.value })}
                    />
                  </div>

                  {/* Project Scope & Details * */}
                  <div className="form-group-neat" style={{ marginBottom: '22px' }}>
                    <label className="form-label-neat" style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                      Project Scope &amp; Details *
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Please outline your geometry, key performance criteria (e.g. smoke tenability height, temperature setpoints, regulatory code, CAD availability)..."
                      className="form-textarea-neat"
                      value={formState.projectScope}
                      onChange={(e) => setFormState({ ...formState, projectScope: e.target.value })}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary-cyan w-full justify-center"
                    style={{ padding: '14px 20px', fontSize: '1rem', fontWeight: 700 }}
                  >
                    <i className="fas fa-paper-plane"></i>
                    <span>Request for Consultation</span>
                  </button>

                  <p style={{ textAlign: 'center', fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '12px', margin: '12px 0 0 0' }}>
                    <i className="fas fa-lock" style={{ marginRight: '5px' }}></i>
                    Confidential assessment &bull; Zero spam &bull; Direct engineer response
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
