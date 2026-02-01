"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const VerificationFailure = ({
  heading = "Know exact reason behind verification faliure",
  verificationContent,
  reversed = false,
}: any) => {
  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto ">
        <div className="px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side Content */}
          <div className={`${reversed ? "order-2" : ""}`}>
            <h2 className="section-title text-left mt-5 text-5xl">{heading}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {verificationContent.para1}
            </p>
            {verificationContent.para2 && (
              <p className="mt-4 text-lg text-gray-600">
                {verificationContent.para2}
              </p>
            )}
          </div>

          {/* Right Side Image & Rating */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src={verificationContent.imgSrc}
                width={350}
                height={200}
                alt={verificationContent.alt || "verification content"}
                className="rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VerificationFailure;
