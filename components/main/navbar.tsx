"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#03001427] backdrop-blur-md shadow-lg z-50">
      <div className="flex items-center justify-between h-[60px] sm:h-[65px] md:h-[70px] px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Logo & Name */}
        <Link
          href="#about-me"
          className="flex items-center gap-2 ms-5 sm:ms-0"
          onClick={closeMenu}
        >
          <Image
            src="/My_Data/rocket.png"
            alt="Logo"
            width={20}
            height={20}
            draggable={false}
            className="cursor-pointer sm:w-10 sm:h-10 md:w-[35px] md:h-[35px]"
          />
          <span className="text-white font-bold tracking-wide text-sm md:text-base ps-12 sm:ps-5">
            Anirudh Singh Rathore
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-6 2xl:gap-8 bg-[rgba(3,0,20,0.37)] px-6 2xl:px-8 py-2 rounded-full text-gray-200">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="hover:text-[rgb(112,66,248)] transition font-medium whitespace-nowrap text-sm 2xl:text-base"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Social Links - Desktop */}
        <div className="hidden xl:flex items-center gap-4 2xl:gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Icon className="h-5 w-5 2xl:h-6 2xl:w-6 text-white hover:text-[rgb(112,66,248)] transition" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white text-2xl sm:text-3xl flex items-center justify-center p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 h-screen bg-[#030014]/95 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center text-gray-300 xl:hidden z-50"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 sm:top-5 right-4 sm:right-6 text-white text-2xl sm:text-3xl"
              onClick={closeMenu}
            >
              ✖
            </button>

            {/* Mobile Links */}
            <div className="flex flex-col items-center space-y-4 sm:space-y-6 text-base sm:text-lg font-medium text-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  onClick={closeMenu}
                  className="hover:text-[rgb(112,66,248)] transition py-2 px-4 rounded-lg hover:bg-[rgb(112,66,248)]/10"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-2 rounded-full hover:bg-[rgb(112,66,248)]/10 transition"
                  onClick={closeMenu}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white hover:text-[rgb(112,66,248)] transition" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
