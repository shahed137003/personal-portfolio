import React, { useState } from "react";
import "./About.css";
import { motion, AnimatePresence } from "framer-motion";
import personalImage from "../../assets/personalimage.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaBrain,
  FaLaptopCode,
  FaGraduationCap,
  FaShieldAlt,
  FaCheckCircle,
  FaCrown,
  FaCompass,
} from "react-icons/fa";
import { SiReact, SiPython, SiPytorch, SiTailwindcss, SiCplusplus, SiGit } from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";

export default function About() {
  const [copiedLabel, setCopiedLabel] = useState(null);
  const [activeTab, setActiveTab] = useState("ai");
  const { isDarkMode } = useTheme();

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    toast.success(`${label} copied to clipboard!`, {
      position: "bottom-right",
      autoClose: 2000,
      theme: isDarkMode ? "dark" : "light",
    });
    setTimeout(() => setCopiedLabel(null), 2500);
  };

  const perspectives = {
    ai: {
      title: "AI & NLP Systems Engineering",
      subtitle: "Cellula Tech & Research",
      icon: <FaBrain className="text-xl text-[#FF007A]" />,
      desc: "Specialized in fine-tuning Transformer architectures (BERT, DistilBERT, LLaMA Guard v2) for content moderation, safety guardrails, and real-time inference.",
      skills: ["PyTorch", "Transformers", "LLaMA Guard", "OpenCV", "NLP", "Python 3"],
    },
    frontend: {
      title: "Frontend SPA Architecture",
      subtitle: "React 18 & Production Web",
      icon: <FaLaptopCode className="text-xl text-[#FF007A]" />,
      desc: "Architecting high-performance client-side web applications using React 18, Vite, state management, custom hooks, and smooth Framer Motion UI micro-interactions.",
      skills: ["React 18", "JavaScript ES6+", "Tailwind CSS", "Framer Motion", "REST APIs", "Vite"],
    },
    degree: {
      title: "Ain Shams Computer Engineering",
      subtitle: "Faculty of Engineering Candidate",
      icon: <FaGraduationCap className="text-xl text-[#FF007A]" />,
      desc: "Formal engineering foundation in data structures, object-oriented design, multithreaded OS scheduling algorithms, and capstone software architecture.",
      skills: ["C++", "Qt Framework", "Data Structures", "Algorithms", "Software Architecture"],
    },
  };

  const currentPerspective = perspectives[activeTab] || perspectives.ai;

  return (
    <section
      className={`relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16 transition-colors duration-500 ${
        isDarkMode ? "text-white" : "text-[#2e0854]"
      }`}
      id="aboutSection"
    >
      <ToastContainer />

      {/* Ambient Neon Glows */}
      <div
        className={`absolute top-1/4 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
          isDarkMode ? "bg-[#FF007A]/20" : "bg-[#fda4af]/20"
        }`}
      />
      <div
        className={`absolute bottom-1/3 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          isDarkMode ? "bg-[#E01E5A]/15" : "bg-[#fecdd3]/15"
        }`}
      />

      {/* Section Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span
          className={`inline-block px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 uppercase tracking-wider ${
            isDarkMode
              ? "bg-[#10030a] border border-[#FF007A]/50 text-[#FDA4AF] shadow-[0_0_20px_rgba(255,0,122,0.35)]"
              : "bg-[#ffe4e6] border border-[#be123c]/30 text-[#BE123C]"
          }`}
        >
          ✦ Engineering Showcase & Biography ✦
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-[68px] font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-[#FF007A] to-[#E01E5A] dark:from-white dark:via-[#FDA4AF] dark:to-[#FF007A] tracking-wide">
          About Me
        </h1>
        <p
          className={`max-w-2xl mx-auto text-sm sm:text-base mt-3 ${
            isDarkMode ? "text-gray-300" : "text-[#881337]"
          }`}
        >
          Ain Shams Computer Engineering Student • AI Systems (NLP & Computer Vision) • React 18 Web Architecture
        </p>
      </motion.div>

      {/* -------- CLEAN CARDLESS 2-COLUMN LAYOUT -------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN (5 Cols) – Large Profile Portrait + Quick Contacts */}
        <motion.div
          className="lg:col-span-5 flex flex-col items-center text-center space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Large Profile Picture with 360° Rotating Conic Neon Gradient Border */}
          <div className="relative p-[4px] rounded-3xl group/img overflow-hidden cursor-pointer shadow-2xl">
            {/* 360° Rotating Neon Border Beam */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className={`absolute -inset-[100%] rounded-full opacity-90 group-hover/img:opacity-100 transition-opacity ${
                isDarkMode
                  ? "bg-[conic-gradient(from_0deg,#FF007A,#FDA4AF,#E01E5A,#FF007A)] shadow-[0_0_40px_rgba(255,0,122,0.6)]"
                  : "bg-[conic-gradient(from_0deg,#be123c,#f43f5e,#fb7185,#be123c)] shadow-[0_0_30px_rgba(225,29,72,0.4)]"
              }`}
            />

            {/* Inner Large Image Frame */}
            <div
              className={`relative w-72 h-72 sm:w-88 sm:h-88 lg:w-[380px] lg:h-[380px] rounded-[22px] overflow-hidden z-10 ${
                isDarkMode ? "bg-[#0b0207]" : "bg-white"
              }`}
            >
              <img
                src={personalImage}
                alt="Shahd Mohamed"
                style={{ objectPosition: "center 0%" }}
                className="w-full h-full object-cover scale-[1.35] transform transition-transform duration-700 group-hover/img:scale-[1.44]"
              />
            </div>
          </div>

          {/* Name & Academic Title */}
          <div>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold ${
                isDarkMode ? "text-white" : "text-[#4c0519]"
              }`}
            >
              Shahd Mohamed
            </h2>
            <p
              className={`text-sm font-bold mt-1 ${
                isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
              }`}
            >
              AI & Frontend Engineer • Ain Shams University Student
            </p>
            <p
              className={`text-xs mt-1 ${
                isDarkMode ? "text-gray-400" : "text-[#881337]"
              }`}
            >
              Cairo, Egypt • Faculty of Engineering
            </p>
          </div>

          {/* Quick Contact Action Pills */}
          <div className="w-full max-w-md space-y-3 pt-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => copyToClipboard("Shahd137003@gmail.com", "Email")}
              className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                isDarkMode
                  ? "bg-[#10030a]/80 border-[#FF007A]/35 hover:border-[#FDA4AF]"
                  : "bg-[#ffe4e6] border-[#be123c]/30 hover:border-[#e11d48]"
              }`}
            >
              <div className="flex items-center gap-3">
                <MdEmail className={`text-xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />
                <div className="text-left">
                  <div className={`text-[10px] uppercase font-bold ${isDarkMode ? "text-gray-400" : "text-[#881337]"}`}>
                    Email Address
                  </div>
                  <div className={`text-xs sm:text-sm font-bold truncate ${isDarkMode ? "text-white" : "text-[#4c0519]"}`}>
                    Shahd137003@gmail.com
                  </div>
                </div>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded-xl font-bold ${
                  isDarkMode
                    ? "bg-[#180510] text-[#FDA4AF] border border-[#FF007A]/40"
                    : "bg-[#fecdd3] text-[#BE123C]"
                }`}
              >
                {copiedLabel === "Email" ? "Copied!" : "Copy"}
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => copyToClipboard("+20 1092968238", "Phone Number")}
              className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                isDarkMode
                  ? "bg-[#10030a]/80 border-[#FF007A]/35 hover:border-[#FDA4AF]"
                  : "bg-[#ffe4e6] border-[#be123c]/30 hover:border-[#e11d48]"
              }`}
            >
              <div className="flex items-center gap-3">
                <MdPhone className={`text-xl ${isDarkMode ? "text-[#FF007A]" : "text-[#BE123C]"}`} />
                <div className="text-left">
                  <div className={`text-[10px] uppercase font-bold ${isDarkMode ? "text-gray-400" : "text-[#881337]"}`}>
                    Phone Number
                  </div>
                  <div className={`text-xs sm:text-sm font-bold ${isDarkMode ? "text-white" : "text-[#4c0519]"}`}>
                    +20 1092968238
                  </div>
                </div>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded-xl font-bold ${
                  isDarkMode
                    ? "bg-[#180510] text-[#FDA4AF] border border-[#FF007A]/40"
                    : "bg-[#fecdd3] text-[#BE123C]"
                }`}
              >
                {copiedLabel === "Phone Number" ? "Copied!" : "Copy"}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN (7 Cols) – Rich Definition & Perspective Switcher */}
        <motion.div
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Status Indicator & Title */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FDA4AF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF007A]"></span>
              </span>
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                }`}
              >
                Available for Engineering & AI Roles
              </span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight ${
                isDarkMode ? "text-white" : "text-[#4c0519]"
              }`}
            >
              Building Intelligent AI Models & Modern Web Architecture
            </h2>
          </div>

          {/* Definition Paragraphs */}
          <div
            className={`space-y-4 text-sm sm:text-base leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-[#881337]"
            }`}
          >
            <p>
              I am a <strong className={isDarkMode ? "text-white" : "text-[#4c0519]"}>Senior Computer Engineering student at Ain Shams University</strong> with a passion for bridging artificial intelligence algorithms with high-performance frontend user interfaces.
            </p>
            <p>
              Through hands-on engineering internships at <strong className={isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}>Cellula Technologies</strong> and the <strong className={isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}>Information Technology Institute (ITI)</strong>, I have engineered ethical AI safety moderation pipelines (BERT & LLaMA Guard v2) and shipped responsive React 18 single-page applications.
            </p>
          </div>

          {/* Perspective Selector Pills */}
          <div className="pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
              Engineering Focus & Specialization
            </span>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {Object.keys(perspectives).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === key
                      ? "bg-gradient-to-r from-[#E01E5A] to-[#FF007A] text-white shadow-[0_0_20px_rgba(255,0,122,0.5)] scale-105"
                      : isDarkMode
                      ? "bg-[#10030a]/80 text-[#FDA4AF] border border-[#FF007A]/30 hover:border-[#FF007A]"
                      : "bg-[#ffe4e6] text-[#BE123C] border border-[#be123c]/30 hover:border-[#be123c]"
                  }`}
                >
                  {perspectives[key].title}
                </button>
              ))}
            </div>

            {/* Dynamic Active Perspective Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  {currentPerspective.icon}
                  <div>
                    <div className="text-xs font-bold uppercase text-[#FDA4AF]">
                      {currentPerspective.subtitle}
                    </div>
                    <div className={`text-lg font-extrabold ${isDarkMode ? "text-white" : "text-[#4c0519]"}`}>
                      {currentPerspective.title}
                    </div>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-[#881337]"}`}>
                  {currentPerspective.desc}
                </p>

                {/* Tech Skills Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {currentPerspective.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold border ${
                        isDarkMode
                          ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/35"
                          : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}