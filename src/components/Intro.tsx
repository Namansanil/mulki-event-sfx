'use client';

import { motion } from 'framer-motion';
import { Heart, Briefcase, Music, GlassWater } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'WEDDINGS',
    description: 'Dream weddings crafted with perfection and elegance.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-primary/80 to-transparent'
  },
  {
    title: 'CORPORATE EVENTS',
    description: 'Professional events that inspire, connect, and engage.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-blue/80 to-transparent'
  },
  {
    title: 'LIVE CONCERTS',
    description: 'High-energy shows with powerful sound and lighting production.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-accent/80 to-transparent'
  },
  {
    title: 'PRIVATE CELEBRATIONS',
    description: 'Make your special moments even more spectacular.',
    icon: GlassWater,
    image: 'https://images.unsplash.com/photo-1530103862676-de8892408c69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-secondary/80 to-transparent'
  }
];

export default function Intro() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 uppercase"
          >
            YOU DREAM IT. <br/>
            <span className="text-muted">WE CREATE IT.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed max-w-2xl"
          >
            From intimate celebrations to large-scale productions, we combine creativity, technology and flawless execution to create experiences people remember.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="#services" className="block group relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-colors">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={category.image} 
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-background/40 z-10 transition-opacity group-hover:opacity-20" />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} z-10 opacity-60 group-hover:opacity-90 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />

                {/* Content */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-500">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading font-bold tracking-widest text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                    {category.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                    EXPLORE 
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
