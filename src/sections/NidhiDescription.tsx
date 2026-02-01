import { CheckIcon } from "lucide-react";
import React from "react";

export const NidhiDescription = () => {
  const sections = [
    {
      title: "For Directors:",
      points: [
        "PAN cards & Aadhaar cards of all directors.",
        "Passport-size photographs.",
        "Address proof (utility bills, bank statements).",
        "Director Identification Number (DIN) for each director.",
        "Digital Signature Certificates (DSC).",
      ],
    },
    {
      title: "For Company Registration:",
      points: [
        "Memorandum of Association (MOA).",
        "Articles of Association (AOA).",
        "Declaration of compliance with Nidhi Rules.",
        "Registered office proof (rent agreement/ownership documents).",
        "No Objection Certificate from property owner.",
      ],
    },
  ];

  return (
    <section className="py-8 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)]">
      <div className="container max-w-6xl mx-auto">
        <h2 className="w-full sm:text-3xl md:text-4xl lg:text-4xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mb-8 pb-2">
          Documents Required for Nidhi Company Registration
        </h2>

        <p className="text-xl text-gray-700 mb-3">
          Essential Documentation Checklist
        </p>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 text-base"
                  >
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                    <span>{point}</span>
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
