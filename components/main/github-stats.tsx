"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const GithubStats = () => {
  return (
    <section
      id="github"
      className="flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20 backdrop-blur-none"
    >
      <motion.h2
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center"
      >
        My <span className="text-purple-400">GitHub Stats</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-7 lg:gap-8 items-center justify-center w-full max-w-6xl">
        {/* Stats Card */}
        <motion.div
          variants={slideInFromRight(0.6)}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-purple-500/40 shadow-lg hover:shadow-purple-500/20 transition-shadow w-full max-w-lg lg:max-w-none lg:flex-1"
        >
          <div className="w-full h-auto">
            <Image
              src="/skills/demopp.jpg"
              alt="GitHub Stats"
              width={500}
              height={300}
              className="rounded-md w-full h-auto object-contain max-h-[200px] sm:max-h-[250px] lg:max-h-[300px]"
            />
          </div>
        </motion.div>

        {/* Streak Card */}
        <motion.div
          variants={slideInFromRight(0.9)}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-purple-500/40 shadow-lg hover:shadow-purple-500/20 transition-shadow w-full max-w-lg lg:max-w-none lg:flex-1"
        >
          <div className="w-full h-auto">
            <Image
              src="/skills/demopp.jpg"
              alt="GitHub Streak"
              width={500}
              height={300}
              className="rounded-md w-full h-auto object-contain max-h-[200px] sm:max-h-[250px] lg:max-h-[300px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
