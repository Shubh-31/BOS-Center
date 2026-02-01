"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import ThankYou from "@/ThankYou";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "BOS | Next-Gen Fintech Solutions for Banks, NBFCs & Lenders",
  description:
    "White-label FinTech Solutions with source code to launch digital bank, nidhi company, nbfc, microfinance, peer-to-peer lending, coopertive society faster and cost-effectively.",
  keywords: [
    "Best Peer to Peer Banking Software for Lending & Borrowing",
    "Best Peer to Peer Software for Private Banking",
    "Best Peer to Peer Software for Corporate Banking",
    "Peer to Peer Banking Software Price",
    "Peer to Peer Banking Software Company in Delhi",
    "Best Peer to Peer Banking Software Provider in India",
    "Peer to Peer Banking Software Demo",
    "Peer to Peer Lending Management Software",
    "India’s Best Peer to Peer Banking Software Provider Company",
    "Peer to peer software",
    "P2P lending software",
    "Peer to peer lending platform",
    "P2P loan management",
    "P2P investment software",
    "Peer to peer marketplace software",
    "P2P network software",
    "Peer to peer financial software",
    "P2P transaction software",
    "Peer to peer borrowing platform",
    "Peer lending solutions",
    "P2P platform development",
    "Peer to peer exchange software",
    "P2P loan origination",
    "P2P lending system",
    "Peer to peer technology",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://bos.center",
  },
  openGraph: {
    title: "BOS | Next-Gen Fintech Solutions for Banks, NBFCs & Lenders",
    description:
      "White-label FinTech Solutions with source code to launch digital bank, nidhi company, nbfc, microfinance, peer-to-peer lending, coopertive society faster and cost-effectively.",
    url: "https://bos.center/",
    siteName: "FinTech Solutions",
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

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);



  return (
    <>
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://bos.center/#organization",
            name: "Business Online Solution (BOS)",
            url: "https://bos.center/",
            logo: "https://bos.center/images/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8181898905",
              contactType: "Customer Service",
              areaServed: "IN",
              availableLanguage: ["en"],
            },
            sameAs: [
              "https://www.facebook.com/boscenter",
              "https://www.instagram.com/boscenter.in/",
              "https://www.linkedin.com/company/boscenter",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Building No. 73, Block B-1, Sewak Park Extension, Near NSUT",
              addressLocality: "Uttam Nagar",
              addressRegion: "Delhi",
              postalCode: "110059",
              addressCountry: "IN",
            },
          }),
        }}
      />
      {/* <Head></Head> */}
      <section
        ref={heroRef}
        className="py-12 bg-[radial-gradient(ellipse_100%_80%_at_bottom_left,#f0f4ff,#ffffff)] overflow-x-clip"
      >
        <div className="container">
          <div className="md:flex items-center">
            <div className="md:w-[478px] mr-4">
              <div className="tag">Powering the Future of Digital Finance</div>
              <h1 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text capitalize">
                Next-Gen Digital Solutions for Travel, E-commerce & Reseller
                Businesses
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                We deliver powerful, scalable software solutions tailored for
                modern travel agencies, reseller networks, e-commerce
                businesses, and API providers.
              </p>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                From travel booking platforms to B2B/B2C management systems and
                digital service integrations, BOS helps you streamline
                operations, expand service offerings, and scale faster — all
                within one trusted ecosystem.
              </p>
              {/* <div className="flex gap-1 items-center mt-4">
                <Link href="\contact-us/">
                  <button className="btn btn-primary">
                    Learn More <ArrowIcon className="h-5 w-5" />
                  </button>
                  <button className="btn btn-text gap-1">
                  <span>Learn more</span>
                  <ArrowIcon className="h-5 w-5" />
                </button>
                </Link>
              </div> */}
            </div>
            <div className="relative w-full max-w-[550px] aspect-[4/3] mx-auto">
              <Image
                src="/assets/Home.png"
                alt="FinTech Solutions Platform"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
