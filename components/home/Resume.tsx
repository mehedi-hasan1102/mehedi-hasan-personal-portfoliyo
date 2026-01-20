'use client';

import React, { useMemo } from "react";
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

/* ---------------- Memoized List Items ---------------- */

const ListItem: React.FC<{
  title: string;
  details?: string;
  extra?: React.ReactNode;
}> = React.memo(({ title, details, extra }) => (
  <motion.li
    whileHover={{ x: 5, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-base-100 p-4 rounded-lg cursor-pointer"
  >
    <p className="font-medium">{title}</p>
    {details && <p className="text-base-content/70 mt-1">{details}</p>}
    {extra}
  </motion.li>
));

// Add display name to fix ESLint warning
ListItem.displayName = "ListItem";

/* ---------------- Component ---------------- */

const ResumeSections: React.FC = () => {
  const aboutData = useMemo(() => initializeAboutData(aboutDataJson), []);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="text-base-content font-geist max-w-3xl mx-auto pt-1"
    >
      <div className="grid md:grid-cols-2 gap-1">

        {/* ================= Experience ================= */}
        <div className="relative overflow-hidden border border-primary/30 bg-base-200 rounded-lg p-4">
          <div className="text-start m-4">
            <p className="text-sm text-base-content mb-0">• Experience</p>
            <h2 className="text-2xl">
              Career <span className="text-base-content/60"> Highlights</span>
            </h2>
          </div>

          <SimpleBar className="max-h-[300px] pr-2">
            <ul className="space-y-4 list-none p-0">
              {aboutData.experience.map((item) => (
                <ListItem
                  key={`${item.title}-${item.organization ?? "org"}`}
                  title={item.title}
                  details={
                    item.organization
                      ? `${item.organization}${item.time ? ` | ${item.time}` : ""}`
                      : undefined
                  }
                  extra={
                    item.description || item.profileLink ? (
                      <div className="mt-2">
                        {item.description && (
                          <p className="text-base-content/60 text-sm leading-relaxed">
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
                            <span className="group inline-flex items-center gap-1 text-sm hover:text-primary underline-offset-6 decoration-dashed hover:underline transition">
                              View Profile
                              <ArrowUpRight
                                size={14}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </span>
                          </a>
                        )}
                      </div>
                    ) : null
                  }
                />
              ))}
            </ul>
          </SimpleBar>

          <ProgressiveBlur height="8%" position="bottom" />
        </div>

        {/* ================= Education ================= */}
        <div className="relative overflow-hidden border border-primary/30 bg-base-200 rounded-lg p-4">
          <div className="text-start m-4">
            <p className="text-sm text-base-content mb-0">• Education</p>
            <h2 className="text-2xl">
              Academic <span className="text-base-content/60"> Background</span>
            </h2>
          </div>

          <SimpleBar className="max-h-[300px] pr-2">
            <ul className="space-y-4 list-none mb-0">
              {aboutData.education.map((edu) => (
                <ListItem
                  key={`${edu.institution}-${edu.degree}`}
                  title={edu.institution}
                  details={`${edu.degree}${edu.details ? ` | ${edu.details}` : ""}`}
                  extra={
                    edu.credentialLink && (
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
                    )
                  }
                />
              ))}
            </ul>
          </SimpleBar>

          <ProgressiveBlur height="8%" position="bottom" />
        </div>

      </div>
    </motion.section>
  );
};

export default ResumeSections;
