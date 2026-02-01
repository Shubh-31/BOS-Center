"use client";

import { motion } from "framer-motion";

export default function TravelManagement() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-[#0a2540]"
        >
          Travel Management & Travel APIs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto"
        >
          Simplify and scale your travel business with our suite of Travel
          Management Platform and Travel APIs. Whether you&apos;re building a booking
          platform or integrating with third-party systems, our APIs are
          designed for performance, flexibility, and ease of integration.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto">
        <ul className="space-y-4 text-left">
          {[
            {
              title: "Flight Booking API",
              desc: "Real-time access to domestic flight bookings.",
            },
            {
              title: "Train Booking API",
              desc: "Seamless train search, availability, and ticketing integration.",
            },
            {
              title: "Bus Booking API",
              desc: "Connect with major bus operators for easy ticketing and scheduling.",
            },
            {
              title: "Hotel Booking API",
              desc: "Browse and book hotels across India with live availability and pricing.",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start bg-white shadow-sm rounded-2xl p-4 border border-gray-100 hover:border-[#0a2540] transition"
            >
              <span className="text-[#0a2540] font-bold mr-3 text-xl">●</span>
              <div>
                <h3 className="text-lg font-semibold text-[#0a2540]">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
