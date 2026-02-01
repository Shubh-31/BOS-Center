"use client";

import AppConfig from "@/config";
import OtpPopUp from "@/OTPPopUp";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
<button className="btn btn-primary">Book a demo</button>;


const headerContent = {
  tag: "Sectors",
  title: "Power Your Business with BOS’s Secure and Cutting-Edge Solutions",
  description:
    "Explore our suite of Travel and Financial Solutions — including Travel APIs, Travel Booking Platform, and Enterprise-to-Business Management Software — all designed to streamline operations and scale your business.",
  imgSrc: "/assets/SectorsHeader.png",
};

const SectorsHeader = () => {

    const [loading, setLoading] = useState(false);
    const [showOtpPopup, setShowOtpPopup] = useState(false);
    const [email, setEmail] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
  
    const handleSubmission = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setLoading(true);
      try {
        const headers = {
          "Content-Type": "application/json",
        };
  
        const payload = {
          mobileNo: "",
          emailid: email,
        };
  
        const { data: getResponseData } = await axios.post(
          `${AppConfig.contactUsBaseURL}/AOPCustomerQuery/SendOTP`,
          payload,
          { headers }
        );
  
        const returnMessage = getResponseData?.returnMessage;
        const status = getResponseData?.status;
  
        if (
          status === false &&
          returnMessage ===
            "OTP could not be sent because a user record already exists."
        ) {
          setResponseMessage(
            "OTP could not be sent because a user record already exists."
          );
        } else if (status === true && returnMessage === "OTP Send Successfully") {
          setShowOtpPopup(true);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setResponseMessage("Failed to send OTP. Please try again.");
      } finally {
        setLoading(false);
      }
    };


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
            <div className="tag">{headerContent.tag}</div>
            <h1 className="section-title text-left mt-5">
              {headerContent.title}
            </h1>
            <p className="section-description text-left mt-5">
              {headerContent.description}
            </p>
            <div className="flex mt-6 gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 w-fit md:w-96 border border-gray-300 rounded-md focus:outline-none"
                required
              />
              <button
                className="btn btn-primary"
                onClick={handleSubmission}
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Book Your Demo"}
              </button>
            </div>
            
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 mt-10 md:mt-0"
          >
            <Image
              src={headerContent.imgSrc}
              alt="Customizable white-label platform for various industry applications"
              width={200}
              height={200}
              className="w-full"
            />
          </motion.div>
        </div>
      </div>

      {showOtpPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-50">
          <OtpPopUp
            CustomerName={""}
            CustomerMobileNo={""}
            customerEmailID={email}
            customerRemarks={""}
          />
        </div>
      )}
    </section>
  );
};

export default SectorsHeader;
