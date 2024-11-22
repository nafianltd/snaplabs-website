'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden scroll-mt-16">
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
                Snap Labs is a pioneering AI technology company that develops powerful, consumer-focused 
                artificial intelligence and machine learning products. Our mission is to make advanced AI 
                technology accessible and practical for businesses of all sizes.
              </p>
              <p>
                Our flagship products, Analytix and Predictr, represent the cutting edge of AI innovation. 
                Analytix is an intelligent chatbot that can answer questions about your company's data, 
                while Predictr is a no-code platform that makes predictive analytics simple and accessible.
              </p>
              <p>
                We believe in democratizing AI technology, making it easy for businesses to harness the 
                power of their data without requiring extensive technical expertise or resources.
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
              {
                title: 'Flagship Products',
                description: 'Two innovative AI solutions for your business'
              },
              {
                title: 'Expert Innovation',
                description: 'Powered by Snap Analytics expertise'
              },
              {
                title: 'Continuous Growth',
                description: 'Regular updates and improvements'
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored to your business needs'
              },
            ].map((item) => (
              <div
                key={item.description}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors text-center h-full flex flex-col justify-center">
                  <div className="text-2xl font-bold text-white mb-3">{item.title}</div>
                  <div className="text-gray-300 text-sm leading-tight">{item.description}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
