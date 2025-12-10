"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const expertiseAreas = [
    {
        id: "litigation",
        title: "Litigation",
        description: "At Indian Law Masters, we offer strategic legal solutions tailored to the intricate needs of businesses across diverse industries. Our seasoned team of experts provide comprehensive legal solutions to help your business navigate the intricate world of corporate and commercial law.",
        image: "/ui.jpg",
        areas: [
            "Civil & Commercial Litigation",
            "Criminal Law",
            "Matrimonial & Family Law Disputes",
            "Constitutional Law",
            "Money Laundering / Cyber Crime"
        ],
        reverse: false
    },
    {
        id: "alternate-dispute-resolution",
        title: "Alternate Dispute Resolution",
        description: "At Indian Law Masters, we are dedicated to providing unparalleled arbitration services to our clients, leveraging our extensive experience and deep expertise in the field. Our firm has a proven track record of handling complex and high-stakes arbitration cases across various sectors, domestically and internationally.",
        image: "/zz.jpg",
        areas: [

            "Mediation",
            "Arbitration"
        ],
        reverse: true
    }
];

export default function Expertise() {
    return (
        <section className="bg-[#f8f6f1] py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Areas of Expertise
                    </h1>
                    <motion.div
                        className="h-1 w-24 mx-auto bg-gradient-to-r from-[#C5A25A] to-yellow-400 mb-6"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        We specialize in diverse legal domains, offering expert counsel and representation
                        to safeguard your rights and interests across multiple practice areas.
                    </p>
                </motion.div>

                {/* Expertise Areas */}
                <div className="space-y-20">
                    {expertiseAreas.map((area, index) => (
                        <motion.div
                            key={area.id}
                            className={`flex flex-col lg:flex-row items-center gap-12 ${area.reverse ? "lg:flex-row-reverse" : ""
                                }`}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Image Section */}
                            <div className="lg:w-1/2">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="overflow-hidden rounded-lg shadow-lg"
                                >
                                    <Image
                                        src={area.image}
                                        alt={area.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-[300px] md:h-[400px] object-cover"
                                    />
                                </motion.div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-1/2 space-y-6">
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold text-[#C5A25A]"
                                    initial={{ x: area.reverse ? 30 : -30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    {area.title}
                                </motion.h2>

                                <motion.p
                                    className="text-gray-700 text-lg leading-relaxed"
                                    initial={{ x: area.reverse ? -30 : 30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {area.description}
                                </motion.p>

                                {/* Practice Areas Pills */}
                                <motion.div
                                    className="flex flex-wrap gap-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    {area.areas.map((practiceArea, i) => (
                                        <Link
                                            key={i}
                                            href={`/practice-areas#${practiceArea.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                            className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full text-gray-700 hover:border-[#C5A25A] hover:text-[#C5A25A] transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5"
                                        >
                                            {practiceArea}
                                        </Link>
                                    ))}
                                </motion.div>


                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Section */}
                <motion.div
                    className="text-center mt-20 bg-white rounded-lg p-8 md:p-12 shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Need Legal Assistance?
                    </h3>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Our experienced legal team is ready to provide you with comprehensive solutions
                        tailored to your specific needs. Contact us today for a consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-[#C5A25A] text-white font-semibold rounded-lg hover:bg-[#B8944E] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/practice-areas"
                            className="px-8 py-3 border-2 border-[#C5A25A] text-[#C5A25A] font-semibold rounded-lg hover:bg-[#C5A25A] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            View All Practice Areas
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}