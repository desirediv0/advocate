"use client";
import React, { useState } from 'react';
import Hero from '@/components/hero';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, ExternalLink, X, BookOpen } from 'lucide-react';

const BareAct = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const bareActs = [
        { name: "CODE OF CIVIL PROCEDURE 1908", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/CODE%20OF%20CIVIL%20PROCEDURE%201908.pdf" },
        { name: "CODE OF CRIMINAL PROCEDURE ACT 1973", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/CODE%20OF%20CRIMINAL%20PROCEDURE%20ACT%201973.pdf" },
        { name: "CONSUMER PROTECTION ACT 1986", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/CONSUMER%20PROTECTION%20ACT%201986.pdf" },
        { name: "INCOME TAX ACT 1961", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/INCOME%20TAX%20ACT%201961.pdf" },
        { name: "PRISONER ACTS 1894", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/PRISONER%20ACTS%201894.pdf" },
        { name: "PROTECTION OF CHILDREN FROM SEXUAL OFFENCES ACT 2012", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/PROTECTION%20OF%20CHILDREN%20FROM%20SEXUAL%20OFFENCES%20ACT%202012.pdf" },
        { name: "THE ACADEMY OF SCIENTIFIC AND INNOVATIVE RESEARCH 2011", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20ACADEMY%20OF%20SCIENTIFIC%20AND%20INNOVATIVE%20RESEARCH%202011.pdf" },
        { name: "THE ADVOCATES ACT 1961", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20ADVOCATES%20ACT%201961.pdf" },
        { name: "THE AIRPORTS AUTHORITY OF INDIA ACT 1994", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20AIRPORTS%20AUTHORITY%20OF%20INDIA%20ACT%201994.pdf" },
        { name: "THE ARBITRATION AND CONCILIATION ACT 1996", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20ARBITRATION%20AND%20CONCILIATION%20ACT%201996.pdf" },
        { name: "THE ARMS ACT 1959", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20ARMS%20ACT%201959.pdf" },
        { name: "THE BANKING REGULATION ACT 1949", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20BANKING%20REGULATION%20ACT%201949.pdf" },
        { name: "THE BHARATIYA NAGARIK SURAKSHA SANHITA, 2023", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20BHARATIYA%20NAGARIK%20SURAKSHA%20SANHITA%2C%202023.pdf" },
        { name: "THE BHARATIYA NYAYA SANHITA, 2023", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20BHARATIYA%20NYAYA%20SANHITA%2C%202023.pdf" },
        { name: "THE BHARATIYA SAKSHYA ADHINIYAM 2023", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20BHARATIYA%20SAKSHYA%20ADHINIYAM%202023.pdf" },
        { name: "THE BUREAU OF INDIAN STANDARDS ACT 2016", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20BUREAU%20OF%20INDIAN%20STANDARDS%20ACT%202016.pdf" },
        { name: "THE CENTRAL GOODS AND SERVICES TAX ACT 2017", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20CENTRAL%20GOODS%20AND%20SERVICES%20TAX%20ACT%202017.pdf" },
        { name: "THE CHARITABLE AND RELIGIOUS TRUSTS ACT 1920", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20CHARITABLE%20AND%20RELIGIOUS%20TRUSTS%20ACT%201920.pdf" },
        { name: "THE COMMERCIAL COURTS ACT 2015", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20COMMERCIAL%20COURTS%20ACT%202015.pdf" },
        { name: "THE CONSTITUTION OF INDIA", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20CONSTITUTION%20OF%20INDIA.pdf" },
        { name: "THE COPYRIGHT ACT 1957", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20COPYRIGHT%20ACT%201957.pdf" },
        { name: "THE DELHI CO OPERATIVE SOCIETIES ACT 1972", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20DELHI%20CO%20OPERATIVE%20SOCIETIES%20ACT%201972.pdf" },
        { name: "THE DELHI HIGH COURT ACT 1966", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20DELHI%20HIGH%20COURT%20ACT%201966.pdf" },
        { name: "THE DELHI POLICE ACT 1978", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20DELHI%20POLICE%20ACT%201978.pdf" },
        { name: "THE DIVORCE ACT 1869", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20DIVORCE%20ACT%201869.pdf" },
        { name: "THE DOWRY PROHIBITION ACT 1961", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20DOWRY%20PROHIBITION%20ACT%201961.pdf" },
        { name: "THE DRUGS AND COSMETICS ACT AND RULES", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20DRUGS%20AND%20COSMETICS%20ACT%20AND%20RULES.pdf" },
        { name: "THE ELECTRICITY ACT 2003", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20ELECTRICITY%20ACT%202003.pdf" },
        { name: "THE ENVIRONMENT (PROTECTION) ACT 1986", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20ENVIRONMENT%20%28PROTECTION%29%20ACT%201986.pdf" },
        { name: "THE ESSENTIAL COMMODITIES ACT 1955", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20ESSENTIAL%20COMMODITIES%20ACT%201955.pdf" },
        { name: "THE FAMILY COURTS ACT 1984", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20FAMILY%20COURTS%20ACT%201984.pdf" },
        { name: "THE GOVERNMENT OF NATIONAL CAPITAL TERRITORY OF DELHI ACT 1991", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20GOVERNMENT%20OF%20NATIONAL%20CAPITAL%20TERRITORY%20OF%20DELHI%20ACT%201991.pdf" },
        { name: "THE GUARDIANS AND WARDS ACT 1890", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20GUARDIANS%20AND%20WARDS%20ACT%201890.pdf" },
        { name: "THE HINDU ADOPTIONS AND MAINTENANCE ACT 1956", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20HINDU%20ADOPTIONS%20AND%20MAINTENANCE%20ACT%201956.pdf" },
        { name: "THE HINDU MARRIAGE ACT 1955", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20HINDU%20MARRIAGE%20ACT%201955.pdf" },
        { name: "THE HINDU MINORITY AND GUARDIANSHIP ACT 1956", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20HINDU%20MINORITY%20AND%20GUARDIANSHIP%20ACT%201956.pdf" },
        { name: "THE HINDU SUCCESSION ACT 1956", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20HINDU%20SUCCESSION%20ACT%201956.pdf" },
        { name: "THE IMMORAL TRAFFIC (PREVENTION) ACT 1956", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20IMMORAL%20TRAFFIC%20%28PREVENTION%29%20ACT%201956.pdf" },
        { name: "THE INDIAN CONTRACT ACT 1872", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20INDIAN%20CONTRACT%20ACT%201872.pdf" },
        { name: "THE INDIAN MEDICINE CENTRAL COUNCIL ACT 1970", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20INDIAN%20MEDICINE%20CENTRAL%20COUNCIL%20ACT%201970.pdf" },
        { name: "THE INDIAN PARTNERSHIP ACT 1932", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20INDIAN%20PARTNERSHIP%20ACT%201932.pdf" },
        { name: "THE INDIAN PENAL CODE, 1860", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20INDIAN%20PENAL%20CODE%2C%201860.pdf" },
        { name: "THE INDIAN STAMP ACT 1899 (PDF Coming Soon)", pdf: "#" },
        { name: "THE INDIAN SUCCESSION ACT 1925", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20INDIAN%20SUCCESSION%20ACT%201925.pdf" },
        { name: "THE INDIAN TELEGRAPH ACT 1885", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20INDIAN%20TELEGRAPH%20ACT%201885.pdf" },
        { name: "THE INDUSTRIAL DISPUTES ACT 1947", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20INDUSTRIAL%20DISPUTES%20ACT%201947.pdf" },
        { name: "THE INFORMATION TECHNOLOGY ACT 2000", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20INFORMATION%20TECHNOLOGY%20ACT%202000.pdf" },
        { name: "THE INSOLVENCY AND BANKRUPTCY CODE 2016", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20INSOLVENCY%20AND%20BANKRUPTCY%20CODE%202016.pdf" },
        { name: "The Integrated Goods and Services Tax Act, 2017", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/The%20Integrated%20Goods%20and%20Services%20Tax%20Act%2C%202017.pdf" },
        { name: "THE JUVENILE JUSTICE (CARE AND PROTECTION OF CHILDREN) ACT 2015", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20JUVENILE%20JUSTICE%20%28CARE%20AND%20PROTECTION%20OF%20CHILDREN%29%20ACT%202015.pdf" },
        { name: "THE MEDICAL TERMINATION OF PREGNANCY ACT 1971", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20MEDICAL%20TERMINATION%20OF%20PREGNANCY%20ACT%201971.pdf" },
        { name: "THE MINIMUM WAGES ACT 1948", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20MINIMUM%20WAGES%20ACT%201948.pdf" },
        { name: "THE MOTOR VEHICLES ACT 1988", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20MOTOR%20VEHICLES%20ACT%201988.pdf" },
        { name: "THE NARCOTIC DRUGS AND PSYCHOTROPIC SUBSTANCES, ACT 1985", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20NARCOTIC%20DRUGS%20AND%20PSYCHOTROPIC%20SUBSTANCES%2C%20ACT%201985.pdf" },
        { name: "THE NATIONAL INVESTIGATION AGENCY ACT 2008", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20NATIONAL%20INVESTIGATION%20AGENCY%20ACT%202008.pdf" },
        { name: "THE NEGOTIABLE INSTRUMENTS ACT 1881", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20NEGOTIABLE%20INSTRUMENTS%20ACT%201881.pdf" },
        { name: "THE PREVENTION OF CORRUPTION ACT 1988", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20PREVENTION%20OF%20CORRUPTION%20ACT%201988.pdf" },
        { name: "THE PREVENTION OF MONEY LAUNDERING ACT 2002", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20PREVENTION%20OF%20MONEY%20LAUNDERING%20ACT%202002.pdf" },
        { name: "THE PROBATION OF OFFENDERS ACT 1958", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20PROBATION%20OF%20OFFENDERS%20ACT%201958.pdf" },
        { name: "THE PROHIBITION OF CHILD MARRIAGE ACT 2006", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20PROHIBITION%20OF%20CHILD%20MARRIAGE%20ACT%202006.pdf" },
        { name: "THE PROTECTION OF CIVIL RIGHTS ACT 1955", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20PROTECTION%20OF%20CIVIL%20RIGHTS%20ACT%201955.pdf" },
        { name: "THE PROTECTION OF HUMAN RIGHTS ACT 1993", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20PROTECTION%20OF%20HUMAN%20RIGHTS%20ACT%201993.pdf" },
        { name: "THE PROTECTION OF WOMEN FROM DOMESTIC VIOLENCE ACT 2005", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20PROTECTION%20OF%20WOMEN%20FROM%20DOMESTIC%20VIOLENCE%20ACT%202005.pdf" },
        { name: "THE PUBLIC GAMBLING ACT 1867", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20PUBLIC%20GAMBLING%20ACT%201867.pdf" },
        { name: "THE PUBLIC PROVIDENT FUND ACT 1968", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20PUBLIC%20PROVIDENT%20FUND%20ACT%201968.pdf" },
        { name: "THE RIGHT TO INFORMATION ACT 2005", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20RIGHT%20TO%20INFORMATION%20ACT%202005.pdf" },
        { name: "THE SCHEDULED CASTES AND THE SCHEDULED TRIBES (PREVENTION OF ATROCITIES) ACT 1989", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20SCHEDULED%20CASTES%20AND%20THE%20SCHEDULED%20TRIBES%20%28PREVENTION%20OF%20ATROCITIES%29%20ACT%201989.pdf" },
        { name: "THE SECURITIES AND EXCHANGE BOARD OF INDIA ACT 1992", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20SECURITIES%20AND%20EXCHANGE%20BOARD%20OF%20INDIA%20ACT%201992.pdf" },
        { name: "THE SOCIETIES REGISTRATION ACT 1860", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20SOCIETIES%20REGISTRATION%20ACT%201860.pdf" },
        { name: "THE SPECIAL MARRIAGE ACT 1954", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20SPECIAL%20MARRIAGE%20ACT%201954.pdf" },
        { name: "THE SPECIFIC RELIEF ACT 1963", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20SPECIFIC%20RELIEF%20ACT%201963.pdf" },
        { name: "THE TRANSFER OF PROPERTY ACT 1882", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20TRANSFER%20OF%20PROPERTY%20ACT%201882.pdf" },
        { name: "THE UNLAWFUL ACTIVITIES (PREVENTION) ACT 1967", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Indian%20Law%20Masters/bare-act/THE%20UNLAWFUL%20ACTIVITIES%20%28PREVENTION%29%20ACT%201967.pdf" }
    ];

    const filteredActs = bareActs.filter(act =>
        act.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleActClick = (pdf, name) => {
        if (pdf !== "#") {
            window.open(pdf, '_blank');
        } else {
            alert(`PDF for "${name}" is coming soon!`);
        }
    };

    const clearSearch = () => {
        setSearchTerm('');
    };

    return (
        <div className='min-h-screen bg-gradient-to-b from-[#faf9f6] to-white'>
            <Hero
                heading="Bare Acts"
                subtitle="Complete Legal Reference Library"
                description="Access comprehensive collection of Indian laws and legislative acts for legal research and reference."
                banner="/img4.jpg"
                mobileBanner="/img4.jpg"
                show={false}
            />

            <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
                {/* Header Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C5A25A]/10 to-[#B8954D]/10 px-6 py-3 rounded-full mb-4">
                        <BookOpen className="w-5 h-5 text-[#C5A25A]" />
                        <span className="text-gray-700 font-semibold">{bareActs.length} Acts Available</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Indian Legal Database
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        Click on any act to view the complete PDF document
                    </p>
                </motion.div>

                {/* Search Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-8 md:mb-12"
                >
                    <div className="relative max-w-2xl mx-auto">
                        <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : 'scale-100'}`}>
                            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${isSearchFocused ? 'text-[#C5A25A]' : 'text-gray-400'}`} />
                            <input
                                type="text"
                                placeholder="Search by act name or year..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                                className={`w-full pl-12 pr-12 py-3 md:py-4 border-2 rounded-xl focus:outline-none text-gray-700 text-base md:text-lg transition-all duration-300 ${isSearchFocused
                                    ? 'border-[#C5A25A] shadow-lg'
                                    : 'border-gray-200 shadow-md'
                                    }`}
                            />
                            <AnimatePresence>
                                {searchTerm && (
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        onClick={clearSearch}
                                        className="absolute right-4 top-1/4 transform -translate-y-1/2 p-1.5 hover:bg-gray-100 rounded-full transition-colors duration-200"
                                        aria-label="Clear search"
                                    >
                                        <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Search Results Count */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mt-4"
                    >
                        <p className="text-gray-600 text-sm md:text-base">
                            {searchTerm ? (
                                <>
                                    <span className="font-semibold text-[#C5A25A]">{filteredActs.length}</span>
                                    {' '}{filteredActs.length === 1 ? 'act' : 'acts'} found
                                    {filteredActs.length === 0 && ' - Try a different search term'}
                                </>
                            ) : (
                                `Showing all ${bareActs.length} acts`
                            )}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Acts List */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg overflow-hidden"
                >
                    <div className="divide-y divide-gray-100">
                        {filteredActs.length > 0 ? (
                            filteredActs.map((act, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.5) }}
                                    onClick={() => handleActClick(act.pdf, act.name)}
                                    className="group cursor-pointer hover:bg-gradient-to-r hover:from-[#C5A25A]/5 hover:to-transparent transition-all duration-300 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-3"
                                >
                                    <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                        <div className="bg-[#C5A25A]/10 group-hover:bg-[#C5A25A]/20 p-2 md:p-3 rounded-lg transition-all duration-300 flex-shrink-0">
                                            <FileText className="w-4 h-4 md:w-5 md:h-5 text-[#C5A25A]" />
                                        </div>
                                        <span className="text-gray-800 font-medium text-sm md:text-base lg:text-lg group-hover:text-[#C5A25A] transition-colors duration-300 truncate">
                                            {act.name}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        {act.pdf === "#" && (
                                            <span className="hidden sm:inline-block text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-medium">
                                                Soon
                                            </span>
                                        )}
                                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-[#C5A25A] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12 md:py-16 px-4"
                            >
                                <div className="bg-gray-100 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4">
                                    <FileText className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">No Acts Found</h3>
                                <p className="text-gray-500 text-sm md:text-base mb-4">
                                    No acts match your search criteria
                                </p>
                                <button
                                    onClick={clearSearch}
                                    className="inline-flex items-center gap-2 bg-[#C5A25A] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-[#B8954D] transition-colors duration-300 text-sm md:text-base font-medium"
                                >
                                    <X className="w-4 h-4" />
                                    Clear Search
                                </button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Info Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-8 md:mt-12 bg-gradient-to-r from-[#C5A25A]/10 to-[#B8954D]/10 rounded-xl md:rounded-2xl p-6 md:p-8 text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-[#C5A25A]" />
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                            Comprehensive Legal Database
                        </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
                        Access the complete collection of Indian Bare Acts. Click on any act to view the full text and provisions.
                        Our database is regularly updated to ensure you have access to the latest legal information.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default BareAct;
