import Script from "next/script";
import { FAQSection, GetStarted, PagesHeader } from "@/sections/mySection";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H3WithPointsPart2";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import Link from "next/link";
import { FlightUseCases } from "@/sections/FlightUseCases";
import HotelFeaturesSection from "@/sections/HotelBookingAPI/HotelFeaturesSection";
import StartNowSection from "@/sections/HotelBookingAPI/StartNowSection";
import PerformanceSection from "@/sections/HotelBookingAPI/PerformanceSection";
import IntegrationTimeline from "@/sections/HotelBookingAPI/IntegrationTimeline";
import EnterpriseSupport from "@/sections/HotelBookingAPI/EnterpriseSupport";
import CoverageSection from "@/sections/HotelBookingAPI/CoverageSection";
import ScalableHotelBooking from "@/sections/HotelBookingAPI/ScalableHotelBooking";
import HotelSuppliersGrid from "@/sections/HotelBookingAPI/HotelSuppliersGrid";

export const metadata = {
  title:
    "Hotel Booking API – BOS Center | Real-Time Hotel Inventory Integration",
  description:
    "Add hotel booking to your travel portal with BOS Center’s Hotel Booking API. Access global inventory, real-time availability, and instant booking confirmations.",
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
    canonical: "https://bos.center/hotel-booking-api-india",
  },
  openGraph: {
    title: "Hotel Booking API – BOS Center",
    description:
      "Integrate hotel search and booking into your platform with BOS Center’s powerful Hotel Booking API.",
    url: "https://bos.center/hotel-booking-api-india",
    siteName: "BOS Center",
    images: [
      {
        url: "https://bos.center/images/hotel-api-og.jpg",
        width: 1200,
        height: 630,
        alt: "Bos Center Open Graph Image",
      },
    ],
    type: "website",
  },
};

export default function HotelBookingApiIndia() {

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://bos.center/hotel-booking-api-india/#localbusiness",
      name: "BOS Center Pvt. Ltd.",
      url: "https://bos.center/hotel-booking-api-india",
      telephone: "+91-8929898920",
      priceRange: "$$$",
      image: "https://bos.center/assets/img/logo.png",

      description:
        "BOS Center provides a reliable and low-cost Hotel Booking API with real-time room availability, instant booking, rate comparison, and seamless integration for travel agencies, booking portals, and startups in India.",

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
            name: "Hotel Booking API Integration",
            description:
              "White-label hotel booking API integration for travel websites, tour operators, and booking platforms across India.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Real-Time Hotel Availability & Rates API",
            description:
              "API providing real-time room availability, rate comparison, multi-hotel listings, and instant confirmation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Secure Hotel Booking & Reservation API",
            description:
              "Secure API offering room reservations, cancellation, refunds, payment integration, and multi-city hotel booking support.",
          },
        },
      ],
    };



  const headerContent = {
    title: "India’s Most Trusted Hotel Booking API For OTAs & Travel Platforms",
    description:
      "Access 50,000+ hotels with real-time availability, instant booking, and competitive rates. Built for OTAs, travel aggregators, and hospitality platforms.",
    imgSrc: "/assets/HotelBooking/HOTEL BOOKING.png",
    alt: "Hotel reservation API with room availability search and instant booking confirmation.",
    buttonLabel: "Get API Access",
    // alternateButtonLabel: "Try Live Demo",
  };

  const features = [
    "Pay per booking",
    "Unlimited API calls for searches",
    "Real-time hotel availability",
    "Instant booking confirmations",
    "Dynamic rate management",
    "Global hotel inventory access",
    "Payment gateway integration",
    "Booking management tools",
    "24/7 technical support",
    "Advanced analytics dashboard",
    "Multi-currency support",
  ];

  const content = [
    {
      heading2:
        "BOS Hotel Room Booking API Solution For Modern Travel Businesses",
      heading2Para:
        "Built for scale and performance, our hotel booking solution delivers production-ready features that would typically require months of development. From inventory to automated booking management, we handle the complexity while you focus on customer acquisition and revenue growth.",
      points: [
        {
          heading3: "Hotel Inventory API",
          heading3Para:
            "Access over 50,000 properties spanning budget hotels, luxury resorts, boutique stays, vacation rentals, and serviced apartments across India including major cities and emerging destinations.",
          imgSrc:
            "/assets/HotelBooking/BOS Hotel Room Booking API Solution for Modern Travel Platforms/Hotel Inventory API.png",
        },

        {
          heading3: "Real-Time Hotel Room Availability & Pricing API",
          heading3Para:
            "Get live room availability and dynamic pricing updated every few seconds. Our caching layer ensures lightning-fast search results while maintaining accuracy across all connected suppliers.",
          imgSrc:
            "/assets/HotelBooking/BOS Hotel Room Booking API Solution for Modern Travel Platforms/Real-Time Hotel Room Availability & Pricing API.png",
        },
        {
          heading3: "Instant Hotel Booking Confirmation API",
          heading3Para:
            "Process bookings in seconds with automated confirmation and voucher generation. Support for both instant confirm and on-request bookings based on supplier capabilities.",
          imgSrc:
            "/assets/HotelBooking/BOS Hotel Room Booking API Solution for Modern Travel Platforms/Instant Hotel Booking Confirmation API.png",
        },
        {
          heading3: "Competitive Rate Aggregation",
          heading3Para:
            "Compare rates from multiple suppliers in real-time to offer customers the best prices. Smart rate logic eliminates duplicates and presents optimal options automatically.",
          imgSrc:
            "/assets/HotelBooking/BOS Hotel Room Booking API Solution for Modern Travel Platforms/Competitive Rate Aggregation.png",
        },
        {
          heading3: "Flexible Markup Engine",
          heading3Para:
            "Configure custom markup strategies at global, supplier, destination, or property levels. Implement dynamic pricing rules based on seasonality, demand, and customer segments.",
          imgSrc:
            "/assets/HotelBooking/BOS Hotel Room Booking API Solution for Modern Travel Platforms/Flexible Markup Engine.png",
        },
      ],
    },
  ];

  const material = [
    {
      heading2:
        "Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms",
      heading2Para:
        "From established online travel agencies to innovative hospitality platforms, our hotel booking solution adapts to your business model and scales seamlessly with your growth trajectory.",
      points: [
        {
          heading3: "Online Travel Agencies (OTAs)",
          heading3Para:
            "Build a comprehensive travel booking platform combining hotels, flights, and activities with BOS. Increase cross-sell opportunities and maximize revenue per customer with bundled offerings.",
          imgSrc:
            "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Online Travel Agencies (OTAs).png",
        },
        {
          heading3: "Travel Aggregators & Metasearch",
          heading3Para:
            "Compare rates from multiple suppliers in real-time and redirect customers to booking engines. Earn commissions through referral links while providing unbiased price comparisons.",
          imgSrc:
            "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Travel Aggregators & Metasearch.png",
        },
        {
          heading3: "Tour Operators & Travel Agencies",
          heading3Para:
            "Package hotels with tours, transfers, and sightseeing activities. Create custom itineraries with integrated hotel bookings and manage group reservations efficiently.",
          imgSrc:
            "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Tour Operators & Travel Agencies.png",
        },

        {
          heading3: "Corporate Travel Platforms",
          heading3Para:
            "Provide business travelers with policy-compliant hotel options. Implement approval workflows, cost center allocation, and detailed expense reporting for finance teams.",
          imgSrc:
            "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Corporate Travel Platforms.png",
        },
        {
          heading3: "Mobile Travel Applications",
          heading3Para:
            "Integrate hotel booking into your mobile app with responsive APIs optimized for mobile data. Support offline search caching and seamless mobile payment integration.",
          imgSrc:
            "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Mobile Travel Applications.png",
        },
        {
          heading3: "Hospitality Tech Platforms",
          heading3Para:
            "Build property management systems, channel managers, or booking engines with our extensive hotel inventory. White-label solutions for hotel chains and independent properties.",
          imgSrc:
            "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Hospitality Tech Platforms.png",
        },
        {
          heading3: "Event & Conference Platforms",
          heading3Para:
            "Offer accommodation booking for event attendees with group rate negotiation support. Manage room blocks and provide personalized booking links for conference participants.",
          imgSrc:
            "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Event & Conference Platforms.png",
        },
        {
          heading3: "Developers & SaaS Providers",
          heading3Para:
            "Integrate hotel booking capabilities into your existing software products. RESTful API with complete documentation allows rapid implementation across any tech stack.",
          imgSrc:
            "/assets/HotelBooking/Scalable Hotel Booking API for Travel Agencies, OTAs & Hospitality Platforms/Developers & SaaS Providers.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints = [
    {
      heading2:
        "Connected to the India's Leading Hotel Suppliers & Distributors",
      heading2Para:
        "BOS hotel booking solution aggregates inventory from multiple distribution systems, bed banks, hotel chains, and independent suppliers, giving you access to the widest range of properties at competitive prices.",
      points: [
        {
          heading3: "Major Hotel Chains",
          heading3Para:
            "Direct connections with Marriott, Hilton, IHG, Accor, Hyatt, and 50+ hotel chains for preferential rates and instant confirmations.",
          imgSrc:
            "/assets/HotelBooking/Connected to the India's Leading Hotel Suppliers & Distributors/Major Hotel Chains.png",
        },
        {
          heading3: "Global Distribution Systems",
          heading3Para:
            "Integrated with Amadeus, Sabre, and Travelport GDS for access to corporate negotiated rates and global hotel inventory.",
          imgSrc:
            "/assets/HotelBooking/Connected to the India's Leading Hotel Suppliers & Distributors/Global Distribution Systems.png",
        },
        {
          heading3: "Bed Banks & Wholesalers",
          heading3Para:
            "Partnership with leading bed banks including Hotelbeds, Webbeds, and Tourico for competitive net rates and exclusive deals.",
          imgSrc:
            "/assets/HotelBooking/Connected to the India's Leading Hotel Suppliers & Distributors/Bed Banks & Wholesalers.png",
        },
        {
          heading3: "Independent Hotels",
          heading3Para:
            "Direct integrations with independent properties and boutique hotel groups for unique accommodation options.",
          imgSrc:
            "/assets/HotelBooking/Connected to the India's Leading Hotel Suppliers & Distributors/Independent Hotels.png",
        },
        {
          heading3: "Alternative Accommodations",
          heading3Para:
            "Access vacation rentals, serviced apartments, hostels, and unique stays beyond traditional hotels. We continuously expand our supplier network based on customer demand and market opportunities. New suppliers are added monthly to ensure comprehensive coverage.",
          imgSrc:
            "/assets/HotelBooking/Connected to the India's Leading Hotel Suppliers & Distributors/Alternative Accommodations.png",
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
      heading2:
        "BOS Hotel Solution: Flexible Pricing Model For Maximum Profitability",
      heading2Para:
        "BOS transparent pricing structure ensures you can scale your hotel booking business profitably while offering competitive rates to your customers.",
      points: [
        {
          heading3: "Commission-Based Model",
          heading3Para:
            "Earn commissions on every completed booking with lowest upfront platform fees. Typical supplier commissions range from 10% to 25% depending on supplier, destination, and booking value. You control your markup and maximize profit margins.",
          imgSrc:
            "/assets/HotelBooking/BOS Hotel Pricing Models Designed for Flexibility and Profitability/Commission-Based Model.png",
        },
        {
          heading3: "Net Rate + Markup",
          heading3Para:
            "Access net rates from suppliers and add your custom markup at various levels. Configure percentage-based or flat-fee markups, by supplier, destination, property type, or individual hotel for maximum flexibility.",
          imgSrc:
            "/assets/HotelBooking/BOS Hotel Pricing Models Designed for Flexibility and Profitability/Net Rate.png",
        },
        {
          heading3: "Enterprise Licensing",
          heading3Para:
            "For high-volume platforms processing 5,000+ bookings monthly, we offer custom enterprise agreements with volume discounts, dedicated infrastructure, and SLA guarantees. Contact our sales team for tailored packages.",
          imgSrc:
            "/assets/HotelBooking/BOS Hotel Pricing Models Designed for Flexibility and Profitability/Enterprise Licensing.png",
        },
      ],
    },
  ];

  const Steps = [
    {
      heading2: "Easy Hotel Booking API Integration Process",
      heading2Para:
        "Get your hotel booking system operational within minutes using BOS streamlined integration process designed for developers and hospitality businesses of all sizes.",
      steps: [
        {
          step1: "API Key Registration",
          step1Para:
            "Sign up for your developer account and receive instant API credentials to start testing BOS hotel booking endpoints and exploring functionality immediately.",
        },
        {
          step2: "Documentation Review",
          step2Para:
            "Access comprehensive API documentation with detailed code examples, endpoint references, and integration best practices for quick and efficient implementation.",
        },
        {
          step3: "Sandbox Testing",
          step3Para:
            "Test all hotel booking functionalities in our secure sandbox environment with demo properties and test data before going live with real inventory.",
        },
        {
          step4: "Live Deployment",
          step4Para:
            "Deploy your hotel booking solution confidently with BOS monitoring tools, performance analytics, and dedicated support team ensuring smooth operations.",
        },
      ],
    },
  ];
  
  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is Hotel API and how does it work?",
        answer:
          "Hotel API is a REST API that connects your platform with 50,000+ hotels through multiple suppliers and distributors. It provides real-time access to hotel availability, pricing, detailed property information, and booking capabilities through simple API calls. You make search and booking requests, and we handle all supplier integrations, rate aggregation, and booking confirmations in the background.",
      },
      {
        question: "How long does it take to integrate Hotel API?",
        answer:
          "BOS development team complete integration in 7 days depending on complexity and customization requirements. Basic search and booking functionality can be implemented in 2-3 days. We provide complete documentation, code samples in multiple languages, sandbox environment, and dedicated technical support to accelerate your integration timeline.",
      },
      {
        question: "What are the pricing and commission structures?",
        answer:
          "We offer flexible pricing models including commission-based (10-25% from suppliers) and net rate plus markup structures. Lowest setup fees & no monthly minimums – you only pay for successful bookings. You control your markup at various levels for maximum profitability. Enterprise customers can discuss custom volume-based pricing with our sales team.",
      },
      {
        question: "Which hotel suppliers and distributors are connected?",
        answer:
          "We're integrated with major global distribution systems (Amadeus, Sabre, Travelport), leading bed banks (Hotelbeds, Webbeds, Tourico), international hotel chains (Marriott, Hilton, IHG, Accor, Hyatt), and numerous regional suppliers. This gives you access to 50,000+ properties with competitive rates and comprehensive coverage across budget to luxury segments.",
      },
      {
        question: "How are cancellations and refunds processed?",
        answer:
          "Cancellations are processed through API endpoints with automated refund calculation based on supplier-specific cancellation policies. Refunds are typically processed within 5-7 business days to the original payment source. The system supports free cancellation, non-refundable rates, and partial cancellations for multi-room bookings. Real-time status updates keep customers informed throughout the refund process.",
      },
      {
        question: "Is there a sandbox environment for testing?",
        answer:
          "Yes, we provide a full-featured sandbox environment with realistic mock data that mirrors production behavior. You can test all API endpoints, search scenarios, booking flows, payment integration, and cancellation processes without making actual bookings or charges. This allows thorough testing and quality assurance during development phases before going live.",
      },
      {
        question: "What payment gateways are supported?",
        answer:
          "Hotel API is pre-integrated with 20+ payment gateways including AOPAY. We support all major payment methods including credit/debit cards, UPI, net banking, and digital wallets options. The system is PCI-DSS compliant with secure payment tokenization.",
      },
      {
        question:
          "Can I customize markup for different hotels or destinations?",
        answer:
          "Absolutely. Our flexible markup engine allows you to configure percentage-based or flat-fee markups at multiple levels: global default, supplier-specific, destination/city level, property type (budget/luxury), star rating, or even individual hotel properties. You can also implement dynamic pricing rules based on seasonality, demand, customer segments, or booking lead time for revenue optimization.",
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
      <ContentWithDescriptivePoints content={content} />
      <HotelFeaturesSection />
      <ScalableHotelBooking/>
      <HotelSuppliersGrid/>
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <StartNowSection />
      <PerformanceSection />
      <IntegrationTimeline />
      <EnterpriseSupport />
      <FAQSection faqs={faqContent.faqs} />
      <CoverageSection />
      <GetStarted
        getStarted={{
          title: "Ready to Transform Your Travel Platform?",
          description:
            "Join 200+ travel platforms already powering their hotel booking services with BOS API. Start your integration today with free sandbox access and complete documentation.",
         subTitle : "No credit card required | Free sandbox access | 24/7 developer support",
          CTABtn2: "Connect With Sales",
        }}
      />
      <div className="flex items-center justify-center">
        <p className="text-gray-700 p-4 max-w-5xl text-center">
          Speak with our team to understand how Hotel API can accelerate your
          travel business growth. Get custom pricing, technical consultation,
          and implementation roadmap tailored to your needs.
        </p>
      </div>
    </>
  );
}
