"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const plans = [
  {
    id: "Banking",
    title: "Banking & Financial",
    features: [
      "Core Banking",
      "NBFC",
      "NIDHI",
      "Loan Management",
      "Micro Finance",
      "Credit Cooperative Society",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    features: [
      "API Management",
      "CRM & Lead Management",
      "B2B & B2C Management",
      "Travel",
      "B2B Reseller Module",
    ],
  },
];

const allFeatures = [
  "Basic Software",
  "Web + Android Application",
  "KYC API",
  "Branch Management",
  "SMS API",
  "Member Application",
  "Advisor Login",
  "E - NACH API",
  "QR & Disbursement API",
  "CIBIL Pull & Update API",
  "Prepaid Card",
  "Customization",
  "Source Code",
  "Customer Application",
];

// ✅ Feature mapping by product
const productFeatures: Record<
  string,
  { basic: Set<string>; standard: Set<string>; premium: Set<string> }
> = {
  // Core Banking, NIDHI & Credit Cooperative Society
  "Core Banking": {
    basic: new Set(["Basic Software", "Web + Android Application", "KYC API"]),
    standard: new Set([
      "Branch Management",
      "SMS API",
      "Member Application",
      "E - NACH API",
      "QR & Disbursement API",
    ]),
    premium: new Set([
      "CIBIL Pull & Update API",
      "Prepaid Card",
      "Customization",
      "Source Code",
    ]),
  },
  NIDHI: {
    basic: new Set(["Basic Software", "Web + Android Application", "KYC API"]),
    standard: new Set([
      "Branch Management",
      "SMS API",
      "Member Application",
      "E - NACH API",
      "QR & Disbursement API",
    ]),
    premium: new Set([
      "CIBIL Pull & Update API",
      "Prepaid Card",
      "Customization",
      "Source Code",
    ]),
  },
  "Credit Cooperative Society": {
    basic: new Set(["Basic Software", "Web + Android Application", "KYC API"]),
    standard: new Set([
      "Branch Management",
      "SMS API",
      "Member Application",
      "E - NACH API",
      "QR & Disbursement API",
    ]),
    premium: new Set([
      "CIBIL Pull & Update API",
      "Prepaid Card",
      "Customization",
      "Source Code",
    ]),
  },

  // Loan Management, NBFC & Micro Finance
  "Loan Management": {
    basic: new Set(["Basic Software", "Web + Android Application", "KYC API"]),
    standard: new Set([
      "Branch Management",
      "SMS API",
      "E - NACH API",
      "QR & Disbursement API",
      "CIBIL Pull & Update API",
    ]),
    premium: new Set(["Customer Application", "Customization", "Source Code"]),
  },
  NBFC: {
    basic: new Set(["Basic Software", "Web + Android Application", "KYC API"]),
    standard: new Set([
      "Branch Management",
      "SMS API",
      "E - NACH API",
      "QR & Disbursement API",
      "CIBIL Pull & Update API",
    ]),
    premium: new Set(["Customer Application", "Customization", "Source Code"]),
  },
  "Micro Finance": {
    basic: new Set(["Basic Software", "Web + Android Application", "KYC API"]),
    standard: new Set([
      "Branch Management",
      "SMS API",
      "E - NACH API",
      "QR & Disbursement API",
      "CIBIL Pull & Update API",
    ]),
    premium: new Set(["Customer Application", "Customization", "Source Code"]),
  },
};

export default function PricingCard() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [selectedFeatureList, setSelectedFeatureList] = useState<string>();

  return (
    <section className="py-24 bg-gray-50 min-h-[80vh]">
      <div className="container mx-auto px-4 text-center">
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative"
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="relative px-8 py-4 rounded-xl font-semibold shadow-md transition flex items-center gap-2 bg-white text-gray-700 overflow-hidden"
              >
                {/* Animated border */}
                <span className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-[length:200%_200%] animate-borderFlow -z-10">
                  <span className="block w-full h-full rounded-xl bg-white"></span>
                </span>
                {plan.title}
                <motion.span
                  animate={{ rotate: hoveredPlan === plan.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} />
                </motion.span>
              </motion.button>

              {/* Dropdown */}
              <AnimatePresence>
                {hoveredPlan === plan.id && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 mt-2 w-64 max-h-[400px] bg-white border rounded-xl shadow-lg text-left p-4 space-y-3 z-10 overflow-y-auto"
                  >
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="cursor-pointer text-gray-700 hover:text-blue-600"
                        onClick={() => setSelectedFeatureList(feature)}
                      >
                        {feature}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Feature Table */}
        {selectedFeatureList && productFeatures[selectedFeatureList] && (
          <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg border">
            <h2 className="text-3xl font-bold mb-6 text-gray-700 capitalize">
              {selectedFeatureList}
            </h2>

            {/* Compute counts dynamically */}
            {(() => {
              const sets = productFeatures[selectedFeatureList];
              const basicCount = allFeatures.filter((f) =>
                sets.basic.has(f)
              ).length;
              const standardCount = allFeatures.filter(
                (f) => sets.basic.has(f) || sets.standard.has(f)
              ).length;
              const premiumCount = allFeatures.filter(
                (f) =>
                  sets.basic.has(f) ||
                  sets.standard.has(f) ||
                  sets.premium.has(f)
              ).length;

              return (
                <div className="overflow-x-auto">
                  <table className="w-full table-auto border-collapse rounded-md shadow-md overflow-hidden">
                    <thead>
                      <tr>
                        <th className="border px-6 py-3 text-left">Features</th>
                        <th className="border px-6 py-3">
                          Basic{" "}
                          <span className="text-gray-500">({basicCount})</span>
                        </th>
                        <th className="border px-6 py-3">
                          Standard{" "}
                          <span className="text-gray-500">
                            ({standardCount})
                          </span>
                        </th>
                        <th className="border px-6 py-3">
                          Premium{" "}
                          <span className="text-gray-500">
                            ({premiumCount})
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allFeatures.map((feature, idx) => {
                        const isBasic = sets.basic.has(feature);
                        const isStandard =
                          isBasic || sets.standard.has(feature);
                        const isPremium =
                          isStandard || sets.premium.has(feature);

                        return (
                          <tr
                            key={idx}
                            className={`border-t border-gray-200 ${
                              idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } hover:bg-gray-100`}
                          >
                            <td className="p-4 text-gray-700 font-medium">
                              {feature}
                            </td>
                            <td className="p-4 text-center font-bold">
                              {isBasic ? (
                                <span className="text-green-600">✔</span>
                              ) : (
                                <span className="text-black">—</span>
                              )}
                            </td>
                            <td className="p-4 text-center font-bold">
                              {isStandard ? (
                                <span className="text-green-600">✔</span>
                              ) : (
                                <span className="text-black">—</span>
                              )}
                            </td>
                            <td className="p-4 text-center font-bold">
                              {isPremium ? (
                                <span className="text-green-600">✔</span>
                              ) : (
                                <span className="text-black">—</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
