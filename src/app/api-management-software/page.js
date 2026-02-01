import APIServicesSection from "@/sections/APIManagementSoftware/APIServicesSection";
import {
  PagesHeader,
  BenefitsSection,
  UseCases,
  TravelContent,
  Steps,
  GetStarted,
} from "@/sections/mySection";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "API Management Solution – Secure, Scaleable, & Optimized APIs",
  description:
    "BOS API management software offers end-to-end solutions for securing, managing, & scaling your API ecosystem for max performance & reduce risks to business.",
  keywords: [
    "Best API Management Software for Businesses",
    "Best API Management Software for Enterprises",
    "Best API Management Software for Small Businesses",
    "Best API Management Software for Corporate Solution",
    "API Management Software Price",
    "API Management Software Provider Company in Delhi",
    "Best API Management Software Provider in India",
    "API Management Software Demo",
    "Best API Management Software for MSMEs",
    "India’s Best API Management Software Provider Company",
    "Best API Management Solution",
    "Business API Solutions",
    "API security",
    "API lifecycle management",
    "API monitoring",
    "API integration",
    "API scaling",
    "API performance",
    "API ecosystem",
    "API gateway",
    "business API management",
    "API integration management",
    "API monitoring software",
    "secure API management",
    "API optimization",
    "API management platform",
    "API scaling tools",
    "API lifecycle solution",
    "API performance tools",
    "API gateway solution",
    "API performance improvement",
    "API ecosystem management",
    "API Development",
    "API security management",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://bos.center/api-management-software",
  },
  openGraph: {
    title: "Secure, Scale, & Optimize APIs with BOS API Management Solution",
    description:
      "Maximize API performance, ensure security, & easy integrations with BOS advanced API management software. Manage your API ecosystem seamlessly.",
    url: "https://bos.center/solutions/enterprise/api-management-software",
    siteName: "API Management Solutions Inc.",
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

const ApiManagementSoftware = () => {

      const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://bos.center/api-management-software/#localbusiness",
        name: "BOS Center Pvt. Ltd.",
        url: "https://bos.center/api-management-software",
        telephone: "+91-8929898920",
        priceRange: "$$$",
        image: "https://bos.center/assets/img/logo.png",

        description:
          "BOS Center offers a powerful and secure API Management Software designed for businesses, developers, and enterprises. Features include API gateway, API security, analytics, monitoring, versioning, authentication, rate limiting, and complete lifecycle management.",

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
              name: "API Management Software",
              description:
                "A complete API Management Platform with API gateway, authentication, rate limiting, versioning, analytics, and developer portal.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "API Security & Monitoring",
              description:
                "Advanced API security solutions including traffic monitoring, key authentication, threat detection, encryption, and request validation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "API Analytics & Reporting",
              description:
                "Detailed API analytics with performance metrics, logs, usage insights, and real-time monitoring for businesses and developers.",
            },
          },
        ],
      };




const headerContent = {
  tag: "API Management System",
  title: "Best-in-Class API Management Solution for MSMEs",
  firstSentence: "Unlock the Power of Seamless API Management.",
  description:
    "Effortlessly scale, secure, and monitor your APIs with our cutting-edge API Management Solution.",
  imgSrc: "/assets/APIManagement1.png",
  alt: "API Management",
  buttonLabel: "Explore Our API Management Tool",
};



  const benefitsContent = {
    heading:
      "API Management Solution Built for Security, Scalability & Performance",
    description: "",
    benefits: [
      {
        title: "Comprehensive Security",
        description:
          "Ensure your APIs are secure with advanced authentication, threat protection, and compliance features.",
        icon: "/assets/Comprehensive Security.png",
      },
      {
        title: "Scalable & Flexible",
        description:
          "Our solution grows with your business, allowing you to handle increasing API traffic and complexity.",
        icon: "/assets/Scalable & Flexible.png",
      },
      {
        title: "Easy Integration",
        description:
          "Integrate seamlessly with your existing systems and tech stack, saving time and resources.",
        icon: "/assets/Quick & Easy Integration.png",
      },
      {
        title: "User-Friendly Interface",
        description:
          "Designed for developers and IT teams, our platform provides an intuitive and easy-to-navigate interface for managing APIs.",
        icon: "/assets/User-Friendly Interface.png",
      },
    ],
  };

  const travelContent = [
    {
      title: "API Gateway & Traffic Management",
      description:
        "Optimize your API traffic and performance with our API Gateway that ensures seamless routing, load balancing, and real-time scalability.",
      points: [
        "Traffic Routing & Load Balancing: Direct API traffic efficiently with real-time monitoring, ensuring optimal performance.",
        "Rate Limiting & Throttling: Protect your APIs from abuse and ensure fair usage by setting custom rate limits and throttling rules.",
        "Dynamic Scaling: Automatically scale API resources to meet demand, ensuring smooth operations even during traffic spikes.",
      ],
      image: "/assets/APIManagement2.png",
      alt: "Digital API gateway interface with security features and authentication management.",
    },
    {
      title: "Strong API Security & Authentication",
      description:
        "Protect your APIs and sensitive data with advanced security features, ensuring secure access, identity management, and compliance.",
      points: [
        "OAuth & JWT Authentication: Implement robust OAuth and JWT protocols for secure user authentication and authorization.",
        "API Key Management: Securely manage API keys for different users and services, preventing unauthorized access.",
        "Threat Protection & Custom Security Policies: Safeguard your APIs with automatic threat detection, custom security policies, and prevention of potential attacks.",
      ],
      image: "/assets/APIManagement3.png",
      alt: "Secure API gateway with OAuth implementation and access control features.",
    },
    {
      title: "Real-Time Analytics & Monitoring",
      description:
        "Track API performance, usage, and errors with detailed analytics that help you maintain the health and performance of your API ecosystem.",
      points: [
        "Real-Time Monitoring: Monitor your APIs’ response times, uptime, and traffic volume in real time to detect and resolve issues quickly.",
        "Comprehensive Analytics: Gain insights into API usage patterns, performance bottlenecks, and areas for improvement with easy-to-understand analytics.",
        "Alerts & Notifications: Set up custom alerts to notify you of any API failures, performance issues, or abnormal traffic patterns.",
      ],
      image: "/assets/APIManagement4.png",
      alt: "API analytics dashboard displaying performance metrics and usage statistics",
    },
    {
      title: "API Lifecycle Management",
      description:
        "Manage the entire lifecycle of your APIs—from design and deployment to versioning and deprecation—seamlessly.",
      points: [
        "API Versioning: Keep track of multiple versions of your APIs, ensuring backward compatibility while introducing new features.",
        "Automated Deployments: Deploy and update APIs with minimal downtime, reducing disruptions to users and services.",
        "Deprecation & Sunset Policies: Safely deprecate old APIs while migrating users to newer versions without service interruptions.",
      ],
      image: "/assets/APIManagement5.png",
      alt: "Complete API management platform with version control and deployment automation.",
    },
    {
      title: "Developer Portal & Collaboration",
      description:
        "Enhance developer productivity by providing a user-friendly and customizable portal that simplifies API testing, integration, and collaboration.",
      points: [
        "Branded Developer Portal: Offer a personalized portal that allows developers to access, test, and integrate your APIs with ease.",
        "Interactive API Documentation: Provide developers with auto-generated, interactive documentation to improve the integration experience.",
        "Sandbox Environment: Allow developers to test APIs in a safe environment before production deployment, reducing errors and downtime.",
      ],
      image: "/assets/APIManagement6.png",
      alt: "Cloud-based API management system displaying developer portal and documentation.",
    },
    {
      title: "Integration with Existing Systems",
      description:
        "Integrate seamlessly with your current infrastructure, allowing for smooth workflows and efficient API management.",
      points: [
        "Pre-Built Connectors: Easily integrate with CRM systems, cloud platforms, databases, and third-party tools with our pre-built connectors.",
        "Flexible Integration: Adapt our API management solution to your existing tech stack and workflows, reducing the need for custom development.",
        "Support for Multiple API Types: Our Solution supports REST, SOAP, GraphQL, and gRPC APIs to ensure compatibility with all types of APIs.",
      ],
      image: "/assets/APIManagement7.png",
      alt: "API management solution showing integration workflows and microservices architecture.",
    },
  ];

  const useCases = {
    heading:
      "API Management Solution Built for Security, Scalability & Performance",
    description: "",
    uses: [
      {
        title: "API Gateway & Traffic Management",
        description: [
          "Optimize your API traffic and performance with our API Gateway that ensures seamless routing, load balancing, and real-time scalability.",
          {
            label: "Traffic Routing & Load Balancing:",
            content:
              "Direct API traffic efficiently with real-time monitoring, ensuring optimal performance",
          },
          {
            label: "Rate Limiting & Throttling:",
            content:
              "Protect your APIs from abuse and ensure fair usage by setting custom rate limits and throttling rules.",
          },
          {
            label: "Dynamic Scaling:",
            content:
              "Automatically scale API resources to meet demand, ensuring smooth operations even during traffic spikes.",
          },
        ],
        icon: "/assets/Loan Origination and Disbursement Automation.png",
      },
      {
        title: "Strong API Security & Authentication",
        description: [
          "Protect your APIs and sensitive data with advanced security features, ensuring secure access, identity management, and compliance.",
          {
            label: "OAuth & JWT Authentication:",
            content:
              "Implement robust OAuth and JWT protocols for secure user authentication and authorization.",
          },
          {
            label: "API Key Management:",
            content:
              "Securely manage API keys for different users and services, preventing unauthorized access.",
          },
          {
            label: "Threat Protection & Custom Security Policies:",
            content:
              "Safeguard your APIs with automatic threat detection, custom security policies, and prevention of potential attacks.",
          },
        ],
        icon: "/assets/Borrower Management System.png",
      },
      {
        title: "Real-Time Analytics and Monitoring",
        description: [
          "Track API performance, usage, and errors with detailed analytics that help you maintain the health and performance of your API ecosystem.",
          {
            label: "Real-Time Monitoring:",
            content:
              "Monitor your APIs’ response times, uptime, and traffic volume in real time to detect and resolve issues quickly.",
          },
          {
            label: "Comprehensive Analytics:",
            content:
              "Gain insights into API usage patterns, performance bottlenecks, and areas for improvement with easy-to-understand analytics.",
          },
          {
            label: "Alerts & Notifications:",
            content:
              "Set up custom alerts to notify you of any API failures, performance issues, or abnormal traffic patterns.",
          },
        ],
        icon: "/assets/Real-Time Data and Analytics.png",
      },
      {
        title: "API Lifecycle Management",
        description: [
          "Manage the entire lifecycle of your APIs—from design and deployment to versioning and deprecation—seamlessly.",
          {
            label: "API Versioning:",
            content:
              "Keep track of multiple versions of your APIs, ensuring backward compatibility while introducing new features.",
          },
          {
            label: "Automated Deployments:",
            content:
              "Deploy and update APIs with minimal downtime, reducing disruptions to users and services.",
          },
          {
            label: "Deprecation & Sunset Policies:",
            content:
              "Safely deprecate old APIs while migrating users to newer versions without service interruptions.",
          },
        ],
        icon: "/assets/Regulatory Compliance, Compliance-Ready.png",
      },
      {
        title: "Developer Portal & Collaboration",
        description: [
          "Enhance developer productivity by providing a user-friendly and customizable portal that simplifies API testing, integration, and collaboration.",
          {
            label: "Branded Developer Portal:",
            content:
              "Offer a personalized portal that allows developers to access, test, and integrate your APIs with ease.",
          },
          {
            label: "Interactive API Documentation:",
            content:
              "Provide developers with auto-generated, interactive documentation to improve the integration experience.",
          },
          {
            label: "Sandbox Environment:",
            content:
              "Allow developers to test APIs in a safe environment before production deployment, reducing errors and downtime.",
          },
        ],
        icon: "/assets/Secure Transactions and Payment Management.png",
      },
      {
        title: "Integration with Existing Systems",
        description: [
          "Integrate seamlessly with your current infrastructure, allowing for smooth workflows and efficient API management.",
          {
            label: "Pre-Built Connectors:",
            content:
              "Easily integrate with CRM systems, cloud platforms, databases, and third-party tools with our pre-built connectors.",
          },
          {
            label: "Flexible Integration:",
            content:
              "Adapt our API management solution to your existing tech stack and workflows, reducing the need for custom development.",
          },
          {
            label: "Support for Multiple API Types:",
            content:
              "Our Solution supports REST, SOAP, GraphQL, and gRPC APIs to ensure compatibility with all types of APIs.",
          },
        ],
        icon: "/assets/Flexible Repayment Options.png",
      },
      // {
      //   title: "Mobile-Ready Platform",
      //   description: [
      //     "Our Micro Finance solution is fully mobile-optimized, allowing both loan officers and borrowers to access the system anytime, anywhere.",
      //     {
      //       label: "Mobile-Friendly Interface:",
      //       content:
      //         "Access all features on your mobile device for easy management of loans and borrower communications.",
      //     },
      //     {
      //       label: "Remote Access for Borrowers:",
      //       content:
      //         "Borrowers can apply for loans, make payments, and track their loan status on the go.",
      //     },
      //   ],
      //   icon: "/assets/Mobile-Friendly, Mobile-Ready Platform.png",
      // },
    ],
  };

  const developers = {
    mainTitle: "For Developers",
    mainDescription: "",
    imgSrc: "/assets/APIManagement8.png",
    alt: "API development environment with testing tools and sandbox functionality.",
    content: [
      {
        title: "Boost Productivity",
        description:
          "Quickly deploy and manage APIs without worrying about manual setup or security. Focus on development while our Solution handles the rest.",
      },
      {
        title: "Faster Time-to-Market",
        description:
          "Reduce development cycles with automated testing, deployment, and management features.",
      },
      {
        title: "Easy Collaboration",
        description:
          "Enhance team collaboration with centralized documentation, sandbox environments, and easy access to APIs.",
      },
    ],
  };

  const business = {
    mainTitle: "For Businesses & Enterprises",
    mainDescription: "",
    imgSrc: "/assets/APIManagement9.png",
    alt: "Scalable API infrastructure showing load balancing and high availability features.",
    content: [
      {
        title: "Scale Effortlessly",
        description:
          "Seamlessly scale your API infrastructure to meet growing business demands without compromising performance.",
      },
      {
        title: "Ensure Regulatory Compliance",
        description:
          "Stay compliant with industry standards and regulations with built-in security features like encryption and access controls.",
      },
      {
        title: "Improved User Experience",
        description:
          "Provide a faster, more reliable API experience for your clients and partners, leading to improved customer satisfaction.",
      },
    ],
  };

  const getStarted = {
    title: "Start Your Free Trial Today",
    description:
      "Ready to optimize and secure your API ecosystem? Start your free trial of API Management Solution & experience all the features designed to streamline your API management.",
    // CTABtn1: "Start Your Free Trial",
    CTABtn2: "Try Secure API Gateway Today",
  };

  const solutions = [
    {
      name: "Step 1: Simple Setup",
      description:
        "Sign up and integrate your APIs into the platform with ease. Customize settings for traffic routing, security, and monitoring.",
    },
    {
      name: "Step 2: Secure Your APIs",
      description:
        "Set up security measures, including authentication protocols, rate limiting, and threat detection, to ensure your APIs remain protected.",
    },
    {
      name: "Step 3: Monitor API Performance",
      description:
        "Track your API performance with real-time analytics, monitor uptime, and receive alerts for any issues or irregularities.",
    },
    {
      name: "Step 4: Scale & Optimize",
      description:
        "As your business grows, dynamically scale your API resources to meet demand, ensuring consistent and high-quality performance.",
    },
    {
      name: "Step 5: Collaborate & Iterate",
      description:
        "Use the developer portal to share, test, and refine APIs in a collaborative environment. Continuous feedback helps optimize API performance and user experience.",
    },
  ];

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
      <APIServicesSection/>
      {/* <TravelContent
        content={travelContent}
        heading="API Management Solution Built for Security, Scalability & Performance"
      /> */}
      <Steps
        textContent1={developers}
        textContent2={business}
        heading="API Management Platform for Developers & Enterprises"
      />
      <section className="py-8 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)]">
        <div className="container">
          <div className="w-full max-w-8xl">
            <h2 className="w-full text-4xl lg:text-5xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-8 p-1">
              API Management for Developers & Enterprises
            </h2>
          </div>

          <section className="py-8 px-4 md:px-20">
            <div className="max-w-4xl mx-auto">
              {/* <h2 className="text-2xl font-bold mb-6">Solutions</h2> */}
              <ul className="space-y-4 list-disc">
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
        </div>
      </section>
      <BenefitsSection benefitsContent={benefitsContent} />
      <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-8">
        <h2 className="section-title mb-4 w-full max-w-7xl mx-auto text-center text-5xl container">
          Hear from Teams Using Our API Management Solution to Scale
        </h2>
        <div className="section-description mt-5 max-w-4xl mx-auto text-lg">
          <blockquote className="mt-8 border-l-4 border-blue-600 pl-6 italic text-gray-800 max-w-3xl mx-auto">
            Using{" "}
            <span className="font-semibold">BOS API Management Software</span>,
            has simplified our API management process, saving us hours of
            development time each week. The intuitive interface and powerful
            features allow us to scale and secure our APIs without any hassle.
            <footer className="mt-4 text-right font-medium not-italic text-gray-700">
              - John Doe
            </footer>
          </blockquote>
        </div>
      </section>

      <GetStarted getStarted={getStarted} />
    </>
  );
};

export default ApiManagementSoftware;
