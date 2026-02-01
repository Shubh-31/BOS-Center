"use client";

import { motion } from "framer-motion";
import Image from "next/image";


  const travelContent = [
    {
      title: "Centralized Financial Customer Database",
      description:
        "Centralize & organize all financial customer records—whether business entities or individual consumers—for improved visibility, communication, and compliance.",
      points: [
        "Comprehensive Client Profiles: Store financial details, transaction histories, contact info, and payment behavior in one centralized profile.",
        "Smart Segmentation: Classify clients by type (B2B/B2C), financial behavior, and risk profile to tailor interactions and services.",
        "Data Security & Compliance: Maintain data integrity with bank-grade encryption and ensure adherence to financial compliance standards.",
      ],
      image: "/assets/B2B&B2C2.png",
      alt: "Enterprise business platform with supplier management and procurement automation.",
    },
    {
      title: "Sales & Revenue Pipeline Management",
      description:
        "Track and manage financial leads and revenue opportunities from prospecting to payment—across both B2B and B2C workflows.",
      points: [
        "Tailored B2B Pipelines: Handle complex deal structures, multi-stakeholder negotiations, and contract-driven sales cycles.",
        "Fast-Paced B2C Conversions: Automate high-volume lead conversion processes through targeted messaging and real-time follow-ups.",
        "Lead Qualification & Automation: Score leads based on revenue potential and automate key touchpoints to maximize conversion.",
      ],
      image: "/assets/B2B&B2C3.png",
      alt: "Cloud-based B2B B2C solution displaying multi-channel sales and customer portal.",
    },
    {
      title: "Financial CRM & Engagement Tools",
      description:
        "Strengthen client relationships with financial CRM features that support proactive communication and personalized service.",
      points: [
        "Multi-Channel Financial Communication: Engage clients through email, SMS, phone, or secure portals for account and payment-related queries.",
        "Automated Client Outreach: Set up reminders for payment follow-ups, contract renewals, and personalized check-ins.",
        "360° Financial View: Access complete financial history and engagement records to better understand and serve clients.",
      ],
      image: "/assets/B2B&B2C4.png",
      alt: "Business management system interface with CRM integration and lead tracking.",
    },
    {
      title: "Financial Operations & Inventory Control",
      description:
        "Manage financial operations easily, including invoicing, payment tracking, inventory management, and order fulfillment.",
      points: [
        "Invoicing & Payments: Generate, send, and track invoices with automated reminders and multi-currency payment support.",
        "Inventory & Fulfillment Tracking: Sync inventory with financial records to ensure accurate billing and services control across B2B/B2C dealings.",
        "Integrated Service Management: Manage B2B and B2C transactions in a unified interface with real-time status updates.",
      ],
      image: "/assets/B2B&B2C5.png",
      alt: "Complete B2B B2C platform displaying financial management and reporting features.",
    },
    {
      title: "Financial Reporting & Analytics",
      description:
        "Gain actionable insights with real-time dashboards and financial performance metrics tailored to both business and individual clients.",
      points: [
        "Custom Financial Dashboards: Monitor KPIs like cash flow, revenue by segment, receivables aging, and sales pipeline performance.",
        "Predictive Analytics & Forecasting: Use historical data and trends to forecast revenue and assess risk exposure.",
        "Compliance & Audit Reports: Generate export-ready reports for audits, financial reviews, and investor presentations.",
      ],
      image: "/assets/B2B&B2C6.png",
      alt: "AI-powered B2B B2C platform with predictive analytics and business intelligence.",
    },
    {
      title: "Financial Workflow Automation",
      description:
        "Automate repetitive financial tasks to reduce manual errors and improve operational efficiency across all customer types.",
      points: [
        "Automated Billing & Notifications: Schedule recurring invoices and send automatic payment alerts.",
        "Task Routing & Escalations: Assign financial tasks based on workflow logic—ideal for approval chains, credit checks, and B2B contract reviews.",
        "Custom Financial Workflows: Build tailored workflows for B2B contract lifecycles or high-frequency B2C transactions with minimal human intervention.",
      ],
      image: "/assets/B2B&B2C7.png",
      alt: "Integrated B2B B2C software showing workflow automation and document management.",
    },
  ];

export default function APIServicesSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Travel Booking Platform for Merchants & Retailers - Complete B2B
          Travel Solution
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
