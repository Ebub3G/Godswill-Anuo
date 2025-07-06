
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon."
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="container-section">
        <h2 className="section-title text-center">Contact</h2>
        
        <div className="max-w-md mx-auto">
          <p className="mb-8 text-charcoal/60 text-center leading-relaxed">
            Interested in working together? Send me a message.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input 
                id="name" 
                name="name" 
                placeholder="Name"
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="border-gray-200 focus:border-charcoal focus:ring-0"
              />
            </div>
            
            <div>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="Email"
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="border-gray-200 focus:border-charcoal focus:ring-0"
              />
            </div>
            
            <div>
              <Input 
                id="subject" 
                name="subject" 
                placeholder="Subject"
                value={formData.subject} 
                onChange={handleChange} 
                required 
                className="border-gray-200 focus:border-charcoal focus:ring-0"
              />
            </div>
            
            <div>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="Message"
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows={5} 
                className="border-gray-200 focus:border-charcoal focus:ring-0 resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={loading} 
              className="bg-charcoal hover:bg-charcoal/80 text-white w-full py-6 font-normal"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
          
          <div className="mt-12 text-center">
            <p className="text-charcoal/50 text-sm mb-2">jaccbyag@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
