"use client"

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { motion } from "framer-motion"
import Image from "next/image"
import { Playfair_Display, Lato } from "next/font/google"
import Link from "next/link"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] })

const slides = [
  {
    title: "Your Trusted LegalAlly",
    subtitle: "Advocate & Legal Consultant",
    description:
      "Providing strategic legal counsel and representation with integrity, precision, and a client-first approach. Every case handled with diligence and commitment to justice.",
    btn1: "Book a Consultation",
    btn2: "Our Practice Areas",
    image: "/laww.jpg",
  },
  {
    title: "Defending Rights, Delivering Justice",
    subtitle: "Committed to Ethical Advocacy",
    description:
      "We simplify complex legal matters through transparent advice, strong representation, and dependable solutions—ensuring every client feels informed and protected.",
    btn1: "Schedule a Meeting",
    btn2: "Explore Our Services",
    image: "/zz.jpg",
  },
  {
    title: "Experience. Integrity. Results.",
    subtitle: "Your Partner in Every Legal Challenge",
    description:
      "Backed by years of expertise, we combine in-depth legal knowledge with personalized strategies to safeguard your rights and achieve favorable outcomes.",
    btn1: "Get Legal Assistance",
    btn2: "Learn More",
    image: "/hn.jpg",
  },
]

const DemoHero = () => {
  return (
    <div className="w-full relative">
      <Carousel plugins={[Autoplay({ delay: 3500 })]}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <section
                className="relative bg-gradient-to-t from-[#F9F7F3] via-[#E7D9B9] to-[#D2B48C] text-[#1F1F1F] overflow-x-hidden min-h-screen" >

                <div
                  className="absolute inset-0 bg-cover bg-center lg:hidden z-0"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />


                <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-24 flex flex-col-reverse lg:flex-row items-center justify-center gap-10 z-20 min-h-screen">

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 text-center lg:text-left px-2 flex flex-col justify-center items-center lg:items-start"  >
                    <p
                      className={`${lato.className} text-[#f4cf87] md:bg-gradient-to-r md:from-[#865d03] md:via-[#9c6903] md:to-[#b97c04] md:text-transparent bg-clip-text leading-tight uppercase tracking-wider text-sm mb-3`}
                      aria-hidden={false}
                    >
                      {slide.subtitle}
                    </p>

                    <h1
                      className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl font-serif py-2 mb-4 sm:mb-6 bg-gradient-to-r from-[#865d03] via-[#9c6903] to-[#b97c04] text-transparent bg-clip-text leading-tight`}
                    >
                      {slide.title}
                    </h1>

                    <p
                      className={`${lato.className} text-white lg:text-[#1b1b1b] mb-8 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed`}
                    >
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                      <Link
                        href="/contact"
                        aria-label={`Contact - ${slide.btn1}`}
                        className={`${lato.className} inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-[#C5A25A] text-[#0B1C2A] font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200`}
                      >
                        {slide.btn1}
                      </Link>

                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="hidden lg:flex w-full md:w-1/2 justify-center md:justify-end"
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="relative w-full max-w-sm sm:max-w-md lg:max-w-[460px] h-[260px] sm:h-[380px] lg:h-[460px] overflow-hidden shadow-[0_12px_40px_rgba(2,6,23,0.45)]  "
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2A]/30 to-transparent z-10" aria-hidden />
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority
                        className="object-cover"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-[#C5A25A] hover:text-white transition" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-[#C5A25A] hover:text-white transition" />
      </Carousel>
    </div>
  )
}

export default DemoHero