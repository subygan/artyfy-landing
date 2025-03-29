import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-primary">
          <span style={{ color: 'var(--primary)' }}>arty</span>
          <span style={{ color: 'var(--secondary)' }}>fy</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#features" className="text-gray-800 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-800 hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#roadmap" className="text-gray-800 hover:text-primary transition-colors">Roadmap</a></li>
            </ul>
          </nav>
          <a href="#signup" className="btn btn-primary">Sign Up</a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute top-full left-0 w-full">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-800 hover:text-primary transition-colors py-2" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-gray-800 hover:text-primary transition-colors py-2" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#roadmap" className="text-gray-800 hover:text-primary transition-colors py-2" onClick={() => setMenuOpen(false)}>Roadmap</a>
            <a href="#signup" className="btn btn-primary w-full text-center" onClick={() => setMenuOpen(false)}>Sign Up</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
