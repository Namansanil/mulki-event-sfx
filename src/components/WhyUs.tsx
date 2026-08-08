'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Gem, CheckCircle2, Sparkles } from 'lucide-react';

const pillars = [
  {
    title: 'CREATIVE CONCEPTS',
    description: 'Bespoke event designs that break the mold and capture your unique vision.',
    icon: Lightbulb,
    color: 'text-primary'
  },
  {
    title: 'PREMIUM QUALITY',
    description: 'Top-tier equipment, materials, and production value for every element.',
    icon: Gem,
    color: 'text-secondary'
  },
  {
    title: 'FLAWLESS EXECUTION',
    description: 'Meticulous planning and technical precision on the day of your event.',
    icon: CheckCircle2,
    color: 'text-blue'
  },
  {
    title: 'MEMORABLE MOMENTS',
    description: 'Creating emotional resonance that lasts long after the final light fades.',
    icon: Sparkles,
    color: 'text-accent'
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-background border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl md:text-5xl uppercase"
          >
            WE DON'T JUST PLAN EVENTS. <br />
            <span className="text-muted">WE CREATE EXPERIENCES.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-mulki blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
              
              <div className="mb-6 relative z-10">
                <pillar.icon className={`w-8 h-8 ${pillar.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`} strokeWidth={1.5} />
              </div>
              
              <h3 className="font-heading font-bold text-xl tracking-wider mb-4 relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-mulki transition-all duration-300">
                {pillar.title}
              </h3>
              
              <p className="text-muted text-sm leading-relaxed relative z-10 group-hover:text-white/80 transition-colors duration-500">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
