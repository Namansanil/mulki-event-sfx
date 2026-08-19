'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, SunMedium, Volume2, Maximize, Flame, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    id: 'sfx',
    title: 'SFX',
    tagline: 'Adrenaline & Excitement',
    description: 'Electrifying cold spark fountains, zero-heat pyro bursts, cryogenic CO₂ blasts, and hypnotic low-fog clouds that command the room.',
    media: '/Photos-1-001/VID-20260809-WA0031.mp4',
    accentColor: '#FF7A00',
    icon: Flame,
    stats: '100% Certified Safe & Indoor-Compliant',
    aura: 'bg-primary/25'
  },
  {
    id: 'light',
    title: 'LIGHT',
    tagline: 'Atmosphere Through Illumination',
    description: 'We carve darkness with surgical beam moving heads, ambient architectural wash, laser geometries, and dynamic color synchrony.',
    media: '/Photos-1-001/VID-20260809-WA0032.mp4',
    accentColor: '#8B3DFF',
    icon: SunMedium,
    stats: 'DMX-Controlled Robotic Beam Rigs',
    aura: 'bg-accent/25'
  },
  {
    id: 'sound',
    title: 'SOUND',
    tagline: 'Feel Every Decibel',
    description: 'Concert-grade line arrays tuned to the acoustic soul of the venue, ensuring whisper clarity for speeches and ground-shaking bass for the dance floor.',
    media: '/Photos-1-001/VID-20260809-WA0033.mp4',
    accentColor: '#246BFF',
    icon: Volume2,
    stats: 'Pristine 130dB+ High-Fidelity Audio',
    aura: 'bg-blue/25'
  },
  {
    id: 'space',
    title: 'SPACE',
    tagline: 'Complete Scenographic Immersion',
    description: 'Transforming empty auditoriums, beach fronts, and ballrooms into architectural wonderlands with custom trusses, LED walls, and lavish decor.',
    media: '/Photos-1-001/VID-20260809-WA0034.mp4',
    accentColor: '#FF2B9A',
    icon: Maximize,
    stats: 'Custom Engineered Modular Rigging',
    aura: 'bg-secondary/25'
  }
];

export default function Experience() {
  const [activeId, setActiveId] = useState('sfx');
  const activeExp = experiences.find(e => e.id === activeId) || experiences[0];

  return (
    <section id="experience" className="relative min-h-[800px] lg:h-screen flex items-center bg-black overflow-hidden py-20 lg:py-0">
      {/* Background Video Crossfade with Framer Motion AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {activeExp.media.endsWith('.mp4') ? (
              <video
                src={activeExp.media}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-45"
              />
            ) : (
              <Image
                src={activeExp.media}
                alt={activeExp.title}
                fill
                className="object-cover opacity-45"
                priority
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Ambient Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />

        {/* Animated Backdrop Glow */}
        <div className={`absolute -top-1/4 -right-1/4 w-[700px] h-[700px] ${activeExp.aura} rounded-full blur-[160px] transition-colors duration-1000 z-10 pointer-events-none`} />
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Detail Panel */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-bold tracking-[0.25em] uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>THE 4 PILLARS OF PRODUCTION</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <span className="text-xs font-bold tracking-[0.3em] uppercase mb-2" style={{ color: activeExp.accentColor }}>
                {activeExp.tagline}
              </span>

              <h2 className="font-heading font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-6 leading-none">
                {activeExp.title}
                <span className="text-white/30 font-light">.</span>
              </h2>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed font-light mb-8 max-w-xl">
                {activeExp.description}
              </p>

              {/* Stat highlight badge */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md max-w-md">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${activeExp.accentColor}25` }}
                >
                  <activeExp.icon className="w-5 h-5" style={{ color: activeExp.accentColor }} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest text-muted uppercase">BENCHMARK</span>
                  <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                    {activeExp.stats}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Interactive Mode Switcher with Framer Motion layoutId */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {experiences.map((exp, idx) => {
            const isActive = activeId === exp.id;
            const Icon = exp.icon;

            return (
              <motion.button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                onMouseEnter={() => setActiveId(exp.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative group text-left p-6 rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isActive 
                    ? 'border-white/40 bg-white/[0.08] shadow-2xl shadow-black/80' 
                    : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'
                }`}
              >
                {/* Active Indicator Background Glow with Framer Motion layoutId */}
                {isActive && (
                  <motion.div
                    layoutId="activeExpPill"
                    className="absolute inset-0 bg-gradient-to-r from-white/[0.08] to-transparent pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-xs font-bold tracking-widest text-white/40">
                      0{idx + 1}
                    </span>
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? `${exp.accentColor}30` : 'rgba(255,255,255,0.05)',
                        color: isActive ? exp.accentColor : '#ffffff',
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`font-heading font-black text-2xl sm:text-3xl tracking-wider uppercase transition-colors ${
                        isActive ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                      }`}>
                        {exp.title}
                      </h3>
                      <p className="text-xs text-muted font-medium">
                        {exp.tagline}
                      </p>
                    </div>
                  </div>

                  <ArrowRight 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? 'text-white translate-x-0' : 'text-white/20 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                    }`} 
                    style={{ color: isActive ? exp.accentColor : undefined }}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
