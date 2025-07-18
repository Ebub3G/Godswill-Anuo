import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SOCIAL_LINKS, CONTACT_EMAIL } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
    { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Contact</h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center text-gray-300 hover:text-white transition-colors font-montserrat font-light"
            >
              <Mail size={18} className="mr-2" />
              {CONTACT_EMAIL}
            </a>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Follow</h3>
            <div className="flex space-x-4">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors font-montserrat font-light">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors font-montserrat font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm font-montserrat font-light">
            © {currentYear} Godswill Anuo. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}