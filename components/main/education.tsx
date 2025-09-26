// components/main/journey.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, viewportSettings } from "@/lib/motion";

export const Journey: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20"
        id="journey"
      >
        {/* Section heading */}
        <motion.div
          variants={staggerItem}
          className="relative z-10 text-center mb-12"
        >
          <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              <span className="bg-gradient-to-t from-slate-100 via-cyan-600 to-cyan-950 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
            <div className="w-full max-w-[40rem] h-2 relative mx-auto ms-[2rem] sm:ms-[14.5rem]">
              <div className="absolute left-1/12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute left-1/12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            </div>
          </div>
          <p className="text-neutral-300 text-center mt-4 text-base sm:text-lg lg:text-xl font-semibold max-w-full sm:max-w-[600px] mx-auto">
            Tracing the path of challenges, experiences, and learnings that
            shaped who I am today.
          </p>
        </motion.div>

        {/* Timeline container */}
        <motion.div
          variants={staggerContainer}
          className="relative z-10 space-y-12 sm:space-y-16"
        >
          {/* Entry 1 */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-stretch gap-6 sm:gap-10 relative"
          >
            {/* Content */}
            <motion.div
              className="w-full sm:flex-1 backdrop-blur-sm border border-purple-400/10 rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col order-2 sm:order-1 cursor-pointer"
              whileHover={{
                scale: 1.015,
                boxShadow: "0 12px 28px rgba(168,85,247,0.18)",
              }}
              transition={{ duration: 0.3 }}
              onClick={() =>
                setSelectedImage(
                  "/My_Data/Anirudh_Xebia_Internship_page-0001.jpg"
                )
              }
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg sm:text-2xl font-semibold text-white">
                  Remote Intern
                </h3>
                <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-400/10 text-purple-200">
                  Professional
                </span>
              </div>
              <div className="mb-3">
                <p className="text-purple-300 font-semibold">Xebia</p>
                <p className="text-slate-400 text-sm">
                  June 1, 2025 – July 12, 2025
                </p>
              </div>
              <ul className="mt-5 space-y-2 sm:space-y-3 flex-1">
                {[
                  "Built and optimized fullstack applications with modern frameworks",
                  "Collaborated remotely with distributed teams using Git workflows",
                  "Applied agile methodologies for project execution and delivery",
                ].map((t, idx) => (
                  <li
                    key={idx}
                    className="text-slate-300 text-sm flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full mt-2 bg-gradient-to-r from-purple-400 to-cyan-400 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-slate-400 text-sm italic">
                Certified internship covering modern web frameworks & real-world
                projects.
              </p>
            </motion.div>

            {/* Image (hidden on mobile, order preserved) */}
            <motion.div className="hidden sm:block w-full sm:w-1/3 rounded-xl overflow-hidden border border-purple-400/20 shadow-md flex-shrink-0 order-1 sm:order-2">
              <Image
                src="/My_Data/Anirudh_Xebia_Internship_page-0001.jpg"
                alt="Xebia Certificate"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Entry 2 */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-stretch gap-6 sm:gap-10 relative"
          >
            {/* Image (hidden on mobile, order preserved) */}
            <motion.div className="hidden sm:block w-full sm:w-1/3 rounded-xl overflow-hidden border border-cyan-400/20 shadow-md flex-shrink-0 order-1 sm:order-1">
              <Image
                src="/My_Data/Uni_logo.jpg"
                alt="Degree"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="w-full sm:flex-1 backdrop-blur-sm border border-cyan-400/10 rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col order-2 sm:order-2 cursor-pointer"
              whileHover={{
                scale: 1.015,
                boxShadow: "0 12px 28px rgba(6,182,212,0.15)",
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage("/My_Data/Uni_logo.jpg")}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg sm:text-2xl font-semibold text-white">
                  Bachelor of Technology (B.Tech)
                </h3>
                <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-400/10 text-cyan-200">
                  Education
                </span>
              </div>
              <div className="mb-3">
                <p className="text-cyan-300 font-semibold">JECRC University</p>
                <p className="text-slate-400 text-sm">Aug 2022 – Jul 2026</p>
              </div>
              <ul className="mt-5 space-y-2 sm:space-y-3 flex-1">
                {[
                  "Focused on full-stack development and cloud computing",
                  "Studied algorithms, data structures and system design",
                  "Graduated with distinction",
                ].map((t, idx) => (
                  <li
                    key={idx}
                    className="text-slate-300 text-sm flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-slate-400 text-sm">
                Comprehensive study of CS fundamentals, engineering practices
                and modern web stacks.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-cyan-400"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full max-h-[90vh] object-contain rounded-2xl shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Journey;
