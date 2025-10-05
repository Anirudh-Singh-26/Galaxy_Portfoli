// components/main/quick-stats.tsx
"use client";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/motion";
import { FaProjectDiagram, FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  color: string;
  mobileTitle: string;
  mobileValue: string;
}

const HighlightCard = ({
  icon,
  title,
  description,
  delay,
  color,
  mobileTitle,
  mobileValue,
}: CardProps) => (
  <motion.div
    variants={staggerItem}
    whileHover={{
      y: -6,
      boxShadow: `0 12px 24px ${color}20`,
    }}
    transition={{ duration: 0.3 }}
    className="w-full"
  >
    <CardContainer className="w-full">
      <CardBody className="border border-purple-500/30 rounded-xl p-2 sm:p-5 lg:p-6 shadow-md w-full h-full backdrop-blur-sm relative overflow-hidden group text-center">
        {/* Background gradient on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-transparent`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* ✅ Compact mobile card (symmetrical + equal height) */}
        <div className="flex sm:hidden flex-col items-center justify-center gap-1 px-2 py-4 rounded-lg min-h-[110px]">
          <div className="flex items-center justify-center w-10 h-10 bg-purple-500/10 rounded-full mb-2">
            <div className="text-lg text-white">{icon}</div>
          </div>
          <div className="text-xs font-medium text-gray-300">{mobileTitle}</div>
          <div className="text-sm font-semibold text-white">{mobileValue}</div>
        </div>

        {/* ✅ Detailed desktop/tablet card */}
        <CardItem
          as={motion.div}
          translateZ={30}
          className="hidden sm:flex flex-col items-center justify-center gap-3 sm:gap-4 relative z-10"
        >
          {/* Logo */}
          <motion.div
            className="p-2 sm:p-3 bg-purple-500/10 rounded-full"
            whileHover={{
              scale: 1.1,
              rotate: 360,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xl sm:text-3xl lg:text-5xl">{icon}</div>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-xs sm:text-lg lg:text-xl font-semibold text-white text-center"
            whileHover={{
              scale: 1.05,
              color: color === "purple" ? "#a855f7" : "#06b6d4",
            }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-400 text-sm text-center leading-relaxed"
            whileHover={{ color: "#d1d5db" }}
            transition={{ duration: 0.2 }}
          >
            {description}
          </motion.p>
        </CardItem>
      </CardBody>
    </CardContainer>
  </motion.div>
);

export const Highlights = () => {
  return (
    <motion.section
      id="highlights"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="flex flex-col items-center justify-center px-2 sm:px-6 md:px-12 lg:px-20  sm:pt-16 lg:pt-2"
    >
      <motion.h2
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center pt-8 sm:pt-10"
      >
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
            <span className="bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-gray-900 via-blue-100 to-emerald-800 bg-clip-text text-transparent">
              My Highlights
            </span>
          </h2>
          <div className="w-full max-w-[40rem] h-2 relative mx-auto ms-10 sm:ms-[5.2rem]">
            <div className="absolute left-1/12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute left-1/12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          </div>
        </div>
        <p className="text-neutral-300 text-center mt-4 text-lg sm:text-xl font-semibold max-w-full sm:max-w-[600px] mx-auto">
          Key moments, projects, and accomplishments that define the essence of
          my work and passion.
        </p>
      </motion.h2>

      {/* ✅ Always 3 columns */}
      <div className="text-center grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-7xl mt-6 sm:mt-10 lg:mt-12">
        <HighlightCard
          icon={<FaProjectDiagram className="text-purple-400" />}
          title="10+ Projects"
          description="Designed and deployed full-stack apps using modern frameworks, APIs, and databases."
          delay={0.1}
          color="purple"
          mobileTitle="Completed"
          mobileValue="10+ Projects"
        />
        <HighlightCard
          icon={<FaLaptopCode className="text-cyan-400" />}
          title="Industry Internship"
          description="Worked remotely at Xebia (2025), contributing to scalable, production-ready solutions."
          delay={0.3}
          color="cyan"
          mobileTitle="Support"
          mobileValue="Online 24/7"
        />
        <HighlightCard
          icon={<FaUserGraduate className="text-purple-400" />}
          title="1+ Year of Experience"
          description="Hands-on coding, problem-solving, and building impactful projects with clean practices."
          delay={0.5}
          color="purple"
          mobileTitle="Experience"
          mobileValue=" &nbsp;&nbsp;1+&nbsp;&nbsp; Years"
        />
      </div>
    </motion.section>
  );
};
