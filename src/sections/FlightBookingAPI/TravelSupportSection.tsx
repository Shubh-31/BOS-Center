"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  {
    id: 1,
    title: "Technical Support in Indian Time Zones",
    points: [
      "24/7 technical support via phone, email, WhatsApp, and chat",
      "India-based support team understanding local requirements",
      "Response time: <2 hours for critical issues",
      "Dedicated integration engineers during setup phase",
      "Regular API updates with advance notification",
      "Proactive monitoring of airline connectivity",
    ],
  },
  {
    id: 2,
    title: "Resources & Documentation",
    points: [
      "Complete API documentation",
      "Sample code",
      "Postman collection for quick testing",
      "Webhook documentation for real-time updates",
      "Error code reference with resolution steps",
    ],
  },
];

export default function TravelSupportSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 bg-none rounded-2xl">
      <h2 className="text-3xl font-bold text-black text-center mb-10">
        BOS Support Ecosystem for Indian Travel Businesses
      </h2>

      <div className="space-y-6">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <div key={section.id} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => setActiveId(isActive ? null : section.id)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-xl font-semibold text-blue-400">
                  {section.title}
                </span>
                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-blue-500 w-6 h-6" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isActive && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 ml-6 space-y-2 text-gray-700 list-disc"
                  >
                    {section.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
