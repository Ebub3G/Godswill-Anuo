
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-10">
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-heading font-bold">
              <span className="text-amber">D</span>esign<span className="text-amber">P</span>ortfolio
            </a>
            <p className="text-gray-400 mt-2">Creating digital experiences that inspire.</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-3">Follow Me</h4>
              <div className="flex space-x-6">
                {/* Facebook icon from Flaticon */}
                <a href="#" className="text-gray-400 hover:text-amber transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                {/* Instagram icon from Flaticon */}
                <a href="https://www.instagram.com/jaccbyag/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                {/* X.com (formerly Twitter) icon */}
                <a href="https://x.com/jaccbyag" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M4 4l11.733 16h4.267l-11.733-16z"></path>
                    <path d="M4 20h4.267l11.733-16h-4.267z"></path>
                  </svg>
                  <span className="sr-only">X.com</span>
                </a>
                {/* LinkedIn icon from Flaticon */}
                <a href="#" className="text-gray-400 hover:text-amber transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">Contact</h4>
              <a href="mailto:jaccbyag@gmail.com" className="text-gray-400 hover:text-amber transition-colors">jaccbyag@gmail.com</a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} Godswill Anuo. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-amber transition-colors">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-amber transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
