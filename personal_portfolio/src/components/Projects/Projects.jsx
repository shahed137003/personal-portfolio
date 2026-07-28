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
import { useTheme } from "../../context/ThemeContext";

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
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: "Distributed Online Marketplace",
      category: "Web",
      featured: true,
      tagline: "Distributed Frontend E-Commerce & Microservice Architecture",
      description:
        "A scalable distributed online marketplace built with React frontend, low-latency .NET Core C# microservices, and relational SQL databases.",
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

  const categories = [
    { id: "All", label: "All Projects", icon: <FaLayerGroup />, count: projects.length },
    {
      id: "Web",
      label: "Frontend & Web",
      icon: <FaLaptopCode />,
      count: projects.filter((p) => p.category === "Web").length,
    },
    {
      id: "AI/ML",
      label: "AI / ML Systems",
      icon: <FaBrain />,
      count: projects.filter((p) => p.category === "AI/ML").length,
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

  // Reusable background container style featuring clean pink grid pattern & ambient glows
  const cardBgStyle = isDarkMode
    ? "bg-gradient-to-br from-[#180510]/95 via-[#10030a]/95 to-[#0b0207]/95 border border-[#FF007A]/45 hover:border-[#FDA4AF] shadow-[0_0_25px_rgba(255,0,122,0.25)] hover:shadow-[0_0_40px_rgba(255,0,122,0.45)] text-white sign-language-grid-bg"
    : "bg-gradient-to-br from-[#ffffff] via-[#fff1f2] to-[#fecdd3] border-2 border-[#be123c]/80 hover:border-[#881337] shadow-[0_12px_35px_rgba(225,29,72,0.15)] hover:shadow-[0_20px_50px_rgba(225,29,72,0.3)] text-[#4c0519] sign-language-grid-bg";

  return (
    <section className={`relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16 transition-colors duration-500 ${
      isDarkMode ? "text-white" : "text-[#2e0854]"
    }`} id="projectSection">
      {/* Rose Carmine Ambient Glows */}
      <div className={`absolute top-1/4 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
        isDarkMode ? "bg-[#FF007A]/25 animate-pulse" : "bg-[#fda4af]/20"
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
          <span>Frontend Engineering & AI Portfolio</span>
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-[68px] font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-[#FF007A] to-[#E01E5A] dark:from-white dark:via-[#FDA4AF] dark:to-[#FF007A] tracking-wide">
          Featured Projects
        </h1>
        <p className={`max-w-2xl mx-auto text-sm sm:text-base mt-3 ${
          isDarkMode ? "text-gray-300" : "text-[#881337]"
        }`}>
          Explore production-grade frontend web applications, interactive React interfaces, and intelligent AI assistants.
        </p>
      </motion.div>

      {/* INTERACTIVE CATEGORY FILTER & SEARCH BAR */}
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
        <div className="flex justify-center gap-2.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-[#E01E5A] via-[#F43F5E] to-[#FF007A] text-white shadow-[0_0_20px_rgba(255,0,122,0.6)] scale-105 border border-[#FDA4AF]/40"
                  : isDarkMode
                  ? "bg-[#10030a]/80 text-[#FDA4AF] hover:text-white border border-[#FF007A]/30 hover:border-[#FF007A]"
                  : "bg-[#ffe4e6] text-[#BE123C] hover:text-[#4c0519] border border-[#be123c]/30 hover:border-[#be123c]"
              }`}
            >
              <span className="text-sm">{cat.icon}</span>
              <span>{cat.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] ${
                isDarkMode ? "bg-[#0b0207] text-[#FDA4AF]" : "bg-[#fecdd3] text-[#BE123C]"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <FaSearch className={`absolute left-4 top-1/2 -translate-y-1/2 text-sm ${
            isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
          }`} />
          <input
            type="text"
            placeholder="Search projects or tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-11 pr-4 py-2.5 rounded-2xl border text-sm transition-all focus:outline-none ${
              isDarkMode
                ? "bg-[#10030a]/90 border-[#FF007A]/40 text-white placeholder-pink-300 focus:border-[#FDA4AF] focus:shadow-[0_0_15px_rgba(255,0,122,0.4)]"
                : "bg-[#ffffff] border-[#be123c]/40 text-[#4c0519] placeholder-pink-400 focus:border-[#be123c] focus:shadow-[0_0_15px_rgba(225,29,72,0.3)]"
            }`}
          />
        </div>
      </div>

      {/* SHOWSTOPPING ROSE CARMINE GLASSMORPHIC PROJECT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45 }}
              className={`w-full max-w-sm rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 group relative flex flex-col justify-between ${cardBgStyle}`}
            >


              {project.featured && (
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#E01E5A] to-[#FF007A] text-white text-xs font-bold shadow-lg border border-[#FDA4AF]/40">
                  <FaStar className="text-xs text-yellow-300" /> {idx === 0 ? "★ Main Project" : "Featured"}
                </div>
              )}

              <div className="relative z-10">
                {/* Image Gallery Trigger */}
                <div
                  className="relative h-56 overflow-hidden cursor-pointer group/img border-b border-[#FF007A]/25"
                  onClick={() => openProject(project)}
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                    src={project.images[0]}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0207] via-black/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#E01E5A] via-[#F43F5E] to-[#FF007A] text-white text-xs font-bold shadow-lg">
                      Open Gallery ({project.images.length}) 👀
                    </span>
                  </div>
                </div>

                <div className="px-6 pt-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  <h2
                    className={`text-xl font-extrabold transition-colors cursor-pointer ${
                      isDarkMode
                        ? "text-white group-hover:text-[#FDA4AF]"
                        : "text-[#4c0519] group-hover:text-[#be123c]"
                    }`}
                    onClick={() => openProject(project)}
                  >
                    {project.title}
                  </h2>

                  <p className={`text-sm leading-relaxed mt-2 line-clamp-3 ${
                    isDarkMode ? "text-gray-300" : "text-[#881337]"
                  }`}>
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 relative z-10">
                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.languages.map((lang, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border ${
                        isDarkMode
                          ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/35"
                          : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
                      }`}
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Interactive Deep-Dive Button */}
                <button
                  type="button"
                  onClick={() => setInspectProject(project)}
                  className={`w-full mb-3 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm ${
                    isDarkMode
                      ? "bg-[#10030a] hover:bg-[#FF007A] text-[#FDA4AF] hover:text-white border border-[#FF007A]/50"
                      : "bg-[#ffe4e6] hover:bg-[#be123c] text-[#BE123C] hover:text-white border border-[#be123c]/40"
                  }`}
                >
                  <FaBolt className="text-xs" /> Inspect Architecture & Code
                </button>

                <div className="flex gap-3">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm ${
                      isDarkMode
                        ? "text-white bg-[#10030a] border border-[#FF007A]/40 hover:bg-[#FF007A]/30"
                        : "text-[#4c0519] bg-[#fff1f2] border border-[#be123c]/30 hover:bg-[#be123c]/20"
                    }`}
                  >
                    <FaGithub size={15} /> Source Code
                  </a>

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#E01E5A] via-[#F43F5E] to-[#FF007A] hover:shadow-[0_0_15px_#FF007A] transition-all shadow-sm"
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

      {/* INTERACTIVE ARCHITECTURE & CODE DEEP-DIVE MODAL */}
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
              className={`relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl border max-h-[90vh] overflow-y-auto ${
                isDarkMode
                  ? "border-[#FF007A]/60 bg-[#0b0207] text-white shadow-[0_0_45px_rgba(255,0,122,0.5)]"
                  : "border-[#be123c]/50 bg-[#ffffff] text-[#4c0519] shadow-[0_15px_50px_rgba(225,29,72,0.3)]"
              }`}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`flex items-center justify-between p-6 border-b ${
                isDarkMode ? "border-[#FF007A]/30 bg-[#180510]/90" : "border-[#be123c]/20 bg-[#fff1f2]"
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${
                    isDarkMode ? "bg-[#10030a] border-[#FF007A]/50 text-[#FDA4AF]" : "bg-[#ffe4e6] border-[#be123c]/40 text-[#BE123C]"
                  }`}>
                    <FaMicrochip className="text-xl" />
                  </div>
                  <div>
                    <span className={`text-xs font-bold uppercase ${
                      isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                    }`}>
                      Architecture & Source Inspection
                    </span>
                    <h3 className={`text-xl sm:text-2xl font-bold ${
                      isDarkMode ? "text-white" : "text-[#4c0519]"
                    }`}>
                      {inspectProject.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setInspectProject(null)}
                  className={`p-2.5 rounded-full transition-all ${
                    isDarkMode ? "bg-[#10030a] text-white hover:bg-[#FF007A]" : "bg-[#ffe4e6] text-[#4c0519] hover:bg-[#be123c] hover:text-white"
                  }`}
                >
                  <FaTimes size={16} />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-7">
                {/* 1. Architecture Flow Pipeline */}
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    System Architecture Pipeline
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    {inspectProject.architectureFlow?.map((step, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-2xl border relative flex flex-col justify-center text-center ${
                          isDarkMode
                            ? "bg-[#10030a] border-[#FF007A]/40"
                            : "bg-[#ffe4e6] border-[#be123c]/30"
                        }`}
                      >
                        <span className={`text-[10px] font-mono mb-1 ${
                          isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                        }`}>
                          STEP {idx + 1}
                        </span>
                        <span className={`text-xs sm:text-sm font-bold ${
                          isDarkMode ? "text-white" : "text-[#4c0519]"
                        }`}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Key Engineering Metrics */}
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    Key Performance & System Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {inspectProject.metrics?.map((m, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl border flex items-center justify-between ${
                          isDarkMode
                            ? "bg-[#10030a] border-[#FF007A]/30"
                            : "bg-[#fff1f2] border-[#be123c]/25"
                        }`}
                      >
                        <span className={`text-xs ${
                          isDarkMode ? "text-gray-300" : "text-[#881337]"
                        }`}>{m.label}</span>
                        <span className={`text-xs sm:text-sm font-bold ${
                          isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                        }`}>
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Core Highlight Source Code */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${
                      isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                    }`}>
                      <FaCode /> Core Algorithmic Snippet
                    </h4>
                    <button
                      onClick={() => copyCodeToClipboard(inspectProject.codeSnippet)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                        isDarkMode
                          ? "bg-[#10030a] hover:bg-[#FF007A] text-[#FDA4AF] hover:text-white"
                          : "bg-[#ffe4e6] hover:bg-[#be123c] text-[#BE123C] hover:text-white"
                      }`}
                    >
                      {copiedCode ? <FaCheck /> : <FaCopy />}
                      <span>{copiedCode ? "Copied Code" : "Copy Snippet"}</span>
                    </button>
                  </div>

                  <pre className={`p-4 sm:p-5 rounded-2xl border text-xs font-mono overflow-x-auto leading-relaxed ${
                    isDarkMode
                      ? "bg-[#0b0207] border-[#FF007A]/50 text-pink-200"
                      : "bg-[#4c0519] border-[#be123c]/40 text-[#ffe4e6]"
                  }`}>
                    {inspectProject.codeSnippet}
                  </pre>
                </div>

                {/* Action Footer */}
                <div className={`pt-3 border-t flex justify-end gap-3 ${
                  isDarkMode ? "border-[#FF007A]/30" : "border-[#be123c]/20"
                }`}>
                  <a
                    href={inspectProject.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E01E5A] via-[#F43F5E] to-[#FF007A] text-white font-bold text-xs sm:text-sm shadow-md"
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
              className={`relative max-w-4xl w-full rounded-2xl overflow-hidden border shadow-2xl ${
                isDarkMode
                  ? "border-[#FF007A]/50 bg-[#10030a]"
                  : "border-[#be123c]/40 bg-[#fff1f2]"
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-30 bg-black/70 text-white p-2.5 rounded-full hover:bg-[#FF007A] transition-all"
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
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-[#FF007A] transition-all"
                    >
                      <FaChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) =>
                          prev === selectedProject.images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-[#FF007A] transition-all"
                    >
                      <FaChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <h3 className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-[#4c0519]"
                  }`}>
                    {selectedProject.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={selectedProject.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all flex items-center gap-2 ${
                        isDarkMode
                          ? "bg-[#10030a] border-[#FF007A]/40 text-white hover:bg-[#FF007A]/30"
                          : "bg-[#ffe4e6] border-[#be123c]/30 text-[#4c0519] hover:bg-[#be123c]/20"
                      }`}
                    >
                      <FaGithub /> GitHub Code
                    </a>
                  </div>
                </div>

                <p className={`text-sm sm:text-base leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-[#881337]"
                }`}>
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
