"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PerformanceSection() {
  const mainFeatures = [
    {
      imgSrc:
        "/assets/HotelBooking/Built for Performance, Reliability & Enterprise Scale/Lightning-Fast API Response.png",
      title: "Lightning-Fast API Response",
      points: [
        "Average response time under 300ms for hotel search and under 2 seconds for booking confirmations.",
        "Advanced caching and database optimization ensure consistent performance.",
      ],
    },
    {
      imgSrc:
        "/assets/HotelBooking/Built for Performance, Reliability & Enterprise Scale/Uptime.png",
      title: "99.9% Uptime SLA",
      points: [
        "Multi-region deployment with automatic failover ensures your business never stops.",
        "Load balancing and redundancy handle traffic spikes during peak booking seasons.",
      ],
    },
    {
      imgSrc:
        "/assets/HotelBooking/Built for Performance, Reliability & Enterprise Scale/Bank-Level Security.png",
      title: "Bank-Level Security",
      points: [
        "PCI DSS Level 1 certified infrastructure with end-to-end encryption.",
        "Secure payment tokenization and compliance with GDPR and data protection regulations.",
      ],
    },
    {
      imgSrc:
        "/assets/HotelBooking/Built for Performance, Reliability & Enterprise Scale/API.png",
      title: "RESTful API Architecture",
      points: [
        "Modern JSON-based API endpoints with complete documentation.",
        "Support for webhooks, pagination, filtering, and sorting for flexible integration.",
      ],
    },
    {
      imgSrc:
        "/assets/HotelBooking/Built for Performance, Reliability & Enterprise Scale/RateLimiting.png",
      title: "Rate Limiting & Throttling",
      points: [
        "Fair usage policies with generous rate limits.",
        "Request throttling prevents abuse while ensuring legitimate high-volume usage is never interrupted.",
      ],
    },
    {
      imgSrc:
        "/assets/HotelBooking/Built for Performance, Reliability & Enterprise Scale/Error Handling.png",
      title: "Error Handling",
      points: [
        "Detailed error codes and messages for easy debugging.",
        "Graceful degradation ensures partial failures don't affect the entire booking flow.",
      ],
    },
  ];

  const developerTools = [
    {
      imgSrc:
        "/assets/HotelBooking/Developer Resources & Tools/Interactive API Documentation.png",
      title: "Interactive API Documentation",
      desc: "Try all endpoints directly from documentation with real-time responses. Code samples in Python, Node.js, PHP, Java, Ruby, and .NET.",
    },
    {
      imgSrc:
        "/assets/HotelBooking/Developer Resources & Tools/Sandbox Environment.png",
      title: "Sandbox Environment",
      desc: "Full-featured testing environment with mock data and realistic responses. Test all scenarios without making actual bookings or charges.",
    },
    {
      imgSrc: "/assets/HotelBooking/Developer Resources & Tools/Libraries.png",
      title: "SDKs & Libraries",
      desc: "Official SDK libraries for popular programming languages. Postman collections for quick API exploration and testing.",
    },
    {
      imgSrc: "/assets/HotelBooking/Developer Resources & Tools/Webhook Integration.png",
      title: "Webhook Integration",
      desc: "Real-time notifications for booking confirmations, cancellations, and modifications. Eliminate polling and build event-driven applications.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#0a2540] text-center mb-6"
        >
          Built for Performance, Reliability & Enterprise Scale
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-gray-700 text-center max-w-3xl mx-auto mb-12"
        >
          Our infrastructure is architected to handle millions of search queries
          and thousands of concurrent bookings without compromising speed,
          accuracy, or user experience.
        </motion.p>

        {/* Grid of Main Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {mainFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#0a2540] transition"
            >
              <span className="flex items-center mb-2">
                <Image
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-6 h-auto mr-2"
                  width={100}
                  height={100}
                />
                <h3 className="text-xl font-semibold text-[#0a2540] mb-3">
                  {feature.title}
                </h3>
              </span>
              <ul className="space-y-2 text-gray-700">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#0a2540] font-semibold mr-2">●</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Developer Tools Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-[#0a2540] mb-6">
            Developer Resources & Tools
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developerTools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0a2540] transition"
              >
                <Image
                  src={tool.imgSrc}
                  alt={tool.title}
                  className="w-6 h-auto mx-auto mb-2"
                  width={100}
                  height={100}
                />
                <h4 className="text-lg font-semibold text-[#0a2540] mb-3">
                  {tool.title}
                </h4>
                <p className="text-gray-700 text-sm">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
