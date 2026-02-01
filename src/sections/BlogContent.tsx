import React from "react";
import Link from "next/link";

const BlogContent = () => {
  const points = [
    "Customer initiates a transaction (deposit, withdrawal, loan request)",
    "The core system processes the request instantly",
    "Updates are reflected across all channels and branches",
    "The system logs the transaction for reporting and compliance",
  ];

  return (
    <section className="py-12 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#f0f4ff,#ffffff_100%)]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-8xl mx-auto mb-12">
          <h2 className="w-full text-4xl sm:text-2xl md:text-4xl lg:text-5xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-8 pb-2">
            How Does a Core Banking System Work?
          </h2>
          <p className="section-description mt-5 text-xl">
            Core banking systems work by centralizing all data and processes
            into one unified infrastructure. When a customer performs a
            transaction—whether at a branch, ATM, or mobile app—the system
            updates their account in real time. Here is a simplified flow:
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-8xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] rounded-xl shadow-lg p-8">
            <ul className="space-y-6">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#001E80] text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg text-gray-800">{point}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="section-description mt-5">
          Modern core banking systems use{" "}
          <strong>cloud computing, APIs,</strong> and{" "}
          <strong>AI-powered analytics </strong>to improve scalability, speed,
          and service delivery.
        </p>
      </div>
    </section>
  );
};

export default BlogContent;
