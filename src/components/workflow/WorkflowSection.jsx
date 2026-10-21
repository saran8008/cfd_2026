import React from 'react';

export default function WorkflowSection({ showHeader = true }) {
  const steps = [
    {
      step: '01',
      icon: 'fas fa-drafting-compass',
      title: 'Domain & CAD Clean-up',
      desc: 'Import 3D architectural/BIM models (Revit, Rhino, STEP), defeaturing non-essential geometries, and defining fluid boundary zones.'
    },
    {
      step: '02',
      icon: 'fas fa-th',
      title: 'Grid & Mesh Generation',
      desc: 'High-resolution polyhedral and boundary layer prism meshing with strict orthogonality and y+ wall distance control.'
    },
    {
      step: '03',
      icon: 'fas fa-server',
      title: 'HPC Physics Solver',
      desc: 'Parallel execution of Navier-Stokes equations with tailored turbulence (k-ε, k-ω SST, LES) and thermal buoyancy models.'
    },
    {
      step: '04',
      icon: 'fas fa-chart-pie',
      title: 'Post-Processing & Validation',
      desc: 'Generation of 3D streamlines, vector slice planes, ISO tenability contours, and peer-reviewed safety compliance metrics.'
    },
    {
      step: '05',
      icon: 'fas fa-stamp',
      title: 'Authority Stamped Report',
      desc: 'Comprehensive engineering report with design optimization recommendations ready for fire authority and client sign-off.'
    }
  ];

  return (
    <section id="workflow" className="workflow-section-neat">
      <div className="workflow-container-neat">
        {showHeader && (
          <div className="section-header text-center">
            <div className="section-tag-pill">
              <i className="fas fa-project-diagram"></i>
              <span>Simulation Methodology</span>
            </div>
            <h2 className="section-title-neat">
              Our 5-Stage <span className="highlight-cyan">CFD Workflow</span>
            </h2>
            <p className="section-sub-neat">
              A systematic, mathematically rigorous pipeline engineered to ensure physical convergence and swift statutory clearances.
            </p>
            <div className="divider-cyan center"></div>
          </div>
        )}

        <div className="workflow-steps-grid-neat">
          {steps.map((item, idx) => (
            <div key={idx} className="workflow-card-neat">
              <div className="step-num-badge-cyan">{item.step}</div>
              <div className="step-icon-wrap-cyan">
                <i className={item.icon}></i>
              </div>
              <h4 className="step-card-title">{item.title}</h4>
              <p className="step-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
