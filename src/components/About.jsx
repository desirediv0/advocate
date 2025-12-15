"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage({ show }) {
  return (
    <div className="bg-white text-black font-sans overflow-x-hidden">
      {show && (
        <section className="py-5 bg-white text-center px-4 sm:px-6 relative overflow-x-hidden">
          <motion.div className="relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 id="about-heading" className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 tracking-wide text-[#C5A25A]">
              About Our Chambers
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-700 font-light">
              Dedicated to upholding justice, integrity, and unwavering advocacy for our clients.
            </p>
          </motion.div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(197,162,90,0.2)_0%,transparent_60%)] pointer-events-none -z-10"></div>
        </section>
      )}

      <section aria-labelledby="about-heading" className="py-8 px-4 sm:px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-[260px] sm:h-[360px] md:h-[580px] overflow-hidden shadow-xl border border-[#C5A25A]/20">
              <Image
                src="/jitender-solanki.jpeg"
                alt="Advocate Portrait"
                width={800}
                height={500}
                priority
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Founder Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl sm:text-4xl text-[#0b1526] mb-3">
              Meet Our Founder
            </h3>

            <p className="mb-4 text-base sm:text-lg leading-relaxed text-black">
            Indian Law Masters was founded with a clear mission—to deliver justice
through fearless advocacy, strategic litigation, and unwavering commitment
to clients’ rights. With nearly two decades of practice before the Hon’ble
Supreme Court, Delhi High Court, District Courts, Tribunals, and various
judicial forums, my journey as an advocate has taught me one truth: every
client deserves honest advice, meticulous preparation, and representation
that stands firm in the face of challenges.
            </p>

            <p className="mb-4 text-base sm:text-lg leading-relaxed text-black">
            Over the years, I have handled a wide spectrum of matters—Criminal, Civil,
Matrimonial, Family, Property, Commercial, Corporate, and Constitutional
disputes. This experience shaped my belief that true advocacy is rooted in
integrity, preparation, and an unshakeable resolve to fight for justice.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-black">
            Indian Law Masters operates as a full-service litigation chamber driven by a
team of dedicated advocates who share these values. Together, we combine
legal knowledge, courtroom experience, and research-driven strategy to
secure the most favorable outcomes for individuals, businesses, and
institutions.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
