
import React, { useState } from 'react';

const DesignsSection = () => {
  const [activeImage, setActiveImage] = useState<null | string>(null);
  
  const designs = [
    {
      id: 1,
      title: "Brand Identity",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1470&auto=format&fit=crop",
      category: "Branding"
    },
    {
      id: 2,
      title: "Mobile App",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop",
      category: "UI/UX"
    },
    {
      id: 3,
      title: "Campaign",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1470&auto=format&fit=crop",
      category: "Marketing"
    },
    {
      id: 4,
      title: "Packaging",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1470&auto=format&fit=crop",
      category: "Product"
    }
  ];

  return (
    <section id="designs" className="py-24 bg-white border-t border-gray-100">
      <div className="container-section">
        <h2 className="section-title text-center">Design Work</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {designs.map((design) => (
            <div 
              key={design.id}
              className="cursor-pointer card-hover"
              onClick={() => setActiveImage(design.image)}
            >
              <div className="aspect-square overflow-hidden bg-gray-50 mb-3">
                <img 
                  src={design.image} 
                  alt={design.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-charcoal text-sm font-normal">{design.title}</h3>
              <span className="text-charcoal/40 text-xs">{design.category}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-white/95 z-50 flex items-center justify-center p-6"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl mx-auto">
            <button 
              className="absolute -top-10 right-0 text-charcoal/70 hover:text-charcoal"
              onClick={() => setActiveImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={activeImage} 
              alt="Design Work" 
              className="max-h-[80vh] w-auto mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DesignsSection;
