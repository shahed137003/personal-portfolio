import React, { useState } from "react";
import "./Skills.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaTools,
  FaDatabase,
  FaReact,
  FaPython,
  FaJava,
  FaGithub,
  FaCode,
  FaBrain,
  FaCrown,
  FaPause,
  FaPlay,
  FaBolt,
  FaSyncAlt,
  FaJsSquare,
  FaUsers,
  FaLightbulb,
  FaFileAlt,
  FaRocket,
  FaClock,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiAnaconda,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiKeras,
  SiTailwindcss,
  SiDjango,
  SiTypescript,
} from "react-icons/si";
import { useTheme } from "../../context/ThemeContext";

const allSkillCatalog = [
  // AI / ML
  {
    id: "pytorch",
    name: "PyTorch",
    category: "AI/ML",
    icon: <SiPytorch className="text-2xl sm:text-3xl text-[#FDA4AF]" />,
    level: 92,
    tag: "Expert Specialty",
    context: "Fine-tuning transformer-based language models (BERT, LLaMA Guard v2) & computer vision neural networks.",
    projects: ["NLP Research @ Cellula", "CNN Object Detection"],
  },
  {
    id: "nlp",
    name: "NLP & Transformers",
    category: "AI/ML",
    icon: <FaBrain className="text-2xl sm:text-3xl text-[#FF007A]" />,
    level: 95,
    tag: "Core Focus",
    context: "Fine-tuned DistilBERT & LLaMA Guard v2 models achieving 98.4% content moderation accuracy.",
    projects: ["Cellula Technology Internship", "LangGraph RAG Assistant"],
  },
  {
    id: "python",
    name: "Python 3",
    category: "Languages",
    icon: <FaPython className="text-2xl sm:text-3xl text-[#FDA4AF]" />,
    level: 95,
    tag: "Advanced",
    context: "Primary language for deep learning, automated scraping, SQL data pipelines, and OpenCV computer vision.",
    projects: ["Cellula AI Models", "Thief Detection System", "Coursera Specialization"],
  },
  {
    id: "tensorflow",
    name: "TensorFlow & Keras",
    category: "AI/ML",
    icon: <SiTensorflow className="text-2xl sm:text-3xl text-[#FF007A]" />,
    level: 88,
    tag: "Advanced",
    context: "Deep learning model training, optimization, and computer vision classification.",
    projects: ["Computer Vision Research"],
  },

  // Frontend
  {
    id: "react",
    name: "React 18 & Vite",
    category: "Frontend",
    icon: <FaReact className="text-2xl sm:text-3xl text-[#FDA4AF]" />,
    level: 94,
    tag: "Advanced",
    context: "Architecting component-driven SPAs with custom hooks, state management, and Framer Motion micro-interactions.",
    projects: ["Velora Ecommerce Storefront", "Distributed Marketplace App", "ITI Internship"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss className="text-2xl sm:text-3xl text-[#FF007A]" />,
    level: 96,
    tag: "Advanced",
    context: "Utility-first responsive styling, glassmorphism, dark mode palettes, and custom animation tokens.",
    projects: ["Velora App", "Portfolio Architecture"],
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Languages",
    icon: <FaJsSquare className="text-2xl sm:text-3xl text-[#FDA4AF]" />,
    level: 92,
    tag: "Advanced",
    context: "Asynchronous API integration, dynamic DOM manipulation, and modern web architecture.",
    projects: ["React SPAs", "REST Integration"],
  },

  // Systems & Languages
  {
    id: "cpp",
    name: "C++",
    category: "Languages",
    icon: <SiCplusplus className="text-2xl sm:text-3xl text-[#FF007A]" />,
    level: 95,
    tag: "Advanced",
    context: "Primary language for Ain Shams Computer Engineering algorithms, CPU scheduling, and Qt desktop GUI apps.",
    projects: ["CPU Scheduler Simulator", "Cross-Platform XML Editor"],
  },
  {
    id: "java",
    name: "Java",
    category: "Languages",
    icon: <FaJava className="text-2xl sm:text-3xl text-[#FDA4AF]" />,
    level: 85,
    tag: "Proficient",
    context: "Object-oriented software design patterns, multithreaded operating systems, and structured algorithms.",
    projects: ["Ain Shams Engineering Systems"],
  },

  // Tools & DBs
  {
    id: "git",
    name: "Git & GitHub",
    category: "Tools",
    icon: <FaGithub className="text-2xl sm:text-3xl text-[#FF007A]" />,
    level: 95,
    tag: "Advanced",
    context: "Version control workflows, team PR code reviews, and open-source repository maintenance.",
    projects: ["GitHub Repositories"],
  },
  {
    id: "sql",
    name: "SQL & MySQL",
    category: "Tools",
    icon: <SiMysql className="text-2xl sm:text-3xl text-[#FDA4AF]" />,
    level: 90,
    tag: "Advanced",
    context: "Relational database schema normalization, indexing, complex joins, and backend integration.",
    projects: ["Marketplace App Backend"],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(allSkillCatalog[0]);
  const [isOrbitPaused, setIsOrbitPaused] = useState(false);
  const [orbitSpeedMultiplier, setOrbitSpeedMultiplier] = useState(1);
  const [orbitDirection, setOrbitDirection] = useState(1);
  const { isDarkMode } = useTheme();

  const categories = [
    { id: "All", label: "All Tech Stack" },
    { id: "AI/ML", label: "AI & Machine Learning" },
    { id: "Frontend", label: "Frontend Architecture" },
    { id: "Languages", label: "Languages & Systems" },
    { id: "Tools", label: "Data & Dev Tools" },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? allSkillCatalog
      : allSkillCatalog.filter((s) => s.category === activeCategory);

  const innerDuration = (25 / orbitSpeedMultiplier);
  const outerDuration = (35 / orbitSpeedMultiplier);

  return (
    <section
      className={`relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16 transition-colors duration-500 ${
        isDarkMode ? "text-white" : "text-[#2e0854]"
      }`}
      id="skillSection"
    >
      {/* Ambient Glows */}
      <div
        className={`absolute top-1/4 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
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
        className="text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-semibold mb-3 shadow-sm ${
            isDarkMode
              ? "bg-[#10030a] border-[#FF007A]/40 text-[#FDA4AF] shadow-[0_0_15px_rgba(255,0,122,0.3)]"
              : "bg-[#ffe4e6] border-[#be123c]/30 text-[#BE123C]"
          }`}
        >
          <FaCrown className={isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"} />
          <span>Interactive Technology Matrix</span>
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-[64px] font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-[#FF007A] to-[#E01E5A] dark:from-white dark:via-[#FDA4AF] dark:to-[#FF007A] tracking-wide">
          Skills & Technical Universe
        </h1>
        <p
          className={`max-w-2xl mx-auto text-sm sm:text-base mt-3 ${
            isDarkMode ? "text-gray-300" : "text-[#881337]"
          }`}
        >
          Hover over any orbiting tech node below to inspect real-world project context, proficiency score, and framework specialization.
        </p>
      </motion.div>

      {/* Category Pills Switcher */}
      <div className="flex justify-center items-center gap-2.5 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === cat.id
                ? "bg-gradient-to-r from-[#E01E5A] to-[#FF007A] text-white shadow-[0_0_20px_rgba(255,0,122,0.5)] scale-105"
                : isDarkMode
                ? "bg-[#10030a]/80 text-[#FDA4AF] border border-[#FF007A]/30 hover:border-[#FF007A]"
                : "bg-[#ffe4e6] text-[#BE123C] border border-[#be123c]/30 hover:border-[#be123c]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>



      {/* -------- CARDLESS ENLARGED 360° ROTATING SKILLS ORBIT UNIVERSE -------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN (6 Cols): Interactive Solar Ring System */}
        <div
          className="lg:col-span-6 flex items-center justify-center relative min-h-[360px] sm:min-h-[460px] scale-[0.78] sm:scale-90 md:scale-100 transform origin-center transition-transform duration-300 overflow-visible my-[-20px] sm:my-0"
          onMouseEnter={() => setIsOrbitPaused(true)}
          onMouseLeave={() => setIsOrbitPaused(false)}
        >
          {/* Central Nucleus Core */}
          <div
            className={`w-28 h-28 sm:w-36 sm:h-36 rounded-full border flex flex-col items-center justify-center text-center z-20 shadow-2xl backdrop-blur-xl ${
              isDarkMode
                ? "bg-gradient-to-br from-[#180510] via-[#10030a] to-[#0b0207] border-2 border-[#FF007A] shadow-[0_0_40px_rgba(255,0,122,0.7)]"
                : "bg-gradient-to-br from-[#ffffff] to-[#fff1f2] border-2 border-[#be123c] shadow-2xl"
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#FDA4AF]">
              Core Tech
            </span>
            <span className={`text-sm sm:text-base font-black mt-0.5 ${isDarkMode ? "text-white" : "text-[#4c0519]"}`}>
              Shahd Mohamed
            </span>
            <span className="text-[10px] font-mono text-pink-400 mt-1">Ain Shams Senior</span>
          </div>

          {/* INNER ORBIT RING (360° Clockwise Rotation) */}
          <motion.div
            animate={isOrbitPaused ? { rotate: 0 } : { rotate: 360 * orbitDirection }}
            transition={{ repeat: Infinity, duration: innerDuration, ease: "linear" }}
            className={`absolute w-[280px] h-[280px] sm:w-[310px] sm:h-[310px] rounded-full border-2 border-dashed pointer-events-none ${
              isDarkMode ? "border-[#FF007A]/55 shadow-[0_0_15px_rgba(255,0,122,0.25)]" : "border-[#be123c]/40 shadow-[0_0_12px_rgba(225,29,72,0.18)]"
            }`}
          >
            {/* Inner Ring Skill Nodes */}
            {[allSkillCatalog[0], allSkillCatalog[1], allSkillCatalog[2], allSkillCatalog[4]].map(
              (skill, idx) => {
                const angle = (idx / 4) * (2 * Math.PI);
                const radius = 148;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const isSelected = selectedSkill.id === skill.id;

                return (
                  <div
                    key={skill.id}
                    style={{
                      left: `calc(50% + ${x}px - 26px)`,
                      top: `calc(50% + ${y}px - 26px)`,
                    }}
                    className="absolute pointer-events-auto cursor-pointer group/node"
                    onClick={() => setSelectedSkill(skill)}
                    onTouchStart={() => setSelectedSkill(skill)}
                    onMouseEnter={() => setSelectedSkill(skill)}
                  >
                    {/* Counter-rotate to keep icon upright */}
                    <motion.div
                      animate={isOrbitPaused ? { rotate: 0 } : { rotate: -360 * orbitDirection }}
                      transition={{ repeat: Infinity, duration: innerDuration, ease: "linear" }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.25 }}
                        className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center backdrop-blur-xl transition-all relative ${
                          isSelected
                            ? "bg-[#180510] border-2 border-[#FF007A] shadow-[0_0_30px_rgba(255,0,122,0.9)] scale-125 z-30"
                            : isDarkMode
                            ? "bg-[#10030a] border-[#FF007A]/45 text-gray-200 hover:border-[#FF007A]"
                            : "bg-white border-[#be123c]/35 text-[#4c0519]"
                        }`}
                      >
                        {skill.icon}

                        {/* Floating Tooltip Label */}
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#FF007A] text-white whitespace-nowrap shadow-lg opacity-0 group-hover/node:opacity-100 transition-opacity">
                          {skill.name} • {skill.level}%
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              }
            )}
          </motion.div>

          {/* OUTER ORBIT RING (360° Counter-Clockwise Rotation) */}
          <motion.div
            animate={isOrbitPaused ? { rotate: 0 } : { rotate: -360 * orbitDirection }}
            transition={{ repeat: Infinity, duration: outerDuration, ease: "linear" }}
            className={`absolute w-[390px] h-[390px] sm:w-[440px] sm:h-[440px] rounded-full border-2 border-dashed pointer-events-none ${
              isDarkMode ? "border-[#FF007A]/35 shadow-[0_0_20px_rgba(255,0,122,0.2)]" : "border-[#be123c]/30 shadow-[0_0_12px_rgba(225,29,72,0.15)]"
            }`}
          >
            {/* Outer Ring Skill Nodes */}
            {[
              allSkillCatalog[3],
              allSkillCatalog[5],
              allSkillCatalog[6],
              allSkillCatalog[7],
              allSkillCatalog[8],
              allSkillCatalog[9],
              allSkillCatalog[10],
            ].map((skill, idx) => {
              const angle = (idx / 7) * (2 * Math.PI);
              const radius = 210;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              const isSelected = selectedSkill.id === skill.id;

              return (
                <div
                  key={skill.id}
                  style={{
                    left: `calc(50% + ${x}px - 24px)`,
                    top: `calc(50% + ${y}px - 24px)`,
                  }}
                  className="absolute pointer-events-auto cursor-pointer group/node"
                  onClick={() => setSelectedSkill(skill)}
                  onTouchStart={() => setSelectedSkill(skill)}
                  onMouseEnter={() => setSelectedSkill(skill)}
                >
                  {/* Counter-rotate to keep icon upright */}
                  <motion.div
                    animate={isOrbitPaused ? { rotate: 0 } : { rotate: 360 * orbitDirection }}
                    transition={{ repeat: Infinity, duration: outerDuration, ease: "linear" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.25 }}
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center backdrop-blur-xl transition-all relative ${
                        isSelected
                          ? "bg-[#180510] border-2 border-[#FF007A] shadow-[0_0_30px_rgba(255,0,122,0.95)] scale-125 z-30"
                          : isDarkMode
                          ? "bg-[#10030a] border-[#FF007A]/35 text-gray-300 hover:border-[#FF007A]"
                          : "bg-white border-[#be123c]/30 text-[#4c0519]"
                      }`}
                    >
                      {skill.icon}

                      {/* Floating Tooltip Label */}
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#FF007A] text-white whitespace-nowrap shadow-lg opacity-0 group-hover/node:opacity-100 transition-opacity">
                        {skill.name} • {skill.level}%
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* RIGHT COLUMN (6 Cols): Cardless Live Technical Inspector */}
        <div className="lg:col-span-6 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSkill.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              {/* Header */}
              <div className="flex items-center gap-4 border-b pb-4 border-[#FF007A]/30">
                <div className="p-4 rounded-2xl bg-[#10030a] border border-[#FF007A]/45 text-3xl shadow-[0_0_20px_rgba(255,0,122,0.3)]">
                  {selectedSkill.icon}
                </div>
                <div>
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`}>
                    {selectedSkill.tag} • {selectedSkill.category}
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold ${isDarkMode ? "text-white" : "text-[#4c0519]"}`}>
                    {selectedSkill.name}
                  </h3>
                </div>
              </div>

              {/* Mastery Level Bar */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className={isDarkMode ? "text-gray-300" : "text-[#881337]"}>Proficiency Score</span>
                  <span className="font-mono text-[#FF007A] text-sm">{selectedSkill.level}%</span>
                </div>
                <div className={`w-full h-3 rounded-full overflow-hidden border ${isDarkMode ? "bg-[#10030a] border-[#FF007A]/30" : "bg-[#fecdd3] border-[#be123c]/30"}`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill.level}%` }}
                    transition={{ duration: 0.6 }}
                    className="h-full bg-gradient-to-r from-[#E01E5A] via-[#FF007A] to-[#FDA4AF] rounded-full shadow-[0_0_15px_#FF007A]"
                  />
                </div>
              </div>

              {/* Context Description */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                  Engineering Context & Practical Mastery
                </span>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-gray-200" : "text-[#881337]"}`}>
                  {selectedSkill.context}
                </p>
              </div>

              {/* Applied Projects */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  Applied In Shipped Systems
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.projects.map((proj, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold border ${
                        isDarkMode
                          ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/35"
                          : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
                      }`}
                    >
                      ✓ {proj}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick Skill Selector Grid */}
          <div className="pt-4 border-t border-[#FF007A]/20">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2.5">
              Click any skill to inspect:
            </span>
            <div className="flex flex-wrap gap-2">
              {filteredSkills.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSkill(s)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    selectedSkill.id === s.id
                      ? "bg-gradient-to-r from-[#E01E5A] to-[#FF007A] text-white border-[#FF007A] shadow-[0_0_15px_rgba(255,0,122,0.4)]"
                      : isDarkMode
                      ? "bg-[#10030a]/80 text-[#FDA4AF] border-[#FF007A]/30 hover:border-[#FF007A]"
                      : "bg-white text-[#BE123C] border-[#be123c]/25 hover:border-[#be123c]"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* -------- CARDLESS NON-TECHNICAL & LEADERSHIP SKILLS SHOWCASE -------- */}
      <motion.div
        className="max-w-6xl mx-auto mt-20 pt-12 border-t border-[#FF007A]/25"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-10">
          <span
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${
              isDarkMode
                ? "bg-[#10030a] text-[#FDA4AF] border border-[#FF007A]/40"
                : "bg-[#ffe4e6] text-[#BE123C] border border-[#be123c]/30"
            }`}
          >
            <FaTools className="text-xs" />
            <span>Professional Capabilities</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#FF007A] via-[#FDA4AF] to-[#E01E5A]">
            Leadership & Non-Technical Skills
          </h2>
          <p className={`text-xs sm:text-sm max-w-xl mx-auto mt-2 ${isDarkMode ? "text-gray-300" : "text-[#881337]"}`}>
            Essential soft skills and collaborative methodologies that empower engineering execution and team success.
          </p>
        </div>

        {/* Cardless Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Agile Leadership & Team Collaboration",
              icon: <FaUsers className="text-[#FF007A] text-2xl" />,
              context: "Effective cross-functional communication, code review mentorship, and active participation in sprint workflows.",
              highlights: ["Cross-Functional Sync", "Git PR Reviews", "Team Synergy"],
            },
            {
              title: "Analytical Problem Solving",
              icon: <FaLightbulb className="text-[#FDA4AF] text-2xl" />,
              context: "Deconstructing complex software bottlenecks, optimizing algorithms, and evaluating trade-offs systematically.",
              highlights: ["Root-Cause Diagnosis", "Algorithm Design", "Trade-Off Analysis"],
            },
            {
              title: "Technical Writing & Research",
              icon: <FaFileAlt className="text-[#FF007A] text-2xl" />,
              context: "Synthesizing deep learning research papers (LLaMA Guard v2 / BERT) into clear technical reports and API docs.",
              highlights: ["Paper Summarization", "Clean API Specs", "Structured Reports"],
            },
            {
              title: "Rapid Adaptability & Fast Learning",
              icon: <FaRocket className="text-[#FDA4AF] text-2xl" />,
              context: "Quickly mastering brand-new AI frameworks (LangGraph, PyTorch) and full-stack libraries within dynamic project cycles.",
              highlights: ["Framework Onboarding", "Emerging AI Tech", "Agile Pivoting"],
            },
            {
              title: "Time Management & Prioritization",
              icon: <FaClock className="text-[#FF007A] text-2xl" />,
              context: "Balancing Ain Shams University Senior Year coursework with engineering research and production software deadlines.",
              highlights: ["Milestone Delivery", "High-Load Focus", "Multitasking"],
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 6 }}
              className="relative pl-5 border-l-2 border-[#FF007A]/40 space-y-2 group transition-all"
            >
              {/* Glowing Pulsing Node Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#FF007A] border-2 border-white dark:border-[#10030a] shadow-[0_0_12px_#FF007A] group-hover:scale-125 transition-transform" />

              <div className="flex items-center gap-2.5 pt-0.5">
                {item.icon}
                <h3 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-[#4c0519]"}`}>
                  {item.title}
                </h3>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-[#881337]"}`}>
                {item.context}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.highlights.map((h, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-semibold border ${
                      isDarkMode
                        ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/30"
                        : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/25"
                    }`}
                  >
                    • {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
