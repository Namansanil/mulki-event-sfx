import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-mulki opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <Image 
                src="/logo.jpg" 
                alt="Mulki Event SFX Logo" 
                width={40} 
                height={40} 
                className="rounded-full object-cover"
              />
              <span className="font-heading font-bold text-lg tracking-wider text-white">
                MULKI <span className="text-muted text-sm font-normal">EVENT SFX</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Premium event production, SFX, lighting, and sound for unforgettable experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-heading font-bold tracking-widest mb-6">EXPLORE</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-muted hover:text-white transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold tracking-widest mb-6">CONTACT</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-muted hover:text-white transition-colors text-sm">Instagram</a>
              </li>
              <li>
                <a href="https://wa.me/918722524049?text=Hi%20Mulki%20Event%20SFX!%20I'm%20interested%20in%20planning%20an%20event." target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors text-sm">WhatsApp</a>
              </li>
              <li>
                <a href="tel:+918722524049" className="text-muted hover:text-white transition-colors text-sm">Phone (+91 87225 24049)</a>
              </li>
              <li>
                <a href="mailto:hello@mulkievent.sfx" className="text-muted hover:text-white transition-colors text-sm">Email</a>
              </li>
            </ul>
          </div>

          {/* Offices/Location (Optional Placeholder) */}
          <div>
            <h4 className="font-heading font-bold tracking-widest mb-6">OFFICE</h4>
            <address className="not-italic text-muted text-sm leading-relaxed">
              Available worldwide.<br />
              Based in Premium Locations.
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs tracking-wider">
            © 2026 Mulki Event SFX. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted hover:text-white text-xs tracking-wider transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-muted hover:text-white text-xs tracking-wider transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
