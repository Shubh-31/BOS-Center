"use client";
import { motion } from "framer-motion";
import AboutUsPic from "@/assets/about-us/about-us.png";
import Image from "next/image";
import Link from "next/link";

const AboutHeader = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="tag">Business Online Solution</div>
            <h1 className="section-title text-left mt-5 lg:text-5xl md:text-4xl sm:text-3xl">
              Who We Are
            </h1>
            <p className="section-description text-left mt-5 text-xl">
              BOS Center — your trusted partner in cutting-edge software
              solutions tailored for the financial, travel, and digital
              ecosystems. We specialize in developing powerful, scalable, and
              secure platforms that simplify operations, accelerate growth, and
              enhance user experiences. From travel management systems and
              custom travel solutions to B2B & D2C automation tools, our
              products are built to meet the evolving needs of modern businesses
              and tech-savvy users.
            </p>
            <Link href="\contact-us">
              <button className="btn btn-primary mt-6">Learn More</button>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src={AboutUsPic}
              alt="FinTech, Banking, Financial, Payment, Credit Union, Nidhi, NBFCs Solutions Provider."
              className="rounded-xl shadow-lg"
            />
            {/* Floating Decorations */}
            <motion.div
              className="absolute -top-6 -right-6 w-16 h-16 bg-orange-500 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-12 h-12 bg-blue-500 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          Value Cards
          {[
            {
              amount: "40L+",
              description: "Current Users",
            },
            {
              amount: "20L+",
              description: "Monthly Payouts ",
            },
            {
              amount: "10L+",
              description: "Monthly Usage",
            },
            {
              amount: "1CR+",
              description: "Daily Transactions",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.3,
                ease: "easeOut",
              }}
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                {value.amount}
              </h3>
              <p className="mt-4 text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutHeader;
