import React from 'react';

export default function StandardsCompliance({ showHeader = true }) {
  const standards = [
    {
      code: 'NFPA 92 & 130',
      title: 'Smoke Control & Transit Systems',
      desc: 'Standard for Smoke Control Systems in Atriums, Malls, and Fixed Guideway Transit / Passenger Rail Systems.',
      icon: 'fas fa-fire-extinguisher'
    },
    {
      code: 'NBC 2016 Part 4',
      title: 'National Building Code of India',
      desc: 'Fire and Life Safety requirements for mechanical smoke extraction, basement car parks, and high-rise stair pressurization.',
      icon: 'fas fa-landmark'
    },
    {
      code: 'ASHRAE 55 & 62.1',
      title: 'Thermal Comfort & Ventilation',
      desc: 'Predictive Mean Vote (PMV), Predicted Percentage Dissatisfied (PPD), and minimum Outdoor Air ventilation rates.',
      icon: 'fas fa-wind'
    },
    {
      code: 'NFPA 502',
      title: 'Road Tunnels & Highways',
      desc: 'Standard for Road Tunnels, Bridges, and Limited Access Highways with critical longitudinal velocity validation.',
      icon: 'fas fa-road'
    },
    {
      code: 'ISO 14644-1 / 3',
      title: 'Cleanrooms & Controlled Environs',
      desc: 'Classification of air cleanliness by particle concentration and laminar velocity uniformity testing.',
      icon: 'fas fa-microscope'
    },
    {
      code: 'BS 7346 Part 7',
      title: 'Car Park Impulse Ventilation',
      desc: 'Code of practice for functional recommendations and calculation methods for smoke and heat control in car parks.',
      icon: 'fas fa-car'
    }
  ];

  return (
    <section id="standards" className="standards-section-neat">
      <div className="standards-container-neat">
        {showHeader && (
          <div className="section-header text-center">
            <div className="section-tag-pill">
              <i className="fas fa-balance-scale"></i>
              <span>Statutory Compliance</span>
            </div>
            <h2 className="section-title-neat">
              Global Standards &amp; <span className="highlight-cyan">Code Certifications</span>
            </h2>
            <p className="section-sub-neat">
              Every numerical model produced by FloDynCo is benchmarked and verified against national and international regulatory standards.
            </p>
            <div className="divider-cyan center"></div>
          </div>
        )}

        <div className="standards-grid-neat">
          {standards.map((std, idx) => (
            <div key={idx} className="standard-card-neat">
              <div className="standard-top">
                <div className="standard-icon-cyan">
                  <i className={std.icon}></i>
                </div>
                <span className="standard-code-pill-cyan">{std.code}</span>
              </div>
              <h4 className="standard-card-title">{std.title}</h4>
              <p className="standard-card-desc">{std.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
