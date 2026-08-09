'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VenueTransformation() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    let clientX = 0;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }
    
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider mb-6"
          >
            BEFORE ANYTHING, <br />
            <span className="text-gradient">COMES OUR TOUCH.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto"
          >
            Drag the slider to see how we transform an empty venue into an unforgettable experience.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/10"
          ref={containerRef}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="/Photos-1-001/IMG-20260809-WA0012.jpg" 
              alt="Transformed Venue" 
              fill
              className="object-cover"
              draggable={false}
              priority
            />
            <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 z-10">
              <span className="text-xs font-bold tracking-widest text-white">AFTER</span>
            </div>
          </div>

          {/* Before Image (Foreground/Clipped) */}
          <div 
            className="absolute inset-0 h-full z-10"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image 
              src="/Photos-1-001/IMG-20260809-WA0013.jpg" 
              alt="Empty Venue" 
              fill
              className="object-cover"
              draggable={false}
              priority
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 z-10">
              <span className="text-xs font-bold tracking-widest text-white">BEFORE</span>
            </div>
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
            style={{ left: `calc(${sliderPosition}% - 2px)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg shadow-black/50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l6-6-6-6" />
                <path d="M9 18l-6-6 6-6" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
