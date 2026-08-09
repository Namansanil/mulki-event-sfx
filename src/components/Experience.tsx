'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const experiences = [
  {
    id: 'light',
    title: 'LIGHT',
    description: 'We design atmosphere through light.',
    image: '/Photos-1-001/IMG-20260809-WA0015.jpg',
    color: 'bg-primary/20',
  },
  {
    id: 'sound',
    title: 'SOUND',
    description: 'Every moment deserves the right sound.',
    image: '/Photos-1-001/IMG-20260809-WA0019.jpg',
    color: 'bg-accent/20',
  },
  {
    id: 'space',
    title: 'SPACE',
    description: 'We transform venues into experiences.',
    image: '/Photos-1-001/IMG-20260809-WA0023.jpg',
    color: 'bg-secondary/20',
  }
];

export default function Experience() {
  const [activeId, setActiveId] = useState('light');
  
  const activeExp = experiences.find(e => e.id === activeId) || experiences[0];

  return (
    <section id="experience" className="relative h-screen min-h-[700px] flex items-center bg-black overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeExp.image}
              alt={activeExp.title}
              fill
              className="object-cover opacity-50"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className={`absolute inset-0 ${activeExp.color} blur-[120px] mix-blend-screen transition-colors duration-1000 z-10`} />
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Details */}
        <div className="md:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white/70 text-lg md:text-xl font-light italic mb-4">
                "{activeExp.description}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Menu */}
        <div className="md:w-1/2 flex flex-col items-end gap-6 text-right w-full">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onMouseEnter={() => setActiveId(exp.id)}
              onClick={() => setActiveId(exp.id)}
              className={`font-heading font-bold text-5xl md:text-7xl lg:text-8xl transition-all duration-500 uppercase ${
                activeId === exp.id 
                  ? 'text-white translate-x-0' 
                  : 'text-white/20 hover:text-white/50 translate-x-4'
              }`}
            >
              {exp.title}.
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
