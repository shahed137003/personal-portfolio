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
  FaBrain,
  FaLaptopCode,
  FaCrown,
  FaTimes,
  FaBolt,
  FaAward,
  FaLayerGroup,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("experience");
  const [selectedRoleModal, setSelectedRoleModal] = useState(null);
  const { isDarkMode } = useTheme();

  const impactMetrics = [
    {
      icon: <FaBrain className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#be123c]"}`} />,
      title: "Frontend & AI Systems",
      value: "100% User Centric",
      sub: "Transformers & Interactive UI @ Cellula",
      tabTarget: "experience",
    },
    {
      icon: <FaLaptopCode className={`text-2xl ${isDarkMode ? "text-[#FF007A]" : "text-[#BE123C]"}`} />,
      title: "Production Web Applications",
      value: "15+ Complete Apps",
      sub: "React 18, State Management & Modern Web",
      tabTarget: "achievements",
    },
    {
      icon: <FaGraduationCap className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#be123c]"}`} />,
      title: "Engineering Standing",
      value: "Senior Year Candidate",
      sub: "Ain Shams Univ • Faculty of Engineering",
      tabTarget: "education",
    },
  ];

  const timelineData = {
    experience: [
      {
        title: "Frontend & AI Engineering Intern",
        organization: "Cellula Technologies",
        period: "2025",
        location: "Cairo, Egypt",
        badge: "Industry Internship",
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
        title: "Frontend Engineering Intern (React & React Native)",
        organization: "Information Technology Institute (ITI)",
        period: "Summer 2024",
        location: "Egypt",
        badge: "Intensive Program",
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
        title: "B.Sc. in Computer Engineering",
        organization: "Ain Shams University, Faculty of Engineering",
        period: "2021 – Present (Senior Year)",
        location: "Cairo, Egypt",
        badge: "Academic Degree",
        description:
          "Comprehensive computer engineering curriculum focusing on software architecture, algorithms, and web systems.",
        highlights: [
          "Core coursework: Data Structures, Software Engineering, Web Systems, Computer Architecture, and Algorithms.",
          "Developed multiple capstone engineering software applications with user interfaces and data structures.",
        ],
        techStack: ["C++", "Qt Framework", "Data Structures", "Algorithms", "Software Engineering"],
      },
      {
        title: "Python & Applied Data Science Specialization",
        organization: "Coursera / University of Michigan",
        period: "2024",
        location: "Online Professional Certification",
        badge: "Specialization",
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
        title: "15+ Complete Web & Software Systems Shipped",
        organization: "Personal & Academic Engineering Portfolio",
        period: "2023 – 2025",
        location: "Open Source / GitHub",
        badge: "Milestone",
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
    <section className={`relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16 transition-colors duration-500 ${
      isDarkMode ? "text-white" : "text-[#2e0854]"
    }`} id="experienceSection">
      {/* Ambient Glows */}
      <div className={`absolute top-1/4 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
        isDarkMode ? "bg-[#FF007A]/25" : "bg-[#fda4af]/20"
      }`} />
      <div className={`absolute bottom-1/3 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDarkMode ? "bg-[#E01E5A]/20" : "bg-[#fecdd3]/15"
      }`} />

      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-semibold mb-3 shadow-sm ${
          isDarkMode
            ? "bg-[#10030a] border-[#FF007A]/40 text-[#FDA4AF] shadow-[0_0_15px_rgba(255,0,122,0.3)]"
            : "bg-[#ffe4e6] border-[#be123c]/30 text-[#BE123C]"
        }`}>
          <FaCrown className={isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"} />
          <span>Professional & Academic Trajectory</span>
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-[68px] font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-[#FF007A] to-[#E01E5A] dark:from-white dark:via-[#FDA4AF] dark:to-[#FF007A] tracking-wide">
          Experience & Education
        </h1>
        <p className={`max-w-2xl mx-auto text-sm sm:text-base mt-3 ${
          isDarkMode ? "text-gray-300" : "text-[#881337]"
        }`}>
          Explore my journey combining applied Frontend engineering internships with formal Computer Engineering academic rigor.
        </p>
      </motion.div>

      {/* 1. CAREER TRAJECTORY COMMAND CENTER (TOP HERO CARDS) */}
      <motion.div
        className={`max-w-6xl mx-auto mb-14 rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all duration-500 ${
          isDarkMode
            ? "bg-gradient-to-br from-[#180510]/95 via-[#10030a]/95 to-[#0b0207]/95 border-[#FF007A]/60 shadow-[0_0_45px_rgba(255,0,122,0.35)]"
            : "bg-gradient-to-br from-[#ffffff] via-[#fff1f2] to-[#ffe4e6] border-[#be123c]/40 shadow-[0_10px_35px_rgba(225,29,72,0.15)]"
        }`}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b pb-5 ${
          isDarkMode ? "border-[#FF007A]/35" : "border-[#be123c]/25"
        }`}>
          <div>
            <span className={`text-xs font-bold uppercase tracking-wider ${
              isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
            }`}>
              Key Career Milestones
            </span>
            <h3 className={`text-xl sm:text-2xl font-extrabold mt-0.5 ${
              isDarkMode ? "text-white" : "text-[#4c0519]"
            }`}>
              Impact Highlights
            </h3>
          </div>
          <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${
            isDarkMode ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/30" : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
          }`}>
            Click any card to spotlight category
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {impactMetrics.map((metric, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTab(metric.tabTarget)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                isDarkMode
                  ? "bg-[#10030a] border-[#FF007A]/30 hover:border-[#FDA4AF] hover:shadow-[0_0_25px_rgba(255,0,122,0.4)]"
                  : "bg-[#fff1f2] border-[#be123c]/30 hover:border-[#e11d48] hover:shadow-[0_8px_25px_rgba(225,29,72,0.18)]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3.5 rounded-2xl border ${
                    isDarkMode ? "bg-[#10030a] border-[#FF007A]/45" : "bg-[#fecdd3] border-[#be123c]/35"
                  }`}>
                    {metric.icon}
                  </div>
                  <span className={`text-xs font-bold group-hover:underline ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    View Category →
                  </span>
                </div>

                <h4 className={`text-2xl font-black transition-colors ${
                  isDarkMode ? "text-white group-hover:text-[#FDA4AF]" : "text-[#4c0519] group-hover:text-[#be123c]"
                }`}>
                  {metric.value}
                </h4>
                <p className={`text-sm font-bold mt-1 ${
                  isDarkMode ? "text-gray-200" : "text-[#881337]"
                }`}>
                  {metric.title}
                </p>
              </div>

              <p className={`text-xs mt-3 pt-3 border-t ${
                isDarkMode ? "border-[#FF007A]/25 text-[#FDA4AF]" : "border-[#be123c]/20 text-[#BE123C]"
              }`}>
                {metric.sub}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 2. CATEGORY SWITCHER CAPSULES */}
      <div className="max-w-4xl mx-auto flex justify-center gap-3 flex-wrap mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-[#E01E5A] via-[#F43F5E] to-[#FF007A] text-white shadow-[0_0_25px_rgba(255,0,122,0.6)] scale-105 border border-[#FDA4AF]/40"
                : isDarkMode
                ? "bg-[#10030a]/80 text-[#FDA4AF] hover:text-white border border-[#FF007A]/30 hover:border-[#FF007A]"
                : "bg-[#ffe4e6] text-[#BE123C] hover:text-[#4c0519] border border-[#be123c]/30 hover:border-[#be123c]"
            }`}
          >
            <span className="text-base">{tab.icon}</span>
            <span>{tab.label}</span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${
              isDarkMode ? "bg-[#10030a] text-[#FDA4AF]" : "bg-[#fecdd3] text-[#BE123C]"
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* 3. TIMELINE */}
      <div className="max-w-5xl mx-auto relative pl-4 sm:pl-8">
        <div className="absolute left-6 sm:left-10 top-2 bottom-2 w-1 bg-gradient-to-b from-[#FF007A] via-[#FDA4AF] to-[#E01E5A] rounded-full shadow-[0_0_15px_#FF007A]" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="space-y-10"
          >
            {timelineData[activeTab].map((item, index) => (
              <motion.div
                key={item.title + index}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 sm:pl-12 group"
              >
                {/* Node */}
                <div className={`absolute left-2.5 sm:left-6 top-6 -translate-x-1/2 w-7 h-7 rounded-full border-2 flex items-center justify-center z-20 group-hover:scale-125 transition-transform ${
                  isDarkMode
                    ? "bg-[#180510] border-[#FDA4AF] shadow-[0_0_20px_#FF007A]"
                    : "bg-[#ffe4e6] border-[#be123c] shadow-[0_0_15px_#be123c]"
                }`}>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF007A] animate-pulse" />
                </div>

                {/* Timeline Card */}
                <div
                  onClick={() => setSelectedRoleModal(item)}
                  className={`rounded-3xl border p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${
                    isDarkMode
                      ? "bg-gradient-to-br from-[#180510]/95 via-[#10030a]/95 to-[#0b0207]/95 border-[#FF007A]/45 hover:border-[#FDA4AF] hover:shadow-[0_0_35px_rgba(255,0,122,0.45)] text-white"
                      : "bg-gradient-to-br from-[#ffffff] via-[#fff1f2] to-[#ffe4e6] border-[#be123c]/35 hover:border-[#e11d48] hover:shadow-[0_10px_35px_rgba(225,29,72,0.18)] text-[#4c0519]"
                  }`}
                >
                  {/* Card Header */}
                  <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 mb-5 ${
                    isDarkMode ? "border-[#FF007A]/30" : "border-[#be123c]/20"
                  }`}>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${
                          isDarkMode ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/40" : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
                        }`}>
                          {item.badge}
                        </span>
                        <span className={`text-xs font-semibold flex items-center gap-1 ${
                          isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                        }`}>
                          <FaMapMarkerAlt className="text-[#FF007A]" /> {item.location}
                        </span>
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-extrabold transition-colors ${
                        isDarkMode ? "text-white group-hover:text-[#FDA4AF]" : "text-[#4c0519] group-hover:text-[#be123c]"
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm font-bold mt-0.5 ${
                        isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                      }`}>
                        {item.organization}
                      </p>
                    </div>

                    <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-bold shrink-0 ${
                      isDarkMode ? "bg-[#10030a] border-[#FF007A]/40 text-white" : "bg-[#ffe4e6] border-[#be123c]/30 text-[#4c0519]"
                    }`}>
                      <FaCalendarAlt className="text-[#FF007A]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-5 ${
                    isDarkMode ? "text-gray-300" : "text-[#881337]"
                  }`}>
                    {item.description}
                  </p>

                  {/* Deliverables Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3">
                        <FaCheckCircle className={`text-sm shrink-0 mt-1 ${
                          isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                        }`} />
                        <span className={`text-xs sm:text-sm leading-relaxed ${
                          isDarkMode ? "text-gray-200" : "text-[#4c0519]"
                        }`}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className={`flex flex-wrap items-center justify-between gap-4 pt-4 border-t ${
                    isDarkMode ? "border-[#FF007A]/25" : "border-[#be123c]/20"
                  }`}>
                    <div className="flex flex-wrap gap-1.5">
                      {item.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                            isDarkMode
                              ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/35"
                              : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className={`text-xs font-bold transition-colors flex items-center gap-1.5 ${
                      isDarkMode ? "text-[#FDA4AF] group-hover:text-white" : "text-[#BE123C] group-hover:text-[#4c0519]"
                    }`}>
                      <span>Inspect Role Details</span>
                      <FaBolt className="text-xs" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ROLE DEEP-DIVE INSPECTION MODAL */}
      <AnimatePresence>
        {selectedRoleModal && (
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRoleModal(null)}
          >
            <motion.div
              className={`relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border ${
                isDarkMode
                  ? "border-[#FF007A] bg-gradient-to-br from-[#180510] to-[#0b0207] text-white shadow-[0_0_50px_rgba(255,0,122,0.6)]"
                  : "border-[#be123c] bg-gradient-to-br from-[#ffffff] to-[#fff1f2] text-[#4c0519] shadow-[0_15px_45px_rgba(225,29,72,0.25)]"
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-2 w-full bg-gradient-to-r from-[#E01E5A] via-[#FDA4AF] to-[#FF007A]" />

              <div className={`p-6 border-b flex items-center justify-between ${
                isDarkMode ? "border-[#FF007A]/30" : "border-[#be123c]/25"
              }`}>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    {selectedRoleModal.badge} • {selectedRoleModal.period}
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-extrabold mt-0.5 ${
                    isDarkMode ? "text-white" : "text-[#4c0519]"
                  }`}>
                    {selectedRoleModal.title}
                  </h3>
                  <p className={`text-sm font-bold ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    {selectedRoleModal.organization} ({selectedRoleModal.location})
                  </p>
                </div>

                <button
                  onClick={() => setSelectedRoleModal(null)}
                  className={`p-2.5 rounded-full transition-all ${
                    isDarkMode ? "bg-[#10030a] text-white hover:bg-[#FF007A]" : "bg-[#ffe4e6] text-[#4c0519] hover:bg-[#be123c] hover:text-white"
                  }`}
                >
                  <FaTimes size={16} />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    Role Summary & Objectives
                  </h4>
                  <p className={`text-sm leading-relaxed ${
                    isDarkMode ? "text-gray-200" : "text-[#881337]"
                  }`}>
                    {selectedRoleModal.description}
                  </p>
                </div>

                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    Key Deliverables & Engineering Outcomes
                  </h4>
                  <div className="space-y-2.5">
                    {selectedRoleModal.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3">
                        <FaCheckCircle className={`text-sm shrink-0 mt-1 ${
                          isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                        }`} />
                        <span className={`text-sm leading-relaxed ${
                          isDarkMode ? "text-gray-200" : "text-[#4c0519]"
                        }`}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    Technologies & Architecture Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRoleModal.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border ${
                          isDarkMode
                            ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/45"
                            : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/40"
                        }`}
                      >
                        ✓ {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`pt-4 border-t flex justify-end ${
                  isDarkMode ? "border-[#FF007A]/30" : "border-[#be123c]/20"
                }`}>
                  <button
                    onClick={() => setSelectedRoleModal(null)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#E01E5A] via-[#F43F5E] to-[#FF007A] text-white font-bold text-xs sm:text-sm shadow-md"
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
