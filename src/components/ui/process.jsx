"use client";
import { motion } from "framer-motion";

const processSteps = [
  {
    id: 1,
    title: "Understanding",
    desc: "We devote time to listen and understand your situation so we can build a tailored strategy.",
    color: "from-[#C5A25A] to-[#E5C071]",
  },
  {
    id: 2,
    title: "Strategic Planning",
    desc: "We craft focused, practical strategies that prioritize the best outcome for your case.",
    color: "from-[#C5A25A] to-[#E5C071]",
  },
  {
    id: 3,
    title: "Implementation",
    desc: "We execute the plan decisively, communicating progress and adapting as needed.",
    color: "from-[#C5A25A] to-[#E5C071]",
  },
];

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.14 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProcessSection = () => {
  return (
    <section className="w-full bg-white text-[#0b1526] py-10 px-6  overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center mb-10 ">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#0b1526]"
        >
          Our Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-3 max-w-2xl mx-auto"
        >
          A clear, practical workflow we follow for every client — designed to be transparent,
          efficient and outcome-driven.
        </motion.p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {processSteps.map((step, idx) => (
          <motion.article
            key={step.id}
            variants={item}
            whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(2,6,23,0.12)" }}
            className="relative bg-white border border-[#F1F1F1] p-6 md:p-8 flex flex-col"
          >
            <div className="flex items-start gap-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`w-14 h-14 flex items-center justify-center font-semibold text-white bg-gradient-to-br ${step.color} shrink-0`}
                aria-hidden
              >
                <span className="text-xl">{step.id}</span>
              </motion.div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#0b1526]">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.desc}</p>
              </div>
            </div>

            <div className="mt-4 flex-1">
             
              <div className={`h-1 w-16 rounded-sm bg-gradient-to-r ${step.color} mt-auto`} />
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default ProcessSection;