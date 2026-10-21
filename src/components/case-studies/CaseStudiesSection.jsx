import React, { useState } from 'react';
import CaseStudyCard from './CaseStudyCard';

export default function CaseStudiesSection({ onOpenQuote, showHeader = true }) {
  const [filter, setFilter] = useState('all');

  const caseStudies = [
    {
      id: 'atrium-smoke',
      category: 'fire',
      badge: 'Fire Engineering',
      title: '42-Story Commercial High-Rise Atrium Smoke Clearance',
      location: 'Mumbai, Maharashtra',
      clientType: 'Commercial Real Estate Developer',
      challenge: 'Verify that smoke from a 5.0 MW fast t-squared fire does not breach upper tenant floors or compromise egress stairs before complete evacuation.',
      solution: 'Conducted transient CFD simulation using Pyrosim/FDS. Optimized make-up air intake louvers at ground level and sequenced 6 roof-mounted smoke exhaust fans (180,000 CFM total).',
      metrics: [
        { label: 'Egress Tenability', value: '> 18 mins' },
        { label: 'Clear Layer Height', value: '3.2 m' },
        { label: 'Fan Capex Saved', value: '22%' }
      ],
      result: 'Maintained clear height 3.2m above floor level with visibility > 15m. Secured NFPA 92 and local Chief Fire Officer (CFO) approval in the first review.'
    },
    {
      id: 'carpark-jet',
      category: 'hvac',
      badge: 'Basement Ventilation',
      title: '3-Level Underground Parking Jet Fan Optimization',
      location: 'Bengaluru, Karnataka',
      clientType: 'IT Park Infrastructure',
      challenge: 'Eliminate toxic dead-zones across a 45,000 sq.m multi-level basement parking without expensive ducted mechanical exhaust runs.',
      solution: 'Configured a ductless system using 28 reversible induction jet fans. Analyzed CO distribution under peak rush hour ingress/egress and fire smoke purging scenarios.',
      metrics: [
        { label: 'Ductwork Savings', value: '₹42 Lakhs' },
        { label: 'Peak CO Level', value: '< 25 PPM' },
        { label: 'Fan Count Reduction', value: '28%' }
      ],
      result: 'Reduced fan count from 39 to 28 units while ensuring uniform air change rate (6 ACH normal, 12 ACH emergency). Lowered operating power consumption by 35%.'
    },
    {
      id: 'datacenter-hotspots',
      category: 'critical',
      badge: 'Mission Critical',
      title: '2.5 MW Hyperscale Data Center Thermal Optimization',
      location: 'Hyderabad, Telangana',
      clientType: 'Cloud Infrastructure Provider',
      challenge: 'High server density racks (12 kW/rack) experiencing localized hotspots of 34°C with excessive cold air bypass and rising energy PUE.',
      solution: 'Performed conjugate thermal CFD simulation modeling server intake resistance, perforated floor tile airflow, and cold-aisle containment curtains under N+1 CRAH failure.',
      metrics: [
        { label: 'PUE Improvement', value: '1.48 → 1.19' },
        { label: 'Hotspot Reduction', value: 'ΔT -8.5°C' },
        { label: 'Annual Power Saved', value: '1.2 GWh' },
      ],
      result: 'Eliminated all rack overheating issues. Optimized supply air temperature setpoint from 18°C to 23°C, saving significant ongoing chiller energy costs.'
    },
    {
      id: 'tunnel-vent',
      category: 'critical',
      badge: 'Infrastructure',
      title: '2.8 km Twin-Tube Highway Tunnel Emergency Fire Study',
      location: 'Western Ghats, India',
      clientType: 'National Highway Infrastructure',
      challenge: 'Determine critical longitudinal ventilation velocity to prevent toxic smoke back-layering against fleeing passenger vehicles during a 30 MW HGV fire.',
      solution: 'Simulated 3D transient compressible flow in 2.8 km tunnel domain. Optimized jet fan pitch and variable frequency drive (VFD) ramp-up sequences.',
      metrics: [
        { label: 'Critical Velocity', value: '3.2 m/s' },
        { label: 'Evacuation Window', value: '15 Mins' },
        { label: 'Smoke Back-Layering', value: '0 Meters' }
      ],
      result: 'Verified zero back-layering upstream of the fire source, providing a 100% smoke-free evacuation path for motorists heading towards safety cross-passages.'
    }
  ];

  const filteredStudies = filter === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === filter);

  return (
    <section id="case-studies" className="case-studies-section-neat">
      <div className="case-studies-container">
        {showHeader && (
          <div className="section-header text-center">
            <div className="section-tag-pill">
              <i className="fas fa-folder-open"></i>
              <span>Proven Project Case Studies</span>
            </div>
            <h2 className="section-title-neat">
              Real-World <span className="highlight-cyan">Engineering Impact &amp; ROI</span>
            </h2>
            <p className="section-sub-neat">
              Explore how FloDynCo's numerical modeling helps architects, MEP consultants, and developers pass statutory clearances and save substantial capex.
            </p>
            <div className="divider-cyan center"></div>
          </div>
        )}

        {/* Filter Pills */}
        <div className="case-filters-row">
          <button
            className={`filter-btn-neat ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Case Studies
          </button>
          <button
            className={`filter-btn-neat ${filter === 'fire' ? 'active' : ''}`}
            onClick={() => setFilter('fire')}
          >
            Fire &amp; Atrium Smoke
          </button>
          <button
            className={`filter-btn-neat ${filter === 'hvac' ? 'active' : ''}`}
            onClick={() => setFilter('hvac')}
          >
            Basement Jet Fans
          </button>
          <button
            className={`filter-btn-neat ${filter === 'critical' ? 'active' : ''}`}
            onClick={() => setFilter('critical')}
          >
            Tunnels &amp; Data Centers
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="case-studies-grid-neat">
          {filteredStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              onOpenQuote={onOpenQuote}
            />
          ))}
        </div>

        <div className="case-cta-wrap text-center">
          <button 
            className="btn-primary-cyan"
            onClick={onOpenQuote}
          >
            <i className="fas fa-clipboard-list"></i>
            <span>Have a Project Requiring CFD? Get Scope Proposal</span>
          </button>
        </div>
      </div>
    </section>
  );
}
