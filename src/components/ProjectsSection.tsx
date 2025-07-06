
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Art Gallery - Elena Rodriguez",
      category: "Art & Culture",
      description: "Elegant art gallery website showcasing contemporary artworks with sophisticated design, artist portfolios, and immersive viewing experiences for art enthusiasts.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1470&auto=format&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://art-gallery-lake-ten.vercel.app",
      year: "2024"
    },
    {
      id: 2,
      title: "Bella Vista Italian Restaurant",
      category: "Restaurant & Hospitality",
      description: "Authentic Italian restaurant website featuring menu showcase, online reservations, and captivating visuals that bring the taste of Italy to your screen.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1470&auto=format&fit=crop",
      technologies: ["React", "Next.js", "Tailwind CSS", "Reservation System"],
      link: "https://bella-vista-inky.vercel.app",
      year: "2024"
    },
    {
      id: 3,
      title: "Coach Sarah",
      category: "Personal Coaching",
      description: "Professional coaching website featuring personalized coaching services, client testimonials, and easy booking system for transformative life coaching experiences.",
      image: "/lovable-uploads/3649d90d-ece6-4cb4-868a-300fa4604a18.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://coach-sarah.vercel.app",
      year: "2024"
    },
    {
      id: 4,
      title: "Mr Banks Tips",
      category: "Sports & Betting",
      description: "Professional sports betting tips platform featuring expert analysis, live odds, news updates, and comprehensive betting strategies for sports enthusiasts.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Real-time Data"],
      link: "https://mr-banks-tips.vercel.app",
      year: "2024"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container-section">
        <div className="mb-20 text-left">
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-charcoal tracking-tight">
            Selected Work
          </h2>
          <p className="text-xl text-charcoal/60 max-w-2xl">
            A diverse collection of projects showcasing expertise across different industries and technologies.
          </p>
        </div>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-7">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50 group cursor-pointer">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5">
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-charcoal hover:text-charcoal/70 text-lg font-normal transition-all duration-300 group relative"
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
