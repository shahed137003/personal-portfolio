import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane, FaBolt, FaReact, FaBrain, FaCode, FaChartLine } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroSection.css";
import { useTheme } from "../../context/ThemeContext";

export default function HeroSection() {
  const { isDarkMode } = useTheme();
  const [selectedCapability, setSelectedCapability] = useState(0);

  const capabilities = [
    {
      id: 0,
      label: "🧠 AI Web Applications",
      title: "Intelligent AI Integration",
      desc: "Real-time Sign Language Translation, Code Assistant AI Chatbots & ML Model Web Apps.",
      tag: "Sign Language & AI Chatbots",
    },
    {
      id: 1,
      label: "⚡ React 18 Architecture",
      title: "High-Performance SPA",
      desc: "Sub-50ms interaction speed, modular state management, and 100/100 Web Vitals.",
      tag: "100/100 Web Vitals Score",
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden transition-colors duration-500"
      id="homeSection"
    >
      {/* Background Ambient Rose Glows */}
      <div
        className={`absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none ${
          isDarkMode ? "bg-[#FF007A]/20 animate-pulse" : "bg-[#fda4af]/25"
        }`}
      />
      <div
        className={`absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none ${
          isDarkMode ? "bg-[#E01E5A]/15" : "bg-[#fecdd3]/20"
        }`}
      />

      {/* ATTRACTIVE FLOATING ELEMENTS (Floating 3D Tech Capsules Matrix) */}
      {/* 1. React 18 Core */}
      <motion.div
        className={`absolute left-4 sm:left-10 top-24 hidden md:flex items-center gap-2.5 px-4 py-2 rounded-2xl border backdrop-blur-md shadow-xl pointer-events-none ${
          isDarkMode
            ? "bg-[#10030a]/80 border-[#FF007A]/40 text-[#FDA4AF] shadow-[0_0_20px_rgba(255,0,122,0.25)]"
            : "bg-white/85 border-[#be123c]/50 text-[#BE123C] shadow-[0_8px_25px_rgba(225,29,72,0.12)]"
        }`}
        animate={{ y: [0, -16, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaReact className="text-xl animate-spin text-[#FF007A]" style={{ animationDuration: "10s" }} />
        <span className="text-xs font-bold">React 18 Core</span>
      </motion.div>

      {/* 2. AI Models */}
      <motion.div
        className={`absolute right-4 sm:right-10 top-28 hidden md:flex items-center gap-2.5 px-4 py-2 rounded-2xl border backdrop-blur-md shadow-xl pointer-events-none ${
          isDarkMode
            ? "bg-[#10030a]/80 border-[#FF007A]/40 text-[#FDA4AF] shadow-[0_0_20px_rgba(255,0,122,0.25)]"
            : "bg-white/85 border-[#be123c]/50 text-[#BE123C] shadow-[0_8px_25px_rgba(225,29,72,0.12)]"
        }`}
        animate={{ y: [0, 18, 0], rotate: [0, -3, 3, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaBrain className="text-xl text-[#FF007A]" />
        <span className="text-xs font-bold">AI Models</span>
      </motion.div>

      {/* 3. 100/100 Web Vitals */}
      <motion.div
        className={`absolute right-12 sm:right-28 top-56 hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-2xl border backdrop-blur-md shadow-xl pointer-events-none ${
          isDarkMode
            ? "bg-[#10030a]/80 border-[#FF007A]/40 text-[#FF007A] shadow-[0_0_20px_rgba(255,0,122,0.25)]"
            : "bg-white/85 border-[#be123c]/50 text-[#BE123C] shadow-[0_8px_25px_rgba(225,29,72,0.12)]"
        }`}
        animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaChartLine className="text-lg text-[#FF007A]" />
        <span className="text-xs font-bold">100/100 Speed</span>
      </motion.div>

      {/* 4. Tailwind CSS Systems */}
      <motion.div
        className={`absolute right-8 sm:right-16 bottom-28 hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-2xl border backdrop-blur-md shadow-xl pointer-events-none ${
          isDarkMode
            ? "bg-[#10030a]/80 border-[#FF007A]/40 text-[#FDA4AF] shadow-[0_0_20px_rgba(255,0,122,0.25)]"
            : "bg-white/85 border-[#be123c]/50 text-[#BE123C] shadow-[0_8px_25px_rgba(225,29,72,0.12)]"
        }`}
        animate={{ y: [0, 16, 0], rotate: [0, -3, 3, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiTailwindcss className="text-lg text-[#FF007A]" />
        <span className="text-xs font-bold">Tailwind CSS</span>
      </motion.div>

      {/* 5. Clean Component UI */}
      <motion.div
        className={`absolute left-8 sm:left-16 bottom-28 hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-2xl border backdrop-blur-md shadow-xl pointer-events-none ${
          isDarkMode
            ? "bg-[#10030a]/80 border-[#FF007A]/40 text-[#FDA4AF] shadow-[0_0_20px_rgba(255,0,122,0.25)]"
            : "bg-white/85 border-[#be123c]/50 text-[#BE123C] shadow-[0_8px_25px_rgba(225,29,72,0.12)]"
        }`}
        animate={{ y: [0, -14, 0], rotate: [0, -2, 2, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaCode className="text-lg text-[#FF007A]" />
        <span className="text-xs font-bold">Clean Component UI</span>
      </motion.div>

      {/* Single Ultra-Clean Centered Hero Container */}
      <div className="relative z-10 max-w-3xl w-full mx-auto flex flex-col items-center text-center space-y-6">
        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[92px] font-extrabold font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-[#FF007A] to-[#E01E5A] dark:from-white dark:via-[#FDA4AF] dark:to-[#FF007A] leading-none tracking-tight drop-shadow-[0_0_30px_rgba(255,0,122,0.45)]"
        >
          Shahd Mohamed
        </motion.h1>

        {/* Typing SVG Subtitle */}
        <div className="relative overflow-hidden inline-flex items-center justify-center">
          <img
            src={`https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&duration=3000&pause=1000&color=${
              isDarkMode ? "FDA4AF" : "BE123C"
            }&center=true&vCenter=true&width=520&lines=Frontend+%26+AI+Engineer;React+18+%26+AI-Powered+Apps;Machine+Learning+Integration;Smart+UI%2FUX+Design+Systems`}
            alt="Typing SVG"
            className="relative max-w-full drop-shadow-[0_0_12px_#FF007A]"
          />
        </div>

        {/* Minimal Bio */}
        <p
          className={`text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl ${
            isDarkMode ? "text-gray-300" : "text-[#4c0519]"
          }`}
        >
          Specializing in crafting intelligent, high-performance React web applications, AI-powered interfaces, and modern frontend component systems.
        </p>

        {/* Interactive AI & Frontend Live Capability Selector */}
        <div className="w-full max-w-xl">
          {/* Modern Capsule Selector */}
          <div className="flex justify-center gap-2 flex-wrap mb-3">
            {capabilities.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedCapability(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-300 border ${
                  selectedCapability === item.id
                    ? "bg-gradient-to-r from-[#E01E5A] via-[#F43F5E] to-[#FF007A] text-[#180510] border-white shadow-[0_0_20px_rgba(255,0,122,0.6)] scale-105"
                    : isDarkMode
                    ? "bg-[#10030a]/80 text-[#FDA4AF] border-[#FF007A]/30 hover:border-[#FF007A]"
                    : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/50 hover:border-[#BE123C]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Sleek Feature Spotlight Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCapability}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className={`p-4 rounded-2xl border backdrop-blur-xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-left ${
                isDarkMode
                  ? "bg-[#10030a]/90 border-[#FF007A]/40 text-white shadow-[0_0_25px_rgba(255,0,122,0.2)]"
                  : "bg-white/95 border-[#be123c]/60 text-[#4c0519] shadow-[0_8px_25px_rgba(225,29,72,0.12)]"
              }`}
            >
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#FF007A] dark:text-[#FDA4AF]">
                  {capabilities[selectedCapability].title}
                </h4>
                <p className={`text-xs mt-1 font-medium ${
                  isDarkMode ? "text-gray-300" : "text-[#4c0519]"
                }`}>
                  {capabilities[selectedCapability].desc}
                </p>
              </div>

              <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold shrink-0 border ${
                isDarkMode
                  ? "bg-[#180510] text-[#FF007A] border-[#FF007A]/40"
                  : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/50"
              }`}>
                {capabilities[selectedCapability].tag}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
          {/* Explore Projects */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 rounded-full text-[#180510] font-extrabold text-sm sm:text-base flex items-center gap-2.5 bg-gradient-to-r from-[#E01E5A] via-[#F43F5E] to-[#FF007A] shadow-[0_0_25px_rgba(255,0,122,0.6)] hover:shadow-[0_0_35px_rgba(255,0,122,0.85)] transition-all"
            onClick={() => {
              const el = document.getElementById("projectSection");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <FaBolt /> Explore Projects
          </motion.button>

          {/* Direct Contact */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-7 py-3.5 rounded-full font-bold text-sm sm:text-base border transition-all flex items-center gap-2 ${
              isDarkMode
                ? "bg-[#10030a] border-[#FF007A] text-[#FDA4AF] hover:bg-[#FF007A] hover:text-[#180510]"
                : "bg-[#ffe4e6] border-[#be123c] text-[#BE123C] hover:bg-[#be123c] hover:text-white"
            }`}
            onClick={() => {
              const el = document.getElementById("contactSection");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <FaPaperPlane className="text-sm" /> Direct Contact
          </motion.button>

          {/* GitHub */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-3.5 rounded-full border flex items-center gap-2 font-bold text-sm transition-all ${
              isDarkMode
                ? "bg-[#180510] border-[#FF007A]/40 text-white hover:border-[#FF007A]"
                : "bg-white border-[#be123c]/60 text-[#4c0519] hover:border-[#BE123C]"
            }`}
            onClick={() => window.open("https://github.com/shahed137003", "_blank")}
          >
            <FaGithub className="text-lg text-[#FF007A]" /> GitHub
          </motion.button>

          {/* LinkedIn */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-3.5 rounded-full border flex items-center gap-2 font-bold text-sm transition-all ${
              isDarkMode
                ? "bg-[#180510] border-[#FF007A]/40 text-white hover:border-[#FF007A]"
                : "bg-white border-[#be123c]/60 text-[#4c0519] hover:border-[#BE123C]"
            }`}
            onClick={() =>
              window.open("https://www.linkedin.com/in/shahd-mohamed-883a4b248/", "_blank")
            }
          >
            <FaLinkedin className="text-lg text-[#FF007A]" /> LinkedIn
          </motion.button>
        </div>
      </div>
    </div>
  );
}
