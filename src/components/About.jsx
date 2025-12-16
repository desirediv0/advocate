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

      {/* Grid Section 1: Our Philosophy & My Commitment */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Philosophy */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1526] mb-4">
                Our Philosophy
              </h2>
              <ul className="space-y-3 text-base sm:text-lg text-gray-700 mb-4">
                <li>Justice is a right, not a privilege.</li>
                <li>Every client deserves transparent, ethical, and dedicated representation.</li>
                <li>Preparation and strategy form the backbone of effective litigation.</li>
                <li>Collaborative teamwork strengthens our ability to deliver results.</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                We are committed to providing high-quality legal services under one roof—rooted in professionalism, ethical practice, and client-focused solutions. Every case is examined with precision, prepared to the highest standards, and approached with courage, clarity, and compassion.
              </p>
            </div>

            {/* My Commitment */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1526] mb-4">
                My Commitment
              </h2>
              <p className="text-lg text-[#C5A25A] font-semibold mb-4">
                As Founder & Lead Counsel, I ensure that:
              </p>
              <ul className="space-y-3 text-base sm:text-lg text-gray-700 mb-4">
                <li>Every brief receives thorough research and strategic depth.</li>
                <li>Clients are guided with clarity, honesty, and timely advice.</li>
                <li>The team works with discipline, coordination, and professional excellence.</li>
                <li>Justice remains the central force guiding every action we take.</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 italic">
                Indian Law Masters is not just a firm; it is a commitment to strengthening the justice system and empowering society through effective legal advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section 2: A Message from the Founder */}
      <section className="py-12 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1526] mb-4">
                A Message from the Founder
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700 italic mb-4">
                &quot;Advocacy is not just our profession — it is our duty. At Indian Law Masters, we fight every case with courage, preparation, and conviction, because justice for our clients is our greatest responsibility.&quot;
              </p>
              <p className="text-xl sm:text-2xl font-bold text-[#0b1526]">
                JITENDER SOLANKI
              </p>
              <p className="text-base sm:text-lg text-[#C5A25A] font-semibold">
                Advocate (LL.M.)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
