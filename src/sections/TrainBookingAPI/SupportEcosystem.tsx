"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const supportSections = [
  {
    imgSrc:
      "/assets/TrainBooking/BOS Support Ecosystem for Travel Booking Platforms/Technical.png",
    title: "Technical Support",
    points: [
      "24/7 technical support via phone, email, WhatsApp, and chat",
      "Response time: <1 hour during tatkal windows, <2 hours otherwise",
      "Dedicated integration engineers during setup phase",
      "Regular API updates with advance notifications",
      "Support in Hindi and regional languages available",
      "Emergency support during festival season rushes",
    ],
  },
  {
    imgSrc:
      "/assets/TrainBooking/BOS Support Ecosystem for Travel Booking Platforms/Business.png",
    title: "Business & Operational Support",
    points: [
      "Strategic guidance for railway booking platforms",
      "Help with GST compliance for train ticket bookings",
    ],
  },
  {
    imgSrc:
      "/assets/TrainBooking/BOS Support Ecosystem for Travel Booking Platforms/Resources.png",
    title: "Resources & Documentation",
    points: [
      "Complete API documentation",
      "Sample code",
      "Postman collection for quick API testing",
      "Real-time status page for system monitoring",
      "Error code reference",
      "PNR status code explanations",
      "IRCTC policy updates and implementation guides",
    ],
  },
];

export default function SupportEcosystem() {
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
          Dedicated Support Team For Developers & Business Teams
        </motion.h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {supportSections.map((section, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-blue-200/60 relative overflow-hidden text-left"
          >
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={section.imgSrc}
                alt={section.title}
                width={100}
                height={100}
                className="w-8 h-auto"
              />
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

            {/* small arrow indicator */}
            <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-blue-500 opacity-70" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
