"use client";
import { motion } from "framer-motion";
import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

const solutions = [
  // {
  //   title: "Financial Institutions Solutions with Advanced APIs",
  //   description:
  //     "Our Financial API solutions cater to banks, lenders, and other financial institutions. We provide a secure platform to process payments, verify accounts, and improve customer experience.",
  //   items: [
  //     "Payment Gateway API: Accept online payments with ease.",
  //     "AEPS API: Simplify Aadhaar-based transactions.",
  //     "Money Transfer API: Allow instant, secure money transfers.",
  //     "CIBIL API: Access credit reports for more informed lending decisions.",
  //     "Aadhaar, PAN, GST & Bank A/C Verification APIs: Automate verification of details.",
  //   ],
  //   benefits: [
  //     "Quick Integration: Easily integrate APIs into existing systems.",
  //     "Secure Transactions: Ensure secure payment processing with encryption.",
  //     "Compliant: Fully compliant with financial industry standards like PCI, DSS.",
  //   ],
  // },
  // {
  //   title: "Travel & Tourism Solutions",
  //   description:
  //     "Our Travel API solutions allow businesses in the travel industry to provide their users with quick & easy booking experiences.",
  //   items: [
  //     "Flight Booking API: Provide users with real-time flight booking.",
  //     "Train Booking API: Allow users to book train tickets quickly.",
  //     "Bus Booking API: Allow for instant bus seat bookings.",
  //     "Hotel Booking API: Offer a wide range of accommodation options for travelers.",
  //   ],
  //   benefits: [
  //     "Real-Time Availability: Get real-time data for flight, train, bus, & hotel bookings.",
  //     "Customer-Centric: Improve user satisfaction with an intuitive & easy booking system.",
  //     "Secure Payments: Ensure secure transactions for travel bookings.",
  //   ],
  // },
  {
    title: "Business & Enterprise Solutions",
    description:
      "Whether you’re looking to improve internal management or deliver excellent services to your customers, our B2B Mobile App, B2C Mobile App, & CRM Software offer tailored solutions for businesses in various industries.",
    items: [
      "B2B & B2C Management Software: Manage your business operations effortlessly.",
      "API Management Software: Monitor & manage API usage with ease.",
      "CRM & Lead Management Software: Engage & manage customer relationships effectively.",
      "B2B Reseller Module Software: Empower your resellers with a powerful management system.",
    ],
    benefits: [
      "Increased Efficiency: Automate operations & reduce overhead.",
      "Scalable Solutions: From startups to enterprises, scale with ease.",
      "Complete Management: Manage clients, transactions, & operations from one platform.",
    ],
  },

  {
    title: "Application Development & Digital Marketing Services",
    description:
      "In today’s digital age, a strong online presence is critical for business success. Our Website & Mobile App Development services, along with Digital Marketing expertise, help businesses connect with their audience & drive results.",
    items: [
      "Website & Mobile App Development: Build user-friendly, responsive websites & mobile applications.",
      "Digital Marketing: Leverage SEO, Social Media, & PPC to grow your business online.",
    ],
    benefits: [
      "Custom Solutions: Tailored development for your business needs.",
      "Advanced Marketing Strategies: Increase traffic, conversions, & customer loyalty.",
      "User-Centric Design: Focus on delivering a great user experience.",
    ],
  },
];

export default function SolutionsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50">
      <div className="max-w-5xl mx-auto p-6">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 mb-6 cursor-pointer border border-gray-200"
            onClick={() => toggleSection(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{solution.title}</h3>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              className="overflow-hidden mt-4"
            >
              <p className="text-gray-600">{solution.description}</p>
              <ul className="list-disc pl-6 mt-2">
                {solution.items.map((item, i) => (
                  <li key={i} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
              <h4 className="mt-4 font-semibold">Benefits:</h4>
              <ul className="list-disc pl-6 mt-2">
                {solution.benefits.map((benefit, i) => (
                  <li key={i} className="text-gray-700">
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
