// components/main/contact.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideInFromTop,
  staggerContainer,
  staggerItem,
  buttonHover,
  viewportSettings,
} from "@/lib/motion";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <motion.section
      id="contact"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 md:px-12 lg:px-20 pt-6 pb-12 sm:pb-16 lg:pb-24"
    >
      {/* Heading */}
      <motion.h2
        variants={slideInFromTop(0.2)}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center"
      >
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white">
            <span className="bg-gradient-to-t from-slate-200 via-cyan-700 to-cyan-950 bg-clip-text text-transparent">
              Let’s Connect
            </span>
          </h2>
          <div className="w-full max-w-[40rem] h-2 relative mx-auto mt-2 ms-10 sm:ms-[5.2rem]">
            <div className="absolute left-1/12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute left-1/12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          </div>
        </div>
        <p className="text-neutral-300 text-center mt-4 text-base sm:text-lg lg:text-xl font-semibold max-w-full sm:max-w-[600px] mx-auto">
          Open to collaborations, opportunities, or just a friendly chat — let’s
          build something meaningful together.
        </p>
      </motion.h2>

      {/* Contact Options */}
      <motion.div
        variants={staggerContainer}
        className="  flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl items-center justify-center"
      >
        {/* Email */}
        <motion.button
          variants={staggerItem}
          type="button"
          onClick={() => {
            setShowForm((prev) => !prev);
            setSent(false);
          }}
          {...buttonHover}
          className={`group relative flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-[260px] lg:w-[280px] rounded-2xl border shadow-lg transition-all duration-300 overflow-hidden 
            ${
              showForm
                ? "border-red-500/50 backdrop-blur-md"
                : "border-[#7042f88b] backdrop-blur-md hover:border-red-500/50"
            }`}
        >
          <motion.div
            animate={{ rotate: showForm ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <MdEmail className="text-2xl sm:text-3xl text-red-400 group-hover:scale-110 transition-transform" />
          </motion.div>
          <span className="text-sm sm:text-base text-white font-medium">
            {showForm ? "Close Form" : "Email Me"}
          </span>
        </motion.button>

        {/* GitHub */}
        <motion.a
          variants={staggerItem}
          href="https://github.com/Anirudh-Singh-26"
          target="_blank"
          rel="noopener noreferrer"
          {...buttonHover}
          className="group relative flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-[260px] lg:w-[280px] rounded-2xl border border-[#7042f88b] backdrop-blur-md shadow-lg hover:border-green-500/70 transition-all duration-300 overflow-hidden"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <RxGithubLogo className="text-2xl sm:text-3xl text-green-400 group-hover:scale-110 transition-transform" />
          </motion.div>
          <span className="text-sm sm:text-base text-white font-medium">
            GitHub
          </span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          variants={staggerItem}
          href="https://www.linkedin.com/in/anirudh-singh26/"
          target="_blank"
          rel="noopener noreferrer"
          {...buttonHover}
          className="group relative flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-[260px] lg:w-[280px] rounded-2xl border border-[#7042f88b] backdrop-blur-md shadow-lg hover:border-cyan-500/70 transition-all duration-300 overflow-hidden"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <RxLinkedinLogo className="text-2xl sm:text-3xl text-blue-400 group-hover:scale-110 transition-transform" />
          </motion.div>
          <span className="text-sm sm:text-base text-white font-medium">
            LinkedIn
          </span>
        </motion.a>
      </motion.div>

      {/* Email Form */}
      <AnimatePresence mode="wait">
        {showForm && (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-6 sm:mt-8 lg:mt-10 w-full max-w-md sm:max-w-lg flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 rounded-2xl border border-cyan-500/40 shadow-2xl backdrop-blur-sm relative overflow-hidden"
          >
            <label className="sr-only" htmlFor="email">
              Your Email
            </label>
            <motion.input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              whileFocus={{ scale: 1.02, boxShadow: "0 0 8px cyan-500/10" }}
              className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-black text-white border border-cyan-500/10 focus:outline-none focus:border-cyan-500/10 transition-all duration-300 relative z-10 text-sm sm:text-base"
            />

            <label className="sr-only" htmlFor="message">
              Your Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              placeholder="Type your message..."
              rows={4}
              required
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileFocus={{ scale: 1.02, boxShadow: "0 0 8px cyan-500/10" }}
              className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-black text-white border border-cyan-500/10 focus:outline-none focus:border-cyan-500/10 transition-all duration-300 relative z-10 text-sm sm:text-base resize-none"
            />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 relative z-10 w-full">
              <motion.button
                type="submit"
                disabled={loading}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                {...buttonHover}
                className={`px-5 sm:px-6 py-2 sm:py-3 rounded-2xl border border-cyan-500/30 backdrop-blur-md shadow-lg transition-all duration-300 text-white font-semibold relative overflow-hidden text-sm sm:text-base w-full sm:w-auto
                  ${
                    loading
                      ? "cursor-not-allowed opacity-70"
                      : "hover:border-cyan-500/30"
                  }`}
              >
                <span className="relative z-10">
                  {loading ? "Sending..." : "Send Message"}
                </span>
              </motion.button>

              <AnimatePresence>
                {sent && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="text-green-400 text-sm font-medium text-center"
                  >
                    ✅ Message sent successfully!
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
