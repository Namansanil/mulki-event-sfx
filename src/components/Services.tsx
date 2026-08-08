'use client';

import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'SFX & SPECIAL EFFECTS',
    items: ['Cold Fire', 'CO₂', 'Low Fog', 'Fireworks', 'Confetti', 'Spark Effects'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    num: '02',
    title: 'LIGHTING',
    items: ['Stage Lighting', 'Architectural Lighting', 'Moving Heads', 'Ambient Lighting', 'Laser & Effects'],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    num: '03',
    title: 'SOUND',
    items: ['Professional PA Systems', 'DJ Setup', 'Live Sound', 'Microphones', 'Monitoring'],
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    num: '04',
    title: 'STAGE & LED',
    items: ['Custom Stage Design', 'LED Walls', 'Screens', 'Truss', 'Stage Structures'],
    image: 'https://images.unsplash.com/photo-1543781255-a0d33e506644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    num: '05',
    title: 'DECOR',
    items: ['Wedding Decor', 'Floral Decor', 'Entrance Decor', 'Table Styling', 'Theme Design'],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    num: '06',
    title: 'ENTERTAINMENT',
    items: ['DJs', 'Live Bands', 'Artists', 'Performers', 'Special Acts'],
    image: 'https://images.unsplash.com/photo-1470229722913-7c092db62220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0A0A0D] border-y border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl uppercase tracking-wider"
          >
            EVERYTHING YOUR <br className="hidden md:block"/> EVENT NEEDS.
          </motion.h2>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div 
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group relative border-t border-white/10 py-12 hover:bg-white/[0.02] transition-colors"
            >
              {/* Background Image Reveal on Hover (Desktop only) */}
              <div 
                className="hidden lg:block absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2">
                  <span className="font-heading text-4xl font-light text-white/30 group-hover:text-primary transition-colors">
                    {service.num}
                  </span>
                </div>
                
                <div className="md:col-span-9 lg:col-span-5">
                  <h3 className="font-heading font-bold text-2xl md:text-4xl tracking-wider mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-300">
                    {service.title}
                  </h3>
                </div>

                <div className="md:col-span-12 lg:col-span-5">
                  <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                        <span className="text-muted text-sm md:text-base group-hover:text-white/90 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10 w-full" />
        </div>
      </div>
    </section>
  );
}
