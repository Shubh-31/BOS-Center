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

export const BuiltWithTrust = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });


  return (
    <section
      ref={sectionRef}
      className="bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)] pt-16 pb-2 overflow-x-clip"
    >
      <div className="container">
        <div className="w-full max-w-8xl mb-4">
          <h2 className="section-title m-5 text-4xl -mb-4">
            Built With Trust in Mind
          </h2>
        </div>
        <section className="py-8 px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {[
              "Bank-Grade Security (256-bit encryption)",
              "Real-Time Notifications & Alerts",
              "Audit Trails & Compliance Dashboards",
              "Offline Sync for Field Teams",
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
      </div>
    </section>
  );
};
