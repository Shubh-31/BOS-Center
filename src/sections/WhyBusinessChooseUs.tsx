"use client";
// import productImage from "@/assets/product-image.png";
// import pyramidImage from "@/assets/pyramid.png";
// import tubeImage from "@/assets/tube.png";
// import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
interface SolutionFeature {
  title: string;
  //   description: string;
  //   icon: string;
  //   large?: boolean;
}

export const WhyBusinessChooseUs = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#f0f4ff,#ffffff_100%)] pt-16 pb-2 overflow-x-clip"
    >
      <div className="container">
        <div className="w-full max-w-8xl mb-4">
          {/* <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div> */}
          <h2 className="section-title m-8 text-4xl">Why Businesses Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "10+ Financial Modules Under One Roof",
            "99.9% Uptime",
            "100% Private-Labeled Solutions",
            "Mobile-First Design (Android/iOS Support)",
            "Easy Integration with Existing Systems",
            "Dedicated Onboarding & Support Teams",
            "Scalable for teams, agents & multi-level resellers",
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:font-bold"
            >
              <h3 className="p-6 text-center font-medium text-gray-800">
                ✔ {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
