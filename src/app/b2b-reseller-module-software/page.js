import {
  PagesHeader,
  BenefitsSection,
  UseCases,
  HowItWorks,
  TravelContent,
  GetStarted,
} from "@/sections/mySection";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "India’s Best B2B Reseller & Distributor Management System",
  description:
    "Streamline partner operations with BOS B2B Reseller Management Solution - manage pricing, commissions, inventory, and performance in one reseller platform.",
  keywords: [
    "Best B2B Reseller Module Software for Businesses",
    "Best B2B Reseller Module Software for Enterprises",
    "Best B2B Reseller Module Software for Small Businesses",
    "Best B2B Reseller Module Software for Corporate Solution",
    "B2B Reseller Module Software Price",
    "B2B Reseller Module Software Provider Company in Delhi",
    "Best B2B Reseller Module Provider in India",
    "B2B Reseller Module Software Demo",
    "Best B2B Reseller Module Software for MSMEs",
    "India’s Best B2B Reseller Module Software Provider Company",
    "Best B2B Reseller Module Solution",
    "Business to Business Reseller Module Solutions",
    "reseller management software",
    "B2B sales software",
    "reseller tracking",
    "sales optimization",
    "reseller network",
    "distribution software",
    "business reseller solutions",
    "profit management",
    "Reseller software for B2B",
    "reseller management platform",
    "B2B reseller network",
    "B2B distribution",
    "performance tracking software",
    "B2B distribution software",
    "reseller management system",
    "reseller profit management",
    "reseller performance",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bos.center/b2b-reseller-module-software",
  },
  openGraph: {
    title:
      "Efficient B2B Reseller Management Solution to Streamline Operations",
    description:
      "Manage resellers, monitor sales, & scale your B2B operations with BOS reseller module software. Boost revenue & efficiency today.",
    url: "https://bos.center/b2b-reseller-module-software",
    siteName: "B2B Reseller Solutions inc.",
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

const B2BResellerModuleSoftware = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://bos.center/b2b-reseller-module-software/#software",
    name: "BOS Center B2B Reseller Module Software",
    url: "https://bos.center/b2b-reseller-module-software",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    softwareVersion: "1.0",
    description:
      "Optimize your reseller operations with BOS cheapest B2B Reseller Software. Easy reseller management, automation, and local support to help your business grow.",
    creator: {
      "@type": "Organization",
      name: "BOS Center Pvt. Ltd.",
      url: "https://bos.center",
      telephone: "+91-8929898920",
      address: {
        "@type": "PostalAddress",
        streetAddress: "73, Block B-1, Sewak Park Extension",
        addressLocality: "Uttam Nagar",
        addressRegion: "Delhi",
        postalCode: "110059",
        addressCountry: "IN",
      },
    },
    offers: {
      "@type": "Offer",
      price: "Free",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://bos.center/b2b-reseller-module-software",
    },
    featureList: [
      "White Label B2B reseller module software for businesses",
      "Reseller management platform for distributors and vendors",
      "Track B2B reseller orders and commissions",
      "Cloud-based B2B reseller module for enterprises",
      "Automate reseller onboarding and management",
      "Manage partner networks efficiently",
      "B2B sales and reseller performance tracking",
      "Commission tracking for resellers",
      "Reseller module for e-commerce businesses",
      "B2B reseller solution for FMCG and retail industries",
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
  };



  const headerContent = {
    tag: "B2B Reseller System",
    title:
      "Private Label B2B Reseller Software Solution | Reseller Admin Panel",
    firstSentence:
      "Streamline Your Reseller Network, Increase Revenue, and Optimize Your Business Operations with B2B Reseller Solution.",
    description:
      "In today’s competitive market, managing a reseller network efficiently is key to scaling your business. B2B Reseller Solution offers a comprehensive B2B Reseller Module designed to automate processes, manage reseller relationships, and boost performance. Whether you are a manufacturer, wholesaler, or distributor, our Solution gives you the tools you need to optimize reseller operations, track sales, and drive growth.",
    imgSrc: "/assets/B2BSoftware1.png",
    alt: "B2B reseller platform dashboard showing partner management and commission tracking.",
    buttonLabel: "Start Managing Dealers & Partners Now",
  };

  const benefitsContent = {
    heading:
      "B2B Reseller System: Automate, Optimize, and Drive Sales with Smart Decisions",
    description:
      "At B2B Reseller Solution, we understand the challenges businesses face in managing a growing reseller network. Our B2B Reseller Module empowers businesses to",
    benefits: [
      {
        title: "Increase Operational Efficiency",
        description:
          "Automate tasks like pricing management, order processing, and commission calculations.",
        icon: "/assets/Increase Operational Efficiency.png",
      },
      {
        title: "Scale Your Reseller Network",
        description:
          "Easily onboard new resellers and monitor their performance from a centralized platform.",
        icon: "/assets/Scale Your Reseller Network.png",
      },
      {
        title: "Gain Insights with Real-Time Analytics",
        description:
          "Make data-driven decisions with real-time reporting and performance tracking.",
        icon: "/assets/Gain Insights with Real-Time Analytics.png",
      },
    ],
  };

  const travelContent = [
    {
      title: "Reseller Network Management",
      description: "",
      points: [
        "Centralized Management: Manage multiple resellers from one easy-to-use dashboard, track performance, and assign roles with customizable access.",
        "Secure Reseller Access: Control access levels based on reseller roles, ensuring the security of sensitive data and pricing.",
      ],
      image: "/assets/B2BSoftware2.png",
      alt: "Enterprise reseller platform with multi-level hierarchy and territory management.",
    },
    {
      title: "Flexible Pricing & Commission Management",
      description: "",
      points: [
        "Custom Pricing Tiers: Set individual pricing models for each reseller, whether for bulk orders, wholesale rates, or special discounts.",
        "Automated Commission Calculations: Save time by automating commission calculations based on predefined rules, and ensure accuracy with no manual intervention.",
      ],
      image: "/assets/B2BSoftware3.png",
      alt: "Cloud-based B2B reseller solution displaying pricing tiers and discount management.",
    },
    {
      title: "Real-Time Analytics & Reporting",
      description: "",
      points: [
        "Performance Metrics: Track sales, revenue, inventory, and other key metrics to assess reseller performance and optimize operations.",
        "Customizable Reports: Generate custom reports to analyze specific reseller metrics, sales trends, and profitability.",
      ],
      image: "/assets/B2BSoftware4.png",
      alt: "Reseller management system with performance analytics and sales reporting.",
    },
    {
      title: "Easy Order Management",
      description: "",
      points: [
        "Simplified Order Processing: Automate order processing from purchase to shipment, ensuring efficiency and reducing human error.",
        "Inventory Tracking: Keep real-time track of product stock levels, ensuring you never run out of stock and always fulfill orders on time.",
      ],
      image: "/assets/B2BSoftware5.png",
      alt: "Digital reseller module with inventory management and order processing system.",
    },
    {
      title: "Scalable and Customizable",
      description: "",
      points: [
        "Growth-Oriented: Whether you're a small business or a large enterprise, B2B Reseller Solution grows with your needs. Scale up with ease as your reseller network expands.",
        "Easy Integration: Integrate with your existing CRM, ERP, and eCommerce systems for smooth operations across all platforms.",
      ],
      image: "/assets/B2BSoftware6.png",
      alt: "Scalable B2B reseller solution showing automated onboarding with customization flexibility and compliance tracking.",
    },
  ];

  const howItWorks = {
    layout : "features",
    title: "Reseller Management: Built to Scale & Drive Business Growth",
    description:
      "B2B Reseller Solution was created with your business needs in mind. By focusing on automation, scalability, and data-driven insights, we help you :",
    imgSrc: "/assets/B2BSoftware7.png",
    alt : "B2B reseller software interface showing product catalog and bulk ordering features.",
    features: [
      {
        title: "Streamline Reseller Management",
        description:
          "Efficiently onboard and manage multiple resellers, all while keeping track of their performance. With easy role assignments and secure access, you can ensure that only authorized individuals have access to sensitive data.",
        icon: "/assets/Automate Workflows & Sales, Streamline Reseller Management.png",
      },
      {
        title: "Boost Reseller Sales & Revenue",
        description:
          "By offering customizable pricing models and automated commission systems, you’ll encourage reseller engagement and boost sales performance.",
        icon: "/assets/Boost Reseller Sales & Revenue.png",
      },
      {
        title: "Make Data-Driven Decisions",
        description:
          "Our Solution provides real-time analytics and customizable reports, giving you valuable insights into your reseller operations. Make informed decisions to grow your business and optimize your network.",
        icon: "/assets/Drive Data-Driven Decisions, Make Data-Driven Decisions.png",
      },
      {
        title: "Automate Manual Tasks",
        description:
          "Automate critical processes like pricing management, commission calculations, and order fulfillment, saving your team valuable time and reducing human error.",
        icon: "/assets/Automate Manual Tasks.png",
      },
    ],
  };

  const useCases = {
    heading: "How It Works: Simple Steps to Get Started",
    description: "",
    uses: [
      {
        title: "Sign Up & Set Up Your Reseller Network",
        description:
          "Easily onboard resellers by importing their data or manually creating reseller profiles. Customize settings, pricing tiers, and commission structures to suit your business.",
        icon: "/assets/Scale Your Reseller Network.png",
      },
      {
        title: "Manage Orders and Pricing Efficiently",
        description:
          "Once set up, monitor order processes, track inventory, and adjust pricing rules as needed. Manage commissions automatically and ensure your resellers have the right information at their fingertips.",
        icon: "/assets/Manage Orders and Pricing Efficiently.png",
      },
      {
        title: "Monitor Performance in Real-Time",
        description:
          "Use real-time analytics and reporting features to monitor your reseller network’s performance, track sales trends, and identify areas for growth.",
        icon: "/assets/Monitor Performance in Real-Time.png",
      },
      {
        title: "Scale Your Business",
        description:
          "As your reseller network grows, easily scale your operations with B2B Reseller Solution. Add new resellers, adjust pricing, and automate key processes to accommodate increased demand.",
        icon: "/assets/Scale Your Business.png",
      },
    ],
  };

  const getStarted = {
    title: "Why B2B Reseller Solution Is the Best Solution for Your Business",
    subTitle:
      "Get started today with B2B Reseller Solution to simplify your reseller operations and take your business to the next level.",
    description:
      "B2B Reseller Solution helps businesses manage their reseller networks efficiently, optimize sales performance, and scale effortlessly. With flexible pricing, automated commission calculations, and real-time performance tracking, we provide everything you need to succeed in the B2B world.",
    CTABtn2: "Launch Your B2B Reseller Network",
  };

  return (
    <>
      <Head>
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
      <TravelContent
        content={travelContent}
        heading="Reseller Network Management Made Easy, Scalable & Profitable"
      />
      <HowItWorks content={howItWorks} />
      <UseCases useCases={useCases} />
      {/* <BenefitsSection benefitsContent={benefitsContent} /> */}
      <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 flex flex-col items-center justify-center">
        <h2 className="section-title mb-4 w-1/2 max-w-8xl text-5xl p-1">
          Hear From Businesses Using Our B2B Reseller Management Solution
        </h2>
        <div className="section-description mt-5 max-w-4xl mx-auto text-lg">
          <blockquote className="mt-8 border-l-4 border-blue-600 pl-6 italic text-gray-800 max-w-3xl mx-auto">
            With <span className="font-semibold">B2B Reseller Solution</span>,
            we’ve been able to streamline our reseller management processes, cut
            down on manual work, and improve our order fulfillment accuracy. The
            commission automation alone has saved us countless hours!
            <footer className="mt-4 text-right font-medium not-italic text-gray-700">
              - John T.
            </footer>
          </blockquote>
          <blockquote className="mt-8 border-l-4 border-blue-600 pl-6 italic text-gray-800 max-w-3xl mx-auto">
            Tracking performance metrics and sales trends has never been easier.{" "}
            <span className="font-semibold">B2B Reseller Solution</span> has
            transformed the way we interact with our resellers and has given us
            more control over pricing and commissions.
            <footer className="mt-4 text-right font-medium not-italic text-gray-700">
              - Sarah K.
            </footer>
          </blockquote>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#D2DCFF] to-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title mb-4 w-full max-w-8xl lg:text-5xl md:text-4xl sm:text-xl p-1">
            Flexible Pricing Plans for Businesses of All Sizes
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We offer flexible pricing plans to suit businesses of all sizes.
            Choose the plan that works best for your reseller management needs.
          </p>

          <div className="mt-10 space-y-8 text-left max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Basic Plan
              </h3>
              <p className="text-gray-700">
                Ideal for small businesses, this plan includes basic reseller
                management features, such as pricing customization and order
                tracking.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Standard Plan
              </h3>
              <p className="text-gray-700">
                Designed for growing businesses, this plan includes advanced
                reporting, commission automation, and enhanced reseller support.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Enterprise Plan
              </h3>
              <p className="text-gray-700">
                Tailored for large organizations/companies, with custom
                features, API access, and dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>
      <GetStarted getStarted={getStarted} />
    </>
  );
};

export default B2BResellerModuleSoftware;
