"use client";

import React from "react";
import Link from "next/link";

interface BlogMiddleSectionProps {
  heading: string;
  subheading?: string;
  buttonLabel: string;
  buttonLink: string;
}

export const BlogMiddleSection: React.FC<BlogMiddleSectionProps> = ({
  heading,
  subheading,
  buttonLabel,
  buttonLink,
}) => {
  return (
    <section className="py-8 px-6 bg-[#ffffff]">
      <div className="max-w-5xl mx-auto text-left border-2 border-blue-500 rounded-md p-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {heading}
        </h2>

        {subheading && (
          <p className="text-lg text-gray-700 mb-4">{subheading}</p>
        )}

        <Link
          href={buttonLink}
          className="inline-block bg-gradient-to-r from-black to-[#001E80] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:from-[#001E80] hover:to-black transition duration-300"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
};
