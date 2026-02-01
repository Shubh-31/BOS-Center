"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const bosFeatures = [
  {
    imgSrc:
      "/assets/TrainBooking/BOS Train API Features Designed for Indian Railway Travel Ecosystem/Train Search API & Discovery.png",
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
    imgSrc:
      "/assets/TrainBooking/BOS Train API Features Designed for Indian Railway Travel Ecosystem/Real-Time PNR Status & Tracking API.png",
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
    imgSrc:
      "/assets/TrainBooking/BOS Train API Features Designed for Indian Railway Travel Ecosystem/Real-Time Seat Availability API.png",
    title: "Real-Time Train Seat Availability API",
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
    imgSrc:
      "/assets/TrainBooking/BOS Train API Features Designed for Indian Railway Travel Ecosystem/Complete Booking Management.png",
    title: "Train Booking Management API",
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
    imgSrc:
      "/assets/TrainBooking/BOS Train API Features Designed for Indian Railway Travel Ecosystem/Tatkal Booking Optimization.png",
    title: "Tatkal Train Booking API for Instant IRCTC Ticket Reservations",
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
    imgSrc:
      "/assets/TrainBooking/BOS Train API Features Designed for Indian Railway Travel Ecosystem/Cancellation & Refund Processing.png",
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
    imgSrc:
      "/assets/TrainBooking/BOS Train API Features Designed for Indian Railway Travel Ecosystem/Payment Integration For Businesses.png",
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
    imgSrc:
      "/assets/TrainBooking/BOS Train API Features Designed for Indian Railway Travel Ecosystem/Complete Reporting & Analytics.png",
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
];

export default function TrainAPIFeatures() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50/30 to-blue-100/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          BOS Train Booking API Features Designed For Indian Railway Travel
          Ecosystem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto"
        >
          BOS train booking solution comes equipped with features specifically
          designed for Indian Railways&apos; unique booking requirements. From basic
          train search to advanced quota management, we&apos;ve built everything
          you need to launch and scale your railway ticket booking platform.
        </motion.p>
      </div>

      <div className="flex justify-center">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {bosFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-blue-200/60 text-left"
            >
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-8 h-auto"
                  width={100}
                  height={100}
                />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
