'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Heart, Briefcase, Music, Sparkles, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 'weddings',
    title: 'WEDDINGS',
    subtitle: 'Royal & Dreamy',
    description: 'Dream weddings crafted with cinematic low-fog entry, cold spark pyro, and bespoke romantic lighting.',
    icon: Heart,
    media: '/Photos-1-001/IMG-20260809-WA0063.jpg',
    accentColor: '#FF7A00',
    tag: 'GRAND PRODUCTION',
    glowGradient: 'from-primary/70 via-primary/30 to-transparent'
  },
  {
    id: 'corporate',
    title: 'CORPORATE EVENTS',
    subtitle: 'Summits & Galas',
    description: 'High-impact corporate conferences, product launches, and gala dinners with precision AV systems.',
    icon: Briefcase,
    media: '/Photos-1-001/IMG-20260809-WA0019.jpg',
    accentColor: '#246BFF',
    tag: 'PRECISION AV',
    glowGradient: 'from-blue/70 via-blue/30 to-transparent'
  },
  {
    id: 'concerts',
    title: 'LIVE CONCERTS',
    subtitle: 'Arenas & Festivals',
    description: 'High-energy live music stages with moving-head beams, laser rigs, CO₂ jets, and stadium sound power.',
    icon: Music,
    media: '/Photos-1-001/IMG-20260809-WA0014.jpg',
    accentColor: '#8B3DFF',
    tag: 'ARENA POWER',
    glowGradient: 'from-accent/70 via-accent/30 to-transparent'
  },
  {
    id: 'celebrations',
    title: 'PRIVATE PARTIES',
    subtitle: 'Sangeet & Milestones',
    description: 'Electrifying private bashes, sangeet nights, and VIP milestones transformed with vibrant atmospheric SFX.',
    icon: Sparkles,
    media: '/Photos-1-001/IMG-20260809-WA0028.jpg',
    accentColor: '#FF2B9A',
    tag: 'IMMERSIVE VIBES',
    glowGradient: 'from-secondary/70 via-secondary/30 to-transparent'
  }
];

// 3D Tilt Card Component
function TiltCard({ category, index }: { category: typeof categories[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        className="group relative h-[480px] lg:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-surface shadow-2xl transition-all duration-300"
      >
        {/* Background Media */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={category.media} 
            alt={category.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-115 opacity-80"
            loading="lazy"
          />
        </div>

        {/* Dynamic Multi-layered Overlays */}
        <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-500" />
        <div className={`absolute inset-0 bg-gradient-to-t ${category.glowGradient} z-10 opacity-30 group-hover:opacity-85 transition-opacity duration-700`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

        {/* Card Header Content (Top) */}
        <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between" style={{ transform: 'translateZ(30px)' }}>
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold tracking-[0.2em] text-white/90 uppercase">
            {category.tag}
          </span>
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        </div>

        {/* Card Body Content (Bottom) */}
        <div className="absolute inset-0 z-20 p-7 flex flex-col justify-end" style={{ transform: 'translateZ(40px)' }}>
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 group-hover:border-white/50 group-hover:scale-110 transition-all duration-500 shadow-xl">
            <category.icon className="w-5 h-5 text-white" style={{ color: category.accentColor }} />
          </div>

          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-1">
            {category.subtitle}
          </span>

          <h3 className="font-heading font-black text-2xl tracking-wider text-white uppercase mb-3 drop-shadow-md">
            {category.title}
          </h3>

          <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-white transition-colors duration-300">
            {category.description}
          </p>

          <Link
            href="#services"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-white uppercase pt-2 border-t border-white/15 group-hover:border-white/40 group-hover:text-primary transition-colors"
          >
            <span>VIEW PACKAGES</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Intro() {
  return (
    <section id="about" className="py-28 md:py-36 bg-background relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.25em] uppercase mb-5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>WHAT WE DO</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.08]"
            >
              YOU DREAM IT. <br/>
              <span className="text-gradient">WE BRING IT TO LIFE.</span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-muted text-base md:text-lg leading-relaxed max-w-lg lg:text-right font-light"
          >
            From high-energy festivals to fairy-tale wedding walk-ins, we engineer sensory magic with flawless timing and world-class gear.
          </motion.p>
        </div>

        {/* Categories Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <TiltCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
