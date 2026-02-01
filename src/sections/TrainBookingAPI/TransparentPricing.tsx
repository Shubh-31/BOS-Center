"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


const pricingSections = [
  {
    imgSrc:
      "/assets/TrainBooking/Transparent Pricing for Train Booking Businesses/PayPerBooking.png",
    title: "Pay-Per-Booking Model",
    points: [
      "Lowest setup or integration fees to get started",
      "Competitive per-booking transaction fees",
      "Volume-based discounts for growing businesses",
      "No charges for search queries or PNR checks",
      "Free sandbox environment for unlimited testing",
      "No hidden charges or surprise fees",
    ],
  },
  {
    imgSrc:
      "/assets/TrainBooking/Transparent Pricing for Train Booking Businesses/VolumeBased.png",
    title: "Volume-Based Pricing Tiers",
    points: [
      "0-1000 bookings/month: Standard pricing",
      "1000-5000 bookings/month: 15% discount",
      "5000-20000 bookings/month: 25% discount",
      "20000+ bookings/month: Custom enterprise pricing",
      "Special rates for IRCTC authorized agent aggregators",
      "Seasonal volume discounts during festival periods",
    ],
  },
  {
    imgSrc:
      "/assets/TrainBooking/Transparent Pricing for Train Booking Businesses/Enterprise.png",
    title: "Enterprise Solutions",
    points: [
      "Custom SLA with guaranteed 99.9% uptime during peak periods",
      "Dedicated account manager and technical architect",
      "Priority support during tatkal booking windows",
      "White-label customization with your complete branding",
      "On-premise or dedicated cloud deployment options",
      "Custom feature development for unique requirements",
    ],
  },
  {
    imgSrc:
      "/assets/TrainBooking/Transparent Pricing for Train Booking Businesses/Included.png",
    title: "What's Included",
    points: [
      "All train booking features and quota access",
      "Real-time updates and new feature additions",
      "Complete technical documentation",
      "Email, phone, and WhatsApp support",
      "Payment gateway integration support",
      "Regular platform updates and maintenance",
    ],
  },
];

export default function TransparentPricing() {
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
          Transparent Pricing for Train Booking Businesses
        </motion.h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
        {pricingSections.map((section, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-blue-200/60 text-left"
          >
            <div className="flex items-center gap-2 mb-4">
              <Image src={section.imgSrc} alt={section.title} width={100} height={100} className="w-8 h-auto" />
              <h3 className="text-xl font-semibold text-gray-900">
                {section.title}
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              {section.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 font-semibold mr-2">●</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-full shadow-md">
          Request Custom Pricing Quote
        </button>
      </div>
    </section>
  );
}
