'use client';

import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Lightbulb, ShieldCheck, Zap, Sparkles, Award } from 'lucide-react';

const pillars = [
  {
    title: 'CREATIVE CONCEPTS',
    description: 'Custom choreographed SFX cues and lighting sequences tailored exclusively to the music and tempo of your event.',
    icon: Lightbulb,
    color: '#FF7A00',
    stat: '100% Custom'
  },
  {
    title: 'TOUR-GRADE GEAR',
    description: 'We only deploy industry-benchmark hardware: certified sparkular machines, cryogenic jets, and world-class line arrays.',
    icon: Award,
    color: '#FF2B9A',
    stat: 'Zero Failure'
  },
  {
    title: 'FLAWLESS EXECUTION',
    description: 'Meticulous on-site rehearsals, safety officers, and redundant backup systems ensure your big moment goes off without a hitch.',
    icon: Zap,
    color: '#246BFF',
    stat: 'Redundant Backups'
  },
  {
    title: 'SAFETY FIRST PROTOCOL',
    description: 'All SFX, cold pyro, and low-fog solutions are 100% non-toxic, odorless, smokeless, and compliant with indoor venue regulations.',
    icon: ShieldCheck,
    color: '#8B3DFF',
    stat: 'Indoor Certified'
  }
];

function SpotlightCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl bg-surface border border-white/10 p-8 overflow-hidden transition-all duration-300"
    >
      {/* Mouse Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              ${pillar.color}25,
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        {/* Top Icon & Stat */}
        <div className="flex items-center justify-between mb-8">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundColor: `${pillar.color}15`,
              borderColor: `${pillar.color}40`,
            }}
          >
            <Icon className="w-7 h-7" style={{ color: pillar.color }} strokeWidth={1.75} />
          </div>

          <span 
            className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border bg-black/40 backdrop-blur-md"
            style={{
              borderColor: `${pillar.color}40`,
              color: pillar.color,
            }}
          >
            {pillar.stat}
          </span>
        </div>

        <h3 className="font-heading font-black text-xl sm:text-2xl tracking-wider text-white uppercase mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
          {pillar.title}
        </h3>
        
        <p className="text-muted text-sm leading-relaxed group-hover:text-white/80 transition-colors">
          {pillar.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 md:py-36 bg-background relative overflow-hidden">
      {/* Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[80px] transform-gpu pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-[0.25em] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE MULKI STANDARD</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight mb-4"
          >
            WE DON'T JUST PLAN EVENTS. <br />
            <span className="text-gradient">WE ENGINEER SENSATIONS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-sm sm:text-base max-w-xl mx-auto"
          >
            Trusted by top event planners, wedding architects, and festival organizers for technical mastery, safety, and breathtaking show design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <SpotlightCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
