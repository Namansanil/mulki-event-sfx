'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'EVENTS', value: 250, suffix: '+' },
  { label: 'WEDDINGS', value: 80, suffix: '+' },
  { label: 'CITIES', value: 15, suffix: '+' },
  { label: 'YEARS OF EXPERIENCE', value: 10, suffix: '+' },
];

function Counter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      let start = from;
      const end = to;
      if (start === end) return;

      const incrementTime = (duration * 1000) / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

export default function Stats() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-32 bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center border-l border-white/5 first:border-l-0 px-4"
            >
              <div className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-4 text-white">
                <Counter from={0} to={stat.value} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-muted text-xs md:text-sm font-bold tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
