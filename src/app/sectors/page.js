import { SectorsHeader, SolutionsSection } from "@/sections/mySection";
import TravelManagement from "@/sections/Sectors/TravelManagement";
import Script from "next/script";

export const metadata = {
  title:
    "Industries We Serve – BOS Center | Travel, E-commerce & Reseller Solutions",
  description:
    "Explore the industries we serve – from B2B travel and digital reselling to e-commerce and API integrations. BOS Center builds solutions for scalable growth.",
  keywords: [
    "Fintech Solutions by Industry",
    "FinTech Solutions by RBI Licence",
    "Banking Technology",
    "Insurance Solutions",
    "Lending Solutions",
    "Payment Technology",
    "Industry-Specific Fintech Solutions",
    "Digital Finance Technology",
    "TravelTech Solution",
    "Digital Travel Solutions",
    "Digital Business Solutions",
    "BusinessTech Solutions",
    "Digital B2B Solutions",
    "Business Payment Solutions",
    "Customised Business Solutions",
    "Customised Digital Banking Solutions",
    "Customised Digital E-Commerce Solutions",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bos.center/sectors",
  },
  openGraph: {
    title: "Industries We Serve – BOS Center",
    description:
      "BOS Center provides technology solutions for travel agencies, e-commerce startups, and digital resellers. See how we support your sector.",
    url: "https://bos.center/sectors",
    siteName: "BOS Customised Digital Solutions For Business Needs",
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

const Sectors = () => {
  const structuredData =
   {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Industries We Serve – BOS Center",
    url: "https://bos.center/sectors/",
    description:
      "Explore the industries we serve – B2B travel, e-commerce, and API reselling. BOS Center builds digital platforms tailored for growth.",
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
      <SectorsHeader />
      <TravelManagement />
      <SolutionsSection />
    </>
  );
};

export default Sectors;
