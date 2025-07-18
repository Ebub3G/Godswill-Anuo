import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { EnhancedButton } from '@/components/ui/enhanced-button';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white">
      <Container>
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-montserrat font-light text-[#1a1a1a] mb-6"
            variants={itemVariants}
          >
            Godswill Anuo
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 font-montserrat font-medium"
            variants={itemVariants}
          >
            Professional Content Creator & Digital Designer
          </motion.p>
          
          <motion.p
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-montserrat font-light"
            variants={itemVariants}
          >
            Specializing in visual storytelling and brand design, I create compelling digital experiences 
            that connect with audiences and drive engagement. From content creation to comprehensive 
            digital strategies, I help brands establish their unique voice in today's competitive landscape.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <EnhancedButton
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('#projects')}
            >
              View Work
            </EnhancedButton>
            <EnhancedButton
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              Get in Touch
            </EnhancedButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}