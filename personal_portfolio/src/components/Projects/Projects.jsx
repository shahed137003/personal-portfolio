import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaSearch,
  FaStar,
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
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Web", "Desktop", "AI/ML"];

  const projects = [
    {
      title: "Marketplace App",
      category: "Web",
      featured: true,
      description:
        "A distributed online marketplace system built with React.js frontend and a highly scalable .NET & C# backend architecture.",
      images: [MarketplaceApp, MarketplaceApp2, MarketplaceApp3, MarketplaceApp4],
      languages: ["React", "JavaScript", ".NET Core", "C#", "Distributed Architecture"],
      projectLink:
        "https://github.com/shahed137003/distributed-online-marketplace-system.git",
      liveDemo: "https://marketplace-demo.vercel.app",
    },
    {
      title: "Velora Ecommerce App",
      category: "Web",
      featured: true,
      description:
        "A sleek, modern React + Vite e-commerce storefront featuring dynamic product listings, cart state management, and responsive UI.",
      images: [Velora, Velora2, Velora3, Velora4, Velora5, Velora6],
      languages: ["React", "JavaScript", "Tailwind CSS", "Vite"],
      projectLink: "https://github.com/shahed137003/Velora-E-commerce-app.git",
      liveDemo: "https://velora-ecommerce.vercel.app",
    },
    {
      title: "Code Assistant Chatbot",
      category: "AI/ML",
      featured: true,
      description:
        "An AI-powered Retrieval-Augmented Generation (RAG) assistant that generates, explains, and debugs source code from natural language prompts.",
      images: [CodeAssistant],
      languages: ["Python", "LangGraph", "RAG", "Gradio"],
      projectLink: "https://github.com/shahed137003/Code-Generation-using-RAG.git",
    },
    {
      title: "Thief Detection System",
      category: "AI/ML",
      featured: false,
      description:
        "An intelligent surveillance and motion detection system powered by Python, OpenCV, and Django to alert against suspicious intrusions.",
      images: [ThiefDetection],
      languages: ["Python", "OpenCV", "Computer Vision", "Django"],
      projectLink: "https://github.com/shahed137003/Thief-Detection-Project.git",
    },
    {
      title: "CPU Scheduler Simulator",
      category: "Desktop",
      featured: false,
      description:
        "An interactive graphical tool built in C++ and Qt visualising operating system scheduling algorithms (FCFS, SJF, Priority, Round Robin).",
      images: [CPUScheduler, CPUScheduler2, CPUScheduler3],
      languages: ["C++", "Qt", "Operating Systems", "Algorithms"],
      projectLink: "https://github.com/shahed137003/CPU-Scheduler.git",
    },
    {
      title: "Cross-Platform XML Editor",
      category: "Desktop",
      featured: false,
      description:
        "A feature-rich C++ desktop application with custom tree parsers, syntax checking, minification, and compression for XML files.",
      images: [XMLEditor, XMLEditor2, XMLEditor3],
      languages: ["C++", "Qt", "Data Structures"],
      projectLink: "https://github.com/SaraHanyAbdelhady/Data-Structures.git",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesQuery =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.languages.some((lang) => lang.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

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
                   text-transparent bg-clip-text bg-gradient-to-r from-[#6E48AA] via-[#8E2DE2] to-[#A044FF] 
                   mb-10 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        My Projects
        <span
          className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-28 sm:w-36 h-[3px] rounded-full 
                     bg-gradient-to-r from-[#6E48AA] via-[#8E2DE2] to-[#A044FF] 
                     shadow-[0_0_15px_#A044FF] animate-pulse"
        />
      </motion.h1>

      {/* Filter & Search Bar */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
        {/* Category Buttons */}
        <div className="flex justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white shadow-[0_0_15px_rgba(160,68,255,0.6)]"
                  : "bg-[#14052b]/80 text-gray-300 hover:text-white border border-[#A044FF]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live Search */}
        <div className="relative w-full sm:w-72">
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search projects or tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-[#130326]/90 border border-[#A044FF]/40 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#A044FF] shadow-sm"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
              className="relative flex flex-col justify-between h-full w-full max-w-[410px] rounded-2xl 
                         bg-gradient-to-br from-[#140326]/90 to-[#080112]/95 border border-[#A044FF]/35 
                         shadow-xl transition-all duration-500 hover:-translate-y-1.5 
                         hover:shadow-[0_0_35px_rgba(160,68,255,0.4)] overflow-hidden group"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold shadow-lg">
                  <FaStar className="text-xs" /> Featured
                </div>
              )}

              <div>
                {/* Image & Preview Trigger */}
                <div
                  className="relative h-52 overflow-hidden cursor-pointer group/img"
                  onClick={() => openProject(project)}
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                    src={project.images[0]}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080112] via-black/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#6A3093] to-[#A044FF] text-white text-xs font-semibold shadow-lg">
                      Preview Gallery ({project.images.length}) 👀
                    </span>
                  </div>
                </div>

                {/* Title & Category */}
                <div className="px-6 pt-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#E0B3FF] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h2
                    className="text-xl font-bold text-white group-hover:text-[#E0B3FF] transition-colors cursor-pointer"
                    onClick={() => openProject(project)}
                  >
                    {project.title}
                  </h2>

                  <p className="text-gray-300 text-sm leading-relaxed mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags & Action Buttons */}
              <div className="px-6 pb-6 pt-4">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#1e0a3c] text-purple-200 border border-purple-500/30"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => window.open(project.projectLink, "_blank")}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#1e0a3c] border border-[#A044FF]/40 hover:bg-[#A044FF] transition-all shadow-sm"
                  >
                    <FaGithub size={16} /> Source Code
                  </button>

                  {project.liveDemo && (
                    <button
                      onClick={() => window.open(project.liveDemo, "_blank")}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#6A3093] to-[#A044FF] hover:shadow-[0_0_15px_#A044FF] transition-all shadow-sm"
                    >
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          No projects matched "{searchQuery}". Try a different search term!
        </div>
      )}

      {/* Lightbox / Project Overview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(160,68,255,0.4)] border border-[#A044FF]/50 bg-[#100221]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-30 bg-black/70 text-white p-2.5 rounded-full hover:bg-[#A044FF] transition-all"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes size={18} />
              </button>

              {/* Image Showcase */}
              <div className="relative bg-black h-64 sm:h-96 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={selectedProject.images[currentIndex]}
                    alt={selectedProject.title}
                    className="max-h-full max-w-full object-contain"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  />
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-[#A044FF] transition-all"
                    >
                      <FaChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-[#A044FF] transition-all"
                    >
                      <FaChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="flex justify-center gap-2 py-2.5 bg-black/50 border-t border-white/10">
                  {selectedProject.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === currentIndex
                          ? "bg-[#E0B3FF] scale-125"
                          : "bg-gray-600 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Modal Details Footer */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={selectedProject.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#1e0a3c] border border-[#A044FF]/40 text-white hover:bg-[#A044FF] transition-all flex items-center gap-2"
                    >
                      <FaGithub /> GitHub Code
                    </a>
                    {selectedProject.liveDemo && (
                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#6A3093] to-[#A044FF] text-white flex items-center gap-2 shadow-md"
                      >
                        <FaExternalLinkAlt size={12} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-[#210940] text-purple-200 border border-[#A044FF]/40"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
