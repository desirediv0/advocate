"use client";
import React from 'react';
import Hero from '@/components/hero';
import { motion } from 'framer-motion';
import { Scale, Shield, FileText, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NewCriminalLaw = () => {
    const router = useRouter();

    const laws = [
        {
            id: 1,
            title: "BHARATIYA NYAYA SANHITA",
            subtitle: "Indian Penal Code Replacement",
            icon: Scale,
            gradient: "from-blue-600 to-blue-800",
            bgGradient: "from-blue-50 to-blue-100",
            route: "/new-criminal-law/bharatiya-nyaya-sanhita"
        },
        {
            id: 2,
            title: "BHARATIYA NAGARIK SURAKSHA SANHITA",
            subtitle: "Code of Criminal Procedure Replacement",
            icon: Shield,
            gradient: "from-teal-600 to-teal-800",
            bgGradient: "from-teal-50 to-teal-100",
            route: "/new-criminal-law/bharatiya-nagarik-suraksha-sanhita"
        },
        {
            id: 3,
            title: "BHARATIYA SAKSHYA ADHINIYAM",
            subtitle: "Indian Evidence Act Replacement",
            icon: FileText,
            gradient: "from-indigo-600 to-indigo-800",
            bgGradient: "from-indigo-50 to-indigo-100",
            route: "/new-criminal-law/bharatiya-sakshya-adhiniyam"
        }
    ];

    const handleCardClick = (route) => {
        router.push(route);
    };

    return (
        <div className='min-h-screen bg-gradient-to-b from-[#faf9f6] to-white'>
            <Hero
                heading="New Criminal Laws"
                subtitle="Transforming India's Legal Framework"
                description="Explore the three new criminal laws that replace the colonial-era Indian Penal Code, Code of Criminal Procedure, and Indian Evidence Act."
                banner="/img4.jpg"
                mobileBanner="/img4.jpg"
            />

            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        The New Criminal Justice System
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        India&apos;s criminal justice system has been modernized with three comprehensive laws,
                        replacing British-era legislation with contemporary legal frameworks
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {laws.map((law, index) => (
                        <motion.div
                            key={law.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            onClick={() => handleCardClick(law.route)}
                            className="cursor-pointer group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${law.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            {/* Card Content */}
                            <div className="relative p-8">
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <div className="relative">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${law.gradient} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                                        <div className={`relative bg-gradient-to-br ${law.gradient} p-5 rounded-full`}>
                                            <law.icon className="w-10 h-10 text-white" strokeWidth={2} />
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-3 leading-tight min-h-[4rem] flex items-center justify-center">
                                    {law.title}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                                    {law.subtitle}
                                </p>

                                {/* Divider */}
                                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>

                                {/* Button */}
                                <button className={`w-full bg-gradient-to-r ${law.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transform transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3`}>
                                    Learn More
                                    <ArrowRight className="w-5 h-5" />
                                </button>

                                {/* Decorative Corner Elements */}
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${law.gradient} opacity-5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500`}></div>
                                <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br ${law.gradient} opacity-5 rounded-full -ml-10 -mb-10 group-hover:scale-150 transition-transform duration-500`}></div>
                            </div>

                            {/* Bottom Border Animation */}
                            <div className={`h-1 bg-gradient-to-r ${law.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 bg-gradient-to-r from-[#C5A25A]/10 to-[#B8954D]/10 rounded-2xl p-8 md:p-12"
                >
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            A New Era in Criminal Justice
                        </h3>
                        <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                            These three landmark legislations represent a significant shift in India&apos;s approach to criminal justice,
                            incorporating modern legal principles while addressing contemporary challenges. Click on any law above to
                            explore detailed information, key provisions, and their impact on the legal landscape.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NewCriminalLaw;
