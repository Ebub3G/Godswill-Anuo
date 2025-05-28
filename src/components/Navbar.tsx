
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6",
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent"
      )}
    >
      <div className="container-section flex justify-between items-center">
        <a href="#" className="text-xl font-medium text-charcoal tracking-wider hover:tracking-widest transition-all duration-300">
          My Portfolio
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#designs" className="nav-link">Designs</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <ul className="flex flex-col py-4">
            <li><a href="#" className="nav-link block py-3 px-6" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-link block py-3 px-6" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#projects" className="nav-link block py-3 px-6" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#designs" className="nav-link block py-3 px-6" onClick={() => setMobileMenuOpen(false)}>Designs</a></li>
            <li><a href="#contact" className="nav-link block py-3 px-6" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
