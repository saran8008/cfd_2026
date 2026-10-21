import React, { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScrollTop) return null;

  return (
    <div className="floating-actions-neat">
      {/* Back to Top */}
      <button
        className="float-btn-neat float-top-neat"
        onClick={scrollToTop}
        aria-label="Back to Top"
        title="Back to Top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}
