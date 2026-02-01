import React from "react";

export const NidhiBenefits = () => {
  const benefits = [
    {
      title: "Financial Advantages",
      points: [
        "Exemption from various provisions of RBI regulations.",
        "Lower regulatory compliance compared to other NBFCs.",
        "Simplified lending and borrowing procedures.",
        "Tax benefits under specific conditions.",
      ],
    },
    {
      title: "Operational Benefits",
      points: [
        "Community-focused business model.",
        "Mutual benefit structure builds trust.",
        "Flexibility in interest rate determination.",
        "Simplified governance structure.",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent pb-2">
          Key Benefits of Nidhi Company Registration
        </h2>

        <div className="space-y-12">
          {benefits.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                {section.points.map((point, pointIdx) => (
                  <li key={pointIdx} className="text-gray-700 text-lg">
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
