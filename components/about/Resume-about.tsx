'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ArrowUpRight } from "lucide-react";
import aboutDataJson from "@/data/resume.json";

/* ---------------- Types ---------------- */
interface ExperienceItem {
  title: string;
  time?: string;
  organization?: string;
  description?: string;
  profileLink?: string | null;
}

interface EducationItem {
  institution: string;
  degree: string;
  details?: string;
  credentialLink?: string | null;
}

interface AboutData {
  education: EducationItem[];
  experience: ExperienceItem[];
}

/* ---------------- Helpers ---------------- */
const initializeAboutData = (data: typeof aboutDataJson): AboutData => {
  const extractYear = (value?: string | null) =>
    parseInt(value?.match(/\d{4}/)?.[0] || "0", 10);

  return {
    education: [...data.education].sort(
      (a, b) => extractYear(b.details) - extractYear(a.details)
    ),
    experience: [...data.experience].sort(
      (a, b) => extractYear(b.time) - extractYear(a.time)
    ),
  };
};

/* ---------------- Component ---------------- */
const ResumeAboutSections: React.FC = () => {
  const [aboutData] = useState<AboutData>(() =>
    initializeAboutData(aboutDataJson)
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-base-content font-geist max-w-3xl mx-auto pt-6 px-4 space-y-8"
    >
      {/* ================= Experience ================= */}
      <motion.div
        className="relative overflow-hidden rounded-lg p-0 backdrop-blur-sm "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="flex items-center gap-3 text-xl mb-4">
          <Briefcase className="w-5 h-5 text-primary" /> Experience
        </h3>

        <ul className="space-y-4">
          {aboutData.experience.map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-base-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-primary font-medium">{item.title}</p>
              {item.organization && (
                <p className="text-base-content/70 mt-1">
                  {item.organization}
                  {item.time && ` | ${item.time}`}
                </p>
              )}
              {item.description && (
                <p className="text-base-content/60 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              )}
              {item.profileLink && (
                <a
                  href={item.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-2 items-center gap-1 text-sm text-primary underline-offset-4 decoration-dashed hover:underline transition"
                >
                  View Profile
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* ================= Education ================= */}
      <motion.div
        className="relative overflow-hidden rounded-lg p-0 backdrop-blur-sm "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="flex items-center gap-3 text-xl mb-4">
          <GraduationCap className="w-5 h-5 text-primary" /> Education
        </h3>

        <ul className="space-y-4">
          {aboutData.education.map((edu, idx) => (
            <motion.li
              key={idx}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-base-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-primary font-medium">{edu.institution}</p>
              <p className="text-base-content/70 mt-1">
                {edu.degree}
                {edu.details && ` | ${edu.details}`}
              </p>
              {edu.credentialLink && (
                <a
                  href={edu.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-2 items-center gap-1 text-sm text-primary underline-offset-4 decoration-dashed hover:underline transition"
                >
                  View Credential
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default ResumeAboutSections;
