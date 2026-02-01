"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DeveloperSupport() {
  const sections = [
    {
      imgSrc:
        "/assets/BusBooking/World-Class Support for Developers & Business Teams/TechnicalSupport.png",
      title: "24/7 Technical Support",
      desc: "Our developer support team is available round-the-clock via email, WhatsApp, and phone. Get help with integration challenges, API errors, or performance optimization anytime.",
    },
    {
      imgSrc:
        "/assets/BusBooking/World-Class Support for Developers & Business Teams/AccountManager.png",
      title: "Dedicated Account Manager",
      desc: "For enterprise clients, we assign a dedicated account manager who understands your business goals and provides strategic guidance on maximizing bus booking revenue.",
    },
    {
      imgSrc:
        "/assets/BusBooking/World-Class Support for Developers & Business Teams/ProductUpdates.png",
      title: "Regular Product Updates",
      desc: "Benefit from continuous feature additions, new operator integrations, and performance improvements. All updates are backward-compatible with proper deprecation notices.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      {/* Heading Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#0a2540]"
        >
          World-Class Support for Developers & Business Teams
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto"
        >
          We don&apos;t just provide an API – we partner with you for long-term
          success with dedicated support channels and resources.
        </motion.p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100 hover:border-[#0a2540] transition"
          >
            <Image src = {section.imgSrc} alt={section.title} width={100} height={100} className="w-6 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-[#0a2540] mb-3">
              {section.title}
            </h3>
            <p className="text-gray-700">{section.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
