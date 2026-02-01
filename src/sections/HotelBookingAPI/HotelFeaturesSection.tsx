"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const featuresData = [
  {
    imgSrc:
      "/assets/HotelBooking/BOS Enterprise-Grade Features for Hotel Booking Platforms/Advanced Hotel Search API.png",
    title: "Advanced Hotel Search API",
    points: [
      "Multi-parameter search: Search by destination, landmark, property name, coordinates, or airport codes with autocomplete suggestions",
      "Intelligent filtering: Filter by star rating, amenities (wifi, pool, parking), property type, distance from landmarks, guest ratings, and price range",
      "Smart sorting: Sort results by price, popularity, distance, star rating, or guest reviews with customizable default sorting",
      "Map-based search: Visual property selection with interactive maps showing location and nearby attractions",
      "Recently viewed hotels: Track user browsing history for personalized recommendations",
      "Similar hotels: AI-powered suggestions for alternative properties based on search preferences",
    ],
  },
  {
    imgSrc:
      "/assets/HotelBooking/BOS Enterprise-Grade Features for Hotel Booking Platforms/Hotel Booking Management API.png",
    title: "Hotel Booking Management API",
    points: [
      "Room selection: Display all available room types with detailed descriptions, images, bed configurations, and occupancy limits",
      "Rate plans: Show various rate options including non-refundable, flexible, breakfast-included, and package deals",
      "Guest information capture: Collect traveler details with validation for accurate booking processing",
      "Special requests: Allow customers to add requests like early check-in, late checkout, extra beds, or dietary preferences",
      "Hold booking: Temporary reservation holding during payment processing to prevent rate changes",
      "Multi-room bookings: Support group bookings with multiple rooms in a single transaction",
    ],
  },
  {
    imgSrc:
      "/assets/HotelBooking/BOS Enterprise-Grade Features for Hotel Booking Platforms/Payment Processing Integration.png",
    title: "Payment Processing Integration",
    points: [
      "Multiple payment gateways: Pre-integrated with AOPAY, and 20+ payment providers",
      "Payment methods: Accept credit/debit cards, UPI, net banking, digital wallets, and BNPL options",
      "Secure tokenization: PCI-DSS compliant payment handling with card tokenization for saved cards",
      "Automatic refunds: Direct-to-source refund processing for cancellations with status tracking",
    ],
  },
  {
    imgSrc:
      "/assets/HotelBooking/BOS Enterprise-Grade Features for Hotel Booking Platforms/Booking Confirmation & Communication.png",
    title: "Booking Confirmation & Communication",
    points: [
      "Instant voucher generation: Automated booking vouchers with QR codes and confirmation details",
      "Email notifications: Customizable email templates for booking confirmation, modifications, and cancellations",
      "SMS alerts: Transactional SMS for booking updates and reminders",
      "WhatsApp integration: Send booking confirmations and vouchers via WhatsApp Business API",
      "Booking modifications: Support for date changes, room upgrades, and guest detail updates pre-check-in",
      "Reminder notifications: Automated reminders before check-in date",
    ],
  },
  {
    imgSrc:
      "/assets/HotelBooking/BOS Enterprise-Grade Features for Hotel Booking Platforms/Cancellation & Modification Policies.png",
    title: "Cancellation & Modification Policies",
    points: [
      "Policy display: Clear presentation of cancellation deadlines and penalty charges before booking",
      "Automated refund calculation: Calculate refunds based on supplier-specific cancellation policies",
      "Partial cancellations: Cancel individual rooms from multi-room bookings",
      "Amendment support: Modify booking dates with automatic price adjustment",
      "Cancellation tracking: Real-time status updates for refund processing",
      "Flexible policies: Support for cancellation, non-refundable, and conditional cancellation rates",
    ],
  },
  {
    imgSrc:
      "/assets/HotelBooking/BOS Enterprise-Grade Features for Hotel Booking Platforms/Property Content & Media.png",
    title: "Property Content & Media",
    points: [
      "High-resolution images: Multiple property and room images in various sizes optimized for web and mobile",
      "Detailed descriptions: Property descriptions, room features, and amenity information",
      "Guest reviews: Aggregated reviews and ratings from verified guests across platforms",
      "Amenity lists: Complete amenity information with icons for visual representation",
      "Location information: Coordinates, address, nearby landmarks, and distance from key locations",
      "Property policies: Check-in/check-out times, age restrictions, pet policies, and house rules",
    ],
  },
  {
    imgSrc:
      "/assets/HotelBooking/BOS Enterprise-Grade Features for Hotel Booking Platforms/Analytics & Reporting Dashboard.png",
    title: "Analytics & Reporting Dashboard",
    points: [
      "Booking analytics: Track bookings, revenue, average booking value, and conversion rates",
      "Supplier performance: Compare conversion rates, cancellation rates, and average prices across suppliers",
      "Popular destinations: Identify trending destinations and high-performing properties",
      "Search analytics: Analyze search patterns, peak booking periods, and user preferences",
      "Revenue reports: Detailed revenue breakdown by supplier, destination, and time period",
      "Reconciliation tools: Automated settlement tracking and invoice management",
    ],
  },
];

export default function HotelFeaturesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#0a2540]"
        >
          BOS Enterprise-Grade Features for Hotel Booking Platforms
        </motion.h2>
        <p className="text-gray-700 mt-4 text-lg max-w-3xl mx-auto">
          Built for scale and performance, our Hotel API delivers
          production-ready features that would typically require months of
          development. Every component is optimized for high-volume operations
          while maintaining exceptional speed and reliability.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {featuresData.map((section, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-100 transition"
            >
              {/* Left section: icon + title */}
              <div className="flex items-center space-x-3">
                <Image
                  src={section.imgSrc}
                  alt={section.title}
                  width={100}
                  height={100}
                  className="w-6 h-6 object-contain"
                />
                <h3 className="text-xl font-semibold text-[#0a2540]">
                  {section.title}
                </h3>
              </div>

              {/* Right section: Chevron */}
              <ChevronDown
                className={`text-gray-600 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Accordion Content */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <ul className="space-y-2 mt-2">
                    {section.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 bg-gray-50 rounded-xl p-2"
                      >
                        <span className="text-green-600 font-bold">●</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
