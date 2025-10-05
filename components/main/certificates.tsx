"use client";

import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640); // Tailwind "sm"
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  // Decide how many to show
  const displayedCertificates = isMobile
    ? certificates.slice(0, visibleCount)
    : certificates;

  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20"
    >
      {/* Section Heading */}
      <div className="text-center mb-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          <span className="bg-gradient-to-t from-indigo-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            Certificates & Achievements
          </span>
        </h2>
        <div className="w-full max-w-[40rem] h-2 relative mx-auto ms-10 sm:ms-[5.2rem]">
          <div className="absolute left-1/12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute left-1/12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        </div>
        <p className="text-neutral-300 text-center mt-4 text-base sm:text-lg lg:text-xl font-semibold max-w-full sm:max-w-[600px] mx-auto">
          A collection of milestones and recognitions that reflect dedication,
          growth, and continuous learning.
        </p>
      </div>

      {/* BentoGrid Layout */}
      <BentoGrid className="max-w-7xl w-full gap-6 sm:gap-8 lg:gap-10">
        {displayedCertificates.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(item.image)}
              />
            }
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}

        {/* Inline placeholder card (only if all shown) */}
        {(!isMobile || visibleCount >= certificates.length) && (
          <div className="text-center flex items-center justify-center rounded-2xl border-2 border-dashed border-cyan-500/40 text-white text-lg sm:text-xl font-semibold p-5 cursor-default hover:scale-105 transition-transform duration-300 md:col-span-1">
            More Certificates Coming Soon →
          </div>
        )}
      </BentoGrid>

      {/* Load More Button (MOBILE ONLY) */}
      {isMobile && visibleCount < certificates.length && (
        <button
          onClick={handleLoadMore}
          className="mt-6 px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition sm:hidden"
        >
          Load More
        </button>
      )}

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
