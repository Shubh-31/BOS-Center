"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntegrationTimeline() {
  const steps = [
    {
      imgSrc:
        "/assets/HotelBooking/From Integration to Production/Day 1 Onboarding & Setup.png",
      day: "Day 1",
      title: "Onboarding & Setup",
      details:
        "Complete account registration, receive API credentials, and access the sandbox environment. Review documentation and explore the interactive API explorer. Our onboarding specialist schedules a kick-off call.",
    },
    {
      imgSrc:
        "/assets/HotelBooking/From Integration to Production/Day 2 Core Integration.png",
      day: "Day 2",
      title: "Core Integration",
      details:
        "Implement hotel search, availability check, and booking endpoints. Build UI components for search results, property details, and checkout flow. Test thoroughly in sandbox with realistic scenarios.",
    },
    {
      imgSrc:
        "/assets/HotelBooking/From Integration to Production/Day 3 Payment & Notifications.png",
      day: "Day 3",
      title: "Payment & Notifications",
      details:
        "Integrate payment gateway and test transaction processing. Set up email/SMS notification systems for booking confirmations. Implement cancellation and modification workflows.",
    },
    {
      imgSrc:
        "/assets/HotelBooking/From Integration to Production/Days 4–5 UAT & Testing.png",
      day: "Days 4–5",
      title: "UAT & Testing",
      details:
        "Conduct user acceptance testing with real supplier inventory in test mode. Verify edge cases, error handling, and payment gateway integration.",
    },
    {
      imgSrc:
        "/assets/HotelBooking/From Integration to Production/Days 6–7 Production Launch.png",
      day: "Days 6–7",
      title: "Production Launch",
      details:
        "Switch to production API keys, process first live bookings, and monitor transaction success rates. BOS support team provides hands-on assistance during initial launch days.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          From Integration to Production in 1–7 Days
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600 max-w-3xl mx-auto">
          BOS’s streamlined onboarding process and developer resources help you
          move from API access to first live booking faster than any competitor.
          Here’s what your typical implementation journey looks like:
        </p>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gray-200 h-full"></div>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Marker */}
                <div className="absolute left-[10px] md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#0a2540] border-4 border-white shadow-md"></div>

                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image
                    src={step.imgSrc}
                    alt={step.title}
                    width={500}
                    height={320}
                    className="rounded-2xl object-contain"
                  />
                </div>

                {/* Text Content */}
                <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 w-full md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.day}: {step.title}
                  </h3>
                  <p className="mt-3 text-gray-700 text-base leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center mt-16 max-w-3xl mx-auto"
        >
          Most development teams complete integration in 10–14 days. BOS’s
          simple implementations can go live even faster.
        </motion.p>
      </div>
    </section>
  );
}
