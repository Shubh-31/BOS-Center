"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

export const Pricing = () => {
  return (
    <section className="pt-16 pb-2 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)]">
      <div className="container">
        <div className="w-full max-w-8xl">
          <h2 className="w-full text-4xl sm:text-4xl md:text-4xl lg:text-4xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-2">
            FinServe – Fast, Secure & Scalable Payment Solutions for Merchants
          </h2>
          {/* <h4 className="text-2xl text-center leading-8 font-bold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent">
            FinServe – Fast, Secure & Scalable Payment Solutions for Merchants
          </h4> */}
          <p className="section-description mt-5 text-2xl">
            Empower merchants and businesses with real-time financial services.
            FinServe offers ready-to-use services.
          </p>
        </div>
        <section className="py-12 px-4 md:px-20">
          <div className="flex flex-col md:flex-row items-start md:space-x-12">
            {/* Cards grid */}
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
              {[
                "PayIn & PayOut",
                "AEPS & Aadhaar Pay",
                "DMT (Money Transfer)",
                "FasTag Recharge",
                "Recharge & Utility Bill Payments",
                "QR, UPI, Wallet & Banking Integration",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:font-bold"
                >
                  <h3 className="p-6 text-center font-medium text-gray-800">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>


            {/* Right image */}
            <div className="w-full md:w-1/3 flex justify-center mt-10 md:mt-0">
              <Image
                src="/assets/FinServeHome1.svg"
                alt="FinServe for Merchants"
                width={160}
                height={160}
                className="object-contain"
              />
              <Image
                src="/assets/FinServeHome2.svg"
                alt="FinServe for Retailers"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </div>
        </section>

        <p className="text-center leading-8 font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-8 text-2xl">
          Fast onboarding, 99.9% uptime, secure transactions, & real-time
          analytics — FinServe is the backbone for any merchant, fintech
          platform, or B2B network.
        </p>
        <div className="flex justify-center items-center mt-8">
          <Link href="/finserve">
            <button className="btn btn-primary text-center items-center">
              Discover FinServe
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
