'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Animated Light Background */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(-45deg, var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-blue))',
          backgroundSize: '400% 400%',
          filter: 'blur(100px)'
        }}
      />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl uppercase leading-[1.1] mb-12"
        >
          LET'S MAKE <br/>
          YOUR NEXT EVENT <br/>
          <span className="font-serif italic capitalize text-gradient">Extraordinary.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link 
            href="https://wa.me/918722524049?text=Hi%20Mulki%20Event%20SFX!%20I'm%20interested%20in%20planning%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold tracking-widest text-sm uppercase overflow-hidden rounded-full"
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
              START PLANNING
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-mulki opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
