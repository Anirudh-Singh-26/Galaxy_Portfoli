"use client";

import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20"
    >
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white">
          <span className="bg-gradient-to-t from-slate-200 via-cyan-700 to-cyan-950 bg-clip-text text-transparent">
            Certificates & Achievements
          </span>
        </h2>
        <div className="w-[40rem] h-2 relative mx-auto mt-2">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
      </div>
      <p className="text-neutral-300 text-center mt-4 text-lg sm:text-xl font-semibold">
        A collection of milestones and recognitions that reflect dedication,
        growth, and continuous learning.
      </p>

      {/* BentoGrid Layout */}
      <BentoGrid className="max-w-7xl w-full gap-6 sm:gap-8 lg:gap-10">
        {certificates.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 p-2 sm:h-66 md:h-74 object-cover rounded-2xl cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              />
            }
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}

        {/* Inline placeholder card */}
        <div className="flex text-center items-center justify-center rounded-2xl border border-dashed border-cyan-500/40 text-white text-lg font-semibold p-5 cursor-default hover:scale-105 transition-transform duration-300 md:col-span-1">
          More Certificates Coming Soon →
        </div>
      </BentoGrid>

      {/* Popup Modal */}
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
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

const certificates = [
  {
    title: "Hackathon Participation",
    description:
      "Built innovative projects under time constraints, demonstrating teamwork, creativity, and coding efficiency.",
    image: "/My_Data/buildathon.jpg",
  },
  {
    title: "Node.js Advanced Concepts",
    description:
      "Mastered advanced Node.js topics including scaling applications, middleware design, and advanced API patterns.",
    image: "/My_Data/Node_page-0001.jpg",
  },
  {
    title: "Virtual Internship – Forage",
    description:
      "Participated in an industry-simulated internship focused on data analytics, problem-solving, and business insights.",
    image: "/My_Data/forage_page-0001.jpg",
  },
  {
    title: "Java Programming Certificate",
    description:
      "Certified by GeeksforGeeks in Java programming, covering OOP, data structures, and algorithmic problem solving.",
    image: "/My_Data/GFG Java_page-0001.jpg",
  },
  {
    title: "Git & GitHub Workshop",
    description:
      "Completed workshop on version control, collaboration workflows, GitHub Actions, and team-based project management.",
    image: "/My_Data/Git&Github_page-0001.jpg",
  },
  {
    title: "MERN Stack Development",
    description:
      "Hands-on training in full-stack development using MongoDB, Express.js, React, and Node.js for real-world projects.",
    image: "/My_Data/MERN_page-0001.jpg",
  },
  {
    title: "Microsoft Azure Fundamentals",
    description:
      "Earned Azure Fundamentals certification covering cloud concepts, core services, and security best practices.",
    image: "/My_Data/Azure_page-0001.jpg",
  },
  {
    title: "Web Development",
    description:
      "Comprehensive certification in modern web development covering HTML, CSS, JavaScript, and responsive design.",
    image: "/My_Data/Web Development_page-0001.jpg",
  },
  {
    title: "Node.js Foundations",
    description:
      "Completed the foundational Node.js course covering backend development, REST APIs, and asynchronous programming.",
    image:
      "/My_Data/Anirudh Singh Rathore_Node.js Foundations Course (1)_page-0001.jpg",
  },
];


