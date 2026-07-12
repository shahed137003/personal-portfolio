import React from "react";
import { FaHeart, FaCoffee, FaReact, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#06010e]/95 backdrop-blur-xl py-8 px-6 border-t border-[#A044FF]/30 text-gray-300">
      {/* Top glowing gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6A3093] via-[#A044FF] to-[#6E48AA] shadow-[0_0_15px_#A044FF]" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E0B3FF]">
            Shahd Mohamed
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            AI Engineer • Computer Vision & NLP • Frontend Web Developer
          </p>
        </div>

        {/* Center credits */}
        <div className="flex flex-col items-center gap-1.5 text-xs sm:text-sm">
          <p className="flex items-center gap-1.5">
            Crafted with{" "}
            <FaHeart className="text-pink-500 animate-pulse drop-shadow-[0_0_6px_#ff5c8a]" />{" "}
            and{" "}
            <FaCoffee className="text-amber-400 drop-shadow-[0_0_6px_#FFD700]" />
          </p>
          <p className="flex items-center gap-1.5 text-gray-400 text-xs">
            © {currentYear} Shahd Mohamed. All rights reserved.
          </p>
        </div>

        {/* Right social icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/shahed137003"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#130326] border border-[#A044FF]/40 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#A044FF] transition-all"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/shahd-mohamed-2ab8bb315"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#130326] border border-[#A044FF]/40 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#A044FF] transition-all"
          >
            <FaLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
