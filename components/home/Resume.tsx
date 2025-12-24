'use client';

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { GraduationCap, Briefcase, ArrowUpRight } from "lucide-react";
import SimpleBar from "simplebar-react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

import aboutDataJson from "@/data/resume.json";

/* ---------------- Types ---------------- */

interface ExperienceItem {
  title: string;
  time?: string;
  organization?: string;
  description?: string;
  profileLink?: string;
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
      <div className="grid md:grid-cols-2 gap-2">

        {/* ================= Experience ================= */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden border border-primary/30 bg-base-200 rounded-lg p-4"
        >
          <h3 className="flex items-center gap-3 text-xl mb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            Experience
          </h3>

          <SimpleBar className="max-h-[300px] pr-2">
            <ul className="space-y-6 list-none p-0 m-0">
              {aboutData.experience.map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors mb-4"
                >
                  <p className="text-primary font-medium">{item.title}</p>
                  <p className="text-base-content/70 mt-1">{item.time}</p>

                  {item.organization && (
                    <p className="text-base-content/60 text-sm mt-1">
                      {item.organization}
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
                      className="inline-flex mt-1"
                    >
                      <span className="group inline-flex items-center gap-1  text-sm text-primary underline-offset-4 decoration-dashed hover:underline transition">
                        View Profile
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </SimpleBar>

          <ProgressiveBlur height="12%" position="bottom" />
        </motion.div>

        {/* ================= Education ================= */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden border border-primary/30 bg-base-200 rounded-lg p-4"
        >
          <h3 className="flex items-center gap-3 text-xl mb-6">
            <GraduationCap className="w-5 h-5 text-primary" />
            Education
          </h3>

          <SimpleBar className="max-h-[300px] pr-2">
            <ul className="space-y-6 list-none p-0 mb-6">
              {aboutData.education.map((edu, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors"
                >
                  <p className="text-primary font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-base-content/70 mt-1">
                    {edu.degree}
                    {edu.details && ` | ${edu.details}`}
                  </p>

                  {edu.credentialLink && (
                    <a
                      href={edu.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-1"
                    >
                      <span className="group inline-flex items-center gap-1 text-sm text-primary underline-offset-4 decoration-dashed hover:underline transition">
                        View Credential
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </SimpleBar>

          <ProgressiveBlur height="12%" position="bottom" />
        </motion.div>

      </div>
    </motion.section>
  );
};

export default ResumeSections;
