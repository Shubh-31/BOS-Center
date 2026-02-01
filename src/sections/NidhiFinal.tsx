import React from "react";
import Link from "next/link";

export const NidhiFinal = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent text-center p-1">
          Final Words
        </h2>

        <p className="text-lg text-gray-800 mb-6">
          Nidhi Company registration under MCA 2025 guidelines offers excellent
          opportunities for community-based financial services. By following the
          structured procedure, meeting eligibility criteria, and maintaining
          ongoing compliance, entrepreneurs can successfully establish & operate
          Nidhi Companies.
          <br />
          <br />
          The key to successful Nidhi Company registration lies in thorough
          preparation, proper documentation, & understanding of regulatory
          requirements. With the right approach and professional guidance,
          registering a Nidhi Company can be a straightforward process that
          opens doors to sustainable community finance business opportunities.
        </p>

        <p className="text-lg text-gray-800">
          <strong>Ready to start your Nidhi Company registration?</strong>{" "}
          Once your company is incorporated, ensure smooth operations with our
          complete{" "}
          <Link
            href="https://aopay.in/nidhi-software"
            className="text-blue-700 underline hover:text-blue-900 transition"
          >
            Nidhi Software Solution
          </Link>
          . Our specialised software helps registered Nidhi Companies manage
          member accounts, loan processing, compliance reporting, and regulatory
          requirements efficiently. Contact us today to streamline your Nidhi
          Company operations and maintain MCA compliance effortlessly.
        </p>
      </div>
    </section>
  );
};
