import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
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

  const projects = [
    {
      title: "Marketplace App",
      description:
        "A distributed online marketplace built with React.js and .NET backend. Features secure authentication, role-based dashboards, real-time notifications, and product image uploads.",
      images: [MarketplaceApp, MarketplaceApp2, MarketplaceApp3, MarketplaceApp4],
      languages: ["React", "JavaScript", ".NET", "C#"],
      projectLink:
        "https://github.com/shahed137003/distributed-online-marketplace-system.git",
    },
    {
      title: "XML Editor",
      description:
        "A cross-platform desktop application built with C++ and Qt for editing and managing XML files. Includes syntax highlighting, schema validation, tree view editing, and clean formatting.",
      images: [XMLEditor, XMLEditor2, XMLEditor3],
      languages: ["C++", "Qt"],
      projectLink: "https://github.com/SaraHanyAbdelhady/Data-Structures.git",
    },
    {
      title: "Thief Detection System",
      description:
        "A surveillance system powered by Python and OpenCV that detects suspicious movements. Integrated with Django for real-time monitoring, web alerts, and snapshot capture.",
      images: [ThiefDetection],
      languages: ["Python", "OpenCV", "Django"],
      projectLink:
        "https://github.com/shahed137003/Thief-Detection-Project.git",
    },
    {
      title: "Code Assistant Chatbot",
      description:
        "An AI-powered chatbot for generating, analyzing, and debugging code from natural language. Built with LangGraph and Gradio, supporting multiple languages and real-time interaction.",
      images: [CodeAssistant],
      languages: ["Python", "LangGraph", "Gradio"],
      projectLink:
        "https://github.com/shahed137003/Code-Generation-using-RAG.git",
    },
    {
      title: "CPU Scheduler",
      description:
        "An interactive tool simulating scheduling algorithms like FCFS, SJF, Priority, and Round Robin. Built with C++ and Qt, featuring live process creation and Gantt chart visualization.",
      images: [CPUScheduler, CPUScheduler2, CPUScheduler3],
      languages: ["C++", "Qt"],
      projectLink: "https://github.com/shahed137003/CPU-Scheduler.git",
    },
    {
      title: "Velora Ecommerce App",
      description:
        "A modern React + Vite based e-commerce frontend project featuring product listings, categories, favorites, cart management, and checkout flow.",
      images: [Velora, Velora2, Velora3, Velora4, Velora5, Velora6],
      languages: ["React", "JavaScript", "Tailwind"],
      projectLink:
        "https://github.com/shahed137003/Velora-E-commerce-app.git",
    },
  ];

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
    <div
      className="text-white relative w-full px-4 sm:px-8 lg:px-16 py-16"
      id="projectSection"
    >
      {/* Section Title */}
  <motion.h1
  className="relative text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-center 
             text-transparent bg-clip-text bg-gradient-to-r from-[#9D50BB] to-[#6E48AA] 
             mb-16 tracking-wide"
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.3 }}
>
  My Projects

  {/* Decorative underline with glow */}
  <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-32 sm:w-44 h-[3px] rounded-full 
                   bg-gradient-to-r from-[#9D50BB] to-[#6E48AA] 
                   shadow-[0_0_12px_#9D50BB] animate-pulse" />
</motion.h1>


      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative flex flex-col h-full w-full max-w-[420px] p-6 rounded-2xl 
                       backdrop-blur-xl from-[#050008e4] to-[#0e001ae3] border border-[#6A3093]/50 shadow-2xl 
                       overflow-hidden group hover:shadow-[0_0_25px_rgba(157,80,187,0.7)] transition-all"
          >
            {/* Image (clickable) */}
            <div
              className="relative z-10 overflow-hidden rounded-xl border border-white/10 mb-5 cursor-pointer"
              onClick={() => openProject(project)}
            >
              <motion.img
                className="w-full h-44 sm:h-52 object-cover"
                src={project.images[0]}
                alt={project.title}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* Title */}
            <h2 className="relative z-10 text-xl sm:text-2xl font-semibold text-center mb-3 text-[#E0B3FF]">
              {project.title}
            </h2>

            {/* Description */}
            <p className="relative z-10 text-gray-300 text-sm lg:text-base leading-relaxed mb-5 flex-grow text-center">
              {project.description}
            </p>

            {/* Languages */}
            <div className="relative z-10 flex flex-wrap gap-2 justify-center mb-6">
              {project.languages.map((lang, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1 rounded-lg text-xs sm:text-sm font-medium 
                             border border-[#E0B3FF]/40 bg-[#E0B3FF]/10 text-[#E0B3FF] shadow-sm"
                >
                  {lang}
                </motion.span>
              ))}
            </div>

            {/* GitHub Button */}
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(157,80,187,0.8)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(project.projectLink, "_blank")}
              aria-label={`View ${project.title} code on GitHub`}
              className="relative z-10 flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg 
                         font-medium text-sm sm:text-lg text-white
                         bg-gradient-to-r from-[#6E48AA] via-[#764BA2] to-[#9D50BB] 
                         transition-all duration-300"
            >
              <FaGithub size={20} />
              View Code
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-4xl w-[90%] rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 bg-black/70 text-white p-3 rounded-full hover:bg-[#9D50BB] hover:shadow-[0_0_15px_rgba(157,80,187,0.7)] transition-all"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes size={20} />
              </button>

              {/* Left Arrow */}
              {selectedProject.images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full 
                             hover:bg-[#6E48AA] hover:shadow-[0_0_15px_rgba(110,72,170,0.8)] transition-all"
                >
                  <FaChevronLeft size={24} />
                </button>
              )}

              {/* Right Arrow */}
              {selectedProject.images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full 
                             hover:bg-[#6E48AA] hover:shadow-[0_0_15px_rgba(110,72,170,0.8)] transition-all"
                >
                  <FaChevronRight size={24} />
                </button>
              )}

              {/* Image with Slide Animation */}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
