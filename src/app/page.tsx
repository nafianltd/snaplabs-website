'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Contact from '@/components/Contact';
import CompanyCarousel from '@/components/CompanyCarousel';
import FooterWithMap from '@/components/FooterWithMap';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <CompanyCarousel />
      <Expertise />
      <Contact />
      <FooterWithMap />
    </main>
  );
}