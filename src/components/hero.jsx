'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero({ heading, subtitle, description, banner, mobileBanner, show = true }) {

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[60vh] md:min-h-[65vh] flex items-center justify-center">

      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src={mobileBanner} fill className='object-cover object-top md:hidden' alt="Banner" />
        <Image src={banner} fill className='hidden md:block object-cover object-top' alt="Banner" />
      </div>

      <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mt-14">
              {heading}
            </h1>

            {subtitle && (
              <p className="mt-3 text-sm uppercase tracking-wider text-[#C5A25A]">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
                {description}
              </p>
            )}

            {show && <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#C5A25A] text-black font-semibold rounded-none hover:opacity-95"
              >
                Book Consultation
              </a>

            </div>}
          </motion.div>
        </motion.div>
      </div>


      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white z-30"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-12 h-12" />
      </motion.button>
    </div>
  );
}