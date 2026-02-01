"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Values = ({ valuesContent }: any) => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {valuesContent.tag && <div className="tag">{valuesContent.tag}</div>}
          <h2 className="section-title mt-5 lg:text-5xl md:text-4xl sm:text-2xl">{valuesContent.title}</h2>
          <p className="section-description mt-5 md:text-xl sm:text-lg">
            {valuesContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {valuesContent.valueCard.map((value: any, index: any) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.3,
                ease: "easeOut",
              }}
            >
              {/* Image and Title Flex Row */}
              <div className="flex items-center justify-center gap-3 mb-4">
                {value.featureImage && (
                  <Image
                    src={value.featureImage}
                    alt={value.title}
                    width={40}
                    height={40}
                  />
                )}
                <h3 className="text-xl font-semibold text-gray-800">
                  {value.title}
                </h3>
              </div>

              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
