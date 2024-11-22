'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterWithMap from '@/components/FooterWithMap';
import { useRouter } from 'next/navigation';

const products = [
  {
    name: 'Analytix',
    description: 'An AI Agents powered chatbot that answers questions about your data',
    features: [
      'Connect to SQL warehouses, docs/PDFs, or websites',
      'Train and update LLM knowledge base',
      'Custom company-specific chatbot',
      'Seamless data backend integration',
      'Natural language query processing'
    ],
    image: '/images/analytix-preview.png'
  },
  {
    name: 'Predictr',
    description: 'No-code predictive analytics platform for business intelligence',
    features: [
      'Market Basket Analysis using FPGrowth algorithm',
      'Customer Segmentation with K-Means clustering',
      'Sales Forecasting using Prophet algorithm',
      'Integration with major data stores',
      'Real-time predictions API'
    ],
    pricing: {
      standard: {
        name: 'Standard',
        price: '£1250',
        period: '/month',
        features: [
          'Deployed on your cloud infrastructure',
          'Regular security patches and updates',
          'Full data privacy and control',
          'Custom knowledge base training',
          'Integration with your existing systems',
          'Dedicated support team',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        features: [
          'Tailor-made AI agents',
          'Optional cloud hosting',
          'Advanced customization',
          'Priority 24/7 support',
          'Custom integrations',
          'Dedicated account manager',
        ],
      },
    },
  },
];

export default function Products() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div 
                  onClick={() => router.push(`/products/${product.name.toLowerCase()}`)}
                  className="grid md:grid-cols-2 gap-12 items-center relative group cursor-pointer rounded-2xl p-8 transition-all duration-300 hover:bg-gray-900/30 hover:scale-[1.02]"
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {product.name}
                      <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </h2>
                    <p className="text-xl text-gray-300">{product.description}</p>
                    <ul className="space-y-4">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg className="h-6 w-6 text-indigo-500 mt-1 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="ml-3 text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`relative h-96 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                    <div className="absolute inset-0 bg-black/50 rounded-xl" />
                    {/* Add actual product images later */}
                    <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-9xl font-bold">
                      {product.name[0]}
                    </div>
                  </div>
                </div>

                {product.pricing && (
                  <div className="mt-24">
                    <h3 className="text-2xl font-bold text-white text-center mb-12">Pricing Plans</h3>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                      {Object.values(product.pricing).map((plan) => (
                        <motion.div
                          key={plan.name}
                          whileHover={{ scale: 1.02 }}
                          className="relative group"
                        >
                          {/* Background gradient effects */}
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-2xl" />
                          
                          {/* Content */}
                          <div className="relative p-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors">
                            {/* Plan name with gradient */}
                            <div className="inline-block mb-4">
                              <h4 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                {plan.name}
                              </h4>
                            </div>
                            
                            {/* Price */}
                            <div className="mb-8">
                              {plan.price !== 'Custom' ? (
                                <div className="flex items-baseline">
                                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                                  <span className="ml-2 text-lg text-gray-400">{plan.period}</span>
                                </div>
                              ) : (
                                <div className="flex items-baseline">
                                  <span className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Custom</span>
                                </div>
                              )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-4">
                              {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start space-x-3">
                                  <svg 
                                    className="h-6 w-6 text-indigo-400 mt-0.5 group-hover:text-indigo-300 transition-colors" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                  >
                                    <path 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth={2} 
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                                    />
                                  </svg>
                                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors">{feature}</span>
                                </li>
                              ))}
                            </ul>

                            {/* CTA Button */}
                            <motion.a
                              href="https://outlook.office365.com/book/SnapAnalytics1@snapanalytics.co.uk/"
                              className="mt-8 block w-full py-3 px-6 text-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Get Started
                            </motion.a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24">
        <FooterWithMap />
      </div>
    </main>
  );
}
