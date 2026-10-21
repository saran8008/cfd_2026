import React, { useRef, useEffect, useState } from 'react';

export default function LiveCfdSimulation({ showHeader = true }) {
  const canvasRef = useRef(null);
  const [mode, setMode] = useState('velocity'); // 'velocity', 'thermal', 'smoke'
  const [particleCount, setParticleCount] = useState(140);
  const [obstacle, setObstacle] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1.0);
  const [metrics, setMetrics] = useState({
    reynolds: '4.85 × 10⁵',
    maxVel: '4.2 m/s',
    temp: '24 °C (Ambient)',
    meshCells: '1,840,000 cells',
    turbulence: 'k-ε Realizable',
    solver: 'Finite Volume Navier-Stokes'
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth || 800);
    let height = (canvas.height = 460);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 800;
      height = canvas.height = 460;
    };
    window.addEventListener('resize', handleResize);

    // Particle system
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * (width * 0.12);
        this.y = Math.random() * height;
        this.size = Math.random() * 2.8 + 1.6;
        this.baseSpeed = (Math.random() * 2.2 + 1.8) * speedMultiplier;
        this.vx = this.baseSpeed;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.age = 0;
        this.maxAge = Math.random() * 220 + 160;
        this.history = [];
      }

      update(mouseX, mouseY, isInteracting) {
        this.age++;

        // Physics behavior based on mode
        if (mode === 'thermal') {
          // Buoyancy effect (thermal rises)
          this.vy -= 0.045 * speedMultiplier;
          this.vx += 0.012 * speedMultiplier;
        } else if (mode === 'smoke') {
          // Smoke dispersion with turbulence
          this.vy += (Math.random() - 0.52) * 0.14 * speedMultiplier;
          this.vx += (Math.random() - 0.45) * 0.1 * speedMultiplier;
        } else {
          // Velocity streamlines with harmonic waves
          this.vy += Math.sin(this.x * 0.015 + Date.now() * 0.0025) * 0.08 * speedMultiplier;
        }

        // Obstacle avoidance (bluff body aerofoil / obstacle)
        if (obstacle) {
          const obsX = width * 0.46;
          const obsY = height * 0.5;
          const obsRadius = 52;
          const dx = this.x - obsX;
          const dy = this.y - obsY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < obsRadius + 24) {
            const angle = Math.atan2(dy, dx);
            this.vx += Math.cos(angle) * 1.1 * speedMultiplier;
            this.vy += Math.sin(angle) * 1.1 * speedMultiplier;
          }
        }

        // Mouse interaction vortex
        if (isInteracting && mouseX !== null) {
          const mdx = this.x - mouseX;
          const mdy = this.y - mouseY;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            this.vx += (mdy / mdist) * 2.5 * speedMultiplier;
            this.vy -= (mdx / mdist) * 2.5 * speedMultiplier;
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        // Trail history
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > 14) {
          this.history.shift();
        }

        // Boundary wrap
        if (this.x > width || this.y < -25 || this.y > height + 25 || this.age > this.maxAge) {
          this.reset();
        }
      }

      draw(ctx) {
        if (this.history.length < 2) return;

        ctx.beginPath();
        ctx.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 1; i < this.history.length; i++) {
          ctx.lineTo(this.history[i].x, this.history[i].y);
        }

        let strokeStyle;
        if (mode === 'thermal') {
          // Fire gradient: Deep Cyan -> Amber -> Orange -> Radiant Red
          const t = Math.min(1, Math.max(0, 1 - (this.y / height)));
          if (t > 0.72) strokeStyle = 'rgba(232, 25, 44, 0.9)';
          else if (t > 0.45) strokeStyle = 'rgba(247, 148, 29, 0.85)';
          else if (t > 0.22) strokeStyle = 'rgba(247, 209, 23, 0.75)';
          else strokeStyle = 'rgba(6, 182, 212, 0.75)';
        } else if (mode === 'smoke') {
          // Smoke gray/white to toxic soot
          const opacity = Math.max(0.12, 1 - (this.age / this.maxAge));
          strokeStyle = `rgba(180, 210, 230, ${opacity * 0.75})`;
        } else {
          // Velocity streamlines: Cyan gradient with speed coloring
          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          if (speed > 3.8) strokeStyle = 'rgba(232, 25, 44, 0.9)';
          else if (speed > 2.8) strokeStyle = 'rgba(6, 182, 212, 0.95)';
          else if (speed > 1.8) strokeStyle = 'rgba(8, 145, 178, 0.85)';
          else strokeStyle = 'rgba(56, 189, 248, 0.75)';
        }

        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = this.size;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Particle head glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.85, 0, Math.PI * 2);
        ctx.fillStyle = strokeStyle;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    let mouse = { x: null, y: null, isInteracting: false };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isInteracting = true;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
      mouse.isInteracting = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      // High-contrast clean dark visualizer canvas with cyan grid
      ctx.fillStyle = 'rgba(11, 19, 27, 0.4)';
      ctx.fillRect(0, 0, width, height);

      // Draw background grid lines (CFD Mesh representation)
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.07)';
      ctx.lineWidth = 1;
      const gridSize = 36;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw obstacle if enabled
      if (obstacle) {
        const obsX = width * 0.46;
        const obsY = height * 0.5;
        const obsRadius = 46;

        ctx.save();
        ctx.shadowColor = 'rgba(6, 182, 212, 0.5)';
        ctx.shadowBlur = 18;

        ctx.beginPath();
        ctx.arc(obsX, obsY, obsRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#102A43';
        ctx.fill();
        ctx.strokeStyle = '#06B6D4';
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.restore();

        // Obstacle label
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 10px Montserrat, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('BLUFF BODY', obsX, obsY - 4);
        ctx.fillStyle = '#67E8F9';
        ctx.font = '9px Montserrat, sans-serif';
        ctx.fillText('CFD Geometry', obsX, obsY + 11);
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update(mouse.x, mouse.y, mouse.isInteracting);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mode, particleCount, obstacle, speedMultiplier]);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    if (newMode === 'thermal') {
      setMetrics({
        reynolds: '3.12 × 10⁵',
        maxVel: '5.8 m/s',
        temp: '820 °C (HRR 5MW)',
        meshCells: '2,400,000 cells',
        turbulence: 'LES (Large Eddy Simulation)',
        solver: 'Pyrosim / FDS 6.8'
      });
    } else if (newMode === 'smoke') {
      setMetrics({
        reynolds: '1.95 × 10⁵',
        maxVel: '3.4 m/s',
        temp: '145 °C (Layer)',
        meshCells: '3,100,000 cells',
        turbulence: 'k-ω SST',
        solver: 'Pyrosim Smoke Extraction'
      });
    } else {
      setMetrics({
        reynolds: '4.85 × 10⁵',
        maxVel: '4.2 m/s',
        temp: '24 °C (Ambient)',
        meshCells: '1,840,000 cells',
        turbulence: 'k-ε Realizable',
        solver: 'ANSYS Fluent / OpenFOAM'
      });
    }
  };

  return (
    <section id="simulation-demo" className="sim-section-neat">
      <div className="sim-container-neat">
        {showHeader && (
          <div className="section-header text-center">
            <div className="section-tag-pill">
              <i className="fas fa-atom"></i>
              <span>Interactive Multiphysics Lab</span>
            </div>
            <h2 className="section-title-neat">
              Live Interactive <span className="highlight-cyan">CFD Flow Visualizer</span>
            </h2>
            <p className="section-sub-neat">
              Interact directly with our real-time fluid dynamic vector engine. Hover or drag inside the console to inject turbulent vortices in real-time.
            </p>
            <div className="divider-cyan center"></div>
          </div>
        )}

        {/* Simulation Console Card */}
        <div className="sim-console-card-neat">
          {/* Top Control Bar */}
          <div className="sim-toolbar-neat">
            <div className="sim-modes-group">
              <span className="toolbar-label">Physics Mode:</span>
              <button
                className={`sim-btn-pill ${mode === 'velocity' ? 'active' : ''}`}
                onClick={() => handleModeChange('velocity')}
              >
                <i className="fas fa-wind"></i>
                <span>Velocity Streamlines</span>
              </button>
              <button
                className={`sim-btn-pill ${mode === 'thermal' ? 'active' : ''}`}
                onClick={() => handleModeChange('thermal')}
              >
                <i className="fas fa-fire"></i>
                <span>Thermal Buoyancy</span>
              </button>
              <button
                className={`sim-btn-pill ${mode === 'smoke' ? 'active' : ''}`}
                onClick={() => handleModeChange('smoke')}
              >
                <i className="fas fa-smog"></i>
                <span>Smoke Dispersion</span>
              </button>
            </div>

            <div className="sim-actions-group">
              <button
                className={`sim-btn-pill ${obstacle ? 'active' : ''}`}
                onClick={() => setObstacle(!obstacle)}
              >
                <i className="fas fa-circle"></i>
                <span>{obstacle ? 'Obstacle: ON' : 'Obstacle: OFF'}</span>
              </button>
              <button
                className="sim-btn-pill"
                onClick={() => setSpeedMultiplier(speedMultiplier === 1.0 ? 1.6 : 1.0)}
              >
                <i className="fas fa-tachometer-alt"></i>
                <span>{speedMultiplier > 1.0 ? 'Speed: Fast' : 'Speed: 1x'}</span>
              </button>
            </div>
          </div>

          {/* Canvas Viewport */}
          <div className="sim-canvas-wrap-neat">
            <canvas ref={canvasRef} className="sim-canvas-neat"></canvas>
            <div className="sim-hint-pill">
              <i className="fas fa-hand-pointer"></i>
              <span>Move mouse inside domain to induce vortex perturbations</span>
            </div>
          </div>

          {/* Telemetry Footer */}
          <div className="sim-telemetry-grid">
            <div className="telemetry-item">
              <span className="telemetry-label">Reynolds Number</span>
              <span className="telemetry-val text-cyan">{metrics.reynolds}</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">Peak Velocity</span>
              <span className="telemetry-val text-cyan">{metrics.maxVel}</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">Thermal Field</span>
              <span className="telemetry-val text-cyan">{metrics.temp}</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">Mesh Cell Grid</span>
              <span className="telemetry-val text-cyan">{metrics.meshCells}</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">Turbulence Closure</span>
              <span className="telemetry-val text-cyan">{metrics.turbulence}</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">Parallel Solver</span>
              <span className="telemetry-val text-cyan">{metrics.solver}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
