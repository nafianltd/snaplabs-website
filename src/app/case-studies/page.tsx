'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CaseStudies() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Case Studies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Case study cards will go here */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We&apos;re currently preparing detailed case studies of our successful projects. 
              Check back soon to learn more about our work and impact.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
