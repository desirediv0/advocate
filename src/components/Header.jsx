"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const nav = [
  { href: "/about", label: "About Us" },
  { href: "/our-expertise", label: "Our Expertise" },

  {
    submenu: [
      { href: "https://www.sci.gov.in", label: "Supreme Court" },
      {
        submenu: [
          { href: "https://allahabadhighcourt.in/", label: "Allahabad High Court" },
          { href: "https://bombayhighcourt.nic.in/", label: "Bombay High Court" },
          { href: "https://www.calcuttahighcourt.gov.in/", label: "Calcutta High Court" },
          { href: "https://highcourt.cg.gov.in/", label: "Chhattisgarh High Court" },
          { href: "https://www.delhihighcourt.nic.in/web ", label: "Delhi High Court" },
          { href: "https://ghconline.gov.in/", label: "Gauhati High Court" },
          { href: "https://gujarathighcourt.nic.in/", label: "Gujarat High Court" },
          { href: "https://highcourt.hp.gov.in/", label: "Himachal Pradesh High Court" },
          { href: "https://jkhighcourt.nic.in/", label: "Jammu & Kashmir High Court" },
          { href: "https://jharkhandhighcourt.nic.in/", label: "Jharkhand High Court" },
          { href: "https://karnatakajudiciary.kar.nic.in/", label: "Karnataka High Court" },
          { href: "https://keralajudiciary.gov.in/", label: "Kerala High Court" },
          { href: "https://www.madhyanchalhighcourt.in/", label: "Madhya Pradesh High Court" },
          { href: "https://www.mhc.tn.gov.in/", label: "Madras High Court" },
          { href: "https://www.hcmimphal.nic.in/", label: "Manipur High Court" },
          { href: "https://meghalayahighcourt.nic.in/", label: "Meghalaya High Court" },
          { href: "https://www.nagalandhighcourt.gov.in/", label: "Nagaland High Court" },
          { href: "https://orissahighcourt.nic.in/", label: "Orissa High Court" },
          { href: "https://patnahighcourt.gov.in/", label: "Patna High Court" },
          { href: "https://www.punjabhighcourt.gov.in/", label: "Punjab & Haryana High Court" },
          { href: "https://rajasthanhighcourt.nic.in/", label: "Rajasthan High Court" },
          { href: "https://sikkimhighcourt.nic.in/", label: "Sikkim High Court" },
          { href: "https://thc.nic.in/", label: "Tripura High Court" },
          { href: "https://highcourtofuttarakhand.gov.in/", label: "Uttarakhand High Court" },
        ],
        label: "High Court",
      },
      { href: "https://ecourts.gov.in/ecourts_home/index.php", label: "District Court" },
    ],
    label: "Courts",
  },
  { href: "/practice-areas", label: "Practice Areas" },
  {
    href: "https://judgments.ecourts.gov.in/pdfsearch/index.php", label: "Judgment Search"
  },
  { href: "/contact", label: "Contact Us" },
  {
    submenu: [
      { href: "/bare-act", label: "Bare Act" },
      { href: "/court-calendar", label: "Court Calendar" },
    ],
    label: "More",
  }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openSubSubmenu, setOpenSubSubmenu] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // scroll behaviour
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setIsScrolled(currentScrollY > 50);
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  // ✅ Mobile: jab bhi menu open ho, "More" ko default open rakho
  useEffect(() => {
    if (open && openSubmenu === null) {
      const moreIndex = nav.findIndex(
        (item) => item.label === "More" && item.submenu
      );
      if (moreIndex !== -1) {
        setOpenSubmenu(moreIndex);
      }
    }
  }, [open, openSubmenu]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className={`w-full ${isScrolled
        ? 'bg-[#faf9f6]/95 backdrop-blur-md border-b border-gray-300 shadow-sm'
        : isHomePage
          ? 'bg-[#faf9f6]/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-b border-gray-300 lg:border-b-0'
          : 'bg-[#faf9f6]/95 backdrop-blur-md border-b border-gray-300'
        } sticky md:fixed top-0 z-50 font-['Playfair_Display'] transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <Link href="/" className="flex items-center space-x-2 md:space-x-3">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src="/logo2.jpg"
              width={50}
              height={50}
              alt="Law Firm Logo"
              className="md:w-[60px] md:h-[60px] object-cover rounded-md border border-gray-300 shadow-sm"
            />
          </motion.div>
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 leading-tight uppercase">
              Indian Law Masters
            </h1>
            <p className="text-xs md:text-sm text-gray-600 italic">
              Advocates & Legal Consultants
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-[17px]">
          {nav.map((item, i) =>
            item.submenu ? (
              <div key={i} className="relative group">
                <button className="text-gray-800 hover:text-[#C5A25A] transition-colors font-semibold text-lg flex items-center gap-1">
                  {item.label}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Main Dropdown */}
                <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40 ">
                  {item.submenu.map((sub, j) => (
                    sub.submenu ? (
                      <div key={j} className="relative group/sub">
                        <div className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#C5A25A] transition-colors border-b border-gray-100 cursor-pointer">
                          <span>{sub.label}</span>
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </div>

                        {/* High Courts Submenu */}
                        <div className="absolute right-full top-0 w-96 bg-white border border-gray-200 shadow-xl rounded-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50 mr-1 overflow-hidden">
                          <div className="p-4">
                            <div className="text-sm font-semibold text-gray-500 mb-4">State High Courts</div>
                            <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                              {sub.submenu
                                .slice()
                                .sort((a, b) => {
                                  if (a.label === "Delhi High Court") return -1;
                                  if (b.label === "Delhi High Court") return 1;
                                  return a.label.localeCompare(b.label);
                                })
                                .map((subsub, k) => (
                                  <a
                                    key={k}
                                    href={subsub.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#C5A25A] transition-colors rounded-md border border-gray-100 hover:border-gray-300 hover:shadow-sm"
                                    title={subsub.label}
                                  >
                                    {subsub.label}
                                  </a>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      sub.href?.startsWith("http") ? (
                        <a
                          key={j}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#C5A25A] transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          {sub.label}
                        </a>
                      ) : (
                        <Link
                          key={j}
                          href={sub.href}
                          className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#C5A25A] transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          {sub.label}
                        </Link>
                      )
                    )
                  ))}
                </div>
              </div>
            ) : (
              item.href && (
                <Link
                  key={i}
                  href={item.href}
                  target={item.href?.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="relative text-gray-800 hover:text-[#C5A25A] transition-colors duration-300 font-semibold text-lg"
                >
                  {item.label}
                  <motion.div
                    className="absolute left-0 bottom-0 h-[2px] bg-[#C5A25A] w-full origin-left scale-x-0"
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              )
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => {
            setOpen(!open);
            // menu band karte time submenus reset
            if (open) {
              setOpenSubmenu(null);
              setOpenSubSubmenu(null);
            }
          }}
          className="lg:hidden p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-inner max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden"
          >
            <ul className="flex flex-col py-3 px-4 space-y-1">
              {nav.map((item, i) =>
                item.submenu ? (
                  <div key={i}>
                    <button
                      onClick={() =>
                        setOpenSubmenu(openSubmenu === i ? null : i)
                      }
                      className="w-full text-left flex items-center justify-between font-semibold text-gray-800 py-3 px-3 rounded hover:bg-gray-50"
                    >
                      <span className="text-base md:text-lg">{item.label}</span>
                      <svg
                        className={`h-4 w-4 md:h-5 md:w-5 text-gray-600 transform transition-transform ${openSubmenu === i ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {openSubmenu === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-2 pl-3 border-l border-gray-200 space-y-1 py-2 max-h-60 overflow-y-auto"
                        >
                          {item.submenu.map((sub, j) => (
                            sub.submenu ? (
                              <div key={j}>
                                <button
                                  onClick={() =>
                                    setOpenSubSubmenu(
                                      openSubSubmenu === `${i}-${j}` ? null : `${i}-${j}`
                                    )
                                  }
                                  className="w-full text-left flex items-center justify-between text-sm md:text-base font-medium text-gray-700 py-2 px-3 rounded hover:bg-gray-50"
                                >
                                  <span>{sub.label}</span>
                                  <svg
                                    className={`h-3 w-3 md:h-4 md:w-4 text-gray-600 transform transition-transform ${openSubSubmenu === `${i}-${j}` ? 'rotate-180' : 'rotate-0'}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </button>

                                <AnimatePresence>
                                  {openSubSubmenu === `${i}-${j}` && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="ml-2 pl-2 border-l border-gray-200 space-y-1 py-1 max-h-40 overflow-y-auto"
                                    >
                                      {sub.submenu
                                        .slice()
                                        .sort((a, b) => {
                                          if (a.label === "Delhi High Court") return -1;
                                          if (b.label === "Delhi High Court") return 1;
                                          return a.label.localeCompare(b.label);
                                        })
                                        .map((subsub, k) => (
                                          <a
                                            key={k}
                                            href={subsub.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-sm font-medium text-gray-600 hover:text-[#C5A25A] py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                                            onClick={() => {
                                              setOpen(false);
                                              setOpenSubmenu(null);
                                              setOpenSubSubmenu(null);
                                            }}
                                          >
                                            {subsub.label}
                                          </a>
                                        ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
                              sub.href?.startsWith("http") ? (
                                <a
                                  key={j}
                                  href={sub.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-gray-800 hover:text-[#C5A25A] transition-colors py-3 px-3 rounded hover:bg-gray-50 text-base md:text-lg font-semibold"
                                  onClick={() => {
                                    setOpen(false);
                                    setOpenSubmenu(null);
                                  }}
                                >
                                  {sub.label}
                                </a>
                              ) : (
                                <Link
                                  key={j}
                                  href={sub.href}
                                  className="block text-gray-800 hover:text-[#C5A25A] transition-colors py-3 px-3 rounded hover:bg-gray-50 text-base md:text-lg font-semibold"
                                  onClick={() => {
                                    setOpen(false);
                                    setOpenSubmenu(null);
                                  }}
                                >
                                  {sub.label}
                                </Link>
                              )
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  item.href && (
                    <Link
                      key={i}
                      href={item.href}
                      target={item.href?.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="block text-gray-800 hover:text-[#C5A25A] transition-colors py-3 px-3 rounded hover:bg-gray-50 text-base md:text-lg font-semibold"
                      onClick={() => {
                        setOpen(false);
                        setOpenSubmenu(null);
                        setOpenSubSubmenu(null);
                      }}
                    >
                      {item.label}
                    </Link>
                  )
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
