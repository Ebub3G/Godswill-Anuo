
import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-white pt-20">
      <div className="container-section">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 py-10 md:py-0 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-charcoal">
              Godswill Anuo
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-amber font-medium">
              Content Creator & Digital Designer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              I create stunning visual experiences that captivate audiences and elevate brands. 
              With expertise in web design and graphic arts, I bring creative visions to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber shadow-lg animate-slide-in">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
