'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Trophy, CalendarCheck, MapPin, Smile } from 'lucide-react';

const stats = [
  { label: 'EVENTS EXECUTED', value: 250, suffix: '+', icon: Trophy, color: '#FF7A00', detail: 'Concerts, Weddings & Galas' },
  { label: 'WEDDING PRODUCTIONS', value: 120, suffix: '+', icon: CalendarCheck, color: '#FF2B9A', detail: 'Grand Entries & Pyro Stages' },
  { label: 'CITIES COVERED', value: 20, suffix: '+', icon: MapPin, color: '#8B3DFF', detail: 'Across Karnataka & Beyond' },
  { label: 'CLIENT SATISFACTION', value: 100, suffix: '%', icon: Smile, color: '#246BFF', detail: 'Flawless Safety Record' },
];

function AnimatedNumber({ to }: { to: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000; // ms
    const stepTime = 20; // ms
    const totalSteps = duration / stepTime;
    const stepValue = to / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={nodeRef}>{count}</span>;
}

export default function Stats() {
  return (
    <section className="py-24 bg-[#050508] relative overflow-hidden border-y border-white/5">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                {/* Top Icon with Accent Glow */}
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{
                    backgroundColor: `${stat.color}15`,
                    borderColor: `${stat.color}40`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>

                {/* Counter Number */}
                <div className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-2 text-white flex items-baseline tracking-tight">
                  <AnimatedNumber to={stat.value} />
                  <span style={{ color: stat.color }}>{stat.suffix}</span>
                </div>

                {/* Label & Detail */}
                <h4 className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-1">
                  {stat.label}
                </h4>
                <p className="text-muted text-xs">
                  {stat.detail}
                </p>

                {/* Bottom decorative bar */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                  style={{ backgroundColor: stat.color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
