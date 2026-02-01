"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#f0f4ff,#ffffff_100%)] py-16 overflow-x-clip"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start justify-between">
          {/* Left Side: Headings and Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <h2 className="w-full text-3xl sm:text-4xl md:text-4xl lg:text-4xl text-center lg:text-left leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mb-8">
              Ready to Launch a Smarter Finance Platform?
            </h2>

            <p className="section-description mb-8 text-center lg:text-left">
              Whether you are building a lending business, payment platform,
              starting a B2B network, or upgrading your current system — our
              solutions are built to perform.
            </p>

            <h3 className="w-full text-2xl sm:text-xl md:text-xl lg:text-2xl text-center lg:text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mb-8">
              Let’s Build the Future of Finance — Together
            </h3>

            <Link href="/contact-us/">
              <button className="btn btn-primary ">Get Started Now</button>
            </Link>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};


 {/* <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div> */}