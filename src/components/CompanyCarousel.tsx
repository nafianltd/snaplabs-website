'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const companies = [
  { name: 'Caffe Nero', logo: '/images/companies/Caffe-Nero.png' },
  { name: 'Phillip Morris International', logo: '/images/companies/Philip-Morris.png' },
  { name: 'Park Cakes', logo: '/images/companies/Park-Cakes.png' },
  { name: 'Brother at Your Side', logo: '/images/companies/Brother.png' },
  { name: 'DEE SET', logo: '/images/companies/Dee-Set.png' },
  { name: 'Yeo Valley', logo: '/images/companies/Yeo-Valley-1.png' },
  { name: 'Matillion', logo: '/images/companies/Matillion.png' },
  { name: 'St James Place', logo: '/images/companies/st-james-place.png' },
  { name: 'Premier Foods', logo: '/images/companies/premier-foods.png' },
  { name: 'EDF', logo: '/images/companies/edf.png' },
  { name: 'West Burton Energy', logo: '/images/companies/west-burton.png' },
];

const CompanyCarousel = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="pt-12 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Empowering...
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <Slider {...settings}>
            {companies.map((company, index) => (
              <div key={index} className="px-1">
                <div className="relative flex items-center justify-center h-24">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    style={{ 
                      objectFit: 'contain',
                      ...(company.name === 'St James Place' || company.name === 'Premier Foods' || company.name === 'EDF' 
                        ? { transform: 'scale(0.8)' } 
                        : {})
                    }}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyCarousel;
