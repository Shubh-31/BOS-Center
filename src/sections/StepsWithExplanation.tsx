"use client";

import React from "react";
import { motion } from "framer-motion";

// ---------- Types ----------
interface StepItem {
  [key: string]: string; // allows dynamic keys like "step1", "step1Para"
}

interface StepsBlock {
  heading2: string;
  heading2Para?: string;
  steps?: StepItem[];
}

interface StepsWithExplanationProps {
  Steps: StepsBlock[];
}

// ---------- Component ----------
export const StepsWithExplanation: React.FC<StepsWithExplanationProps> = ({
  Steps,
}) => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-16">
        {Steps.map((block, index) => (
          <motion.div
            key={index}
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              {block.heading2}
            </h2>

            {block.heading2Para && (
              <p className="text-lg text-gray-600 max-w-5xl mx-auto text-center">
                {block.heading2Para}
              </p>
            )}

            {/* Steps as cards in flex */}
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              {block.steps?.map((step, i) => {
                const stepKey = Object.keys(step)[0]; // e.g., "step1"
                const stepTitle = step[stepKey];
                const stepPara = step[`${stepKey}Para`];

                return (
                  <motion.div
                    key={i}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition flex flex-col w-full sm:w-[calc(50%-0.75rem)] md:w-[45%]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {/* Step Badge */}
                    <div className="flex items-center mb-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-semibold">
                        {i + 1}
                      </span>
                      <h3 className="ml-3 text-xl font-semibold text-gray-900">
                        {stepTitle}
                      </h3>
                    </div>

                    {/* Step Description */}
                    <p className="text-gray-600">{stepPara}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
