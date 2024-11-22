'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CompanyCarousel from '@/components/CompanyCarousel';
import { useState } from 'react';
import MapModal from '@/components/MapModal';

export default function Home() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <CompanyCarousel />
      <Expertise />
      <Contact />
      <Footer onOpenMap={() => setIsMapOpen(true)} />
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </main>
  );
}