import React, { useState } from "react";
import {
  FaLaptopCode,
  FaMicrochip,
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
import { GiProcessor } from "react-icons/gi";
import { TbTopologyStar3 } from "react-icons/tb";
import { MdGpsFixed } from "react-icons/md";
import { BsUsbPlug } from "react-icons/bs";
import {
  SiCplusplus,
  SiArduino,
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

// Comprehensive skill catalog with deep-dive context
const programmingLanguages = [
  {
    name: "C++",
    icon: <SiCplusplus className="text-[#00599C] text-xl" />,
    level: 95,
    tag: "Advanced",
    context:
      "Primary language for competitive programming, CPU scheduling algorithms, and high-performance cross-platform software.",
    projects: ["CPU Scheduler Simulator", "Cross-Platform XML Editor", "Competitive Programming"],
  },
  {
    name: "Python",
    icon: <FaPython className="text-[#3776AB] text-xl" />,
    level: 95,
    tag: "Advanced",
    context:
      "Core language for AI research, natural language processing, computer vision pipelines, and automated scripting.",
    projects: ["NLP Transformers @ Cellula", "Thief Detection System (OpenCV)", "Code Assistant Chatbot"],
  },
  {
    name: "JavaScript (ES6+)",
    icon: <FaJsSquare className="text-[#F7DF1E] text-xl" />,
    level: 90,
    tag: "Advanced",
    context:
      "Building highly interactive frontend architectures, asynchronous APIs, and dynamic state management.",
    projects: ["Velora Ecommerce App", "Distributed Marketplace App", "ITI Frontend Projects"],
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6] text-xl" />,
    level: 80,
    tag: "Proficient",
    context: "Type-safe modern web application architecture and scalable React systems.",
    projects: ["Modern React Web Applications"],
  },
  {
    name: "Java",
    icon: <FaJava className="text-[#007396] text-xl" />,
    level: 82,
    tag: "Proficient",
    context: "Object-oriented software design, design patterns, and multithreaded desktop systems.",
    projects: ["Object-Oriented Architecture Projects"],
  },
  {
    name: "C",
    icon: <FaCuttlefish className="text-[#A8B9CC] text-xl" />,
    level: 85,
    tag: "Proficient",
    context: "Low-level system programming, memory management, and microcontroller firmware.",
    projects: ["Embedded Microcontroller Firmware"],
  },
];

const AiMlSkills = [
  {
    name: "PyTorch",
    icon: <SiPytorch className="text-[#EE4C2C] text-xl" />,
    level: 90,
    tag: "Advanced",
    context:
      "Architecting transformer-based language models, fine-tuning LLMs, and computer vision neural networks.",
    projects: ["NLP Research @ Cellula", "CNN Object Detection @ Cellula"],
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow className="text-[#FF6F00] text-xl" />,
    level: 88,
    tag: "Advanced",
    context: "Deep learning model training, optimization, and computer vision classification.",
    projects: ["Computer Vision Research @ Cellula"],
  },
  {
    name: "NLP & Transformers",
    icon: <FaBrain className="text-[#A044FF] text-xl" />,
    level: 92,
    tag: "Expert Specialty",
    context:
      "Researched BERT, DistilBERT, and LLaMA Guard; achieved 10% accuracy boost over baseline NER/Sentiment tasks.",
    projects: ["Cellula Technology NLP Internship"],
  },
  {
    name: "Scikit-Learn",
    icon: <SiScikitlearn className="text-[#F7931E] text-xl" />,
    level: 88,
    tag: "Advanced",
    context: "Classical machine learning, feature engineering, clustering, and evaluation metrics.",
    projects: ["ML Predictive Analytics"],
  },
  {
    name: "NumPy & Pandas",
    icon: <SiPandas className="text-[#150458] text-xl" />,
    level: 94,
    tag: "Advanced",
    context: "High-performance data manipulation, exploratory data analysis, and tensor operations.",
    projects: ["Data Preprocessing & EDA Pipelines"],
  },
  {
    name: "Keras",
    icon: <SiKeras className="text-[#D00000] text-xl" />,
    level: 85,
    tag: "Proficient",
    context: "Rapid prototyping of deep neural networks and convolutional architectures.",
    projects: ["Deep Learning Models"],
  },
  {
    name: "Jupyter & Notebooks",
    icon: <SiJupyter className="text-[#F37626] text-xl" />,
    level: 95,
    tag: "Advanced",
    context: "Interactive AI experimentation, visual analytics, and research documentation.",
    projects: ["AI Model Notebooks"],
  },
];

const WebDevSkills = [
  {
    name: "React.js",
    icon: <FaReact className="text-[#61DAFB] text-xl" />,
    level: 92,
    tag: "Advanced",
    context:
      "Developing component-driven single-page applications with hooks, state management, and Framer Motion.",
    projects: ["Velora Ecommerce App", "Distributed Marketplace App", "ITI Frontend Internship"],
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#06B6D4] text-xl" />,
    level: 95,
    tag: "Advanced",
    context: "Utility-first responsive design, dark modes, glassmorphism, and custom animations.",
    projects: ["Velora Ecommerce App", "Portfolio Architecture"],
  },
  {
    name: "HTML5 & CSS3",
    icon: <FaHtml5 className="text-[#E34F26] text-xl" />,
    level: 95,
    tag: "Advanced",
    context: "Semantic markup, modern grid/flex layouts, CSS animations, and accessible UI standards.",
    projects: ["All Frontend Web Projects"],
  },
  {
    name: "Django",
    icon: <SiDjango className="text-[#092E20] text-xl" />,
    level: 80,
    tag: "Proficient",
    context: "Python backend REST APIs, authentication, and integration with surveillance AI models.",
    projects: ["Thief Detection System Backend"],
  },
];

const EmbeddedSkills = [
  {
    name: "Arduino",
    icon: <SiArduino className="text-[#00979D] text-xl" />,
    level: 85,
    tag: "Proficient",
    context: "Prototyping embedded hardware circuits and sensor interface systems.",
    projects: ["Hardware Prototyping Systems"],
  },
  {
    name: "ARM Cortex (TM4C123G)",
    icon: <GiProcessor className="text-[#A044FF] text-xl" />,
    level: 80,
    tag: "Proficient",
    context: "Microcontroller architecture, interrupt handling, timers, and embedded C firmware.",
    projects: ["Ain Shams Univ Embedded Engineering Labs"],
  },
  {
    name: "UART & GPIO",
    icon: <BsUsbPlug className="text-[#E0B3FF] text-xl" />,
    level: 85,
    tag: "Proficient",
    context: "Serial communication protocols and hardware pin interfaces.",
    projects: ["Embedded Device Communication"],
  },
  {
    name: "PWM & GPS Interfacing",
    icon: <MdGpsFixed className="text-[#00C9A7] text-xl" />,
    level: 82,
    tag: "Proficient",
    context: "Real-time hardware control signals and GPS module telemetry.",
    projects: ["Real-Time Tracking Systems"],
  },
];

const DatabaseSkills = [
  {
    name: "SQL / MySQL",
    icon: <SiMysql className="text-[#4479A1] text-xl" />,
    level: 90,
    tag: "Advanced",
    context: "Relational schema design, complex joins, indexing, and data normalization.",
    projects: ["Distributed Marketplace Database"],
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-[#336791] text-xl" />,
    level: 85,
    tag: "Proficient",
    context: "Enterprise relational database queries and backend persistence.",
    projects: ["Full-Stack Application Databases"],
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248] text-xl" />,
    level: 80,
    tag: "Proficient",
    context: "NoSQL document store design for modern web applications.",
    projects: ["Node / JS App Backends"],
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-[#FFCA28] text-xl" />,
    level: 82,
    tag: "Proficient",
    context: "Realtime database synchronization, authentication, and cloud hosting.",
    projects: ["Realtime Web & Mobile Apps"],
  },
];

const ToolsAndTechnologySkills = [
  {
    name: "Git & GitHub",
    icon: <FaGithub className="text-white text-xl" />,
    level: 95,
    tag: "Advanced",
    context: "Version control, feature branching, pull requests, and collaborative workflows.",
    projects: ["All Open-Source & Team Repositories"],
  },
  {
    name: "VS Code & Qt Creator",
    icon: <FaCode className="text-[#007ACC] text-xl" />,
    level: 95,
    tag: "Advanced",
    context: "Primary development IDEs configured with linting, debugging, and C++/Python profiling.",
    projects: ["Cross-Platform C++ & Web Engineering"],
  },
  {
    name: "Anaconda & Conda",
    icon: <SiAnaconda className="text-[#44A833] text-xl" />,
    level: 92,
    tag: "Advanced",
    context: "Managing isolated AI/ML virtual environments, PyTorch/CUDA dependencies, and notebooks.",
    projects: ["AI Model Experiments"],
  },
];

const NonTechnicalSkills = [
  {
    name: "Collaborative Teamwork",
    icon: <FaUsers className="text-[#A044FF]" />,
    details: "Led group software projects at Ain Shams University & ITI agile teams.",
  },
  {
    name: "Technical Communication",
    icon: <FaComments className="text-[#00C9A7]" />,
    details: "Articulating AI architectures and system designs clearly to peers and stakeholders.",
  },
  {
    name: "Algorithmic Problem Solving",
    icon: <FaLightbulb className="text-[#FFD700]" />,
    details: "Structured mathematical approach to debugging and optimizing time complexity.",
  },
  {
    name: "Engineering Leadership",
    icon: <FaUserFriends className="text-[#8E2DE2]" />,
    details: "Mentoring peers and coordinating task distribution across full-stack deliverables.",
  },
  {
    name: "Project Management",
    icon: <FaProjectDiagram className="text-[#FF6EC7]" />,
    details: "Breaking down complex engineering goals into achievable sprints.",
  },
];

const LanguageSkills = [
  {
    name: "Arabic",
    level: 100,
    color: "from-emerald-400 to-emerald-600",
    details: "Native professional proficiency",
  },
  {
    name: "English",
    level: 90,
    color: "from-blue-400 to-blue-600",
    details: "Full academic & engineering fluency",
  },
  {
    name: "French",
    level: 45,
    color: "from-purple-400 to-purple-600",
    details: "Beginner conversational",
  },
];

export default function Skills() {
  const [viewMode, setViewMode] = useState("categories"); // "categories" | "matrix"
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(programmingLanguages[1]); // Default to Python

  const filterTabs = [
    { id: "All", label: "All Categories" },
    { id: "Languages", label: "Languages" },
    { id: "AI/ML", label: "AI & ML" },
    { id: "WebDev", label: "Web Dev" },
    { id: "Embedded", label: "Embedded" },
    { id: "Databases & Tools", label: "Data & Tools" },
  ];

  const categoriesData = [
    {
      id: "Languages",
      title: "Programming Languages",
      icon: <FaLaptopCode className="text-2xl text-[#C873FF]" />,
      color: "#A044FF",
      description: "Core algorithmic and software engineering languages.",
      skills: programmingLanguages,
    },
    {
      id: "AI/ML",
      title: "AI & Machine Learning",
      icon: <FaBrain className="text-2xl text-[#E0B3FF]" />,
      color: "#8E2DE2",
      description: "Deep learning models, NLP transformers & computer vision.",
      skills: AiMlSkills,
    },
    {
      id: "WebDev",
      title: "Full-Stack Web Development",
      icon: <FaReact className="text-2xl text-[#61DAFB]" />,
      color: "#6A3093",
      description: "Component-driven frontends & scalable backend APIs.",
      skills: WebDevSkills,
    },
    {
      id: "Embedded",
      title: "Embedded Systems & Hardware",
      icon: <FaMicrochip className="text-2xl text-[#00C9A7]" />,
      color: "#A044FF",
      description: "Microcontroller architecture, GPIO & communication protocols.",
      skills: EmbeddedSkills,
    },
    {
      id: "Databases & Tools",
      title: "Databases & Architecture",
      icon: <FaDatabase className="text-2xl text-[#FFD700]" />,
      color: "#8E2DE2",
      description: "Relational schema design, queries & NoSQL storage.",
      skills: DatabaseSkills,
    },
    {
      id: "Databases & Tools",
      title: "Engineering Tools & IDEs",
      icon: <FaTools className="text-2xl text-[#FF6EC7]" />,
      color: "#6A3093",
      description: "Version control, virtual environments & development workflows.",
      skills: ToolsAndTechnologySkills,
    },
  ];

  // Flatten all skills for searching and matrix view
  const allSkills = [
    ...programmingLanguages,
    ...AiMlSkills,
    ...WebDevSkills,
    ...EmbeddedSkills,
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
    <div className="text-white relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16" id="skillSection">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#6E48AA]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#A044FF]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <motion.h1
        className="relative text-4xl sm:text-5xl md:text-[70px] font-extrabold font-serif text-center 
                   text-transparent bg-clip-text bg-gradient-to-r from-[#6E48AA] via-[#8E2DE2] to-[#A044FF] 
                   mb-6 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Skills & Technical Arsenal
        <span
          className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-32 h-[3px] rounded-full 
                     bg-gradient-to-r from-[#6E48AA] via-[#8E2DE2] to-[#A044FF] 
                     shadow-[0_0_15px_#A044FF] animate-pulse"
        />
      </motion.h1>

      {/* Subtitle */}
      <p className="text-center text-gray-300 max-w-2xl mx-auto text-sm sm:text-base mb-10">
        Click any technology below to inspect practical experience, proficiency level, and real-world application across my projects.
      </p>

      {/* Top Interactive Metric Banner */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
        {[
          { label: "Core Technologies", value: "30+ Specialized" },
          { label: "AI & NLP Stack", value: "Transformers & PyTorch" },
          { label: "Web Architecture", value: "React & Tailwind" },
          { label: "Algorithmic Speed", value: "C++ & Python" },
        ].map((metric, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-gradient-to-br from-[#130326]/80 to-[#080114]/90 border border-[#A044FF]/30 backdrop-blur-md shadow-lg flex flex-col items-center text-center"
          >
            <span className="text-xs text-purple-300 font-medium">{metric.label}</span>
            <span className="text-sm sm:text-base font-bold text-white mt-1">{metric.value}</span>
          </div>
        ))}
      </div>

      {/* Control Bar: View Switcher & Live Search */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 p-1.5 rounded-full bg-[#130324]/90 border border-[#A044FF]/40">
          <button
            onClick={() => setViewMode("categories")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              viewMode === "categories"
                ? "bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white shadow-md"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <FaLayerGroup /> Category Cards
          </button>
          <button
            onClick={() => setViewMode("matrix")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              viewMode === "matrix"
                ? "bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white shadow-md"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <FaChartBar /> Proficiency Matrix
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search skills (e.g. PyTorch, React)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#130326]/90 border border-[#A044FF]/40 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#A044FF] shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <FaTimes />
            </button>
          )}
        </div>
      </div>

      {/* Interactive Skill Spotlight Card (Displays clicked skill details) */}
      <AnimatePresence mode="wait">
        {selectedSkill && (
          <motion.div
            key={selectedSkill.name}
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto mb-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#170433]/95 via-[#1a053b]/95 to-[#110226]/95 border-2 border-[#A044FF] shadow-[0_0_35px_rgba(160,68,255,0.35)] relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-[#090114] border border-[#A044FF]/50 text-2xl sm:text-3xl shrink-0 shadow-inner">
                  {selectedSkill.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {selectedSkill.name}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#A044FF]/25 text-[#E0B3FF] border border-[#A044FF]/40">
                      {selectedSkill.tag}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base mt-1.5 leading-relaxed max-w-3xl">
                    {selectedSkill.context}
                  </p>
                </div>
              </div>

              {/* Proficiency level meter */}
              <div className="flex flex-col items-start md:items-end shrink-0 w-full md:w-48">
                <div className="flex justify-between w-full text-xs font-semibold text-[#E0B3FF] mb-1.5">
                  <span>Proficiency</span>
                  <span>{selectedSkill.level}%</span>
                </div>
                <div className="w-full h-2.5 bg-[#090114] rounded-full overflow-hidden border border-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#6A3093] via-[#A044FF] to-[#E0B3FF]"
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill.level}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
            </div>

            {/* Related Projects chips inside spotlight */}
            {selectedSkill.projects && (
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs text-gray-400 font-semibold mr-1">
                  Applied In Projects:
                </span>
                {selectedSkill.projects.map((proj, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-[#090114]/80 text-xs font-medium text-[#E0B3FF] border border-[#A044FF]/30"
                  >
                    ⚡ {proj}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODE 1: Category Cards View */}
      {viewMode === "categories" && (
        <>
          {/* Category Filter Pills */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  activeCategory === tab.id
                    ? "bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white shadow-[0_0_20px_rgba(160,68,255,0.6)] scale-105"
                    : "bg-[#130324]/70 text-gray-300 border border-[#A044FF]/25 hover:border-[#A044FF] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCategories.map((cat) => {
                const visibleSkills = filterSkillList(cat.skills);
                if (visibleSkills.length === 0) return null;

                return (
                  <motion.div
                    key={cat.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="bg-gradient-to-br from-[#130326]/90 to-[#080114]/90 border border-[#A044FF]/35 hover:border-[#A044FF] rounded-2xl p-6 shadow-xl hover:shadow-[0_0_30px_rgba(160,68,255,0.3)] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3 font-bold text-lg sm:text-xl text-white">
                          {cat.icon}
                          <h3>{cat.title}</h3>
                        </div>
                        <span className="text-xs font-semibold text-purple-300 bg-[#A044FF]/15 px-2.5 py-1 rounded-full border border-[#A044FF]/30">
                          {visibleSkills.length} Skills
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 mb-5">{cat.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {visibleSkills.map((skill) => {
                        const isSelected = selectedSkill?.name === skill.name;
                        return (
                          <motion.button
                            key={skill.name}
                            onClick={() => setSelectedSkill(skill)}
                            whileHover={{ scale: 1.07, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                              isSelected
                                ? "bg-gradient-to-r from-[#6A3093] to-[#A044FF] text-white shadow-[0_0_15px_rgba(160,68,255,0.8)] border border-white/30"
                                : "bg-[#1f093a] text-purple-100 border border-[#A044FF]/40 hover:border-[#E0B3FF]"
                            }`}
                          >
                            {skill.icon}
                            <span>{skill.name}</span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </>
      )}

      {/* MODE 2: Proficiency Matrix View */}
      {viewMode === "matrix" && (
        <div className="max-w-6xl mx-auto space-y-8">
          {[
            {
              title: "Expert & Advanced Arsenal (90%+ Proficiency)",
              subtitle: "Technologies I rely on daily for research, AI pipelines, and full-stack software.",
              skills: filterSkillList(allSkills).filter((s) => s.level >= 90),
              badgeColor: "from-emerald-500 to-teal-600",
            },
            {
              title: "Proficient & Applied Technologies (80% - 89% Proficiency)",
              subtitle: "Tools and frameworks used across university systems, embedded boards, and databases.",
              skills: filterSkillList(allSkills).filter((s) => s.level >= 80 && s.level < 90),
              badgeColor: "from-[#8E2DE2] to-[#4A00E0]",
            },
          ].map((group, gIdx) => (
            <motion.div
              key={gIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-[#130326]/90 to-[#080114]/90 border border-[#A044FF]/35 rounded-2xl p-6 sm:p-8 shadow-xl"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{group.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">{group.subtitle}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <div
                      key={skill.name}
                      onClick={() => setSelectedSkill(skill)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#1b0638] border-[#A044FF] shadow-[0_0_20px_rgba(160,68,255,0.4)]"
                          : "bg-[#090114]/80 border-white/10 hover:border-[#A044FF]/60"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5 font-bold text-white text-sm sm:text-base">
                          {skill.icon}
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-xs font-semibold text-[#E0B3FF]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-[#1a0733] rounded-full overflow-hidden mb-2">
                        <div
                          className="h-full bg-gradient-to-r from-[#6A3093] to-[#A044FF]"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-2">{skill.context}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Human Languages & Engineering Soft Skills Section */}
      <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Soft Skills */}
        <motion.div
          className="bg-gradient-to-br from-[#130326]/90 to-[#080114]/90 border border-[#A044FF]/35 rounded-2xl p-6 sm:p-8 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0B3FF] to-[#A044FF] mb-6">
            Soft Skills & Engineering Practices
          </h2>

          <div className="space-y-3.5">
            {NonTechnicalSkills.map((skill, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-[#1a0733]/60 border border-[#A044FF]/25 hover:border-[#A044FF]/60 transition-all flex items-start gap-3.5"
              >
                <span className="text-xl mt-0.5 shrink-0">{skill.icon}</span>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">{skill.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-0.5">{skill.details}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Human Languages */}
        <motion.div
          className="bg-gradient-to-br from-[#130326]/90 to-[#080114]/90 border border-[#A044FF]/35 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold mb-6">
              <FaLanguage className="text-2xl text-[#A044FF]" />
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0B3FF] to-[#A044FF]">
                Spoken Languages
              </h2>
            </div>

            <div className="space-y-6">
              {LanguageSkills.map((lang, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center text-sm sm:text-base text-gray-200 mb-1.5">
                    <div>
                      <span className="font-bold text-white">{lang.name}</span>
                      <span className="text-xs text-gray-400 ml-2">({lang.details})</span>
                    </div>
                    <span className="text-xs font-semibold text-[#E0B3FF]">{lang.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-[#18052e] rounded-full overflow-hidden border border-white/10 shadow-inner">
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

          <div className="mt-8 p-4 rounded-xl bg-[#1e0a3c]/60 border border-[#A044FF]/30 text-xs text-gray-300 flex items-center gap-3">
            <FaInfoCircle className="text-lg text-[#E0B3FF] shrink-0" />
            <span>
              Fluent in technical writing, academic research papers, and bilingual team collaboration.
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
