"use client";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="tag">Our Mission</div>
          <h2 className="section-title mt-5 lg:text-5xl md:text-4xl sm:text-2xl p-1">
            Empowering Businesses to Succeed
          </h2>
          <p className="section-description mt-5 leading-loose text-xl">
            Our mission is to help businesses unlock their full potential
            through tailored solutions, cutting-edge technology, and unwavering
            support.
          </p>
        </motion.div>
        {/* <div className="flex justify-center mt-12">
          <motion.img
            src="/path-to-your-image/mission-image.png"
            alt="Mission"
            className="rounded-lg shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Mission;
