"use client";

import Image from "next/image";

export const LMSContentSection1 = () => {
  const features = [
    {
      title: "Faster Loan Processing",
      description:
        "Automate tedious workflows and reduce approval times from days to minutes.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Stay audit-ready with built-in compliance checks and documentation.",
    },
    {
      title: "Risk Mitigation",
      description:
        "Integrate credit scoring, fraud detection, and real-time monitoring.",
    },
    {
      title: "Improved Customer Experience",
      description:
        "Enable self-service portals, instant notifications, and faster disbursements.",
    },
    {
      title: "Operational Scalability",
      description:
        "Handle high loan volumes with ease through process automation and cloud scalability.",
    },
  ];

  return (
    <section className="py-12 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)]">
      <div className="container">
        <div className="w-full max-w-8xl">
          <h2 className="w-full text-4xl sm:text-2xl md:text-4xl lg:text-5xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-4 pb-2">
            Benefits of Loan Management System
          </h2>
          <p className="section-description mt-2 text-xl text-center">
            Implementing a robust LMS delivers numerous benefits for lenders of
            all sizes:
          </p>
        </div>
        <section className="py-4 px-4 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center"
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-700 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-center mt-6">
          <Image
            src="/assets/LMS-benefits.png"
            alt="BOS Loan Management System dashboard showing loan performance metrics and approval workflows"
            width={800}
            height={450}
            className="rounded-xl shadow-lg w-3/4"
          />
        </div>
      </div>
    </section>
  );
};
