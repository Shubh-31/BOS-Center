"use client";

import { motion } from "framer-motion";
import React from "react";

interface UseCase {
  title: string;
  desc: string;
}

export const FlightUseCases: React.FC = () => {
  const useCases: UseCase[] = [
    {
      title: "Online Travel Agencies",
      desc: "Power comprehensive travel portals with flight search, booking, and management capabilities. Integrate with hotel and car rental APIs for complete travel solutions.",
    },
    {
      title: "Mobile Travel Apps",
      desc: "Create feature-rich mobile applications with seamless flight booking experiences. Offline capability, push notifications, and mobile-optimized interfaces.",
    },
    {
      title: "Corporate Travel Platforms",
      desc: "Enable corporate booking tools with policy compliance, approval workflows, expense integration, and comprehensive reporting for business travelers.",
    },
    {
      title: "Travel Agent Software",
      desc: "Empower travel agents with professional booking tools, commission tracking, customer management, and back-office integration capabilities.",
    },
    {
      title: "Niche Travel Services",
      desc: "Specialized travel platforms for specific segments like business travel, leisure packages, group bookings, and destination-focused services.",
    },
    {
      title: "Partner Integration",
      desc: "White-label flight booking solutions for banks, fintech companies, loyalty programs, and other businesses expanding into travel services.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Flight API Use Cases & Applications
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Discover how businesses across the travel industry are leveraging our
          Flight Booking API to enhance their service offerings and drive
          revenue growth.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {useCases.map((item, index) => (
          <motion.div
            key={index}
            className="
              bg-white border border-gray-200 rounded-2xl shadow-md 
              hover:shadow-lg transition-all duration-300 
              p-6 flex flex-col text-center space-y-3
              w-full sm:w-[calc(50%-1rem)] lg:w-[45%]
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
