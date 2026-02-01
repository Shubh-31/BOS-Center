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
  heading2: string;
  heading2Para?: string;
  points?: Point[];
}

interface H2DescH3DescProps {
  contentWithDescription: ContentBlock[];
}

// ---------- Component ----------
export const H2DescH3Desc: React.FC<H2DescH3DescProps> = ({
  contentWithDescription,
}) => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto grid gap-10">
        {contentWithDescription.map((block, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Heading2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              {block.heading2}
            </h2>

            {/* Heading2 Paragraph */}
            {block.heading2Para && (
              <p className="text-lg text-gray-600 leading-relaxed">
                {block.heading2Para}
              </p>
            )}

            {/* Points with Heading3 */}
            {block.points && block.points.length > 0 && (
              <div className="mt-6 space-y-4">
                {block.points.map((point, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
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
                    <div>
                      {point.heading3 && (
                        <h3 className="text-lg font-semibold text-gray-800">
                          {point.heading3}
                        </h3>
                      )}
                      {point.heading3Para && (
                        <p className="text-gray-600 text-base">
                          {point.heading3Para}
                        </p>
                      )}
                    </div>
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
