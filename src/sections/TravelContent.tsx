"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TravelContent = ({ content, heading, subHeading, tag }: any) => {
  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          {tag && <div className="tag">{tag}</div>}
        </div>

        <h2 className="section-title p-6 rounded-lg mb-2 text-5xl">
          {heading}
        </h2>

        {subHeading && (
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-4xl mx-auto text-center">
            {subHeading}
          </p>
        )}

        <div className="space-y-16">
          {content.map((feature: any, index: any) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2">
                {feature.tag && (
                  <div className="tag text-xs mb-2">{feature.tag}</div>
                )}
                <h3 className="text-xl font-semibold mb-4 text-gradient">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="list-disc pl-5 space-y-4 text-gray-500">
                  {feature.points.map((point: string, idx: number) => {
                    const [pointTitle, ...pointContent] = point.split(":");
                    const content = pointContent.join(":").trim();
                    return (
                      <li key={idx}>
                        <h4 className="text-md font-normal">
                          {pointTitle.trim()}
                        </h4>
                        <p className="text-base mt-1">{content}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={210}
                  height={100}
                  className="rounded-2xl border-none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelContent;
