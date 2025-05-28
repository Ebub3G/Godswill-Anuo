
import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-white pt-20">
      <div className="container-section">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-normal mb-6 text-charcoal tracking-tight animate-slide-in">
              Godswill Anuo
            </h1>
            <h2 className="text-lg md:text-xl mb-8 text-charcoal/70 font-light animate-slide-in" style={{animationDelay: '0.2s'}}>
              Content Creator & Digital Designer
            </h2>
            <p className="text-charcoal/60 mb-12 max-w-lg mx-auto leading-relaxed animate-slide-in" style={{animationDelay: '0.4s'}}>
              I create visual experiences that captivate audiences and elevate brands through 
              clean design and thoughtful execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in" style={{animationDelay: '0.6s'}}>
              <a href="#projects" className="btn-primary">
                View Work
              </a>
              <a href="#contact" className="btn-outline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
