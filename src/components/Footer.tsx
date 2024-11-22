import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  onOpenMap: () => void;
}

export default function Footer({ onOpenMap }: FooterProps) {
  return (
    <footer className="bg-black/50 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Snap Labs</h3>
            <p className="text-gray-300 mb-4">
              Transforming businesses through innovative AI solutions and expert consulting services.
            </p>
            <a
              href="https://snapanalytics.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <span className="mr-2">Powered by</span>
              <Image
                src="/images/snap_analytics_logo.svg"
                alt="SnapAnalytics"
                width={150}
                height={36}
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-gray-300 hover:text-white transition-colors">
                  Our Expertise
                </a>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@snaplabs.ai</li>
              <li className="space-y-1">
                <div 
                  onClick={onOpenMap}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  <p className="font-medium pb-1 border-b border-gray-600/30 inline-block">Bristol Office</p>
                  <p>Snap Analytics</p>
                  <p>Runway East, 1 Victoria St</p>
                  <p>Redcliffe, Bristol BS1 6AA</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              {new Date().getFullYear()} Snap Labs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://snapanalytics.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Image
                  src="/images/snap_analytics_logo.svg"
                  alt="SnapAnalytics"
                  width={100}
                  height={24}
                  className="h-6 w-auto opacity-75 hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/snap-labs-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
