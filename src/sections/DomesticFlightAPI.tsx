"use client";

import Image from "next/image";
import React from "react";

interface Airline {
  name: string;
  description: string;
  points: string[];
  imgSrc: string;
}

interface CarrierType {
  title: string;
  airlines: Airline[];
}

const carrierData: CarrierType[] = [
  {
    title: "Full-Service Carriers via GDS Integration",
    airlines: [
      {
        imgSrc:
          "/assets/FlightTicketBooking/TravelMarket/Full-Service Carriers via GDS Integration/AirIndia.png",
        name: "Air India",
        description:
          "India's flag carrier with extensive metro and tier-2 connectivity",
        points: [
          "Full GDS availability through Amadeus, Sabre, Travelport",
          "Business class and economy fare families",
          "Star Alliance benefits and codeshare flights",
          "Corporate travel program access",
        ],
      },
      {
        imgSrc:
          "/assets/FlightTicketBooking/TravelMarket/Full-Service Carriers via GDS Integration/Vistara.png",
        name: "Vistara",
        description: "Premium full-service carrier (merger with Air India)",
        points: [
          "Complete fare class availability (Economy, Premium Economy, Business)",
          "Club Vistara loyalty program integration",
          "Corporate booking and SME travel solutions",
          "Enhanced baggage allowances and amenities",
        ],
      },
      {
        imgSrc:
          "/assets/FlightTicketBooking/TravelMarket/Full-Service Carriers via GDS Integration/AllianceAir.png",
        name: "Alliance Air",
        description: "Regional connectivity specialist",
        points: [
          "Coverage of tier-2 and tier-3 cities under UDAN scheme",
          "Essential regional routes across India",
          "Accessible through Air India GDS channels",
        ],
      },
    ],
  },
  {
    title: "Low-Cost Carriers via Direct LCC API",
    airlines: [
      {
        imgSrc:
          "/assets/FlightTicketBooking/TravelMarket/Full-Service Carriers via GDS Integration/Indigo.png",
        name: "IndiGo (6E)",
        description: "India's largest domestic airline with 60%+ market share",
        points: [
          "Direct API integration for best fares",
          "6E Flex, 6E Prime, and 6E Add-ons",
          "IndiGo Stretch and business class on select routes",
          "Fast-forward seats and priority services",
        ],
      },
      {
        imgSrc:
          "/assets/FlightTicketBooking/TravelMarket/Full-Service Carriers via GDS Integration/SpiceJet.png",
        name: "SpiceJet (SG)",
        description: "Major LCC with pan-India network",
        points: [
          "SpiceMax premium economy offering",
          "Cargo and charter booking capabilities",
          "SpiceClub loyalty program integration",
          "Special fares for students and senior citizens",
        ],
      },
      {
        imgSrc:
          "/assets/FlightTicketBooking/TravelMarket/Full-Service Carriers via GDS Integration/AirAsiaIndia.png",
        name: "Air Asia India (I5)",
        description: "Budget carrier with focus on South India",
        points: [
          "Ultra-low-cost fares on select routes",
          "Premium Flex and Value Pack options",
          "Connect flights with AirAsia network",
          "BIG loyalty program benefits",
        ],
      },
      {
        imgSrc:
          "/assets/FlightTicketBooking/TravelMarket/Full-Service Carriers via GDS Integration/Go.png",
        name: "Go First (G8)",
        description: "Business-friendly LCC",
        points: [
          "GoMore and GoFlex fare options",
          "Focus on business travelers",
          "Select routes with regional connectivity",
        ],
      },
      {
        imgSrc:
          "/assets/FlightTicketBooking/TravelMarket/Full-Service Carriers via GDS Integration/AkasaAir.png",
        name: "Akasa Air (QP)",
        description: "New-age carrier with modern fleet",
        points: [
          "Premium economy and standard economy",
          "Focus on tech-enabled travel experience",
          "Growing domestic route network",
        ],
      },
    ],
  },
];

const DomesticFlightAPI: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white text-black py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Access All Major Indian Airlines Through Single Flight API Integration
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Our Domestic Flight API provides comprehensive coverage of
          India&apos;s entire domestic aviation ecosystem. Through our unified
          integration, you get access to both full-service carriers via GDS
          channels and Low-Cost Carriers through direct API connections,
          eliminating the need for multiple technical integrations.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {carrierData.map((carrier) => (
          <div key={carrier.title} className="space-y-8">
            {/* Section Header */}
            <div className="flex items-center justify-center gap-3">
              <h3 className="text-2xl font-semibold text-black">
                {carrier.title}
              </h3>
            </div>

            {/* Airlines Grid */}
            {/* Airlines Flex Layout */}
            <div className="flex flex-wrap justify-center gap-8">
              {carrier.airlines.map((airline) => (
                <div
                  key={airline.name}
                  className="backdrop-blur-lg bg-white/40 border border-gray-200 rounded-2xl p-6 w-full sm:w-[45%] md:w-[30%] shadow-sm hover:shadow-md hover:bg-white/60 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={airline.imgSrc}
                      alt={airline.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <h4 className="text-xl font-medium text-black">
                      {airline.name}
                    </h4>
                  </div>

                  <p className="text-gray-700 mb-3">{airline.description}</p>

                  <ul className="space-y-2 text-gray-700 text-sm">
                    {airline.points.map((point) => (
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
        ))}
      </div>
    </section>
  );
};

export default DomesticFlightAPI;
