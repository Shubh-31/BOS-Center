"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const GetStartedWithUs = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)] py-20 overflow-x-clip"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
          Get Started in 3 Easy Steps
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full overflow-x-auto pb-8">
          {["Choose Your Solution", "Customize It", "Go Live"].map(
            (step, idx) => (
              <div key={idx} className="flex items-center md:flex-row flex-col">
                {/* Step Card */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 py-8 min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[260px] text-center border border-gray-200">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {step}
                  </h3>
                </div>

                {/* ➡️ Arrow only on md+ */}
                {idx < 2 && (
                  <ArrowRight className="hidden md:block mx-4 w-6 h-6 text-gray-500 shrink-0" />
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
