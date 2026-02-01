"use client";

import { motion } from "framer-motion";

export default function TransparentPricingSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-2xl shadow-md">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
        Transparent Pricing for Indian Travel Businesses
      </h2>

      {/* Startup-Friendly Model */}
      <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center gap-3 md:hidden">
            <img
              src="/assets/FlightTicketBooking/Transparent Pricing for Indian Travel Businesses/Startup-Friendly Model.png"
              alt="Startup-Friendly Model"
              className="w-10 h-10 object-contain"
            />
            Startup-Friendly Model
          </h3>

          <h3 className="hidden md:block text-2xl font-semibold text-blue-500 mb-4">
            Startup-Friendly Model
          </h3>

          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="text-blue-500 font-bold mt-1">●</span> Lowest
              setup or integration fees to get started
            </li>
            <li>
              <span className="text-blue-500 font-bold mt-1">●</span>
              Pay-per-booking transaction model
            </li>
            <li>
              <span className="text-blue-500 font-bold mt-1">●</span>
              Competitive pricing starting from ₹50–150 per domestic booking
            </li>
            <li>
              <span className="text-blue-500 font-bold mt-1">●</span>
              Volume-based discounts for growing businesses
            </li>
            <li>
              <span className="text-blue-500 font-bold mt-1">●</span>Free
              sandbox environment for unlimited testing
            </li>
            <li>
              <span className="text-blue-500 font-bold mt-1">●</span>No hidden
              charges or surprise fees
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 p-4 pr-12 md:pr-20 mr-4 md:mr-10">
          <img
            src="/assets/FlightTicketBooking/Transparent Pricing for Indian Travel Businesses/Startup-Friendly Model.png"
            alt="Startup-Friendly Model"
            className="w-44 h-auto object-contain"
          />
        </div>
      </div>

      {/* Volume-Based Discounts */}
      <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">
            Volume-Based Discounts
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="text-blue-500 font-bold mr-1">●</span>0–500
              bookings/month: Standard pricing
            </li>
            <li>
              <span className="text-blue-500 font-bold mr-1">●</span>500–2000
              bookings/month: 10% discount
            </li>
            <li>
              <span className="text-blue-500 font-bold mr-1">●</span>2000–5000
              bookings/month: 20% discount
            </li>
            <li>
              <span className="text-blue-500 font-bold mr-1">●</span>5000+
              bookings/month: Custom enterprise pricing
            </li>
            <li>
              <span className="text-blue-500 font-bold mr-1">●</span>Special
              pricing for B2B aggregators
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 p-4 pr-12 md:pr-20 mr-4 md:mr-10">
          <img
            src="/assets/FlightTicketBooking/Transparent Pricing for Indian Travel Businesses/Volume-Based Discounts.png"
            alt="Volume-Based Discounts"
            className="w-44 h-auto object-contain"
          />
        </div>
      </div>

      {/* Enterprise Solutions */}
      <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">
            Enterprise Solutions
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="text-blue-500 font-bold mr-1">●</span>Custom SLA
              with guaranteed 99.9% uptime
            </li>
            <li>
              <span className="text-blue-500 font-bold mr-1">●</span>Dedicated
              account manager based in India
            </li>
            <li>
              <span className="text-blue-500 font-bold mr-1">●</span>Priority
              technical support (24x7 in Indian time zones)
            </li>
            <li>
              <span className="text-blue-500 font-bold mr-1">●</span>White-label
              customization included
            </li>
            <li>
              <span className="text-blue-500 font-bold mr-1">●</span>On-premise
              deployment option available
            </li>
            <li>
              <span className="text-blue-500 font-bold mr-1">●</span>Direct
              airline connectivity setup assistance
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 p-4 pr-12 md:pr-20 mr-4 md:mr-10">
          <img
            src="/assets/FlightTicketBooking/Transparent Pricing for Indian Travel Businesses/Enterprise Solutions.png"
            alt="Enterprise Solutions"
            className="w-44 h-auto object-contain"
          />
        </div>
      </div>

      {/* What's Included */}
      <div className="mb-10 text-center flex flex-col items-center justify-center">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">
          What&apos;s Included
        </h3>
        <p className="text-gray-700 max-w-4xl">
          All GDS and LCC integrations included | Technical documentation and
          support | Payment gateway integration support
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-8">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-md transition-transform">
            Get Custom Pricing for Your Business
          </button>
        </motion.div>
      </div>
    </section>
  );
}
