"use client";

export const NidhiBankingSoftware = () => {
  const phases = [
    {
      phase: "Phase 1: Pre-Registration Preparation",
      steps: [
        {
          title: "Step 1: Name Reservation",
          description:
            "Apply for company name approval through the MCA portal using Form INC-1. The proposed name should reflect the Nidhi nature of business and comply with naming guidelines.",
        },
        {
          title: "Step 2: Obtain Digital Requirements",
          description:
            "Secure Digital Signature Certificates for all directors and apply for Director Identification Numbers through Form DIR-3.",
        },
      ],
    },
    {
      phase: "Phase 2: Incorporation Process",
      steps: [
        {
          title: "Step 3: File Incorporation Documents",
          description:
            "Submit Form INC-2 along with MOA, AOA, and other required documents through the MCA21 portal. Pay the prescribed fees based on authorised capital.",
        },
        {
          title: "Step 4: Certificate of Incorporation",
          description:
            "Upon successful verification, MCA issues the Certificate of Incorporation, legally establishing your Nidhi Company.",
        },
      ],
    },
    {
      phase: "Phase 3: Post-Incorporation Compliance",
      steps: [
        {
          title: "Step 5: Nidhi Declaration Filing",
          description:
            "File Form NDH-1 within 120 days of incorporation, declaring commencement of Nidhi business activities.",
        },
        {
          title: "Step 6: Regulatory Compliance Setup",
          description:
            "Establish internal systems for member verification, loan processing, and regulatory reporting as per Nidhi Rules 2014.",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)] px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="w-full sm:text-3xl md:text-4xl lg:text-4xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mb-8 pb-2">
          Step-by-Step Nidhi Company Registration Procedure
        </h2>

        <div className="space-y-12">
          {phases.map((phase, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {phase.phase}
              </h3>
              <div className="space-y-4">
                {phase.steps.map((step, stepIdx) => (
                  <div
                    key={stepIdx}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <h4 className="text-lg font-semibold text-[#001E80]">
                      {step.title}
                    </h4>
                    <p className="text-gray-700 mt-1">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
