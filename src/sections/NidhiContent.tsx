import React from "react";
import { CircleSmall } from "lucide-react";

const NidhiContent = () => {
  const sections = [
    {
      title: "Membership Requirements:",
      points: [
        "Minimum 200 members required at the time of incorporation.",
        "All members must be individuals (no corporate membership allowed).",
        "Members should be residents of the same state where the company is registered.",
      ],
    },
    {
      title: "Capital Requirements:",
      points: [
        "Minimum paid-up equity share capital of ₹10 lakhs.",
        "Net owned funds of at least ₹10 lakhs.",
        "No maximum limit on authorised capital.",
      ],
    },
    {
      title: "Directorship Criteria:",
      points: [
        "Minimum 3 directors required.",
        "Maximum 15 directors allowed.",
        "At least one director must have relevant financial experience.",
      ],
    },
  ];

  return (
    <section className="py-6 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#f0f4ff,#ffffff_100%)]">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h2 className="w-full text-4xl sm:text-2xl md:text-4xl lg:text-4xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-8 pb-2">
            Eligibility Criteria for Nidhi Company Registration
          </h2>
        </div>

        {/* Sub Heading */}
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Minimum Requirements Under MCA 2025 Guidelines
          </h3>

          {/* Sections */}
          <div className="space-y-4">
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">
                  {section.title}
                </h4>
                {section.points.map((point, pointIdx) => (
                  <div
                    key={pointIdx}
                    className="flex items-center text-gray-700"
                  >
                    <CircleSmall className="mr-2" /> {point}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NidhiContent;
