"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// import { FaClipboardList, FaTools, FaChartLine, FaLock } from "react-icons/fa";

export default function FinanceSection({ financeContent }: any) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between">
        {/* Left Side - Image & Graphics */}
        <div className="relative w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image
              src={financeContent.imgSrc}
              alt="Finance Illustration"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </motion.div>
        </div>

        {/* Right Side - Text & Icons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 mt-10 lg:mt-0"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            {financeContent.heading}
            {/* <span className="text-blue-600">new light</span> */}
          </h2>
          <p className="text-gray-600 mt-4">{financeContent.description}</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {financeContent.points &&
              financeContent.points.map((point: any, index: any) => (
                <div key={index} className="flex items-center space-x-4">
                  {point.icon}
                  <p className="text-gray-700">{point.item}</p>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
