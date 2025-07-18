import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';

export function About() {
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
    <section id="about" className="py-20 bg-gray-50">
      <Container>
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="section-title text-4xl md:text-5xl font-montserrat font-light text-[#1a1a1a] mb-12"
            variants={itemVariants}
          >
            About Godswill Anuo
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 mb-8 leading-relaxed font-montserrat font-light"
            variants={itemVariants}
          >
            As a professional content creator and digital designer, I believe in the transformative power 
            of purposeful design to create meaningful brand connections. My expertise spans visual storytelling, 
            brand identity development, and digital content strategy, with a focus on understanding each 
            client's unique vision and translating it into compelling visual experiences.
          </motion.p>
          
          <motion.p
            className="text-lg text-gray-600 leading-relaxed font-montserrat font-light"
            variants={itemVariants}
          >
            With years of experience in content creation, graphic design, and digital marketing, I specialize 
            in developing comprehensive creative solutions that drive results. From social media content and 
            brand campaigns to web design and digital experiences, I combine aesthetic excellence with 
            strategic thinking to help businesses stand out in the digital marketplace.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}