// components/main/projects.tsx
"use client";

import React, { useState, useEffect } from "react";
import { PROJECTS } from "@/constants";
import { ProjectsGrid, ProjectsGridItem } from "../ui/projects-grid";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof PROJECTS)[0] | null
  >(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleOpenModal = (project: (typeof PROJECTS)[0]) =>
    setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);
  const handleLoadMore = () => setVisibleCount((prev) => prev + 3);

  const displayedProjects = isMobile
    ? PROJECTS.slice(0, visibleCount)
    : PROJECTS;

  return (
    <section
      id="projects"
      className="pt-6 pb-24 px-4 sm:px-6 md:px-10 lg:px-20 font-sans relative"
    >
      {/* Section Heading */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          <span className="bg-gradient-to-b from-cyan-950 via-cyan-700 to-slate-200 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="w-full max-w-[50rem] h-2 relative mx-auto mt-2 ms-10 sm:ms-[5.2rem]">
          <div className="absolute left-1/12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute left-1/12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        </div>
        <p className="text-neutral-300 text-center mt-4 text-base sm:text-lg lg:text-xl font-semibold max-w-full sm:max-w-[600px] mx-auto">
          A showcase of my projects highlighting skills, creativity, and
          technologies I love working with.
        </p>
      </div>

      {/* Projects Grid */}
      <ProjectsGrid>
        {displayedProjects.map((project) => (
          <ProjectsGridItem
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            onClick={() => handleOpenModal(project)}
          />
        ))}

        {/* Inline placeholder card (only if all shown) */}
        {(!isMobile || visibleCount >= PROJECTS.length) && (
          <div className="flex items-center text-center justify-center rounded-2xl border-2 border-dashed border-cyan-500/40 text-white text-lg sm:text-xl font-semibold px-5 cursor-default hover:scale-105 transition-transform duration-300 md:col-span-1">
            New Projects Launching Soon!!!
          </div>
        )}
      </ProjectsGrid>

      {/* Load More Button (MOBILE ONLY) */}
      {isMobile && visibleCount < PROJECTS.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition sm:hidden"
          >
            Load More
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div
            className="border border-dashed border-cyan-500/40 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-4xl h-[90vh] sm:h-auto bg-[#0d0d0d]"
            style={{
              overflow: "auto",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE 10+
            }}
          >
            <div
              className="flex justify-end p-4 pb-0"
              style={{
                /* Hide scrollbar in WebKit browsers (Chrome, Safari) */
                scrollbarWidth: "none",
              }}
            >
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
                  className="shadow-2xl w-full object-contain rounded-lg max-h-[40vh] sm:max-h-[60vh] lg:max-h-[50vh]"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="text-lg sm:text-xl font-semibold text-white">
                  {selectedProject.title}
                </div>
                <div className="text-sm sm:text-base text-neutral-300 mb-2">
                  {selectedProject.description}
                </div>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#251f38] text-xs sm:text-sm font-semibold text-purple-500 rounded-full px-2 py-1"
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
          </div>
        </div>
      )}
    </section>
  );
};
