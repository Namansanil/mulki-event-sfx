'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

const serviceOptions = [
  'Wedding SFX & Cold Pyro',
  'Concert Sound & Stage Light',
  'LED Video Wall & Truss',
  'Complete Event Production'
];

export default function CTA() {
  const [selectedService, setSelectedService] = useState('Wedding SFX & Cold Pyro');

  const encodedMessage = encodeURIComponent(
    `Hi Mulki Event SFX! I'm planning an upcoming event and would like to get a quote for: ${selectedService}.`
  );

  return (
    <section id="contact" className="relative py-32 md:py-44 bg-black overflow-hidden border-t border-white/10">
      {/* Animated Light Energy Mesh */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.45, 0.25]
        }}
        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #FF7A00, #FF2B9A, #8B3DFF, transparent 70%)',
          backgroundSize: '200% 200%',
          filter: 'blur(120px)'
        }}
      />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-8 shadow-xl"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold tracking-widest text-white uppercase">
            NOW BOOKING FOR 2026 / 2027 DATES
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[1.05] mb-8 tracking-tight"
        >
          LET'S MAKE YOUR <br/>
          NEXT EVENT <br/>
          <span className="font-serif italic capitalize text-gradient">Unforgettable.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-muted text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light"
        >
          Select what you need below and connect instantly with our creative technical directors via WhatsApp or direct call.
        </motion.p>

        {/* Interactive Service Selector Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2.5 mb-10"
        >
          {serviceOptions.map((opt) => {
            const isSelected = selectedService === opt;
            return (
              <button
                key={opt}
                onClick={() => setSelectedService(opt)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-white text-black shadow-lg shadow-white/20 scale-105'
                    : 'bg-white/5 text-muted hover:text-white border border-white/10 hover:border-white/30'
                }`}
              >
                {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-black" />}
                {opt}
              </button>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a 
            href={`https://wa.me/918722524049?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-mulki text-white font-bold tracking-widest text-xs uppercase shadow-2xl shadow-primary/30 w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>START ON WHATSAPP</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </motion.a>

          <motion.a 
            href="tel:+918722524049"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold tracking-widest text-xs uppercase backdrop-blur-md transition-all w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>+91 87225 24049</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
