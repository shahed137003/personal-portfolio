import React, { useState } from "react";
import "./Projects.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaSearch,
  FaStar,
  FaCode,
  FaMicrochip,
  FaCopy,
  FaCheck,
  FaBolt,
  FaLayerGroup,
  FaBrain,
  FaLaptopCode,
  FaDesktop,
  FaCrown,
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
  const [inspectProject, setInspectProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedCode, setCopiedCode] = useState(false);
  const [flagshipIndex, setFlagshipIndex] = useState(0);

  const projects = [
    {
      title: "Code Assistant Chatbot with RAG",
      category: "AI/ML",
      featured: true,
      tagline: "AI Retrieval-Augmented Generation & Code Debugging Assistant",
      description:
        "An intelligent AI assistant built with LangGraph and FAISS Vector RAG that generates, explains, and debugs complex source code from natural language prompts.",
      images: [CodeAssistant],
      languages: ["Python", "LangGraph", "FAISS RAG", "Transformers", "Gradio"],
      projectLink: "https://github.com/shahed137003/Code-Generation-using-RAG.git",
      liveDemo: null,
      architectureFlow: [
        "Natural Prompt Query",
        "LangGraph Workflow Router",
        "FAISS Vector RAG Search",
        "Code Solution Output",
      ],
      metrics: [
        { label: "AI Engine", value: "LangGraph Multi-Step" },
        { label: "Vector Search", value: "FAISS Semantic Index" },
        { label: "Response Mode", value: "Code + Explanation" },
      ],
      codeSnippet: `# LangGraph RAG Code Generation Workflow
def generate_code_solution(user_prompt: str, retriever) -> str:
    docs = retriever.get_relevant_documents(user_prompt)
    context = "\\n".join([d.page_content for d in docs])
    
    prompt = f"Context:\\n{context}\\n\\nTask:\\n{user_prompt}\\nCode Solution:"
    return llm_chain.invoke(prompt)`,
    },
    {
      title: "Distributed Online Marketplace",
      category: "Web",
      featured: true,
      tagline: "Distributed Full-Stack E-Commerce & Microservice Architecture",
      description:
        "A scalable distributed online marketplace built with React frontend and low-latency .NET Core C# microservices and relational SQL databases.",
      images: [MarketplaceApp, MarketplaceApp2, MarketplaceApp3, MarketplaceApp4],
      languages: ["React", "JavaScript", ".NET Core", "C#", "SQL Server"],
      projectLink:
        "https://github.com/shahed137003/distributed-online-marketplace-system.git",
      liveDemo: "https://marketplace-demo.vercel.app",
      architectureFlow: [
        "React SPA UI Layer",
        "RESTful API Gateway",
        ".NET Core Microservices",
        "SQL Relational DB",
      ],
      metrics: [
        { label: "Backend Throughput", value: "<80ms API Latency" },
        { label: "Architecture", value: "Distributed N-Tier" },
        { label: "State Management", value: "Redux & Hooks" },
      ],
      codeSnippet: `// .NET Core C# Marketplace API Controller
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase {
    private readonly IProductService _service;
    public ProductsController(IProductService service) => _service = service;

    [HttpGet("catalog")]
    public async Task<IActionResult> GetCatalog([FromQuery] FilterDto filter) {
        var items = await _service.GetFilteredProductsAsync(filter);
        return Ok(items);
    }
}`,
    },
    {
      title: "Velora E-Commerce Storefront",
      category: "Web",
      featured: true,
      tagline: "High-Speed React 18 & Vite Modern Storefront",
      description:
        "A sleek, modern React + Vite e-commerce web application featuring dynamic product catalog filtering, interactive cart state, and smooth Framer Motion animations.",
      images: [Velora, Velora2, Velora3, Velora4, Velora5, Velora6],
      languages: ["React 18", "JavaScript", "Tailwind CSS", "Vite"],
      projectLink: "https://github.com/shahed137003/Velora-E-commerce-app.git",
      liveDemo: "https://velora-ecommerce.vercel.app",
      architectureFlow: [
        "Vite High-Speed Build",
        "React Context State",
        "Tailwind UI Design System",
        "Cart & Payment Storage",
      ],
      metrics: [
        { label: "Lighthouse Speed", value: "100/100 UI Score" },
        { label: "Animation Engine", value: "Framer Motion Physics" },
        { label: "Build Tool", value: "Vite Hot Reloading" },
      ],
      codeSnippet: `// React 18 Dynamic Cart Hook
export function useCart() {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      return exists
        ? prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...item, qty: 1 }];
    });
  };
  return { cart, addItem };
}`,
    },
    {
      title: "Thief Detection Surveillance System",
      category: "AI/ML",
      featured: false,
      tagline: "Computer Vision Motion & Intrusion Alert System",
      description:
        "An intelligent video surveillance system powered by Python, OpenCV, and Django designed to detect suspicious intrusions and trigger real-time alerts.",
      images: [ThiefDetection],
      languages: ["Python", "OpenCV", "Computer Vision", "Django"],
      projectLink: "https://github.com/shahed137003/Thief-Detection-Project.git",
      architectureFlow: [
        "Real-Time Video Stream",
        "OpenCV Motion Analysis",
        "Intrusion Contour Event",
        "Django Backend Recorder",
      ],
      metrics: [
        { label: "Processing FPS", value: "30+ FPS Frame Rate" },
        { label: "CV Engine", value: "OpenCV Contours & Diff" },
        { label: "Backend", value: "Django Python REST" },
      ],
      codeSnippet: `# OpenCV Real-Time Motion Detection Pipeline
while True:
    ret, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    gray = cv2.GaussianBlur(gray, (21, 21), 0)
    
    delta = cv2.absdiff(first_frame, gray)
    thresh = cv2.threshold(delta, 25, 255, cv2.THRESH_BINARY)[1]
    # Alert triggered if contour area exceeds security threshold`,
    },
    {
      title: "CPU Scheduler Simulator",
      category: "Desktop",
      featured: false,
      tagline: "Operating Systems Algorithm Visualizer in C++ & Qt",
      description:
        "An interactive graphical desktop tool built in C++ and Qt visualising operating system CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority).",
      images: [CPUScheduler, CPUScheduler2, CPUScheduler3],
      languages: ["C++", "Qt Framework", "Operating Systems", "Algorithms"],
      projectLink: "https://github.com/shahed137003/CPU-Scheduler.git",
      architectureFlow: [
        "Process Control Blocks",
        "Priority & RR Queues",
        "Gantt Chart Renderer",
        "Live Latency Metrics",
      ],
      metrics: [
        { label: "Algorithms", value: "FCFS, SJF, RR, Priority" },
        { label: "Language", value: "C++ Object-Oriented" },
        { label: "Desktop GUI", value: "Qt Interactive Widgets" },
      ],
      codeSnippet: `// C++ Round Robin Algorithm Execution
void Scheduler::runRoundRobin(int timeQuantum) {
    std::queue<Process> readyQueue;
    while (!readyQueue.empty()) {
        Process p = readyQueue.front();
        readyQueue.pop();
        int exec = std::min(timeQuantum, p.remainingTime);
        p.remainingTime -= exec;
        currentTime += exec;
        recordGanttStep(p.id, currentTime);
    }
}`,
    },
    {
      title: "Cross-Platform XML Editor & Parser",
      category: "Desktop",
      featured: false,
      tagline: "Custom N-Ary Tree XML Parser, Linter & Huffman Compressor",
      description:
        "A high-performance C++ desktop application featuring custom N-Ary tree data structures, XML syntax validation, minification, and Huffman compression.",
      images: [XMLEditor, XMLEditor2, XMLEditor3],
      languages: ["C++", "Qt", "Data Structures", "Algorithms"],
      projectLink: "https://github.com/SaraHanyAbdelhady/Data-Structures.git",
      architectureFlow: [
        "Raw XML Input Stream",
        "N-Ary Tree Parser",
        "Syntax Linter & Minifier",
        "Huffman Compressed Output",
      ],
      metrics: [
        { label: "Data Structure", value: "Custom N-Ary Tree" },
        { label: "Compression", value: "Huffman Encoding" },
        { label: "Time Complexity", value: "O(N) Linear Parser" },
      ],
      codeSnippet: `// XML N-Ary Tree Node Architecture
class XMLNode {
public:
    std::string tag;
    std::string value;
    std::vector<XMLNode*> children;

    bool validateSyntax(const std::string& rawXML);
    void minify(std::stringstream& outputStream);
};`,
    },
  ];

  const flagshipProjects = projects.filter((p) => p.featured);
  const currentFlagship = flagshipProjects[flagshipIndex] || projects[0];

  const categories = [
    { id: "All", label: "All Projects", icon: <FaLayerGroup />, count: projects.length },
    {
      id: "AI/ML",
      label: "AI / ML Systems",
      icon: <FaBrain />,
      count: projects.filter((p) => p.category === "AI/ML").length,
    },
    {
      id: "Web",
      label: "Full-Stack Web",
      icon: <FaLaptopCode />,
      count: projects.filter((p) => p.category === "Web").length,
    },
    {
      id: "Desktop",
      label: "C++ Desktop Apps",
      icon: <FaDesktop />,
      count: projects.filter((p) => p.category === "Desktop").length,
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

  const copyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="text-white relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16" id="projectSection">
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
          <span>Engineering Systems & AI Portfolio</span>
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-[68px] font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0B3FF] to-[#A044FF] tracking-wide">
          Featured Projects
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base mt-3">
          Explore production-grade full-stack web applications, AI/RAG assistants, and low-level C++ desktop software.
        </p>
      </motion.div>

      {/* 1. SHOWSTOPPING FLAGSHIP PROJECT SPOTLIGHT HERO STAGE (PURE OLD PURPLE) */}
      <motion.div
        className="max-w-6xl mx-auto mb-16 bg-gradient-to-br from-[#180630]/95 via-[#120324]/95 to-[#0e021e]/95 border-2 border-[#A044FF]/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_45px_rgba(160,68,255,0.35)] relative overflow-hidden"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Spotlight Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#A044FF]/35 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-[#A044FF] text-white text-xs font-bold shadow-md">
              ★ Flagship Spotlight
            </span>
            <span className="text-xs font-semibold text-[#E0B3FF] uppercase">
              {currentFlagship.category} System
            </span>
          </div>

          {/* Switcher tabs among flagship projects */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-purple-300 font-semibold hidden sm:inline">
              Spotlight Project:
            </span>
            {flagshipProjects.map((p, idx) => (
              <button
                key={p.title}
                onClick={() => setFlagshipIndex(idx)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  flagshipIndex === idx
                    ? "bg-gradient-to-r from-[#6A3093] to-[#A044FF] text-white shadow-md border border-[#E0B3FF]/40"
                    : "bg-[#130326] text-purple-300 border border-[#A044FF]/30 hover:border-[#A044FF]"
                }`}
              >
                #{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Spotlight Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Preview Image */}
          <div
            className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#A044FF]/40 shadow-2xl cursor-pointer group/spotlight h-64 sm:h-80"
            onClick={() => openProject(currentFlagship)}
          >
            <img
              src={currentFlagship.images[0]}
              alt={currentFlagship.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/spotlight:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e021e] via-black/30 to-transparent opacity-80 flex flex-col justify-end p-5">
              <span className="text-xs font-semibold text-[#E0B3FF] mb-1">
                Click to Open Full Image Gallery ({currentFlagship.images.length} screenshots)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {currentFlagship.title}
              </h3>
            </div>
          </div>

          {/* Right Spotlight Details */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E0B3FF]">
                {currentFlagship.tagline}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {currentFlagship.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mt-2.5">
                {currentFlagship.description}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5">
              {currentFlagship.languages.map((lang, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-bold bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/40"
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-[#130326] border border-[#A044FF]/35">
              {currentFlagship.metrics?.map((m, idx) => (
                <div key={idx} className="text-center">
                  <span className="text-[10px] text-gray-400 uppercase font-semibold block">
                    {m.label}
                  </span>
                  <span className="text-xs font-bold text-[#E0B3FF] mt-0.5 block">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setInspectProject(currentFlagship)}
                className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-gradient-to-r from-[#6A3093] via-[#8E2DE2] to-[#A044FF] text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(160,68,255,0.5)] flex items-center justify-center gap-2"
              >
                <FaBolt /> Inspect Architecture & Code
              </button>

              <a
                href={currentFlagship.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#1e083c] hover:bg-[#A044FF] text-[#E0B3FF] hover:text-white border border-[#A044FF]/40 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                <FaGithub /> GitHub Repository
              </a>

              {currentFlagship.liveDemo && (
                <a
                  href={currentFlagship.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#130326] hover:bg-[#A044FF]/30 text-white border border-[#A044FF]/40 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. INTERACTIVE CATEGORY FILTER & SEARCH BAR */}
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
        <div className="flex justify-center gap-2.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-[#6A3093] via-[#8E2DE2] to-[#A044FF] text-white shadow-[0_0_20px_rgba(160,68,255,0.6)] scale-105 border border-[#E0B3FF]/40"
                  : "bg-[#140428]/80 text-purple-200 hover:text-white border border-[#A044FF]/30 hover:border-[#A044FF]"
              }`}
            >
              <span className="text-sm">{cat.icon}</span>
              <span>{cat.label}</span>
              <span className="px-2 py-0.5 rounded-full bg-[#0e021e] text-[11px] text-[#E0B3FF]">
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-sm" />
          <input
            type="text"
            placeholder="Search projects or tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-[#140428]/90 border border-[#A044FF]/40 text-sm text-white placeholder-purple-300 focus:outline-none focus:border-[#E0B3FF] focus:shadow-[0_0_15px_rgba(160,68,255,0.4)]"
          />
        </div>
      </div>

      {/* 3. SHOWSTOPPING AMETHYST GLASSMORPHIC PROJECT GRID */}
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
              className="relative flex flex-col justify-between h-full w-full max-w-[420px] rounded-3xl bg-gradient-to-br from-[#180630]/95 via-[#120324]/95 to-[#0e021e]/95 border border-[#A044FF]/45 hover:border-[#E0B3FF] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(160,68,255,0.45)] overflow-hidden group"
            >
              {project.featured && (
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A044FF] text-white text-xs font-bold shadow-lg">
                  <FaStar className="text-xs" /> Featured
                </div>
              )}

              <div>
                {/* Image Gallery Trigger */}
                <div
                  className="relative h-56 overflow-hidden cursor-pointer group/img"
                  onClick={() => openProject(project)}
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                    src={project.images[0]}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e021e] via-black/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#6A3093] via-[#8E2DE2] to-[#A044FF] text-white text-xs font-bold shadow-lg">
                      Open Gallery ({project.images.length}) 👀
                    </span>
                  </div>
                </div>

                <div className="px-6 pt-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#E0B3FF] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h2
                    className="text-xl font-extrabold text-white group-hover:text-[#E0B3FF] transition-colors cursor-pointer"
                    onClick={() => openProject(project)}
                  >
                    {project.title}
                  </h2>

                  <p className="text-gray-300 text-sm leading-relaxed mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4">
                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/35"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Interactive Deep-Dive Button */}
                <button
                  type="button"
                  onClick={() => setInspectProject(project)}
                  className="w-full mb-3 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs bg-[#1e083c] hover:bg-[#A044FF] text-[#E0B3FF] hover:text-white border border-[#A044FF]/50 transition-all shadow-sm"
                >
                  <FaBolt className="text-xs" /> Inspect Architecture & Code
                </button>

                <div className="flex gap-3">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs text-white bg-[#130326] border border-[#A044FF]/40 hover:bg-[#A044FF]/30 transition-all shadow-sm"
                  >
                    <FaGithub size={15} /> Source Code
                  </a>

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#6A3093] via-[#8E2DE2] to-[#A044FF] hover:shadow-[0_0_15px_#A044FF] transition-all shadow-sm"
                    >
                      <FaExternalLinkAlt size={13} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* INTERACTIVE ARCHITECTURE & CODE DEEP-DIVE MODAL (PURE OLD PURPLE) */}
      <AnimatePresence>
        {inspectProject && (
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setInspectProject(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-[0_0_45px_rgba(160,68,255,0.5)] border border-[#A044FF]/60 bg-[#0e021e] max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#A044FF]/30 bg-[#16032e]/90">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#1e0a3c] border border-[#A044FF]/50 text-[#E0B3FF]">
                    <FaMicrochip className="text-xl" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-purple-300 uppercase">
                      Architecture & Source Inspection
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {inspectProject.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setInspectProject(null)}
                  className="bg-[#1e0a3c] text-white p-2.5 rounded-full hover:bg-[#A044FF] transition-all"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-7">
                {/* 1. Architecture Flow Pipeline */}
                <div>
                  <h4 className="text-sm font-bold text-[#E0B3FF] uppercase tracking-wider mb-3">
                    System Architecture Pipeline
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    {inspectProject.architectureFlow?.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-[#180630] border border-[#A044FF]/40 relative flex flex-col justify-center text-center"
                      >
                        <span className="text-[10px] font-mono text-[#E0B3FF] mb-1">
                          STEP {idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-white">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Key Engineering Metrics */}
                <div>
                  <h4 className="text-sm font-bold text-[#E0B3FF] uppercase tracking-wider mb-3">
                    Key Performance & System Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {inspectProject.metrics?.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-[#140428] border border-[#A044FF]/30 flex items-center justify-between"
                      >
                        <span className="text-xs text-gray-300">{m.label}</span>
                        <span className="text-xs sm:text-sm font-bold text-[#E0B3FF]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Core Highlight Source Code */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-[#E0B3FF] uppercase tracking-wider flex items-center gap-2">
                      <FaCode /> Core Algorithmic Snippet
                    </h4>
                    <button
                      onClick={() => copyCodeToClipboard(inspectProject.codeSnippet)}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1e0a3c] hover:bg-[#A044FF] text-xs font-semibold text-[#E0B3FF] hover:text-white transition-all"
                    >
                      {copiedCode ? <FaCheck /> : <FaCopy />}
                      <span>{copiedCode ? "Copied Code" : "Copy Snippet"}</span>
                    </button>
                  </div>

                  <pre className="p-4 sm:p-5 rounded-2xl bg-[#080112] border border-[#A044FF]/50 text-xs font-mono text-purple-200 overflow-x-auto leading-relaxed">
                    {inspectProject.codeSnippet}
                  </pre>
                </div>

                {/* Action Footer */}
                <div className="flex justify-end gap-3 pt-3 border-t border-[#A044FF]/30">
                  <a
                    href={inspectProject.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6A3093] via-[#8E2DE2] to-[#A044FF] text-white font-bold text-xs sm:text-sm shadow-md"
                  >
                    Open Full GitHub Repository →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
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
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(160,68,255,0.4)] border border-[#A044FF]/50 bg-[#120324]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-30 bg-black/70 text-white p-2.5 rounded-full hover:bg-[#A044FF] transition-all"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes size={18} />
              </button>

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
                      onClick={() =>
                        setCurrentIndex((prev) =>
                          prev === 0 ? selectedProject.images.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-[#A044FF] transition-all"
                    >
                      <FaChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) =>
                          prev === selectedProject.images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-[#A044FF] transition-all"
                    >
                      <FaChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

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
                      className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#1e0a3c] border border-[#A044FF]/40 text-white hover:bg-[#A044FF]/30 transition-all flex items-center gap-2"
                    >
                      <FaGithub /> GitHub Code
                    </a>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
