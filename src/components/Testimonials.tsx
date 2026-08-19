'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "They didn't just transform the ballroom — they transformed the entire emotion of the evening. The cold fire entry and low-fog first dance looked like something out of a Bollywood film.",
    author: "Sarah & James D'Souza",
    role: "Bride & Groom",
    event: "Destination Wedding & Reception",
    year: "2025",
    rating: 5,
    location: "Mangalore / Udupi"
  },
  {
    id: 2,
    quote: "Flawless audio clarity, stunning P2.6 LED screen calibration, and pinpoint stage lighting. Our global executive team was blown away by the production quality.",
    author: "Vikram Shenoy",
    role: "Head of Corporate Events",
    event: "National Tech Summit & Awards",
    year: "2025",
    rating: 5,
    location: "Bengaluru"
  },
  {
    id: 3,
    quote: "The CO₂ cannons, flame projectors, and synchronized laser show turned our college arena festival into an unforgettable explosion of energy. Mulki Event SFX are in a league of their own!",
    author: "Arjun Shetty",
    role: "Festival Lead",
    event: "Live Arena Music Festival",
    year: "2025",
    rating: 5,
    location: "Manipal"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-32 md:py-44 flex items-center justify-center overflow-hidden border-t border-white/5 bg-black">
      {/* Cinematic Background Image with Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Photos-1-001/IMG-20260809-WA0014.jpg" 
          alt="Event Crowd Celebration" 
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-radial-gradient from-primary/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold tracking-[0.25em] uppercase mb-10"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>CLIENT WORDS & TESTIMONIALS</span>
        </motion.div>

        {/* Carousel Window */}
        <div className="relative min-h-[300px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              {/* Star Rating */}
              <div className="flex gap-1.5 mb-8">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif italic text-2xl sm:text-4xl md:text-5xl leading-snug mb-10 text-white/95 max-w-3xl">
                "{current.quote}"
              </p>
              
              {/* Author Info */}
              <div className="flex flex-col items-center gap-2">
                <h4 className="font-heading font-black tracking-widest text-lg sm:text-xl uppercase text-white">
                  {current.author}
                </h4>
                <div className="flex items-center gap-3 text-muted text-xs sm:text-sm font-semibold tracking-widest uppercase flex-wrap justify-center">
                  <span className="text-primary">{current.role}</span>
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span>{current.event}</span>
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span>{current.location} ({current.year})</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-gradient-mulki' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
