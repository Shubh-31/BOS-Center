import Script from "next/script";
import { FAQSection, PagesHeader } from "@/sections/mySection";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H3WithPointsPart2";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import Link from "next/link";
import { FlightUseCases } from "@/sections/FlightUseCases";
import BusBookingFeatures from "@/sections/BusBookingAPI/BusBookingFeatures";
import DeveloperSupport from "@/sections/BusBookingAPI/DeveloperSupport";
import { GetStartedWithUs } from "@/sections/GetStartedWithUs";

export const metadata = {
  title: "Bus Booking API – BOS Center | Integrate Bus Ticketing Easily",
  description:
    "Power your platform with BOS Center’s Bus Booking API. Offer users real-time access to bus schedules, operators, and seat availability across India.",
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
    canonical: "https://bos.center/bus-booking-api-india",
  },
  openGraph: {
    title: "Bus Booking API – BOS Center",
    description:
      "Integrate real-time bus ticketing services with BOS Center’s robust Bus Booking API for B2B travel businesses.",
    url: "https://bos.center/bus-booking-api-india",
    siteName: "BOS Center",
    images: [
      {
        url: "https://bos.center/images/bus-api-og.jpg",
        width: 1200,
        height: 630,
        alt: "Bos Center Open Graph Image",
      },
    ],
    type: "website",
  },
};

export default function BusBookingApiIndia() {

     const structuredData = {
       "@context": "https://schema.org",
       "@type": "ProfessionalService",
       "@id": "https://bos.center/bus-booking-api-india/#localbusiness",
       name: "BOS Center Pvt. Ltd.",
       url: "https://bos.center/bus-booking-api-india",
       telephone: "+91-8929898920",
       priceRange: "$$$",
       image: "https://bos.center/assets/img/logo.png",

       description:
         "BOS Center provides a reliable and affordable Bus Booking API with real-time schedules, seat availability, secure reservations, and seamless integration for travel agencies and online travel platforms across India.",

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
             name: "Bus Booking API Integration",
             description:
               "White-label bus booking API integration for travel websites, travel agencies, and booking platforms.",
           },
         },
         {
           "@type": "Offer",
           itemOffered: {
             "@type": "Service",
             name: "Real-Time Bus Schedule & Availability API",
             description:
               "API offering real-time bus schedules, route search, seat availability, and fare comparison.",
           },
         },
         {
           "@type": "Offer",
           itemOffered: {
             "@type": "Service",
             name: "Secure Bus Booking API",
             description:
               "Secure bus ticket booking API with payment integration, cancellation, refund processing, and multi-city routing.",
           },
         },
       ],
     };



  const headerContent = {
    title: "Empower Your Travel Booking Platform with BOS Bus API Integration",
    description:
      "Integrate real-time bus ticket booking, seat selection, and inventory management across 15,000+ routes. Purpose-built for OTAs, travel aggregators, and mobility apps.",
    imgSrc: "/assets/BusBooking/BUS BOOKING.png",
    alt: "Bus booking API platform displaying route search and seat selection interface.",
    buttonLabel: "Get API Now",
    // alternateButtonLabel: "Try Live Demo",
  };

  const features = [
    "Pay per booking",
    "Unlimited API calls for searches",
    "Real-time seat availability",
    "Instant booking confirmations",
    "Route and stop information",
    "Payment gateway integration",
    "Booking management tools",
    "24/7 technical support",
    "Comprehensive documentation",
    "Sandbox testing environment",
    "Advanced analytics dashboard",
  ];

  const content = [
    {
      heading2:
        "BOS White Label Bus Ticket Booking API Powers Travel Businesses Across India",
      heading2Para:
        "From established travel platforms to emerging mobility startups, our bus booking solution adapts to your business model and scales with your growth.",
      points: [
        {
          heading3: "Online Travel Agencies (OTAs)",
          heading3Para:
            "Add bus bookings to your multi-modal travel platform alongside flights, hotels, and cabs. Increase basket size and offer customers end-to-end travel solutions under one roof.",
          imgSrc:
            "/assets/BusBooking/BOS Bus API Powers Travel Businesses Across India/Online Travel Agencies (OTAs).png",
        },

        {
          heading3: "B2B Travel Aggregators",
          heading3Para:
            "Our bus booking solution for your travel agent network. Allow sub-agents to search, book, and manage bus tickets with their own markup while you control commissions centrally.",
          imgSrc:
            "/assets/BusBooking/BOS Bus API Powers Travel Businesses Across India/B2B Travel Aggregators.png",
        },
        {
          heading3: "Bus Operators",
          heading3Para:
            "Launch your own online booking portal and reduce dependency on third-party platforms. Manage your inventory, set dynamic pricing, and increase direct bookings without commissions.",
          imgSrc:
            "/assets/BusBooking/BOS Bus API Powers Travel Businesses Across India/Bus Operators.png",
        },
        {
          heading3: "Corporate Travel Portals",
          heading3Para:
            "Provide employees with seamless bus booking options for business travel. Implement approval workflows, travel policy compliance, and detailed expense reporting for finance teams.",
          imgSrc:
            "/assets/BusBooking/BOS Bus API Powers Travel Businesses Across India/Corporate Travel Portals.png",
        },
        {
          heading3: "Super Apps & Digital Wallets",
          heading3Para:
            "Integrate bus bookings into your super app ecosystem. Leverage existing user base and wallet balance for instant checkouts, driving engagement and transaction volume.",
          imgSrc:
            "/assets/BusBooking/BOS Bus API Powers Travel Businesses Across India/Super Apps & Digital Wallets.png",
        },
        {
          heading3: "City Mobility Apps",
          heading3Para:
            "Complement your ride-sharing or metro booking service with intercity bus travel. Offer users complete mobility solutions for first-mile, last-mile, and long-distance travel.",
          imgSrc:
            "/assets/BusBooking/BOS Bus API Powers Travel Businesses Across India/City Mobility Apps.png",
        },
        {
          heading3: "Travel Tech Startups",
          heading3Para:
            "Launch your MVP in weeks, not months. Focus on customer acquisition and brand building while we handle the technical complexity of bus aggregation and operator integrations.",
          imgSrc:
            "/assets/BusBooking/BOS Bus API Powers Travel Businesses Across India/Travel Tech Startups.png",
        },
        {
          heading3: "Enterprise Developers",
          heading3Para:
            "Build custom travel management systems with our RESTful API. Complete documentation, sandbox environment, and dedicated technical support ensure smooth implementation.",
          imgSrc:
            "/assets/BusBooking/BOS Bus API Powers Travel Businesses Across India/Enterprise Developers.png",
        },
      ],
    },
  ];

  const material = [
    {
      heading2: "Pre-Integrated with Leading Bus Operators & Payment Providers",
      heading2Para:
        "BOS Bus API comes with ready-made integrations to India's top bus operators and payment gateways, eliminating the need for individual negotiations and technical integrations.",
      points: [
        {
          heading3: "Connected Bus Operators",
          heading3Para:
            "Access inventory from government SRTC corporations (APSRTC, KSRTC, MSRTC, RSRTC, UPSRTC, GSRTC), private operators (VRL Travels, SRS Travels, Orange Travels, Neeta Travels), and luxury coach services. New operators added monthly based on demand.",
          imgSrc:
            "/assets/BusBooking/Pre-Integrated with Leading Bus Operators & Payment Providers/Connected Bus Operators.png",
        },
        {
          heading3: "Payment Gateway Support",
          heading3Para:
            "Accept payments through AOPAY, and more. Support for UPI, credit/debit cards, net banking, and digital wallets ensures maximum payment success rates.",
          imgSrc:
            "/assets/BusBooking/Pre-Integrated with Leading Bus Operators & Payment Providers/Payment Gateway Support.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Flexible Pricing Model That Grows With Your Travel Business",
      heading2Para:
        "BOS transparent pricing ensures you can scale profitably while maintaining competitive rates for your customers.",
      points: [
        {
          heading3: "Commission-Based Model",
          heading3Para:
            "Pay only for successful bookings with lowest upfront platform fees. Set your own markup on top of base fares and earn on every transaction. Typical operator commissions range from 5% to 12% depending on route and operator category.",
          imgSrc:
            "/assets/BusBooking/Flexible Pricing Model That Grows With Your Business/Commission-Based Model.png",
        },
        {
          heading3: "Custom Enterprise Pricing",
          heading3Para:
            "For high-volume travel platforms processing 1,000+ bookings monthly, we offer custom pricing with volume discounts, dedicated account management, and SLA guarantees. Contact our sales team for tailored packages.",
          imgSrc:
            "/assets/BusBooking/Flexible Pricing Model That Grows With Your Business/Custom Enterprise Pricing.png",
        },
        {
          heading3: "Markup Configuration",
          heading3Para:
            "Use our flexible markup engine to set percentage-based or flat-fee commissions, operator, or route levels. Implement dynamic pricing based on demand, holidays, or customer segments to maximize revenue.",
          imgSrc:
            "/assets/BusBooking/Flexible Pricing Model That Grows With Your Business/Markup Configuration.png",
        },
        {
          heading3: "Built for Performance, Security & Scale",
          heading3Para:
            "Our infrastructure is designed to handle millions of searches and thousands of concurrent bookings without compromising speed or reliability.",
          imgSrc:
            "/assets/BusBooking/Flexible Pricing Model That Grows With Your Business/Built for Performance, Security & Scale.png",
        },
        {
          heading3: "Lightning-Fast Response Times",
          heading3Para:
            "Average API response under 200ms for search queries and within seconds for booking confirmations. Powered by distributed caching and optimized database queries.",
          imgSrc:
            "/assets/BusBooking/Flexible Pricing Model That Grows With Your Business/Commission-Based Model.png",
        },
        {
          heading3: "99.9% Uptime Guarantee",
          heading3Para:
            "Redundant servers across multiple availability zones ensure your business never stops. Automatic failover and load balancing handle traffic spikes during peak seasons.",
          imgSrc:
            "/assets/BusBooking/Flexible Pricing Model That Grows With Your Business/Uptime.png",
        },
        {
          heading3: "Bank-Grade Security",
          heading3Para:
            "PCI DSS Level 1 compliant infrastructure with end-to-end encryption. Secure payment tokenization ensures customer card data never touches your servers.",
          imgSrc:
            "/assets/BusBooking/Flexible Pricing Model That Grows With Your Business/Bank-Grade Security.png",
        },
        {
          heading3: "RESTful API Architecture",
          heading3Para:
            "Modern JSON-based API endpoints with comprehensive documentation. Support for webhooks, pagination, and filtering makes integration straightforward for any tech stack.",
          imgSrc:
            "/assets/BusBooking/Flexible Pricing Model That Grows With Your Business/RESTful API Architecture.png",
        },
        {
          heading3: "Sandbox Environment",
          heading3Para:
            "Test all API endpoints in our sandbox with mock data before going live. No risk of actual bookings or charges during development and QA phases.",
          imgSrc:
            "/assets/BusBooking/Flexible Pricing Model That Grows With Your Business/Sandbox Environment.png",
        },
        {
          heading3: "Developer-Friendly Documentation",
          heading3Para:
            "API docs with code examples in Python, Node.js, PHP, Java, and Ruby. Postman collections and SDK libraries accelerate integration time.",
          imgSrc:
            "/assets/BusBooking/Flexible Pricing Model That Grows With Your Business/Developer-Friendly Documentation.png",
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
      heading2: "Go Live in Just 7 Days",
      heading2Para:
        "Our streamlined onboarding process gets you from signup to first booking faster than any competitor. Here's how it works:",
      points: [
        {
          heading3: "Day 1: Account Setup & API Access",
          heading3Para:
            "Complete onboarding, receive API credentials, and access sandbox environment. Review documentation and integration guides.",
          imgSrc: "/assets/BusBooking/Go Live in Just 7 Days/APIAccess.png",
        },
        {
          heading3: "Day 2-3: Development & Integration",
          heading3Para:
            "Integrate search, booking, and payment endpoints. Build UI components for seat selection and ticket display. Test thoroughly in a sandbox.",
          imgSrc: "/assets/BusBooking/Go Live in Just 7 Days/Integration.png",
        },
        {
          heading3: "Day 4-5: UAT & Payment Gateway Testing",
          heading3Para:
            "Conduct user acceptance testing with real operator inventory in test mode. Verify payment gateway integration and refund flows.",
          imgSrc:
            "/assets/BusBooking/Go Live in Just 7 Days/PaymentGateway.png",
        },
        {
          heading3: "Day 6-7: Go Live & Monitoring",
          heading3Para:
            "Switch to production API keys, process first live bookings, and monitor transaction success rates. BOS support team assists during initial days.",
          imgSrc: "/assets/BusBooking/Go Live in Just 7 Days/GoLive.png",
        },
      ],
    },
  ];

  const Steps = [
    {
      heading2: "Easy Bus Booking API Integration Process",
      heading2Para:
        "Get your bus booking system operational within minutes using our streamlined integration process designed for developers and businesses across all segments.",
      steps: [
        {
          step1: "API Key Registration",
          step1Para:
            "Sign up for your developer account and receive instant API credentials to start testing BOS bus booking endpoints and exploring functionality immediately.",
        },
        {
          step2: "Documentation Review",
          step2Para:
            "Access comprehensive API documentation with detailed code examples, endpoint references, and integration best practices for quick and efficient implementation.",
        },
        {
          step3: "Sandbox Testing",
          step3Para:
            "Test all bus booking functionalities in BOS secure sandbox environment with dummy data before going live, ensuring your integration works flawlessly.",
        },
        {
          step4: "Live Deployment",
          step4Para:
            "Deploy your bus booking solution confidently with BOS monitoring tools, performance analytics, and dedicated support team ensuring smooth operations.",
        },
      ],
    },
  ];

    const faqContent = {
      heading: "Frequently Asked Questions",
      faqs: [
        {
          question: "What is Bus API and how does it work?",
          answer:
            "Bus API is a REST API that connects your platform with 500+ bus operators across India. It provides real-time access to bus schedules, seat availability, fare information, and booking capabilities through simple API calls. You make search and booking requests, and we handle all operator integrations, inventory management, and ticket generation in the background.",
        },
        {
          question: "How long does it take to integrate Bus API?",
          answer:
            "Most developers complete integration in 7 days depending on complexity. Basic search and booking functionality can be implemented in 2-3 days. We provide complete documentation, code samples, and sandbox environment to accelerate development. Our technical team assists throughout the integration process.",
        },
        {
          question: "What are the pricing and commission structures?",
          answer:
            "We operate on a commission-based model with lowest upfront platform fees. You earn commissions ranging from 5% to 12% on each booking depending on operator and route. You can set your own markup on top of base fares. Enterprise customers processing high volumes can discuss custom pricing with volume discounts.",
        },
        {
          question: "Which bus operators are supported by your API?",
          answer:
            "E support 500+ operators including major government SRTC corporations (APSRTC, KSRTC, MSRTC, RSRTC, UPSRTC, GSRTC) and popular private operators like VRL Travels, SRS Travels, Orange Travels, Neeta Travels, and many more. We continuously add new operators based on customer demand and route coverage needs.",
        },
        {
          question: "How are cancellations and refunds handled?",
          answer:
            "Cancellations are processed through API endpoints with automated refund calculation based on operator-specific policies. Refunds are typically processed within 24-48 hours to the original payment source. You can configure cancellation charges and handle partial cancellations for group bookings. Real-time status updates keep customers informed throughout the refund process.",
        },
        {
          question: "Is there a sandbox environment for testing?",
          answer:
            "Yes, we provide a full-featured sandbox environment with mock data that mirrors production behavior. You can test all API endpoints, booking flows, and payment integration without making actual bookings or charges. This allows thorough testing during development and QA phases before going live.",
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
      <BusBookingFeatures />
      <ContentWithDescriptivePoints content={content} />
      <H2DescH3Desc contentWithDescription={material} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <DeveloperSupport />
      <FAQSection faqs={faqContent.faqs} />
      <GetStartedWithUs
        getStarted={{
          title: "Ready to Launch Your Bus Booking Platform?",
          description:
            "Join 200+ travel platforms already powering their bus booking services with BOS API. Start your integration today with our sandbox environment and go live in weeks.",
          subTitle1:
            "Whether you're launching a new travel startup, expanding an existing agency network, or building B2B aggregator platform, we have the right solution for your India domestic flight booking needs.",
          CTABtn1:
            "No credit card required • Free sandbox access • 24/7 developer support",
          CTABtn2: "Connect With Our Team",
        }}
      />
      <div className="flex items-center justify-center">
        <p className="text-gray-700 p-4 max-w-5xl text-center">
          Speak with our API experts to understand how Bus API can transform
          your travel business. Get custom pricing, technical consultation, and
          implementation support.
        </p>
      </div>
    </>
  );
}
