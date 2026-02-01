"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

// ---------- Types ----------
interface Point {
  heading3?: string;
  heading3Para?: string;
  imgSrc?: string;
}

interface ContentBlock {
  tag?: string;
  heading2: string;
  heading2Para?: string;
  points?: Point[];
}

interface H2H3WithPointsProps {
  content: ContentBlock[];
}

// ---------- Component ----------
export const H2H3WithPoints: React.FC<H2H3WithPointsProps> = ({ content }) => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-16">
        {content.map((block, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {block.tag && (
              <p className="text-sm leading-tight text-gray-400 border border-gray-100 rounded-md p-2 max-w-xs">
                {block.tag}
              </p>
            )}

            {/* Heading2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-black-gradient">
              {block.heading2}
            </h2>

            {/* Heading2 Paragraph */}
            {block.heading2Para && (
              <p className="text-lg text-gray-600 max-w-full mx-auto">
                {block.heading2Para}
              </p>
            )}

            {/* Points rendered as cards */}
            {block.points && block.points.length > 0 && (
              <div className="grid gap-6 mt-6 sm:grid-cols-2">
                {block.points.map((point, i) => (
                  <motion.div
                    key={i}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col gap-3"
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
                        <h3 className="text-xl font-semibold text-gray-900">
                          {point.heading3}
                        </h3>
                      )}
                    </div>
                    {point.heading3Para && (
                      <p className="text-gray-600 text-base">
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
