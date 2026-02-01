"use client";

import { motion } from "framer-motion";
import Image from "next/image";

  const travelContent = [
    {
      title: "Lead Capture & Tracking",
      description:
        "Easily capture leads from multiple channels and track them throughout their journey to maximize conversions.",
      points: [
        "Multi-Channel Lead Capture: Automatically capture leads from your website, social media, emails, and more.",
        "Lead Segmentation: Group leads based on demographics, behavior, and other criteria for more targeted marketing.",
        "Lead Scoring: Score leads based on engagement, helping your sales team focus on high-priority leads that are more likely to convert.",
      ],
      image: "/assets/CRM2.png",
      alt: "Customizable CRM dashboard for managing leads and client relationships.",
    },
    {
      title: "Sales Pipeline Management",
      description:
        "Efficiently manage your sales process with an intuitive pipeline view, enabling you to track every lead's stage and move them toward conversion.",
      points: [
        "Customizable Sales Stages: Tailor the stages of your sales pipeline to fit your team’s unique workflow.",
        "Drag-&-Drop Interface: Easily move leads between stages with a simple drag-and-drop interface, simplifying the management process.",
        "Sales Forecasting: Get accurate, data-driven sales forecasts based on current opportunities and historical data.",
      ],
      image: "/assets/CRM3.png",
      alt: "Lead management pipeline with automated follow-up features.",
    },
    {
      title: "Contact & Account Management",
      description:
        "Store all relevant customer and lead data in one centralized location, keeping every interaction accessible and organized.",
      points: [
        "360-Degree View: Access a comprehensive view of every contact, including communication history, deal status, and notes.",
        "Automated Follow-Ups: Set up automated reminders for follow-ups, calls, or meetings, ensuring no lead is left unattended.",
        "Centralized Data Storage: Manage contacts, interactions, and documents in one secure, easily accessible platform.",
      ],
      image: "/assets/CRM4.png",
      alt: "Real-time performance analytics in lead management software.",
    },
    {
      title: "Marketing Automation",
      description:
        "Automate your marketing efforts and deliver personalized content to nurture leads, increase engagement, and drive conversions.",
      points: [
        "Email Campaigns: Send automated, personalized email campaigns to nurture leads through the sales funnel.",
        "Drip Campaigns: Implement automated sequences of emails to educate and move leads toward making a purchase decision.",
        "Lead Nurturing: Automatically trigger follow-up messages based on user behavior, such as website visits or email opens.",
      ],
      image: "/assets/CRM5.png",
      alt: "User-friendly CRM interface with real-time lead analytics.",
    },
    {
      title: "Reporting & Analytics",
      description:
        "Track, measure, and optimize your sales and marketing performance with in-depth reporting and analytics.",
      points: [
        "Customizable Dashboards: Create personalized dashboards to view the metrics that matter most to your business.",
        "Lead Conversion Metrics: Monitor conversion rates, sales cycle times, and the efficiency of your lead generation efforts.",
        "Performance Reports: Generate detailed reports that show sales performance, team productivity, and campaign results.",
      ],
      image: "/assets/CRM6.png",
      alt: "Sales team using CRM dashboard for lead conversion insights.",
    },
    {
      title: "Collaboration & Team Management",
      description:
        "Foster better collaboration across your sales team to improve efficiency and close more deals.",
      points: [
        "Task Assignment: Assign tasks to team members, ensuring that each lead gets the right attention at the right time.",
        "Team Communication: Collaborate effectively using internal notes, shared calendars, and messaging features.",
        "Role-Based Permissions: Control user access and permissions to ensure sensitive data remains secure and only available to the right people.",
      ],
      image: "/assets/CRM7.png",
      alt: "CRM software showing customer interaction timeline and activity log.",
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
          Smart CRM Solution to Centralize Sales, Marketing, & Support
        </motion.h2>

        {/* Subheading */}
       

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
