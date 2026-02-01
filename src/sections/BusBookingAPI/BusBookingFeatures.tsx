"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BusBookingFeatures() {
  const sections = [
    {
      imgSrc:
        "/assets/BusBooking/BOS Feature Designed For Enterprise-Grade Bus Bookings/Bus Search API.png",
      title: "Bus Search API",
      points: [
        "Advanced route search: Search by city pairs, boarding points, dropping points, or specific operators.",
        "Smart filters: Filter by bus type (AC/Non-AC, Sleeper/Seater), departure time, price range, and ratings.",
        "Route recommendations: AI-powered suggestions for alternative routes and nearby boarding points.",
        "Live tracking integration: Real-time GPS tracking for supported operators.",
      ],
    },
    {
      imgSrc:
        "/assets/BusBooking/BOS Feature Designed For Enterprise-Grade Bus Bookings/Bus Booking Management API.png",
      title: "Bus Booking Management API",
      points: [
        "Interactive seat selection: Visual seat maps with real-time seat availability for upper/lower berths.",
        "Multiple passenger support: Book up to 6 passengers in a single transaction.",
        "Boarding point selection: Choose from multiple pickup and drop locations along the route.",
        "Hold & block seats: Temporary seat blocking during checkout to prevent double booking.",
        "Guest and user bookings: Support both logged-in users and guest checkout flows.",
      ],
    },

    {
      imgSrc:
        "/assets/BusBooking/BOS Feature Designed For Enterprise-Grade Bus Bookings/Ticket Management.png",
      title: "Ticket Management",
      points: [
        "Automated e-ticket generation: PDF tickets with QR codes and booking details.",
        "SMS & Email delivery: Instant confirmation messages with download links.",
        "WhatsApp integration: Send tickets directly via WhatsApp Business API.",
        "Booking modifications: Change boarding points or passenger details pre-departure.",
        "Digital boarding pass: Mobile-friendly passes for contactless boarding.",
      ],
    },
    {
      imgSrc:
        "/assets/BusBooking/BOS Feature Designed For Enterprise-Grade Bus Bookings/Cancellation & Refunds.png",
      title: "Cancellation & Refunds",
      points: [
        "Automated refund calculation: Calculate refunds based on operator-specific cancellation policies.",
        "Partial cancellations: Cancel individual passengers from group bookings.",
        "Instant refund processing: Direct-to-source refunds within 24–48 hours.",
        "Cancellation tracking: Real-time status updates for refund processing.",
        "Policy display: Show clear cancellation terms before booking.",
      ],
    },
    {
      imgSrc:
        "/assets/BusBooking/BOS Feature Designed For Enterprise-Grade Bus Bookings/Reporting & Analytics.png",
      title: "Reporting & Analytics",
      points: [
        "Transaction reports: Detailed booking, cancellation, and revenue reports.",
        "Operator performance: Track success rates and average booking values by operator.",
        "Route analytics: Identify top-performing routes and seasonal trends.",
        "Customer insights: Booking patterns, repeat customer analysis, and cohort reports.",
        "Reconciliation dashboard: Automated settlement tracking with operator payments.",
      ],
    },
    {
      imgSrc:
        "/assets/BusBooking/BOS Feature Designed For Enterprise-Grade Bus Bookings/Payment Integration.png",
      title: "Payment Integration",
      points: [
        "Multi-payment gateway support.",
        "UPI/Digital wallets.",
        "Debit/Credit cards.",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0a2540] text-center"
        >
          BOS Enterprise-Grade Bus Ticket Booking API Solution For Travel
          Businesses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-700 text-lg text-center max-w-3xl mx-auto"
        >
          Built for scale and reliability, our bus booking solution comes with
          production-ready features that eliminate months of development time.
          Every component is designed to handle high-volume traffic while
          maintaining lightning-fast performance.
        </motion.p>

        {/* Feature Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100 hover:border-[#0a2540] transition"
            >
              <span className="flex items-center gap-x-3">
                <Image
                  src={section.imgSrc}
                  alt={section.title}
                  width={28}
                  height={28}
                  className="object-contain mb-2"
                />
                <h3 className="text-2xl font-semibold text-[#0a2540] mb-0">
                  {section.title}
                </h3>
              </span>

              <ul className="space-y-2 text-gray-700">
                {section.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#0a2540] font-semibold mr-2">●</span>
                    <span>{point}</span>
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
