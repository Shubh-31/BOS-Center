"use client";
import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";

const Team = () => {
  const teamMember = [
    { name: "John Doe", role: "CEO", imageSrc: avatar1.src },
    { name: "Jane Smith", role: "CTO", imageSrc: avatar2.src },
    {
      name: "Michael Lee",
      role: "Lead Developer",
      imageSrc: avatar3.src,
    },
    { name: "Emily White", role: "Designer", imageSrc: avatar4.src },
  ];
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="tag">Meet the Team</div>
          <h2 className="section-title mt-5">The People Behind Our Success</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {teamMember.map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.3,
                ease: "easeOut",
              }}
            >
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={160}
                height={160}
                className="rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
