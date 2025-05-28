
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Career Coach Portfolio",
      category: "Web Development",
      description: "A responsive One-Page Portfolio site for a career coach built with modern design principles and smooth interactions.",
      image: "/lovable-uploads/52408f9e-3bc6-43ca-84a0-6173100314d6.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#",
      year: "2024"
    },
    {
      id: 2,
      title: "Coffee Shop E-commerce",
      category: "E-commerce",
      description: "Online store for a local coffee shop with order management system and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1470&auto=format&fit=crop",
      technologies: ["Next.js", "Stripe", "Sanity CMS"],
      link: "#",
      year: "2024"
    },
    {
      id: 3,
      title: "Fitness App Interface",
      category: "UI/UX Design",
      description: "Mobile app interface design for fitness tracking with intuitive user experience and engaging visual design.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop",
      technologies: ["Figma", "Adobe XD", "Principle"],
      link: "#",
      year: "2023"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container-section">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-charcoal tracking-tight">
            Selected Work
          </h2>
          <p className="text-xl text-charcoal/60 max-w-2xl">
            A collection of projects that showcase my passion for creating meaningful digital experiences.
          </p>
        </div>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card ${index % 2 === 1 ? 'project-card-reverse' : ''}`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50 group cursor-pointer">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-charcoal/50 uppercase tracking-wider font-medium mb-2">
                        {project.category} • {project.year}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-light text-charcoal mb-4 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-charcoal/70 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="text-sm text-charcoal/60 bg-gray-50 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-charcoal hover:text-charcoal/70 text-lg font-normal transition-all duration-300 group"
                    >
                      View Project
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-charcoal transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
