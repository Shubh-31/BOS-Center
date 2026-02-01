"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Mountain,
  Landmark,
  Umbrella,
  Briefcase,
} from "lucide-react";

export default function CoverageSection() {
  const coverageData = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "Metro Cities",
      description:
        "Extensive coverage in Delhi NCR, Mumbai, Bangalore, Kolkata, Chennai, Hyderabad, and Pune with thousands of properties from budget to luxury segments.",
    },
    {
      icon: <Umbrella className="w-8 h-8 text-blue-600" />,
      title: "Tourist Destinations",
      description:
        "Popular holiday spots including Goa, Kerala, Rajasthan (Jaipur, Udaipur), Himachal Pradesh (Shimla, Manali), Uttarakhand (Nainital, Mussoorie), and Kashmir.",
    },
    {
      icon: <Landmark className="w-8 h-8 text-blue-600" />,
      title: "Pilgrimage Sites",
      description:
        "Accommodation options in Varanasi, Amritsar, Tirupati, Shirdi, Haridwar, Rishikesh, Puri, and other religious destinations.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Beach Destinations",
      description:
        "Beachfront properties and resorts in Goa, Kerala beaches, Andaman & Nicobar Islands, Pondicherry, and coastal Karnataka.",
    },
    {
      icon: <Mountain className="w-8 h-8 text-blue-600" />,
      title: "Hill Stations",
      description:
        "Hotels and homestays in popular hill stations including Ooty, Coorg, Darjeeling, Munnar, Mount Abu, and Northeast India.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Business Travel Hubs",
      description:
        "Corporate-friendly hotels near business districts, IT parks, convention centers, and airports in all major commercial cities.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-6"
        >
          Extensive Coverage Across India&apos;s Top Travel Destinations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-gray-700 max-w-3xl mx-auto text-lg"
        >
          BOS hotel booking solution provides comprehensive inventory across all
          major Indian cities and emerging tourist destinations, ensuring you
          can serve domestic travelers effectively.
        </motion.p>
      </div>

      {/* Coverage Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {coverageData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md p-8 text-left transition-all duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#0a2540] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
