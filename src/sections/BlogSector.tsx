"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Link from "next/link";

const pricingTiers = [
  // {
  //   id: "1",
  //   title: "Free",
  //   monthlyPrice: 0,
  //   buttonText: "Get started for free",
  //   popular: false,
  //   inverse: false,
  //   features: [
  //     "Up to 5 project members",
  //     "Unlimited tasks and projects",
  //     "2GB storage",
  //     "Integrations",
  //     "Basic support",
  //   ],
  // },
  // {
  //   id: "2",
  //   title: "Pro",
  //   monthlyPrice: 9,
  //   buttonText: "Sign up now",
  //   popular: true,
  //   inverse: true,
  //   features: [
  //     "Up to 50 project members",
  //     "Unlimited tasks and projects",
  //     "50GB storage",
  //     "Integrations",
  //     "Priority support",
  //     "Advanced support",
  //     "Export support",
  //   ],
  // },
  {
    id: "3",
    // title: "Business",
    // monthlyPrice: 19,
    // buttonText: "Sign up now",
    // popular: false,
    // inverse: false,
    features: [
      "PayIn & PayOut",
      "AEPS & Aadhaar Pay",
      "DMT (Money Transfer)",
      "Recharge & Utility Bill Payments",
      "FasTag Recharge",
      "QR, UPI, Wallet & Banking Integration",
    ],
  },
];

export const BlogSection = () => {
  return (
    <section className="py-24 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)]">
      <div className="container">
        <div className="w-full max-w-8xl">
          <h2 className="w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-8">
            How Does a Core Banking System Work?
          </h2>
          {/* <h4 className="text-2xl text-center leading-8 font-bold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent">
            FinServe – Fast, Secure & Scalable Payment Solutions for Merchants
          </h4> */}
          <p className="section-description mt-5">
            Core banking systems work by centralizing all data and processes
            into one unified infrastructure. When a customer performs a
            transaction—whether at a branch, ATM, or mobile app—the system
            updates their account in real time. Here is a simplified flow:
          </p>
        </div>
        <section className="py-16 px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Customer onboarding",
              "Account and transaction management",
              "Loan origination",
              "Compliance and reporting",
              "Digital banking integrations (mobile, internet)",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:font-bold"
              >
                <div className="p-6 text-center font-medium text-gray-800">
                  {feature}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
