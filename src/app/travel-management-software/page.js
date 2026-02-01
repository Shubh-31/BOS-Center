import {
  PagesHeader,
  UseCases,
  TravelContent,
  Steps,
  GetStarted,
} from "@/sections/mySection";
import Head from "next/head";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { ForEmployeesSection } from "@/sections/ForEmployeesTravelManagement";
import Script from "next/script";
import APIServicesSection from "@/sections/TravelManagementSoftware/APIServicesSection";

export const metadata = {
  title: "Best Corporate Travel Management Software Solution | BOS",
  description:
    "Streamline your business travel with BOS corporate travel management software. Unify travel policies, simplify reporting, and optimize expenses. Try it now!",
  keywords: [
    "Best Travel Management Software for Travel Businesses",
    "Best Travel Management Software for Travel Enterprises",
    "Best Travel Management Software for Travel Agencies",
    "Best Travel Management Software for Corporate Travel Solution",
    "Travel Management Software Price",
    "Travel Management Software Provider Company in Delhi",
    "Best Travel Management Software Provider in India",
    "Travel Management Software Demo",
    "Best Travel Management Software for MSMEs",
    "India’s Best Travel Management Software Provider  Company",
    "Best Travel Management Solution",
    "Business Travel Solutions",
    "Travel Booking Software",
    "Corporate Travel",
    "Expense Management",
    "Travel Itinerary",
    "Travel Cost Management",
    "Corporate Travel Planning",
    "Travel Expense Tracking",
    "Travel Management System",
    "Travel Software",
    "Employee Travel Management",
    "Travel Automation",
    "Corporate Travel Booking",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://bos.center/travel-management-software",
  },
  openGraph: {
    title: "Streamline Your Travel Business with Travel Management Solution",
    description:
      "Manage bookings, track expenses, & streamline itineraries with Travel Management Software. Save time & reduce costs with BOS powerful travel management software.",
    url: "https://bos.center/solutions/enterprise/travel-management-software",
    siteName: "Travel Management Solutions Inc.",
    images: [
      {
        url: "https://bos.center/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Bos Center Open Graph Image",
      },
    ],
    type: "website",
  },
};

const TravelManagementSoftware = () => {

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://bos.center/travel-management-software/#localbusiness",
      name: "BOS Center Pvt. Ltd.",
      url: "https://bos.center/travel-management-software",
      telephone: "+91-8929898920",
      description:
        "BOS Center offers the best Travel Management Software to streamline travel bookings, client management, itineraries, corporate travel, and expense tracking for agencies and businesses.",
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
            name: "Travel Booking Management",
            description:
              "Manage travel bookings, itineraries, and ticketing for agencies and corporate clients.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate Travel Management",
            description:
              "Handle corporate travel expenses, approvals, and bookings efficiently.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Travel Analytics and Reporting",
            description:
              "Generate reports, track expenses, and analyze travel operations for better business decisions.",
          },
        },
      ],
    };


  const headerContent = {
    tag: "Travel Management System",
    title:
      "Corporate Travel Management Solution Built For Businesses of All Sizes",
    firstSentence:
      "Efficient, Seamless, and Cost-Effective Travel Management for Your Business",
    description:
      "Managing corporate travel can be time-consuming, costly, and complex. Our Travel Management Solution is designed to streamline your entire process—booking, expense tracking, policy compliance, and more. With our all-in-one platform, you can enhance travel experiences, save costs, and gain better control over your company’s travel activities, no matter the size of your business.",
    imgSrc: "/assets/TravelManagement1.png",
    alt: "Travel management software dashboard showing booking system and itinerary planning.",
    buttonLabel: "Automate Travel Bookings & Tours With BOS",
  };

  const travelContent = [
    {
      title: "Centralized Travel Booking Platform",
      description:
        "Easily manage and book travel for employees from a single, user-friendly platform.",
      points: [
        "Simplified Booking Process: Book flights, hotels, and car rentals in one place, saving time and reducing errors.",
        "Preferred Vendor Integration: Ensure cost savings by integrating with preferred travel suppliers, offering discounts and more flexible options.",
        "Real-Time Availability: Stay updated with real-time pricing and availability, helping you make informed decisions instantly.",
      ],
      image: "/assets/TravelManagement2.png",
      alt: "Digital travel platform with hotel and flight reservation management features.",
    },
    {
      title: "Expense & Budget Control",
      description:
        "Take charge of your travel budget and reduce unnecessary spending.",
      points: [
        "Automatic Expense Reporting: Effortlessly track and categorize expenses, making it simple to stay within budget.",
        "Real-Time Cost Tracking: Monitor travel spending in real-time and receive alerts when you’re nearing your budget limit.",
        "Multi-Tier Approval Workflow: Ensure travel bookings align with company policies before confirmation, with an approval process for added control.",
      ],
      image: "/assets/TravelManagement3.png",
      alt: "Cloud-based travel solution displaying expense tracking and approval workflows.",
    },
    {
      title: "Travel Policy Compliance",
      description:
        "Ensure all employees follow your company’s travel policies, reducing unauthorized spending.",
      points: [
        "Custom Travel Policies: Tailor the Solution to align with your company’s unique travel rules and restrictions.",
        "Instant Policy Checks: Receive real-time notifications when a booking doesn’t meet your policy guidelines.",
        "Reporting & Violation Tracking: Easily identify policy violations and track compliance trends across the company.",
      ],
      image: "/assets/TravelManagement4.png",
      alt: "Enterprise travel system with policy compliance and cost center management.",
    },
    {
      title: "Advanced Reporting & Analytics",
      description:
        "Gain valuable insights into your company’s travel spending and behavior.",
      points: [
        "Customizable Dashboards: Create personalized dashboards to track KPIs, such as travel spend, booking frequency, and preferred supplier usage.",
        "Data-Driven Insights: Make informed decisions with detailed reports on travel patterns, helping you optimize future travel plans and negotiations.",
        "Cost-Saving Opportunities: Use the analytics tools to identify areas where you can reduce costs, like switching suppliers or adjusting policies.",
      ],
      image: "/assets/TravelManagement5.png",
      alt: "Travel software displaying reporting dashboard and analytics for cost optimization.",
    },
    {
      title: "Employee Self-Service & Flexibility",
      description:
        "Empower employees to manage their own bookings while ensuring compliance with travel policies.",
      points: [
        "Self-Booking Interface: Let employees book their own travel within the approved guidelines, streamlining the process and reducing administrative work.",
        "Mobile Booking & Management: Enable employees to book, modify, and manage their travel plans directly from their mobile devices.",
        "Pre-Approved Travel Options: Offer employees pre-approved travel options, helping them stay within company policies without the back-and-forth of approval processes.",
      ],
      image: "/assets/TravelManagement6.png",
      alt: "Mobile travel app with GPS tracking and expense capture functionality.",
    },
    {
      title: "24/7 Support for Travelers",
      description:
        "Ensure your employees have help whenever they need it, during or after their business trip.",
      points: [
        "Around-the-Clock Assistance: Access 24/7 customer support for travel disruptions, re-bookings, and emergency situations.",
        "Instant Updates: Receive immediate notifications if there are changes to travel plans, such as cancellations, delays, or emergencies.",
      ],
      image: "/assets/TravelManagement7.png",
      alt: "Integrated travel platform with corporate booking tools and traveler profiles",
    },
  ];

  const useCases = {
    heading:
      "Maximize Travel Business Efficiency With Travel Management Platform",
    description: "",
    uses: [
      {
        title: "Step 1: Set Your Travel Policies",
        description:
          "Configure your travel policies, such as spending limits, preferred suppliers, and booking processes to align with your company’s needs.",
        icon: "/assets/Set Your Travel Policies.png",
      },
      {
        title: "Step 2: Empower Employees to Book Travel",
        description:
          "Allow employees to book their travel within approved guidelines, reducing manual intervention and ensuring compliance.",
        icon: "/assets/Empower Employees to Book Travel.png",
      },
      {
        title: "Step 3: Track & Approve Travel Plans",
        description:
          "Enable managers to approve or reject bookings based on compliance with internal policies, ensuring cost control and policy adherence.",
        icon: "/assets/Track & Approve Travel Plans.png",
      },
      {
        title: "Step 4: Monitor & Report on Travel Data",
        description:
          "Track travel expenses, analyze trends, and generate custom reports that help you optimize spending and make data-driven decisions.",
        icon: "/assets/Monitor & Report on Travel Data.png",
      },
      {
        title: "Step 5: Provide Ongoing Support",
        description:
          "Offer 24/7 support to employees, ensuring a seamless travel experience and handling any emergencies quickly.",
        icon: "/assets/Support & Community.png",
      },
    ],
  };

  const b2b_business = {
    mainTitle: "For HR & Travel Managers",
    mainDescription: "",
    imgSrc: "/assets/TravelManagement8.png",
    alt: "Cloud-based travel solution displaying expense tracking and approval workflows.",
    content: [
      {
        title: "Simplified Travel Process",
        description:
          "Automate the booking, approval, and reporting process, saving time and reducing the risk of errors.",
      },
      {
        title: "Enhanced Compliance",
        description:
          "Ensure employees are following company policies and staying within budget with real-time checks.",
      },
      {
        title: "Actionable Data Insights",
        description:
          "Make strategic decisions with powerful reporting tools, helping you optimize travel management and reduce unnecessary expenses.",
      },
    ],
  };

  const b2c_business = {
    mainTitle: "For Finance Teams",
    mainDescription: "",
    imgSrc: "/assets/TravelManagement9.png",
    alt: "Enterprise travel system with policy compliance and cost center management.",
    content: [
      {
        title: "Control Travel Spend",
        description:
          "Track, categorize, and report travel expenses in real-time to ensure you're staying within budget.",
      },
      {
        title: "Simplify Reporting",
        description:
          "Streamline expense reporting, eliminating manual work and reducing the chance of errors.",
      },
      {
        title: "Better Budget Forecasting",
        description:
          "Use historical data to forecast future travel expenses more accurately.",
      },
    ],
  };

  const getStarted = {
    title: "Contact Us to Learn More",
    description:
      "Experience the full capabilities of our Travel Management Solution with a no-risk 14-day free trial. Get started today and discover how we can help you streamline your travel management.",
    // CTABtn1: "Request a Live Demo",
    CTABtn2: "Manage Your Travel Business Smarter",
  };

  return (
    <>
      <Head>
        <title>BOS: Best Flight, Train, Bus, Hotel Booking App</title>
        <meta name="robots" content="index, follow" />
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
        heading="Travel & Expense Management Software That’s Easy to Use"
        tag="Benefits & Features"
      /> */}
      <Steps
        textContent1={b2b_business}
        textContent2={b2c_business}
        heading="Travel Management Tool For Corporate Teams"
        tag=""
      />
      <ForEmployeesSection />

      <UseCases useCases={useCases} />
      <section className="bg-gradient-to-b from-[#D2DCFF] to-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title mb-4 w-full max-w-8xl text-5xl md:text-4xl sm:text-xl">
            Pricing Plans for Travel Businesses of All Sizes
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We offer flexible pricing plans to meet the needs of small
            businesses, mid-sized companies, and large enterprises. Whether
            you&apos;re looking for basic travel management features or a
            comprehensive enterprise solution, we have a plan for you.
          </p>

          <div className="mt-10 space-y-8 text-left max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Basic Plan
              </h3>
              <p className="text-gray-700">
                Perfect for small travel businesses managing a few trips per
                month. Includes essential booking, tracking, and reporting
                tools.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Standard Plan
              </h3>
              <p className="text-gray-700">
                Ideal for growing travel companies needing more secure features
                like budget tracking, travel policy management, and reporting
                analytics.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Enterprise Plan
              </h3>
              <p className="text-gray-700">
                Tailored for large travel organizations with complex travel
                needs, offering advanced integrations, custom workflows, and
                dedicated support.
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Free Trial
              </h3>
              <p className="text-gray-700">
                Experience the full capabilities of our Travel Management
                Solution with a no-risk 14- day free trial. Get started today
                and discover how we can help you streamline your travel
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-8">
        <h2 className="section-title mb-4 w-full max-w-8xl text-5xl md:text-4xl sm:text-xl">
          What Our Clients Say About Our Travel Management Solution
        </h2>
        <div className="section-description mt-5 max-w-4xl mx-auto text-lg">
          <blockquote className="mt-8 border-l-4 border-blue-600 pl-6 italic text-gray-800 max-w-3xl mx-auto">
            The Solution has transformed our approach to travel management.
            We’ve reduced costs, improved compliance, and made travel booking
            much easier for everyone involved.
            <footer className="mt-4 text-right font-medium not-italic text-gray-700">
              - John Smith
            </footer>
          </blockquote>
        </div>
      </section>
      <GetStarted getStarted={getStarted} />
    </>
  );
};

export default TravelManagementSoftware;
