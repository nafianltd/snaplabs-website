'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BeakerIcon,
  ChartBarIcon,
  CpuChipIcon,
  LightBulbIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'AI Strategy Consulting',
    description: 'Develop a comprehensive AI roadmap tailored to your business needs and objectives.',
    icon: LightBulbIcon,
  },
  {
    title: 'Machine Learning Solutions',
    description: 'Custom ML models and algorithms designed to solve your specific business challenges.',
    icon: CpuChipIcon,
  },
  {
    title: 'AI Agent Development',
    description: 'Build sophisticated AI agents and multi-agent frameworks that collaborate and solve complex tasks autonomously.',
    icon: CommandLineIcon,
  },
  {
    title: 'Research & Development',
    description: 'Stay ahead with cutting-edge AI research and innovative solutions.',
    icon: BeakerIcon,
  },
];

export default function Expertise() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="expertise" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-lg max-w-3xl mx-auto"
          >
            We combine deep technical expertise with business acumen to deliver
            transformative AI solutions.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="relative group"
            >
              {/* Shadow effect for a smooth raised look */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 group-hover:shadow-2xl transition-all duration-300 ease-in-out" />
              
              {/* Main content area */}
              <div className="relative p-6 pb-10 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:border-white/20 flex flex-col min-h-[300px] group-hover:translate-y-[-4px] transition-all duration-300 ease-in-out">
                <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 flex-grow">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
