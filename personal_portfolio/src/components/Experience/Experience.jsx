import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode, FaExternalLinkAlt, FaAward } from "react-icons/fa";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Industry & Internships", icon: <FaBriefcase /> },
    { id: "education", label: "Education & Academic", icon: <FaGraduationCap /> },
    { id: "milestones", label: "Achievements & Focus", icon: <FaAward /> },
  ];

  const experienceData = [
    {
      role: "NLP & AI Research Intern",
      company: "Cellula Technology",
      period: "Internship Training",
      category: "experience",
      description:
        "Researched and implemented cutting-edge transformer models including BERT, DistilBERT, and LLaMA Guard. Enhanced Named Entity Recognition (NER) and sentiment classification tasks, boosting model accuracy over baseline benchmarks by 10%.",
      skills: ["Python", "Transformers", "BERT / DistilBERT", "LLaMA Guard", "PyTorch"],
      highlight: "10% accuracy gain over baselines",
    },
    {
      role: "Computer Vision Intern",
      company: "Cellula Technology",
      period: "Internship Training",
      category: "experience",
      description:
        "Designed, architected, and optimized deep convolutional neural networks (CNNs) for real-time object detection and classification workflows utilizing TensorFlow and PyTorch.",
      skills: ["Computer Vision", "OpenCV", "CNNs", "TensorFlow", "PyTorch"],
      highlight: "End-to-End Object Detection Pipeline",
    },
    {
      role: "Frontend & Mobile App Developer Intern",
      company: "Information Technology Institute (ITI)",
      period: "Intensive Internship Program",
      category: "experience",
      description:
        "Developed responsive, high-performance web applications and cross-platform mobile apps using React and React Native. Collaborated in agile teams to ship production-ready interfaces.",
      skills: ["React.js", "React Native", "Tailwind CSS", "JavaScript (ES6+)", "UI/UX Architecture"],
      highlight: "Shipped dynamic mobile & web UIs",
    },
  ];

  const educationData = [
    {
      role: "B.Sc. in Computer Engineering",
      company: "Faculty of Engineering, Ain Shams University",
      period: "Expected Graduation",
      category: "education",
      description:
        "Rigorous Computer Engineering curriculum covering Data Structures & Algorithms, Computer Architecture, Embedded Systems, Machine Learning, Operating Systems, and Distributed Applications.",
      skills: ["C++", "Python", "Java", "Embedded Systems", "Algorithms & Data Structures"],
      highlight: "Faculty of Engineering — Ain Shams University",
    },
    {
      role: "Python for Everybody Specialization",
      company: "Coursera / University of Michigan",
      period: "Certified Specialization",
      category: "education",
      description:
        "Comprehensive program mastering Python data structures, web scraping, relational SQL databases, and data processing pipelines.",
      skills: ["Python", "SQL", "Web Scraping", "Data Structures"],
      highlight: "Coursera Certified",
    },
    {
      role: "MATLAB Programming for Engineers",
      company: "Coursera Engineering Specialization",
      period: "Certified Course",
      category: "education",
      description:
        "Advanced scientific computation, matrix manipulations, numerical modeling, and algorithm development using MATLAB.",
      skills: ["MATLAB", "Numerical Modeling", "Data Visualization"],
      highlight: "Engineering Computation",
    },
  ];

  const milestonesData = [
    {
      role: "Competitive Programming & Problem Solving",
      company: "Codeforces, LeetCode & HackerRank",
      period: "Ongoing Practice",
      category: "milestones",
      description:
        "Consistently solving algorithmic challenges focused on Graph Theory, Dynamic Programming, Greedy Algorithms, and Advanced Data Structures.",
      skills: ["Algorithms", "Problem Solving", "C++", "Time Complexity"],
      highlight: "Active Algorithmic Problem Solver",
    },
    {
      role: "Distributed Online Marketplace System",
      company: "Full-Stack Software Architecture Project",
      period: "Major Project Milestone",
      category: "milestones",
      description:
        "Architected a robust distributed marketplace platform connecting React frontend with a high-performance .NET & C# backend service.",
      skills: ["React", ".NET Core", "C#", "Distributed Architecture"],
      highlight: "Full-Stack Distributed System",
    },
  ];

  const displayedData =
    activeTab === "experience"
      ? experienceData
      : activeTab === "education"
      ? educationData
      : milestonesData;

  return (
    <section className="text-white relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16" id="experienceSection">
      {/* Title */}
      <motion.h1
        className="relative text-4xl sm:text-5xl md:text-[70px] font-extrabold font-serif text-center 
                   text-transparent bg-clip-text bg-gradient-to-r from-[#6E48AA] via-[#8E2DE2] to-[#A044FF] 
                   mb-10 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Experience & Journey
        <span
          className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-32 h-[3px] rounded-full 
                     bg-gradient-to-r from-[#6E48AA] via-[#8E2DE2] to-[#A044FF] 
                     shadow-[0_0_15px_#A044FF] animate-pulse"
        />
      </motion.h1>

      {/* Tabs */}
      <div className="flex justify-center gap-3 sm:gap-4 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white shadow-[0_0_20px_rgba(160,68,255,0.6)] scale-105"
                : "bg-[#14052b]/70 text-gray-300 border border-[#A044FF]/20 hover:border-[#A044FF]/60 hover:text-white"
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Timeline List */}
      <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10 border-l-2 border-[#A044FF]/30 space-y-10">
        <AnimatePresence mode="wait">
          {displayedData.map((item, index) => (
            <motion.div
              key={item.role + index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group bg-gradient-to-br from-[#130326]/90 to-[#090114]/90 border border-[#A044FF]/30 hover:border-[#A044FF] rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-[0_0_30px_rgba(160,68,255,0.4)] transition-all duration-500"
            >
              {/* Timeline Node Dot */}
              <span className="absolute -left-[31px] sm:-left-[47px] top-8 w-5 h-5 rounded-full bg-gradient-to-r from-[#A044FF] to-[#6A3093] border-4 border-[#05010a] shadow-[0_0_12px_#A044FF] group-hover:scale-125 transition-transform duration-300" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#C873FF] transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-[#A044FF]">
                    {item.company}
                  </p>
                </div>
                <span className="self-start sm:self-center px-3.5 py-1 rounded-full text-xs font-semibold bg-[#A044FF]/15 text-[#E0B3FF] border border-[#A044FF]/30">
                  {item.period}
                </span>
              </div>

              {/* Highlight Badge */}
              <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-gradient-to-r from-[#6A3093]/40 to-[#A044FF]/40 text-xs sm:text-sm font-semibold text-purple-200 border border-[#A044FF]/30">
                ⚡ {item.highlight}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-[#1e083c] text-purple-200 border border-purple-500/30 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
