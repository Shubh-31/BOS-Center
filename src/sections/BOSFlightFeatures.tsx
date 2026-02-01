"use client";
import Image from "next/image";
import React from "react";

interface FeatureSection {
  title: string;
  points: string[];
  imgSrc : string;
}

const featuresData: FeatureSection[] = [
  {
    imgSrc: "/assets/FlightTicketBooking/TravelMarket/FlightSearchAPI.png",
    title: "Flight Search API",
    points: [
      "Metro-to-metro and tier-2 city route coverage",
      "Flexible date search with fare calendar (±3 days view)",
      "Filter by airline preference (IndiGo, Air India, SpiceJet, etc.)",
      "Sort by price, duration, departure time, and stops",
      "Direct flight vs connecting flight options",
      "Early morning, afternoon, evening, and night flight filters",
      "Fare class selection (Economy, Premium Economy, Business)",
      "Real-time seat availability with seat map display",
    ],
  },
  {
    imgSrc: "/assets/FlightTicketBooking/TravelMarket/FareComparison.png",
    title: "Flight Price API & Fare Comparison",
    points: [
      "Live fare comparison between GDS and LCC sources",
      "Automatic selection of lowest fare across all sources",
      "Markup and commission configuration by airline",
      "Corporate fare access for business travel segments",
      "Group booking fare management (10+ passengers)",
      "Airline-specific promotional fare distribution",
      "Student, senior citizen, and armed forces discounts",
      "Baggage allowance and fee breakdown display",
    ],
  },
  {
    imgSrc:
      "/assets/FlightTicketBooking/TravelMarket/FlightBookingManagementSystem.png",
    title: "Flight Booking Management System",
    points: [
      "Instant PNR generation for all airlines",
      "Automated e-ticket issuance via email and SMS",
      "Booking modification and rescheduling support",
      "Cancellation and refund processing per airline policy",
      "Hold booking functionality (where available)",
      "Split PNR management for group bookings",
      "Booking status tracking and retrieval",
      "Failed booking retry mechanism with automatic recovery",
    ],
  },
  {
    imgSrc: "/assets/FlightTicketBooking/TravelMarket/AncillaryServices.png",
    title: "Ancillary Services and Add-Ons",
    points: [
      "Web check-in integration for all major airlines",
      "Seat selection with interactive seat maps",
      "Extra baggage purchase (15kg, 20kg, 25kg options)",
      "Meal selection for eligible flights",
      "Travel insurance offerings from Indian providers",
      "Airport lounge access booking (Priority Pass, Dreamfolks)",
      "Fast-track immigration and security",
      "SMS and email notification services",
    ],
  },
  {
    imgSrc: "/assets/FlightTicketBooking/TravelMarket/IndianMarket.png",
    title: "Payment Integration for Indian Market",
    points: [
      "Support for all major Indian payment methods",
      "Credit/Debit card processing",
      "UPI integration",
      "Net banking for all major Indian banks",
      "Digital wallets",
      "Corporate credit and prepaid accounts",
      "PCI DSS compliant payment gateway integration",
    ],
  },
  {
    imgSrc: "/assets/FlightTicketBooking/TravelMarket/AnalyticsDashboard.png",
    title: "Detailed Reporting & Analytics Dashboard",
    points: [
      "Real-time booking and revenue dashboards",
      "Route-wise performance analytics",
      "Airline-wise booking distribution reports",
      "GDS vs LCC booking comparison",
      "Commission and markup tracking",
      "Popular route and time slot analysis",
      "Customer booking pattern insights",
      "Search-to-booking conversion metrics",
    ],
  },
];

const BOSFlightFeatures: React.FC = () => {
  return (
    <section className="bg-white text-black py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          BOS Flight API Features Tailored for India&apos;s Travel Market
        </h2>
        <p className="text-gray-600 max-w-3xl mb-12 mx-auto">
          Our API comes loaded with features specifically designed for the
          unique requirements of travel booking in India. From basic search
          functionality to advanced ancillary management, we&apos;ve built
          everything you need to launch and scale your India-focused travel
          booking platform with minimal development effort.
        </p>

        <div className="flex justify-center">
         <div className="flex flex-wrap justify-center gap-8 max-w-5xl w-full mx-auto">
  {featuresData.map((section) => (
    <div
      key={section.title}
      className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 bg-white w-full sm:w-[48%] md:w-[48%] lg:w-[48%]"
    >
      <span className="flex w-full items-center">
        <Image
          src={section.imgSrc}
          alt={section.title}
          className="w-8 mb-2 mr-2"
          width={100}
          height={100}
        />
        <h3 className="text-xl font-semibold mb-4 text-black text-center md:text-left">
          {section.title}
        </h3>
      </span>

      <ul className="space-y-2 text-gray-700">
        {section.points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 mt-2 bg-black rounded-full"></span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default BOSFlightFeatures;
