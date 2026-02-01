"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export const BNPLHero = () => {
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
            BNPL as Embedded Finance: Key Considerations for a Future Where
            Everyone Is a Lender
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-3">
            Financial services landscape is experiencing a revolutionary
            transformation where traditional boundaries between commerce and
            finance are dissolving.{" "}
            <Link href="https://aopay.in/fintech-solutions" className="underline cursor-pointer">
              Buy Now Pay Later (BNPL){" "}
            </Link>
            as embedded finance represents more than just a payment
            innovation—it&apos;s reshaping the fundamental architecture of how
            financial services are delivered and consumed.
          </p>
          <p className="text-xl text-[#010D3E] tracking-tight mt-3">
            This convergence is creating an ecosystem where virtually any
            platform can become a financial services provider, democratizing
            lending and opening unprecedented opportunities for businesses
            across industries. As we move toward a future where everyone can be
            a lender, understanding the mechanics, opportunities, and challenges
            of embedded BNPL becomes crucial for businesses seeking to
            capitalize on this $7 trillion market opportunity.This convergence
            is creating an ecosystem where virtually any platform can become a
            financial services provider, democratizing lending and opening
            unprecedented opportunities for businesses across industries. As we
            move toward a future where everyone can be a lender, understanding
            the mechanics, opportunities, and challenges of embedded BNPL
            becomes crucial for businesses seeking to capitalize on this $7
            trillion market opportunity.
          </p>
        </div>
      </div>
    </section>
  );
};
