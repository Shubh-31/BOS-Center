"use client";

import React from "react";
import Link from "next/link";

export const AutoScrolling = () => {
  const items = [
    {
      label: "Manage Travel Bookings & Custom Packages",
      link: "/core-banking-software",
    },
    {
      label: "Book Flights, Trains, Buses & Hotels",
      link: "/nidhi-company-software",
    },
    {
      label: "Connect & Integrate Travel APIs",
      link: "/nbfc-software",
    },
    {
      label: "Manage Partners, Retailers & B2B/B2C Networks",
      link: "/loan-management-software",
    },
    {
      label:
        "Offer Mobile Recharge, Bill Payment, Money Transfer, AEPS & UPI AutoPay",
      link: "/microfinance-software",
    },
    {
      label: "Track Customers, Transactions & Business Growth",
      link: "/peer-to-peer-lending-software",
    },
    {
      label: "Automate Daily Operations & Agent Activities",
      link: "/cooperative-society-software",
    },
    {
      label: "Centralize Business & Reseller Management",
      link: "/api-management-software",
    },
   
  ];

  return (
    <div className="w-full bg-[radial-gradient(ellipse_100%_80%_at_bottom_left,#f0f4ff,#ffffff)] py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Headings */}
        <div className="flex justify-between items-center mb-8 flex-col md:flex-row gap-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            One Smart Platform for Travel, E-commerce & Reseller Management:
          </h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="inline-block px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition-all duration-400 ease-in-out text-sm md:text-base font-small hover:border-gray-600"
            >
              {item.label}
            </Link>
          ))}

          <span className="text-lg md:text-xl font-semibold text-gray-800 ml-auto">
            #Find the Best Solution at BOS
          </span>
        </div>
      </div>
    </div>
  );
};
