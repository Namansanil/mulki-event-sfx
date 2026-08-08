import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Services from '@/components/Services';
import VenueTransformation from '@/components/VenueTransformation';
import Experience from '@/components/Experience';
import EventTypes from '@/components/EventTypes';
import Gallery from '@/components/Gallery';
import Stats from '@/components/Stats';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <VenueTransformation />
      <Experience />
      <EventTypes />
      <Gallery />
      <Stats />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
