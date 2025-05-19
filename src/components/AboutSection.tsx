
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
              Hi, I'm Godswill, a passionate Content Creator and Digital Designer. I specialize in crafting clean, modern websites and eye-catching graphics that help brands and individuals stand out online.
            </p>
            <p className="text-gray-700 mb-6">
              With a strong eye for detail and a love for storytelling through visuals, I design experiences that are not just beautiful — but effective. From social media visuals to full website builds, I bring ideas to life with creativity and clarity.
            </p>
            <p className="text-gray-700">
              When I'm not designing, I'm learning new tools, sharing tips, or experimenting with new styles.
              Let's build something amazing together!
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
