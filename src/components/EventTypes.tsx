'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const events = [
  { name: 'WEDDINGS', image: '/Photos-1-001/IMG-20260809-WA0060.jpg' },
  { name: 'RECEPTIONS', image: '/Photos-1-001/IMG-20260809-WA0063.jpg' },
  { name: 'SANGEET', image: '/Photos-1-001/IMG-20260809-WA0065.jpg' },
  { name: 'CORPORATE EVENTS', image: '/Photos-1-001/IMG-20260809-WA0012.jpg' },
  { name: 'LIVE CONCERTS', image: '/Photos-1-001/IMG-20260809-WA0013.jpg' },
  { name: 'PRIVATE PARTIES', image: '/Photos-1-001/IMG-20260809-WA0014.jpg' }
];

export default function EventTypes() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-5xl uppercase text-center mb-16"
        >
          WHAT'S THE OCCASION?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image 
                src={event.image} 
                alt={event.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="font-heading font-bold text-xl tracking-wider uppercase text-white group-hover:translate-y-[-10px] transition-transform duration-500">
                  {event.name}
                </h3>
                <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-2 transition-all duration-500">
                  <span className="text-xs font-bold tracking-widest text-primary flex items-center gap-2">
                    VIEW DETAILS
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
