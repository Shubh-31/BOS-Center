"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Feature = {
  title: string;
  description: string;
  icon: string | JSX.Element;
};

type Step = {
  title: string;
  steps: string[];
};

type HowItWorksContent =
  | {
      layout: "features";
      title: string;
      description?: string;
      imgSrc?: string;
      alt?: string;
      features: Feature[];
    }
  | {
      layout: "steps";
      title: string;
      description?: string;
      imgSrc?: string | string[];
      alt?: string | string[];
      roles: Step[];
    };

const HowItWorks = ({ content }: { content: HowItWorksContent }) => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 blur-[120px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 blur-[150px] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto space-y-20">
        {/* ---------- SECTION TITLE ---------- */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            {content.title}
          </h2>

          {content.description && (
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {content.description}
            </p>
          )}
        </motion.div>

        {/* ---------- TWO COLUMN GRID ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* ---------- LEFT COLUMN (Images) ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Single or multiple images */}
            {content.layout === "steps" &&
              content.imgSrc &&
              (Array.isArray(content.imgSrc) ? (
                <div className="flex flex-col gap-8">
                  {content.imgSrc.map((src, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white/70 backdrop-blur-xl"
                    >
                      <Image
                        src={src}
                        alt={
                          Array.isArray(content.alt)
                            ? content.alt[idx]
                            : "How it works"
                        }
                        width={700}
                        height={450}
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white/70 backdrop-blur-xl"
                >
                  <Image
                    src={content.imgSrc}
                    alt={typeof content.alt === "string" ? content.alt : "How"}
                    width={700}
                    height={450}
                    className="object-contain"
                  />
                </motion.div>
              ))}

            {content.layout === "features" && content.imgSrc && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white/70 backdrop-blur-xl"
              >
                <Image
                  src={content.imgSrc}
                  alt={content.alt || "How It Works"}
                  width={700}
                  height={450}
                  className="object-contain"
                />
              </motion.div>
            )}
          </motion.div>

          {/* ---------- RIGHT COLUMN (Features or Steps) ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* ----- FEATURES GRID ----- */}
            {content.layout === "features" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="p-6 rounded-2xl shadow-lg hover:shadow-2xl bg-white border border-gray-200 transition duration-300"
                  >
                    <div className="flex items-center gap-4">
                      {typeof feature.icon === "string" ? (
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-2xl text-blue-600">
                          {feature.icon}
                        </span>
                      )}

                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* ----- STEPS (Timeline Style) ----- */}
            {content.layout === "steps" && (
              <div className="space-y-8">
                {content.roles.map((role, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    className="p-8 rounded-3xl bg-white shadow-xl border border-gray-200"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {role.title}
                    </h3>

                    <div className="space-y-6">
                      {role.steps.map((step, idx) => {
                        const [heading, ...rest] = step.split(":");
                        const desc = rest.join(":").trim();

                        return (
                          <div
                            key={idx}
                            className="flex gap-4 items-start relative"
                          >
                            {/* Number Bubble */}
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                              {idx + 1}
                            </div>

                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-800">
                                {heading}
                              </h4>

                              {desc && (
                                <p className="text-gray-600 mt-1 text-sm">
                                  {desc}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
