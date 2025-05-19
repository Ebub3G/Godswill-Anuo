
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Eco-Friendly Blog",
      description: "A responsive blog website focused on sustainable living and eco-friendly tips.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop",
      technologies: ["React", "Tailwind CSS", "Netlify"],
      link: "#"
    },
    {
      id: 2,
      title: "Coffee Shop E-commerce",
      description: "Fully functional online store for a local coffee shop with order management.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1470&auto=format&fit=crop",
      technologies: ["Next.js", "Stripe", "Vercel"],
      link: "#"
    },
    {
      id: 3,
      title: "Fitness App UI",
      description: "Mobile app interface design for a personal fitness tracking application.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-section">
        <h2 className="section-title">Web Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border border-gray-200 card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 text-charcoal">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-charcoal text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-amber-dark hover:text-amber font-medium flex items-center"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
