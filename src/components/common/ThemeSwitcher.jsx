import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { palette, selectPalette, isDarkMode, toggleDarkMode, currentPaletteObj, palettes } = useTheme();
  const panelRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="theme-switcher-wrapper" ref={panelRef}>
      {/* Navbar Trigger Button */}
      <button
        className="btn-theme-trigger"
        onClick={() => setIsOpen(!isOpen)}
        title="Change Color Theme & Palette (10 Color Combinations + Dark Mode)"
        aria-label="Color Themes & Palettes"
      >
        <div className="palette-mini-swatches">
          {currentPaletteObj.colors.slice(0, 3).map((c, i) => (
            <span key={i} className="mini-swatch" style={{ background: c }}></span>
          ))}
        </div>
        <span className="theme-trigger-label">{currentPaletteObj.tag}</span>
        <span className="theme-mode-icon">
          {isDarkMode ? '🌙' : '☀️'}
        </span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} theme-chevron`}></i>
      </button>

      {/* Palette Selector Dropdown / Modal */}
      {isOpen && (
        <div className="theme-panel-dropdown">
          <div className="theme-panel-header">
            <div className="theme-header-left">
              <i className="fas fa-palette text-cyan"></i>
              <div>
                <h4>Color Palettes &amp; Themes</h4>
                <p>10 Palettes from your folder + Light / Dark Black modes</p>
              </div>
            </div>
            <button
              className="theme-panel-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close Theme Panel"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Light / Black Mode Toggle */}
          <div className="theme-mode-toggle-bar">
            <span className="mode-toggle-label">Base Appearance:</span>
            <div className="mode-toggle-buttons">
              <button
                className={`mode-btn ${!isDarkMode ? 'active' : ''}`}
                onClick={() => isDarkMode && toggleDarkMode()}
              >
                <span>☀️ Crisp White Base</span>
              </button>
              <button
                className={`mode-btn ${isDarkMode ? 'active' : ''}`}
                onClick={() => !isDarkMode && toggleDarkMode()}
              >
                <span>🌙 Deep Black Dark Mode</span>
              </button>
            </div>
          </div>

          {/* Palettes Grid */}
          <div className="theme-palettes-list">
            {palettes.map((p) => {
              const isSelected = palette === p.id;
              return (
                <div
                  key={p.id}
                  className={`palette-choice-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    selectPalette(p.id);
                  }}
                >
                  {/* Swatch Strip Box */}
                  <div className="palette-strip-box">
                    {p.colors.map((col, idx) => (
                      <div
                        key={idx}
                        className="color-strip-bar"
                        style={{ background: col }}
                      ></div>
                    ))}
                  </div>

                  {/* Palette Information */}
                  <div className="palette-card-info">
                    <div className="palette-name-row">
                      <strong>{p.name}</strong>
                      {isSelected && <span className="active-tag-pill">ACTIVE</span>}
                    </div>
                    <p className="palette-desc-text">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="theme-panel-footer">
            <button
              className="btn-text-reset"
              onClick={() => selectPalette('cyan')}
            >
              <i className="fas fa-undo"></i>
              <span>Reset to Default Cyan</span>
            </button>
            <button
              className="btn-apply-theme"
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-check"></i>
              <span>Apply &amp; Close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
