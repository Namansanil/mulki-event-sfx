'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, MoveHorizontal, Sliders, Check } from 'lucide-react';

export default function VenueTransformation() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const presets = [
    { label: 'BEFORE', value: 100, desc: 'Bare Venue' },
    { label: '50 / 50 SPLIT', value: 50, desc: 'Interactive Blend' },
    { label: 'AFTER', value: 0, desc: 'Full SFX Production' },
  ];

  return (
    <section id="transformation" className="py-28 md:py-36 bg-background overflow-hidden relative border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold tracking-[0.25em] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>VENUE TRANSFORMATION</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight mb-5"
          >
            BEFORE ANYTHING, <br />
            <span className="text-gradient">COMES OUR TOUCH.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-muted text-sm sm:text-base leading-relaxed"
          >
            Slide back and forth or choose a preset below to see how raw empty grounds turn into spellbinding, stadium-level event spectacles.
          </motion.p>

          {/* Quick Preset Buttons with Framer Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 mt-8 flex-wrap"
          >
            {presets.map((preset) => {
              const isActive = sliderPosition === preset.value;
              return (
                <button
                  key={preset.label}
                  onClick={() => setSliderPosition(preset.value)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                    isActive 
                      ? 'bg-white text-black shadow-lg shadow-white/20 scale-105' 
                      : 'bg-white/5 text-muted hover:text-white border border-white/10 hover:border-white/30'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isActive && <Check className="w-3.5 h-3.5" />}
                    {preset.label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Interactive Comparison Stage */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto h-[450px] sm:h-[550px] lg:h-[650px] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/15 shadow-2xl bg-black"
          ref={containerRef}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onMouseUp={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          {/* AFTER Image (Transformed Production - Full Background) */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="/Photos-1-001/IMG-20260809-WA0012.jpg" 
              alt="Transformed Event Venue by Mulki Event SFX" 
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              draggable={false}
              loading="lazy"
            />
            <div className="absolute top-6 right-6 bg-black/75 backdrop-blur-xl px-4 py-2 rounded-full border border-primary/40 shadow-xl flex items-center gap-2 z-10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-white uppercase">AFTER: SFX & LIGHTING</span>
            </div>
            
            {/* Bottom Tag */}
            <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 text-xs text-white/80 hidden sm:block">
              ✨ Full Line-Array Sound • Truss Architecture • Cold Fire Matrix
            </div>
          </div>

          {/* BEFORE Image (Raw Venue - Clipped Overlay) */}
          <div 
            className="absolute inset-0 h-full z-10 transition-[clip-path] duration-75 ease-out pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image 
              src="/Photos-1-001/IMG-20260809-WA0013.jpg" 
              alt="Raw Empty Venue Before SFX" 
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              draggable={false}
              loading="lazy"
            />
            <div className="absolute top-6 left-6 bg-black/75 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 shadow-xl flex items-center gap-2 z-10 pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-xs font-bold tracking-widest text-white/90 uppercase">BEFORE: EMPTY VENUE</span>
            </div>

            <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 text-xs text-white/80 hidden sm:block pointer-events-auto">
              📍 Blank Space Before Staging
            </div>
          </div>

          {/* Slider Line & Interactive Knob */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            style={{ left: `calc(${sliderPosition}% - 2px)` }}
          >
            <motion.div 
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-black text-black border-2 border-primary"
            >
              <MoveHorizontal className="w-5 h-5 text-black animate-pulse" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
