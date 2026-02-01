import React from "react";

export const NidhiCompliance = () => {
  const sections = [
    {
      title: "Annual Compliances",
      points: [
        "File annual returns (Form AOC-4 and MGT-7).",
        "Conduct mandatory audit and file financial statements.",
        "Maintain minimum Net Owned Funds ratio.",
        "Submit Nidhi Annual Financial Return (Form NDH-3).",
      ],
    },
    {
      title: "Member-Related Compliance",
      points: [
        "Maintain updated member register.",
        "Ensure all transactions are with members only.",
        "Conduct annual general meetings.",
        "Issue share certificates to members.",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-10 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent p-1">
          Important Compliance Requirements Post-Registration
        </h2>

        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Ongoing Regulatory Obligations
        </h3>

        <div className="space-y-10">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-700">
                {section.title}
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                {section.points.map((point, pointIdx) => (
                  <li key={pointIdx} className="text-gray-700 text-base">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
