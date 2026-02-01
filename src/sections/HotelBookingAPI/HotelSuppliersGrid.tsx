"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const contentWithHeadingsAndPoints = [
  {
    heading2: "Connected to the India's Leading Hotel Suppliers & Distributors",
    heading2Para:
      "BOS hotel booking solution aggregates inventory from multiple distribution systems, bed banks, hotel chains, and independent suppliers, giving you access to the widest range of properties at competitive prices.",
    points: [
      {
        heading3: "Major Hotel Chains",
        heading3Para:
          "Direct connections with Marriott, Hilton, IHG, Accor, Hyatt, and 50+ hotel chains for preferential rates and instant confirmations.",
        imgSrc:
          "/assets/HotelBooking/Connected to the India's Leading Hotel Suppliers & Distributors/Major Hotel Chains.png",
      },
      {
        heading3: "Global Distribution Systems",
        heading3Para:
          "Integrated with Amadeus, Sabre, and Travelport GDS for access to corporate negotiated rates and global hotel inventory.",
        imgSrc:
          "/assets/HotelBooking/Connected to the India's Leading Hotel Suppliers & Distributors/Global Distribution Systems.png",
      },
      {
        heading3: "Bed Banks & Wholesalers",
        heading3Para:
          "Partnership with leading bed banks including Hotelbeds, Webbeds, and Tourico for competitive net rates and exclusive deals.",
        imgSrc:
          "/assets/HotelBooking/Connected to the India's Leading Hotel Suppliers & Distributors/Bed Banks & Wholesalers.png",
      },
      {
        heading3: "Independent Hotels",
        heading3Para:
          "Direct integrations with independent properties and boutique hotel groups for unique accommodation options.",
        imgSrc:
          "/assets/HotelBooking/Connected to the India's Leading Hotel Suppliers & Distributors/Independent Hotels.png",
      },
      {
        heading3: "Alternative Accommodations",
        heading3Para:
          "Access vacation rentals, serviced apartments, hostels, and unique stays beyond traditional hotels. We continuously expand our supplier network based on customer demand and market opportunities. New suppliers are added monthly to ensure comprehensive coverage.",
        imgSrc:
          "/assets/HotelBooking/Connected to the India's Leading Hotel Suppliers & Distributors/Alternative Accommodations.png",
      },
    ],
  },
];

export default function HotelSuppliersGrid() {
  const data = contentWithHeadingsAndPoints[0];

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
            className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl 
      transition-all duration-500 w-full sm:w-[48%] md:w-[30%] max-w-sm text-center p-6 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="mb-4">
              <Image
                src={point.imgSrc}
                alt={point.heading3}
                width={200}
                height={200}
                className="mx-auto rounded-xl object-contain w-36 h-36 transition-transform duration-500 hover:scale-105"
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
