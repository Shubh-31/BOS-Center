"use client";

import React, { useState } from "react";
import axios from "axios";
import AppConfig from "../config";
import countryCodes from "@/data/countrycodes.json";
import BOSProducts from "@/data/BOSProducts.json";
import ThankYou from "@/ThankYou";

const ContactForm = () => {
  type FormField = "name" | "phone" | "email" | "company" | "message";

  const [formData, setFormData] = useState<Record<FormField, string>>({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState("+91");
  const [service, setService] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: onlyNums }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  return (
    <>
      <section className="bg-inherit py-16 px-6 relative border border-gray-300 rounded-md shadow-md">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mt-5 text-4xl">
            Get in touch with us for more information
          </h2>
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <form className="space-y-6 relative mb-8" onSubmit={handleSubmit}>
            {/* Basic fields */}
            {(["name", "email", "company", "message"] as FormField[]).map(
              (field) => (
                <div key={field}>
                  <label htmlFor={field} className="sr-only">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    placeholder={`${field[0].toUpperCase() + field.slice(1)}*`}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full border border-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-xl bg-white"
                    required
                  />
                </div>
              )
            )}

            {/* Phone input */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0">
              <div className="relative w-full sm:hidden">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="absolute left-0 top-0 h-full w-24 md:w-16 pl-2 pr-6 py-2 border border-gray-300 bg-white text-gray-700 text-base rounded-md cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors sm:text-sm"
                >
                  {countryCodes.map((c, i) => (
                    <option key={i} value={c.code}>
                      {c.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  maxLength={20}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  className="w-full border border-gray-400 px-4 py-3 pl-[30%] rounded-md focus:outline-none focus:ring-1 focus:ring-black text-base"
                  required
                />
              </div>

              <div className="hidden sm:flex sm:flex-row sm:space-x-2 w-full">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="border border-gray-400 px-2 py-3 rounded-md text-base w-1/5 cursor-pointer bg-white"
                  required
                >
                  {countryCodes.map((c, i) => (
                    <option key={i} value={c.code}>
                      {c.country} ({c.code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  maxLength={10}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  className="flex-1 border border-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-base"
                  required
                />
              </div>
            </div>

            {/* Service dropdown */}
            <div>
              <label htmlFor="service" className="sr-only">
                Service
              </label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border border-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-xl bg-white cursor-pointer"
                required
              >
                <option value="" disabled>
                  Select Product
                </option>
                {BOSProducts.filter(
                  (product) => product.serviceName !== "Choose Product"
                ).map((product, i) => (
                  <option key={i} value={product.serviceName}>
                    {product.serviceName}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-6 w-full text-md"
            >
              Submit Now
            </button>
          </form>
        </div>
      </section>

      {/* ThankYou Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] z-50 flex items-center justify-center">
          <ThankYou
            CustomerName={formData.name}
            CustomerMobileNo={`${countryCode}${formData.phone}`}
            customerEmailID={formData.email}
            customerRemarks={`${formData.company} (company) | ${service} (service) | ${formData.message} (message)`}
          />
        </div>
      )}
    </>
  );
};

export default ContactForm;
