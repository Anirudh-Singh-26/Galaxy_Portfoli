// components/main/hero.tsx
"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  buttonHover,
  floating,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";

export const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 mt-16 md:mt-[7rem] w-full z-[20]"
    >
      {/* Left Content */}
      <motion.div
        variants={staggerItem}
        className="w-full flex flex-col gap-3 sm:gap-4 lg:gap-5 justify-center m-auto text-center md:text-start mt-8"
      >
        {/* Role Box */}
        <motion.div
          variants={slideInFromTop(0.2)}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(180, 155, 255, 0.3)",
          }}
          className="flex items-center justify-center mb-5 sm:mb-0 md:justify-start gap-2 py-2 sm:py-[6px] px-3 sm:px-[6px] border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit mx-auto md:mx-0 cursor-default"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <SparklesIcon className="text-[#b49bff] h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </motion.div>
          <h1 className="text-xs sm:text-[12px] md:text-[13px] text-gray-200 font-semibold whitespace-nowrap">
            Software Engineer · Fullstack Developer
          </h1>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white max-w-full md:max-w-[600px] leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-gradient-to-t from-neutral-200 via-slate-400 to-gray-800 bg-clip-text text-transparent"
          >
            Transforming{" "}
          </motion.span>
          <motion.span
            className="bg-gradient-to-tr from-green-300 via-sky-200 to-indigo-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Ideas
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="bg-gradient-to-t from-neutral-200 via-slate-400 to-gray-800 bg-clip-text text-transparent"
          >
            {" "}
            into Seamless User{" "}
          </motion.span>
          <motion.span
            className="bg-gradient-to-t from-neutral-200 via-slate-400 to-gray-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Experiences
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base lg:text-lg text-gray-400 my-3 sm:my-4 max-w-full md:max-w-[500px] mx-auto md:mx-0"
        >
          I&apos;m a Full Stack Software Engineer specializing in building
          modern web applications. Check out my projects and skills.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mt-3"
        >
          <motion.a
            href="#projects"
            {...buttonHover}
            className="py-3 sm:py-4 px-6 sm:px-8 bg-transparent border-[#7D43FF] border-2 text-white text-sm sm:text-base font-medium rounded-full shadow-lg min-w-[140px] flex items-center justify-center cursor-pointer whitespace-nowrap"
          >
            Explore
          </motion.a>

          <motion.a
            href="/My_Data/Anirudh_Singh_Rathore_FullStack-Dev.pdf"
            download
            {...buttonHover}
            className="py-3 sm:py-4 px-6 sm:px-8 bg-[#7D43FF] text-white text-sm sm:text-base font-medium rounded-full shadow-lg min-w-[140px] flex items-center justify-center cursor-pointer whitespace-nowrap"
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center md:justify-end items-center mt-8 md:mt-0 hidden md:flex"
      >
        <motion.div variants={floating} animate="animate">
          <Image
            src="/hero-bg.svg"
            alt="work icons"
            height={400}
            width={400}
            draggable={false}
            className="select-none drop-shadow-lg sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
