"use client";

import Image from "next/image";

export const LMSContentSection2 = () => {
  const features = [
    {
      title: "End-to-end loan lifecycle management",

    },
    {
      title: "Automated KYC, credit scoring, and underwriting",
    
    },
    {
      title: "Custom loan product configuration",
    
    },
    {
      title: "API integrations with CRMs, bureaus, and payment gateways",
     
    },
    {
      title: "Repayment scheduling and auto-debit",
     
    },
    {
      title: "NPA tracking and delinquency management",
     
    },
    {
      title: "Audit trails, real-time dashboards, and reporting",
   
    },
    {
      title: "Cloud-based deployment with mobile accessibility",

    }
  ];

  return (
    <section className="py-12 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)]">
      <div className="container">
        <div className="w-full max-w-8xl">
          <h2 className="w-full text-4xl sm:text-2xl md:text-4xl lg:text-5xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-4 pb-2">
            Capabilities of Loan Management System
          </h2>
          <p className="section-description mt-2 text-xl text-center">
            Modern LMS comes packed with features designed to support a wide
            range of lending workflows:
          </p>
        </div>
        <section className="py-4 px-4 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center"
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-center mt-6">
          <Image
            src="/assets/LMS-Capabilities.png"
            alt="Gold loan workflow with valuation, approval, and asset tracking in BOS LMS"
            width={800}
            height={450}
            className="rounded-xl shadow-lg w-3/4"
          />
        </div>
      </div>
    </section>
  );
};
