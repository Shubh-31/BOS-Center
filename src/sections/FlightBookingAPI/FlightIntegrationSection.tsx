"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function FlightIntegrationsSection() {
  const sections = [
    {
      title: "GDS Integrations",
      imgSrc: "/assets/FlightTicketBooking/LCCProviders/GDSIntegrations.png",
      points: [
        "<strong>Amadeus India</strong> - Complete domestic inventory access with NDC support",
        "<strong>Sabre India</strong> - Real-time availability and booking for full-service carriers",
        "<strong>Travelport India (Galileo/Apollo)</strong> - Comprehensive GDS content for travel agencies",
        "<strong>Abacus India</strong> - Regional GDS focus for Indian and Asian airlines",
      ],
    },
    {
      title: "LCC Direct Integrations",
      imgSrc:
        "/assets/FlightTicketBooking/LCCProviders/LCCDirectIntegrations.png",
      points: [
        "<strong>IndiGo (6E)</strong> - Direct XML/JSON API with all fare families",
        "<strong>SpiceJet (SG)</strong> - Real-time booking API with ancillary support",
        "<strong>Air Asia India (I5)</strong> - Complete API access with loyalty integration",
        "<strong>Go First (G8)</strong> - Direct connectivity for all routes",
        "<strong>Akasa Air (QP)</strong> - New-generation API with modern features",
      ],
    },
    {
      title: "Payment Gateway Integrations",
      imgSrc:
        "/assets/FlightTicketBooking/LCCProviders/PaymentGatewayIntegrations.png",
      points: [
        "All major Indian banks for net banking",
        "UPI gateways (NPCI-approved)",
        "International card processors (Visa, Mastercard)",
      ],
    },
    {
      title: "Additional Indian Market Integrations",
      imgSrc:
        "/assets/FlightTicketBooking/LCCProviders/IndianMarketIntegrations.png",
      points: [
        "GST compliance and invoice generation systems",
        "Indian travel insurance providers (ICICI Lombard, Digit, etc.)",
        "SMS gateways for Indian mobile operators",
        "PAN verification services",
        "Aadhaar-based identity verification (where required)",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Pre-Integrated with Leading Indian GDS and LCC Providers
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
          Our domestic flight solution eliminates months of complex integration
          work with ready-to-use connections to all major airline and payment
          channels. Stay updated with the latest fares, airline policies, and
          booking systems—all maintained by BOS.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={section.imgSrc}
                  alt={section.title}
                  width={28}
                  height={28}
                  className="w-7 h-7 mr-3 object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-2 text-gray-700 text-sm leading-relaxed text-left">
                {section.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold mt-1">●</span>
                    <span dangerouslySetInnerHTML={{ __html: point }} />
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
