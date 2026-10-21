import React, { useState } from 'react';

export default function Logo({ size = 'medium', showTagline = true }) {
  const [isHovered, setIsHovered] = useState(false);

  const isSmall = size === 'small';
  const isLarge = size === 'large';
  const iconDim = isSmall ? 36 : isLarge ? 56 : 44;
  const textSize = isSmall ? '1.18rem' : isLarge ? '1.85rem' : '1.42rem';
  const subSize = isSmall ? '0.55rem' : isLarge ? '0.72rem' : '0.62rem';

  return (
    <div 
      className="flodynco-dynamic-logo" 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: isSmall ? '10px' : '14px', 
        textDecoration: 'none',
        cursor: 'pointer',
        userSelect: 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Aerodynamic CFD Vortex Emblem */}
      <div 
        className="dynamic-vortex-icon" 
        style={{ 
          width: `${iconDim}px`, 
          height: `${iconDim}px`, 
          position: 'relative', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flexShrink: 0,
          filter: isHovered 
            ? 'drop-shadow(0 0 12px var(--theme-primary))' 
            : 'drop-shadow(0 2px 6px rgba(0,0,0,0.12))',
          transition: 'filter 0.3s ease, transform 0.3s ease',
          transform: isHovered ? 'scale(1.08)' : 'scale(1)'
        }}
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <defs>
            <linearGradient id="dynGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--theme-secondary)" />
              <stop offset="100%" stopColor="var(--theme-primary)" />
            </linearGradient>
            <linearGradient id="dynGradAccent" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--theme-accent)" />
              <stop offset="100%" stopColor="var(--theme-secondary)" />
            </linearGradient>
            <linearGradient id="dynGradCore" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="var(--theme-primary)" />
            </linearGradient>
          </defs>

          {/* Background subtle velocity ring */}
          <circle 
            cx="50" 
            cy="50" 
            r="44" 
            fill="none" 
            stroke="var(--theme-border)" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            className="spin-cw-slow"
          />

          {/* Outer Streamline Ring */}
          <g className={isHovered ? "spin-clockwise-fast" : "spin-clockwise"}>
            <path 
              d="M 50 10 C 78 10, 92 32, 88 58 C 82 82, 58 90, 32 84 C 14 78, 8 54, 14 34 C 20 20, 36 10, 50 10" 
              fill="none" 
              stroke="url(#dynGradPrimary)" 
              strokeWidth="7.5" 
              strokeLinecap="round"
            />
            <circle cx="88" cy="58" r="3.5" fill="var(--theme-secondary)" />
            <circle cx="14" cy="34" r="2.5" fill="var(--theme-primary)" />
          </g>

          {/* Inner Counter-Rotating Aerodynamic Streamline Ring */}
          <g className={isHovered ? "spin-counter-fast" : "spin-counter"}>
            <path 
              d="M 50 84 C 22 84, 10 60, 16 38 C 22 16, 46 12, 68 18 C 84 24, 88 46, 80 66 C 72 80, 62 84, 50 84" 
              fill="none" 
              stroke="url(#dynGradAccent)" 
              strokeWidth="6" 
              strokeLinecap="round" 
              opacity="0.95"
            />
            <circle cx="68" cy="18" r="3" fill="var(--theme-primary)" />
          </g>

          {/* Central High-Velocity Core */}
          <circle cx="50" cy="50" r="12" fill="url(#dynGradCore)" />
          <circle cx="50" cy="50" r="6" fill="#FFFFFF" />
          <polygon points="50,44 54,53 46,53" fill="var(--theme-primary)" />
        </svg>
      </div>

      {/* Styled Brand Typography (100% Clear & Legible) */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div 
          className="flodynco-logo-brand"
          style={{ fontSize: textSize }}
        >
          <span className="logo-flo">FLO</span>
          <span className="logo-dyn">DYN</span>
          <span className="logo-co">CO</span>
          <span className="logo-dot"></span>
        </div>

        {showTagline && (
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              marginTop: '3px' 
            }}
          >
            <span 
              className="logo-tagline"
              style={{ 
                fontSize: subSize,
                letterSpacing: '0.04em',
                fontWeight: 600,
                color: isHovered ? 'var(--theme-primary)' : 'var(--text-muted)'
              }}
            >
              Fluid Dynamics Corporation
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
