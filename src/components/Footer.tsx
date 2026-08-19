'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUp, Heart, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030305] pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative top rainbow line and glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-mulki opacity-60"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/20 blur-[110px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col (Span 2) */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden p-[1.5px] bg-gradient-mulki">
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <Image 
                    src="/logo.jpg" 
                    alt="Mulki Event SFX Logo" 
                    width={40} 
                    height={40} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <span className="font-heading font-black text-xl tracking-wider text-white">
                MULKI <span className="text-primary text-sm font-bold">EVENT SFX</span>
              </span>
            </Link>
            
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              South India's premier event technical production house. Specializing in concert sound, robotic lighting, cold fire pyrotechnics, atmospheric SFX, and architectural stages.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918722524049?text=Hi%20Mulki%20Event%20SFX!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white hover:text-primary transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white hover:text-secondary transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="tel:+918722524049"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white hover:text-accent transition-all"
                aria-label="Call"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-heading font-bold text-xs tracking-[0.25em] text-white uppercase mb-6">
              EXPLORE
            </h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '#about' },
                { name: 'Services & SFX', href: '#services' },
                { name: 'Transformation', href: '#transformation' },
                { name: '4 Pillars Experience', href: '#experience' },
                { name: 'Gallery & Videos', href: '#gallery' },
                { name: 'Why Mulki SFX', href: '#why-us' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted hover:text-white transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h4 className="font-heading font-bold text-xs tracking-[0.25em] text-white uppercase mb-6">
              CAPABILITIES
            </h4>
            <ul className="flex flex-col gap-3.5">
              {[
                'Cold Fire Sparkulars',
                'CO₂ Cryo Jet Cannons',
                'Dry-Ice Low Fog',
                'Robotic Moving Heads',
                'Concert Line Arrays',
                'LED Video Walls P2.6',
                'Stadium Confetti',
              ].map((item) => (
                <li key={item} className="text-muted text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="font-heading font-bold text-xs tracking-[0.25em] text-white uppercase mb-6">
              REACH US
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3 text-muted">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>Mulki, Mangalore, Udupi & Pan-India</span>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a href="tel:+918722524049" className="hover:text-white transition-colors">
                  +91 87225 24049
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:hello@mulkievent.sfx" className="hover:text-white transition-colors">
                  hello@mulkievent.sfx
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-muted text-xs tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()} Mulki Event SFX. Crafted for unforgettable moments.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold tracking-widest text-white uppercase transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
