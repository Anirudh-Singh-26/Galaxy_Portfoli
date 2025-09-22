"use client";

import { useEffect } from "react";
import { AboutMe } from "@/components/main/aboutMe";
import { Journey } from "@/components/main/education";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Certificates } from "@/components/main/certificates";
import { Contact } from "@/components/main/contact";
import { Highlights } from "@/components/main/quick-stats";

export default function Home() {
  // 🔥 This ensures we always start at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="h-full w-full">
      {/* 1. Hero Section */}
      <div className="flex flex-col items-center w-full">
        <Hero />

        {/* 2. About Me */}
        <section className="w-full max-w-8xl px-4 sm:px-6 md:px-12 lg:px-20 mt-12 sm:mt-16 lg:mt-20">
          <AboutMe />
        </section>

        {/* 3. Highlights / Quick Stats */}
        <section className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 pt-12 pb-6 sm:py-16 lg:pt-12 pb-6">
          <Highlights />
        </section>

        {/* 4. Skills */}
        <section className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:pt-10">
          <Skills />
        </section>

        {/* 6. Education */}
        <section className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20">
          <Journey />
        </section>

        {/* 7. Certificates */}
        <section className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20">
          <Certificates />
        </section>

        {/* 8. Projects */}
        <section className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20">
          <Projects />
        </section>

        {/* 10. Contact */}
        <section className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20">
          <Contact />
        </section>
      </div>
    </main>
  );
}
