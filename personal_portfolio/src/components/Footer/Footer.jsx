import React from "react";
import { FaHeart, FaCoffee, FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isDarkMode } = useTheme();

  return (
    <footer className={`relative py-8 px-6 border-t backdrop-blur-xl transition-colors duration-500 ${
      isDarkMode
        ? "bg-[#180510]/95 border-[#FF007A]/30 text-gray-300"
        : "bg-[#fff1f2]/95 border-[#be123c]/20 text-[#4c0519]"
    }`}>
      {/* Top glowing gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E01E5A] via-[#FF007A] to-[#F43F5E] shadow-[0_0_15px_#FF007A]" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#FF007A] dark:from-white dark:to-[#FDA4AF]">
            Shahd Mohamed
          </h3>
          <p className={`text-xs mt-1 ${isDarkMode ? "text-gray-400" : "text-[#881337]"}`}>
            Frontend & AI Engineer • React & Intelligent UI Specialist
          </p>
        </div>

        {/* Center credits */}
        <div className="flex flex-col items-center gap-1.5 text-xs sm:text-sm">
          <p className="flex items-center gap-1.5 font-medium">
            Crafted with{" "}
            <FaHeart className="text-[#FF007A] animate-pulse drop-shadow-[0_0_6px_#FF007A]" />{" "}
            and{" "}
            <FaCoffee className="text-[#FDA4AF] drop-shadow-[0_0_6px_#FF007A]" />
          </p>
          <p className={`flex items-center gap-1.5 text-xs ${isDarkMode ? "text-gray-400" : "text-[#881337]"}`}>
            © {currentYear} Shahd Mohamed. All rights reserved.
          </p>
        </div>

        {/* Right social icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/shahed137003"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
              isDarkMode
                ? "bg-[#10030a] border-[#FF007A]/40 text-gray-300 hover:text-white hover:border-[#FF007A]"
                : "bg-white border-[#be123c]/50 text-[#4c0519] hover:text-[#BE123C] hover:border-[#BE123C]"
            }`}
          >
            <FaGithub className="text-base" />
          </a>
          <a
            href="https://www.linkedin.com/in/shahd-mohamed-883a4b248/"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
              isDarkMode
                ? "bg-[#10030a] border-[#FF007A]/40 text-gray-300 hover:text-white hover:border-[#FF007A]"
                : "bg-white border-[#be123c]/50 text-[#4c0519] hover:text-[#BE123C] hover:border-[#BE123C]"
            }`}
          >
            <FaLinkedin className="text-base" />
          </a>
        </div>
      </div>
    </footer>
  );
}
