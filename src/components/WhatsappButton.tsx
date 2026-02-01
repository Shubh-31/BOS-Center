// components/WhatsAppButton.tsx
"use client";

import { SiWhatsapp } from "react-icons/si";


const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918929898920?text=Hi,%20I'm%20interested%20in%20your%20products.%20Could%20you%20please%20share%20more%20details"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
