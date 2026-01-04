'use client';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Copy,
  CheckCircle,
  XCircle
} from "lucide-react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

// ENV VARIABLES
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL!;
const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE!;
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL!;

// 🔹 Contact Item Type
interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

const ContactHomePage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  // 🔹 Success Toast
  const showSuccessToast = (message: string) => {
    toast.custom((t) => (
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 500 }}
        className="border border-primary/30 max-w-xs sm:max-w-sm w-full bg-base-200 text-primary px-4 py-2 rounded-lg shadow-lg flex items-center gap-3 whitespace-nowrap"
      >
        <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
        <span className="text-sm sm:text-base font-medium">{message}</span>
      </motion.div>
    ));
  };

  // 🔹 Error Toast
  const showErrorToast = (message: string) => {
    toast.custom((t) => (
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 500 }}
        className="border border-primary/30 max-w-xs sm:max-w-sm w-full bg-base-200 text-red-500 px-4 py-2 rounded-lg shadow-lg flex items-center gap-3 whitespace-nowrap"
      >
        <XCircle size={20} className="text-red-500 flex-shrink-0" />
        <span className="text-sm sm:text-base font-medium">{message}</span>
      </motion.div>
    ));
  };

  // 🔹 Send Email
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(
        () => {
          showSuccessToast("Message sent successfully!");
          formRef.current?.reset();
        },
        () => {
          showErrorToast("Failed to send. Please try again.");
        }
      );
  };

  // 🔹 Copy to Clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => showSuccessToast("Email copied to clipboard!"))
      .catch(() => showErrorToast("Failed to copy!"));
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // 🔹 Contact Info Items
  const contactItems: ContactItem[] = [
    {
      icon: <Phone size={20} />,
      label: "Phone Number",
      value: CONTACT_PHONE,
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: (
        <motion.div
          onClick={() => copyToClipboard(CONTACT_EMAIL)}
          whileHover={{ x: 3 }}
          className="underline-offset-4 decoration-dashed hover:underline rounded-lg group inline-flex items-center gap-1 hover:text-primary font-geist text-sm cursor-pointer transition-all duration-300"
        >
          {CONTACT_EMAIL}
          <Copy className="group-hover:translate-x-1 transition-transform duration-300" size={14} />
        </motion.div>
      ),
    },
    {
      icon: <MapPin size={20} />,
      label: "Address",
      value: "Dhaka, Bangladesh",
    },
    {
      icon: <Calendar size={20} />,
      label: "Book a Meeting",
      value: (
        <motion.a
          whileHover={{ x: 3 }}
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 decoration-dashed hover:underline  rounded-lg group inline-flex items-center gap-1 hover:text-primary font-geist text-sm cursor-pointer transition-all duration-300 "
        >
          Schedule on Calendly
          <ArrowUpRight className="group-hover:translate-x-1 transition-transform duration-300" size={14} />
        </motion.a>
      ),
    },
  ];

  return (
    <motion.section
      id="hire-me"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className=" text-base-content font-geist max-w-3xl mx-auto pt-1 "
    >
      <Toaster position="top-right" reverseOrder={false} />

      <div className="border border-primary/30 bg-base-200 rounded-lg p-4 backdrop-blur-sm hover:shadow-primary/10 transition-shadow duration-300">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="m-4 text-start "
        >
          <p className="text-sm text-base-content mb-0">• Contact</p>
          <h2 className="text-2xl font-geist text-base-content">
            Let’s <span className="text-base-content/60">Connect</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 ">

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <motion.input whileFocus={{ scale: 1.02 }} type="text" name="name" placeholder="Your name" required className="w-full p-2 input input-bordered focus:border-primary rounded-lg focus:outline-none" />
                <motion.input whileFocus={{ scale: 1.02 }} type="text" name="phone" placeholder="Phone" className="w-full p-2 input input-bordered focus:border-primary rounded-lg focus:outline-none" />
                <motion.input whileFocus={{ scale: 1.02 }} type="email" name="email" placeholder="Email" required className="w-full p-2 input input-bordered focus:border-primary rounded-lg focus:outline-none" />
                <motion.input whileFocus={{ scale: 1.02 }} type="text" name="subject" placeholder="Subject" className="w-full p-2 input input-bordered focus:border-primary rounded-lg focus:outline-none" />
              </div>

              <motion.textarea whileFocus={{ scale: 1.02 }} name="message" rows={5} placeholder="Message" required className="textarea textarea-bordered w-full rounded-lg p-2 focus:border-primary focus:outline-none"></motion.textarea>

              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <motion.button 
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="max-w-40 my-4 rounded-lg flex items-center gap-0 hover:text-primary font-geist text-sm px-0 py-0 transition-all"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="underline-offset-4 decoration-dashed hover:underline pb-2 rounded-lg group inline-flex items-center gap-1  font-geist text-sm cursor-pointer transition-all duration-300"
                >
                  Send Message <ArrowUpRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col gap-6 "
          >
            {contactItems.map((item, idx) => (
              <motion.div
                whileHover={{ x: 5 }}
                key={idx}
                className="flex  items-start gap-0 pl-0 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300 "
              >
                <div className="p-4 rounded-md ">{item.icon}</div>
                <div className="min-w-0 space-y-2">
                  <p className="text-sm opacity-70">{item.label}</p>
                  <div className="font-geist break-words">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactHomePage;
