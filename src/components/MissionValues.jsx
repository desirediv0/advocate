"use client";

import { motion } from "framer-motion";
import { Scale, Briefcase, BookOpen } from "lucide-react";


const MissionValues = () => {
  const container = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full bg-white text-[#0b1526] py-8 sm:py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="space-y-5"
        >
          <motion.div variants={item}>
            <h3 className="text-4xl font-semibold text-[#C5A25A]">Our Mission</h3>
            <motion.div variants={item}>
              <div className="h-[3px] w-16 bg-[#C5A25A]"></div>
            </motion.div>
            <p className="text-gray-700 text-lg leading-relaxed py-4">
              We deliver clear, ethical legal guidance to protect your rights and secure practical
              outcomes. Our mission is to make justice accessible, to act decisively when needed,
              and to support clients with integrity at every step.
            </p>
          </motion.div>



          <motion.div variants={item}>
            <p className="text-gray-600 leading-relaxed">
              We combine strategic thinking with personal attention — communicating clearly,
              managing expectations, and building legal strategies that work.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="md:border-l-4 md:border-[#C5A25A] md:pl-6"
        >
          <motion.h3 variants={item} className="text-3xl font-semibold text-[#C5A25A] mb-6 text-center md:text-left">
            Core Values
            <motion.div variants={item}>
              <div className="h-[3px] w-16 bg-[#C5A25A]"></div>
            </motion.div>
          </motion.h3>

          <motion.div variants={item} className="grid gap-5 divide-y divide-[#F1F1F1] md:divide-y-0">
            {[
              {
                icon: <Scale className="w-6 h-6 text-[#C5A25A]" />,
                title: "Justice",
                desc: "Relentless advocacy that defends your rights and delivers fair results.",
              },
              {
                icon: <Briefcase className="w-6 h-6 text-[#C5A25A]" />,
                title: "Expertise",
                desc: "Deep legal experience and tactical thinking across practice areas.",
              },
              {
                icon: <BookOpen className="w-6 h-6 text-[#C5A25A]" />,
                title: "Integrity",
                desc: "Honest advice, clear fees, and principled representation at every stage.",
              },
            ].map((value, idx) => (
              <motion.div key={idx} variants={item} className="flex items-start gap-4 py-4 md:py-0">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[#E8E8E8] bg-white text-[#C5A25A]">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-base text-[#0b1526] font-semibold mb-1">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionValues;