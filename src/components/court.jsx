"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import MissionValues from "./MissionValues";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TargetSection from "./Target";

const courts = [
  {
    name: "Supreme Court of India",
    img: "/SUPREME.jpg",
    content:
      "The Supreme Court of India is the highest judicial forum and the final court of appeal. It upholds the Constitution, protects fundamental rights, and hands down landmark judgments that shape justice and democracy across the nation.",
    highlights: [
      "Constitutional interpretation and guardian of fundamental rights",
      "Final court of appeal for civil and criminal matters",
      "Hears Public Interest Litigations that affect large groups of citizens",
    ],
    reverse: false,
    href: "https://www.sci.gov.in",
  },
  {
    name: "High Court",
    img: "/delhihighcourt.jpg",
    content:
      "High Courts operate at the state level as the principal civil courts of original jurisdiction and appellate courts for subordinate courts. They maintain judicial discipline and provide important appellate oversight across the state.",
    highlights: [
      "Appellate jurisdiction over district and lower courts",
      "Writ jurisdiction for protection of fundamental rights",
      "Supervisory and administrative oversight of subordinate judiciary",
    ],
    reverse: true,
    model: true,

  },
  {
    name: "District Court",
    img: "/ui.jpg",
    content:
      "District Courts are the foundation of India's judicial system, delivering justice at the grassroots level. They handle civil and criminal cases and ensure that the rule of law is enforced within each district.",
    highlights: [
      "Primary trial courts for civil and criminal matters",
      "Accessible local justice and dispute resolution",
      "Execution of orders and judgments at the district level",
    ],
    reverse: false,
    href: "https://ecourts.gov.in/ecourts_home/index.php",
  },
];


const submenu = [
  { href: "https://ecourts.gov.in/ecourts_home/index.php", label: "Delhi High Court" },
  { href: "https://allahabadhighcourt.in/", label: "Allahabad High Court" },
  { href: "https://bombayhighcourt.nic.in/", label: "Bombay High Court" },
  { href: "https://www.calcuttahighcourt.gov.in/", label: "Calcutta High Court" },
  { href: "https://highcourt.cg.gov.in/", label: "Chhattisgarh High Court" },
  { href: "https://ghconline.gov.in/", label: "Gauhati High Court" },
  { href: "https://gujarathighcourt.nic.in/", label: "Gujarat High Court" },
  { href: "https://highcourt.hp.gov.in/", label: "Himachal Pradesh High Court" },
  { href: "https://jkhighcourt.nic.in/", label: "Jammu & Kashmir High Court" },
  { href: "https://jharkhandhighcourt.nic.in/", label: "Jharkhand High Court" },
  { href: "https://karnatakajudiciary.kar.nic.in/", label: "Karnataka High Court" },
  { href: "https://keralajudiciary.gov.in/", label: "Kerala High Court" },
  { href: "https://www.madhyanchalhighcourt.in/", label: "Madhya Pradesh High Court" },
  { href: "https://www.mhc.tn.gov.in/", label: "Madras High Court" },
  { href: "https://meghalayahighcourt.nic.in/", label: "Meghalaya High Court" },
  { href: "https://www.hcmimphal.nic.in/", label: "Manipur High Court" },
  { href: "https://www.nagalandhighcourt.gov.in/", label: "Nagaland High Court" },
  { href: "https://orissahighcourt.nic.in/", label: "Orissa High Court" },
  { href: "https://patnahighcourt.gov.in/", label: "Patna High Court" },
  { href: "https://www.punjabhighcourt.gov.in/", label: "Punjab & Haryana High Court" },
  { href: "https://rajasthanhighcourt.nic.in/", label: "Rajasthan High Court" },
  { href: "https://sikkimhighcourt.nic.in/", label: "Sikkim High Court" },
  { href: "https://thc.nic.in/", label: "Tripura High Court" },
  { href: "https://highcourtofuttarakhand.gov.in/", label: "Uttarakhand High Court" },
]


export default function Court() {
  return (
    <>
      <section
        id="courts"
        aria-labelledby="courts-heading"
        className="bg-[#f8f6f1] text-gray-900 py-8 md:py-16 px-8 md:px-16 font-sans"
        style={{ fontFamily: "'Lora', serif" }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1
              id="courts-heading"
              className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-wide"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              The Pillars of India&apos;s Judiciary
            </h1>
            <motion.div
              className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-yellow-600 to-yellow-400"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg font-normal leading-relaxed">
              Explore the three levels of courts that form the backbone of India&apos;s legal system. Each plays a unique role — from interpreting constitutional law to delivering justice at the district level.
            </p>

          </motion.div>

          <div className="space-y-20">
            {courts.map((court, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${court.reverse ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 140 }}
                    className="overflow-hidden rounded-sm border border-[#ECECEC]"
                  >
                    <Image src={court.img} alt={court.name} width={800} height={520} priority className="object-cover w-full h-full" />
                  </motion.div>
                </div>

                <div className="md:w-1/2 space-y-4 ">
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold text-yellow-700"
                    style={{ fontFamily: "'Merriweather', serif" }}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    {court.name}
                  </motion.h2>

                  <motion.p
                    className="text-gray-700 leading-relaxed text-lg"
                    style={{ fontFamily: "'Lora', serif" }}
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    viewport={{ once: true }}
                  >
                    {court.content}
                  </motion.p>

                  {court.highlights && (
                    <ul className="mt-3 ml-4 list-disc text-gray-700">
                      {court.highlights.map((h, i) => (
                        <li key={i} className="text-sm md:text-base mb-1">
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-4">



                    {court.model ? (
                      <Dialog>
                        <DialogTrigger
                          aria-label="Open court resources dialog"
                          className="px-6 py-2 bg-black text-white hover:bg-yellow-600 transition-all duration-300"
                        >
                          Learn more →
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Menus</DialogTitle>
                            <DialogDescription className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                              {submenu.map((item, index) => (
                                <div key={index} className="py-2 border-b last:border-b-0">
                                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-500 transition-colors">
                                    {item.label}
                                  </a>
                                </div>
                              ))}


                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <a
                        href={court.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Learn more about ${court.name}`}
                        className="px-6 py-2 bg-black text-white hover:bg-yellow-600 transition-all duration-300"
                      >
                        Learn more →
                      </a>
                    )



                    }
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MissionValues />
      <TargetSection />
    </>


  );
}