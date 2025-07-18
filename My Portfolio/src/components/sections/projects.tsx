import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { PROJECTS } from '@/lib/constants';

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="section-title text-4xl md:text-5xl font-montserrat font-light text-[#1a1a1a] mb-16 text-center"
            variants={itemVariants}
          >
            Featured Projects & Portfolio
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500 uppercase tracking-wide font-montserrat font-medium">
                        {project.category}
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-gray-100 rounded-full group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors"
                      >
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </div>
                    
                    <h3 className="text-xl font-montserrat font-semibold text-[#1a1a1a] mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed font-montserrat font-light">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-montserrat font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#1a1a1a] hover:text-gray-600 transition-colors group/link font-montserrat font-medium"
                    >
                      View Project
                      <ArrowUpRight
                        size={16}
                        className="ml-1 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}