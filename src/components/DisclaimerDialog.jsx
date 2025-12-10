'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';

export default function DisclaimerDialog() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show dialog after a short delay
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        setIsOpen(false);
    };


    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#071428] to-[#0B1C2A] text-white px-6 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-amber-500/20 rounded-full">
                                        <AlertTriangle className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">Legal Disclaimer</h2>
                                        <p className="text-sm text-gray-300">Indian Law Masters</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-6 py-6 overflow-y-auto max-h-[60vh]">
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">DISCLAIMER</h3>

                                <p className="text-sm leading-relaxed mb-3">
                                    The Bar Council of India prohibits advocates from engaging in any form of advertisement or solicitation. By accessing the Indian Law Masters website (our website), the user acknowledges that:
                                </p>

                                <ul className="space-y-3 text-sm leading-relaxed list-disc pl-6">
                                    <li>
                                        The user is voluntarily using our website to gain information about us for their information and use. They also acknowledge that there has been no attempt by us to advertise or solicit work.
                                    </li>

                                    <li>
                                        Any information obtained or downloaded from our website does not lead to the creation of an attorney-client relationship between the Firm and the user.
                                    </li>

                                    <li>
                                        The content on this website is for informational purposes only and cannot be construed to be a form of legal opinion or legal advice.
                                    </li>

                                    <li>
                                        Indian Law Masters will not be held liable for any consequences from actions taken based on the materials or information provided on this website.
                                    </li>
                                </ul>

                          

                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
                                    <p className="text-xs text-gray-600">
                                        By clicking &quot;Proceed to Website&quot;, you confirm that you have read, understood, and agree to these terms and conditions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <div className="flex flex-col sm:flex-row gap-3 justify-end">

                                <button
                                    onClick={handleAccept}
                                    className="px-6 py-2.5 bg-gradient-to-r from-[#C5A25A] to-[#B8956B] text-white font-semibold rounded-lg hover:from-[#B8956B] hover:to-[#C5A25A] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 order-1 sm:order-2"
                                >
                                    Proceed to Website
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}