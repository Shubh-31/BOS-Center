"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EnterpriseSupport() {
  const supports = [
    {
      imgSrc:
        "/assets/HotelBooking/BOS Enterprise-Grade Support for Your Success/Technical.png",
      title: "24/7 Technical Support",
      description:
        "Round-the-clock developer support via email, WhatsApp, and phone. Get assistance with integration challenges, API errors, performance optimization, or booking issues anytime.",
    },
    {
      imgSrc:
        "/assets/HotelBooking/BOS Enterprise-Grade Support for Your Success/Dedicated Account Manager.png",
      title: "Dedicated Account Manager",
      description:
        "Enterprise clients receive a dedicated account manager who understands your business objectives and provides strategic guidance on maximizing booking revenue and supplier relationships.",
    },
    {
      imgSrc:
        "/assets/HotelBooking/BOS Enterprise-Grade Support for Your Success/Regular Product Updates.png",
      title: "Regular Product Updates",
      description:
        "Benefit from continuous feature enhancements, new supplier additions, and performance improvements. All updates maintain backward compatibility with proper deprecation notices.",
    },
    {
      imgSrc:
        "/assets/HotelBooking/BOS Enterprise-Grade Support for Your Success/Priority Issue Resolution.png",
      title: "Priority Issue Resolution",
      description:
        "Enterprise plans include priority ticket handling with guaranteed response times. Critical issues receive immediate attention from senior technical staff.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-6"
        >
          BOS Enterprise-Grade Support for Your Success
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-gray-700 max-w-3xl mx-auto text-lg"
        >
          We don’t just provide an API – we become your strategic partner with
          dedicated support channels ensuring your long-term success in the
          competitive travel marketplace.
        </motion.p>
      </div>

      {/* Support Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {supports.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gray-50 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md p-8 text-left transition-all duration-300"
          >
            <Image src={item.imgSrc} alt={item.title} width={100} className="w-6 mb-2" height={100}/>
            <h3 className="text-xl font-semibold text-[#0a2540] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
