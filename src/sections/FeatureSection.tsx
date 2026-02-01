import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Link from "next/link";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
interface Feature {
  title: string;
  description: string;
  icon: string;
  large?: boolean;
}

const features: Feature[] = [
  {
    title: "NBFC & Loan Management",
    description:
      "Managed MongoDB, Kafka, MySQL, PostgreSQL, and Managed Databases for Redis® let you focus on your apps while we update and scale your databases.",
    icon: "/icons/database.svg",
    large: true,
  },
  {
    title: "Nidhi, Microfinance & P2P Lending",
    description:
      "DigitalOcean Droplets are simple, scalable virtual machines for all your web hosting and VPS hosting needs.",
    icon: "/icons/virtual-machine.svg",
  },
  {
    title: "Core Banking & Co-Operative Society",
    description:
      "Reveal the true power of your data and bring clarity to every situation with Looker and Google Cloud.",
    icon: "/icons/data-analytics.svg",
  },
  {
    title: "CRM, Lead Tracking & User Management",
    description:
      "Build AI agents and generative AI applications with our fully managed AI platform, Vertex AI—enhanced by Gemini, over 130 foundation models, and an ecosystem of AI partners.",
    icon: "/icons/ai.svg",
    large: true,
  },
  {
    title: "Role-Based Access for Admins & Agents",
    description:
      "Build AI agents and generative AI applications with our fully managed AI platform, Vertex AI—enhanced by Gemini, over 130 foundation models, and an ecosystem of AI partners.",
    icon: "/icons/ai.svg",
    large: true,
  },
  {
    title: "Custom Modules for Regulated Entities",
    description:
      "Build AI agents and generative AI applications with our fully managed AI platform, Vertex AI—enhanced by Gemini, over 130 foundation models, and an ecosystem of AI partners.",
    icon: "/icons/ai.svg",
    large: true,
  },
];




const FeatureSection = () => {
  return (
    <section className="pt-8 pb-2 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#f0f4ff,#ffffff_100%)]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-8xl mx-auto mb-12">
          <div className="tag">Amazing Products</div>
          <h2 className="w-full text-4xl sm:text-4xl md:text-4xl lg:text-4xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-2">
            FinNest – Complete Suite for Financial Institutions
          </h2>
          <p className="section-description mt-5 text-2xl">
            Everything you need to run a digital-first NBFC, Nidhi Company,
            Co-Operative Society, or Lending Platform — in one app.
          </p>
        </div>

        {/* Features */}
        <div className="max-w-8xl mx-auto px-4 py-8 bg-inherit">
          <div className="flex flex-col md:flex-row items-start md:space-x-12">
            {/* Key Features */}
            <div className="w-full md:w-1/2 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Key Features
              </h3>

              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index}>
                    <p className="text-xl font-semibold text-gray-900 mb-1">
                      <h4 className="flex items-center gap-2 text-xl font-medium text-gray-800 mb-2">
                        <CheckIcon className="h-6 w-6 text-green-600" />
                        {feature.title}
                      </h4>
                    </p>
                    {/* {feature.description && (
              <p className="text-gray-600">{feature.description}</p>
            )} */}
                  </li>
                ))}
              </ul>
            </div>

            {/* Images */}
            <div className="w-full md:w-1/2 flex flex-wrap justify-center gap-6 mt-8 md:mt-0">
              <Image
                src="/assets/FinNestHome1.svg"
                alt="FinNest for Banks & Neo-Banks"
                width={160}
                height={160}
                className="object-contain rounded-lg"
              />
              <Image
                src="/assets/FinNestHome2.svg"
                alt="FinNest for NBFCs"
                width={160}
                height={160}
                className="object-contain rounded-lg"
              />
              <Image
                src="/assets/FinNestHome3.svg"
                alt="FinNest for Managing Loans & Payments"
                width={160}
                height={160}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        <p className="section-description mt-5 text-2xl">
          Modular, Scalable, Compliance Ready - FinNest empowers admins, agents,
          & field staff with real-time insights, offline support, with speed and
          bank-grade security.
        </p>
        <div className="flex justify-center items-center mt-8">
          <Link href="/finnest">
            <button className="btn btn-primary text-center items-center">
              Discover FinNest
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
