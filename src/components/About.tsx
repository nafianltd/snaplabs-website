'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-0"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About Snap Labs
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Snap Labs is a cutting-edge AI consultancy, born from the innovative spirit of 
                Snap Analytics. We specialize in transforming businesses through the power of 
                artificial intelligence and machine learning.
              </p>
              <p>
                As a sister company to Snap Analytics, we combine deep technical expertise 
                with years of industry experience to deliver solutions that drive real business value.
              </p>
              <p>
                Our team of experts works closely with clients to understand their unique challenges 
                and develop tailored AI solutions that accelerate growth and innovation.
              </p>
            </div>
          </motion.div>

          {/* Right column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-8"
          >
            {[
              { number: '95%', label: 'Client Satisfaction' },
              { number: '50+', label: 'AI Solutions Delivered' },
              { number: '30+', label: 'Industry Experts' },
              { number: '24/7', label: 'Support & Maintenance' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
