import APIServicesSection from "@/sections/CRMSoftware/APIServicesSection";
import {
  PagesHeader,
  UseCases,
  TravelContent,
  Steps,
  GetStarted,
} from "@/sections/mySection";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best CRM & Lead Management Software Solution for Small Business",
  description:
    "Maximize sales & improve customer relationships with BOS easy-to-use CRM software. Automate tasks, track leads, & improve customer engagement.",
  keywords: [
    "Best CRM Software for Businesses",
    "Best Customer Relationship Management Software for Enterprises",
    "Best CRM Software for Small Businesses",
    "Best CRM Management Software for Corporate Solution",
    "CRM Software Price",
    "CRM Software Provider Company in Delhi",
    "Best CRM Software Provider in India",
    "CRM Software Demo",
    "Best Customer Relationship Management Software for MSMEs",
    "India’s Best CRM Software Provider Company",
    "Best CRM Solution",
    "Business CRM Solutions",
    "sales automation",
    "lead tracking",
    "customer engagement",
    "business growth",
    "customer service software",
    "CRM tools",
    "sales management",
    "CRM for business",
    "customer tracking software",
    "lead management",
    "customer retention",
    "CRM system",
    "sales pipeline management",
    "marketing automation",
    "customer insights",
    "enterprise CRM",
    "sales process management",
    "lead generation",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bos.center/crm-software",
  },
  openGraph: {
    title: "Improve Customer Relationships with BOS CRM Solution",
    description:
      "Streamline your sales process, manage leads, & improve customer satisfaction with BOS feature-rich CRM software. Start improving relationships today.",
    url: "https://bos.center/crm-software",
    siteName: "CRM Solutions Inc.",
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

const CRMSoftware = () => {
   const structuredData = {
     "@context": "https://schema.org",
     "@type": "ProfessionalService",
     "@id": "https://bos.center/crm-software/#localbusiness",
     name: "BOS Center Pvt. Ltd.",
     url: "https://bos.center/crm-software",
     telephone: "+91-8929898920",
     priceRange: "$$$",
     image: "https://bos.center/assets/img/logo.png",
     description:
       "BOS Center offers a powerful CRM Software designed to manage leads, customers, and sales efficiently. Features include contact management, sales pipeline tracking, marketing automation, AI insights, mobile CRM, and industry-specific solutions for real estate, healthcare, finance, e-commerce, and travel businesses.",

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
           name: "CRM Software",
           description:
             "Complete CRM solution for managing leads, sales, contacts, and customer relationships.",
         },
       },
       {
         "@type": "Offer",
         itemOffered: {
           "@type": "Service",
           name: "Sales & Marketing Automation",
           description:
             "Automate sales pipelines, lead nurturing, email campaigns, and follow-ups.",
         },
       },
       {
         "@type": "Offer",
         itemOffered: {
           "@type": "Service",
           name: "AI-Powered Insights",
           description:
             "Get actionable AI-driven analytics and sales insights for better decision-making.",
         },
       },
     ],
   };

  const headerContent = {
    tag: "CRM & Lead Management System",
    title: "Connect, Engage, & Grow with an Intelligent CRM Platform",
     firstSentence: "Transform How You Manage Leads and Build Strong Customer Relationships.",
    description:
      "Boost your sales, enhance team productivity, and deliver seamless customer experiences with our CRM & Lead Management Solution. Our platform streamlines your sales processes, allowing you to capture, track, and nurture leads with ease. With powerful features like automation, real-time analytics, and pipeline management, you can close deals faster and scale your business.",
    imgSrc: "/assets/CRM1.png",
    alt: "Dashboard view of CRM and lead management software for sales tracking.",
    buttonLabel: "Try Our Smart CRM Solution Today",
  };

  const travelContent = [
    {
      title: "Lead Capture & Tracking",
      description:
        "Easily capture leads from multiple channels and track them throughout their journey to maximize conversions.",
      points: [
        "Multi-Channel Lead Capture: Automatically capture leads from your website, social media, emails, and more.",
        "Lead Segmentation: Group leads based on demographics, behavior, and other criteria for more targeted marketing.",
        "Lead Scoring: Score leads based on engagement, helping your sales team focus on high-priority leads that are more likely to convert.",
      ],
      image: "/assets/CRM2.png",
      alt: "Customizable CRM dashboard for managing leads and client relationships.",
    },
    {
      title: "Sales Pipeline Management",
      description:
        "Efficiently manage your sales process with an intuitive pipeline view, enabling you to track every lead's stage and move them toward conversion.",
      points: [
        "Customizable Sales Stages: Tailor the stages of your sales pipeline to fit your team’s unique workflow.",
        "Drag-&-Drop Interface: Easily move leads between stages with a simple drag-and-drop interface, simplifying the management process.",
        "Sales Forecasting: Get accurate, data-driven sales forecasts based on current opportunities and historical data.",
      ],
      image: "/assets/CRM3.png",
      alt: "Lead management pipeline with automated follow-up features.",
    },
    {
      title: "Contact & Account Management",
      description:
        "Store all relevant customer and lead data in one centralized location, keeping every interaction accessible and organized.",
      points: [
        "360-Degree View: Access a comprehensive view of every contact, including communication history, deal status, and notes.",
        "Automated Follow-Ups: Set up automated reminders for follow-ups, calls, or meetings, ensuring no lead is left unattended.",
        "Centralized Data Storage: Manage contacts, interactions, and documents in one secure, easily accessible platform.",
      ],
      image: "/assets/CRM4.png",
      alt: "Real-time performance analytics in lead management software.",
    },
    {
      title: "Marketing Automation",
      description:
        "Automate your marketing efforts and deliver personalized content to nurture leads, increase engagement, and drive conversions.",
      points: [
        "Email Campaigns: Send automated, personalized email campaigns to nurture leads through the sales funnel.",
        "Drip Campaigns: Implement automated sequences of emails to educate and move leads toward making a purchase decision.",
        "Lead Nurturing: Automatically trigger follow-up messages based on user behavior, such as website visits or email opens.",
      ],
      image: "/assets/CRM5.png",
      alt: "User-friendly CRM interface with real-time lead analytics.",
    },
    {
      title: "Reporting & Analytics",
      description:
        "Track, measure, and optimize your sales and marketing performance with in-depth reporting and analytics.",
      points: [
        "Customizable Dashboards: Create personalized dashboards to view the metrics that matter most to your business.",
        "Lead Conversion Metrics: Monitor conversion rates, sales cycle times, and the efficiency of your lead generation efforts.",
        "Performance Reports: Generate detailed reports that show sales performance, team productivity, and campaign results.",
      ],
      image: "/assets/CRM6.png",
      alt: "Sales team using CRM dashboard for lead conversion insights.",
    },
    {
      title: "Collaboration & Team Management",
      description:
        "Foster better collaboration across your sales team to improve efficiency and close more deals.",
      points: [
        "Task Assignment: Assign tasks to team members, ensuring that each lead gets the right attention at the right time.",
        "Team Communication: Collaborate effectively using internal notes, shared calendars, and messaging features.",
        "Role-Based Permissions: Control user access and permissions to ensure sensitive data remains secure and only available to the right people.",
      ],
      image: "/assets/CRM7.png",
      alt: "CRM software showing customer interaction timeline and activity log.",
    },
  ];

  const useCases = {
    heading:
      "Drive Business Efficiency with Our CRM & Lead Management Solution",
    description: "",
    uses: [
      {
        title: "Sign Up and Integrate",
        description:
          "Quickly get started by signing up and integrating your communication channels like email, website forms, and social media accounts.",
        icon: "/assets/Sign up.png",
      },
      {
        title: "Capture and Organize Leads",
        description:
          "Automatically capture leads from various sources, organize them by interest, and segment them for better targeting.",
        icon: "/assets/Capture, Manage & Organize Leads.png",
      },
      {
        title: "Manage Your Sales Pipeline",
        description:
          "Easily move leads through different stages of your sales pipeline, from initial contact to closing deals.",
        icon: "/assets/Manage Your Sales Pipeline.png",
      },
      {
        title: "Automate Communication",
        description:
          "Set up automated email campaigns, follow-ups, and notifications to nurture and engage leads consistently.",
        icon: "/assets/Automate Communication.png",
      },
      {
        title: "Monitor and Optimize Performance",
        description:
          "Use real-time reporting and analytics to track the success of your sales and marketing efforts, and make data-driven decisions to improve.",
        icon: "/assets/Monitor API Performance, Monitor & Optimize Performance.png",
      },
    ],
  };

  const sales = {
    mainTitle: "For Sales & Marketing Teams",
    mainDescription: "",
    imgSrc: "/assets/CRM8.png",
    alt: "Cloud-based CRM software with lead scoring and tagging tools.",
    content: [
      {
        title: "Boost Productivity",
        description:
          "Automate repetitive tasks like data entry, follow-up reminders, and lead categorization, so your team can focus on selling.",
      },
      {
        title: "Increase Conversion Rates",
        description:
          "Prioritize high-value leads based on lead scoring, ensuring your team works on the most promising prospects.",
      },
      {
        title: "Quick Access to Information",
        description:
          "With all lead and customer data in one place, your sales team can access critical information instantly, speeding up decision-making.",
      },
      {
        title: "Efficient Lead Nurturing",
        description:
          "Use marketing automation to nurture leads through personalized emails and drip campaigns, helping them move through the funnel more efficiently.",
      },
      {
        title: "Better Lead Qualification",
        description:
          "Automatically score leads based on engagement, behavior, and demographics to deliver higher-quality leads to your sales team.",
      },
      {
        title: "Track Campaign Performance",
        description:
          "Measure the success of your marketing campaigns with built-in reporting tools, allowing you to optimize strategies for maximum impact.",
      },
    ],
  };

  const business = {
    mainTitle: "For Business Owners",
    mainDescription: "",
    imgSrc: "/assets/CRM9.png",
    alt: "Cloud-based CRM software with lead scoring and tagging tools.",
    content: [
      {
        title: "Data-Driven Insights",
        description:
          "Get actionable insights through custom reports, allowing you to optimize sales strategies and improve decision-making.",
      },
      {
        title: "Streamline Sales Processes",
        description:
          "Automate tasks, track performance, and streamline the sales process, reducing inefficiencies and boosting productivity.",
      },
      {
        title: "Scalable Solutions",
        description:
          "Whether you have a small sales team or a large enterprise, our CRM and Lead Management Solution is designed to scale with your business.",
      },
    ],
  };

  const getStarted = {
    title: "Contact Us for More Information",
    description:
      "Start your free trial today and experience the power of streamlined lead management and improved sales performance.",
    // CTABtn1: "Start Your Free Trial",
    CTABtn2: "Manage Leads & Clients Effortlessly",
  };

   const solutions = [
     {
       name: "Step 1: Sign Up and Integrate",
       description:
         "Quickly get started by signing up and integrating your communication channels like email, website forms, and social media accounts.",
     },
     {
       name: "Step 2: Capture and Organize Leads",
       description:
         "Automatically capture leads from various sources, organize them by interest, and segment them for better targeting.",
     },
     {
       name: "Step 3: Manage Your Sales Pipeline",
       description:
         "Easily move leads through different stages of your sales pipeline, from initial contact to closing deals.",
     },
     {
       name: "Step 4: Automate Communication",
       description:
         "Set up automated email campaigns, follow-ups, and notifications to nurture and engage leads consistently.",
     },
     {
       name: "Step 5: Monitor and Optimize Performance",
       description:
         "Use real-time reporting and analytics to track the success of your sales and marketing efforts, and make data-driven decisions to improve.",
     },
   ];



  return (
    <>
      <Head>
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
      {/* <TravelContent
        content={travelContent}
        heading="Smart CRM Solution to Centralize Sales, Marketing, & Support"
      /> */}
      <APIServicesSection/>
      <Steps
        textContent1={sales}
        textContent2={business}
        heading="Built for Teams That Want to Work Smarter, Not Harder"
      />
      <section className="py-8 px-4 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-5xl p-1 pb-3">
            Drive Business Efficiency with Our CRM & Lead Management Solution
          </h2>
          <ul className="space-y-4 list-disc mt-2">
            {solutions.map((solution, idx) => (
              <li key={idx} className="text-lg text-gray-800">
                {solution.link ? (
                  <Link
                    href={solution.link}
                    className="text-blue-700 underline hover:text-blue-900 transition font-semibold text-xl"
                  >
                    {solution.name}
                  </Link>
                ) : (
                  <h3 className="font-semibold text-black text-xl">
                    {solution.name}
                  </h3>
                )}
                {solution.description && (
                  <p className="text-gray-600 ml-6 text-lg">
                    {solution.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-8">
        <h2 className="section-title mb-4 w-full max-w-7xl mx-auto text-center text-5xl p-1">
          Customer Success Stories with Our CRM & Lead Management Tools
        </h2>
        <div className="section-description mt-5 max-w-4xl mx-auto text-lg">
          <blockquote className="mt-8 border-l-4 border-blue-600 pl-6 italic text-gray-800 max-w-3xl mx-auto">
            The <span className="font-semibold">CRM Solution</span>, has
            streamlined our sales process and made follow-ups a breeze. We can
            focus on high-value leads, and the automated reporting keeps us on
            track with our goals.
            <footer className="mt-4 text-right font-medium not-italic text-gray-700">
              - John Doe
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#D2DCFF] to-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title mb-4 w-full max-w-8xl text-5xl p-1">
            Flexible Pricing Plan For CRM Tool
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We offer flexible pricing plans designed to meet the needs of
            businesses of all sizes.
          </p>

          <div className="mt-10 space-y-8 text-left max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Starter Plan
              </h3>
              <p className="text-gray-700">
                Ideal for small businesses looking to manage leads and
                streamline basic sales processes.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Standard Plan
              </h3>
              <p className="text-gray-700">
                Perfect for growing teams, with advanced features like marketing
                automation, custom reporting, and team collaboration tools.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Enterprise Plan
              </h3>
              <p className="text-gray-700">
                Tailored for larger organizations, offering custom integrations,
                advanced analytics, and dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GetStarted getStarted={getStarted} />
    </>
  );
};

export default CRMSoftware;
