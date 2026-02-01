"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const FAQSection = ({ faqs }: any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-8 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold leading-loose section-title">
          Frequently Asked Questions (FAQs)
        </h2>
        {/* <p className="section-description mt-5">
          Some of the most frequently asked questions
        </p> */}
      </div>

      <div className="max-w-2xl mx-auto mt-6 space-y-4">
        {faqs.map((faq: any, index: any) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden ${
              activeIndex === index
                ? "bg-black text-white"
                : "bg-white text-gray-900"
            } transition-colors duration-300`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 font-medium text-left"
            >
              <span>{faq.question}</span>
              <span className="text-2xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                className="px-6 pb-4"
              >
                <p className="text-sm">{faq.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
