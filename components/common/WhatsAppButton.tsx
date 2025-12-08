'use client';
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton: React.FC = () => {
  const whatsappNumber: string = "+8801747874773"; // Replace with your number
  const message: string =
    "Hi, Mehedi Hasan! I’m reaching out to connect and discuss possible professional opportunities."; // Default message
  const whatsappLink: string = `https://wa.me/${whatsappNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-center font-mono fixed bottom-6 right-6 z-50 p-3 rounded-lg
                 bg-base-200 text-base-content shadow-lg border border-primary/30 
                 hover:text-primary hover:border-primary transition-all"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={18} />
    </motion.a>
  );
};

export default WhatsAppButton;
