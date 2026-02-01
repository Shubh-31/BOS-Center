import Image from "next/image";
import { motion } from "framer-motion";

export default function NBFCInterfaceSection({
  heading,
  verificationContent,
  reversed,
}: {
  heading: string;
  verificationContent: any;
  reversed?: boolean;
}) {
  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto">
        <div className="px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className={`${reversed ? "order-2" : ""}`}>
            <h2 className="section-title text-left mt-5 text-5xl">{heading}</h2>

            <p className="mt-4 text-lg text-gray-600">
              {verificationContent.intro}
            </p>

            {verificationContent.bullets && (
              <ul className="mt-6 space-y-4 list-disc list-inside text-gray-700">
                {verificationContent.bullets.map(
                  (point: string, idx: number) => (
                    <li key={idx} className="text-lg">
                      {point}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
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
}
