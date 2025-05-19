
import React from 'react';

const AboutSection = () => {
  const skills = [
    { name: "Web Design", proficiency: 90 },
    { name: "UI/UX Design", proficiency: 85 },
    { name: "Graphic Design", proficiency: 95 },
    { name: "Content Creation", proficiency: 80 },
    { name: "Social Media", proficiency: 75 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-section">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-6">
              Hello! I'm Alex, a passionate content creator and digital designer with over 5 years of experience in creating engaging visual content for brands and individuals.
            </p>
            <p className="text-gray-700 mb-6">
              My journey began as a freelance graphic designer, which evolved into web design and content creation as I discovered my passion for creating cohesive digital experiences.
            </p>
            <p className="text-gray-700">
              I believe in the power of visual storytelling and how it can transform businesses and engage audiences. Whether it's a website redesign, a brand identity, or a social media campaign, I approach each project with creativity and strategic thinking.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold text-charcoal mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-charcoal">{skill.name}</span>
                    <span className="text-amber-dark">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-amber h-2.5 rounded-full" 
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
