"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogFirstPage() {
  const [activeCategory, setActiveCategory] = useState("Banking");

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 mb-48">
      <p className="lg:text-3xl md:text-xl sm:text-lg p-4">Blog</p>

      <nav className="flex space-x-4 px-4">
        <button
          onClick={() => setActiveCategory("Banking")}
          className={`px-4 ${
            activeCategory === "Banking"
              ? "underline text-gray-600"
              : "text-gray-400"
          }`}
        >
          Banking
        </button>
      </nav>

      <hr />

      {activeCategory === "Banking" && (
        <div className="flex flex-wrap gap-8 mt-8">
          <Link
            href="/what-is-core-banking"
            className="block w-full max-w-sm group"
          >
            <div className="relative w-full h-[200px] rounded-xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
              <Image
                src="/assets/BlogCoreBankingPlaceholder.png"
                alt="Core Banking"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-center text-gray-800 group-hover:underline">
              Core Banking Software
            </h2>
          </Link>

          <Link
            href="/how-to-register-nidhi-company-mca-2025-guidelines"
            className="block w-full max-w-sm group"
          >
            <div className="relative w-full h-[200px] rounded-xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
              <Image
                src="/assets/BlogNidhiCover.png"
                alt="Nidhi Company Guidelines 2025"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-center text-gray-800 group-hover:underline">
              Nidhi Company 2025 Guidelines
            </h2>
          </Link>
          <Link href="/bnpl-software" className="block w-full max-w-sm group">
            <div className="relative w-full h-[200px] rounded-xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
              <Image
                src="/assets/BNPLThumbnail.png"
                alt="Nidhi Company Guidelines 2025"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-center text-gray-800 group-hover:underline">
              BNPL: Embedded Finance
            </h2>
          </Link>
          <Link
            href="/loan-management-system"
            className="block w-full max-w-sm group"
          >
            <div className="relative w-full h-[200px] rounded-xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
              <Image
                src="/assets/Loan Management System.png"
                alt="Nidhi Company Guidelines 2025"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-center text-gray-800 group-hover:underline">
             Loan Management System
            </h2>
          </Link>
        </div>
      )}
    </main>
  );
}
