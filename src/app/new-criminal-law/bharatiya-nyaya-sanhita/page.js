"use client";
import React from 'react';
import Hero from '@/components/hero';
import { motion } from 'framer-motion';
import { Scale, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const BharatiyaNyayaSanhita = () => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-[#faf9f6] to-white'>
            <Hero
                heading="Bharatiya Nyaya Sanhita"
                subtitle="Indian Penal Code Replacement"
                description="The new criminal code replacing the Indian Penal Code, 1860"
                banner="/img4.jpg"
                mobileBanner="/img4.jpg"
            />

            <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 text-center"
                >
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl"></div>
                            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-full">
                                <Scale className="w-16 h-16 text-white" strokeWidth={2} />
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Bharatiya Nyaya Sanhita
                    </h1>

                    {/* Coming Soon Badge */}
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full mb-8">
                        <Clock className="w-6 h-6 animate-pulse" />
                        <span className="text-xl font-semibold">Coming Soon</span>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                        Detailed information about Bharatiya Nyaya Sanhita, including key provisions,
                        amendments, and comprehensive analysis will be available here soon.
                    </p>

                    {/* Decorative Divider */}
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mb-12"></div>

                    {/* Back Button */}
                    <Link href="/new-criminal-law">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to New Criminal Laws
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 text-center text-gray-500"
                >
                    <p>Stay tuned for comprehensive coverage of this landmark legislation</p>
                </motion.div>
            </div>
        </div>
    );
};

export default BharatiyaNyayaSanhita;
