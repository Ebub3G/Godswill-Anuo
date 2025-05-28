
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="container-section">
        <h2 className="section-title text-center animate-fade-in">About</h2>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-charcoal/70 mb-8 leading-relaxed animate-slide-in" style={{animationDelay: '0.2s'}}>
            I'm a Content Creator and Digital Designer who specializes in crafting clean, 
            modern experiences that help brands stand out through purposeful design.
          </p>
          <p className="text-charcoal/70 leading-relaxed animate-slide-in" style={{animationDelay: '0.4s'}}>
            With a focus on simplicity and clarity, I bring ideas to life through 
            visual storytelling and thoughtful user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
