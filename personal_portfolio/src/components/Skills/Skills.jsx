import React, { useState } from "react";
import {
  FaLaptopCode,
  FaTools,
  FaDatabase,
  FaReact,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaCuttlefish,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaBrain,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaProjectDiagram,
  FaUserFriends,
  FaLanguage,
  FaSearch,
  FaLayerGroup,
  FaChartBar,
  FaCheckCircle,
  FaTimes,
  FaInfoCircle,
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
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

// Comprehensive skill catalog with deep-dive context (100% Purple Palette - NO BLUE!)
const programmingLanguages = [
  {
    name: "C++",
    icon: <SiCplusplus className="text-[#FF007A] text-xl" />,
    level: 95,
    tag: "Advanced",
    context:
      "Primary language for competitive programming, CPU scheduling algorithms, and high-performance cross-platform software.",
    projects: ["CPU Scheduler Simulator", "Cross-Platform XML Editor", "Competitive Programming"],
  },
  {
    name: "Python",
    icon: <FaPython className="text-[#FDA4AF] text-xl" />,
    level: 95,
    tag: "Advanced",
    context:
      "Core language for AI research, natural language processing, computer vision pipelines, and automated scripting.",
    projects: ["NLP Transformers @ Cellula", "Thief Detection System (OpenCV)", "Code Assistant Chatbot"],
  },
  {
    name: "JavaScript (ES6+)",
    icon: <FaJsSquare className="text-[#E01E5A] text-xl" />,
    level: 90,
    tag: "Advanced",
    context:
      "Building highly interactive frontend architectures, asynchronous APIs, and dynamic state management.",
    projects: ["Velora Ecommerce App", "Distributed Marketplace App", "ITI Frontend Projects"],
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#F43F5E] text-xl" />,
    level: 80,
    tag: "Proficient",
    context: "Type-safe modern web application architecture and scalable React systems.",
    projects: ["Modern React Web Applications"],
  },
  {
    name: "Java",
    icon: <FaJava className="text-[#FF007A] text-xl" />,
    level: 82,
    tag: "Proficient",
    context: "Object-oriented software design, design patterns, and multithreaded systems.",
    projects: ["Object-Oriented Architecture Projects"],
  },
  {
    name: "C",
    icon: <FaCuttlefish className="text-[#FDA4AF] text-xl" />,
    level: 85,
    tag: "Proficient",
    context: "Low-level system programming and memory management.",
    projects: ["OS Systems Programming Labs"],
  },
];

const AiMlSkills = [
  {
    name: "PyTorch",
    icon: <SiPytorch className="text-[#FF007A] text-xl" />,
    level: 90,
    tag: "Advanced",
    context:
      "Architecting transformer-based language models, fine-tuning LLMs, and computer vision neural networks.",
    projects: ["NLP Research @ Cellula", "CNN Object Detection @ Cellula"],
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow className="text-[#FDA4AF] text-xl" />,
    level: 88,
    tag: "Advanced",
    context: "Deep learning model training, optimization, and computer vision classification.",
    projects: ["Computer Vision Research @ Cellula"],
  },
  {
    name: "NLP & Transformers",
    icon: <FaBrain className="text-[#E01E5A] text-xl" />,
    level: 92,
    tag: "Expert Specialty",
    context:
      "Researched BERT, DistilBERT, and LLaMA Guard; achieved 10% accuracy boost over baseline NER/Sentiment tasks.",
    projects: ["Cellula Technology NLP Internship"],
  },
  {
    name: "Scikit-Learn",
    icon: <SiScikitlearn className="text-[#F43F5E] text-xl" />,
    level: 88,
    tag: "Advanced",
    context: "Classical machine learning, feature engineering, clustering, and evaluation metrics.",
    projects: ["ML Predictive Analytics"],
  },
  {
    name: "NumPy & Pandas",
    icon: <SiPandas className="text-[#FF007A] text-xl" />,
    level: 94,
    tag: "Advanced",
    context: "High-performance data manipulation, exploratory data analysis, and tensor operations.",
    projects: ["Data Preprocessing & EDA Pipelines"],
  },
  {
    name: "Keras",
    icon: <SiKeras className="text-[#FDA4AF] text-xl" />,
    level: 85,
    tag: "Proficient",
    context: "Rapid prototyping of deep neural networks and convolutional architectures.",
    projects: ["Deep Learning Models"],
  },
  {
    name: "Jupyter & Notebooks",
    icon: <SiJupyter className="text-[#E01E5A] text-xl" />,
    level: 95,
    tag: "Advanced",
    context: "Interactive AI experimentation, visual analytics, and research documentation.",
    projects: ["AI Model Notebooks"],
  },
];

const WebDevSkills = [
  {
    name: "React.js",
    icon: <FaReact className="text-[#FDA4AF] text-xl" />,
    level: 92,
    tag: "Advanced",
    context:
      "Developing component-driven single-page applications with hooks, state management, and Framer Motion.",
    projects: ["Velora Ecommerce App", "Distributed Marketplace App", "ITI Frontend Internship"],
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#FF007A] text-xl" />,
    level: 95,
    tag: "Advanced",
    context: "Utility-first responsive design, dark modes, glassmorphism, and custom animations.",
    projects: ["Velora Ecommerce App", "Portfolio Architecture"],
  },
  {
    name: "HTML5 & CSS3",
    icon: <FaHtml5 className="text-[#E01E5A] text-xl" />,
    level: 95,
    tag: "Advanced",
    context: "Semantic markup, modern grid/flex layouts, CSS animations, and accessible UI standards.",
    projects: ["All Frontend Web Projects"],
  },
  {
    name: "Django",
    icon: <SiDjango className="text-[#F43F5E] text-xl" />,
    level: 80,
    tag: "Proficient",
    context: "Python backend REST APIs, authentication, and integration with surveillance AI models.",
    projects: ["Thief Detection System Backend"],
  },
];

const DatabaseSkills = [
  {
    name: "SQL / MySQL",
    icon: <SiMysql className="text-[#FF007A] text-xl" />,
    level: 90,
    tag: "Advanced",
    context: "Relational schema design, complex joins, indexing, and data normalization.",
    projects: ["Distributed Marketplace Database"],
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-[#FDA4AF] text-xl" />,
    level: 85,
    tag: "Proficient",
    context: "Enterprise relational database queries and backend persistence.",
    projects: ["Full-Stack Application Databases"],
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#E01E5A] text-xl" />,
    level: 80,
    tag: "Proficient",
    context: "NoSQL document store design for modern web applications.",
    projects: ["Node / JS App Backends"],
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-[#F43F5E] text-xl" />,
    level: 82,
    tag: "Proficient",
    context: "Realtime database synchronization, authentication, and cloud hosting.",
    projects: ["Realtime Web & Mobile Apps"],
  },
];

const ToolsAndTechnologySkills = [
  {
    name: "Git & GitHub",
    icon: <FaGithub className="text-[#FDA4AF] text-xl" />,
    level: 95,
    tag: "Advanced",
    context: "Version control, feature branching, pull requests, and collaborative workflows.",
    projects: ["All Open-Source & Team Repositories"],
  },
  {
    name: "VS Code & Qt Creator",
    icon: <FaCode className="text-[#FF007A] text-xl" />,
    level: 95,
    tag: "Advanced",
    context: "Primary development IDEs configured with linting, debugging, and C++/Python profiling.",
    projects: ["Cross-Platform C++ & Web Engineering"],
  },
  {
    name: "Anaconda & Conda",
    icon: <SiAnaconda className="text-[#E01E5A] text-xl" />,
    level: 92,
    tag: "Advanced",
    context: "Managing isolated AI/ML virtual environments, PyTorch dependencies, and notebooks.",
    projects: ["AI Research Workspaces"],
  },
];

const NonTechnicalSkills = [
  {
    name: "Analytical Thinking & Problem Solving",
    icon: <FaLightbulb className="text-[#FDA4AF]" />,
    details: "Deconstructing complex algorithmic challenges into modular, efficient solutions.",
  },
  {
    name: "Agile Team Collaboration",
    icon: <FaUserFriends className="text-[#FF007A]" />,
    details: "Scrum ceremonies, code reviews, and Git flow feature branching.",
  },
  {
    name: "Technical Communication",
    icon: <FaComments className="text-[#E01E5A]" />,
    details: "Articulating software architecture and research findings in clear documentation.",
  },
  {
    name: "Adaptability & Rapid Learning",
    icon: <FaProjectDiagram className="text-[#F43F5E]" />,
    details: "Quickly picking up emerging frameworks, AI libraries, and engineering tools.",
  },
];

const LanguageSkills = [
  {
    name: "Arabic",
    level: 100,
    color: "from-[#E01E5A] to-[#FF007A]",
    details: "Native fluency",
  },
  {
    name: "English",
    level: 90,
    color: "from-[#F43F5E] to-[#FDA4AF]",
    details: "Full academic & engineering fluency",
  },
  {
    name: "French",
    level: 45,
    color: "from-[#FF007A] to-[#E01E5A]",
    details: "Beginner conversational",
  },
];

export default function Skills() {
  const [viewMode, setViewMode] = useState("categories"); // "categories" | "matrix"
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(programmingLanguages[1]);
  const { isDarkMode } = useTheme();

  const filterTabs = [
    { id: "All", label: "All Categories" },
    { id: "Languages", label: "Languages" },
    { id: "AI/ML", label: "AI & ML" },
    { id: "WebDev", label: "Web Dev" },
    { id: "Databases & Tools", label: "Data & Tools" },
  ];

  const categoriesData = [
    {
      id: "Languages",
      title: "Programming Languages",
      icon: <FaLaptopCode className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />,
      color: "#FF007A",
      description: "Core algorithmic and software engineering languages.",
      skills: programmingLanguages,
    },
    {
      id: "AI/ML",
      title: "AI & Machine Learning",
      icon: <FaBrain className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />,
      color: "#E01E5A",
      description: "Deep learning models, NLP transformers & computer vision.",
      skills: AiMlSkills,
    },
    {
      id: "WebDev",
      title: "Frontend & Web Development",
      icon: <FaReact className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />,
      color: "#F43F5E",
      description: "Component-driven frontends & responsive user interfaces.",
      skills: WebDevSkills,
    },
    {
      id: "Databases & Tools",
      title: "Databases & Architecture",
      icon: <FaDatabase className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />,
      color: "#E01E5A",
      description: "Relational schema design, queries & NoSQL storage.",
      skills: DatabaseSkills,
    },
    {
      id: "Databases & Tools",
      title: "Engineering Tools & IDEs",
      icon: <FaTools className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />,
      color: "#FF007A",
      description: "Version control, virtual environments & development workflows.",
      skills: ToolsAndTechnologySkills,
    },
  ];

  // Flatten all skills for searching and matrix view
  const allSkills = [
    ...programmingLanguages,
    ...AiMlSkills,
    ...WebDevSkills,
    ...DatabaseSkills,
    ...ToolsAndTechnologySkills,
  ];

  const filteredCategories = categoriesData.filter(
    (cat) => activeCategory === "All" || cat.id === activeCategory
  );

  const filterSkillList = (list) => {
    if (!searchQuery.trim()) return list;
    return list.filter(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.projects?.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  return (
    <div className={`relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16 transition-colors duration-500 ${
      isDarkMode ? "text-white" : "text-[#4c0519]"
    }`} id="skillSection">
      {/* Background Ambient Glows */}
      <div className={`absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDarkMode ? "bg-[#FF007A]/15" : "bg-[#fda4af]/20"
      }`} />
      <div className={`absolute bottom-1/4 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
        isDarkMode ? "bg-[#E01E5A]/15" : "bg-[#fecdd3]/15"
      }`} />

      {/* Title */}
      <motion.h1
        className="relative text-4xl sm:text-5xl md:text-[70px] font-extrabold font-serif text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-[#FF007A] to-[#E01E5A] dark:from-white dark:via-[#FDA4AF] dark:to-[#FF007A] mb-6 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Skills & Technical Arsenal
        <span
          className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-32 h-[3px] rounded-full bg-gradient-to-r from-[#E01E5A] via-[#F43F5E] to-[#FF007A] shadow-[0_0_15px_#FF007A] animate-pulse"
        />
      </motion.h1>

      {/* Subtitle */}
      <p className={`text-center max-w-2xl mx-auto text-sm sm:text-base mb-10 ${
        isDarkMode ? "text-gray-300" : "text-[#881337]"
      }`}>
        Click any technology below to inspect practical experience, proficiency level, and real-world application across my projects.
      </p>

      {/* Top Interactive Metric Banner */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
        {[
          { label: "Core Technologies", value: "25+ Specialized" },
          { label: "Frontend Stack", value: "React 18 & Tailwind" },
          { label: "AI & NLP Stack", value: "Transformers & PyTorch" },
          { label: "Algorithmic Speed", value: "C++ & JavaScript" },
        ].map((metric, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-2xl border backdrop-blur-md shadow-lg flex flex-col items-center text-center transition-all ${
              isDarkMode
                ? "bg-gradient-to-br from-[#180510]/80 to-[#0b0207]/90 border-[#FF007A]/30 text-white"
                : "bg-gradient-to-br from-[#ffffff] to-[#fff1f2] border-[#be123c]/30 text-[#4c0519] shadow-[0_4px_20px_rgba(225,29,72,0.1)]"
            }`}
          >
            <span className={`text-xs font-medium ${
              isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
            }`}>{metric.label}</span>
            <span className="text-sm sm:text-base font-bold mt-1">{metric.value}</span>
          </div>
        ))}
      </div>

      {/* Control Bar: View Switcher & Live Search */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* View Mode Toggle */}
        <div className={`p-1.5 rounded-full border flex items-center gap-1 ${
          isDarkMode ? "bg-[#10030a] border-[#FF007A]/40" : "bg-[#ffe4e6] border-[#be123c]/30"
        }`}>
          <button
            onClick={() => setViewMode("categories")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              viewMode === "categories"
                ? "bg-gradient-to-r from-[#E01E5A] to-[#FF007A] text-white shadow-md"
                : isDarkMode ? "text-[#FDA4AF] hover:text-white" : "text-[#BE123C] hover:text-[#4c0519]"
            }`}
          >
            Category Grid
          </button>
          <button
            onClick={() => setViewMode("matrix")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              viewMode === "matrix"
                ? "bg-gradient-to-r from-[#E01E5A] to-[#FF007A] text-white shadow-md"
                : isDarkMode ? "text-[#FDA4AF] hover:text-white" : "text-[#BE123C] hover:text-[#4c0519]"
            }`}
          >
            Matrix Deep-Dive
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 justify-center">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === tab.id
                  ? "bg-gradient-to-r from-[#E01E5A] to-[#FF007A] text-white shadow-md border border-[#FDA4AF]/40"
                  : isDarkMode
                  ? "bg-[#10030a] text-[#FDA4AF] border border-[#FF007A]/30 hover:border-[#FF007A]"
                  : "bg-[#ffe4e6] text-[#BE123C] border border-[#be123c]/30 hover:border-[#be123c]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-64">
          <FaSearch className={`absolute left-3.5 top-1/2 -translate-y-1/2 text-xs ${
            isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
          }`} />
          <input
            type="text"
            placeholder="Search technology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-9 pr-3.5 py-1.5 rounded-full border text-xs transition-all focus:outline-none ${
              isDarkMode
                ? "bg-[#10030a] border-[#FF007A]/40 text-white placeholder-pink-400 focus:border-[#FDA4AF]"
                : "bg-[#ffffff] border-[#be123c]/30 text-[#4c0519] placeholder-pink-400 focus:border-[#be123c]"
            }`}
          />
        </div>
      </div>

      {/* VIEW 1: CATEGORY GRID MODE */}
      {viewMode === "categories" && (
        <div className="max-w-6xl mx-auto space-y-10">
          {filteredCategories.map((cat, idx) => {
            const list = filterSkillList(cat.skills);
            if (list.length === 0) return null;
            return (
              <motion.div
                key={cat.title + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`p-6 sm:p-8 rounded-3xl border shadow-xl ${
                  isDarkMode
                    ? "bg-gradient-to-br from-[#180510]/90 to-[#0b0207]/90 border-[#FF007A]/35"
                    : "bg-gradient-to-br from-[#ffffff] to-[#fff1f2] border-[#be123c]/30 shadow-[0_8px_30px_rgba(225,29,72,0.1)]"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2.5 rounded-2xl border ${
                    isDarkMode ? "bg-[#10030a] border-[#FF007A]/40" : "bg-[#ffe4e6] border-[#be123c]/30"
                  }`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-bold ${
                      isDarkMode ? "text-white" : "text-[#4c0519]"
                    }`}>
                      {cat.title}
                    </h3>
                    <p className={`text-xs ${
                      isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                    }`}>{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {list.map((skill) => (
                    <div
                      key={skill.name}
                      onClick={() => setSelectedSkill(skill)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between ${
                        selectedSkill.name === skill.name
                          ? isDarkMode
                            ? "bg-[#280816] border-[#FF007A] shadow-[0_0_20px_rgba(255,0,122,0.4)]"
                            : "bg-[#ffe4e6] border-[#be123c] shadow-[0_6px_20px_rgba(225,29,72,0.18)]"
                          : isDarkMode
                          ? "bg-[#180510]/80 border-[#FF007A]/25 hover:border-[#FF007A]/60"
                          : "bg-[#fff1f2] border-[#be123c]/25 hover:border-[#e11d48]"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2.5">
                            <span className="p-2 rounded-xl bg-pink-950/40 border border-pink-500/30">
                              {skill.icon}
                            </span>
                            <span className={`font-bold text-sm ${
                              isDarkMode ? "text-white group-hover:text-[#FDA4AF]" : "text-[#4c0519] group-hover:text-[#be123c]"
                            }`}>
                              {skill.name}
                            </span>
                          </div>
                          <span className={`text-xs font-mono font-bold ${
                            isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                          }`}>
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className={`w-full h-2 rounded-full overflow-hidden border mb-3 ${
                          isDarkMode ? "bg-[#0b0207] border-[#FF007A]/20" : "bg-[#fecdd3] border-[#be123c]/20"
                        }`}>
                          <div
                            className="h-full bg-gradient-to-r from-[#E01E5A] via-[#FF007A] to-[#FDA4AF] rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        <p className={`text-xs line-clamp-2 leading-relaxed ${
                          isDarkMode ? "text-gray-300" : "text-[#881337]"
                        }`}>
                          {skill.context}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* VIEW 2: MATRIX DEEP-DIVE MODE */}
      {viewMode === "matrix" && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Skill Selector List */}
          <div className={`lg:col-span-5 p-5 rounded-3xl border shadow-xl space-y-2 max-h-[600px] overflow-y-auto ${
            isDarkMode
              ? "bg-gradient-to-br from-[#180510] to-[#0b0207] border-[#FF007A]/35"
              : "bg-gradient-to-br from-[#ffffff] to-[#fff1f2] border-[#be123c]/30 shadow-[0_8px_25px_rgba(225,29,72,0.1)]"
          }`}>
            <span className={`text-xs font-bold uppercase tracking-wider block mb-3 ${
              isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
            }`}>
              Select Technology to Inspect
            </span>
            {filterSkillList(allSkills).map((skill) => (
              <div
                key={skill.name}
                onClick={() => setSelectedSkill(skill)}
                className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  selectedSkill.name === skill.name
                    ? "bg-gradient-to-r from-[#E01E5A] to-[#FF007A] text-white border-transparent shadow-md"
                    : isDarkMode
                    ? "bg-[#10030a] border-[#FF007A]/20 text-gray-200 hover:border-[#FF007A]/50"
                    : "bg-[#ffe4e6] border-[#be123c]/25 text-[#4c0519] hover:border-[#e11d48]"
                }`}
              >
                <div className="flex items-center gap-3">
                  {skill.icon}
                  <span className="font-semibold text-xs sm:text-sm">{skill.name}</span>
                </div>
                <span className="text-xs font-mono font-bold">{skill.level}%</span>
              </div>
            ))}
          </div>

          {/* Right Column: Deep-Dive Inspector Panel */}
          <div className="lg:col-span-7">
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-6 sm:p-8 rounded-3xl border shadow-2xl relative overflow-hidden ${
                isDarkMode
                  ? "bg-gradient-to-br from-[#180510] via-[#10030a] to-[#0b0207] border-[#FF007A]/60 shadow-[0_0_35px_rgba(255,0,122,0.35)]"
                  : "bg-gradient-to-br from-[#ffffff] via-[#fff1f2] to-[#ffe4e6] border-[#be123c]/40 shadow-[0_10px_35px_rgba(225,29,72,0.15)]"
              }`}
            >
              <div className="flex items-center gap-4 border-b pb-5 mb-6 border-[#FF007A]/30">
                <div className="p-4 rounded-2xl bg-[#10030a] border border-[#FF007A]/50 text-3xl">
                  {selectedSkill.icon}
                </div>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    {selectedSkill.tag} Level Proficiency
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold ${
                    isDarkMode ? "text-white" : "text-[#4c0519]"
                  }`}>
                    {selectedSkill.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    Proficiency Mastery Score
                  </h4>
                  <div className="flex items-center gap-4">
                    <div className={`flex-1 h-3 rounded-full overflow-hidden border ${
                      isDarkMode ? "bg-[#10030a] border-[#FF007A]/30" : "bg-[#fecdd3] border-[#be123c]/30"
                    }`}>
                      <div
                        className="h-full bg-gradient-to-r from-[#E01E5A] via-[#FF007A] to-[#FDA4AF] rounded-full"
                        style={{ width: `${selectedSkill.level}%` }}
                      />
                    </div>
                    <span className={`text-base font-mono font-bold ${
                      isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                    }`}>{selectedSkill.level}%</span>
                  </div>
                </div>

                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    Engineering Context & Practical Application
                  </h4>
                  <p className={`text-sm sm:text-base leading-relaxed ${
                    isDarkMode ? "text-gray-200" : "text-[#881337]"
                  }`}>
                    {selectedSkill.context}
                  </p>
                </div>

                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    Applied In Portfolio Systems & Projects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.projects?.map((proj, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border ${
                          isDarkMode
                            ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/45"
                            : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
                        }`}
                      >
                        ✓ {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* BOTTOM SECTION: SOFT SKILLS & LANGUAGES */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {/* Soft Skills */}
        <motion.div
          className={`border rounded-2xl p-6 sm:p-8 shadow-xl ${
            isDarkMode
              ? "bg-gradient-to-br from-[#180510]/90 to-[#0b0207]/90 border-[#FF007A]/35"
              : "bg-gradient-to-br from-[#ffffff] to-[#fff1f2] border-[#be123c]/30 shadow-[0_8px_25px_rgba(225,29,72,0.1)]"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-[#FF007A] to-[#E01E5A] dark:from-white dark:via-[#FDA4AF] dark:to-[#FF007A] mb-6">
            Soft Skills & Engineering Practices
          </h2>

          <div className="space-y-3.5">
            {NonTechnicalSkills.map((skill, i) => (
              <div
                key={i}
                className={`p-3.5 rounded-xl border flex items-start gap-3.5 transition-all ${
                  isDarkMode
                    ? "bg-[#10030a]/60 border-[#FF007A]/25 hover:border-[#FF007A]/60"
                    : "bg-[#fff1f2] border-[#be123c]/20 hover:border-[#e11d48]"
                }`}
              >
                <span className="text-xl mt-0.5 shrink-0">{skill.icon}</span>
                <div>
                  <h4 className={`font-semibold text-sm sm:text-base ${
                    isDarkMode ? "text-white" : "text-[#4c0519]"
                  }`}>{skill.name}</h4>
                  <p className={`text-xs sm:text-sm mt-0.5 ${
                    isDarkMode ? "text-gray-300" : "text-[#881337]"
                  }`}>{skill.details}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Human Languages */}
        <motion.div
          className={`border rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between ${
            isDarkMode
              ? "bg-gradient-to-br from-[#180510]/90 to-[#0b0207]/90 border-[#FF007A]/35"
              : "bg-gradient-to-br from-[#ffffff] to-[#fff1f2] border-[#be123c]/30 shadow-[0_8px_25px_rgba(225,29,72,0.1)]"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold mb-6">
              <FaLanguage className="text-2xl text-[#FF007A]" />
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-[#FF007A] to-[#E01E5A] dark:from-white dark:via-[#FDA4AF] dark:to-[#FF007A]">
                Spoken Languages
              </h2>
            </div>

            <div className="space-y-6">
              {LanguageSkills.map((lang, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center text-sm sm:text-base mb-1.5">
                    <div>
                      <span className={`font-bold ${isDarkMode ? "text-white" : "text-[#4c0519]"}`}>{lang.name}</span>
                      <span className={`text-xs ml-2 ${isDarkMode ? "text-gray-400" : "text-[#881337]"}`}>({lang.details})</span>
                    </div>
                    <span className={`text-xs font-semibold ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`}>{lang.level}%</span>
                  </div>
                  <div className={`w-full h-3 rounded-full overflow-hidden border shadow-inner ${
                    isDarkMode ? "bg-[#10030a] border-white/10" : "bg-[#fecdd3] border-[#be123c]/20"
                  }`}>
                    <motion.div
                      className={`h-full bg-gradient-to-r ${lang.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`mt-8 p-4 rounded-xl border text-xs flex items-center gap-3 ${
            isDarkMode
              ? "bg-[#10030a]/60 border-[#FF007A]/30 text-gray-300"
              : "bg-[#ffe4e6] border-[#be123c]/30 text-[#881337]"
          }`}>
            <FaInfoCircle className={`text-lg shrink-0 ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />
            <span>
              Fluent in technical writing, academic research papers, and bilingual team collaboration.
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
