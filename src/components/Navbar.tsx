
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-8",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-6" : "bg-transparent"
      )}
    >
      <div className="container-section flex justify-between items-center">
        <a href="#" className="text-2xl font-medium text-charcoal tracking-tight hover:tracking-wide transition-all duration-300 group">
          <span className="relative">
            My Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-charcoal transition-all duration-300 group-hover:w-full"></span>
          </span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-charcoal transition-transform duration-200 hover:scale-110"
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
        <ul className="hidden md:flex space-x-12">
          <li><a href="#" className="nav-link-enhanced">Home</a></li>
          <li><a href="#about" className="nav-link-enhanced">About</a></li>
          <li><a href="#projects" className="nav-link-enhanced">Projects</a></li>
          <li><a href="#designs" className="nav-link-enhanced">Designs</a></li>
          <li><a href="#contact" className="nav-link-enhanced">Contact</a></li>
        </ul>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <ul className="flex flex-col py-6">
            <li><a href="#" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#projects" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#designs" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>Designs</a></li>
            <li><a href="#contact" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
