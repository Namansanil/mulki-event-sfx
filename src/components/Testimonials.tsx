'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Photos-1-001/IMG-20260809-WA0014.jpg" 
          alt="Event Crowd" 
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <p className="font-serif italic text-3xl md:text-5xl lg:text-6xl leading-tight mb-12 text-white/90">
            "They didn't just transform the venue. They transformed the entire experience. Absolutely breathtaking production."
          </p>
          
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="font-heading font-bold tracking-widest text-lg uppercase">
              Sarah & James
            </h4>
            <div className="flex items-center gap-4 text-muted text-sm font-bold tracking-widest uppercase">
              <span>Wedding Reception</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span>2025</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
