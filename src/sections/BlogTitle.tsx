"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export const BlogTitle = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="md:pb-4 bg-[radial-gradient(ellipse_100%_80%_at_bottom_left,#f0f4ff,#ffffff)] overflow-x-clip"
    >
      <div className="container">
        <div className="flex flex-col md:flex-col items-center justify-center md:space-x-8">
          <Image
            src="/assets/BlogImage1.png"
            alt="What is Core Banking Solution - Definitions, Features, Benefits"
            width={648}
            height={648}
            className="w-full h-4/5 object-cover mb-4"
          />

          <h1 className="lg:text-5xl md:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-3 capitalize pb-2">
            What Is Loan Management System?
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-3">
            <Link href="https://aopay.in/loan-management-software">
              <u>Loan Management System (LMS)</u>
            </Link>{" "}
            is a digital platform that automates and manages every stage of the
            lending lifecycle — from loan origination and underwriting to
            disbursement, repayment, and closure. Whether you&apos;re a
            traditional bank, NBFC, fintech, or microfinance institution, an LMS
            helps reduce manual work, improve compliance, and deliver faster,
            smarter, and more secure lending experiences.
            <br />
            With rising competition and regulatory pressure, adopting a
            cloud-based loan management software is essential for modern lenders
            looking to scale their operations while staying compliant.
          </p>
        </div>
      </div>
    </section>
  );
};
