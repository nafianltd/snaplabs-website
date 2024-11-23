'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('The email address entered is invalid, please check the formatting (e.g. email@domain.com).');
      return;
    }
    setEmailError('');
    setSubscribeSuccess(true);
    setEmail('');
    // Add your subscription logic here
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormError('');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Validate required fields
    if (!email || !message) {
      setFormStatus('error');
      setFormError('Email and message are required');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormStatus('error');
      setFormError('Please enter a valid email address');
      return;
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          message: formData.get('message'),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormStatus('success');
      form.reset();
    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus('error');
      setFormError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to transform your business with AI? Contact us today to discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-xl border border-white/10"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  required
                  placeholder="your@email.com"
                  className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                placeholder="We're ready to help! Write your message here..."
                className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'success' && (
                <p className="mt-2 text-green-400 text-sm">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="mt-2 text-red-400 text-sm">
                  {formError}
                </p>
              )}
            </div>
          </motion.form>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center backdrop-blur-sm bg-white/5 p-8 rounded-xl border border-white/10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Sign up for news, insights & opportunities
              </h3>
              <p className="text-gray-300">
                Stay updated with the latest AI trends, industry insights, and exclusive opportunities from Snap Labs.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
                {emailError && (
                  <p className="mt-2 text-red-400 text-sm">
                    {emailError}
                  </p>
                )}
                {subscribeSuccess && (
                  <p className="mt-2 text-green-400 text-sm">
                    Thank you for subscribing!
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium hover:from-purple-700 hover:to-purple-600 transition-all transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
