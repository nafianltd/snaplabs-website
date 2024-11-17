'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import CompanyCarousel from '@/components/CompanyCarousel';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <CompanyCarousel />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  );
}