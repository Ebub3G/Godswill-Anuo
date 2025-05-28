import React from 'react';
const HeroSection = () => {
  return <section id="hero" className="min-h-screen flex items-center bg-white pt-20">
      <div className="container-section">
        <div className="flex flex-col items-start text-left max-w-4xl">
          <div className="animate-fade-in">
            <div className="mb-8 overflow-hidden">
              <h1 className="text-6xl md:text-8xl font-light mb-2 text-charcoal tracking-tight leading-none animate-slide-in">
                Godswill
              </h1>
              <h1 className="text-6xl md:text-8xl font-light mb-8 text-charcoal tracking-tight leading-none animate-slide-in" style={{
              animationDelay: '0.1s'
            }}>Godswill Anuo</h1>
            </div>
            <div className="mb-12 animate-slide-in" style={{
            animationDelay: '0.2s'
          }}>
              <h2 className="text-xl md:text-2xl mb-6 text-charcoal/80 font-normal tracking-wide">
                Content Creator & Digital Designer
              </h2>
              <p className="text-charcoal/60 max-w-lg leading-relaxed text-lg">
                I create visual experiences that captivate audiences and elevate brands through 
                clean design and thoughtful execution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 animate-slide-in" style={{
            animationDelay: '0.4s'
          }}>
              <a href="#projects" className="btn-primary-enhanced">
                View Work
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a href="#contact" className="btn-outline-enhanced">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;