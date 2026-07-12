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

export default function Experience() {
  const [activeTab, setActiveTab] = useState("experience");
  const [selectedRoleModal, setSelectedRoleModal] = useState(null);

  const impactMetrics = [
    {
      icon: <FaBrain className="text-2xl text-[#E0B3FF]" />,
      title: "AI Model Accuracy Boost",
      value: "+10% over Baseline",
      sub: "Transformers & Computer Vision @ Cellula",
      tabTarget: "experience",
    },
    {
      icon: <FaLaptopCode className="text-2xl text-[#A044FF]" />,
      title: "Production Systems Built",
      value: "15+ Complete Apps",
      sub: "Full-Stack React, .NET Core & Python RAG",
      tabTarget: "achievements",
    },
    {
      icon: <FaGraduationCap className="text-2xl text-[#E0B3FF]" />,
      title: "Engineering Standing",
      value: "Senior Year Candidate",
      sub: "Ain Shams Univ • Faculty of Engineering",
      tabTarget: "education",
    },
  ];

  const timelineData = {
    experience: [
      {
        title: "NLP & Computer Vision Engineering Intern",
        organization: "Cellula Technologies",
        period: "2025",
        location: "Cairo, Egypt",
        badge: "Industry Internship",
        description:
          "Intensive research & engineering internship focusing on applied deep learning models across natural language processing and computer vision pipelines.",
        highlights: [
          "Fine-tuned transformer architectures (BERT & LLaMA variants) for Named Entity Recognition and sentiment classification workflows.",
          "Implemented Convolutional Neural Networks (CNNs) & YOLOv8 pipelines for real-time object detection and feature extraction.",
          "Achieved a +10% accuracy improvement over baseline models on evaluation datasets through rigorous hyperparameters optimization.",
        ],
        techStack: ["PyTorch", "Transformers", "BERT", "OpenCV", "YOLOv8", "Python"],
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
          "Comprehensive engineering curriculum covering low-level embedded hardware, operating systems, algorithms, and artificial intelligence.",
        highlights: [
          "Core coursework: Data Structures, Algorithms, Computer Architecture, Embedded Microcontrollers, and AI Systems.",
          "Developed multiple capstone engineering systems including a Qt C++ CPU Scheduler and a Cross-Platform XML Parser.",
        ],
        techStack: ["C++", "Qt Framework", "Data Structures", "Algorithms", "OS Scheduling"],
      },
      {
        title: "Python & Applied Data Science Specialization",
        organization: "Coursera / University of Michigan",
        period: "2024",
        location: "Online Professional Certification",
        badge: "Specialization",
        description:
          "Advanced programmatic data processing, web scraping, SQL integration, and algorithmic problem solving.",
        highlights: [
          "Mastered Python programmatic data structures, regular expressions, and network protocols.",
          "Built automated pipelines for processing JSON, XML, and relational SQL database schemas.",
        ],
        techStack: ["Python 3", "SQL", "Web Scraping", "Data Pipelines"],
      },
    ],
    achievements: [
      {
        title: "15+ Complete Software & AI Systems Shipped",
        organization: "Personal & Academic Engineering Portfolio",
        period: "2023 – 2025",
        location: "Open Source / GitHub",
        badge: "Milestone",
        description:
          "Built and deployed end-to-end applications spanning AI/RAG assistants, surveillance motion detection, online marketplaces, and desktop IDE tools.",
        highlights: [
          "Distributed Online Marketplace (.NET Core & React Single-Page Application)",
          "Code Assistant Chatbot with Retrieval-Augmented Generation (RAG)",
          "Thief Detection Computer Vision System with OpenCV & Django Python Backend",
        ],
        techStack: [".NET Core", "React", "OpenCV", "Django", "LangGraph", "FAISS"],
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
    <section className="text-white relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16" id="experienceSection">
      {/* Old Purple Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#6A3093]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-[#A044FF]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e083c] border border-[#A044FF]/40 text-xs sm:text-sm font-semibold text-[#E0B3FF] mb-3 shadow-[0_0_15px_rgba(160,68,255,0.3)]">
          <FaCrown className="text-[#E0B3FF]" />
          <span>Professional & Academic Trajectory</span>
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-[68px] font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0B3FF] to-[#A044FF] tracking-wide">
          Experience & Education
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base mt-3">
          Explore my journey combining applied AI & Computer Vision research internships with formal Computer Engineering academic rigor.
        </p>
      </motion.div>

      {/* 1. SHOWSTOPPING CAREER TRAJECTORY COMMAND CENTER (TOP HERO CARDS) */}
      <motion.div
        className="max-w-6xl mx-auto mb-14 bg-gradient-to-br from-[#180630]/95 via-[#120324]/95 to-[#0e021e]/95 border-2 border-[#A044FF]/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_45px_rgba(160,68,255,0.35)]"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-[#A044FF]/35 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E0B3FF]">
              Key Career Milestones
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
              Impact Highlights
            </h3>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/30">
            Click any card to spotlight category
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {impactMetrics.map((metric, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTab(metric.tabTarget)}
              className="p-6 rounded-2xl bg-[#130326] border border-[#A044FF]/30 hover:border-[#E0B3FF] transition-all duration-300 hover:shadow-[0_0_25px_rgba(160,68,255,0.4)] cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3.5 rounded-2xl bg-[#1e083c] border border-[#A044FF]/45 group-hover:scale-110 transition-transform">
                    {metric.icon}
                  </div>
                  <span className="text-xs font-bold text-[#E0B3FF] group-hover:underline">
                    View Category →
                  </span>
                </div>

                <h4 className="text-2xl font-black text-white group-hover:text-[#E0B3FF] transition-colors">
                  {metric.value}
                </h4>
                <p className="text-sm font-bold text-gray-200 mt-1">
                  {metric.title}
                </p>
              </div>

              <p className="text-xs text-purple-300 mt-3 pt-3 border-t border-[#A044FF]/25">
                {metric.sub}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 2. INTERACTIVE CATEGORY CAPSULE SWITCHER */}
      <div className="max-w-4xl mx-auto flex justify-center gap-3 flex-wrap mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-[#6A3093] via-[#8E2DE2] to-[#A044FF] text-white shadow-[0_0_25px_rgba(160,68,255,0.6)] scale-105 border border-[#E0B3FF]/40"
                : "bg-[#140428]/80 text-purple-200 hover:text-white border border-[#A044FF]/30 hover:border-[#A044FF]"
            }`}
          >
            <span className="text-base">{tab.icon}</span>
            <span>{tab.label}</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#0e021e] text-xs font-black text-[#E0B3FF]">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* 3. SHOWSTOPPING HOLOGRAPHIC AMETHYST TIMELINE */}
      <div className="max-w-5xl mx-auto relative pl-4 sm:pl-8">
        {/* Glowing Purple Vertical Timeline Line */}
        <div className="absolute left-6 sm:left-10 top-2 bottom-2 w-1 bg-gradient-to-b from-[#A044FF] via-[#E0B3FF] to-[#6A3093] rounded-full shadow-[0_0_15px_#A044FF]" />

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
                {/* Timeline Pulsing Node */}
                <div className="absolute left-2.5 sm:left-6 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-[#180630] border-2 border-[#E0B3FF] flex items-center justify-center shadow-[0_0_20px_#A044FF] z-20 group-hover:scale-125 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E0B3FF] animate-pulse" />
                </div>

                {/* Glassmorphic Timeline Card */}
                <div
                  onClick={() => setSelectedRoleModal(item)}
                  className="rounded-3xl bg-gradient-to-br from-[#180630]/95 via-[#120324]/95 to-[#0e021e]/95 border border-[#A044FF]/45 hover:border-[#E0B3FF] p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(160,68,255,0.45)] cursor-pointer"
                >
                  {/* Card Top Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#A044FF]/30 pb-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/40">
                          {item.badge}
                        </span>
                        <span className="text-xs text-purple-300 font-semibold flex items-center gap-1">
                          <FaMapMarkerAlt className="text-[#A044FF]" /> {item.location}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#E0B3FF] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm font-bold text-[#E0B3FF] mt-0.5">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#1e083c] border border-[#A044FF]/40 text-xs font-bold text-white shrink-0">
                      <FaCalendarAlt className="text-[#E0B3FF]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Deliverables Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-[#E0B3FF] text-sm shrink-0 mt-1" />
                        <span className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#A044FF]/25">
                    <div className="flex flex-wrap gap-1.5">
                      {item.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg text-xs font-bold bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/35"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-bold text-[#E0B3FF] group-hover:text-white transition-colors flex items-center gap-1.5">
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

      {/* ROLE DEEP-DIVE INSPECTION MODAL (PURE OLD PURPLE) */}
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
              className="relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(160,68,255,0.6)] border-2 border-[#A044FF] bg-gradient-to-br from-[#16032e] to-[#0d011c]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-2 w-full bg-gradient-to-r from-[#6A3093] via-[#E0B3FF] to-[#A044FF]" />

              <div className="p-6 border-b border-[#A044FF]/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#E0B3FF] uppercase tracking-wider">
                    {selectedRoleModal.badge} • {selectedRoleModal.period}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                    {selectedRoleModal.title}
                  </h3>
                  <p className="text-sm font-bold text-[#E0B3FF]">
                    {selectedRoleModal.organization} ({selectedRoleModal.location})
                  </p>
                </div>

                <button
                  onClick={() => setSelectedRoleModal(null)}
                  className="bg-[#1e083c] text-white p-2.5 rounded-full hover:bg-[#A044FF] transition-all"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-[#E0B3FF] uppercase tracking-wider mb-2">
                    Role Summary & Objectives
                  </h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {selectedRoleModal.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#E0B3FF] uppercase tracking-wider mb-2.5">
                    Key Deliverables & Engineering Outcomes
                  </h4>
                  <div className="space-y-2.5">
                    {selectedRoleModal.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-[#E0B3FF] text-sm shrink-0 mt-1" />
                        <span className="text-sm text-gray-200 leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#E0B3FF] uppercase tracking-wider mb-2.5">
                    Technologies & Architecture Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRoleModal.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/45"
                      >
                        ✓ {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#A044FF]/30 flex justify-end">
                  <button
                    onClick={() => setSelectedRoleModal(null)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#6A3093] via-[#8E2DE2] to-[#A044FF] text-white font-bold text-xs sm:text-sm shadow-md"
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
