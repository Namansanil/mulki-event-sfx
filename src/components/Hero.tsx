'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowRight, Flame, Volume2, Award } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const titleWordsLine1 = ["WE", "CREATE"];
  const titleWordsLine2 = ["UNFORGETTABLE"];

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-36 sm:pt-40 md:pt-48 pb-20"
    >
      {/* Background Video with Parallax & Dark Overlay */}
      <motion.div 
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 z-0 origin-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black z-10" />
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/Photos-1-001/VID-20260809-WA0031.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dynamic Animated Glow Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.65, 0.35],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[140px] z-0 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.55, 0.25],
          x: [0, -40, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-32 w-[650px] h-[650px] bg-accent/25 rounded-full blur-[150px] z-0 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[160px] z-0 pointer-events-none"
      />

      {/* Content Container */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative z-20 mx-auto px-6 md:px-12 text-center flex flex-col items-center max-w-6xl"
      >
        {/* Floating Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-8 shadow-xl shadow-black/50"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="font-heading text-xs font-bold tracking-[0.25em] text-white uppercase">
            LIGHTS <span className="text-primary">•</span> SOUND <span className="text-secondary">•</span> SFX <span className="text-blue">•</span> DECOR
          </span>
        </motion.div>

        {/* Animated Staggered Headline */}
        <div className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 uppercase tracking-tight">
          <div className="flex justify-center gap-3 md:gap-5 flex-wrap">
            {titleWordsLine1.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <div className="flex justify-center flex-wrap my-1">
            {titleWordsLine2.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 50, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.35 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-white"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 inline-block"
          >
            <span className="text-gradient font-serif italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl capitalize tracking-normal drop-shadow-2xl">
              Experiences.
            </span>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted text-base sm:text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed px-4"
        >
          Elevating weddings, corporate summits, arena concerts & grand celebrations with cutting-edge pyrotechnics, atmospheric SFX, and immersive audiovisual engineering.
        </motion.p>

        {/* CTA Buttons with Framer Motion Interactions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto px-4"
        >
          {/* Primary Action */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto"
          >
            <a 
              href="https://wa.me/918722524049?text=Hi%20Mulki%20Event%20SFX!%20I'm%20interested%20in%20planning%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-8 py-4 rounded-full bg-gradient-mulki text-white font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 w-full sm:w-auto"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="relative z-10">BOOK YOUR EVENT</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              {/* Shimmer overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
            </a>
          </motion.div>

          {/* Secondary Action */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto"
          >
            <Link 
              href="#gallery"
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold tracking-widest text-xs uppercase transition-all backdrop-blur-md flex items-center justify-center gap-2 w-full sm:w-auto text-center"
            >
              <span>EXPLORE SHOWCASE</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Live Feature Badges Carousel / Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <Flame className="w-4 h-4 text-primary shrink-0" />
            <span className="text-xs font-semibold text-white/80 tracking-wider uppercase">Cold Fire & Pyro</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <Volume2 className="w-4 h-4 text-accent shrink-0" />
            <span className="text-xs font-semibold text-white/80 tracking-wider uppercase">Concert Sound</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <Sparkles className="w-4 h-4 text-secondary shrink-0" />
            <span className="text-xs font-semibold text-white/80 tracking-wider uppercase">Laser & Fog</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <Award className="w-4 h-4 text-blue shrink-0" />
            <span className="text-xs font-semibold text-white/80 tracking-wider uppercase">250+ Events</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.3em] text-muted uppercase font-bold">DISCOVER</span>
        <div className="w-5 h-9 rounded-full border border-white/30 p-1 flex justify-center">
          <motion.div 
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#FF7A00]"
          />
        </div>
      </motion.div>
    </section>
  );
}
