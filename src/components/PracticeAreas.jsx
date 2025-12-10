'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const practiceAreas = [
  {
    id: 'civil-and-commercial-litigation',
    title: 'Civil & Commercial Litigation',
    description: 'Our experienced litigation team handles complex civil and commercial disputes with strategic approach and in-depth knowledge of Indian legal system. We provide comprehensive representation in courts at all levels.',
    image: '/img1.jpg',
    services: [
      'Property Disputes & Real Estate Litigation',
      'Contract Disputes & Breach of Agreement',
      'Commercial Litigation & Business Disputes',
      'Tort Claims & Personal Injury Cases',
      'Recovery Suits & Debt Collection',
      'Injunction Matters & Interim Relief'
    ],
    keyPoints: [
      'Experienced in High Court & Supreme Court matters',
      'Strategic case management and timeline adherence',
      'Strong negotiation and settlement capabilities',
      'Comprehensive legal research and documentation'
    ]
  },
  {
    id: 'criminal-law',
    title: 'Criminal Law',
    description: 'We provide robust criminal defense services with extensive experience in defending complex criminal cases. Our team ensures thorough preparation and aggressive representation to protect your rights.',
    image: '/img2.jpg',
    services: [
      'Criminal Defense & Representation',
      'Bail Applications & Anticipatory Bail',
      'White Collar Crimes Defense',
      'Economic Offenses & Financial Crimes',
      'PMLA Cases & Money Laundering Defense',
      'Appeal Matters & Revision Petitions'
    ],
    keyPoints: [
      'Expert knowledge of criminal procedure',
      'Strong track record in bail applications',
      'Specialized in economic offense cases',
      'Thorough case preparation and evidence analysis'
    ]
  },
  {
    id: 'matrimonial-and-family-law-disputes',
    title: 'Matrimonial & Family Law Disputes',
    description: 'Our family law practice focuses on sensitive handling of matrimonial disputes with emphasis on amicable resolution while protecting our client\'s interests and family welfare.',
    image: '/img3.jpg',
    services: [
      'Divorce Proceedings & Mutual Consent',
      'Child Custody & Visitation Rights',
      'Maintenance & Alimony Matters',
      'Property Settlement & Division',
      'Domestic Violence Cases',
      'Adoption & Guardianship Proceedings'
    ],
    keyPoints: [
      'Compassionate and confidential approach',
      'Focus on child welfare and family interests',
      'Expert in mediation and settlement',
      'Quick resolution of matrimonial disputes'
    ]
  },
  {
    id: 'constitutional-law',
    title: 'Constitutional Law',
    description: 'We specialize in constitutional matters, fundamental rights protection, and public interest litigation with extensive experience in Supreme Court and High Court constitutional benches.',
    image: '/img4.jpg',
    services: [
      'Writ Petitions (Habeas Corpus, Mandamus, Certiorari)',
      'Public Interest Litigation (PIL)',
      'Fundamental Rights Cases',
      'Constitutional Interpretation Matters',
      'Judicial Review of Government Actions',
      'Administrative Law & Service Matters'
    ],
    keyPoints: [
      'Supreme Court constitutional law expertise',
      'Strong understanding of fundamental rights',
      'Experience in public interest matters',
      'Strategic approach to constitutional challenges'
    ]
  },
  {
    id: 'money-laundering---cyber-crime',
    title: 'Money Laundering / Cyber Crime',
    description: 'Specialized practice in financial crimes, cyber security law, and digital forensics with deep understanding of modern technological challenges and regulatory compliance.',
    image: '/ui.jpg',
    services: [
      'PMLA Defense & Money Laundering Cases',
      'Cyber Crime Investigation & Defense',
      'Digital Forensics & Electronic Evidence',
      'Data Protection & Privacy Law',
      'IT Act Violations & Cyber Security',
      'Financial Crime Compliance & Advisory'
    ],
    keyPoints: [
      'Technical expertise in digital evidence',
      'Understanding of financial crime regulations',
      'Experience with ED and cyber crime cells',
      'Modern approach to technological legal issues'
    ]
  }, {
    id: "alternate-dispute-resolution",
    title: "Alternate Dispute Resolution",
    description: "We offer comprehensive services in alternative dispute resolution (ADR) methods, including mediation and arbitration, to help clients resolve conflicts efficiently and amicably.",
    image: "/hii.jpg",
    services: [
      'Mediation & Conciliation',
      'Arbitration Proceedings',
      'Negotiation Strategies',
      'Dispute Resolution Consulting',
      'Family Mediation',
      'Commercial Mediation'
    ],
    keyPoints: [
      'Expertise in various ADR mechanisms',
      'Focus on amicable and cost-effective solutions',
      'Strong negotiation and communication skills',
      'Experience in cross-border disputes'
    ]
  }

];

export default function PracticeAreas() {
  return (
    <div className="min-h-screen bg-[#f8f6f1]">
      {/* Header Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">Practice Areas</h1>
            <motion.div
              className="h-1 w-24 mx-auto bg-white mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <p className="text-xl md:text-2xl text-yellow-600 max-w-3xl mx-auto">
              Comprehensive legal services across multiple practice areas with expert representation and personalized solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Practice Areas Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.id}
              id={area.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={area.image}
                    alt={area.title}
                    width={600}
                    height={400}
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 space-y-6">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-[#C5A25A]"
                  initial={{ x: index % 2 === 1 ? 30 : -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {area.title}
                </motion.h2>

                <motion.p
                  className="text-gray-700 text-lg leading-relaxed"
                  initial={{ x: index % 2 === 1 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {area.description}
                </motion.p>

                {/* Services Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-md"
                >

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {area.services.map((service, idx) => (
                      <div key={idx} className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-[#C5A25A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>




              </div>
            </motion.div>
          ))}
        </div>
      </div>




      {/* Contact CTA Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discuss Your Legal Matter?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our experienced legal team is ready to provide you with comprehensive solutions tailored to your specific needs.
              Contact us today for a detailed consultation and let us help you navigate your legal challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#C5A25A] hover:bg-[#B8944E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                href="mailto:Indianlawmasters@gmail.com"
                className="border-2 border-[#C5A25A] text-[#C5A25A] hover:bg-[#C5A25A] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Email: Indianlawmasters@gmail.com
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}