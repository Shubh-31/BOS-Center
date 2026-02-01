import Script from "next/script";
import { FAQSection, GetStarted, PagesHeader } from "@/sections/mySection";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H3WithPointsPart2";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import Link from "next/link";
import { FlightUseCases } from "@/sections/FlightUseCases";
import BOSFlightFeatures from "@/sections/BOSFlightFeatures";
import DomesticFlightAPI from "@/sections/DomesticFlightAPI";
import FlightIntegrationsSection from "@/sections/FlightBookingAPI/FlightIntegrationSection";
import TravelSolutionSection from "@/sections/FlightBookingAPI/TravelSolutionSection";
import TransparentPricingSection from "@/sections/FlightBookingAPI/TransparentPricingSection";
import TravelSupportSection from "@/sections/FlightBookingAPI/TravelSupportSection";

export const metadata = {
  title:
    "Flight Booking API – BOS Center | Real-Time Flight Booking Integration",
  description:
    "Integrate live flight booking into your platform with BOS Center's Flight Booking API. Offer domestic and international flights with real-time pricing and availability.",
  //   keywords: [
  //     "BNPL Software",
  //     "embedded finance",
  //     "buy now pay later API",
  //     "embedded lending",
  //     "fintech solutions",
  //     "payment gateway",
  //     "BNPL implementation",
  //     "embedded finance market",
  //     "digital lending platform",
  //     "BNPL integration",
  //   ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bos.center/flight-booking-api-provider-india",
  },
  openGraph: {
    title: "Flight Booking API – BOS Center",
    description:
      "Launch real-time flight booking services with BOS Center’s powerful Flight Booking API for B2B travel platforms.",
    url: "hhttps://https://bos.center/flight-booking-api-provider-india",
    siteName: "BOS Center",
    images: [
      {
        url: "https://bos.center/images/flight-api-og.jpg",
        width: 1200,
        height: 630,
        alt: "Bos Center Open Graph Image",
      },
    ],
    type: "website",
  },
};

export default function FlightBookingApiProviderIndia() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id":
      "https://bos.center/flight-booking-api-provider-india/#localbusiness",
    name: "BOS Center Pvt. Ltd.",
    url: "https://bos.center/flight-booking-api-provider-india",
    telephone: "+91-8929898920",
    priceRange: "$$$",
    image: "https://bos.center/assets/img/logo.png",
    description:
      "BOS Center provides a low-cost and reliable Flight Booking API with real-time availability, instant reservations, multi-airline integration, and secure booking solutions for travel businesses.",

    address: {
      "@type": "PostalAddress",
      streetAddress: "73, Block B-1, Sewak Park Extension",
      addressLocality: "Uttam Nagar",
      addressRegion: "Delhi",
      postalCode: "110059",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.6219",
      longitude: "77.0521",
    },

    openingHours: "Mo-Sa 10:00-19:00",

    sameAs: [
      "https://www.facebook.com/BOSCenterIND",
      "https://www.instagram.com/boscenter.in/?next=%2F",
      "https://www.linkedin.com/company/bos-center-pvt-ltd",
    ],

    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "City", name: "Lucknow" },
      { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
      { "@type": "AdministrativeArea", name: "Bihar" },
      { "@type": "City", name: "Kolkata" },
      { "@type": "AdministrativeArea", name: "Gujarat" },
      { "@type": "AdministrativeArea", name: "Rajasthan" },
      { "@type": "City", name: "Faridabad" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
      { "@type": "AdministrativeArea", name: "Kerala" },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
      { "@type": "City", name: "Bengaluru" },
      { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
      { "@type": "AdministrativeArea", name: "Telangana" },
      { "@type": "AdministrativeArea", name: "Maharashtra" },
      { "@type": "AdministrativeArea", name: "Madhya Pradesh" },
      { "@type": "City", name: "Jaipur" },
      { "@type": "AdministrativeArea", name: "Punjab" },
      { "@type": "City", name: "Chandigarh" },
    ],

    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Flight Booking API Integration",
          description:
            "White-label flight booking API integration for travel agencies, portals, and apps with real-time availability and pricing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Multi-Airline Booking API",
          description:
            "API for multiple airlines with schedules, availability, fare search, and booking management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Secure Airline Booking API",
          description:
            "Secure flight booking API with payment integration, PNR management, and instant ticketing.",
        },
      },
    ],
  };

  const headerContent = {
    title: "Real-Time Flight Booking API For Travel Booking Platforms",
    description:
      "Transform your travel business with India's most comprehensive flight solution that seamlessly integrates both GDS and Low-Cost Carrier sources. Access real-time inventory from all major Indian airlines including IndiGo, Air India, SpiceJet, Vistara, Air Asia India, and Go First through a single API. Whether you're running a travel agency, OTA, corporate booking platform, or B2B aggregator, our Domestic Flight API delivers the speed, coverage, and reliability you need to dominate the domestic travel market.",
    imgSrc: "/assets/Lending1.png",
    alt: "Loan management software dashboard showing automated loan origination and approval workflow.",

    imgSrc: "/assets/FlightTicketBooking/Flight.png",
    alt: "Flight booking API integration with real-time pricing and seat availability.",
  };

  const features = [
    "IndiGo",
    "SpiceJet",
    "Air India",
    "Vistara",
    "GoAir",
    "AirAsia India",
    "15+ Airlines Connected",
    "500+ Routes Available",
    "99.9% API Uptime",
    "2sec Average Response Time",
  ];

  const content = [
    {
      heading2: "BOS Domestic Flight Ticket Booking API Solution",

      points: [
        {
          heading3: "Unified GDS and LCC Integration for Maximum Inventory",
          heading3Para:
            "Access the complete spectrum of India's domestic flight inventory through our dual-source integration strategy. Our API easily connects to major GDS providers (Amadeus, Sabre, Travelport) for full-service carriers like Air India and Vistara, while simultaneously integrating directly with Low-Cost Carrier APIs from IndiGo, SpiceJet, Air Asia India, Go First, and Akasa Air. Our hybrid approach ensures your customers always see the widest selection of flights and most competitive fares across all Indian routes.",
          imgSrc: "/assets/FlightTicketBooking/Unified.png",
        },

        {
          heading3:
            "Real-Time Availability and Instant Booking for Domestic Flights",
          heading3Para:
            "Deliver lightning-fast search results optimized specifically for India's domestic aviation network. Our API provides sub-second response times for searches across metro routes (Delhi-Mumbai, Bangalore-Hyderabad), tier-2 cities (Jaipur, Lucknow, Chandigarh), and regional destinations (Guwahati, Srinagar, Port Blair). Experience real-time seat availability checks, instant fare updates reflecting airline promotions, dynamic pricing based on demand, and immediate booking confirmations with PNR and e-ticket generation.",
          imgSrc: "/assets/FlightTicketBooking/RealTime.png",
        },
        {
          heading3: "Pan-India Coverage with Route-Optimized Search",
          heading3Para:
            "Support unlimited domestic routes covering all 150+ airports across India with special optimization for high-traffic sectors. Our Flight API handles complex itineraries including multi-city journeys (Delhi-Jaipur-Mumbai), one-way and round-trip bookings, connecting flights with layovers, and mixed-carrier combinations. Integration options include RESTful API for modern applications, XML/SOAP for legacy systems, and mobile SDKs for Android and iOS native apps.",
          imgSrc: "/assets/FlightTicketBooking/PanIndia.png",
        },
      ],
    },
  ];

  const material = [
    {
      heading2:
        "Enterprise-Grade Infrastructure Built for India's Travel Market",

      points: [
        {
          heading3: "High-Volume Transaction Processing",
          heading3Para:
            "Our flight solution infrastructure is specifically designed to handle the massive scale of India's domestic travel market. Process over 10 million search queries daily with consistent sub-1-second response times even during peak booking seasons like Diwali, summer vacations, and long weekends. Built on cloud infrastructure with automatic scaling, the system seamlessly manages traffic spikes during flash sales, festival season bookings, and promotional campaigns across India.",
          imgSrc:
            "/assets/FlightTicketBooking/TravelMarket/Enterprise/HighVolume.png",
        },
        {
          heading3: "99.9% Uptime with India-Based Servers",
          heading3Para:
            "We maintain industry-leading uptime with redundant servers located in Indian data centers (Mumbai, Delhi, Bangalore) ensuring low-latency connections to all Indian airline systems and GDS providers. Automatic failover mechanisms ensure continuous availability even during maintenance windows or provider outages. Our India-focused infrastructure delivers 30-50ms response times for domestic airline queries, significantly faster than international API providers.",
          imgSrc:
            "/assets/FlightTicketBooking/TravelMarket/Enterprise/IndiaBasedServers.png",
        },
        {
          heading3: "Compliance with Indian Travel Regulations",
          heading3Para:
            "Built specifically for the Indian market with full compliance to DGCA regulations, GST invoicing requirements, Indian payment gateway standards (RBI guidelines), data localization norms for Indian travelers, and airline-specific booking rules and policies. Our system automatically handles TDS calculations, GST breakup in fare display, and adheres to Consumer Protection Act provisions for cancellations and refunds.",
          imgSrc:
            "/assets/FlightTicketBooking/TravelMarket/Enterprise/TravelRegulations.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Why Choose BOS Flight Booking API?",
      heading2Para:
        "Experience the advantages of India's most reliable and comprehensive flight booking API solution designed for modern travel businesses.",
      points: [
        {
          heading3: "Lightning Fast Performance",
          heading3Para:
            "Industry-leading 98.5% booking success rate with intelligent retry mechanisms and fallback options ensuring maximum conversion rates.",
        },
        {
          heading3: "Smart Inventory Management",
          heading3Para:
            "AI-powered inventory optimization ensures accurate availability and competitive pricing across all airline partners for maximum revenue potential.  .",
        },
        {
          heading3: "Enterprise-Grade Security",
          heading3Para:
            "Bank-level security with PCI DSS compliance, SSL encryption, and secure API authentication protecting sensitive passenger and payment data.",
        },
        {
          heading3: "Mobile-First Architecture",
          heading3Para:
            "Optimized for mobile applications with responsive design support, minimal data usage, and seamless user experience across all devices.",
        },
        {
          heading3: "Revenue Optimization",
          heading3Para:
            "Dynamic pricing algorithms and smart upselling features help maximize revenue per booking with ancillary services and premium options.",
        },
      ],
    },
  ];

  const features2 = [
    "Unlimited Flight Search Queries",
    "Multi-Airline Integration (15+)",
    "Real-Time Booking & Confirmation",
    "E-Ticket Generation API",
    "Seat Selection & Ancillary Services",
    "Booking Management & Modifications",
    "PNR Status Tracking",
    "Fare Comparison Engine",
    "White-label Solutions",
    "24/7 Technical Support",
    "Dedicated Account Manager",
    "SLA-backed Performance Guarantee",
    "Custom Integration Support",
    "Revenue Analytics Dashboard",
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "Advanced Flight API Capabilities",
      heading2Para:
        "Discover the complete set of features that make BOS Flight API the preferred choice for travel businesses across India.",
      points: [
        {
          heading3: "Multi-Source Content",
          heading3Para:
            "Aggregate content from multiple GDS systems, airline direct connects, and consolidators for comprehensive flight inventory and competitive pricing options.",
        },
        {
          heading3: "Real-Time Flight Pricing Engine",
          heading3Para:
            "Dynamic fare calculation with real-time tax computation, currency conversion, and promotional fare application for accurate pricing display.",
        },
        {
          heading3: "Advanced Flight Search Filters",
          heading3Para:
            "Sophisticated filtering options including airlines, departure times, price range, flight duration, stops, aircraft type, and meal preferences.",
        },
        {
          heading3: "Fare Rules & Policies",
          heading3Para:
            "Detailed fare conditions, baggage policies, cancellation rules, and change fees displayed transparently for informed customer decisions.",
        },
        {
          heading3: "Group Flight Seat Booking Support",
          heading3Para:
            "Handle group bookings with special rates, block bookings, and customized terms for corporate clients and travel agencies.",
        },
        {
          heading3: "Ancillary Services API",
          heading3Para:
            "Integrate additional services like baggage, meals, seat upgrades, insurance, and lounge access for enhanced revenue opportunities.",
        },
      ],
    },
  ];

  const Steps = [
    {
      heading2: "Simple Flight API Integration Process",
      heading2Para:
        "Get your flight booking platform live in just 4 simple steps with our developer-friendly integration process.",
      steps: [
        {
          step1: "Flight API Registration",
          step1Para:
            "Sign up for flight API access and complete the onboarding process. Get your API credentials, documentation access, and sandbox environment within hours.",
        },
        {
          step2: "Development & Testing",
          step2Para:
            "Integrate flight search, booking, and management APIs using BOS complete documentation, SDKs, and testing environment with sample data.",
        },
        {
          step3: "Certification Process",
          step3Para:
            "Complete integration testing and certification process. BOS technical team validates your implementation and provides optimization recommendations.",
        },
        {
          step4: "Go Live",
          step4Para:
            "Deploy to production environment and start selling flights immediately. Access 24/7 technical support and account management services.",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions About India Domestic Flight API",
    faqs: [
      {
        question: "Which Indian airlines are covered in your API?",
        answer:
          "Our India Domestic Flight API provides complete coverage of all major domestic airlines including IndiGo, Air India, SpiceJet, Vistara, Air Asia India, Go First, Akasa Air, and Alliance Air. We integrate with both GDS sources (for Air India, Vistara) and direct LCC APIs (for IndiGo, SpiceJet, etc.), ensuring you get the widest inventory and best fares across all airlines.",
      },
      {
        question: "What is the difference between GDS and LCC integration?",
        answer:
          "GDS (Global Distribution System) integration connects you to full-service carriers like Air India and Vistara through established systems like Amadeus, Sabre, and Travelport. LCC (Low-Cost Carrier) integration provides direct API connectivity to airlines like IndiGo, SpiceJet, and Air Asia India. Our unified API seamlessly combines both sources, giving you access to all airlines through a single integration with automatic fare comparison",
      },
      {
        question: "How long does API integration take for my travel website?",
        answer:
          "Basic integration typically takes 2-3 days depending on your existing technical setup. We provide comprehensive documentation, code samples in popular Indian frameworks (PHP, .NET, Java), sandbox environment for testing, and dedicated support from India-based engineers. Most travel agencies complete integration and go live within 3-4 weeks from signup.",
      },
      {
        question: "Do you support all major Indian payment methods?",
        answer:
          "Yes, our API supports all popular Indian payment methods including credit/debit cards, UPI, net banking for all major banks, digital wallets, and EMI options. All transactions are processed through PCI DSS compliant payment gateways integrated specifically for the Indian market.",
      },
      {
        question: "Is GST invoicing included for domestic bookings?",
        answer:
          "Absolutely. Our system automatically generates GST-compliant invoices for all domestic flight bookings with proper breakup of base fare, airline GST, and your service charges. The invoices include your GSTIN and comply with all Indian GST regulations. You can customize invoice format with your branding and business details.",
      },
      {
        question: "Can I offer special corporate fares to my business clients?",
        answer:
          "Yes, our API supports corporate fare access for business travel segments. You can configure corporate rates from airlines that offer them, apply company-specific discounts, enforce travel policies, and generate detailed MIS reports for corporate clients. The system also supports approval workflows for travel managers and integrates with corporate credit facilities.",
      },
      {
        question:
          "What happens if a booking fails or there's a technical issue?",
        answer:
          "Our API includes secure error handling with automatic retry mechanisms for failed bookings, real-time status updates for all transactions, and detailed error messages for troubleshooting. In case of booking failures, the system automatically reverses any payment holds and provides clear messaging to retry. Our 24/7 support team based in India is available to resolve any technical issues within 2 hours.",
      },
      {
        question: "Can I integrate this with my existing travel portal or CRM?",
        answer:
          "Yes, BOS RESTful API is designed for easy integration with any existing system. Whether you have a WordPress website, custom-built portal, or CRM system, you can integrate our API through standard REST calls. We provide detailed documentation, webhooks for real-time updates, and sample code for popular platforms used by Indian travel agencies.",
      },
      {
        question: "Do you provide support for B2B travel agent networks?",
        answer:
          "Yes, we specialize in B2B solutions for travel aggregators and agency networks. Our platform supports multi-level agent hierarchies (super distributor > distributor > retailer), real-time credit management, commission configuration by agent tier, wallet systems, and API access for retail agents. Many leading B2B aggregators in India use our platform to manage thousands of retail agents.",
      },
      {
        question: "What about cancellations and refunds for domestic bookings?",
        answer:
          "BOS API handles the cancellation and refund workflow automatically. For each airline, we process cancellations as per their specific policies, calculate applicable refund amounts minus cancellation charges, process refunds to the original payment method, and generate credit notes for future use where applicable. The system follows all airline-specific cancellation rules and Indian consumer protection guidelines.",
      },
    ],
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <PagesHeader headerContent={headerContent} />
      <section className="py-8 px-6 bg-gray-50">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Complete Coverage of India&apos;s Domestic Flight Network via GDS & LCC
            Integration
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Watch our demo showcasing how our domestic flight solution powers
            modern travel booking platforms. See real-time flight searches
            across 100+ domestic routes, dynamic fare comparison between GDS and
            LCC sources, instant booking confirmations with PNR generation, easy
            ancillary services integration, and automated e-ticket delivery.
            Discover how leading Indian travel agencies and OTAs leverage our
            unified API to deliver exceptional booking experiences to millions
            of travelers.
          </p>
        </div>

        {/* Card */}
      </section>
      <ContentWithDescriptivePoints content={content} />
      <BOSFlightFeatures />
      <DomesticFlightAPI />
      <H2DescH3Desc contentWithDescription={material} />
      <FlightIntegrationsSection />
      <TravelSolutionSection />
      <TransparentPricingSection />
      <TravelSupportSection />
      {/* <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <StepsWithExplanation Steps={Steps} /> */}

      {/* <FlightUseCases /> */}
      <FAQSection faqs={faqContent.faqs} />

      <GetStarted
        getStarted={{
          title: "Ready to Dominate India's Domestic Travel Market?",
          description:
            "Connect with BOS Domestic Flight API specialists to discuss your specific requirements for the Indian travel market. Schedule a personalized demo covering your target routes and use cases, explore our API documentation with Indian examples, or start building immediately in our free sandbox environment with dummy bookings.",
          subTitle1:
            "Whether you're launching a new travel startup, expanding an existing agency network, or building B2B aggregator platform, we have the right solution for your India domestic flight booking needs.",
          CTABtn1: "Schedule Live Demo",
          CTABtn2: "Talk to Sales Team",
          CTABtn3: "API Documentation",
        }}
      />
    </>
  );
}
