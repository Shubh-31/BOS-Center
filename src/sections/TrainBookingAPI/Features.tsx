"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const bosLeaderFeatures = [
  {
    imgSrc:
      "/assets/TrainBooking/Features That Make BOS A Leader/TravelBusinesses.png",
    title: "Designed for OTAs & Travel Businesses",
    points: [
      "Route Optimization: Special focus on golden quadrilateral routes (Delhi-Mumbai-Chennai-Kolkata-Delhi)",
      "Festival Season Readiness: Handle 20x traffic during Diwali, Holi, Durga Puja, and summer vacations",
      "Tatkal Expertise: Optimized for lightning-fast tatkal bookings with maximum success rates",
      "Regional Coverage: Full support for regional trains and tier-2/tier-3 city connectivity",
      "Station Codes: Complete database of 7,000+ station codes with autocomplete",
      "Train Numbers: All 13,000+ train numbers with schedules and routes",
    ],
  },
  {
    imgSrc:
      "/assets/TrainBooking/Features That Make BOS A Leader/APIInsights.png",
    title: "BOS Train API Insights",
    points: [
      "Popular route analysis (Delhi-Mumbai, Chennai-Bangalore, etc.)",
      "Peak vs off-peak travel patterns",
      "Train running status and delay prediction",
      "Chart preparation timing analysis",
      "Waitlist confirmation probability algorithms",
      "Cancellation refund calculations per IRCTC rules",
      "Quota availability trends and statistics",
      "Platform and coach position information",
    ],
  },
  {
    imgSrc:
      "/assets/TrainBooking/Features That Make BOS A Leader/Language.png",
    title: "Language & Localization",
    points: [
      "Interface available in Hindi and 10 regional languages",
      "Station names in local scripts",
      "SMS in regional languages",
      "Voice-based booking support (future roadmap)",
      "Support for Indian number formats and date formats",
      "Festival and holiday-aware booking suggestions",
    ],
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Features That Make BOS A Leader
        </motion.h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {bosLeaderFeatures.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-blue-200/60 relative overflow-hidden text-left"
          >
            <div className="flex items-center gap-2 mb-4">
              <Image src={feature.imgSrc} alt={feature.title} width={100} height={100} className="w-8 h-auto" />
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>

            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 font-semibold mr-2">●</span>
                  {point}
                </li>
              ))}
            </ul>

            {/* small arrow indicator */}
            <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-blue-500 opacity-70" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
