"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StartNowSection() {
  return (
    <section className="relative bg-blue-900 text-white py-16 px-6 overflow-hidden">
      {/* Soft spotlight glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_70%)] opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
        >
          Start Now, Scale as You Grow
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg text-white/90 mb-4"
        >
          Lowest setup fees • No monthly minimums • Pay only for successful
          bookings
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-base max-w-2xl mx-auto mb-10"
        >
          Get complete sandbox access and technical documentation at no cost.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-full shadow-lg 
                     flex items-center mx-auto gap-2 hover:shadow-2xl hover:bg-blue-50 
                     transition-all duration-300 group"
        >
          Get Started
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/4 w-2 h-2 bg-white/40 rounded-full"
      />

      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-10 right-1/3 w-3 h-3 bg-white/30 rounded-full"
      />
    </section>
  );
}
