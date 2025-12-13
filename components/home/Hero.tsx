'use client';
import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { Link as ScrollLink } from "react-scroll";
import { BorderBeam } from "@/components/ui/border-beam";

interface TechIcon {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  color?: string;
}

const techIcons: TechIcon[] = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js"},
  { icon: SiNodedotjs, label: "Node.js"},
  { icon: SiExpress, label: "Express.js" },
  { icon: SiMongodb, label: "MongoDB", },
  { icon: SiTailwindcss, label: "Tailwind CSS", },
  { icon: SiFirebase, label: "Firebase" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript"  },
];

const HeroSection: React.FC = () => {
  const repeatedIcons = Array(5).fill(techIcons).flat();

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-mono w-full max-w-3xl px-0 sm:px-6 md:px-8 mx-auto flex items-center justify-center pt-2"
    >
      
      
        
        
        <div className="border border-primary/30 bg-base-200 backdrop-blur-sm relative overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full   rounded-lg p-6 sm:px-6 sm:py-4  transition-shadow duration-300">
          <BorderBeam size={100} duration={8}  colorFrom="#22c55e" colorTo="#16a34a" />
          {/* Left Image */}
           {/* LEFT IMAGE */}
        <motion.div  className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220 }}
            className="w-36 h-44 sm:w-44 sm:h-52 md:w-48 md:h-56 relative"
          >
            <div className="w-full h-full overflow-hidden rounded-lg mb-4">
              <Image
                src="/assets/images/profile.png"
                alt="Mehedi Hasan"
                width={500}
                height={500}
                priority
                className="w-full h-full object-cover bg-base-100"
              />
            </div>

            <div className="flex justify-center">
              <div
                className="bg-primary w-4/5 max-w-xs aspect-[3/1]"
                style={{
                  maskImage:
                    "url('https://i.ibb.co/pjK7xwK3/mehedi-hasan-signeture.png')",
                  WebkitMaskImage:
                    "url('https://i.ibb.co/pjK7xwK3/mehedi-hasan-signeture.png')",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                }}
              />
            </div>
          </motion.div>
        </motion.div>


          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-balance "
          >
            {/* Greeting */}
            <motion.span className="mt-4 text-sm sm:text-sm text-base-content font-mono flex flex-wrap items-center ">
              <Typewriter words={["Hi, I'm Mehedi Hasan"]} loop={1} cursor typeSpeed={100} deleteSpeed={0} />
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-3xl md:text-3xl leading-tight mt-4 break-words"
            > A
              {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Full-Stack
              </span>{" "} Developer          
              <span className="animate-blink">_</span>
            </motion.h1>

            {/* Description */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
  className="mt-4 text-sm sm:text-base font-mono text-base-content/60 break-words"
>
  I build full-stack web apps using{" "}
  <span className="bg-primary/20 text-primary font-medium px-1 rounded">
    Next.js & React
  </span>
  ,{" "}
  <span className="bg-primary/20 text-primary font-medium px-1 rounded">
    TypeScript
  </span>{" "}
  and{" "}
  <span className="bg-primary/20 text-primary font-medium px-1 rounded">
    Node.js
  </span>
  , focusing on clean architecture, smooth UX, and high-performance solutions. I use
</motion.p>




            {/* Tech Icons Marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex items-center gap-2"
            >
              <div className="overflow-hidden w-full">
                <Marquee direction="left" speed={40} loop={0} gradient={false} pauseOnHover autoFill>
                  <div className="flex items-center gap-4 w-max">
                    {repeatedIcons.map((tech, idx) => {
                      const IconComponent = tech.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-base-100 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition duration-300"
                          title={tech.label}
                        >
                          <IconComponent style={{ color: tech.color || "currentColor", width: 24, height: 24 }} />
                        </div>
                      );
                    })}
                  </div>
                </Marquee>
              </div>
              <span className="text-xs sm:text-sm font-mono text-base-content/60 inline">...and more !</span>
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-0 mt-4">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: -0.5 }}
                whileTap={{ scale: 0.97, rotate: 0.5 }}
                href="https://drive.google.com/uc?export=download&id=1gZMIsl3xbE6bdXfz82WAgOrwMJygx7KB"
                download
                className="group inline-flex items-center gap-2 text-primary underline-offset-4 decoration-dashed hover:underline rounded-lg p-2 font-mono text-sm transition-all duration-300"
              >
                <Download size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
                [ Download CV ]
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: -0.5 }}
                whileTap={{ scale: 0.97, rotate: 0.5 }}
              >
                <ScrollLink
                  to="hire me"
                  smooth
                  duration={500}
                  className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-mono text-sm cursor-pointer transition-all duration-300"
                >
                  [ Hire Me ]
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </ScrollLink>
              </motion.div>
            </div>

          </motion.div>
        </div>
     
    </motion.section>
  );
};

export default HeroSection;
