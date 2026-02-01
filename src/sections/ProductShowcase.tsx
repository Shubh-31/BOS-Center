"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div
      ref={sectionRef}
      className="bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)] pt-8 w-full pb-2"
    >
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="w-full h-auto">
          {/* <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div> */}
          <h2 className="w-full sm:text-5xl md:text-4xl lg:text-5xl text-center font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent p-1">
            Our Flagship – Your Success
          </h2>

          <p className="mt-5 text-center text-lg md:text-xl max-w-4xl mx-auto font-light">
            Empowering Travel Businesses, E-commerce Platforms, and Digital
            Resellers with secure, scalable, and customizable software
            solutions.
          </p>
          <p className="mt-5 text-center text-lg md:text-xl max-w-4xl mx-auto font-light">
            Simplify how you manage bookings, serve customers, and grow your
            business — with next-gen platforms built for performance,
            flexibility, and scale.
          </p>
        </div>

        {/* Optional: Uncomment below if needed */}
        {/* <div className="relative mt-10">
          <Image src={productImage} alt="Product Image" className="w-full" />
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
      </div>
    </div>
  );
};
