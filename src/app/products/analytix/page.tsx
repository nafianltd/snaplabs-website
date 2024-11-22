'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterWithMap from '@/components/FooterWithMap';
import Image from 'next/image';

export default function Analytix() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Analytix</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your AI-powered chatbot for seamless data interaction
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
                    title: 'Universal Data Connection',
                    description: 'Connect to SQL warehouses, documents, PDFs, or websites with ease',
                  },
                  {
                    title: 'Custom Knowledge Base',
                    description: 'Train and update the LLM to understand your specific business context',
                  },
                  {
                    title: 'Natural Language Processing',
                    description: 'Ask questions in plain English and get accurate, contextual responses',
                  },
                  {
                    title: 'Secure Integration',
                    description: 'Enterprise-grade security with your existing infrastructure',
                  },
                ].map((feature) => (
                  <div key={feature.title} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* How It Works and Icons */}
            <div className="grid md:grid-cols-2 gap-12">
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
                      title: 'Connect Your Data',
                      description: "Integrate Analytix with your existing data sources, whether they're databases, documents, or web resources.",
                    },
                    {
                      step: '02',
                      title: 'Train the Model',
                      description: 'Our system learns from your data, building a custom knowledge base that understands your business context.',
                    },
                    {
                      step: '03',
                      title: 'Deploy & Use',
                      description: 'Start asking questions in natural language and receive accurate, contextual answers from your data.',
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

              {/* Icons Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative w-full h-96">
                  {/* Snowflake - Largest and centered */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                    <Image
                      src="/icons/snowflake.svg"
                      alt="Snowflake"
                      width={256}
                      height={256}
                      className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>

                  {/* BigQuery - Top right */}
                  <div className="absolute top-0 right-0 w-40 h-40">
                    <Image
                      src="/icons/bigquery.svg"
                      alt="BigQuery"
                      width={160}
                      height={160}
                      className="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>

                  {/* AWS - Bottom left */}
                  <div className="absolute bottom-0 left-0 w-40 h-40">
                    <Image
                      src="/icons/aws.svg"
                      alt="AWS"
                      width={160}
                      height={160}
                      className="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

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
