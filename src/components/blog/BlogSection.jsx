import React, { useState } from 'react';
import BlogCard from './BlogCard';

export default function BlogSection({ onOpenArticle, showHeader = true }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      id: 'carpark-jetfan-cfd-guide',
      category: 'HVAC & Safety',
      categoryTag: 'hvac',
      title: 'Optimizing Car Park Jet Fan Layouts for CO Dilution & Emergency Smoke Clearance',
      date: 'September 24, 2026',
      readTime: '6 min read',
      author: 'Dr. Vikram Sen, PhD',
      authorInitials: 'VS',
      authorRole: 'Lead CFD Aerodynamics Specialist',
      summary: 'A deep-dive into ductless impulse jet fan ventilation in multi-level basements, balancing carbon monoxide sensor thresholds with NFPA 92 and BS 7346 emergency smoke purge standards.',
      section1: 'Traditional ducted mechanical ventilation in underground parking requires extensive headroom, complex sheet metal routing, and often creates dead stagnation pockets where carbon monoxide concentrations exceed 50 PPM. By utilizing 3D Computational Fluid Dynamics (CFD), engineers can analyze the spatial momentum transfer of high-velocity induction jet fans, ensuring uniform dilution.',
      section2: 'In our numerical simulations using ANSYS Fluent and OpenFOAM, we model turbulent shear layers using the Realizable k-ε turbulence model with enhanced wall functions. The domain encompasses multiple car parking aisles, structural column obstructions, ramps, and dedicated exhaust air shafts.',
      section3: 'By strategically angling jet fans at 5° to 10° pitches and staggering discharge throws, our clients regularly achieve a 25% to 35% reduction in total fan units while reducing baseline operational electricity consumption by over 40%. Full compliance with NBC 2016 Part 4 is verified through transient 12-ACH emergency fire purge simulations.',
      takeaways: [
        'CO levels maintained below 25 PPM during peak ingress/egress hours.',
        'Impulse fan momentum throw eliminates 100% of dead-zones behind shear walls.',
        'Elimination of ductwork saves significant structural clearance height and capex.'
      ]
    },
    {
      id: 'atrium-fire-smoke-fds',
      category: 'Fire Engineering',
      categoryTag: 'fire',
      title: 'Preventing Smoke Ingress in 40+ Story High-Rise Atriums Using FDS & Pyrosim',
      date: 'September 18, 2026',
      readTime: '8 min read',
      author: 'Aarav Malhotra, M.Tech',
      authorInitials: 'AM',
      authorRole: 'Principal Fire Safety Simulation Engineer',
      summary: 'Computational analysis of plume buoyancy, smoke stratification, and tenable egress conditions in large-volume architectural atriums under 5.0 MW fast-growth fires.',
      section1: 'Atrium fires present a critical life-safety hazard due to the immense volume of smoke generated and the tendency for plumes to lose thermal buoyancy as they entrain cool ambient air. Without proper CFD optimization, smoke can accumulate and breach interconnected upper tenant floors.',
      section2: 'Using Fire Dynamics Simulator (FDS 6.8) and Pyrosim with Large Eddy Simulation (LES) turbulence modeling, FloDynCo computes radiative heat flux, smoke optical density, carbon monoxide toxicity (FED), and clear layer height 3.0+ meters above the highest egress platform.',
      section3: 'Our transient simulation models verify make-up air intake velocity limits (< 1.0 m/s) to prevent plume turbulence disruption while sizing exhaust extraction fans to maintain 15+ minutes of occupant visibility, satisfying NFPA 92 and municipal Chief Fire Officer requirements.',
      takeaways: [
        'Accurate prediction of smoke layer descent times across transient timelines.',
        'Optimization of natural vs powered mechanical smoke exhaust louvers.',
        'Full tenability verification: temperature < 60°C, visibility > 10m at head height.'
      ]
    },
    {
      id: 'datacenter-cooling-pue',
      category: 'Mission Critical',
      categoryTag: 'critical',
      title: 'Eliminating Hotspots & Maximizing PUE in 2.5 MW Hyperscale Server Rooms',
      date: 'September 10, 2026',
      readTime: '7 min read',
      author: 'Priya Narang, MS',
      authorInitials: 'PN',
      authorRole: 'Thermal Systems & HPC Consultant',
      summary: 'How 3D conjugate heat transfer (CHT) CFD modeling eliminates hot air recirculation and verifies N+1 CRAH unit failure redundancy for hyperscale cloud facilities.',
      section1: 'Modern high-density data centers operating at 12 kW to 20 kW per rack generate intense heat fluxes. Localized thermal recirculation and bypass airflow waste millions in chiller power and increase the risk of hardware server throttling.',
      section2: 'FloDynCo executes conjugate heat transfer (CHT) fluid models with porous media server representations, perforated floor tile airflow distributions, and cold-aisle containment (CAC) physical barriers. We simulate extreme emergency conditions, including instantaneous loss of secondary CRAH units.',
      section3: 'By balancing raised-floor plenum pressures and redesigning containment return paths, client server intake temperatures were stabilized at 22.5°C ± 1.2°C, improving facility Power Usage Effectiveness (PUE) from 1.48 to 1.19.',
      takeaways: [
        'Elimination of localized 34°C server rack hotspot recirculation.',
        'Verified CRAH N+1 failure tolerance with zero thermal runaway.',
        'Over 1.2 GWh of annual cooling energy savings achieved.'
      ]
    },
    {
      id: 'tunnel-emergency-ventilation',
      category: 'Tunnel Aerodynamics',
      categoryTag: 'critical',
      title: 'Critical Velocity Criteria in Mountain Highway Tunnels: An NFPA 502 Deep Dive',
      date: 'August 28, 2026',
      readTime: '9 min read',
      author: 'Dr. Vikram Sen, PhD',
      authorInitials: 'VS',
      authorRole: 'Lead CFD Aerodynamics Specialist',
      summary: 'Preventing toxic smoke back-layering against fleeing vehicles during a 30 MW heavy goods vehicle (HGV) fire in long vehicular tunnels.',
      section1: 'In vehicular and rail tunnels, emergency fire ventilation must generate sufficient longitudinal air velocity to drive smoke and toxic gases in the direction of traffic flow, preventing dangerous smoke back-layering against evacuating motorists.',
      section2: 'Using 3D compressible transient Navier-Stokes equations with combustion reaction kinetics, FloDynCo computes the exact critical velocity (typically 2.8 to 3.5 m/s depending on tunnel gradient and cross-sectional geometry) under worst-case 30 MW and 50 MW fire curves.',
      section3: 'Our CFD models optimize jet fan group spacing, variable frequency drive (VFD) ramp-up sequences, and emergency portal extract fans, ensuring safe evacuation paths toward cross-passage fire doors under NFPA 502 standards.',
      takeaways: [
        'Zero upstream smoke back-layering verified for 30 MW HGV fire events.',
        'Jet fan activation staging prevents dangerous aerodynamic pressure surges.',
        'Clear tenable egress route maintained for passenger safety.'
      ]
    },
    {
      id: 'ashrae-55-pmv-comfort',
      category: 'HVAC & Comfort',
      categoryTag: 'hvac',
      title: 'Mastering Indoor Air Quality & Thermal Comfort (PMV/PPD) with High-Resolution CFD',
      date: 'August 15, 2026',
      readTime: '5 min read',
      author: 'Aarav Malhotra, M.Tech',
      authorInitials: 'AM',
      authorRole: 'Principal Fire Safety Simulation Engineer',
      summary: 'Predicting occupant thermal satisfaction (ASHRAE 55) in large glazed commercial spaces, sports arenas, and airport terminals through computational flow analysis.',
      section1: 'Large architectural spaces with extensive solar glazing and high ceilings suffer from thermal stratification, cold downdrafts, and localized occupant discomfort. Standard bulk HVAC calculations fail to account for microclimate airflow velocities.',
      section2: 'FloDynCo integrates solar radiation flux, envelope conduction, and human metabolic heat loads with SST k-ω turbulence models to map Predictive Mean Vote (PMV) and Predicted Percentage Dissatisfied (PPD) across thousands of virtual occupant locations.',
      section3: 'This enables MEP engineers to calibrate diffuser supply angles, supply temperatures, and perimeter underfloor slots, achieving uniform comfort without expensive trial-and-error commissioning adjustments.',
      takeaways: [
        'Accurate mapping of PMV within ASHRAE 55 recommended (-0.5 to +0.5) envelope.',
        'Elimination of drafts (>0.2 m/s) at seated occupant neck levels.',
        'Up to 18% reduction in over-cooling energy requirements.'
      ]
    },
    {
      id: 'cleanroom-laminar-iso14644',
      category: 'Pharma & Cleanroom',
      categoryTag: 'industrial',
      title: 'ISO Class 5 Cleanroom Laminar Flow Validation & Airborne Particle Tracking',
      date: 'August 02, 2026',
      readTime: '7 min read',
      author: 'Priya Narang, MS',
      authorInitials: 'PN',
      authorRole: 'Thermal Systems & HPC Consultant',
      summary: 'Ensuring laminar ceiling velocity uniformity (0.45 m/s ± 20%) and zero vortex entrapment in pharmaceutical grade-A filling lines using discrete phase modeling (DPM).',
      section1: 'Pharmaceutical aseptic filling lines and semiconductor fabs require strict unidirectional laminar air currents to flush sub-micron particles away from critical sterile workzones. Flow turbulence or stagnant eddies can lead to catastrophic batch contamination.',
      section2: 'Using Eulerian-Lagrangian discrete phase modeling (DPM), we track millions of micro-particles (0.5µm to 5.0µm) released from personnel movement and machinery vibration. We evaluate HEPA filter plenum pressure drops and low-level return air grilles.',
      section3: 'Our CFD clearance studies verify compliance with ISO 14644-1 and US FDA cGMP guidelines, validating air velocity uniformity and preventing contaminant cross-migration across pressure cascade boundaries.',
      takeaways: [
        'Zero particle stagnation or recirculation eddies over open vials.',
        'Verification of 0.45 m/s unidirectional laminar flow across full active zone.',
        'Swift documentation clearance for international FDA / EU GMP audits.'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'fire', label: 'Fire Safety & FDS' },
    { id: 'hvac', label: 'HVAC & Jet Fans' },
    { id: 'critical', label: 'Data Centers & Tunnels' },
    { id: 'industrial', label: 'Pharma & Cleanrooms' },
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = activeCategory === 'all' || art.categoryTag === activeCategory;
    const matchesSearch = searchQuery === '' || 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="blog-section-neat">
      <div className="blog-container-neat">
        {showHeader && (
          <div className="section-header text-center">
            <div className="section-tag-pill">
              <i className="fas fa-book-open"></i>
              <span>Engineering Knowledge Hub</span>
            </div>
            <h2 className="section-title-neat">
              Technical Papers &amp; <span className="highlight-cyan">CFD Research</span>
            </h2>
            <p className="section-sub-neat">
              Peer-reviewed methodologies, numerical formulations, and best practices published by FloDynCo fluid dynamics research specialists.
            </p>
            <div className="divider-cyan center"></div>
          </div>
        )}

        {/* Search & Category Filter Bar */}
        <div className="blog-controls-neat">
          <div className="blog-search-wrap">
            <i className="fas fa-search search-icon-cyan"></i>
            <input
              type="text"
              placeholder="Search CFD papers, FDS topics, HVAC methods..."
              className="blog-search-input-neat"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>

          <div className="blog-cat-tabs-neat">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn-neat ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="blog-grid-neat">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((art) => (
              <BlogCard
                key={art.id}
                article={art}
                onOpenArticle={onOpenArticle}
              />
            ))
          ) : (
            <div className="no-articles-card">
              <i className="fas fa-search text-cyan"></i>
              <h3>No articles found matching "{searchQuery}"</h3>
              <p>Try clearing your search query or selecting a different category tab.</p>
              <button 
                className="btn-secondary-cyan"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
