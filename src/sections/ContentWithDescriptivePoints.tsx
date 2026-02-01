"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

// ---------- Types ----------
interface Point {
  heading3?: string;
  heading3Para?: string;
  imgSrc?: string;
}

interface ContentBlock {
  heading2: string;
  heading2Para?: string;
  points?: Point[];
}

interface ContentWithDescriptivePointsProps {
  content: ContentBlock[];
}

// ---------- Component ----------
export const ContentWithDescriptivePoints: React.FC<
  ContentWithDescriptivePointsProps
> = ({ content }) => {
  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-12">
        {content.map((block, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-6 hover:shadow-md transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              {block.heading2}
            </h2>

            {block.heading2Para && (
              <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
                {block.heading2Para}
              </p>
            )}

            {/* Points rendered as small cards */}
            {block.points && block.points.length > 0 && (
              <div className="mt-6 flex flex-wrap justify-center gap-6">
                {block.points.map((point, i) => (
                  <motion.div
                    key={i}
                    className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col gap-3 w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(50%-0.75rem)] max-w-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2">
                      {point.imgSrc ? (
                        <div className="relative w-8 h-8 flex-shrink-0">
                          <Image
                            src={point.imgSrc}
                            alt={point.heading3 || "Feature image"}
                            fill
                            className="object-contain rounded-md"
                          />
                        </div>
                      ) : (
                        <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                      )}

                      {point.heading3 && (
                        <h3 className="text-lg font-semibold text-gray-900">
                          {point.heading3}
                        </h3>
                      )}
                    </div>

                    {point.heading3Para && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {point.heading3Para}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
