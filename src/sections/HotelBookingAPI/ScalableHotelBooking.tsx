"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const material = [
  {
    heading2:
      "Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms",
    heading2Para:
      "From established online travel agencies to innovative hospitality platforms, our hotel booking solution adapts to your business model and scales seamlessly with your growth trajectory.",
    points: [
      {
        heading3: "Online Travel Agencies (OTAs)",
        heading3Para:
          "Build a comprehensive travel booking platform combining hotels, flights, and activities with BOS. Increase cross-sell opportunities and maximize revenue per customer with bundled offerings.",
        imgSrc:
          "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Online Travel Agencies (OTAs).png",
      },
      {
        heading3: "Travel Aggregators & Metasearch",
        heading3Para:
          "Compare rates from multiple suppliers in real-time and redirect customers to booking engines. Earn commissions through referral links while providing unbiased price comparisons.",
        imgSrc:
          "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Travel Aggregators & Metasearch.png",
      },
      {
        heading3: "Tour Operators & Travel Agencies",
        heading3Para:
          "Package hotels with tours, transfers, and sightseeing activities. Create custom itineraries with integrated hotel bookings and manage group reservations efficiently.",
        imgSrc:
          "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Tour Operators & Travel Agencies.png",
      },
      {
        heading3: "Corporate Travel Platforms",
        heading3Para:
          "Provide business travelers with policy-compliant hotel options. Implement approval workflows, cost center allocation, and detailed expense reporting for finance teams.",
        imgSrc:
          "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Corporate Travel Platforms.png",
      },
      {
        heading3: "Mobile Travel Applications",
        heading3Para:
          "Integrate hotel booking into your mobile app with responsive APIs optimized for mobile data. Support offline search caching and seamless mobile payment integration.",
        imgSrc:
          "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Mobile Travel Applications.png",
      },
      {
        heading3: "Hospitality Tech Platforms",
        heading3Para:
          "Build property management systems, channel managers, or booking engines with our extensive hotel inventory. White-label solutions for hotel chains and independent properties.",
        imgSrc:
          "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Hospitality Tech Platforms.png",
      },
      {
        heading3: "Event & Conference Platforms",
        heading3Para:
          "Offer accommodation booking for event attendees with group rate negotiation support. Manage room blocks and provide personalized booking links for conference participants.",
        imgSrc:
          "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Event & Conference Platforms.png",
      },
      {
        heading3: "Developers & SaaS Providers",
        heading3Para:
          "Integrate hotel booking capabilities into your existing software products. RESTful API with complete documentation allows rapid implementation across any tech stack.",
        imgSrc:
          "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Developers & SaaS Providers.png",
      },
    ],
  },
];

export default function ScalableHotelBookingCards() {
  const data = material[0];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          {data.heading2}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-md text-gray-600 max-w-3xl mx-auto"
        >
          {data.heading2Para}
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">
        {data.points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 
      w-full sm:w-[48%] md:w-[30%] max-w-sm text-center p-6 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="mb-4">
              <Image
                src={point.imgSrc}
                alt={point.heading3}
                width={200}
                height={200}
                className="mx-auto rounded-xl object-contain w-24 h-24 transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Text */}
            <h3 className="text-xl font-semibold text-[#0a2540] mb-2">
              {point.heading3}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {point.heading3Para}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
