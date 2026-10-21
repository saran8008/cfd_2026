import React, { useState } from 'react';
import ServiceCard from './ServiceCard';

export default function ServicesSection({ onSelectServiceQuote, showHeader = true }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 'fire-fds',
      category: 'fire',
      categoryLabel: 'Fire Engineering',
      title: 'Performance-Based Fire & Smoke Analysis',
      icon: 'fas fa-fire-flame-curved',
      desc: 'Computational simulation of fire growth, Heat Release Rates (HRR), smoke layering, visibility reduction, and occupant evacuation tenability in high-rises and atriums.',
      features: [
        'Atrium smoke extraction fan sizing',
        'Tenability criteria (visibility, temperature, CO)',
        'NFPA 92 & NBC 2016 Part 4 compliance',
        'Flashover & structural thermal risk evaluation'
      ]
    },
    {
      id: 'carpark-jet',
      category: 'hvac',
      categoryLabel: 'Basement & Parking',
      title: 'Car Park & Basement Jet Fan Ventilation',
      icon: 'fas fa-fan',
      desc: 'Design and optimization of impulse jet fan ventilation systems for underground parking structures, controlling carbon monoxide (CO) and emergency fire smoke extraction.',
      features: [
        'CO accumulation & air dilution mapping',
        'Impulse thrust jet fan layout optimization',
        'Emergency smoke purge velocity validation',
        'Ductless ventilation cost savings of up to 30%'
      ]
    },
    {
      id: 'datacenter-cooling',
      category: 'critical',
      categoryLabel: 'Mission Critical',
      title: 'Data Center Thermal & Cooling Management',
      icon: 'fas fa-server',
      desc: 'Micro-thermal CFD modeling for mission-critical IT infrastructure, server racks, hot/cold aisle containment, and CRAH/CRAC failure redundancy simulations.',
      features: [
        'Hot spot identification & bypass air elimination',
        'PUE (Power Usage Effectiveness) optimization',
        'N+1 and N+2 cooling failure scenarios',
        'Raised floor plenum pressure uniformity'
      ]
    },
    {
      id: 'tunnel-metro',
      category: 'critical',
      categoryLabel: 'Infrastructure',
      title: 'Tunnel & Metro Station Ventilation',
      icon: 'fas fa-subway',
      desc: '3D aerodynamic and fire simulation for vehicular highway tunnels, rail tunnels, and underground metro stations under normal, congested, and emergency fire conditions.',
      features: [
        'Critical velocity to prevent smoke back-layering',
        'Over-Platform Trackway Exhaust (OTE/UPE)',
        'NFPA 130 & NFPA 502 safety criteria',
        'Platform screen door airflow interaction'
      ]
    },
    {
      id: 'hvac-comfort',
      category: 'hvac',
      categoryLabel: 'HVAC & Built Environment',
      title: 'Indoor Air Quality & Thermal Comfort (PMV/PPD)',
      icon: 'fas fa-temperature-low',
      desc: 'Detailed airflow distribution and temperature stratification modeling for commercial auditoriums, malls, sports arenas, airports, and luxury spaces.',
      features: [
        'ASHRAE 55 thermal comfort indices (PMV & PPD)',
        'Draft risk rating & dead zone elimination',
        'Underfloor Air Distribution (UFAD) validation',
        'Diffuser placement and throw optimization'
      ]
    },
    {
      id: 'cleanroom-hospital',
      category: 'industrial',
      categoryLabel: 'Healthcare & Pharma',
      title: 'Cleanroom & OT Airflow Simulation',
      icon: 'fas fa-hospital',
      desc: 'Laminar flow analysis and airborne particle tracking for pharmaceutical cleanrooms, semiconductor fabrication plants, and hospital operation theatres.',
      features: [
        'ISO 14644 cleanliness class verification',
        'Particle trajectory & contaminant flushing',
        'Laminar flow velocity (0.45 m/s ±20%) validation',
        'Positive pressure room differential verification'
      ]
    },
    {
      id: 'wind-microclimate',
      category: 'industrial',
      categoryLabel: 'Aerodynamics',
      title: 'Wind Microclimate & Pedestrian Comfort',
      icon: 'fas fa-wind',
      desc: 'Atmospheric boundary layer CFD around skyscraper developments to assess pedestrian safety, balcony comfort, and wind-induced facade structural pressure loads.',
      features: [
        'Lawson & Davenport comfort criteria',
        'Corner vortex and funnel effect alleviation',
        'Balcony wind protection screen design',
        'Structural wind load pressure coefficients'
      ]
    },
    {
      id: 'flue-dispersion',
      category: 'industrial',
      categoryLabel: 'Industrial Physics',
      title: 'Flue Gas & Industrial Stack Dispersion',
      icon: 'fas fa-smog',
      desc: 'Atmospheric plume rise, pollutant dispersion, and toxic gas emission tracking around industrial plants, power stations, and chemical processing facilities.',
      features: [
        'CPCB / EPA environmental compliance',
        'Building downwash & wake vortex interaction',
        'Exhaust stack height optimization',
        'Ground-level concentration (GLC) isopachs'
      ]
    }
  ];

  const filteredServices = activeFilter === 'all'
    ? services
    : services.filter(s => s.category === activeFilter);

  const categories = [
    { id: 'all', label: 'All CFD Capabilities', icon: 'fas fa-th' },
    { id: 'fire', label: 'Fire & Smoke (FDS)', icon: 'fas fa-fire' },
    { id: 'hvac', label: 'HVAC & Jet Fans', icon: 'fas fa-fan' },
    { id: 'critical', label: 'Tunnels & Data Centers', icon: 'fas fa-server' },
    { id: 'industrial', label: 'Industrial & Wind', icon: 'fas fa-industry' },
  ];

  return (
    <section id="services" className="services-section-neat">
      <div className="services-container">
        {showHeader && (
          <div className="section-header text-center">
            <div className="section-tag-pill">
              <i className="fas fa-cubes"></i>
              <span>CFD Engineering Capabilities</span>
            </div>
            <h2 className="section-title-neat">
              Specialized <span className="highlight-cyan">Simulation Solvers</span>
            </h2>
            <p className="section-sub-neat">
              FloDynCo applies rigorous numerical physics, finite volume analysis, and turbulence models to solve demanding fluid flow and heat transfer engineering challenges.
            </p>
            <div className="divider-cyan center"></div>
          </div>
        )}

        {/* Category Filter Buttons in Light Cyan Theme */}
        <div className="services-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn-neat ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              <i className={cat.icon}></i>
              <span>{cat.label}</span>
              {activeFilter === cat.id && <span className="filter-badge-count">{filteredServices.length}</span>}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid-neat">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectQuote={onSelectServiceQuote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
