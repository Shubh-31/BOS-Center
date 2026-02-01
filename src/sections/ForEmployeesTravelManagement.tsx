"use client";

import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react"; // or any icon
import React from "react";

export const ForEmployeesSection = () => {
  const title = "Travel Management For Corporate Employees";
  const description =
    "";
  const image = "/assets/TravelManagementForEmployees.png"; 

  const textContent = [
    {
      title: "User-Friendly Booking",
      description:
        "Book travel with ease, knowing that it’s within company-approved parameters.",
    },
    {
      title: "Increased Flexibility",
      description:
        "Enjoy the convenience of booking and managing travel directly from your mobile device.",
    },
    {
      title: "Smooth Travel Experience",
      description:
        "Get notified instantly of any changes to your travel plans, ensuring a smooth experience from start to finish.",
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
          alt={title}
          className="h-3/4 w-[70%] object-contain mt-12"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-black-gradient mt-12 -mb-2">
          {title}
        </h3>
        <p className="text-gray-600 -mb-6">{description}</p>

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
