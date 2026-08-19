'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'TRANSFORMATION', href: '#transformation' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'GALLERY', href: '#gallery' },
  { name: 'WHY US', href: '#why-us' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary via-accent to-blue z-[100] origin-left shadow-[0_0_12px_rgba(255,122,0,0.8)]"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'py-3.5 bg-black/75 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
          {/* Logo with interactive hover */}
          <Link href="/" className="relative z-50 flex items-center gap-3 group shrink-0">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative w-10 h-10 rounded-full overflow-hidden p-[1.5px] bg-gradient-mulki shadow-lg shadow-primary/20"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <Image 
                  src="/logo.jpg" 
                  alt="Mulki Event SFX Logo" 
                  width={40} 
                  height={40} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-wider text-white flex items-center gap-1.5">
                MULKI 
                <span className="text-[10px] tracking-[0.25em] font-semibold uppercase px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                  SFX
                </span>
              </span>
              <span className="text-[10px] tracking-[0.2em] text-muted uppercase font-medium">
                Production & Events
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Animated Hover Indicator */}
          <nav 
            className="hidden xl:flex items-center gap-1.5 bg-white/[0.04] backdrop-blur-xl px-5 py-2 rounded-full border border-white/10 shadow-lg shadow-black/40"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => {
              const isHovered = hoveredLink === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  className="relative px-3.5 py-1.5 text-xs font-semibold tracking-widest text-white/70 hover:text-white transition-colors duration-200 uppercase whitespace-nowrap shrink-0"
                >
                  {isHovered && (
                    <motion.span
                      layoutId="navHover"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/20 shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <motion.a 
              href="https://wa.me/918722524049?text=Hi%20Mulki%20Event%20SFX!%20I'm%20interested%20in%20planning%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-white text-black hover:bg-white/90 text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-white/10 whitespace-nowrap shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>BOOK SFX</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform text-black" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="xl:hidden relative z-50 p-2.5 rounded-full bg-white/10 border border-white/15 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-between px-8 py-24"
          >
            {/* Ambient Background Glow in Mobile Menu */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

            <nav className="flex flex-col gap-5 relative z-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.05 * idx }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between text-2xl font-heading font-bold tracking-widest text-white/80 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-muted group-hover:text-primary transition-colors">
                      0{idx + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="relative z-10 flex flex-col gap-4 pt-6 border-t border-white/10"
            >
              <a 
                href="https://wa.me/918722524049?text=Hi%20Mulki%20Event%20SFX!%20I'm%20interested%20in%20planning%20an%20event."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-mulki text-white text-sm font-bold tracking-widest uppercase shadow-xl shadow-primary/25"
              >
                <Sparkles className="w-4 h-4" />
                <span>LET'S PLAN YOUR EVENT</span>
              </a>
              <div className="flex justify-between items-center text-xs text-muted tracking-wider">
                <span>Direct: +91 87225 24049</span>
                <span>Mulki, Karnataka</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
