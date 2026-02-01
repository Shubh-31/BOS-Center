"use client";

import Image from "next/image";
import { useRef } from "react";

export const NidhiHero = () => {
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

          <h1 className="lg:text-5xl md:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-3 capitalize p-1">
            How to Register a Nidhi Company: MCA 2025 Complete Guidelines
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-3">
            Nidhi Company registration has become increasingly popular among
            entrepreneurs looking to start mutual benefit financial institutions
            in India. With the Ministry of Corporate Affairs (MCA) updating
            guidelines in 2025, understanding the complete procedure for Nidhi
            Company registration is essential for aspiring business owners.
          </p>
        </div>
      </div>
    </section>
  );
};
