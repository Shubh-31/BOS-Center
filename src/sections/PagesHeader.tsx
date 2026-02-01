"use client";

import AppConfig from "@/config";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OtpPopUp from "@/OTPPopUp";
import { toast, Toaster } from "react-hot-toast";

const PagesHeader = ({ headerContent }: any) => {
  const [loading, setLoading] = useState(false);
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  return (
    <section className="bg-white py-12">
      <Toaster />
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
          
            <h1 className="section-title text-left mt-5 text-5xl pb-1">
              {headerContent?.title}
            </h1>

            {headerContent?.firstSentence && (
              <p className="text-lg font-medium text-gray-600 mb-2">
                {headerContent.firstSentence}
              </p>
            )}

            {headerContent?.description && (
              <p className="section-description text-left mt-3 text-2xl md:text-xl sm:text-xl">
                {headerContent.description}
              </p>
            )}

            <div className="flex mt-6 gap-2">
              {/* Render first button only if buttonLabel exists */}
              {headerContent?.buttonLabel && (
                <Link
                  href="/contact-us"
                  className="inline-block bg-[#000000] text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-[#000000] transition"
                >
                  {headerContent.buttonLabel}
                </Link>
              )}

              {/* Render second button only if alternateButtonLabel exists */}
              {headerContent?.alternateButtonLabel && (
                <Link
                  href="/contact-us"
                  className="inline-block bg-[#000000] text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-[#000000] transition"
                >
                  {headerContent.alternateButtonLabel}
                </Link>
              )}
            </div>

            {responseMessage && (
              <p className="text-red-500 mt-2">{responseMessage}</p>
            )}
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 mt-10 md:mt-0"
          >
            <Image
              src={headerContent.imgSrc}
              alt={headerContent.alt}
              width={500}
              height={200}
            />
          </motion.div>
        </div>
      </div>

      {showOtpPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-50">
          <OtpPopUp
            CustomerName=""
            CustomerMobileNo=""
            customerEmailID={email}
            customerRemarks=""
          />
        </div>
      )}
    </section>
  );
};

export default PagesHeader;
