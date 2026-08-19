'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const events = [
  { name: 'ROYAL WEDDINGS', tag: 'Grand Entry & Pyro', media: '/Photos-1-001/IMG-20260809-WA0060.jpg' },
  { name: 'RECEPTIONS & SANGEET', tag: 'Moving Heads & Fog', media: '/Photos-1-001/IMG-20260809-WA0063.jpg' },
  { name: 'LIVE CONCERTS & FESTIVALS', tag: 'CO₂ Jets & Laser Matrix', media: '/Photos-1-001/IMG-20260809-WA0039.jpg' },
  { name: 'CORPORATE SUMMITS & GALAS', tag: 'LED Walls & Sound', media: '/Photos-1-001/IMG-20260809-WA0040.jpg' },
  { name: 'VIP CELEBRATIONS & DJ NIGHTS', tag: 'Cold Fire & Confetti', media: '/Photos-1-001/IMG-20260809-WA0065.jpg' },
  { name: 'SPORTS & BRAND LAUNCHES', tag: 'Pyrotechnic Finale', media: '/Photos-1-001/IMG-20260809-WA0014.jpg' }
];

export default function EventTypes() {
  return (
    <section className="py-28 md:py-36 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-bold tracking-[0.25em] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>VERSATILE PRODUCTION</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight mb-4"
          >
            WHAT'S THE OCCASION?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted text-sm sm:text-base max-w-xl mx-auto"
          >
            Whether it's a 200-guest intimate destination wedding or a 10,000-seat arena festival, our crew delivers spotless execution.
          </motion.p>
        </div>

        {/* Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative h-72 sm:h-80 md:h-96 rounded-3xl overflow-hidden cursor-pointer border border-white/10 shadow-xl bg-surface"
            >
              {/* Media */}
              <Image 
                src={event.media} 
                alt={event.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-115"
                loading="lazy"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              
              {/* Top Tag & Arrow */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                  {event.tag}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:text-black" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
                <h3 className="font-heading font-black text-xl sm:text-2xl tracking-wide uppercase text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-mulki transition-all duration-300">
                  {event.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
