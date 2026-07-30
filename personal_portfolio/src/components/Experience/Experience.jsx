import React, { useState } from "react";
import "./Experience.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaCrown,
  FaTimes,
  FaBolt,
  FaChevronRight,
  FaRocket,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("experience");
  const [selectedModal, setSelectedModal] = useState(null);
  const { isDarkMode } = useTheme();

  const timelineData = {
    experience: [
      {
        id: "cellula",
        title: "Frontend & AI Engineering Intern",
        organization: "Cellula Technologies",
        period: "2025",
        location: "Cairo, Egypt",
        badge: "Industry Internship",
        keyMetric: "98.4% AI Safety Accuracy",
        description:
          "Applied software engineering internship building interactive frontend user interfaces and integrating fine-tuned deep learning models.",
        highlights: [
          "Developed responsive web interfaces for interacting with fine-tuned Transformer models (BERT & LLaMA variants).",
          "Built intuitive frontend visualization components for real-time computer vision object detection and motion analysis.",
          "Collaborated closely with cross-functional engineering teams to optimize UI performance and client-side data rendering.",
        ],
        techStack: ["React 18", "JavaScript", "PyTorch", "Transformers", "OpenCV", "Python"],
      },
      {
        id: "iti",
        title: "Frontend Engineering Intern (React & React Native)",
        organization: "Information Technology Institute (ITI)",
        period: "Summer 2024",
        location: "Egypt",
        badge: "Intensive Program",
        keyMetric: "99+ Lighthouse Score",
        description:
          "Completed comprehensive software engineering training building production-grade dynamic web single-page apps and cross-platform mobile user interfaces.",
        highlights: [
          "Developed responsive, accessible single-page applications using React 18+, functional components, and custom hooks.",
          "Architected stateful UI components and integrated RESTful APIs with clean error handling and fast client-side routing.",
          "Collaborated in agile sprint teams using Git workflows and structured code reviews.",
        ],
        techStack: ["React 18", "JavaScript ES6+", "REST APIs", "State Management", "Git"],
      },
    ],
    education: [
      {
        id: "asu",
        title: "B.Sc. in Computer Engineering",
        organization: "Ain Shams University, Faculty of Engineering",
        period: "2021 – Present (Senior Year)",
        location: "Cairo, Egypt",
        badge: "Academic Degree",
        keyMetric: "Senior Year Candidate",
        description:
          "Comprehensive computer engineering curriculum focusing on software architecture, algorithms, and web systems.",
        highlights: [
          "Core coursework: Data Structures, Software Engineering, Web Systems, Computer Architecture, and Algorithms.",
          "Developed multiple capstone engineering software applications with user interfaces and data structures.",
        ],
        techStack: ["C++", "Qt Framework", "Data Structures", "Algorithms", "Software Engineering"],
      },
      {
        id: "michigan",
        title: "Python & Applied Data Science Specialization",
        organization: "Coursera / University of Michigan",
        period: "2024",
        location: "Online Certification",
        badge: "Specialization",
        keyMetric: "Specialization Certificate",
        description:
          "Advanced programmatic data processing, web scraping, SQL integration, and programmatic UI data integration.",
        highlights: [
          "Mastered Python programmatic data structures, regular expressions, and network protocols.",
          "Built automated pipelines for processing JSON, XML, and relational SQL database schemas for frontend rendering.",
        ],
        techStack: ["Python 3", "SQL", "Web Scraping", "Data Pipelines"],
      },
    ],
    achievements: [
      {
        id: "shipped",
        title: "15+ Complete Web & Software Systems Shipped",
        organization: "Personal & Academic Engineering Portfolio",
        period: "2023 – 2025",
        location: "Open Source / GitHub",
        badge: "Milestone",
        keyMetric: "15+ Production Apps",
        description:
          "Built and deployed end-to-end frontend applications spanning AI/RAG chat assistants, online marketplace storefronts, and desktop developer tools.",
        highlights: [
          "Velora E-Commerce React 18 & Vite Modern Storefront",
          "Distributed Online Marketplace Frontend & REST API Integration",
          "Code Assistant Chatbot Interactive AI Interface with LangGraph RAG",
        ],
        techStack: ["React 18", "Tailwind CSS", "JavaScript", "Framer Motion", "REST APIs"],
      },
    ],
  };

  const tabs = [
    {
      id: "experience",
      label: "Industry Experience",
      icon: <FaBriefcase />,
      count: timelineData.experience.length,
    },
    {
      id: "education",
      label: "Education & Degrees",
      icon: <FaGraduationCap />,
      count: timelineData.education.length,
    },
    {
      id: "achievements",
      label: "Major Milestones",
      icon: <FaTrophy />,
      count: timelineData.achievements.length,
    },
  ];

  return (
    <section
      className={`relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16 transition-colors duration-500 ${
        isDarkMode ? "text-white" : "text-[#2e0854]"
      }`}
      id="experienceSection"
    >
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
              : "bg-[#ffe4e6] border-[#be123c]/30 text-[#800020]"
          }`}
        >
          <FaCrown className={isDarkMode ? "text-[#FDA4AF]" : "text-[#800020]"} />
          <span>Professional & Academic Trajectory</span>
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-[64px] font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-[#FF007A] to-[#E01E5A] dark:from-white dark:via-[#FDA4AF] dark:to-[#FF007A] tracking-wide">
          Experience & Education
        </h1>
        <p
          className={`max-w-2xl mx-auto text-sm sm:text-base mt-3 ${
            isDarkMode ? "text-gray-300" : "text-[#881337]"
          }`}
        >
          Applied industry internships at Cellula Technologies & ITI alongside formal Computer Engineering degree candidate standing at Ain Shams University.
        </p>
      </motion.div>

      {/* Category Switcher Pills */}
      <div className="max-w-4xl mx-auto flex justify-center gap-3 flex-wrap mb-14">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-[#E01E5A] via-[#F43F5E] to-[#FF007A] text-white shadow-[0_0_25px_rgba(255,0,122,0.5)] scale-105"
                : isDarkMode
                ? "bg-[#10030a]/80 text-[#FDA4AF] hover:text-white border border-[#FF007A]/30 hover:border-[#FF007A]"
                : "bg-[#ffe4e6] text-[#BE123C] hover:text-[#4c0519] border border-[#be123c]/30 hover:border-[#be123c]"
            }`}
          >
            <span className="text-base">{tab.icon}</span>
            <span>{tab.label}</span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-black ${
                isDarkMode ? "bg-[#10030a] text-[#FDA4AF]" : "bg-[#fecdd3] text-[#BE123C]"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* -------- CARDLESS GLOWING NEON STREAM TIMELINE -------- */}
      <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10">
        {/* Glowing Vertical Stem Line */}
        <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-1 bg-gradient-to-b from-[#FF007A] via-[#FDA4AF] to-[#E01E5A] rounded-full shadow-[0_0_15px_#FF007A]" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="space-y-12"
          >
            {timelineData[activeTab].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="relative pl-8 sm:pl-12 group cursor-pointer"
                onClick={() => setSelectedModal(item)}
              >
                {/* Stem Node Dot with Pulsing Beacon */}
                <div
                  className={`absolute left-0 sm:left-2 top-1.5 -translate-x-1/2 w-7 h-7 rounded-full border-2 flex items-center justify-center z-20 group-hover:scale-125 transition-transform ${
                    isDarkMode
                      ? "bg-[#180510] border-[#FDA4AF] shadow-[0_0_20px_#FF007A]"
                      : "bg-[#ffe4e6] border-[#be123c] shadow-[0_0_15px_#be123c]"
                  }`}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF007A] animate-ping" />
                </div>

                {/* Balanced 8%-10% Glass Card Container Item */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-sm transition-all shadow-sm space-y-4 mb-6 ${
                    isDarkMode
                      ? "bg-[#10030a]/08 border-[#FF007A]/20 hover:border-[#FF007A]/50 shadow-[0_4px_20px_rgba(255,0,122,0.06)] text-white"
                      : "bg-white/10 border-[#be123c]/15 hover:border-[#be123c]/45 shadow-[0_4px_15px_rgba(225,29,72,0.03)] text-[#4c0519]"
                  }`}
                >
                  {/* Top Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-mono font-bold px-3 py-0.5 rounded-full border ${
                          isDarkMode
                            ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/40"
                            : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
                        }`}
                      >
                        {item.badge}
                      </span>
                      <span
                        className={`text-xs font-mono font-extrabold px-3 py-0.5 rounded-full border ${
                          isDarkMode
                            ? "bg-[#180510] text-[#FDA4AF] border-[#FF007A]/40"
                            : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
                        }`}
                      >
                        {item.keyMetric}
                      </span>
                    </div>

                    <span
                      className={`text-xs font-mono font-bold flex items-center gap-1.5 ${
                        isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                      }`}
                    >
                      <FaCalendarAlt className="text-[#FF007A]" /> {item.period}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3
                      className={`text-2xl sm:text-3xl font-extrabold transition-colors ${
                        isDarkMode ? "text-white group-hover:text-[#FDA4AF]" : "text-[#4c0519] group-hover:text-[#be123c]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm font-bold mt-1 flex items-center gap-2 ${
                        isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                      }`}
                    >
                      <span>{item.organization}</span>
                      <span>•</span>
                      <span className={`flex items-center gap-1 font-semibold ${isDarkMode ? "text-gray-300" : "text-[#4c0519]"}`}>
                        <FaMapMarkerAlt className="text-[#FF007A] text-xs" /> {item.location}
                      </span>
                    </p>
                  </div>

                  {/* Description Paragraph */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-[#881337]"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Deliverables Highlights Checklist */}
                  <div className="space-y-2 pt-1">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <FaCheckCircle
                          className={`text-sm shrink-0 mt-0.5 ${
                            isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                          }`}
                        />
                        <span
                          className={`text-xs sm:text-sm leading-relaxed ${
                            isDarkMode ? "text-gray-200" : "text-[#4c0519]"
                          }`}
                        >
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips & Action Link */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3">
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.map((tech) => (
                        <motion.span
                          whileHover={{ scale: 1.08 }}
                          key={tech}
                          className={`px-3 py-1 rounded-xl text-xs font-semibold border transition-all ${
                            isDarkMode
                              ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/35"
                              : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <span
                      className={`text-xs font-bold transition-colors flex items-center gap-1.5 ${
                        isDarkMode ? "text-[#FDA4AF] group-hover:text-white" : "text-[#BE123C] group-hover:text-[#4c0519]"
                      }`}
                    >
                      <span>Deep Inspection</span>
                      <FaBolt className="text-xs text-[#FF007A]" />
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DEEP INSPECTION MODAL */}
      <AnimatePresence>
        {selectedModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedModal(null)}
          >
            <motion.div
              className={`relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border ${
                isDarkMode
                  ? "border-[#FF007A] bg-gradient-to-br from-[#180510] to-[#0b0207] text-white shadow-[0_0_50px_rgba(255,0,122,0.5)]"
                  : "border-[#be123c] bg-gradient-to-br from-[#ffffff] to-[#fff1f2] text-[#4c0519] shadow-xl"
              }`}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[#E01E5A] via-[#FDA4AF] to-[#FF007A]" />

              <div
                className={`p-6 border-b flex items-center justify-between ${
                  isDarkMode ? "border-[#FF007A]/30" : "border-[#be123c]/25"
                }`}
              >
                <div>
                  <span
                    className={`text-xs font-mono font-bold uppercase tracking-wider ${
                      isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                    }`}
                  >
                    {selectedModal.badge} • {selectedModal.period}
                  </span>
                  <h3
                    className={`text-xl sm:text-2xl font-extrabold mt-0.5 ${
                      isDarkMode ? "text-white" : "text-[#4c0519]"
                    }`}
                  >
                    {selectedModal.title}
                  </h3>
                  <p
                    className={`text-sm font-bold ${
                      isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                    }`}
                  >
                    {selectedModal.organization} ({selectedModal.location})
                  </p>
                </div>

                <button
                  onClick={() => setSelectedModal(null)}
                  className={`p-2.5 rounded-full transition-all cursor-pointer ${
                    isDarkMode
                      ? "bg-[#10030a] text-white hover:bg-[#FF007A]"
                      : "bg-[#ffe4e6] text-[#4c0519] hover:bg-[#be123c] hover:text-white"
                  }`}
                >
                  <FaTimes size={16} />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4
                    className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                      isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                    }`}
                  >
                    Role & Educational Objectives
                  </h4>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDarkMode ? "text-gray-200" : "text-[#881337]"
                    }`}
                  >
                    {selectedModal.description}
                  </p>
                </div>

                <div>
                  <h4
                    className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                      isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                    }`}
                  >
                    Deliverables & Technical Achievements
                  </h4>
                  <div className="space-y-2.5">
                    {selectedModal.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <FaCheckCircle
                          className={`text-sm shrink-0 mt-0.5 ${
                            isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                          }`}
                        />
                        <span
                          className={`text-xs sm:text-sm leading-relaxed ${
                            isDarkMode ? "text-gray-200" : "text-[#4c0519]"
                          }`}
                        >
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4
                    className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                      isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                    }`}
                  >
                    Verified Technologies & Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedModal.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-xl text-xs font-semibold border ${
                          isDarkMode
                            ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/40"
                            : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/35"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`pt-4 border-t flex justify-end ${
                    isDarkMode ? "border-[#FF007A]/30" : "border-[#be123c]/20"
                  }`}
                >
                  <button
                    onClick={() => setSelectedModal(null)}
                    className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#E01E5A] via-[#F43F5E] to-[#FF007A] text-white font-bold text-xs sm:text-sm shadow-md cursor-pointer"
                  >
                    Close Inspection
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
