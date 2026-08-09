'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Dark overlay */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/Photos-1-001/VID-20260809-WA0031.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Subtle Animated Glows */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] z-0 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] z-0 pointer-events-none"
      />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-heading text-primary font-bold tracking-[0.3em] text-xs md:text-sm mb-6 block uppercase">
            LIGHTS. SOUND. MOMENTS.
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 uppercase max-w-5xl"
        >
          WE CREATE <br/>
          UNFORGETTABLE <br/>
          <span className="text-gradient lowercase capitalize font-serif italic text-6xl md:text-8xl lg:text-9xl tracking-normal inline-block mt-2">
            Moments.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted text-base md:text-xl max-w-2xl mb-12 font-light leading-relaxed"
        >
          Premium SFX, lighting, sound & decor for weddings, corporate events, concerts & celebrations.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link 
            href="#gallery"
            className="group relative px-8 py-4 bg-white text-black font-bold tracking-widest text-xs uppercase overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              EXPLORE OUR WORK
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-mulki opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </Link>

          <Link 
            href="https://wa.me/918722524049?text=Hi%20Mulki%20Event%20SFX!%20I'm%20interested%20in%20planning%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 border border-white/20 hover:border-white/60 text-white font-bold tracking-widest text-xs uppercase transition-colors"
          >
            <span className="flex items-center gap-2">
              LET'S PLAN YOUR EVENT
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest text-muted uppercase font-bold">SCROLL</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
