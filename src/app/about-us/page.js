import {
  AboutHeader,
  Mission,
  Team,
  Values,
  Workflow,
} from "@/sections/mySection";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "About Us – BOS Center | Travel, E-commerce & Reseller Tech Experts",
  description:
    "Learn more about BOS Center – a trusted provider of smart, scalable solutions for B2B travel, e-commerce, and reseller businesses. Driven by innovation, built for growth.",
  keywords: [
    "About BOS Digital Solutions",
    "Fintech Company",
    "TravelTechCompany",
    "BusinessTech Company",
    "PaymentTech Company",
    "Digital Payment",
    "Digital Finance",
    "Financial Technology",
    "Payment Technology",
    "Innovative Fintech Solutions",
    "Innovative PaymentTech Solutions",
    "Secure Financial Technology",
    "Secure Payment Technology",
    "Fintech Vision",
    "PaymentTech Vision",
    "B2BTech Company",
    "TravelTech Company",
    "Digital Business",
    "Digital Travel System Software",
    "Business Technology",
    "Travel Technology",
    "Innovative BusinessTech Solutions",
    "Innovative TravelTech Solutions",
    "Secure Business Technology",
    "Secure Travel Technology",
    "Banking TechnologyBusinessTech Vision",
    "TravelTech Vision",
    "IT Software Company",
    "Digital Marketing Services Company",
    "Banking Software Provider Company",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bos.center/about-us",
  },
  openGraph: {
    title: "About Us – BOS Center",
    description:
      "Discover BOS Center's journey and vision to empower travel, e-commerce, and digital reseller ecosystems through powerful software solutions.",
    url: "https://bos.center/about-us",
    siteName: "BOS Customised Digital Solutions",
    images: [
      {
        url: "https://bos.center/images/about-og.jpg",
        width: 800,
        height: 600,
        alt: "Bos Center Open Graph Image",
      },
    ],
    type: "website",
  },
};

const AboutPage = () => {

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Industries We Serve – BOS Center",
      url: "https://bos.center/sectors",
      description:
        "Explore the industries we serve – B2B travel, e-commerce, and API reselling. BOS Center builds digital platforms tailored for growth.",
    };

  const valuesContent = {
    tag: "Our Values",
    title: "Core Values That Drive Us",
    description:
      "Integrity, innovation, and customer focus are the cornerstones of our approach to business.",
    valueCard: [
      {
        title: "Integrity",
        description:
          "We uphold honesty and transparency in every action we take.",
        featureImage: "/assets/Quick Access to Key Features.png",
      },
      {
        title: "Innovation",
        description:
          "We embrace creativity and technology to deliver unique solutions.",
        featureImage: "/assets/Innovation.png",
      },
      {
        title: "Customer Focus",
        description: "Our customers are at the heart of everything we do.",
        featureImage: "/assets/Customer focus.png",
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
      <main>
        <AboutHeader />
        <Mission />
        <Workflow />
        <Values valuesContent={valuesContent} />
        {/* <Team /> */}
      </main>
    </>
  );
};

export default AboutPage;
