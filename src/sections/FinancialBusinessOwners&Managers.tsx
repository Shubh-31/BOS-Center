"use client";

import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react"; // or any icon
import React from "react";

export const FinancialBusinessOwnersManagers = () => {
  const title = "For Financial Business Owners and Managers";
  const description =
    "";
  const image = "/assets/B2B&B2C10.png";
  const alt = "B2B & B2C Management - B2B and B2C Management System."; 

  const textContent = [
    {
      title: "Unified Financial Platform",
      description:
        "Oversee both B2B and B2C financial operations from a single, integrated system, saving time and reducing errors.",
    },
    {
      title: "Scalable and Adaptable",
      description:
        "Grow your financial services with a flexible platform designed to scale with your expanding business needs.",
    },
    {
      title: "Data-Driven Financial Insights",
      description:
        "Leverage complete analytics and reporting to make informed financial decisions and accelerate business growth.",
    },
  ];

  return (
    <motion.section
      className={`flex flex-col md:flex-row items-stretch justify-between gap-4 px-6 md:px-20 py-4 container`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 h-full flex justify-center items-stretch">
        <motion.img
          src={image}
          alt={alt}
          className="h-3/4 w-[70%] object-contain mt-12"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-black-gradient mt-12 -mb-2">
          {title}
        </h3>
        {/* <p className="text-gray-600 -mb-6">{description}</p> */}

        {textContent.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4">
            <CircleCheck className="text-blue-500 w-6 h-6 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                {benefit.title}
              </h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
