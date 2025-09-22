// components/main/aboutMe.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/motion";

export const AboutMe = () => {
  return (
    <motion.section
      id="about-me"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 xl:gap-12 px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20"
    >
      {/* Left Side Image */}
      <motion.div
        variants={slideInFromLeft(0.2)}
        className="flex justify-center order-1 lg:order-none"
      >
        <motion.div
          className="w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[450px] lg:w-[380px] lg:h-[450px] xl:w-[420px] xl:h-[480px] overflow-hidden rounded-2xl shadow-lg"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(112, 66, 248, 0.15)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <Image
              src="/Me.jpg"
              alt="About Me"
              width={420}
              height={480}
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        variants={slideInFromRight(0.2)}
        className="flex flex-col gap-4 sm:gap-5 lg:gap-6 text-center lg:text-left max-w-full lg:max-w-2xl order-2 lg:order-none"
      >
        <motion.h2
          variants={staggerItem}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
        >
          About <span className="text-purple-400">Me</span>
        </motion.h2>

        <motion.p
          variants={staggerItem}
          className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-0"
        >
          I am a{" "}
          <motion.span
            className="text-purple-400 font-semibold"
            whileHover={{
              color: "#a855f7",
              scale: 1.05,
            }}
            transition={{ duration: 0.2 }}
          >
            Fullstack Developer
          </motion.span>{" "}
          with expertise in building modern, responsive, and scalable web
          applications. I enjoy creating solutions that balance clean design
          with robust functionality.
        </motion.p>

        <motion.p
          variants={staggerItem}
          className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-0"
        >
          Skilled in both{" "}
          <motion.span
            className="text-white font-medium"
            whileHover={{ color: "#e879f9" }}
          >
            frontend frameworks
          </motion.span>{" "}
          and{" "}
          <motion.span
            className="text-white font-medium"
            whileHover={{ color: "#06b6d4" }}
          >
            backend systems
          </motion.span>
          , I focus on writing clean, maintainable code and delivering
          efficient, user-friendly applications.
        </motion.p>

        <motion.p
          variants={staggerItem}
          className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-0"
        >
          I stay curious about new technologies and development practices,
          always striving to improve and contribute to impactful projects.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};
