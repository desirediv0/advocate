"use client";
import React from 'react';
import Hero from '@/components/hero';
import { motion } from 'framer-motion';
import { Calendar, Download, FileText } from 'lucide-react';

const CourtCalendar = () => {
    const handleCardClick = () => {
        window.open('https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/calendar26.pdf', '_blank');
    };

    return (
        <div className='min-h-screen bg-gradient-to-b from-[#faf9f6] to-white'>
            <Hero
                heading="Court Calendar"
                subtitle="Plan Your Legal Schedule"
                description="Access the latest court calendars and important dates for effective case management."
                banner="/img3.jpg"
                mobileBanner="/img3.jpg"
            />

            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Available Calendars
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Download the court calendar to stay updated with important dates and holidays
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.05, y: -10 }}
                        onClick={handleCardClick}
                        className="cursor-pointer group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden max-w-md w-full"
                    >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#C5A25A]/10 via-transparent to-[#C5A25A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Card Content */}
                        <div className="relative p-8 md:p-10">
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#C5A25A]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                    <div className="relative bg-gradient-to-br from-[#C5A25A] to-[#B8954D] p-6 rounded-full">
                                        <Calendar className="w-12 h-12 text-white" strokeWidth={2} />
                                    </div>
                                </div>
                            </div>

                            {/* Year Badge */}
                            <div className="flex justify-center mb-4">
                                <span className="inline-block bg-gradient-to-r from-[#C5A25A] to-[#B8954D] text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                                    YEAR 2026
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
                                Court Calendar 2026
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-center mb-6 leading-relaxed">
                                Complete calendar with all court holidays, working days, and important dates for the year 2026
                            </p>

                            {/* Features */}
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <FileText className="w-5 h-5 text-[#C5A25A]" />
                                    <span className="text-sm">PDF Format - Easy to Download</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <Calendar className="w-5 h-5 text-[#C5A25A]" />
                                    <span className="text-sm">All Important Dates Included</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <Download className="w-5 h-5 text-[#C5A25A]" />
                                    <span className="text-sm">Printable & Shareable</span>
                                </div>
                            </div>

                            {/* Button */}
                            <button className="w-full bg-gradient-to-r from-[#C5A25A] to-[#B8954D] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                                <Download className="w-5 h-5" />
                                View & Download Calendar
                            </button>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A25A]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C5A25A]/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
                        </div>

                        {/* Bottom Border Animation */}
                        <div className="h-1 bg-gradient-to-r from-transparent via-[#C5A25A] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 text-sm">
                        Click on the card above to view and download the Court Calendar 2026 PDF
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default CourtCalendar;
