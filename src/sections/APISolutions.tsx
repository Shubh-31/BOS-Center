"use client";

import { motion } from "framer-motion";
import {
  Server,
  Shield,
  ChartLine,
  MonitorCog,
  Users,
  Plug,
} from "lucide-react";

const features = [
  {
    title: "API Gateway & Traffic Management",
    icon: <Server className="text-4xl text-blue-500" />,
    points: [
      "Traffic Routing & Load Balancing",
      "Rate Limiting & Throttling",
      "Dynamic Scaling",
    ],
  },
  {
    title: "Strong API Security & Authentication",
    icon: <Shield className="text-4xl text-red-500" />,
    points: [
      "OAuth & JWT Authentication",
      "API Key Management",
      "Threat Protection & Custom Security Policies",
    ],
  },
  {
    title: "Real-Time Analytics & Monitoring",
    icon: <ChartLine className="text-4xl text-green-500" />,
    points: [
      "Real-Time Monitoring",
      "Comprehensive Analytics",
      "Alerts & Notifications",
    ],
  },
  {
    title: "API Lifecycle Management",
    icon: <MonitorCog className="text-4xl text-yellow-500" />,
    points: [
      "API Versioning",
      "Automated Deployments",
      "Deprecation & Sunset Policies",
    ],
  },
  {
    title: "Developer Portal & Collaboration",
    icon: <Users className="text-4xl text-purple-500" />,
    points: [
      "Branded Developer Portal",
      "Interactive API Documentation",
      "Sandbox Environment",
    ],
  },
  {
    title: "Integration with Existing Systems",
    icon: <Plug className="text-4xl text-teal-500" />,
    points: [
      "Pre-Built Connectors",
      "Flexible Integration",
      "Support for Multiple API Types",
    ],
  },
];

export default function APISolution() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Transform Your API Strategy with Our API Management Solution
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <ul className="mt-3 text-gray-600">
              {feature.points.map((point, i) => (
                <li key={i} className="mt-2">
                  • {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
