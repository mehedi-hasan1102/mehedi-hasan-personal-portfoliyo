'use client';

import React, { useState } from "react";
// FIX 1: Import the 'Variants' type from framer-motion
import { motion, Variants } from "framer-motion";
import { GraduationCap, Briefcase, ArrowUpRight } from "lucide-react";

// Import JSON data
import aboutDataJson from "@/data/resume.json";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

// --- Type Definitions ---
// ... (Interfaces remain unchanged)
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

// --- Animation Variants ---
// FIX 2: Apply the 'Variants' type directly to the animation objects
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// FIX 2 & 3: Apply 'Variants' type and use the standard string "easeOut" again, 
// OR use cubic-bezier array (which sometimes resolves stubborn string errors)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    // Using cubic-bezier array equivalent of 'easeOut' (or just use "easeOut")
    transition: { duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }
    // If the array causes issues again, try: transition: { duration: 0.6, type: "tween", ease: "easeOut" }
  },
};

// --- State Initialization Logic ---
const initializeAboutData = (data: typeof aboutDataJson): AboutData => {
  if (!data) {
    return { education: [], experience: [] };
  }

  const extractYear = (timeOrDetails?: string | null) => {
    return parseInt(timeOrDetails?.match(/\d{4}/)?.[0] || "0", 10);
  };

  const sortedEducation = [...data.education].sort((a, b) => {
    const yearA = extractYear(a.details);
    const yearB = extractYear(b.details);
    return yearB - yearA;
  });

  const sortedExperience = [...data.experience].sort((a, b) => {
    const yearA = extractYear(a.time);
    const yearB = extractYear(b.time);
    return yearB - yearA;
  });

  return {
    education: sortedEducation as EducationItem[],
    experience: sortedExperience as ExperienceItem[],
  };
};

const ResumeSections: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData>(() => initializeAboutData(aboutDataJson));

  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-base-content font-mono max-w-3xl mx-auto px-0 sm:px-6 md:px-8 space-y-4 pt-2"
    >
      <div className="grid md:grid-cols-2 gap-2">
        {/* Experience Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full overflow-hidden border border-primary/30 bg-base-200 rounded-lg p-6 backdrop-blur-sm  transition-shadow duration-300"
        >
          <p className="text-sm text-primary mb-0">• Career Path</p>
          <h3 className="flex items-center gap-3 text-xl mb-4 text-base-content">
            <Briefcase className="text-primary w-5 h-5" /> Work Experience
          </h3>

          <ul className="space-y-6 max-h-[300px] overflow-y-auto pr-2">
            {aboutData.experience.map((item: ExperienceItem, idx: number) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300 mb-4"
                title={item.title}
              >


                <p className="text-primary font-medium">{item.title}</p>
                <p className="text-base-content/70 mt-1">{item.time}</p>
                {item.organization && (
                  <p className="text-base-content/60 text-sm mt-1">
                    {item.organization}
                  </p>
                )}
                <p className="text-base-content/60 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
                {item.profileLink && (




                  <a
                    href={item.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex "
                  >
                    <span className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-mono text-sm cursor-pointer transition-all duration-300">
                      View Profile
                      <ArrowUpRight className="group-hover:translate-x-1 transition-transform duration-300 " size={16} />
                    </span>
                  </a>







                )}

              </motion.li>

            ))}

          </ul>
          <ProgressiveBlur height="12%" position="bottom" />
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full overflow-hidden  border border-primary/30 bg-base-200 rounded-lg p-6 backdrop-blur-sm  transition-shadow duration-300"
        >
          <p className="text-sm text-primary mb-0">• Education Path</p>
          <h3 className="flex items-center gap-3 text-xl mb-4 text-base-content">
            <GraduationCap className="text-primary w-5 h-5" /> Learning Journey
          </h3>

          <ul className="space-y-6 max-h-[300px] overflow-y-auto pr-2">
            {aboutData.education.map((edu: EducationItem, idx: number) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300 mb-4"
                title={edu.degree}
              >
                <p className="text-primary font-medium">{edu.institution}</p>
                <p className="text-base-content/70 mt-1">
                  {edu.degree} {edu.details ? `| ${edu.details}` : ""}
                </p>
                {edu.credentialLink && (


                  <a
                    href={edu.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <span className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-mono text-sm cursor-pointer transition-all duration-300">
                      View Credential
                      <ArrowUpRight className="group-hover:translate-x-1 transition-transform duration-300 " size={16} />
                    </span>
                  </a>

                )}
              </motion.li>
            ))}
          </ul>
          <ProgressiveBlur height="12%" position="bottom" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ResumeSections;