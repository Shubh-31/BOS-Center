import Link from 'next/link';
import React from 'react'

export const LMSFinal = () => {
  return (
    <section className="p-4 bg-[radial-gradient(ellipse_100%_80%_at_bottom_left,#f0f4ff,#ffffff)] overflow-x-clip">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="md:text-4xl lg:text-5xl sm:text-3xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 capitalize pb-2">
            Conclusion
          </h2>
          <p className="text-lg text-[#010D3E] tracking-loose mt-8">
            Adopting a Loan Management System (LMS) is no longer just an option,
            it&apos;s a necessity for lenders who want to stay ahead of the
            competition. Whether managing personal loans, business financing, or
            BNPL solutions, LMS by BOS is a reliable partner to help you expand
            your lending operations.
          </p>
          <br />
          <p className="text-lg text-[#010D3E] tracking-loose mt-4">
            Ready to revolutionize your lending business?
          </p>
          <br />
          <p className="text-lg text-[#010D3E] tracking-loose mt-4">
            <Link href="https://aopay.in/">
              <u>Schedule a demo</u>
            </Link>{" "}
            with us today.
          </p>
        </div>
      </div>
    </section>
  );
}

