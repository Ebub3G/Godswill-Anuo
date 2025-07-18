import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { contactFormSchema, ContactFormData } from '@/lib/validations';
import { CONTACT_EMAIL } from '@/lib/constants';

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
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
    <section id="contact" className="py-20 bg-gray-50">
      <Container>
        <motion.div
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="section-title text-4xl md:text-5xl font-montserrat font-light text-[#1a1a1a] mb-8 text-center"
            variants={itemVariants}
          >
            Contact Godswill Anuo
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 mb-8 text-center font-montserrat font-light"
            variants={itemVariants}
          >
            Ready to elevate your brand with professional content creation and digital design? 
            Let's discuss your project and bring your vision to life.
          </motion.p>
          
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[#1a1a1a] hover:text-gray-600 transition-colors text-lg font-montserrat font-medium"
            >
              {CONTACT_EMAIL}
            </a>
          </motion.div>
          
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder="Your Name"
                  {...register('name')}
                  className="border-gray-300 focus:border-[#1a1a1a] focus:ring-[#1a1a1a] font-montserrat"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 font-montserrat font-medium">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register('email')}
                  className="border-gray-300 focus:border-[#1a1a1a] focus:ring-[#1a1a1a] font-montserrat"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 font-montserrat font-medium">{errors.email.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <Input
                placeholder="Subject"
                {...register('subject')}
                className="border-gray-300 focus:border-[#1a1a1a] focus:ring-[#1a1a1a] font-montserrat"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1 font-montserrat font-medium">{errors.subject.message}</p>
              )}
            </div>
            
            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                {...register('message')}
                className="border-gray-300 focus:border-[#1a1a1a] focus:ring-[#1a1a1a] font-montserrat"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 font-montserrat font-medium">{errors.message.message}</p>
              )}
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white py-3 text-lg font-montserrat font-semibold transition-colors"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send size={18} className="ml-2" />
                </>
              )}
            </Button>
          </motion.form>
        </motion.div>
      </Container>
    </section>
  );
}