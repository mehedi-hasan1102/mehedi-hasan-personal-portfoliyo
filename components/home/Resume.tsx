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
      <div className="grid md:grid-cols-2 gap-1">

        {/* ================= Experience ================= */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden border border-primary/30 bg-base-200 rounded-lg p-4"
        >
          <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className=" text-start m-4"
        >
          <p className="text-sm text-base-content mb-0">• Experience</p>
          <h2 className="text-2xl">
            Career <span className="text-base-content/60"> Highlights</span>
          </h2>
        </motion.div>

          <SimpleBar className="max-h-[300px] pr-2 ">
            <ul className="space-y-4 list-none p-0 ">
              {aboutData.experience.map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className=" transition-colors bg-base-100 p-4 rounded-lg"
                >
                  <p className=" font-medium ">{item.title}</p>


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
                      className="inline-flex mt-1"
                    >
                      <span className="group inline-flex items-center gap-1  text-sm hover:text-primary underline-offset-6 decoration-dashed hover:underline transition">
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

          <ProgressiveBlur height="8%" position="bottom" />
        </motion.div>

        {/* ================= Education ================= */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden border border-primary/30 bg-base-200 rounded-lg p-4"
        >

          <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className=" text-start m-4"
        >
          <p className="text-sm text-base-content mb-0">• Education</p>
          <h2 className="text-2xl">
            Academic <span className="text-base-content/60"> Background</span>
          </h2>
        </motion.div>

          <SimpleBar className="max-h-[300px] pr-2">
            <ul className="space-y-4 list-none  mb-0">
              {aboutData.education.map((edu, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="transition-colors bg-base-100 p-4 rounded-lg"
                >
                  <p className=" font-medium">
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
                      <span className="group inline-flex items-center gap-1 text-sm hover:text-primary underline-offset-6 decoration-dashed hover:underline transition">
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

          <ProgressiveBlur height="8%" position="bottom" />
        </motion.div>

      </div>
    </motion.section>
  );
};

export default ResumeSections;
