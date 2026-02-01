import {
  PagesHeader,
  BenefitsSection,
  UseCases,
  HowItWorks,
  TravelContent,
  GetStarted,
  Steps,
} from "@/sections/mySection";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "FinServe: Merchant Payment Solution for MSMEs & Retailers in India",
  description:
    "FinServe is a secure, digital payment platform for MSMEs, retailers, and merchants in India. Accept payments, track sales, and grow your business.",
  keywords: [
    "Best B2B Mobile Application for E-commerce",
    "Best B2B Mobile Application for Enterprises",
    "Best B2B Mobile Application for Small Businesses",
    "Best B2B Mobile Application for MNCs",
    "B2B Mobile Application Price",
    "B2B Mobile Application Service Provider Company in Delhi",
    "Best B2B Mobile Application Provider in India",
    "B2B Mobile Application Demo",
    "Best B2B Mobile Application for MSMEs",
    "India’s Best B2B Mobile Application Provider  Company",
    "B2B Mobile Application Provider Company in Delhi",
    "India’s Best B2B Mobile Application Developer  Company",
    "Best B2B Mobile Application Solution",
    "B2B mobile app",
    "Business to Business mobile app",
    "Mobile app for businesses",
    "Business productivity app",
    "Mobile app for enterprise",
    "Workflow management app",
    "Collaboration app for businesses",
    "Business app solutions",
    "Mobile app for teams",
    "Real-time business app",
    "Mobile enterprise software",
    "Business optimization app",
    "Mobile CRM app",
    "Mobile app for collaboration",
    "Business app integration",
    "Enterprise mobility solutions",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bos.center/finserve",
  },
  openGraph: {
    title: "B2B App For Businesses: Streamlining Business Operations",
    description:
      "Empower your business with BOS all-in-one B2B mobile app. Improve communication, operations, & drive productivity with easy integrations and features tailored for enterprises.",
    url: "https://bos.center/solutions/enterprise/finserve",
    siteName: "B2B Mobile App Solutions Inc.",
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

const B2BApplication = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://bos.center/finserve/#localbusiness",
    name: "BOS Center Pvt. Ltd.",
    url: "https://bos.center/finserve",
    telephone: "+91-8929898920",
    description:
      "Finnest App helps financial service providers offer AEPS, DMT, recharges, and bill payments with smooth, reliable, and local-ready operations.",
    image: "https://bos.center/assets/img/finserve-logo.png",
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
          name: "FinServe App",
          description:
            "White-label app for AEPS, DMT, utility recharges, and bill payments for financial service providers and agents.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Payment & Money Transfer",
          description:
            "Track payments, transfers, and recharges with a secure and reliable platform.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Multi-Service Financial Management",
          description:
            "Manage multiple financial services in one app with multi-channel payment support.",
        },
      },
    ],
  };




  const headerContent = {
    tag: "Smart Banking & Payments for Merchants & Retailers",
    title: "FinServe – Your Complete Merchant Payment Solution",
    description:
      "Transform the way your business handles payments with FinServe — a powerful, API-driven mobile app built for merchants, retailers, & financial services provider to simplify transactions, boost operational efficiency, & support financial growth. FinServe empowers your business with fast, reliable, & secure financial services at your fingertips.",
    imgSrc: "/assets/FinServeHeading.png",
    alt: "Financial services mobile app dashboard showing account overview and transaction history.",
    buttonLabel: "Empower Your Business With FinServe Today",
  };

  const benefitsContent = {
    heading: "Why You Should Use FinServe App Today",
    description:
      "If you’re a merchant, retailer, or fintech provider looking to expand your financial service offerings securely and at scale — FinServe is your solution. Manage every transaction in real time and give your customers access to essential financial tools.",
    benefits: [
      // {
      //   title: "Streamline Operations",
      //   description:
      //     "Automate routine processes and eliminate manual errors to save time and boost productivity.",
      //   icon: "/assets/Streamline Operations.png",
      // },
      // {
      //   title: "Improve Collaboration",
      //   description:
      //     "Empower your team with tools that make collaboration seamless, no matter where they are.",
      //   icon: "/assets/Start Collaborating & Automating, Improve Collaboration.png",
      // },
      // {
      //   title: "Drive Data-Driven Decisions",
      //   description:
      //     "Access real-time analytics and reports that give you the insights needed to make informed decisions.",
      //   icon: "/assets/Drive Data-Driven Decisions, Make Data-Driven Decisions.png",
      // },
    ],
  };

  const travelContent = [
    {
      title: "User-Friendly Interface",
      description:
        "Experience intuitive design and easy navigation with BOS B2B App. Whether you're tech-savvy or just starting, you’ll find it simple to use and get started right away.",
      points: [
        "Easy Navigation: Find everything you need in just a few taps, making your experience more enjoyable and less stressful.",
        "Quick Setup: No complicated onboarding process - get up and running in just a few minutes.",
      ],
      image: "/assets/FinServeUnifiedMerchantDashboard.png",
      alt: "Digital finance app with merchant portfolio management and market analytics.",
    },
    {
      title: "Personalization & Customization",
      description:
        "BOS B2B App adapts to your needs. Receive tailored recommendations, custom notifications, and personalized content based on your preferences and activity.",
      points: [
        "Tailored Content: Receive suggestions that match your lifestyle and goals—be it product recommendations, workout plans, or task prioritization.",
        "Customizable Settings: Adjust the app to fit your unique needs. Choose how you want notifications to appear, set up alerts, and more.",
      ],
      image: "/assets/FinServeRealTimeTransactions&Settlements.png",
      alt: "Finance app - settlement tracking and transactions categorization tools.",
    },
    {
      title: "Real-Time Notifications & Alerts",
      description:
        "Stay on top of what matters most to you with instant updates directly to your device.",
      points: [
        "Instant Updates: Receive timely alerts for offers, updates, or important reminders based on your activity.",
        "Customizable Alerts: Set frequency and types of notifications that work best for you - without the overwhelm.",
      ],
      image: "/assets/FinServeAPIIntegration.png",
      alt: "Complete finance app with multiple api integration for smooth business flexibility.",
    },
    {
      title: "Secure & Private",
      description: "We take your privacy seriously. BOS B2B App ensures your personal data is protected with the highest levels of security.",
      points: [
        "Data Protection: We use state-of-the-art encryption to safeguard your personal information.",
        "Privacy Controls: You're in control of what data is shared and how it's used- always stay informed.",
      ],
      image: "/assets/FinServeSecureCompliantOperations.png",
      alt: "Financial services platform with security and compliance.",
    },
    // {
    //   title: "Advance Security and Compliance",
    //   description: "",
    //   points: [
    //     "Your business data is safe with enterprise-grade encryption, secure logins, and regular security audits.",
    //     "Stay compliant with industry regulations like GDPR, HIPAA, and others, ensuring peace of mind for both you and your customers.",
    //   ],
    //   image: "/images/security-reliability.png",
    // },
  ];

  const howItWorks = {
    title: "Why You Should Use FinServe Today",
    description:
      "If you’re a merchant, retailer, or fintech provider looking to expand your financial service offerings securely and at scale — FinServe is your solution. Manage every transaction in real time and give your customers access to essential financial tools.",
    features: [
      {
        title: "Boost Productivity",
        description:
          "Automate time-consuming tasks and focus on the work that matters most.",
        icon: "/assets/Enhanced Productivity, Boost Productivity.png",
      },
      {
        title: "Scale Your Business",
        description:
          "As your business grows, BOS B2B App grows with you—providing customizable solutions at every stage.",
        icon: "/assets/Scale Your Business.png",
      },
      {
        title: "Secure and Compliant",
        description:
          "Rest easy knowing your business data is safe and secure, and that you're in compliance with industry regulations.",
        icon: "/assets/Secure & Compliant.png",
      },
    ],
  };

  const first_users = {
    mainTitle: "For Business Owners & Admins:",
    mainDescription: "",
    imgSrc: "/assets/FinServeBusinessOwners&Admins.png",
    alt: "Digital finance application showing multi-account management and consolidated view.",
    content: [
      {
        title: "Monitor real-time earnings, commissions, and cash flow",
        // description:
        //   "Get started quickly by downloading **BOS B2C App** from the App Store or Google Play.",
      },
      {
        title: "Set service permissions for different staff or locations",
        // description:
        //   "Our simple interface and intuitive navigation ensure you’re using the app in no time.",
      },
      {
        title: "Access analytics and downloadable reports anytime",
        // description:
        //   "Our simple interface and intuitive navigation ensure you’re using the app in no time.",
      },
    ],
  };

  const return_users = {
    mainTitle: "For Retailers & Field Agents:",
    mainDescription: "",
    imgSrc: "/assets/FinServeRetailers&FieldAgents.png",
    alt: "Financial services application displaying retailers dasboard and agents.",
    content: [
      {
        title: "Perform AEPS withdrawals and balance inquiries",
        // description:
        //   "Discover new features and enhanced capabilities with every update—giving you more control and personalization.  ",
      },
      {
        title: "Process bill payments and mobile recharges",
        // description:
        //   "Whether you’re managing tasks, tracking fitness, or shopping, see your progress and make data-driven decisions.",
      },
      {
        title: "Handle cash collection and transfer requests seamlessly",
        // description:
        //   "Whether you’re managing tasks, tracking fitness, or shopping, see your progress and make data-driven decisions.",
      },
    ],
  };

  const useCases = {
    heading: "Here’s How to Get Started With FinServe App",
    // description:
    //   "Getting started with BOS B2B App is simple and fast. Here’s how it works",
    uses: [
      {
        title: "Download FinServe From Google Play Store",
        description:
          "Simply download FinServe App from the App Store or Google Play Store and install it on your device.",
        icon: "/assets/Download the App.png",
      },
      {
        title: "Sign In / Register With Your Business Credentials",
        description:
          "Create an account with your email, social media, or login if you're a returning user.",
        icon: "/assets/Customize for Your Business.png",
      },
      {
        title: "Choose & Configure Modules for your institution type",
        description:
          "Set your preferences, update your profile, and begin enjoying solutions you needed.",
        icon: "/assets/Start Collaborating & Automating, Improve Collaboration.png",
      },
      {
        title: "Start Managing Operations",
        description:
          "Explore app features & get immediate access to everything you need for a smooth experience.",
        icon: "/assets/Start Collaborating & Automating, Improve Collaboration.png",
      },
    ],
  };
  const getStarted = {
    title:
      "Download FinServe App Today – Empower Your Business With Modern Finance",
    description:
      "Offer banking, payments, and financial services — all from one app. Get started with FinServe now.",
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
      {/* Features Section */}
      <section className="py-16 px-4 md:px-20">
        <h2 className="text-5xl font-bold text-center mb-10">
          FinServe For Merchants : What You Get
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "PayIn & PayOut",
            "AEPS & Aadhaar Pay",
            "Money Transfer",
            "Recharge & Bill Payments",
            "FasTag Recharge",
            "Secure API Integrations",
            "Real-time Transactions",
            "Merchant-Focused Design",
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:font-bold"
            >
              <h3 className="p-6 text-center font-medium text-gray-800">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <TravelContent
        content={travelContent}
        heading="FinServe: Smart Way to Manage Financial Services in Real Time"
      />
      <Steps
        textContent1={first_users}
        textContent2={return_users}
        heading="Empowering Business Owners, Retailers & Agents"
      />
      <section className="bg-gray-50 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className=" p-6 rounded-lg mb-8">
            <h2 className="section-title mt-5 text-5xl">
              FinServe – Your Smart Financial Services Partner
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  For First-Time Users:
                </h3>
              </div>

              <ul className="list-disc list-inside text-gray-600">
                <li>Download the FinServe App from Google Play</li>
                <li>Complete simple onboarding with KYC</li>
                <li>Start offering financial services instantly</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  For Existing Users:
                </h3>
              </div>

              <ul className="list-disc list-inside text-gray-600">
                <li>Access new services as they’re released</li>
                <li>Add new outlets or staff via the admin panel</li>
                <li>Integrate FinServe APIs with your POS or app</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <UseCases useCases={useCases} />
      {/* <HowItWorks content={howItWorks} /> */}
      <BenefitsSection benefitsContent={benefitsContent} />
      <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-8">
        <h2 className="section-title mb-4 w-full max-w-8xl text-5xl md:text-4xl sm:text-xl">
          Trusted by Merchants Using FinServe’s App
        </h2>
        <div className="section-description mt-5 max-w-4xl mx-auto text-lg">
          Here’s what our users are saying:
          <br />
          <blockquote className="mt-8 border-l-4 border-blue-600 pl-6 italic text-gray-800 max-w-3xl mx-auto">
            I&apos;ve been using{" "}
            <span className="font-semibold">BOS B2B App </span>, for a few weeks
            now, and I love how it has simplified my life. It’s easy to use,
            intuitive, and the personalized recommendations are spot on.
            <footer className="mt-4 text-right font-medium not-italic text-gray-700">
              - Sarah T.
            </footer>
          </blockquote>
          <blockquote className="mt-8 border-l-4 border-blue-600 pl-6 italic text-gray-800 max-w-3xl mx-auto">
            This app is amazing! The notifications help me stay on top of
            everything, and the customization features are exactly what I need.
            <footer className="mt-4 text-right font-medium not-italic text-gray-700">
              - David M.
            </footer>
          </blockquote>
        </div>
      </section>
      <GetStarted getStarted={getStarted} />
    </>
  );
};

export default B2BApplication;
