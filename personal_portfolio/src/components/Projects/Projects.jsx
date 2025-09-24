import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Images import
import CodeAssistant from "../../assets/Code Assistant Chatbot.png";
import CPUScheduler from "../../assets/CPU Scheduler.png";
import CPUScheduler2 from "../../assets/CPU Scheduler2.png";
import CPUScheduler3 from "../../assets/CPU Scheduler3.png";
import MarketplaceApp from "../../assets/Marketplace App.png";
import MarketplaceApp2 from "../../assets/Marketplace App2.png";
import MarketplaceApp3 from "../../assets/Marketplace App3.png";
import MarketplaceApp4 from "../../assets/Marketplace App4.png";
import ThiefDetection from "../../assets/Thief Detection System.png";
import XMLEditor from "../../assets/XML Editor.png";
import XMLEditor2 from "../../assets/XML Editor2.png";
import XMLEditor3 from "../../assets/XML Editor3.png";
import Velora from "../../assets/Velora App.png";
import Velora2 from "../../assets/Velora App2.png";
import Velora3 from "../../assets/Velora App3.png";
import Velora4 from "../../assets/Velora App4.png";
import Velora5 from "../../assets/Velora App5.png";
import Velora6 from "../../assets/Velora App6.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web", "Desktop", "AI/ML"];

  const projects = [
    {
      title: "Marketplace App",
      category: "Web",
      description:
        "A distributed online marketplace built with React.js and .NET backend.",
      images: [MarketplaceApp, MarketplaceApp2, MarketplaceApp3, MarketplaceApp4],
      languages: ["React", "JavaScript", ".NET", "C#"],
      projectLink:
        "https://github.com/shahed137003/distributed-online-marketplace-system.git",
      liveDemo: "https://marketplace-demo.vercel.app",
    },
    {
      title: "XML Editor",
      category: "Desktop",
      description:
        "A cross-platform desktop application built with C++ and Qt for editing and managing XML files.",
      images: [XMLEditor, XMLEditor2, XMLEditor3],
      languages: ["C++", "Qt"],
      projectLink: "https://github.com/SaraHanyAbdelhady/Data-Structures.git",
    },
    {
      title: "Thief Detection System",
      category: "AI/ML",
      description:
        "A surveillance system powered by Python and OpenCV that detects suspicious movements.",
      images: [ThiefDetection],
      languages: ["Python", "OpenCV", "Django"],
      projectLink: "https://github.com/shahed137003/Thief-Detection-Project.git",
    },
    {
      title: "Code Assistant Chatbot",
      category: "AI/ML",
      description:
        "An AI-powered chatbot for generating, analyzing, and debugging code from natural language.",
      images: [CodeAssistant],
      languages: ["Python", "LangGraph", "Gradio"],
      projectLink: "https://github.com/shahed137003/Code-Generation-using-RAG.git",
    },
    {
      title: "CPU Scheduler",
      category: "Desktop",
      description:
        "An interactive tool simulating scheduling algorithms like FCFS, SJF, Priority, and Round Robin.",
      images: [CPUScheduler, CPUScheduler2, CPUScheduler3],
      languages: ["C++", "Qt"],
      projectLink: "https://github.com/shahed137003/CPU-Scheduler.git",
    },
    {
      title: "Velora Ecommerce App",
      category: "Web",
      description:
        "A modern React + Vite based e-commerce frontend project featuring product listings and checkout flow.",
      images: [Velora, Velora2, Velora3, Velora4, Velora5, Velora6],
      languages: ["React", "JavaScript", "Tailwind"],
      projectLink: "https://github.com/shahed137003/Velora-E-commerce-app.git",
      liveDemo: "https://velora-ecommerce.vercel.app",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSelectedProject(null);
    setCurrentIndex(0);
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="text-white relative w-full px-4 sm:px-8 lg:px-16 py-16" id="projectSection">
      {/* Section Title */}
  <motion.h1
  className="relative text-4xl sm:text-5xl md:text-[70px] font-extrabold font-serif text-center 
             text-transparent bg-clip-text bg-gradient-to-r from-[#6E48AA] via-[#764BA2] to-[#9D50BB] 
             mb-12 tracking-wide"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
  My Projects

  {/* Underline Glow */}
  <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-28 sm:w-36 h-[3px] rounded-full 
                   bg-gradient-to-r from-[#6E48AA] via-[#764BA2] to-[#9D50BB] 
                   shadow-[0_0_12px_#9D50BB] animate-pulse" />
</motion.h1>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeCategory === cat
                ? "bg-gradient-to-r from-[#9D50BB] to-[#6E48AA] text-white shadow-lg"
                : "bg-[#1a0b2e]/50 text-[#9D50BB] hover:bg-[#6E48AA]/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {filteredProjects.map((project) => (
         <div
  key={project.title}
  className="relative flex flex-col h-full w-full max-w-[420px] rounded-2xl 
             bg-gradient-to-br from-[#1a0b2e]/70 to-[#0d061a]/80 border border-[#6A3093]/40 
             shadow-lg transition-all duration-500 transform hover:scale-105 
             hover:shadow-[0_0_40px_rgba(157,80,187,0.8)] overflow-hidden group"
>
  {/* Upper border hover effect */}
  <span
    className="absolute top-0 left-0 w-full h-[4px] 
               bg-gradient-to-r from-[#9D50BB] via-[#E0B3FF] to-[#6E48AA] 
               transform scale-x-0 group-hover:scale-x-100 
               transition-transform duration-500 origin-left"
  />

            {/* Image */}
            <div
              className="relative z-10 overflow-hidden cursor-pointer group"
              onClick={() => openProject(project)}
            >
              <img
                className="w-full h-48 sm:h-56 object-cover rounded-t-xl"
                src={project.images[0]}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <span className="text-lg font-semibold text-white bg-gradient-to-r from-[#9D50BB] via-[#E0B3FF] to-[#6E48AA]  rounded-3xl p-2">View Project 👀 </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="relative z-10 text-xl sm:text-2xl font-semibold text-center mt-4 bg-gradient-to-r from-[#9D50BB] to-[#6E48AA] bg-clip-text text-transparent">
              {project.title}
            </h2>

{/* Category */}
<p className="text-center text-sm sm:text-base font-semibold mt-2 px-3 py-1 rounded-full inline-block 
              bg-gradient-to-r from-[#9D50BB]/30 to-[#6E48AA]/30 text-[#E0B3FF] shadow-sm mx-2">
  {project.category}
</p>


            {/* Description */}
            <p className="relative z-10 text-gray-300 text-sm lg:text-base leading-relaxed px-4 mt-3 text-center">
              {project.description}
            </p>

            {/* Languages */}
            <div className="relative z-10 flex flex-wrap gap-2 justify-center mt-4 mb-6">
              {project.languages.map((lang, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium 
                             border border-[#E0B3FF]/40 bg-[#E0B3FF]/10 text-[#E0B3FF] shadow-sm"
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center mb-6">
              <button
                onClick={() => window.open(project.projectLink, "_blank")}
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-full font-medium text-sm sm:text-base 
                           text-white bg-gradient-to-r from-[#6E48AA] to-[#9D50BB] shadow-md hover:shadow-lg"
              >
                <FaGithub size={18} /> Code
              </button>

              {project.liveDemo && (
                <button
                  onClick={() => window.open(project.liveDemo, "_blank")}
                  className="flex items-center justify-center gap-2 px-5 py-2 rounded-full font-medium text-sm sm:text-base 
                             text-white bg-gradient-to-r from-[#9D50BB] to-[#6E48AA] shadow-md hover:shadow-lg"
                >
                  <FaExternalLinkAlt size={16} /> Live
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-4xl w-[90%] rounded-xl overflow-hidden shadow-[0_0_25px_rgba(157,80,187,0.7)] border border-[#9D50BB]/40 bg-[#12021e]/95"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 bg-black/60 text-white p-3 rounded-full hover:bg-[#9D50BB] hover:shadow-md transition-all"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes size={20} />
              </button>

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-[#6E48AA] transition-all"
                  >
                    <FaChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-[#6E48AA] transition-all"
                  >
                    <FaChevronRight size={24} />
                  </button>
                </>
              )}

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={selectedProject.images[currentIndex]}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-lg"
                  initial={{ x: 150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -150, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                />
              </AnimatePresence>

              {selectedProject.images.length > 1 && (
                <div className="flex justify-center gap-2 py-3 bg-black/40">
                  {selectedProject.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        i === currentIndex
                          ? "bg-gradient-to-r from-[#9D50BB] to-[#6E48AA] shadow-md scale-110"
                          : "bg-gray-500/40 hover:bg-gray-400/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
