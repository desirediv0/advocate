"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react"

const FAQAndConsultation = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const faqs = [
    {
      q: "Why should I trust your firm for my case?",
      a: "We provide ethical, transparent, and personalized legal counsel ensuring you are fully supported throughout your legal journey.",
    },
    {
      q: "What types of cases does your law firm handle?",
      a: "Our firm handles civil, criminal, corporate, family, and property-related cases with experienced legal representation.",
    },
    {
      q: "What are your opening hours?",
      a: "We are available Monday to Saturday, 9:00 AM to 7:00 PM.",
    },
    {
      q: "Do you charge for consultations?",
      a: "We offer an initial consultation free of cost to understand your case better.",
    },
  ]

  return (
    <section className="w-full bg-white text-[#0b1526] py-16 px-6 md:px-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start overflow-x-hidden">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C5A25A] uppercase tracking-wider text-sm mb-2">Any Questions?</p>
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 overflow-hidden">
                <button
                  aria-expanded={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium hover:text-[#C5A25A] transition"
                >
                  <span className="inline-block">Q.{index + 1}: {faq.q}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-[#C5A25A]" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="px-5 pb-4 text-gray-700 bg-white"
                    >
                      <p className="leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-[#C5A25A]/12 p-6 shadow-sm"
        >
          <p className="text-[#C5A25A] mb-2 font-[Playfair_Display]">Schedule For</p>
          <h2 className="text-2xl md:text-3xl font-[Playfair_Display] mb-4">Book Your Consultation</h2>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitting(true)
              setTimeout(() => {
                setSubmitting(false)
                setSubmitted(true)
              }, 800)
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="sr-only">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-[#f8fafb] border border-gray-200 text-[#0b1526] focus:outline-none focus:ring-2 focus:ring-[#E5C071]"
              />
              <label className="sr-only">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-[#f8fafb] border border-gray-200 text-[#0b1526] focus:outline-none focus:ring-2 focus:ring-[#E5C071]"
              />
            </div>
            <label className="sr-only">Your Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Your Number"
              required
              className="w-full px-4 py-3 bg-[#f8fafb] border border-gray-200 text-[#0b1526] focus:outline-none focus:ring-2 focus:ring-[#E5C071]"
            />

            <label className="sr-only">Your Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 bg-[#f8fafb] border border-gray-200 text-[#0b1526] focus:outline-none focus:ring-2 focus:ring-[#E5C071]"
            />

            <div>
              {!submitted ? (
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#C5A25A] text-black font-semibold py-3 hover:bg-[#b8912c] transition disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "SUBMIT REQUEST →"}
                </button>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 justify-center text-green-600 font-medium">
                  <CheckCircle className="w-6 h-6" />
                  Request received — we will contact you soon
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQAndConsultation