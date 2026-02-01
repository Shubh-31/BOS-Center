"use client";

import { motion } from "framer-motion";
import Image from "next/image";

  const travelContent = [
    {
      title: "Centralized Travel Booking Platform",
      description:
        "Easily manage and book travel for employees from a single, user-friendly platform.",
      points: [
        "Simplified Booking Process: Book flights, hotels, and car rentals in one place, saving time and reducing errors.",
        "Preferred Vendor Integration: Ensure cost savings by integrating with preferred travel suppliers, offering discounts and more flexible options.",
        "Real-Time Availability: Stay updated with real-time pricing and availability, helping you make informed decisions instantly.",
      ],
      image: "/assets/TravelManagement2.png",
      alt: "Digital travel platform with hotel and flight reservation management features.",
    },
    {
      title: "Expense & Budget Control",
      description:
        "Take charge of your travel budget and reduce unnecessary spending.",
      points: [
        "Automatic Expense Reporting: Effortlessly track and categorize expenses, making it simple to stay within budget.",
        "Real-Time Cost Tracking: Monitor travel spending in real-time and receive alerts when you’re nearing your budget limit.",
        "Multi-Tier Approval Workflow: Ensure travel bookings align with company policies before confirmation, with an approval process for added control.",
      ],
      image: "/assets/TravelManagement3.png",
      alt: "Cloud-based travel solution displaying expense tracking and approval workflows.",
    },
    {
      title: "Travel Policy Compliance",
      description:
        "Ensure all employees follow your company’s travel policies, reducing unauthorized spending.",
      points: [
        "Custom Travel Policies: Tailor the Solution to align with your company’s unique travel rules and restrictions.",
        "Instant Policy Checks: Receive real-time notifications when a booking doesn’t meet your policy guidelines.",
        "Reporting & Violation Tracking: Easily identify policy violations and track compliance trends across the company.",
      ],
      image: "/assets/TravelManagement4.png",
      alt: "Enterprise travel system with policy compliance and cost center management.",
    },
    {
      title: "Advanced Reporting & Analytics",
      description:
        "Gain valuable insights into your company’s travel spending and behavior.",
      points: [
        "Customizable Dashboards: Create personalized dashboards to track KPIs, such as travel spend, booking frequency, and preferred supplier usage.",
        "Data-Driven Insights: Make informed decisions with detailed reports on travel patterns, helping you optimize future travel plans and negotiations.",
        "Cost-Saving Opportunities: Use the analytics tools to identify areas where you can reduce costs, like switching suppliers or adjusting policies.",
      ],
      image: "/assets/TravelManagement5.png",
      alt: "Travel software displaying reporting dashboard and analytics for cost optimization.",
    },
    {
      title: "Employee Self-Service & Flexibility",
      description:
        "Empower employees to manage their own bookings while ensuring compliance with travel policies.",
      points: [
        "Self-Booking Interface: Let employees book their own travel within the approved guidelines, streamlining the process and reducing administrative work.",
        "Mobile Booking & Management: Enable employees to book, modify, and manage their travel plans directly from their mobile devices.",
        "Pre-Approved Travel Options: Offer employees pre-approved travel options, helping them stay within company policies without the back-and-forth of approval processes.",
      ],
      image: "/assets/TravelManagement6.png",
      alt: "Mobile travel app with GPS tracking and expense capture functionality.",
    },
    {
      title: "24/7 Support for Travelers",
      description:
        "Ensure your employees have help whenever they need it, during or after their business trip.",
      points: [
        "Around-the-Clock Assistance: Access 24/7 customer support for travel disruptions, re-bookings, and emergency situations.",
        "Instant Updates: Receive immediate notifications if there are changes to travel plans, such as cancellations, delays, or emergencies.",
      ],
      image: "/assets/TravelManagement7.png",
      alt: "Integrated travel platform with corporate booking tools and traveler profiles",
    },
  ];

export default function APIServicesSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Travel & Expense Management Software That’s Easy to Use
        </motion.h2>

      

        {/* Blocks */}
        <div className="space-y-20">
          {travelContent.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Text */}
              <div className="md:w-1/2">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>

                <ul className="space-y-4">
                  {feature.points.map((point, idx) => {
                    const [title, ...rest] = point.split(":");
                    const description = rest.join(":").trim();

                    return (
                      <li key={idx} className="text-gray-600">
                        <h4 className="font-medium text-blue-800">
                          {title.trim()}
                        </h4>
                        {description && (
                          <p className="text-gray-500 mt-1">{description}</p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Image */}
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={400}
                  height={300}
                  className="rounded-2xl object-contain shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
