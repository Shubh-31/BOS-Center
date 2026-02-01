import APIServicesSection from "@/sections/B2BB2C/APIServicesSection";
import { FinancialBusinessOwnersManagers } from "@/sections/FinancialBusinessOwners&Managers";
import {
  PagesHeader,
  UseCases,
  TravelContent,
  Steps,
  GetStarted,
} from "@/sections/mySection";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "Best B2B & B2C Financial Operations Management Software Solution",
  description:
    "Manage your financial operations easily with our B2B & B2C software—streamlining transactions, compliance, and customer management for all business types",
  keywords: [
    "Best B2B & B2C Management Software for Businesses",
    "Best B2B & B2C Management Software for Enterprises",
    "Best B2B & B2C Management Software for Small Businesses",
    "Best B2B & B2C Management Software for Corporate Solution",
    "B2B & B2C Management Software Price",
    "B2B & B2C Management Software Provider Company in Delhi",
    "Best B2B & B2C Management Software Provider in India",
    "B2B & B2C Management Software Demo",
    "Best B2B & B2C Management Software for MSMEs",
    "India’s Best B2B & B2C Management Software Provider  Company",
    "Best B2B & B2C Management Solution",
    "Business to Business Solutions",
    "Business to Customer Solution",
    "Corporate B2B Solutions",
    "B2B Management Software Solution",
    "B2C Management Software Solution",
    "business automation",
    "enterprise management",
    "CRM integration",
    "workflow optimization",
    "customer engagement",
    "business process management",
    "B2B solutions",
    "B2C solutions",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://bos.center/b2b-b2c-management-software",
  },
  openGraph: {
    title:
      "Powerful B2B & B2C Management Solution to Drive Efficiency & Growth",
    description:
      "Streamline operations, improve workflows, and improve customer relationships with BOS B2B & B2C management software. Optimize your business today.",
    url: "https://bos.center/b2b-b2c-management-software",
    siteName: "B2B & B2C Solutions Inc.",
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

const B2BManagementSoftware = () => {

   const structuredData = {
     "@context": "https://schema.org",
     "@type": "ProfessionalService",
     "@id": "https://bos.center/b2b-b2c-management-software/#localbusiness",
     name: "BOS Center Pvt. Ltd.",
     url: "https://bos.center/b2b-b2c-management-software",
     telephone: "+91-8929898920",
     priceRange: "Free",
     image: "https://bos.center/assets/img/logo.png",
     description:
       "BOS Center offers the best B2B & B2C Management Software to streamline your business operations. Manage sales, customers, orders, inventory, finances, and analytics in one platform with automation and CRM integration.",

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
           name: "B2B Management Software",
           description:
             "Manage B2B sales, orders, inventory, CRM, and finance operations efficiently.",
         },
       },
       {
         "@type": "Offer",
         itemOffered: {
           "@type": "Service",
           name: "B2C Management Software",
           description:
             "Automate B2C customer management, sales, marketing, and analytics in one platform.",
         },
       },
       {
         "@type": "Offer",
         itemOffered: {
           "@type": "Service",
           name: "Financial & Analytics Module",
           description:
             "Handle invoicing, budgeting, forecasting, and analytics for B2B & B2C businesses.",
         },
       },
     ],
   };




  const headerContent = {
    tag: "B2B & B2C Management System",
    title:
      "Next-Gen B2B & B2C Financial Operations Management Solution for Modern Enterprises",
    description:
      "Explore new levels of efficiency and insight with our B2B & B2C Financial Operations Management Solution- designed for modern financial institutions serving both businesses and individual customers. From invoicing and payments to reconciliation and reporting, our platform simplifies complex financial processes, strengthens compliance, and supports scalable growth. Whether you're serving corporate clients or individual consumers, enjoy real-time visibility, automation, and control—all in one smart system.",
    imgSrc: "/assets/B2B&B2C1.png",
    alt: "B2B B2C management platform dashboard showing customer relationship and sales analytics.",
    buttonLabel: "Manage B2B & B2C With Our Platform",
  };

  const travelContent = [
    {
      title: "Centralized Financial Customer Database",
      description:
        "Centralize & organize all financial customer records—whether business entities or individual consumers—for improved visibility, communication, and compliance.",
      points: [
        "Comprehensive Client Profiles: Store financial details, transaction histories, contact info, and payment behavior in one centralized profile.",
        "Smart Segmentation: Classify clients by type (B2B/B2C), financial behavior, and risk profile to tailor interactions and services.",
        "Data Security & Compliance: Maintain data integrity with bank-grade encryption and ensure adherence to financial compliance standards.",
      ],
      image: "/assets/B2B&B2C2.png",
      alt: "Enterprise business platform with supplier management and procurement automation.",
    },
    {
      title: "Sales & Revenue Pipeline Management",
      description:
        "Track and manage financial leads and revenue opportunities from prospecting to payment—across both B2B and B2C workflows.",
      points: [
        "Tailored B2B Pipelines: Handle complex deal structures, multi-stakeholder negotiations, and contract-driven sales cycles.",
        "Fast-Paced B2C Conversions: Automate high-volume lead conversion processes through targeted messaging and real-time follow-ups.",
        "Lead Qualification & Automation: Score leads based on revenue potential and automate key touchpoints to maximize conversion.",
      ],
      image: "/assets/B2B&B2C3.png",
      alt: "Cloud-based B2B B2C solution displaying multi-channel sales and customer portal.",
    },
    {
      title: "Financial CRM & Engagement Tools",
      description:
        "Strengthen client relationships with financial CRM features that support proactive communication and personalized service.",
      points: [
        "Multi-Channel Financial Communication: Engage clients through email, SMS, phone, or secure portals for account and payment-related queries.",
        "Automated Client Outreach: Set up reminders for payment follow-ups, contract renewals, and personalized check-ins.",
        "360° Financial View: Access complete financial history and engagement records to better understand and serve clients.",
      ],
      image: "/assets/B2B&B2C4.png",
      alt: "Business management system interface with CRM integration and lead tracking.",
    },
    {
      title: "Financial Operations & Inventory Control",
      description:
        "Manage financial operations easily, including invoicing, payment tracking, inventory management, and order fulfillment.",
      points: [
        "Invoicing & Payments: Generate, send, and track invoices with automated reminders and multi-currency payment support.",
        "Inventory & Fulfillment Tracking: Sync inventory with financial records to ensure accurate billing and services control across B2B/B2C dealings.",
        "Integrated Service Management: Manage B2B and B2C transactions in a unified interface with real-time status updates.",
      ],
      image: "/assets/B2B&B2C5.png",
      alt: "Complete B2B B2C platform displaying financial management and reporting features.",
    },
    {
      title: "Financial Reporting & Analytics",
      description:
        "Gain actionable insights with real-time dashboards and financial performance metrics tailored to both business and individual clients.",
      points: [
        "Custom Financial Dashboards: Monitor KPIs like cash flow, revenue by segment, receivables aging, and sales pipeline performance.",
        "Predictive Analytics & Forecasting: Use historical data and trends to forecast revenue and assess risk exposure.",
        "Compliance & Audit Reports: Generate export-ready reports for audits, financial reviews, and investor presentations.",
      ],
      image: "/assets/B2B&B2C6.png",
      alt: "AI-powered B2B B2C platform with predictive analytics and business intelligence.",
    },
    {
      title: "Financial Workflow Automation",
      description:
        "Automate repetitive financial tasks to reduce manual errors and improve operational efficiency across all customer types.",
      points: [
        "Automated Billing & Notifications: Schedule recurring invoices and send automatic payment alerts.",
        "Task Routing & Escalations: Assign financial tasks based on workflow logic—ideal for approval chains, credit checks, and B2B contract reviews.",
        "Custom Financial Workflows: Build tailored workflows for B2B contract lifecycles or high-frequency B2C transactions with minimal human intervention.",
      ],
      image: "/assets/B2B&B2C7.png",
      alt: "Integrated B2B B2C software showing workflow automation and document management.",
    },
  ];

  const useCases = {
    heading:
      "Streamline Your Operations With B2B & B2C Financial Management Platform",
    description: "",
    uses: [
      {
        title: "Step 1: Easy Onboarding and Integration",
        description:
          "Quickly sign up and easily integrate with your existing financial system, payment gateways, and accounting systems to unify your financial operations.",
        icon: "/assets/Sign up.png",
      },
      {
        title: "Step 2: Capture and Categorize Financial Clients",
        description:
          "Automatically capture and organize client data from multiple sources, segmenting them into B2B or B2C categories for precise financial management and targeted services.",
        icon: "/assets/Capture, Manage & Organize Leads.png",
      },
      {
        title: "Step 3: Automate Financial Workflows",
        description:
          "Streamline your financial operations with automation—from invoicing and payment reminders to reconciliation and compliance checks—boosting accuracy and efficiency.",
        icon: "/assets/Automate Workflows & Sales, Streamline Reseller Management.png",
      },
      {
        title: "Step 4: Real-Time Monitoring and Insights",
        description:
          "Access live dashboards and generate detailed financial reports to monitor KPIs, identify trends, and optimize your financial strategies for sustainable growth.",
        icon: "/assets/Monitor API Performance, Monitor & Optimize Performance.png",
      },
    ],
  };

  const b2b_business = {
    mainTitle: "For B2B Financial Institutions",
    mainDescription: "",
    imgSrc: "/assets/B2B&B2C8.png",
    alt: "Scalable business solution showing multi-location support and role-based access.",
    content: [
      {
        title: "Optimized Financial Workflows",
        description:
          "Manage complex financial transactions, invoicing, and compliance requirements with tools built specifically for B2B operations.",
      },
      {
        title: "Stronger Client Trust",
        description:
          "Provide personalized financial services and real-time communication to build enduring relationships with business clients.",
      },
      {
        title: "Collaborative Financial Management",
        description:
          "Allow seamless coordination across departments and with clients through shared financial dashboards and automated workflows.",
      },
    ],
  };

  const b2c_business = {
    mainTitle: "For B2C Financial Services",
    mainDescription: "",
    imgSrc: "/assets/B2B&B2C9.png",
    alt: "Mobile business app with field sales management and real-time synchronization.",
    content: [
      {
        title: "Personalized Customer Experiences",
        description:
          "Enhance engagement with automated notifications, payment reminders, and tailored financial offers to individual customers.",
      },
      {
        title: "Simplified Payment and Inventory Handling",
        description:
          "Track payments, manage billing cycles, and oversee service delivery with real-time control.",
      },
      {
        title: "Higher Conversion Rates",
        description:
          "Utilize targeted lead nurturing and customized campaigns to convert prospects into loyal customers.",
      },
    ],
  };

  const getStarted = {
    title: "Contact Us for More Information",
    description:
      "Experience the power of our B2B & B2C Management Solution with a free trial. No credit card required.",
    // CTABtn1: "Start Your Free Trial",
    CTABtn2: "Book Free Demo Now",
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
      <APIServicesSection/>
      {/* <TravelContent
        content={travelContent}
        heading="B2B & B2C Financial Operations Management Tool for Fintechs & Financial Institutions"
      /> */}

      <Steps
        textContent1={b2b_business}
        textContent2={b2c_business}
        heading="Best B2B & B2C Financial Management Tool for Fintechs and Financial Institutions"
      />
      <FinancialBusinessOwnersManagers />
      <UseCases useCases={useCases} />
      <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
        <h2 className="section-title mb-4 w-full max-w-7xl mx-auto text-center text-5xl">
          Trusted by Fintechs and Financial Institutions Worldwide
        </h2>
        <div className="section-description mt-5 max-w-4xl mx-auto text-lg">
          <blockquote className="mt-8 border-l-4 border-blue-600 pl-6 italic text-gray-800 max-w-3xl mx-auto">
            Our sales team is more organized and efficient than ever before. The
            Solution has transformed how we handle both B2B and B2C sales,
            helping us grow our revenue and customer satisfaction.
            <footer className="mt-4 text-right font-medium not-italic text-gray-700">
              - Jane Doe
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#D2DCFF] to-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title mb-4 w-full max-w-8xl lg:text-5xl md:text-3xl p-1">
            Flexible Pricing Plans for B2B & B2C Financial Management Solution
          </h2>
          <div className="mt-10 space-y-8 text-left max-w-3xl mx-auto">
            <p className="section-description text-lg text-gray-700">
              We offer a range of pricing plans to suit businesses of all sizes,
              from startups to enterprises.
            </p>
            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Starter Plan
              </h3>
              <p className="text-gray-700">
                Perfect for small businesses or startups managing a limited
                portfolio of B2B or B2C clients with essential features.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Standard Plan
              </h3>
              <p className="text-gray-700">
                Perfect for growing companies requiring advanced capabilities
                like automated invoicing, financial analytics, and custom
                reporting.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Enterprise Plan
              </h3>
              <p className="text-gray-700">
                Tailored for large organizations, offering full platform
                customization, priority support, and easy integration with
                enterprise systems.
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Free Trial
              </h3>
              <p className="text-gray-700">
                Try our B2B & B2C Financial Management Solution risk-free with a
                free trial—no credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>
      <GetStarted getStarted={getStarted} />
    </>
  );
};

export default B2BManagementSoftware;
