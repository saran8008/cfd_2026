import React from 'react';
import Logo from '../common/Logo';

export default function LegalModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy & Data Security',
      subtitle: 'FloDynCo: Fluid Dynamics Corporation Data Protection Standards',
      date: 'Effective Date: October 2026',
      sections: [
        {
          heading: '1. Information We Collect & Engineering Data Confidentiality',
          text: 'FloDynCo collects information strictly for engineering consultations, multiphysics simulations, and project execution. This includes names, corporate email addresses, telephone numbers, organizational details, and technical CAD/BIM model files provided for simulation scoping.'
        },
        {
          heading: '2. Strict Intellectual Property & Non-Disclosure (NDA)',
          text: 'All proprietary CAD geometries, HVAC schedules, architectural drawings, and computational mesh datasets uploaded or shared with FloDynCo remain the sole intellectual property of the client. All files are stored on isolated, encrypted in-house HPC nodes and are never shared with third parties.'
        },
        {
          heading: '3. Data Processing & HPC Security',
          text: 'Computational jobs are processed using dedicated high-performance Linux computing clusters. Computational results and raw OpenFOAM, ANSYS Fluent, and FDS files are retained for the contracted warranty duration and purged upon verified project sign-off.'
        },
        {
          heading: '4. Contacting Our Data Compliance Officer',
          text: 'For questions regarding confidentiality agreements or data security protocols, contact us directly at contact@flodynco.com (Attn: Legal & Data Security Officer, Bengaluru & Germany offices).'
        }
      ]
    },
    terms: {
      title: 'Terms of Service & Engineering Consultation',
      subtitle: 'FloDynCo: Fluid Dynamics Corporation Service Agreement',
      date: 'Effective Date: October 2026',
      sections: [
        {
          heading: '1. Engineering Simulation Scope',
          text: 'FloDynCo provides advanced Computational Fluid Dynamics (CFD), finite volume analysis, thermal modeling, and life safety simulation services in accordance with agreed technical scopes of work (SOW) and recognized international standards (NFPA, NBC, ASHRAE, ISO).'
        },
        {
          heading: '2. Professional Deliverables & Verification',
          text: 'Deliverables include stamped numerical simulation reports, 3D velocity vectors, scalar temperature/species contours, grid convergence verification studies, and executive summaries formatted for statutory authorities.'
        },
        {
          heading: '3. Boundary Conditions & Client Inputs',
          text: 'Simulation accuracy relies on client-provided architectural blueprints, MEP equipment data sheets, and boundary condition inputs. FloDynCo verifies all inputs and highlights any discrepancies prior to high-performance solver initialization.'
        },
        {
          heading: '4. Governing Jurisdiction',
          text: 'Contracts and engineering agreements are governed by the applicable corporate jurisdictions of FloDynCo’s registered offices in Bengaluru, Chennai, India, and European Union commercial law for German operations.'
        }
      ]
    },
    sitemap: {
      title: 'Website Sitemap & Navigation Directory',
      subtitle: 'Complete architectural map of FloDynCo web resources',
      date: 'Updated: 2026',
      sections: [
        {
          heading: 'Main Navigation & Core Sections',
          links: [
            { name: 'Home — Executive Overview & Solution Pillars', hash: '#home' },
            { name: 'About Us — Fluid Dynamics Corporation History & Mission', hash: '#about' },
            { name: 'Research — Practical Engineering Simulation Cases (CASE-1 to CASE-6)', hash: '#research' },
            { name: 'Contact — Request for Consultation & Operating Locations', hash: '#contact' }
          ]
        },
        {
          heading: 'Advanced CFD Solution Pillars',
          links: [
            { name: 'Advanced CFD Solutions for Building Physics', hash: '#home' },
            { name: 'Advanced CFD Solutions for Medical Devices', hash: '#home' },
            { name: 'Advanced CFD Solutions for Industries', hash: '#home' },
            { name: 'Advanced CFD Solutions for Livestock Warehouse', hash: '#home' }
          ]
        },
        {
          heading: 'Global Operating Offices & Direct Channels',
          text: 'Bengaluru, India | Chennai, India | Munich/Stuttgart, Germany | Official Email: contact@flodynco.com | Website: https://www.flodynco.com/'
        }
      ]
    }
  };

  const activeContent = contentMap[type] || contentMap.privacy;

  return (
    <div className="modal-backdrop-neat" onClick={onClose}>
      <div 
        className="modal-panel-neat legal-modal-panel" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '780px', maxHeight: '88vh', overflowY: 'auto' }}
      >
        <button 
          className="modal-close-btn-neat" 
          onClick={onClose} 
          aria-label="Close Legal Modal"
        >
          <i className="fas fa-times"></i>
        </button>

        <div style={{ marginBottom: '16px' }}>
          <Logo size="small" showTagline={true} />
        </div>

        <div className="legal-modal-header" style={{ marginBottom: '20px', borderBottom: '1px solid var(--theme-border)', paddingBottom: '14px' }}>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
            {activeContent.title}
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--theme-primary)', fontWeight: 600 }}>
            {activeContent.subtitle}
          </p>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            {activeContent.date}
          </span>
        </div>

        <div className="legal-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {activeContent.sections.map((sec, idx) => (
            <div key={idx} style={{ background: 'var(--bg-subtle)', padding: '16px 20px', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                {sec.heading}
              </h4>
              {sec.text && (
                <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>
                  {sec.text}
                </p>
              )}
              {sec.links && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {sec.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a 
                        href={link.hash} 
                        onClick={() => onClose()}
                        style={{ color: 'var(--theme-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}
                      >
                        <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--theme-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            FloDynCo: Fluid Dynamics Corporation &bull; contact@flodynco.com
          </span>
          <button className="btn-primary-cyan" onClick={onClose}>
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
