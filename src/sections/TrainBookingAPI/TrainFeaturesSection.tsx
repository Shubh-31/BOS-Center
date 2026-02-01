"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const trainFeatures = {
  heading:
    "BOS Train API Features Designed for Indian Railway Travel Ecosystem",
  description:
    "BOS Train API comes equipped with features specifically designed for Indian Railways' unique booking requirements. From basic train search to advanced quota management, we've built everything you need to launch and scale your railway ticket booking platform.",
  sections: [
    {
      title: "Train Search API & Discovery",
      points: [
        "Train search between any two stations across India",
        "Flexible date search with 120-day advance booking window",
        "Filter by train type (Rajdhani, Shatabdi, Express, etc.)",
        "Sort by departure time, arrival time, duration, and fare",
        "Direct train vs connecting train options",
        "Train class availability (1AC, 2AC, 3AC, SL, 2S, CC)",
        "Real-time seat availability with color-coded status",
        "Train schedule with all station stops and timings",
      ],
    },
    {
      title: "Real-Time PNR Status & Tracking API",
      points: [
        "Instant PNR status checking with current status",
        "Live waitlist position tracking with confirmation probability",
        "Chart preparation status and final booking confirmation",
        "Passenger-wise status for group bookings",
        "Historical PNR data and prediction algorithms",
        "SMS and email notifications for status changes",
        "Integration with IRCTC's official PNR system",
        "Seat/berth number display after chart preparation",
      ],
    },
    {
      title: "Real-Time Seat Availability API",
      points: [
        "Live seat availability across all classes",
        "Real-time updates during tatkal booking windows",
        "Quota-wise availability (General, Ladies, Tatkal, etc.)",
        "Alternate train suggestions for sold-out routes",
        "Waitlist analysis and confirmation probability",
        "Current booking status (RAC, Waitlist, Confirmed)",
        "Coach-wise availability display",
        "Availability alerts and notifications",
      ],
    },
    {
      title: "Complete Booking Management",
      points: [
        "Instant train ticket booking with PNR generation",
        "Multi-passenger booking",
        "Support for all passenger categories (Adult, Child, Senior Citizen)",
        "Boarding point and destination selection",
        "Food preference selection where applicable",
        "Travel insurance integration",
        "E-ticket generation in PDF format",
        "SMS and email delivery of tickets",
      ],
    },
    {
      title: "Tatkal Booking Optimization",
      points: [
        "High-speed booking during tatkal windows",
        "Automated queue management",
        "Rapid payment processing integration",
        "Retry mechanism for failed bookings",
        "Support for AC tatkal and non-AC tatkal",
        "Maximum success rate optimization",
        "Real-time seat locking and confirmation",
        "Compliance with IRCTC tatkal booking rules",
      ],
    },
    {
      title: "Cancellation & Refund Processing",
      points: [
        "Automated cancellation request processing",
        "Real-time refund calculation based on IRCTC rules",
        "Partial cancellation support for group bookings",
        "TDR (Ticket Deposit Receipt) filing for special cases",
        "Refund tracking and status updates",
        "Bank account and UPI refund processing",
        "Cancellation charges display per IRCTC policy",
        "Timeline tracking for refund processing",
      ],
    },
    {
      title: "Payment Integration For Businesses",
      points: [
        "Support for all major Indian payment methods",
        "Credit/Debit card processing",
        "UPI integration",
        "Net banking for 50+ Indian banks",
        "Digital wallets",
        "Wallet and prepaid account support for agents",
        "PCI DSS compliant payment processing",
      ],
    },
    {
      title: "Complete Reporting & Analytics",
      points: [
        "Real-time booking dashboard with key metrics",
        "Route-wise booking analysis",
        "Revenue and commission tracking",
        "Popular train and route reports",
        "Peak vs off-peak booking trends",
        "Cancellation rate analytics",
        "Agent-wise performance reports (B2B)",
        "Custom report generation and exports",
      ],
    },
  ],
};

export default function TrainFeaturesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {trainFeatures.heading}
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {trainFeatures.description}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {trainFeatures.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-900"
              >
                <span>{section.title}</span>
                <ChevronDown
                  size={22}
                  className={`transform transition-transform ${
                    activeIndex === index ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="px-6 pb-4"
                  >
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {section.points.map((point, i) => (
                        <li key={i} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
