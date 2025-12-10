"use client"

import React from "react"
import { motion } from "framer-motion"
import { Scale, Gavel, FileText } from "lucide-react"
import Image from "next/image"


const TargetSection = () => {
  const items = [
    {
      icon: <Scale size={36} strokeWidth={1.5} className="text-[#C5A25A]" />,
      title: "Understand Your Needs",
      desc: "We take time to listen and build a strategy tailored to your situation.",
      img: "/hn.jpg",
    },
    {
      icon: <FileText size={36} strokeWidth={1.5} className="text-[#C5A25A]" />,
      title: "Clear Communication",
      desc: "You get timely updates and straightforward explanations at every step.",
      img: "/building.jpg",
    },
    {
      icon: <Gavel size={36} strokeWidth={1.5} className="text-[#C5A25A]" />,
      title: "Effective Outcomes",
      desc: "Focused, practical legal solutions aimed at achieving the best result.",
      img: "/ladki.jpg",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  }

  const itemAnim = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (

    <>
      <section className="w-full bg-white text-[#0b1526] py-6 md:py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#0b1526]"
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Our Focused Approach <span className="text-[#C5A25A]">for Clients</span>
            </motion.h2>

            <motion.p
              className="mt-3 text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              viewport={{ once: true }}
            >
              We combine careful preparation, clear communication, and strategic execution to secure
              outcomes that protect what matters to you.
            </motion.p>
          </div>

          <motion.div
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={itemAnim}
                className="flex flex-col bg-white border border-[#F1F1F1] hover:border-[#E6D8B2] transition-colors duration-200"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image src={item.img} alt={item.title} width={1200} height={600} className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1526]/30 to-transparent"></div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#E8E8E8] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#0b1526]">{item.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{item.desc}</p>
                  <a className="inline-block mt-auto text-[#C5A25A] font-medium" href="#">Learn more →</a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </>
  )
}

export default TargetSection