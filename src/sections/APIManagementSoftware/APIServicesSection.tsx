"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const travelContent = [
  {
    title: "API Gateway & Traffic Management",
    description:
      "Optimize your API traffic and performance with our API Gateway that ensures seamless routing, load balancing, and real-time scalability.",
    points: [
      "Traffic Routing & Load Balancing: Direct API traffic efficiently with real-time monitoring, ensuring optimal performance.",
      "Rate Limiting & Throttling: Protect your APIs from abuse and ensure fair usage by setting custom rate limits and throttling rules.",
      "Dynamic Scaling: Automatically scale API resources to meet demand, ensuring smooth operations even during traffic spikes.",
    ],
    image: "/assets/APIManagement2.png",
    alt: "Digital API gateway interface with security features and authentication management.",
  },
  {
    title: "Strong API Security & Authentication",
    description:
      "Protect your APIs and sensitive data with advanced security features, ensuring secure access, identity management, and compliance.",
    points: [
      "OAuth & JWT Authentication: Implement robust OAuth and JWT protocols for secure user authentication and authorization.",
      "API Key Management: Securely manage API keys for different users and services, preventing unauthorized access.",
      "Threat Protection & Custom Security Policies: Safeguard your APIs with automatic threat detection, custom security policies, and prevention of potential attacks.",
    ],
    image: "/assets/APIManagement3.png",
    alt: "Secure API gateway with OAuth implementation and access control features.",
  },
  {
    title: "Real-Time Analytics & Monitoring",
    description:
      "Track API performance, usage, and errors with detailed analytics that help you maintain the health and performance of your API ecosystem.",
    points: [
      "Real-Time Monitoring: Monitor your APIs’ response times, uptime, and traffic volume in real time to detect and resolve issues quickly.",
      "Comprehensive Analytics: Gain insights into API usage patterns, performance bottlenecks, and areas for improvement with easy-to-understand analytics.",
      "Alerts & Notifications: Set up custom alerts to notify you of any API failures, performance issues, or abnormal traffic patterns.",
    ],
    image: "/assets/APIManagement4.png",
    alt: "API analytics dashboard displaying performance metrics and usage statistics",
  },
  {
    title: "API Lifecycle Management",
    description:
      "Manage the entire lifecycle of your APIs—from design and deployment to versioning and deprecation—seamlessly.",
    points: [
      "API Versioning: Keep track of multiple versions of your APIs, ensuring backward compatibility while introducing new features.",
      "Automated Deployments: Deploy and update APIs with minimal downtime, reducing disruptions to users and services.",
      "Deprecation & Sunset Policies: Safely deprecate old APIs while migrating users to newer versions without service interruptions.",
    ],
    image: "/assets/APIManagement5.png",
    alt: "Complete API management platform with version control and deployment automation.",
  },
   {
      title: "Developer Portal & Collaboration",
      description:
        "Enhance developer productivity by providing a user-friendly and customizable portal that simplifies API testing, integration, and collaboration.",
      points: [
        "Branded Developer Portal: Offer a personalized portal that allows developers to access, test, and integrate your APIs with ease.",
        "Interactive API Documentation: Provide developers with auto-generated, interactive documentation to improve the integration experience.",
        "Sandbox Environment: Allow developers to test APIs in a safe environment before production deployment, reducing errors and downtime.",
      ],
      image: "/assets/APIManagement6.png",
      alt: "Cloud-based API management system displaying developer portal and documentation.",
    },
    {
      title: "Integration with Existing Systems",
      description:
        "Integrate seamlessly with your current infrastructure, allowing for smooth workflows and efficient API management.",
      points: [
        "Pre-Built Connectors: Easily integrate with CRM systems, cloud platforms, databases, and third-party tools with our pre-built connectors.",
        "Flexible Integration: Adapt our API management solution to your existing tech stack and workflows, reducing the need for custom development.",
        "Support for Multiple API Types: Our Solution supports REST, SOAP, GraphQL, and gRPC APIs to ensure compatibility with all types of APIs.",
      ],
      image: "/assets/APIManagement7.png",
      alt: "API management solution showing integration workflows and microservices architecture.",
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
          API Management Built for Security, Scale & Performance
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto text-center"
        >
          Enterprise grade API platform that ensures performance, reliability
          and developer-first onboarding.
        </motion.p>

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
