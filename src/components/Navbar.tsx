'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Case Studies', href: '/case-studies' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      } font-sans`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="relative flex items-center gap-2">
              <Image
                src="/images/snap_logo.svg"
                alt="Snap Labs Logo"
                width={120}
                height={40}
                className="object-contain brightness-0 invert"
                priority
              />
              <Image
                src="/images/web_icon.svg"
                alt="Snap Labs Icon"
                width={40}
                height={40}
                className="object-contain"
                quality={100}
                priority
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <motion.a
                href="https://outlook.office365.com/book/SnapAnalytics1@snapanalytics.co.uk/"
                initial={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="relative inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 group transform-gpu"
              >
                <span className="relative z-10">Book a Call</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 opacity-0 blur-lg transition-opacity duration-200 group-hover:opacity-100" />
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://outlook.office365.com/book/SnapAnalytics1@snapanalytics.co.uk/"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Book a Call
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
