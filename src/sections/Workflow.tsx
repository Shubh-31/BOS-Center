"use client";
import { motion } from "framer-motion";

const Workflow = () => {
  return (
    <section className="bg-gray-900 py-24 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <div className="tag text-orange-400">Workflow</div>
          <h2 className="text-4xl font-bold mt-4">
            A Simple Yet Effective Four Step Process.
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            From refining your brand identity and running campaigns to powering
            your digital presence, we do it all.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {[
            {
              id: "01",
              title: "Simple Creative Design",
              description:
                "There are many ways to approach simple creative design, but here are a few tips to get started.",
            },
            {
              id: "02",
              title: "Understanding Client's Needs",
              description:
                "We take time to understand client requirements and tailor our solutions accordingly.",
            },
            {
              id: "03",
              title: "Creating A Project Plan",
              description:
                "A step-by-step plan ensures efficient execution and project success.",
            },
            {
              id: "04",
              title: "Launching The Project",
              description:
                "Successful execution and seamless project launch to exceed expectations.",
            },
          ].map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-3xl font-bold text-orange-400">
                {step.id}
              </div>
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-400 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
