"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const irctcContent = {
  heading: "Access Indian Railways Network Through BOS IRCTC Train API",
  sub: "BOS API provides unprecedented access to every aspect of India's railway system through one unified integration. Eliminate the complexity of multiple integrations while ensuring complete coverage of all booking scenarios.",
  sections: [
    {
      imgSrc:
        "/assets/TrainBooking/Access Indian Railways Network Through BOS IRCTC Train API/BOS Covers All Train Types.png",
      title: "BOS Covers All Train Types",
      groups: [
        {
          subtitle: "Premium Trains",
          items: [
            "Vande Bharat Express - India's semi-high-speed trains",
            "Rajdhani Express - Premium AC trains connecting metros",
            "Shatabdi Express - Day trains with chair car services",
            "Duronto Express - Non-stop long-distance trains",
            "Tejas Express - Premium express trains",
            "Gatimaan Express - Semi-high-speed service",
          ],
        },
        {
          subtitle: "Regular Express & Mail",
          items: [
            "Superfast Express trains (SF)",
            "Mail Express trains",
            "Jan Shatabdi Express",
            "Intercity Express",
            "Passenger trains",
          ],
        },
        {
          subtitle: "Special Services",
          items: [
            "Suburban trains (Mumbai, Chennai, Kolkata local)",
            "Hill railways (Toy trains)",
            "Luxury tourist trains (Palace on Wheels, etc.)",
          ],
        },
      ],
    },
    {
      imgSrc:
        "/assets/TrainBooking/Access Indian Railways Network Through BOS IRCTC Train API/All Ticket Classes Supported.png",
      title: "All Ticket Classes Supported",
      groups: [
        {
          subtitle: "AC Classes",
          items: [
            "1AC (First Class AC) - Private cabins with amenities",
            "2AC (Two-tier AC) - AC coaches with berths",
            "3AC (Three-tier AC) - Most popular AC class",
            "EC (Executive Class) - Premium chair car",
            "CC (Chair Car) - AC seated coaches",
          ],
        },
        {
          subtitle: "Non-AC Classes",
          items: [
            "SL (Sleeper Class) - Most economical berth option",
            "2S (Second Sitting) - Non-AC seated class",
            "General (GS) - Unreserved general coaches",
          ],
        },
      ],
    },
    {
      imgSrc:
        "/assets/TrainBooking/Access Indian Railways Network Through BOS IRCTC Train API/Quota System Management.png",
      title: "Quota System Management",
      groups: [
        {
          subtitle: null,
          items: [
            "General Quota - Regular passenger bookings",
            "Ladies Quota - Reserved for female passengers",
            "Senior Citizen Quota - For passengers above 60 years",
            "Tatkal Quota - Last-minute booking (premium charges)",
            "Premium Tatkal - Dynamic pricing tatkal tickets",
            "Divyangjan Quota - For differently-abled passengers",
            "Lower Berth Quota - For senior citizens/patients",
            "Duty Pass Quota - For railway employees",
            "Foreign Tourist Quota - For international travelers",
          ],
        },
      ],
    },
  ],
};

export default function IrctcOverview() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-sky-50/60 to-white/40">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold text-slate-900"
        >
          {irctcContent.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-4 text-slate-600 max-w-3xl mx-auto"
        >
          {irctcContent.sub}
        </motion.p>
      </div>

      <div className="flex justify-center">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          {irctcContent.sections.map((section, sIdx) => (
            <motion.article
              key={sIdx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: sIdx * 0.06 }}
              className="p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image src = {section.imgSrc} alt = {section.title} width={100} height={100} className="w-8 h-auto text-blue-600" />
                <h3 className="text-lg font-semibold text-slate-900">
                  {section.title}
                </h3>
              </div>

              {/* groups (H4 + bullets) */}
              <div className="space-y-4 text-sm text-slate-700">
                {section.groups.map((group, gIdx) => (
                  <div key={gIdx}>
                    {group.subtitle && (
                      <h4 className="mb-2 text-slate-800 font-medium">
                        {group.subtitle}
                      </h4>
                    )}
                    <ul className="list-inside space-y-2">
                      {group.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1 text-blue-500 font-semibold">
                            ●
                          </span>
                          <span className="leading-tight">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
