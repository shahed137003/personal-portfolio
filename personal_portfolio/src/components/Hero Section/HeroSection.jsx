import React from "react";
import { FaGithub, FaLinkedin, FaFolderOpen, FaHeart, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import "./HeroSection.css";
import { RoboAnimation } from "../Glare/RoboAnimation";

export default function HeroSection() {
  const stats = [
    { label: "Computer Engineering", value: "Ain Shams Univ." },
    { label: "Core Specialties", value: "AI, NLP & Vision" },
    { label: "Full-Stack Web", value: "React & .NET / Py" },
    { label: "Projects Completed", value: "15+ High Impact" },
  ];

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center items-start pt-28 pb-16 px-6 sm:px-12 lg:px-24 overflow-hidden"
      id="homeSection"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#6E48AA]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#9D50BB]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-white relative z-10 max-w-5xl text-left"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1b0833]/80 to-[#2c0e4f]/80 border border-[#A044FF]/40 text-xs sm:text-sm font-medium text-[#E0B3FF] mb-6 shadow-[0_0_15px_rgba(160,68,255,0.3)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>✨ Open for AI Engineering & Full-Stack Opportunities</span>
        </motion.div>

        {/* Name Header & Robo */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-serif italic bg-clip-text text-transparent bg-gradient-to-r from-[#C873FF] via-[#A044FF] to-[#6A3093] leading-tight drop-shadow-[0_0_15px_rgba(160,68,255,0.4)]"
          >
            Shahd Mohamed
          </motion.h1>

          <motion.div
            className="flex items-center"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 3, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <RoboAnimation size={56} className="sm:size-48 md:size-64" />
          </motion.div>
        </div>

        {/* Floating Heart */}
        <motion.div
          className="absolute z-20 text-3xl sm:text-5xl drop-shadow-lg cursor-pointer right-6 top-8 sm:right-16 sm:top-12"
          animate={{
            y: [0, -16, 0],
            scale: [1, 1.15, 1],
            color: ["#A044FF", "#6A3093", "#C873FF"],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "easeInOut",
          }}
        >
          <FaHeart />
        </motion.div>

        {/* Typing SVG Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden inline-flex items-center rounded-2xl py-2 my-2"
        >
          <img
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=E0B3FF&center=false&vCenter=true&width=480&lines=Computer+Engineering+Student+%40+ASU;AI+%26+Computer+Vision+Engineer;Frontend+Web+%26+Mobile+Developer;Creative+Problem+Solver"
            alt="Typing SVG"
            className="relative max-w-full drop-shadow-[0_0_10px_#BF5AE0]"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300 space-y-2 leading-relaxed max-w-3xl"
        >
          <p>
            I’m a passionate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0B3FF] to-[#A044FF] font-semibold">
              AI Engineer
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0B3FF] to-[#A044FF] font-semibold">
              Frontend Web Developer
            </span>
            , specializing in Computer Vision, Natural Language Processing, and full-stack interactive applications.
          </p>
          <p className="text-gray-400">
            My work bridges cutting-edge AI algorithms with sleek, modern web experiences—transforming complex neural models into intuitive user-centric software.
          </p>
        </motion.div>

        {/* Stats Glassmorphism Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-8"
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#110321]/70 border border-[#A044FF]/30 backdrop-blur-md hover:border-[#A044FF] transition-all duration-300 shadow-md group"
            >
              <div className="text-xs text-gray-400 group-hover:text-purple-200 transition-colors">
                {item.label}
              </div>
              <div className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E0B3FF] mt-0.5">
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4 mt-2"
        >
          {/* View My Work */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-6 py-3 rounded-full text-white flex items-center gap-2.5 bg-gradient-to-r from-[#6A3093] to-[#A044FF] font-semibold shadow-[0_0_20px_rgba(160,68,255,0.5)] hover:shadow-[0_0_30px_rgba(160,68,255,0.8)] transition-all"
            onClick={() => {
              const el = document.getElementById("projectSection");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <FaFolderOpen /> View My Projects
          </motion.button>

          {/* Contact CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full font-semibold border border-[#A044FF] text-[#E0B3FF] hover:bg-[#A044FF]/20 flex items-center gap-2 transition-all shadow-sm"
            onClick={() => {
              const el = document.getElementById("contactSection");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <FaPaperPlane className="text-sm" /> Get In Touch
          </motion.button>

          {/* GitHub */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 rounded-full border border-white/20 hover:border-[#A044FF] text-gray-200 hover:text-white flex items-center gap-2 bg-black/30 backdrop-blur-md transition-all"
            onClick={() => window.open("https://github.com/shahed137003", "_blank")}
          >
            <FaGithub className="text-lg" /> GitHub
          </motion.button>

          {/* LinkedIn */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 rounded-full border border-white/20 hover:border-[#A044FF] text-gray-200 hover:text-white flex items-center gap-2 bg-black/30 backdrop-blur-md transition-all"
            onClick={() =>
              window.open("https://www.linkedin.com/in/shahd-mohamed-2ab8bb315", "_blank")
            }
          >
            <FaLinkedin className="text-lg text-blue-400" /> LinkedIn
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
