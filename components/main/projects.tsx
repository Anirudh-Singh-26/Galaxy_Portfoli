// components/main/projects.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import { staggerContainer, staggerItem } from "@/lib/motion";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof PROJECTS)[0] | null
  >(null);

  const handleOpenModal = (project: (typeof PROJECTS)[0]) =>
    setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <motion.section
      id="projects"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="pt-6 pb-24 px-4 sm:px-6 md:px-10 lg:px-20 font-sans relative"
    >
      {/* Section Title */}
      <motion.div
        variants={staggerItem}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white">
            <span className="bg-gradient-to-t from-slate-200 via-cyan-700 to-cyan-950 bg-clip-text text-transparent">
              Projects & Achievements
            </span>
          </h2>
          <div className="w-[40rem] h-2 relative mx-auto mt-2">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>{" "}
        <p className="text-neutral-300 text-center mt-4 text-lg sm:text-xl font-semibold">
          A showcase of my projects highlighting skills, creativity, and
          technologies I love working with.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={staggerContainer}
        className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.title}
            variants={staggerItem}
            className="cursor-pointer"
            onClick={() => handleOpenModal(project)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full border border-cyan-500/20 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-shadow duration-300">
              <div className=" p-1 relative w-full h-52 sm:h-56 md:h-60 lg:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full rounded object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-5 flex flex-col justify-between gap-2">
                {/* Title */}
                <div className="text-lg font-semibold text-white">
                  {project.title}
                </div>

                {/* Description */}
                <div className="text-sm text-neutral-300 dark:text-neutral-400 mb-2 line-clamp-3">
                  {project.description}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#251f38] text-xs sm:text-sm font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Inline placeholder card */}
        <div className="flex items-center justify-center">
          <div className="h-80 flex text-center items-center justify-center rounded-2xl border border-dashed border-cyan-500/40 text-white text-lg font-semibold p-5 cursor-default transition-transform duration-300 md:col-span-1">
            More Projects On The Way →
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
        >
          <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.85 }}
            style={{ backgroundColor: "rgba(13, 13, 13, 0.86)" }}
            className="border border-dashed border-cyan-500/40 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
          >
            <div className="flex justify-end p-4 pb-0">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-cyan-500"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-4 lg:p-8 gap-6 lg:gap-10">
              <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className=" shadow-2xl w-full object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="text-lg font-semibold text-white">
                  {selectedProject.title}
                </div>
                <div className="text-sm text-neutral-300 dark:text-neutral-400 mb-2">
                  {selectedProject.description}
                </div>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 flex-wrap">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl text-center font-semibold transition-colors duration-300"
                    >
                      View Code
                    </a>
                  )}
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-center font-semibold transition-colors duration-300"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};
