"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BenefitsSection = ({ benefitsContent }: any) => {
  // Helper to render description
  const renderDescription = (desc: any) => {
    if (typeof desc === "string") {
      return (
        <div className="bg-white p-2">
          <p className="text-gray-700 leading-relaxed">{desc}</p>
        </div>
      );
    }

    if (Array.isArray(desc)) {
      return (
        <div className="bg-white p-2 mt-2 space-y-2">
          {desc.map((item, idx) => {
            if (typeof item === "string") {
              return (
                <p key={idx} className="text-gray-700 leading-relaxed">
                  {item}
                </p>
              );
            } else if (item.label && item.content) {
              return (
                <div key={idx} className="space-y-2">
                  <h4 className="text-md font-semibold text-gray-900">
                    {item.label}
                  </h4>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="section-title mt-5 text-5xl p-1">
          {benefitsContent.heading}
        </h2>
        {benefitsContent.description && (
          <p className="section-description mt-2 text-2xl md:text-xl sm:text-xl">
            {benefitsContent.description}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {benefitsContent.benefits.map((benefit: any, index: number) => (
            <motion.div
              key={index}
              className="
                flex flex-col items-center text-center
    bg-white border border-gray-200 rounded-xl shadow-md
    p-8 hover:shadow-lg transition
    w-full md:w-[48%]
              "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-lg overflow-hidden">
                {typeof benefit.icon === "string" &&
                benefit.icon.endsWith(".png") ? (
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                ) : (
                  benefit.icon
                )}
              </div>

              <h3 className="text-lg font-semibold mt-4">{benefit.title}</h3>

              <div className="w-full text-left">
                {renderDescription(benefit.description)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
