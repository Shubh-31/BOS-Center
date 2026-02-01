import {
  PagesHeader,
  BenefitsSection,
  UseCases,
  TravelContent,
  Steps,
  GetStarted,
} from "@/sections/mySection";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "FinNest: Digital Lending App for NBFCs, MFIs, Banks & Credit Unions",
  description:
    "FinNest App: all-in-one banking & financial solution offering all banking modules to streamline & simplify financial operations efficiently. Try it now!",
  keywords: [
    "Best B2C Mobile Application for E-commerce",
    "Best B2C Mobile Application for Enterprises",
    "Best B2C Mobile Application for Small Businesses",
    "B2C Mobile Application Price",
    "B2C Mobile Application Service Provider Company in Delhi",
    "Best B2C Mobile Application Provider in India",
    "B2C Mobile Application Demo",
    "Best B2C Mobile Application for MSMEs",
    "India’s Best B2C Mobile Application Provider Company",
    "B2C Mobile Application Provider Company in Delhi",
    "India’s Best B2C Mobile Application Developer  Company",
    "Best B2C Mobile Application Solution",
    "B2C mobile app",
    "Business to Customer mobile app",
    "business app",
    "productivity app",
    "team collaboration",
    "task management",
    "mobile business solutions",
    "business productivity",
    "mobile workforce",
    "mobile communication",
    "business management app",
    "work on the go",
    "professional app",
    "enterprise app",
    "business tools",
    "mobile app for professionals",
    "team management",
    "business communication",
    "mobile business efficiency",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bos.center/finnest",
  },
  openGraph: {
    title: "B2C App For B2C Businesses: Get More Done Now",
    description:
      "Discover how B2C App helps you grow business with ease: improved B2C operations, customer experience. Available for android & iOS platforms. Get started today!",
    url: "https://bos.center/finnest",
    siteName: "B2C Mobile App Solutions Inc.",
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

const B2CApplication = () => {

  
   const structuredData = {
     "@context": "https://schema.org",
     "@type": "FinancialService",
     "@id": "https://bos.center/finnest/#localbusiness",
     name: "BOS Center Pvt. Ltd.",
     url: "https://bos.center/finnest",
     telephone: "+91-8929898920",
     description:
       "Streamline lending and finance operations with BOS FinNest Banking App—designed for banks, NBFCs, MFIs, Nidhis, loan businesses, and credit societies.",
     image: "https://bos.center/assets/img/finnest-logo.png",
     priceRange: "Free",

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

     openingHours: "Mo-Fr 09:30-18:30",

     sameAs: [
       "https://www.facebook.com/BOSCenterIND",
       "https://www.linkedin.com/company/bos-center-pvt-ltd",
       "https://www.instagram.com/boscenter.in",
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
           name: "FinNest Banking App",
           description:
             "White-label app for banks, NBFCs, MFIs, Nidhis, and credit cooperatives to automate lending and financial operations.",
         },
       },
       {
         "@type": "Offer",
         itemOffered: {
           "@type": "Service",
           name: "Digital Lending & Loan Management",
           description:
             "Manage loans, approvals, and microfinance operations efficiently with FinNest.",
         },
       },
       {
         "@type": "Offer",
         itemOffered: {
           "@type": "Service",
           name: "Digital KYC & Credit Assessment",
           description:
             "Streamline customer onboarding, credit checks, and compliance digitally.",
         },
       },
     ],
   };




  const headerContent = {
    tag: "Smarter Way to Run & Manage Financial Operations",
    title: "FinNest – Your Secure Financial Ecosystem",
    description:
      "Transform how you manage finance & lending with FinNest — the smartest way to access & control all your financial operations from one powerful app. Whether you're running an NBFC, Co-operative society, or a Microfinance Institution, FinNest delivers smooth functionality at your fingertips.",
    imgSrc: "/assets/FinNest1.png",
    alt: "Financial banking mobile app showing comprehensive account management dashboard.",
    buttonLabel: "Start Managing Customers With FinNest",
  };

  const benefitsContent = {
    heading: "Why FinNest is Your Smartest Financial Partner?",
    description:
      "FinNest is built specifically for financial institutions &   professionals—who needs simplicity, speed, & security.",
    benefits: [
      {
        title: "All-in-One Financial Platform",
        description:
          "Manage Nidhi, NBFC, Loan Management, Microfinance, Core Banking, Co-operative Society, & P2P Lending — all in a single app.",
        icon: "/assets/Time Saving Automation.png",
      },
      {
        title: "Automated Workflows",
        description:
          "Streamline tasks, save time, and eliminate manual errors with intelligent automation.",
        icon: "/assets/Personalized Experience.png",
      },
      {
        title: "Built for Regulated Finance",
        description:
          "FinNest adapts to the unique needs of regulated institutions, with built-in compliance support and modular flexibility.",
        icon: "/assets/Enhanced Productivity, Boost Productivity.png",
      },
    ],
  };

  const travelContent = [
    {
      title: "Unified, User-Friendly Interface  ",
      description:
        "Experience intuitive design and easy navigation with BOS B2C App. Whether you're tech-savvy or just starting, you’ll find it simple to use and get started right away.",
      points: [
        "Clean and intuitive design for easy navigation.",
        "Smooth access across multiple modules.",
        "Minimal learning curve with instant onboarding.",
      ],
      image: "/assets/FinNestUserFriendlyInterface.png",
      alt: "Digital banking application with secure login and biometric authentication.",
    },
    {
      title: "Modular & Customizable Architecture",
      description:
        "BOS B2C App adapts to your needs. Receive tailored recommendations, custom notifications, and personalized content based on your preferences and activity.",
      points: [
        "Enable only the modules your institution needs.",
        "Set roles, permissions, and approval workflows.",
        "Scale effortlessly as your operations grow.",
      ],
      image: "/assets/FinNestCustomizableArchitecture.png",
      alt: "Banking app interface displaying fund transfer and payment processing features.",
    },
    {
      title: "Real-Time Notifications & Alerts",
      description:
        "Stay on top of what matters most to you with instant updates directly to your device.  ",
      points: [
        "Instant alerts for transactions, EMI reminders, and compliance updates.",
        "Custom notification settings for individuals or teams.",
        "Keep stakeholders informed on the go.",
      ],
      image: "/assets/FinNestRealTimeNotifications&Updates.png",
      alt: "Mobile financial platform with investment tracking and wealth management tools.",
    },
    {
      title: "Security & Compliance Ready",
      description:
        "We take your privacy seriously. BOS B2C App ensures your personal data is protected with the highest levels of security.",
      points: [
        "Bank-level encryption & secure sign-in.",
        "Role-based access control.",
        "Audit-ready reporting and compliance features.",
      ],
      image: "/assets/FinNestSecurity&Compliance.png",
      alt: "Digital finance app showing regulatory compliance and security features.",
    },
    // {
    //   title: "Employee Self-Service & Flexibility",
    //   description:
    //     "Empower employees to manage their own bookings while ensuring compliance with travel policies.",
    //   points: [
    //     "Let employees book their own travel within the approved guidelines, streamlining the process and reducing administrative work.",
    //     "Enable employees to book, modify, and manage their travel plans directly from their mobile devices.",
    //     "Offer employees pre-approved travel options, helping them stay within company policies without the back-and-forth of approval processes.",
    //   ],
    //   image: "/images/security-reliability.png",
    // },
    // {
    //   title: "24/7 Support for Travelers",
    //   description:
    //     "Ensure your employees have help whenever they need it, during or after their business trip.",
    //   points: [
    //     "Access 24/7 customer support for travel disruptions, re-bookings, and emergency situations.",
    //     "Receive immediate notifications if there are changes to travel plans, such as cancellations, delays, or emergencies.",
    //   ],
    //   image: "/images/security-reliability.png",
    // },
  ];
  const useCases1 = {
    heading: "Here’s How FinNest Makes Your Finance Smarter",
    description: "",
    uses: [
      {
        title: "For First-Time Users",
        description: "Download the FinNest App from Google Play",
        // icon: "/assets/Download the App.png",
      },
      {
        title: "For Existing Users",
        description:
          "Create an account with your email, social media, or login if you're a returning user.",
        icon: "/assets/Sign up.png",
      },
      // {
      //   title: "Personalize Your Experience",
      //   description:
      //     "Set your preferences, update your profile, and begin enjoying tailored content and recommendations.",
      //   icon: "/assets/Personalized Experience.png",
      // },
      // {
      //   title: "Start Using the App",
      //   description:
      //     "Explore the app’s features and get immediate access to everything you need for a seamless experience.",
      //   icon: "/assets/Start Using the App.png",
      // },
    ],
  };

  const useCases = {
    heading: "Here’s How to Get Started with FinNest App",
    description: "",
    uses: [
      {
        title: "Download FinNest from Google Play Store",
        description:
          "Simply download FinNest App from the App Store or Google Play Store and install it on your device.",
        icon: "/assets/Download the App.png",
      },
      {
        title: "Sign In / Register With Your Business Credentials",
        description:
          "Create an account with your login credentials and access the app’s features tailored to fit your business needs.",
        icon: "/assets/Sign up.png",
      },
      {
        title: "Choose & Configure Modules For Your Institution Type",
        description:
          "Set your preferences, update your profile, and begin enjoying solutions you needed.",
        icon: "/assets/Personalized Experience.png",
      },
      {
        title: "Start Managing Your Operations",
        description:
          "Explore the app’s features and get immediate access to everything you need for a seamless experience.",
        icon: "/assets/Start Using the App.png",
      },
    ],
  };

  const first_users = {
    mainTitle: "For Admins & Managers:",
    mainDescription: "",
    imgSrc: "/assets/FinNestAdmin&Managers.png",
    alt : "AI-enhanced banking app with predictive analytics and personalized financial insights.",
    content: [
      {
        title: "Monitor KPIs and financial metrics in real time",
        // description:
        //   "Get started quickly by downloading **BOS B2C App** from the App Store or Google Play.",
      },
      {
        title: "Approve loans, manage KYC, generate reports instantly",
        // description:
        //   "Our simple interface and intuitive navigation ensure you’re using the app in no time.",
      },
      {
        title: "View complete operational insights from the dashboard",
        // description:
        //   "Our simple interface and intuitive navigation ensure you’re using the app in no time.",
      },
    ],
  };

  const return_users = {
    mainTitle: "For Field Staff & Agents",
    mainDescription: "",
    imgSrc: "/assets/FinNestFieldStaff&Agents.png",
    alt: "Banking application showing loan management and credit card services.",
    content: [
      {
        title: "Add customers, verify IDs, and collect EMIs from the field",
        // description:
        //   "Discover new features and enhanced capabilities with every update—giving you more control and personalization.  ",
      },
      {
        title: "Update passbooks, manage deposits, and check loan status",
        // description:
        //   "Whether you’re managing tasks, tracking fitness, or shopping, see your progress and make data-driven decisions.",
      },
      {
        title: "Works offline and syncs automatically when online",
        // description:
        //   "Whether you’re managing tasks, tracking fitness, or shopping, see your progress and make data-driven decisions.",
      },
    ],
  };

  const getStarted = {
    title: "Why You Should Download FinNest App Today",
    subTitle: "Download FinNest Now - Where Finance Meets Simplicity",
    description:
      "If you’re looking for a secure, scalable, & mobile-first solution to digitize your financial operations — FinNest is perfect for you. From compliance to convenience, this is the future of financial ecosystem management. Start managing your financial institution Smarter, Faster, & more Securely — with FinNest.",
  };

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>FinNest: Secure Financial Ecosystem For Banks & NBFCs</title>
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
        heading="FinNest: Smart Financial Platform – Secure, Modular & User-Friendly"
      />
      <Steps
        textContent1={first_users}
        textContent2={return_users}
        heading="Empowering Institutions, Admins & Field Agents"
      />
      <BenefitsSection benefitsContent={benefitsContent} />

      <section className="bg-gray-50 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className=" p-6 rounded-lg mb-8">
            <h2 className="section-title mt-5">
              FinNest – Your Smart Financial Partner
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  For First-Time Users
                </h3>
              </div>

              <ul className="list-disc list-inside text-gray-600">
                <li>Download the FinNest App from Google Play</li>
                <li>Follow simple onboarding steps</li>
                <li>Start managing your financial institution in minutes</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  For Existing Users
                </h3>
              </div>

              <ul className="list-disc list-inside text-gray-600">
                <li>Access historical data and analytics</li>
                <li>Receive regular updates and feature enhancements</li>
                <li>Activate new modules as your needs grow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <UseCases useCases={useCases} />
      <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-8">
        <h2 className="section-title mb-4 w-full max-w-8xl text-5xl md:text-4xl sm:text-xl">
          What Users Are Saying About FinNest App
        </h2>
        <div className="section-description mt-5 max-w-4xl mx-auto text-lg">
          Don’t just take our word for it—see how other businesses &
          institutions are using FinNest App to boost productivity and improve
          their operations.
          <br />
          <blockquote className="mt-8 border-l-4 border-blue-600 pl-6 italic text-gray-800 max-w-3xl mx-auto">
            Since integrating <span className="font-semibold">BOS B2C App</span>
            , our team has experienced a 30% improvement in productivity. The
            workflow automation tools alone have saved us countless hours each
            week.
            <footer className="mt-4 text-right font-medium not-italic text-gray-700">
              - Jane D.
            </footer>
          </blockquote>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* LEFT: Text Content */}
            <div className="w-full">
              <div className="text-center">
                <h2 className="text-4xl font-bold leading-normal section-title">
                  Why You Should Download FinNest App Today
                </h2>
                <p className="mt-5 max-w-4xl mx-auto text-lg section-description">
                  If you’re looking for a secure, scalable, & mobile-first
                  solution to digitize your financial operations — FinNest is
                  perfect for you.
                </p>
                <p className="mt-5 max-w-4xl mx-auto text-lg section-description">
                  From compliance to convenience, this is the future of
                  financial ecosystem management. Start managing your financial
                  institution Smarter, Faster, & more Securely — with FinNest.
                </p>
                <h4 className="text-2xl section-title mt-10">
                  Download FinNest Now - Where Finance Meets Simplicity
                </h4>
                <div className="flex gap-2 mt-5 justify-center lg:justify-center items-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.bos.bos.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                      className="h-12"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default B2CApplication;
