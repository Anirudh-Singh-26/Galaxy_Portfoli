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
}

const HighlightCard = ({
  icon,
  title,
  description,
  delay,
  color,
}: CardProps) => (
  <motion.div
    variants={staggerItem}
    whileHover={{
      y: -10,
      boxShadow: `0 20px 40px ${color}20`,
    }}
    transition={{ duration: 0.3 }}
    className="w-full"
  >
    <CardContainer className="w-full">
      <CardBody className="border border-purple-500/30 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg w-full h-full backdrop-blur-sm relative overflow-hidden group">
        {/* Background gradient on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-transparent`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <CardItem
          as={motion.div}
          translateZ={30}
          className="flex flex-col items-center py-0 justify-center gap-3 sm:gap-4 relative z-10 min-h-[120px] sm:min-h-[140px]"
        >
          <motion.div
            className="p-2 sm:p-3 bg-purple-500/10 rounded-full mt-3"
            whileHover={{
              scale: 1.1,
              rotate: 360,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl sm:text-3xl lg:text-5xl">{icon}</div>
          </motion.div>

          <motion.h3
            className="text-base sm:text-lg lg:text-xl font-semibold text-white text-center px-2 mt-7 mb-4"
            whileHover={{
              scale: 1.05,
              color: color === "purple" ? "#a855f7" : "#06b6d4",
            }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-gray-400 text-xs sm:text-sm text-center px-2 leading-relaxed"
            whileHover={{ color: "#d1d5db" }}
            transition={{ duration: 0.2 }}
          >
            {description}
          </motion.p>
        </CardItem>

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent"
          whileHover={{
            borderColor: color === "purple" ? "#a855f7" : "#06b6d4",
            boxShadow: `0 0 20px ${
              color === "purple" ? "#a855f7" : "#06b6d4"
            }40`,
          }}
          transition={{ duration: 0.3 }}
        />
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
      className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 pt-12 sm:pt-16 lg:pt-20"
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
          <div className="w-full max-w-[40rem] h-2 relative mx-auto mt-2 ms-10 sm:ms-[5.2rem]">
            <div className="absolute left-1/12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute left-1/12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          </div>
        </div>
        <p className="text-neutral-300 text-center mt-4 text-lg sm:text-xl font-semibold max-w-full sm:max-w-[600px] mx-auto">
          Key moments, projects, and accomplishments that define the essence of
          my work and passion.
        </p>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 w-full max-w-7xl mt-8 sm:mt-10 lg:mt-12">
        <HighlightCard
          icon={<FaProjectDiagram className="text-purple-400" />}
          title="5+ Real-World Projects"
          description="Designed and deployed full-stack apps using modern frameworks, APIs, and databases."
          delay={0.1}
          color="purple"
        />
        <HighlightCard
          icon={<FaLaptopCode className="text-cyan-400" />}
          title="Industry Internship"
          description="Worked remotely at Xebia (2024), contributing to scalable, production-ready solutions."
          delay={0.3}
          color="cyan"
        />
        <HighlightCard
          icon={<FaUserGraduate className="text-purple-400" />}
          title="1+ Year of Experience"
          description="Hands-on coding, problem-solving, and building impactful projects with clean practices."
          delay={0.5}
          color="purple"
        />
      </div>
    </motion.section>
  );
};
