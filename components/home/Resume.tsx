'use client';

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SimpleBar from "simplebar-react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
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

/* ---------------- Animations ---------------- */

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] },
  },
};

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

const ResumeSections: React.FC = () => {
  const [aboutData] = useState<AboutData>(() =>
    initializeAboutData(aboutDataJson)
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-base-content font-geist max-w-3xl mx-auto pt-1"
    >
      <div className="grid md:grid-cols-2 gap-4">

        {/* ================= Experience ================= */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden border border-primary/30 bg-base-200 rounded-lg p-4"
        >
          <div className="text-start m-4">
            <p className="text-sm">• Experience</p>
            <h2 className="text-2xl">
              Career <span className="text-base-content/60">Highlights</span>
            </h2>
          </div>

          <SimpleBar className="max-h-[300px] pr-2">
            <ul className="space-y-4">
              {aboutData.experience.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.profileLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group block bg-base-100 p-4 rounded-lg"
                >
                  {/* Title + Icon */}
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium transition-colors group-hover:text-primary">
                      {item.title}
                    </p>

                    {item.profileLink && (
                      <ArrowUpRight size={16} className="group-hover:text-primary" />
                    )}
                  </div>

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
                </motion.a>
              ))}
            </ul>
          </SimpleBar>

          <ProgressiveBlur height="10%" position="bottom" />
        </motion.div>

        {/* ================= Education ================= */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden border border-primary/30 bg-base-200 rounded-lg p-4"
        >
          <div className="text-start m-4">
            <p className="text-sm">• Education</p>
            <h2 className="text-2xl">
              Academic <span className="text-base-content/60">Background</span>
            </h2>
          </div>

          <SimpleBar className="max-h-[300px] pr-2">
            <ul className="space-y-4">
              {aboutData.education.map((edu, idx) => (
                <motion.a
                  key={idx}
                  href={edu.credentialLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group block bg-base-100 p-4 rounded-lg"
                >
                  {/* Institution + Icon */}
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium transition-colors group-hover:text-primary">
                      {edu.institution}
                    </p>

                    {edu.credentialLink && (
                      <ArrowUpRight size={16} className="group-hover:text-primary" />
                    )}
                  </div>

                  <p className="text-base-content/70 mt-1">
                    {edu.degree}
                    {edu.details && ` | ${edu.details}`}
                  </p>
                </motion.a>
              ))}
            </ul>
          </SimpleBar>

          <ProgressiveBlur height="10%" position="bottom" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ResumeSections;
