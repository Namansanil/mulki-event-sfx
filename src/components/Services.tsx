'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Flame, Lightbulb, Volume2, MonitorPlay, Sparkles, Music4, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    num: '01',
    title: 'SFX & PYROTECHNICS',
    category: 'SPECIAL EFFECTS',
    description: 'Indoor cold fire sparkulars, CO₂ cryogenic jets, dry-ice low fog clouds, stadium confetti blasters, and synchronized pyrotechnics.',
    items: ['Cold Sparkulars (Zero Burn)', 'Cryo CO₂ Jet Cannons', 'Dry-Ice Low Fog Cloud', 'Confetti & Streamer Cannons', 'Bubble & Snow Blasters', 'Fire & Flame Projectors'],
    image: '/Photos-1-001/IMG-20260809-WA0028.jpg',
    video: '/Photos-1-001/VID-20260809-WA0037.mp4',
    icon: Flame,
    color: '#FF7A00'
  },
  {
    num: '02',
    title: 'ARCHITECTURAL & STAGE LIGHTING',
    category: 'LIGHTING DESIGN',
    description: 'Computer-controlled beam moving heads, pixel-mapped wash lights, laser matrix shows, dynamic stage trusses, and ambient venue uplighting.',
    items: ['Sharpy Moving Head Beams', 'RGBW Ambient Uplighting', 'Laser Light Show Matrix', 'Followspots & Blinders', 'Pixel-Mapped LED Bars', 'Gobo Pattern Projections'],
    image: '/Photos-1-001/IMG-20260809-WA0039.jpg',
    video: '/Photos-1-001/VID-20260809-WA0032.mp4',
    icon: Lightbulb,
    color: '#8B3DFF'
  },
  {
    num: '03',
    title: 'CONCERT SOUND & AUDIO ENGINEERING',
    category: 'ACOUSTICS & AUDIO',
    description: 'Crystal-clear concert line arrays, high-power subwoofers, wireless microphone suites, DJ consoles, and digital audio engineering.',
    items: ['Tour-Grade Line Array PA', 'Ultra-Low Frequency Subs', 'Wireless Sennheiser/Shure Mics', 'Pioneer Nexus DJ Setup', 'Live Band Sound Mixers', 'Digital IEM Monitoring'],
    image: '/Photos-1-001/IMG-20260809-WA0040.jpg',
    video: '/Photos-1-001/VID-20260809-WA0033.mp4',
    icon: Volume2,
    color: '#246BFF'
  },
  {
    num: '04',
    title: 'STAGE ARCHITECTURE & LED WALLS',
    category: 'VISUAL PRODUCTION',
    description: 'Seamless ultra-HD P2.6 LED video walls, custom aluminum stage trusses, acrylic podiums, and curved display installations.',
    items: ['Ultra-HD P2.6/P3 LED Walls', 'Curved & Corner Screens', 'Custom Heavy-Duty Trusses', 'Acrylic & Hydraulic Stages', 'Live Multi-Camera Switcher', 'Visualizer & 3D Motion Graphics'],
    image: '/Photos-1-001/IMG-20260809-WA0041.jpg',
    video: '/Photos-1-001/VID-20260809-WA0038.mp4',
    icon: MonitorPlay,
    color: '#FF2B9A'
  },
  {
    num: '05',
    title: 'LUXURY WEDDING & THEME DECOR',
    category: 'SCENOGRAPHY',
    description: 'Custom botanical florals, fairy light tunnels, royal mandap architectures, entrance arches, and designer table settings.',
    items: ['Mandap & Stage Scenography', 'Floral Cascades & Arches', 'Fairy Light Star Canopies', 'VIP Lounge & Table Styling', 'Grand Red Carpet Entryways', 'Bespoke Photo-Op Backdrops'],
    image: '/Photos-1-001/IMG-20260809-WA0043.jpg',
    video: '/Photos-1-001/VID-20260809-WA0035.mp4',
    icon: Sparkles,
    color: '#FFAA00'
  },
  {
    num: '06',
    title: 'ENTERTAINMENT & LIVE ARTISTS',
    category: 'TALENT & ARTISTRY',
    description: 'Celebrity DJs, live percussionists, orchestral bands, LED dancers, fire performers, and master of ceremonies.',
    items: ['Top Tier Club & Wedding DJs', 'Live Acoustic & Fusion Bands', 'Dhol & Percussion Ensembles', 'LED Robot & Tron Dancers', 'Fire & Acrobat Performers', 'Professional Emcees'],
    image: '/Photos-1-001/IMG-20260809-WA0046.jpg',
    video: '/Photos-1-001/VID-20260809-WA0042.mp4',
    icon: Music4,
    color: '#00F0FF'
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Floating cursor follower coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section 
      id="services" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveService(null)}
      className="py-28 md:py-36 bg-[#060609] border-y border-white/10 relative overflow-hidden"
    >
      {/* Floating Magnetic Image Preview Follower (Desktop) */}
      <motion.div
        className="hidden lg:block pointer-events-none absolute z-30 w-80 h-52 rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: '-50%',
          translateY: '-110%',
        }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: activeService !== null ? 1 : 0,
          scale: activeService !== null ? 1 : 0.6,
        }}
        transition={{ duration: 0.3 }}
      >
        {activeService !== null && (
          <div className="relative w-full h-full">
            {services[activeService].video ? (
              <video
                src={services[activeService].video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={services[activeService].image}
                alt={services[activeService].title}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-bold tracking-widest text-white uppercase">
              <span style={{ color: services[activeService].color }}>
                {services[activeService].category}
              </span>
              <span className="bg-black/60 px-2 py-0.5 rounded text-white/80">
                PREVIEW
              </span>
            </div>
          </div>
        )}
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4 block"
            >
              FULL SPECTRUM EVENT PRODUCTION
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight"
            >
              EVERYTHING YOUR <br className="hidden md:block"/> EVENT DEMANDS.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-sm md:text-base max-w-md"
          >
            End-to-end technical production, certified pyrotechnicians, and state-of-the-art concert gear managed by true industry veterans.
          </motion.p>
        </div>

        {/* Services List with Staggered Framer Motion Reveal */}
        <div className="flex flex-col">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = activeService === index;

            return (
              <motion.div 
                key={service.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onMouseEnter={() => setActiveService(index)}
                className={`group relative border-t border-white/10 py-10 md:py-14 transition-all duration-500 cursor-pointer ${
                  isHovered ? 'bg-white/[0.03]' : ''
                }`}
              >
                {/* Active Indicator Left Bar */}
                <motion.div 
                  animate={{ height: isHovered ? '100%' : '0%' }}
                  className="absolute left-0 top-0 w-1 bg-gradient-mulki rounded-r transition-all duration-300"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start px-2 md:px-6">
                  {/* Number & Icon */}
                  <div className="lg:col-span-3 flex items-center gap-6">
                    <span 
                      className="font-heading text-4xl sm:text-5xl font-light transition-colors duration-300"
                      style={{ color: isHovered ? service.color : 'rgba(255,255,255,0.2)' }}
                    >
                      {service.num}
                    </span>
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300"
                      style={{
                        backgroundColor: isHovered ? `${service.color}15` : 'rgba(255,255,255,0.03)',
                        borderColor: isHovered ? `${service.color}60` : 'rgba(255,255,255,0.08)',
                      }}
                    >
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: isHovered ? service.color : '#A5A5A5' }} />
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <div className="lg:col-span-5">
                    <span className="text-[11px] font-bold tracking-[0.25em] uppercase block mb-1 text-muted">
                      {service.category}
                    </span>
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl tracking-wide text-white uppercase mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed max-w-xl group-hover:text-white/80 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet Items & Tag Badges */}
                  <div className="lg:col-span-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                      {service.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: isHovered ? service.color : 'rgba(255,255,255,0.3)' }} />
                          <span className="text-white/70 text-xs font-medium group-hover:text-white transition-colors">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-300" style={{ color: isHovered ? service.color : 'transparent' }}>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">REQUEST QUOTE FOR THIS SERVICE</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          <div className="border-t border-white/10 w-full" />
        </div>
      </div>
    </section>
  );
}
