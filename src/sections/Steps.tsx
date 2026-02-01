"use client";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const PaymentSection = ({
  image,
  alt,
  title,
  description,
  reversed,
  textContent,
}: any) => {
  return (
    <motion.section
      className={`flex flex-col md:flex-row items-stretch justify-between gap-4 px-6 md:px-20 py-4 ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 h-full flex justify-center items-stretch">
        <motion.img
          src={image}
          alt={alt} 
          className="h-3/4 w-[70%] object-contain mt-12"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-2 flex flex-col justify-center">
        <h3 className="text-3xl font-semibold text-black-gradient mt-2 -mb-2">
          {title}
        </h3>
        <p className="text-gray-600 lg:-mb-6">{description}</p>
        {textContent &&
          textContent.map((benefit: any, index: number) => (
            <div key={index} className="flex items-start gap-4">
              <CircleCheck className="text-blue-500 w-6 h-6 flex-shrink-0" />
              <div>
                {benefit.title && (
                  <h4 className="text-lg font-normal text-gray-900">
                    {benefit.title}
                  </h4>
                )}
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
      </div>
    </motion.section>
  );
};


const Steps = ({
  textContent1,
  textContent2,
  heading,
  subheading,
}: {
  textContent1: any;
  textContent2: any;
  heading: string;
  subheading?: string; // ✅ OPTIONAL
}) => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-1">
          <h2 className="section-title text-5xl p-1 font-normal">{heading}</h2>
          {subheading && (
            <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
              {subheading}
            </p>
          )}
        </div>

        <PaymentSection
          image={textContent1.imgSrc}
          alt={textContent1.alt || textContent1.title}
          title={textContent1.mainTitle}
          description={textContent1.mainDescription}
          reversed={false}
          textContent={textContent1.content}
        />
        <PaymentSection
          image={textContent2.imgSrc}
          alt={textContent2.alt || textContent2.title}
          title={textContent2.mainTitle}
          description={textContent2.mainDescription}
          reversed={true}
          textContent={textContent2.content}
        />
      </div>
    </section>
  );
};

export default Steps;
