import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const PALETTES = [
  {
    id: 'cyan',
    name: '00. Electric Cyan (Default)',
    tag: 'CFD Core',
    colors: ['#0891B2', '#06B6D4', '#0284C7', '#ECFEFF'],
    primary: '#0891B2',
    accent: '#06B6D4',
    bgTint: '#F0F9FF',
    desc: 'Original high-precision fluid dynamics engineering cyan'
  },
  {
    id: 'p01',
    name: '01. Coral Seafoam & Peach',
    tag: 'Palette 01',
    colors: ['#F87171', '#FB923C', '#FEF08A', '#2DD4BF'],
    primary: '#F87171',
    accent: '#2DD4BF',
    bgTint: '#FFF7F7',
    desc: 'Vibrant coral pink, warm peach and refreshing seafoam mint'
  },
  {
    id: 'p02',
    name: '02. Apricot Orange & Sky Blue',
    tag: 'Palette 02',
    colors: ['#F97316', '#FDBA74', '#FEF3C7', '#0EA5E9'],
    primary: '#F97316',
    accent: '#0EA5E9',
    bgTint: '#FFF9F5',
    desc: 'Warm aerodynamic apricot orange with cool sky blue contrast'
  },
  {
    id: 'p03',
    name: '03. Sage Mint & Dusty Rose',
    tag: 'Palette 03',
    colors: ['#0D9488', '#5EEAD4', '#FEFCE8', '#E07A5F'],
    primary: '#0D9488',
    accent: '#E07A5F',
    bgTint: '#F4FAF8',
    desc: 'Sophisticated sage teal with warm dusty rose accents'
  },
  {
    id: 'p04',
    name: '04. Vanilla Cream & Crimson',
    tag: 'Palette 04',
    colors: ['#BE123C', '#FB7185', '#FDE047', '#FFFDF7'],
    primary: '#BE123C',
    accent: '#FB7185',
    bgTint: '#FFFBF9',
    desc: 'Bold crimson rose with buttercream and vanilla undertones'
  },
  {
    id: 'p05',
    name: '05. Electric Cyan & Solar Amber',
    tag: 'Palette 05',
    colors: ['#0891B2', '#06B6D4', '#FACC15', '#EA580C'],
    primary: '#0891B2',
    accent: '#EA580C',
    bgTint: '#F0FBFF',
    desc: 'High-contrast electric cyan with solar amber and gold'
  },
  {
    id: 'p06',
    name: '06. Dusty Plum & Rose Quartz',
    tag: 'Palette 06',
    colors: ['#9333EA', '#EC4899', '#FFD1C7', '#FFF1F2'],
    primary: '#9333EA',
    accent: '#EC4899',
    bgTint: '#FAF5FF',
    desc: 'Rich dusty plum purple with delicate rose quartz pink'
  },
  {
    id: 'p07',
    name: '07. Periwinkle (#8781F2) & Sunset',
    tag: 'Palette 07',
    colors: ['#8781F2', '#F472B6', '#FDBA74', '#FEF08A'],
    primary: '#8781F2',
    accent: '#F472B6',
    bgTint: '#F6F5FE',
    desc: 'Signature periwinkle #8781F2 with pastel sunset rose and peach'
  },
  {
    id: 'p08',
    name: '08. Meadow Sage & Royal Amethyst',
    tag: 'Palette 08',
    colors: ['#16A34A', '#86EFAC', '#FEFCE8', '#7C3AED'],
    primary: '#16A34A',
    accent: '#7C3AED',
    bgTint: '#F3FAF5',
    desc: 'Eco meadow green paired with royal amethyst purple'
  },
  {
    id: 'p09',
    name: '09. Lilac Mist & Electric Iris',
    tag: 'Palette 09',
    colors: ['#7C3AED', '#A855F7', '#DDD6FE', '#FAF5FF'],
    primary: '#7C3AED',
    accent: '#A855F7',
    bgTint: '#FAF7FF',
    desc: 'Multi-layer lavender, lilac mist and deep electric iris'
  },
  {
    id: 'p10',
    name: '10. Cerulean Blue & Rose Mint',
    tag: 'Palette 10',
    colors: ['#2563EB', '#FB7185', '#F8FAFC', '#10B981'],
    primary: '#2563EB',
    accent: '#10B981',
    bgTint: '#F4F8FE',
    desc: 'Steel cerulean blue with soft rose coral and mint seafoam'
  },
];

export function ThemeProvider({ children }) {
  const [palette, setPalette] = useState(() => {
    return localStorage.getItem('flodynco_palette') || 'cyan';
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('flodynco_mode') === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('flodynco_palette', palette);
  }, [palette]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-mode', 'dark');
      localStorage.setItem('flodynco_mode', 'dark');
    } else {
      document.documentElement.removeAttribute('data-mode');
      localStorage.setItem('flodynco_mode', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const selectPalette = (paletteId) => {
    setPalette(paletteId);
  };

  const currentPaletteObj = PALETTES.find((p) => p.id === palette) || PALETTES[0];

  return (
    <ThemeContext.Provider
      value={{
        palette,
        selectPalette,
        isDarkMode,
        toggleDarkMode,
        currentPaletteObj,
        palettes: PALETTES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
