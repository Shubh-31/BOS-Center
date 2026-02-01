import React from "react";

export const NidhiChallenge = () => {
  return (
    <section className="py-8 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent pb-2">
          Common Challenges and Solutions
        </h2>

        <div className="space-y-6 text-gray-800 text-lg">
          <p>
            <strong>Member Acquisition:</strong> Many applicants struggle to
            secure 200 members. <br />
            <span className="block mt-2">
              <strong>Solution:</strong> Engage with local communities,
              self-help groups, and professional networks to build a membership
              base.
            </span>
          </p>

          <p>
            <strong>Capital Requirements:</strong> Meeting minimum capital
            requirements can be challenging. <br />
            <span className="block mt-2">
              <strong>Solution:</strong> Consider bringing in additional
              promoters or members who can contribute to equity capital.
            </span>
          </p>

          <p>
            <strong>Regulatory Complexity:</strong> Understanding evolving
            regulations requires expertise. <br />
            <span className="block mt-2">
              <strong>Solution:</strong> Engage qualified company secretaries
              or chartered accountants specialising in Nidhi Companies.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
