"use client";
// import productImage from "@/assets/product-image.png";
// import pyramidImage from "@/assets/pyramid.png";
// import tubeImage from "@/assets/tube.png";
// import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
interface SolutionFeature {
  title: string;
  //   description: string;
  //   icon: string;
  //   large?: boolean;
}

export const SolutionsBuiltForEveryBusiness = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const features: SolutionFeature[] = [
    {
      title: "Custom Travel & Reseller Software Development",
      //   description:
      //     "Managed MongoDB, Kafka, MySQL, PostgreSQL, and Managed Databases for Redis® let you focus on your apps while we update and scale your databases.",
      //   icon: "/icons/database.svg",
      //   large: true,
    },
    {
      title: "Multi-Level B2B Reseller Management Systems",
      //   description:
      //     "DigitalOcean Droplets are simple, scalable virtual machines for all your web hosting and VPS hosting needs.",
      //   icon: "/icons/virtual-machine.svg",
    },
    {
      title: "B2B & B2C Platform Integration",
      //   description:
      //     "Reveal the true power of your data and bring clarity to every situation with Looker and Google Cloud.",
      //   icon: "/icons/data-analytics.svg",
    },
    {
      title: "White-Label & Private-Label Portals and Mobile Apps",
      //   description:
      //     "Build AI agents and generative AI applications with our fully managed AI platform, Vertex AI—enhanced by Gemini, over 130 foundation models, and an ecosystem of AI partners.",
      //   icon: "/icons/ai.svg",
      //   large: true,
    },
    {
      title: "Travel Booking & Management Modules (Flight, Train, Bus, Hotel)",
      //   description:
      //     "Build AI agents and generative AI applications with our fully managed AI platform, Vertex AI—enhanced by Gemini, over 130 foundation models, and an ecosystem of AI partners.",
      //   icon: "/icons/ai.svg",
      //   large: true,
    },
    {
      title: "CRM, Reporting & Business Automation Tools",
      //   description:
      //     "Build AI agents and generative AI applications with our fully managed AI platform, Vertex AI—enhanced by Gemini, over 130 foundation models, and an ecosystem of AI partners.",
      //   icon: "/icons/ai.svg",
      //   large: true,
    },
  ];
  // from-[#FFFFFF] to-[#D2DCFF]
  return (
    <section
      ref={sectionRef}
      className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#f0f4ff,#ffffff_100%)]  pt-16 pb-2 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-8xl">
          {/* <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div> */}
          <h2 className="w-full text-4xl sm:text-4xl md:text-4xl lg:text-4xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-8">
            Solutions Built for Every Business
          </h2>
          <p className="section-description m-5 font-light">
            Whether you&apos;re a travel agency, e-commerce startup, API reseller, or
            a B2B enterprise, BOS Center delivers tailored digital solutions to
            power your growth.
          </p>
        </div>
        <section className="py-8 px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Custom Software Development",
              "Multi-Level B2B Reseller Systems",
              "B2B & B2C Platform Integration",
              "Private-Label Portals & Apps",
              "Travel Management Modules",
              "CRM & Business Automation Tools",
              // "Real-time Transactions",
              // "Merchant-Focused Design",
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
        <p className="text-lg text-center leading-8 font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent">
          Whether you are starting out or scaling fast — we have got the tech to
          support your journey.
        </p>
        <div className="flex justify-center items-center mt-4 mb-4">
          <Link href="/contact-us">
            <button className="btn btn-primary text-center items-center">
              Talk To Our Experts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

{/* <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="flex-shrink-0"
>
  <path
    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M12.01 12H12"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>; */}

