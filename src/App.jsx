import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

// Layout Components
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingActions from './components/layout/FloatingActions';

// Core Website Page
import HomePage from './pages/HomePage';

function AppContent() {
  const handleScrollToContact = () => {
    const elem = document.getElementById('contact-flodynco') || document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app-root-themed">
      {/* 1. Top Bar with Tagline, Contact & Operating Locations */}
      <TopBar />

      {/* 2. Main Sticky Navbar (Home, About Us, Research, Contact) */}
      <Navbar />

      {/* 3. Main Landing Page with User-Specified Content */}
      <main className="main-content-area">
        <HomePage onScrollToContact={handleScrollToContact} />
      </main>

      {/* 4. Footer & Legal (FloDynCo: Fluid Dynamics Corporation) */}
      <Footer />

      {/* 5. Minimal Back to Top Action */}
      <FloatingActions />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
