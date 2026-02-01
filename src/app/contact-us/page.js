import React from "react";
import { ContactForm, TrialSection } from "@/sections/mySection";
import Script from "next/script";

export const metadata = {
  title: "Contact Us – BOS Center | Let's Build Your Digital Business",
  description:
    "Get in touch with BOS Center to explore scalable software solutions for B2B travel, e-commerce, and reseller platforms. We're here to help you grow.",
  keywords: [
    "Fintech Blog",
    "Fintech News",
    "Digital Finance Trends",
    "Fintech Insights",
    "Financial Technology",
    "Industry News",
    "Fintech Updates",
    "BusinessTech Blog",
    "BusinessTech News",
    "Digital Business Trends",
    "BusinessTech Insights",
    "Business Technology",
    "Business News",
    "BusinessTech Updates",
    "PaymentTech Blog",
    "PaymentTech News",
    "Digital Payment Trends",
    "PaymentTech Insights",
    "Payment Technology",
    "Payment Industry News",
    "PaymentTech Updates",
    "BankingTech Blog",
    "BankingTech News",
    "Digital Banking Trends",
    "BankingTech Insights",
    "Banking Technology",
    "Banking Industry News",
    "BankingTech Updates",
    "FinCap Blog",
    "FinCap News",
    "FinCap Insights",
    "FinCap Industry News",
    "FinCap Updates",
    "LendingTech Blog",
    "LendingTech News",
    "Digital Lending Trends",
    "LendingTech Insights",
    "Lending Industry News",
    "LendingTech Updates",
    "TravelTech Blog",
    "TravelTech News",
    "Digital Travel Solution Trends",
    "TravelTech Insights",
    "Travel Technology",
    "Industry News",
    "TravelTech Updates",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bos.center/contact-us",
  },
  openGraph: {
    title: "Contact Us – BOS Center",
    description:
      "Reach out to BOS Center to discover how our travel and digital solutions can transform your business.",
    url: "https://bos.center/contact-us",
    siteName: "BOS Digital Solutions Insights",
    images: [
      {
        url: "https://bos.center/images/contact-og.jpg",
        width: 800,
        height: 600,
        alt: "Bos Center Open Graph Image",
      },
    ],
    type: "website",
  },
};

const ContactPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us – BOS Center",
    url: "https://bos.center/contact-us/",
    description:
      "Get in touch with BOS Center to explore scalable software solutions for B2B travel, e-commerce, and reseller platforms.",
    mainEntity: {
      "@type": "Organization",
      name: "BOS Center",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: "+91-8929898920",
        email: "info@bos.center",
        areaServed: "IN",
      },
    },
  };

  const locations = [
    {
      type: "Email",
      text: "info@bos.center",
      icon: "/assets/Email.png",
      bgColor: "bg-pink-100",
      hoverBgColor: "bg-pink-200",
    },
    {
      type: "Phone",
      text: "+91 8929898920",
      icon: "/assets/Phone.png",
      bgColor: "bg-pink-200",
      hoverBgColor: "bg-pink-300",
    },
    {
      type: "Address",
      text: "Building No. 73, Block B-1, Sewak Park Extension,Near NSUT, Uttam Nagar, New Delhi - 110059",
      icon: "/assets/Address.png",
      bgColor: "bg-blue-100",
      hoverBgColor: "bg-blue-200",
      mapImg: "/assets/MapPin/Map.png",
      mapLink:
        "https://www.google.com/maps/place/BOS+Center+Pvt.+Ltd./@28.6146393,77.0331885,1010m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390d0519d9b1aca5:0x65485994cebcfbcc!8m2!3d28.6146393!4d77.0331885!16s%2Fg%2F11yh3g_z3l?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Answer for the second question goes here.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Answer for the third question goes here.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Answer for the fourth question goes here.",
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
      <main>
        <section className="bg-gray-50 py-16 px-8 md:py-24 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="section-title mt-5 md:text-5xl sm:text-2xl capitalize">
              Get in touch with us for more information
            </h1>
            <p className="section-description mt-5">
              If you need help or have a question, we are here for you
            </p>

            {/* Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className={`rounded-lg shadow-md p-6 ${location.bgColor} flex flex-col items-center text-center hover:${location.hoverBgColor} transition`}
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                    <img
                      src={location.icon}
                      alt={`${location.type} icon`}
                      className="w-10 h-10"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {location.type}
                  </h3>

                  <p className="text-gray-700 mt-2">
                    {location.type === "Email" ? (
                      <a href={`mailto:${location.text}`} className="underline">
                        {location.text}
                      </a>
                    ) : location.type === "Phone" ? (
                      <a
                        href={`tel:${location.text.replace(/\s+/g, "")}`}
                        className="underline"
                      >
                        {location.text}
                      </a>
                    ) : (
                      location.text
                    )}
                  </p>

                  {/* Map image + link only for Address */}
                  {location.type === "Address" &&
                    location.mapImg &&
                    location.mapLink && (
                      <a
                        href={location.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 w-full"
                      >
                        <img
                          src={location.mapImg}
                          alt="BOS Center location map"
                          className="w-full rounded-lg shadow-md hover:shadow-lg hover:brightness-105 transition"
                        />
                      </a>
                    )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
        {/* <FAQSection faqs={faqs} /> */}
        <TrialSection />
      </main>
    </>
  );
};

export default ContactPage;
