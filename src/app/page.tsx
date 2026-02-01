import { AutoScrolling } from "@/sections/AutoScrolling";
import { BuiltWithTrust } from "@/sections/BuiltWithTrust";
import CookieDialogBox from "@/sections/CookieDialogBox";
import { GetStartedWithUs } from "@/sections/GetStartedWithUs";
import {
  Hero,
  LogoTicker,
  ProductShowcase,
  Pricing,
  Testimonials,
  CallToAction,
  FeatureSection,
} from "@/sections/mySection";
import { SolutionsBuiltForEveryBusiness } from "@/sections/SolutionsBuiltForEveryBusiness";
import { WhyBusinessChooseUs } from "@/sections/WhyBusinessChooseUs";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title:
    "BOS Center – Scalable B2B Travel, E-commerce & Reseller Software Solutions",
  description:
    "BOS Center delivers next-gen software solutions for B2B travel, e-commerce, and reseller businesses. From travel booking APIs to multi-level B2B/B2C platforms – streamline, scale, and succeed with BOS.",
  // keywords: [
  //   "Fintech Solutions by Industry",
  //   "FinTech Solutions by RBI Licence",
  //   "Banking Technology",
  //   "Insurance Solutions",
  //   "Lending Solutions",
  //   "Payment Technology",
  //   "Industry-Specific Fintech Solutions",
  //   "Digital Finance Technology",
  //   "TravelTech Solution",
  //   "Digital Travel Solutions",
  //   "Digital Business Solutions",
  //   "BusinessTech Solutions",
  //   "Digital B2B Solutions",
  //   "Business Payment Solutions",
  //   "Customised Business Solutions",
  //   "Customised Digital Banking Solutions",
  //   "Customised Digital E-Commerce Solutions",
  // ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bos.center",
  },
  openGraph: {
    title:
      "BOS Center – Scalable B2B Travel, E-commerce & Reseller Software Solutions",
    description:
      "Unlock growth with powerful B2B travel software, e-commerce platforms, and reseller management systems. Built for modern businesses.",
    url: "https://bos.center/",
    siteName: "BOS Center",
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


export default function Home() {
   const structuredData = {
     "@context": "https://schema.org",
     "@type": "SoftwareCompany",
     "@id": "https://bos.center/#softwarecompany",
     name: "BOS Center Pvt. Ltd.",
     url: "https://bos.center",
     telephone: "+91-8929898920",
     priceRange: "$$$",
     image: "https://bos.center/assets/img/logo.png",
     description:
       "BOS Center Pvt. Ltd. provides enterprise-grade software solutions including travel booking systems, CRM, B2B/B2C management platforms, fintech applications, APIs, and cloud-based digital solutions across India.",

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
           name: "White Label Banking Software Solutions",
         },
       },
       {
         "@type": "Offer",
         itemOffered: {
           "@type": "Service",
           name: "White Label Fintech Software Solutions",
         },
       },
       {
         "@type": "Offer",
         itemOffered: {
           "@type": "Service",
           name: "Banking & Fintech Software Development",
         },
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

      <Hero />
      <AutoScrolling />
      {/* <LogoTicker /> */}
      <ProductShowcase />
      {/* <FeatureSection /> */}
      <Pricing />
      <SolutionsBuiltForEveryBusiness />
      <BuiltWithTrust />
      <WhyBusinessChooseUs />
      <GetStartedWithUs />
      <CallToAction />
      <CookieDialogBox/>
      {/* <Testimonials /> */}
    </>
  );
}
