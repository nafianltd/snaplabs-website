'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NetworkAnimation from './NetworkAnimation';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
      <NetworkAnimation />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Hero content */}
      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
          variants={itemVariants}
        >
          <span className="block text-white">Empowering Innovation</span>
          <span 
            className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent relative [filter:drop-shadow(0_0_4px_rgba(139,92,246,0.45))]"
          >
            with AI-powered Solutions
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Unlock the power of your data with our AI products. From intelligent chatbots to predictive analytics,
          we provide the tools you need to make data-driven decisions.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.a
            href="/products"
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
            className="relative px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600/80 to-purple-600/80 text-white font-medium border border-white/10 group overflow-hidden hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            <span className="relative z-10 inline-flex items-center">
              Explore Products
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 transition-transform duration-300 ease-out" />
          </motion.a>
          <motion.a
            href="https://outlook.office365.com/book/SnapAnalytics1@snapanalytics.co.uk/"
            className="px-8 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all transform hover:scale-105 backdrop-blur-sm"
          >
            Book a Demo
          </motion.a>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-1/2 h-1/2 bg-gradient-to-tr from-green-500/30 to-blue-500/30 rounded-full blur-3xl" />
        </div>
      </motion.div>
    </section>
  );
}
