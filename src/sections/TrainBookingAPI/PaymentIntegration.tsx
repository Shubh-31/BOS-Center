"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const integrations = {
  heading: "Pre-Integrated with Indian Payment Systems",
  description:
    "BOS API eliminates months of complex integration work with ready-to-use connections to IRCTC's official booking system and all major Indian payment gateways. We maintain and continuously update these integrations to ensure you always have access to the latest features and booking capabilities.",
  sections: [
    {
      imgSrc:
        "/assets/TrainBooking/Pre-Integrated with Indian Payment Systems/Train API Integration.png",
      title: "Train API Integration",
      points: [
        "Real-time synchronization with railway reservation system",
        "Direct access to PNR generation system",
        "Integration with e-wallet for agent bookings",
        "Compliance with all IRCTC booking policies",
        "Support for IRCTC special schemes and offers",
      ],
    },
    {
      imgSrc:
        "/assets/TrainBooking/Pre-Integrated with Indian Payment Systems/Payment Gateway Integrations.png",
      title: "Payment Gateway Integrations",
      points: [
        "UPI/cards/wallets",
        "All major Indian banks for net banking",
        "Payment gateway",
        "Wallet integration",
      ],
    },
    {
      imgSrc:
        "/assets/TrainBooking/Pre-Integrated with Indian Payment Systems/Additional Indian Market Integrations.png",
      title: "Additional Indian Market Integrations",
      points: [
        "SMS gateways for PNR and booking confirmations",
        "Aadhaar verification for certain quota bookings",
        "Indian Railways inquiry systems",
        "Train running status APIs",
      ],
    },
  ],
};

export default function PaymentIntegration() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50/60">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold text-gray-900"
        >
          {integrations.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-gray-700 max-w-3xl mx-auto"
        >
          {integrations.description}
        </motion.p>
      </div>

      {/* Cards */}
      <div className="flex justify-center">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          {integrations.sections.map((section, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 shadow-md hover:shadow-blue-200/60 text-left"
            >
              <div className="flex items-center gap-2 mb-4">
                <Image src={section.imgSrc} alt={section.title} width={100} height={100} className="w-8 h-auto" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                {section.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-orange-400 font-semibold mr-2">
                      ●
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
