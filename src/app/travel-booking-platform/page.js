import {
  PagesHeader,
  FAQSection,
  TravelContent,
  GetStarted,
  HowItWorks,
  FinanceSection,
  Steps,
} from "@/sections/mySection";
import APIServicesSection from "@/sections/TravelBookingPlatform/APIServicesSection";

import { Tag } from "lucide-react";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "Travel Booking Platform for Merchants & Retailers | BOS",
  description:
    "Empower your business with our all-in-one travel booking platform. Sell flights, hotels & more—tailored for travel merchants and retailers.",
  keywords: [
    "b2b travel booking platform solution",
    "B2B travel software",
    "flight booking API",
    "hotel booking system",
    "travel agent tool",
    "private-label travel platform",
    "merchant travel solutions",
    "b2b travel booking system",
    "b2b travel booking apis",
    "merchant travel platform",
    "retrailer travel platform",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://bos.center/travel-booking-platform",
  },
  openGraph: {
    title: "Travel Booking Platform for Merchants & Retailers | BOS",
    description:
      "Sell flights, hotels, and more with our powerful travel booking platform tailored for travel agents, retailers, and resellers.",
    url: "https://bos.center/solutions/enterprise/travel-booking-platform",
    siteName: "BOS Center",
    images: [
      {
        url: "https://bos.center/solutions/enterprise/travel-booking-platform.jpg",
        width: 800,
        height: 600,
        alt: "Bos Center Open Graph Image",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://bos.center"),
  manifest: "/manifest.json",
  category: "Travel",
  applicationName: "Travel Booking Platform",
  creator: "BOS Center",
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "schema:WebApplication": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Travel Booking Platform",
      url: "https://bos.center/solutions/enterprise/travel-booking-platform/",
      applicationCategory: "Travel",
      operatingSystem: "All",
      description:
        "A complete travel booking platform for merchants and retailers. Book flights, hotels, and tours with real-time inventory and private-label solutions.",
      offers: {
        "@type": "Offer",
        price: "Custom Pricing",
        priceCurrency: "USD",
        url: "https://bos.center/solutions/enterprise/travel-booking-platform/",
      },
      creator: {
        "@type": "Organization",
        name: "BOS Center",
        url: "https://www.bos.center",
      },
    }),
  },
};


const TravelBookingPlatform = () => {

   const structuredData = {
     "@context": "https://schema.org",
     "@type": "ProfessionalService",
     "@id": "https://bos.center/travel-booking-platform/#localbusiness",
     name: "BOS Center Pvt. Ltd.",
     url: "https://bos.center/travel-booking-platform",
     telephone: "+91-8929898920",
     description:
       "BOS Center offers the best Travel Booking Platform for agencies and businesses to manage flights, hotels, tours, and corporate travel efficiently with fast and reliable tools.",
     image: "https://bos.center/assets/img/logo.png",
     priceRange: "$$$",

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
       "https://www.instagram.com/boscenter.in",
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
           name: "Corporate Travel Booking",
           description:
             "Manage flights, hotels, tours, and transport bookings for corporate travel efficiently.",
         },
       },
       {
         "@type": "Offer",
         itemOffered: {
           "@type": "Service",
           name: "Travel Expense Tracking",
           description:
             "Track employee travel expenses and generate reports for companies and enterprises.",
         },
       },
       {
         "@type": "Offer",
         itemOffered: {
           "@type": "Service",
           name: "Automated Travel Itineraries",
           description:
             "Generate and manage automated itineraries for business trips and corporate travel.",
         },
       },
     ],
   };




  const headerContent = {
    tag: "Travel Booking Engine",
    title:
      "B2B Travel Booking Platform | Private-Label Solution for Travel Merchants & Retailers",
    firstSentence: "Complete Travel Booking Platform for Business Partners.",
    description:
      "Transform your business into a full-service travel provider. Our complete B2B travel booking platform allows merchants to serve their customers directly while empowering retailers with the tools they need to deliver exceptional travel experiences.",
    imgSrc: "/assets/TravelBookingPlatform1.png",
    alt: "Travel booking dashboard for travel merchants and agents.",
    buttonLabel: "Accelerate Online Bookings Today",
  };

  const travelContent = [
    {
      title: "Multi-Tier Travel Booking System | Flight, Hotel, Train & Bus",
      description:
        "Streamline your travel business operations with our all-in-one platform. Merchants can manage their retail network while providing direct customer service, and retailers gain access to competitive rates across flights, trains, buses, & hotels.",
      points: [
        "Merchant Dashboard: Create & manage retailer accounts, monitor bookings, & track performance.",
        "Retailer Portal: Access wholesale rates and booking tools for customer service.",
        "Direct Booking: Merchants can book directly for their own customers.",
        "Comprehensive Inventory: Access flights, trains, buses, hotels, and more.",
      ],
      image: "/assets/TravelBookingPlatform2.png",
      alt: "Flight and hotel reservation platform for travel retailers.",
    },
    {
      title:
        "Real-Time Travel Booking Notifications & Business Analytics Dashboard",
      description:
        "Stay ahead of your competition with instant updates and comprehensive reporting. Our platform keeps both merchants and retailers informed with real-time booking status, pricing changes, & business performance metrics.",
      points: [
        "Live booking status updates for all travel services.",
        "Automated customer notifications for confirmations & changes.",
        "Business analytics dashboard with revenue tracking & performance insights.",
        "Alerts for system updates & maintenance.",
      ],
      image: "/assets/TravelBookingPlatform3.png",
      alt: "B2B travel booking software with real-time inventory",
    },
    {
      title:
        "PCI DSS Travel Payment Gateway | Multi-Currency Booking Processing",
      description:
        "Protect your business & customers with enterprise-level security. Our platform supports multiple payment methods and currencies while maintaining PCI DSS compliance for global operations.",
      points: [
        "Multi-currency payment processing for international markets.",
        "Security with end-to-end encryption.",
        "Flexible commission structures for merchant-retailer relationships.",
        "Automated settlement & reporting systems.",
      ],
      image: "/assets/TravelBookingPlatform4.png",
      alt: "Private-label travel booking engine for agencies",
    },
  ];

  const howItWorks = {
    layout: "steps",
    title: "Travel Booking APP Guide | How B2B Travel Platform Works",
    description: "",
    imgSrc: [
      "/assets/TravelBookingPlatform5.png",
      "/assets/TravelBookingPlatform6.png",
    ],
    alt: [
      "Multi-channel booking platform for tour operators",
      "Travel technology solution for wholesalers and retailers",
    ],
    roles: [
      {
        title:
          "Travel Merchant Network Setup | Build Your Retail Partner System",
        steps: [
          "Register your business and log in to our B2B travel web/mobile app.",
          "Set up your merchant dashboard and configure your retailer network structure.",
          "Onboard your retail partners with customized access levels and commission structures.",
          "Provide your retailers with booking tools and customer management capabilities.",
          "Use the platform to book travel services directly for your customers while maintaining full control over pricing and customer relationships.",
          "Track business performance, retailer activity, and customer satisfaction through comprehensive reporting and analytics tools.",
        ],
      },
      {
        title:
          "Travel Retailer Portal Access | Wholesale Booking Rates & Tools",
        steps: [
          "Log into your retailer portal provided by your merchant partner.",
          "Access wholesale travel rates and booking tools.",
          "Search and compare travel services including flights, trains, buses, and hotels.",
          "Find the best options for your customers using advanced search and comparison tools.",
          "Manage bookings, modifications, and customer service directly through the platform.",
          "Maintain your own brand presence and grow your business with competitive rates and comprehensive inventory.",
        ],
      },
    ],
  };
  

  const financeContent = {
    heading: "Exclusive Deals Just for You",
    description:
      "Save big on your next trip with exclusive offers available only through the Travel Booking App. Enjoy discounted rates on flights, hotels, and more. Plus, with our loyalty program, the more you book, the more you save.",
    imgSrc: "/assets/TravelBookingApp7.png",
    alt : "Mobile travel platform with real-time booking confirmation and e-ticket generation.",
    points: [
      {
        item: "Save up to 30% on your next booking.",
        icon: <Tag className="text-blue-600 text-2xl shrink-0" />,
      },
      {
        item: "Special last-minute deals and promotions.",
        icon: <Tag className="text-blue-600 text-2xl shrink-0" />,
      },
      {
        item: "Join our loyalty program to earn rewards with every booking.",
        icon: <Tag className="text-blue-600 text-2xl shrink-0" />,
      },
    ],
  };


  const travelBookingMargins = {
    mainTitle:
      "Travel Booking Margins & Commission Structure | Up to 40% Revenue Share",
    mainDescription:
      "Our platform is designed to help travel businesses grow & succeed with competitive advantages and exclusive features.",
    imgSrc: "/assets/TravelBookingPlatform8.png",
    alt: "Customizable travel portal for travel agents and OTAs",
    content: [
      {
        title:
          "Wholesale pricing access with up to 40% margins on travel bookings",
        description: "",
      },
      {
        title: "Exclusive inventory access to premium travel suppliers",
        description: "",
      },
      {
        title: "Revenue sharing programs for long-term partnerships",
        description: "",
      },
    ],
  };

  const scalableTravelPlatform = {
    mainTitle: "Scalable Travel Platform | Travel Business Solution",
    mainDescription:
      "Whether you're managing 10 retailers or 1,000, our platform grows with your business needs.",
    imgSrc: "/assets/TravelBookingPlatform7.png",
    alt: "Mobile-friendly travel booking system for agents",
    content: [
      {
        title: "Unlimited retailer accounts under merchant tier",
        description: "",
      },
      {
        title: "API rate limits designed for high-volume operations",
        description: "",
      },
      {
        title: "24/7 technical support for business-critical operations",
        description: "",
      },
      {
        title: "Custom integration options for enterprise clients",
        description: "",
      },
    ],
  };

  const faqs = [
    {
      question: "How do I book a flight on the Travel Booking App?",
      answer:
        "Simply enter your travel details, including dates and destination, and the app will show available flights for your trip. Select the one that works for you and complete your booking.",
    },
    {
      question: "Can I modify or cancel my bookings through the app?",
      answer:
        "Yes, you can modify or cancel most bookings directly through the app, depending on the provider's cancellation policy.",
    },
    {
      question: "Is the payment process secure?",
      answer:
        "Absolutely! We use SSL encryption & PCI DSS-compliant payment processing to ensure that your payment details are protected.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept a variety of payment methods, including credit cards, PayPal, and other local payment methods depending on your location.",
    },
  ];

  const getStarted = {
    title: "Get Started with B2B Travel Booking Platform | Free Demo",
    description:
      "Join hundreds of merchants and thousands of retailers who trust our platform to power their travel booking operations. Contact our business development team to discuss your specific needs and get started today.",
    // CTABtn1: "Schedule a Demo",
    CTABtn2: "Launch Your Travel Booking Engine",
  };
  return (
    <>
      <Head>
        <title>BOS: Best Flight, Train, Bus, Hotel Booking App</title>
        <meta name="robots" content="index, follow"></meta>
      </Head>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <PagesHeader headerContent={headerContent} />
      <APIServicesSection/>
      {/* <TravelContent
        content={travelContent}
        heading="Travel Booking Platform for Merchants & Retailers - Complete B2B Travel Solution"
      /> */}
      <HowItWorks content={howItWorks} />
      <Steps
        textContent1={travelBookingMargins}
        textContent2={scalableTravelPlatform}
        heading="Travel Business Revenue Solution | Maximize Travel Booking Profits & Commissions"
      />
      {/* <FAQSection faqs={faqs} /> */}
      <GetStarted getStarted={getStarted} />
    </>
  );
};

export default TravelBookingPlatform;
