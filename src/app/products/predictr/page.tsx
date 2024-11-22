'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterWithMap from '@/components/FooterWithMap';

export default function Predictr() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Predictr</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No-code predictive analytics platform for business intelligence
            </p>
          </motion.div>

          <div className="space-y-24">
            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Market Basket Analysis',
                    description: 'Identify common groupings in transactional data using FPGrowth algorithm',
                  },
                  {
                    title: 'Customer Segmentation',
                    description: 'Group customers based on behavior using K-Means clustering',
                  },
                  {
                    title: 'Sales Forecasting',
                    description: 'Predict future trends using the Prophet algorithm',
                  },
                  {
                    title: 'Real-time API',
                    description: 'Get predictions through our high-performance API',
                  },
                ].map((feature) => (
                  <div key={feature.title} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Data Connectivity */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Data Connectivity</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  'Snowflake',
                  'Google BigQuery',
                  'Amazon Redshift',
                  'PostgreSQL',
                  'MySQL',
                  'CSV/Excel Files',
                ].map((source) => (
                  <div key={source} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                    <span className="text-lg font-medium text-white">{source}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* How It Works */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Connect Data Source',
                    description: 'Choose from our wide range of supported data sources and connect your data.',
                  },
                  {
                    step: '02',
                    title: 'Select Analysis Type',
                    description: 'Pick the type of analysis you need: Market Basket, Customer Segmentation, or Sales Forecasting.',
                  },
                  {
                    step: '03',
                    title: 'Configure & Run',
                    description: 'Set your parameters through our intuitive interface and let our algorithms do the work.',
                  },
                  {
                    step: '04',
                    title: 'Get Insights',
                    description: 'View results in our dashboard or access them through our API for integration.',
                  },
                ].map((step) => (
                  <div key={step.step} className="flex gap-8 items-start">
                    <div className="text-4xl font-bold text-indigo-500">{step.step}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <a
                href="https://outlook.office365.com/book/SnapAnalytics1@snapanalytics.co.uk/"
                className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
              >
                Schedule a Demo
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <FooterWithMap />
      </div>
    </main>
  );
}
