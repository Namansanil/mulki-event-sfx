'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, X, ChevronLeft, ChevronRight, Play, Maximize2 } from 'lucide-react';

const categories = ['ALL', 'WEDDINGS', 'SFX', 'LIGHTING', 'CONCERTS', 'DECOR', 'CORPORATE'];

const projects = [
  { 
    id: 1, 
    title: 'Royal Palace Grand Sangeet', 
    category: 'WEDDINGS', 
    media: '/Photos-1-001/VID-20260809-WA0035.mp4', 
    thumbnail: '/Photos-1-001/IMG-20260809-WA0065.jpg',
    type: 'video',
    height: 'h-[440px]',
    desc: 'Grand stage production featuring synchronized cold fire pyro bursts and dynamic laser matrix lighting.'
  },
  { 
    id: 2, 
    title: 'Tech Leadership Summit 2026', 
    category: 'CORPORATE', 
    media: '/Photos-1-001/IMG-20260809-WA0040.jpg', 
    thumbnail: '/Photos-1-001/IMG-20260809-WA0040.jpg',
    type: 'image',
    height: 'h-[320px]',
    desc: 'Ultra-wide P2.6 LED screen backdrop and pristine line-array audio engineering for 1,500+ attendees.'
  },
  { 
    id: 3, 
    title: 'Neon Nights Arena Festival', 
    category: 'CONCERTS', 
    media: '/Photos-1-001/VID-20260809-WA0036.mp4', 
    thumbnail: '/Photos-1-001/IMG-20260809-WA0039.jpg',
    type: 'video',
    height: 'h-[500px]',
    desc: 'Heavy cryogenic CO₂ jet cannons, moving-head beams, and stadium audio setup for live EDM concert.'
  },
  { 
    id: 4, 
    title: 'VIP Gala Dinner & Awards', 
    category: 'DECOR', 
    media: '/Photos-1-001/IMG-20260809-WA0043.jpg', 
    thumbnail: '/Photos-1-001/IMG-20260809-WA0043.jpg',
    type: 'image',
    height: 'h-[360px]',
    desc: 'Lavish botanical floral architecture with warm ambient pinspot lighting for a private celebration.'
  },
  { 
    id: 5, 
    title: 'Mainstage Lighting Choreography', 
    category: 'LIGHTING', 
    media: '/Photos-1-001/VID-20260809-WA0037.mp4', 
    thumbnail: '/Photos-1-001/IMG-20260809-WA0041.jpg',
    type: 'video',
    height: 'h-[460px]',
    desc: 'DMX programmed moving head sweeps with dry-ice low fog carpet for a dreamy walk-in.'
  },
  { 
    id: 6, 
    title: 'Pyrotechnic Stadium Finale', 
    category: 'SFX', 
    media: '/Photos-1-001/IMG-20260809-WA0060.jpg', 
    thumbnail: '/Photos-1-001/IMG-20260809-WA0060.jpg',
    type: 'image',
    height: 'h-[320px]',
    desc: 'Cascading sparkular cold fireworks with zero heat burn, approved for luxury indoor ballrooms.'
  },
  { 
    id: 7, 
    title: 'Electric Sangeet Night Blast', 
    category: 'SFX', 
    media: '/Photos-1-001/VID-20260809-WA0044.mp4', 
    thumbnail: '/Photos-1-001/IMG-20260809-WA0028.jpg',
    type: 'video',
    height: 'h-[420px]',
    desc: 'Continuous cold spark waterfalls and streamer blasters firing on the drop.'
  },
  { 
    id: 8, 
    title: 'Heritage Ballroom Reception', 
    category: 'WEDDINGS', 
    media: '/Photos-1-001/IMG-20260809-WA0063.jpg', 
    thumbnail: '/Photos-1-001/IMG-20260809-WA0063.jpg',
    type: 'image',
    height: 'h-[380px]',
    desc: 'Golden ambient wash lighting, truss ceiling rigs, and fairy light star curtain backdrop.'
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProjectIndex === null) return;
      if (e.key === 'Escape') setSelectedProjectIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedProjectIndex((prev) => 
          prev !== null ? (prev + 1) % filteredProjects.length : 0
        );
      }
      if (e.key === 'ArrowLeft') {
        setSelectedProjectIndex((prev) => 
          prev !== null ? (prev - 1 + filteredProjects.length) % filteredProjects.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProjectIndex, filteredProjects.length]);

  const activeLightboxProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

  return (
    <section id="gallery" className="py-28 md:py-36 bg-background border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header and Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold tracking-[0.25em] uppercase mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED PORTFOLIO</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight"
            >
              OUR WORK.
            </motion.h2>
          </div>

          {/* Animated Category Pills with Framer Motion layoutId */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSelectedProjectIndex(null);
                  }}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-colors duration-200 ${
                    isActive ? 'text-black' : 'text-muted hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeGalleryPill"
                      className="absolute inset-0 bg-white rounded-full shadow-lg shadow-white/25"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Masonry Grid with Animated Layout Transitions */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                onClick={() => setSelectedProjectIndex(idx)}
                whileHover={{ y: -6 }}
                className={`relative group rounded-3xl overflow-hidden cursor-pointer w-full break-inside-avoid border border-white/10 bg-surface shadow-xl ${project.height}`}
              >
                {/* Media */}
                <Image 
                  src={project.thumbnail} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-115"
                  loading="lazy"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />
                
                {/* Top Badge & Zoom Trigger */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    {project.type === 'video' ? (
                      <Play className="w-3.5 h-3.5 fill-current text-white group-hover:text-black" />
                    ) : (
                      <Maximize2 className="w-3.5 h-3.5 text-white group-hover:text-black" />
                    )}
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
                  <h3 className="text-white font-heading font-bold text-xl sm:text-2xl mb-1 transform group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Lightbox Modal with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {activeLightboxProject && selectedProjectIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedProjectIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProjectIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Left Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProjectIndex((selectedProjectIndex - 1 + filteredProjects.length) % filteredProjects.length);
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProjectIndex((selectedProjectIndex + 1) % filteredProjects.length);
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight size={28} />
            </button>

            {/* Modal Content Window */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-3xl overflow-hidden bg-surface border border-white/20 shadow-2xl flex flex-col"
            >
              {/* Media Player / Viewer */}
              <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
                {activeLightboxProject.type === 'video' ? (
                  <video
                    src={activeLightboxProject.media}
                    autoPlay
                    controls
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={activeLightboxProject.media}
                    alt={activeLightboxProject.title}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              {/* Detail Footer */}
              <div className="p-6 bg-surface border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-1">
                    {activeLightboxProject.category} • PROJECT #{activeLightboxProject.id}
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                    {activeLightboxProject.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm mt-1">
                    {activeLightboxProject.desc}
                  </p>
                </div>

                <a
                  href="https://wa.me/918722524049?text=Hi%20Mulki%20Event%20SFX!%20I'm%20interested%20in%20a%20setup%20like%20this."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-6 py-3 rounded-full bg-gradient-mulki text-white text-xs font-bold tracking-widest uppercase text-center shadow-lg shadow-primary/20"
                >
                  INQUIRE FOR THIS SETUP
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
