"use client";

import Image from "next/image";
import { useRef } from "react";

export const BlogHero = () => {
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
              What Is Core Banking Software?
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-3">
              Core Banking Software is a centralized digital platform that
              allows banks and financial institutions to manage their day-to-day
              operations—such as customer accounts, deposits, withdrawals,
              loans, and transactions—from a single, secure system. It enables
              real-time processing and seamless service across multiple
              branches.
              <br />
              The term <strong>&#39;&#39;core&#39;&#39;</strong> stands for{" "}
              <strong>Centralized Online Real-time Environment</strong>,
              emphasizing accessibility and consistency.
            </p>
         
        </div>
      </div>
    </section>
  );
};
