
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Career Coach Portfolio",
      description: "A responsive One-Page Portfolio site for a career coach",
      image: "/lovable-uploads/52408f9e-3bc6-43ca-84a0-6173100314d6.png",
      technologies: ["React", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 2,
      title: "Coffee Shop E-commerce",
      description: "Online store for a local coffee shop with order management",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1470&auto=format&fit=crop",
      technologies: ["Next.js", "Stripe"],
      link: "#"
    },
    {
      id: 3,
      title: "Fitness App Interface",
      description: "Mobile app interface design for fitness tracking",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop",
      technologies: ["Figma", "Adobe XD"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container-section">
        <h2 className="section-title text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="card-hover">
              <div className="aspect-[4/3] overflow-hidden mb-6 bg-gray-50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg mb-3 text-charcoal">{project.title}</h3>
              <p className="text-charcoal/60 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-charcoal/50 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="text-charcoal hover:text-charcoal/70 text-sm font-normal transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
