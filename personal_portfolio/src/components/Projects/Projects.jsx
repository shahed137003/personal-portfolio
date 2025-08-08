import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";

// Import images
import CodeAssistant from '../../assets/Code Assistant Chatbot.png';
import CPUScheduler from '../../assets/CPU Scheduler.png';
import MarketplaceApp from '../../assets/Marketplace App.png';
import ThiefDetection from '../../assets/Thief Detection System.png';
import XMLEditor from '../../assets/XML Editor.png';

export default function Projects() {
  const projects = [
    {
      title: "Marketplace App",
      description:
        "A distributed online marketplace built with React.js and .NET backend that enables users to browse, buy, sell, and manage products. Includes secure authentication, real-time notifications, product image uploads, and role-based dashboards.",
      image: MarketplaceApp,
      languages: ['React', 'JavaScript', '.NET', 'C#'],
      projectLink: "https://github.com/shahed137003/distributed-online-marketplace-system.git"
    },
    {
      title: "XML Editor",
      description:
        "A cross-platform desktop application with C++ and Qt for editing and managing XML. Features syntax highlighting, schema validation, tree view editing, undo/redo, and clean XML formatting.",
      image: XMLEditor,
      languages: ['C++', 'Qt'],
      projectLink: "https://github.com/SaraHanyAbdelhady/Data-Structures.git"
    },
    {
      title: "Thief Detection System",
      description:
        "A surveillance system powered by Python and OpenCV that detects suspicious movements using computer vision. Integrated with Django for web alerts, real-time monitoring, and snapshot capture.",
      image: ThiefDetection,
      languages: ['Python', 'OpenCV', 'Django'],
      projectLink: "https://github.com/shahed137003/Thief-Detection-Project.git"
    },
    {
      title: "Code Assistant Chatbot",
      description:
        "An AI-powered chatbot for generating, analyzing, and debugging code from natural language. Built with LangGraph and Gradio, it supports multiple programming languages and real-time interaction.",
      image: CodeAssistant,
      languages: ['Python', 'LangGraph', 'Gradio'],
      projectLink: "https://github.com/shahed137003/Code-Generation-using-RAG.git"
    },
    {
      title: "CPU Scheduler",
      description:
        "An interactive tool simulating CPU scheduling algorithms like FCFS, SJF, Priority, and Round Robin. Built with C++ and Qt, featuring dynamic process creation and Gantt chart visualization.",
      image: CPUScheduler,
      languages: ['C++', 'Qt'],
      projectLink: "https://github.com/shahed137003/CPU-Scheduler.git"
    },
  ];

  // Open project link in new tab
  const openProjectLink = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="text-white relative w-full px-4 sm:px-6 lg:px-12 py-12" id="projectSection">
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-6xl font-bold font-serif text-center text-transparent bg-clip-text bg-gradient-to-br from-[#9D50BB] to-[#6E48AA] mb-10 sm:mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              ease: "easeInOut",
              delay: index * 0.1
            }}
            className={`
              flex flex-col h-full transition-transform duration-300 hover:scale-[1.03] 
              w-full max-w-[420px] backdrop-blur-lg border rounded-2xl p-4 sm:p-6
              bg-gradient-to-br from-[rgba(10,10,15,0.7)] to-[rgba(25,20,35,0.6)]
              shadow-lg hover:shadow-[0_0_20px] 
              ${index % 2 === 0 
                ? 'border-[#9D50BB] hover:shadow-[#9D50BB]' 
                : 'border-[#6E48AA] hover:shadow-[#6E48AA]'}
            `}
          >
            <img
              className={`
                w-full h-40 sm:h-48 lg:h-52 object-cover mb-5 rounded-xl border-2 
                ${index % 2 === 0 ? 'border-[#9D50BB]' : 'border-[#6E48AA]'}
              `}
              src={project.image}
              alt={project.title}
            />

            <h2
              className={`
                text-lg sm:text-xl lg:text-2xl font-semibold text-center mb-3 tracking-wide
                ${index % 2 === 0 ? 'text-[#9D50BB]' : 'text-[#6E48AA]'}
              `}
            >
              {project.title}
            </h2>

            <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-5 opacity-90 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-5">
              {project.languages.map((lang, i) => (
                <span
                  key={i}
                  className={`
                    px-3 py-1 rounded-lg text-xs sm:text-sm font-medium border backdrop-blur-md
                    ${index % 2 === 0
                      ? 'text-[#9D50BB] border-[#9D50BB]/40 bg-[#9D50BB]/10' 
                      : 'text-[#6E48AA] border-[#6E48AA]/40 bg-[#6E48AA]/10'}
                  `}
                >
                  {lang}
                </span>
              ))}
            </div>

            <button
              onClick={() => openProjectLink(project.projectLink)}
              aria-label={`View ${project.title} code on GitHub`}
              className={`
                flex items-center justify-center gap-2 w-full sm:w-auto mx-full px-4 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-lg
                transition-all duration-300 
                ${index % 2 === 0
                  ? 'bg-gradient-to-r from-[#9D50BB] to-[#6E48AA] hover:shadow-[0_0_15px_#9D50BB]'
                  : 'bg-gradient-to-r from-[#6E48AA] to-[#9D50BB] hover:shadow-[0_0_15px_#6E48AA]'}
              `}
            >
              <FaGithub size={18} className="sm:size-[22px]" />
              View Code
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
