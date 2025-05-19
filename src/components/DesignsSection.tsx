
import React, { useState } from 'react';

const DesignsSection = () => {
  const [activeImage, setActiveImage] = useState<null | string>(null);
  
  const designs = [
    {
      id: 1,
      title: "Brand Identity - Coffee Shop",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1470&auto=format&fit=crop",
      category: "Branding"
    },
    {
      id: 2,
      title: "Mobile App Design",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop",
      category: "UI/UX"
    },
    {
      id: 3,
      title: "Social Media Campaign",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1470&auto=format&fit=crop",
      category: "Marketing"
    },
    {
      id: 4,
      title: "Product Packaging",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1470&auto=format&fit=crop",
      category: "Packaging"
    },
    {
      id: 5,
      title: "Event Poster",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1470&auto=format&fit=crop",
      category: "Print"
    },
    {
      id: 6,
      title: "Website Redesign",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop",
      category: "Web Design"
    }
  ];

  return (
    <section id="designs" className="py-20 bg-gray-50">
      <div className="container-section">
        <h2 className="section-title">Graphic Designs</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {designs.map((design) => (
            <div 
              key={design.id}
              className="relative overflow-hidden rounded-lg group cursor-pointer card-hover"
              onClick={() => setActiveImage(design.image)}
            >
              <img 
                src={design.image} 
                alt={design.title} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-amber text-sm font-medium">{design.category}</span>
                <h3 className="text-white text-lg font-bold">{design.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl mx-auto">
            <button 
              className="absolute -top-10 right-0 text-white"
              onClick={() => setActiveImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
