'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const categories = ['ALL', 'WEDDINGS', 'EVENTS', 'LIGHTING', 'SFX', 'DECOR', 'CONCERTS'];

const projects = [
  { id: 1, title: 'Royal Palace Wedding', category: 'WEDDINGS', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', height: 'h-[400px]' },
  { id: 2, title: 'Tech Summit 2026', category: 'EVENTS', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', height: 'h-[300px]' },
  { id: 3, title: 'Neon Nights Festival', category: 'CONCERTS', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', height: 'h-[500px]' },
  { id: 4, title: 'Corporate Gala Dinner', category: 'DECOR', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', height: 'h-[350px]' },
  { id: 5, title: 'Main Stage Lighting', category: 'LIGHTING', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', height: 'h-[450px]' },
  { id: 6, title: 'Pyrotechnic Finale', category: 'SFX', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', height: 'h-[300px]' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-4xl md:text-5xl uppercase"
          >
            OUR WORK.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 md:gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-white text-black' 
                    : 'bg-white/5 text-muted hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer w-full break-inside-avoid ${project.height}`}
              >
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.category}
                  </span>
                  <h3 className="text-white font-heading font-bold text-2xl mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {project.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    VIEW PROJECT
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
