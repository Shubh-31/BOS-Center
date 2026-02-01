"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FeatureItem {
  id: number;
  title: string;
  feature?: string;
  benefit?: string;
  featureImage?: string;
  benefitImage?: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: "Business & Enterprise Solution",
    feature:
      "Tailored solutions for the travel industry, including travel agencies, OTAs, and booking platforms.",
    benefit:
      "Streamline your travel business operations with our enterprise solutions designed for travel agencies, booking platforms, and tour operators.",
    featureImage: "/assets/Quick Access to Key Features.png",
    benefitImage: "/assets/Service Providers.png",
  },
  {
    id: 2,
    title: "Do your solutions support global businesses?",
    feature:
      "Our solutions are tailored for the Indian market and currently do not support international operations. However, we offer multilingual support for businesses across India.",
    featureImage: "/assets/Quick Access to Key Features.png",
  },
];

export default function Solutions() {
  const [selected, setSelected] = useState<number>(features[0]?.id || 0);

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="p-6 rounded-lg mb-8 text-center">
          <h2 className="text-3xl font-bold text-[#0a2540]">
            Software Solutions: Complete Solutions for Every Business Need
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          {/* Left Panel */}
          <div className="w-full md:w-[40%] bg-gray-100 rounded-lg p-6">
            {features.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`cursor-pointer flex items-start gap-4 p-4 rounded-lg transition ${
                  selected === item.id
                    ? "bg-white shadow-lg"
                    : "hover:bg-gray-200"
                }`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold ${
                    selected === item.id
                      ? "bg-[#0a2540] text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  {item.id}
                </div>
                <h3 className="text-lg font-semibold text-[#0a2540]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-[60%] space-y-6">
            <AnimatePresence mode="wait">
              {features
                .filter((item) => item.id === selected)
                .map((item) => (
                  <motion.div
                    key={`feature-${item.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white shadow-lg rounded-lg p-6"
                  >
                    {item.featureImage && (
                      <img
                        src={item.featureImage}
                        alt={item.title || "Feature Image"}
                        className="h-[40px] w-[40px] mb-4 rounded object-cover"
                        onError={(e) =>
                          ((e.target as HTMLImageElement).style.display =
                            "none")
                        }
                      />
                    )}
                    <h4 className="text-xl font-semibold text-[#0a2540] mb-2">
                      Feature
                    </h4>
                    <p className="text-gray-700">
                      {item.feature || "No feature details available."}
                    </p>
                  </motion.div>
                ))}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {features
                .filter((item) => item.id === selected && item.benefit)
                .map((item) => (
                  <motion.div
                    key={`benefit-${item.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white shadow-lg rounded-lg p-6"
                  >
                    {item.benefitImage && (
                      <img
                        src={item.benefitImage}
                        alt={item.title || "Benefit Image"}
                        className="h-[40px] w-[40px] mb-4 rounded object-cover"
                        onError={(e) =>
                          ((e.target as HTMLImageElement).style.display =
                            "none")
                        }
                      />
                    )}
                    <h3 className="text-xl font-semibold text-[#0a2540] mb-2">
                      Benefit
                    </h3>
                    <p className="text-gray-700">
                      {item.benefit || "No benefit details available."}
                    </p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
