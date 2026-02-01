"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const solutions = [
  {
    id: 1,
    title: "Travel Agencies (B2C & B2B)",
    imgSrc: "/assets/FlightTicketBooking/Solutions/TravelAgencies.png",
    description:
      "Build your IATA-approved travel agency booking platform with multi-city domestic search, customer profile management with PAN/Aadhaar, GST-compliant invoicing and receipts, commission tracking for IATA and non-IATA bookings, agent portal for sub-agents (B2B2C model), and mobile-responsive booking interface for Indian travelers. Integrate with your existing website or get a complete white-label solution.",
  },
  {
    id: 2,
    title: "Online Travel Agencies (OTAs)",
    imgSrc: "/assets/FlightTicketBooking/Solutions/OnlineTravelAgencies.png",
    description:
      "Launch a competitive OTA for India's domestic travel market with price comparison across GDS and LCC sources, user reviews and airline ratings, loyalty program integration (IndiGo 6E Rewards, etc.), special offers and deal management, and coupon code and cashback functionality popular with Indian travelers. Compete with MakeMyTrip, Cleartrip, and Goibibo with our robust API infrastructure.",
  },
  {
    id: 3,
    title: "Corporate Travel Management Companies",
    imgSrc:
      "/assets/FlightTicketBooking/Solutions/CorporateTravelManagementCompanies.png",
    description:
      "Empower corporate travel desks with employee travel policy enforcement, approval workflows for travel managers, travel budget and expense tracking, preferred airline and route management, unused ticket management and credit tracking, centralized billing with GST invoicing, and detailed MIS reports for CFOs and travel managers. Perfect for managing travel for IT companies, BPOs, and large enterprises across India.",
  },
  {
    id: 4,
    title: "B2B Flight Aggregators & Consolidators",
    imgSrc:
      "/assets/FlightTicketBooking/Solutions/AggregatorsConsolidators.png",
    description:
      "Build a B2B platform connecting travel agents across India with multi-level agent hierarchy (super distributor > distributor > agent), real-time credit limit management, commission slab configuration by agent tier, markup management at multiple levels, wallet and ledger system for agents, and API access for retail agents to integrate with their systems. Support 10,000+ retail agents with one unified platform.",
  },
  {
    id: 5,
    title: "Hotel & Holiday Package Providers",
    imgSrc:
      "/assets/FlightTicketBooking/Solutions/Hotel & Holiday Package Providers.png",
    description:
      "Integrate domestic flights into your holiday packages with flight + hotel dynamic packaging, complete tour package creation with multi-city flights, group booking capabilities for tour operators, special fares for holiday packages, and allocation and inventory management. Perfect for Goa packages, Kerala tours, Himachal holidays, Rajasthan circuits, and more.",
  },
  {
    id: 6,
    title: "Travel Tech Startups & SaaS Providers",
    imgSrc: "/assets/FlightTicketBooking/Solutions/SaaSProviders.png",
    description:
      "Build innovative travel products for India's growing market with flexible API access for experimentation, usage-based pricing that scales with growth, access to India's complete airline inventory, focus on your unique innovation while we handle connectivity, and launch new travel products in weeks not months. Build the next big travel startup in India.",
  },
];

export default function TravelSolutionsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
        Solutions for Every Type of Travel Business
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {solutions.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: item.id * 0.1 }}
            className="border-2 rounded-2xl p-6 bg-white transition-all duration-300 hover:border-blue-500 hover:shadow-md"
          >
            {/* Title and Image */}
            <div className="flex items-center gap-x-3 mb-3">
              {item.imgSrc && (
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              )}
              <h3 className="text-xl font-semibold text-blue-700">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
