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
  FaGraduationCap,
  FaAward,
  FaBuilding,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

// Images import
import SignLang1 from "../../assets/Sign Language Translator 1.png";
import SignLang2 from "../../assets/Sign Language Translator 2.png";
import SignLang3 from "../../assets/Sign Language Translator 3.png";
import SignLang4 from "../../assets/Sign Language Translator 4.png";
import SignLang5 from "../../assets/Sign Language Translator 5.png";
import SignLang6 from "../../assets/Sign Language Translator 6.png";
import SignLang7 from "../../assets/Sign Language Translator 7.png";
import SignLang8 from "../../assets/Sign Language Translator 8.png";

import Quoridor1 from "../../assets/Quoridor Game.png";
import Quoridor2 from "../../assets/Quoridor Game2.png";
import Quoridor3 from "../../assets/Quoridor Game3.png";
import Quoridor4 from "../../assets/Quoridor Game4.png";

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

  const getDemoLabel = (url) => {
    if (!url) return "Demo";
    if (url.includes("github.io") || url.includes("vercel.app") || url.includes("netlify.app")) {
      return "Live Demo";
    }
    return "Demo";
  };

  const projects = [
    {
      title: "AI-Powered Sign Language Translator",
      category: "AI/ML",
      featured: false,
      isGraduationProject: true,
      grade: "A+",
      sponsor: "Fotopia Technologies",
      tagline: "Graduation Project (Grade A+) • Real-Time Bidirectional ASL Translation Platform",
      description:
        "Built an end-to-end AI platform featuring web (React.js) and mobile (React Native) applications, powered by a Python backend with TensorFlow and PyTorch inference. Developed a Temporal Convolutional Network (TCN) achieving 92.36% test accuracy on a 441-class subset of the ASL Citizen dataset. Features real-time sign-to-text translation via live webcam, video calls, & uploaded video files; text-to-sign translation, interactive sign dictionary, and an LLM-powered intelligent ASL chatbot. Sponsored by Fotopia Technologies — Grade A+ Distinction.",
      images: [
        SignLang1,
        SignLang2,
        SignLang3,
        SignLang4,
        SignLang5,
        SignLang6,
        SignLang7,
        SignLang8,
      ],
      languages: [
        "React.js",
        "React Native",
        "TensorFlow",
        "PyTorch",
        "MediaPipe",
        "OpenCV",
        "Python",
        "LLM Chatbot",
      ],
      projectLink: "https://github.com/shahed137003",
      liveDemo: "https://drive.google.com/file/d/1AE7ChSuRZq-qWTjlQ4-iocFyBmy18roV/view",
      architectureFlow: [
        "React & React Native Multi-Client Apps",
        "MediaPipe Landmark Extraction & Preprocessing",
        "TCN Deep Learning Inference (92.36% Acc)",
        "Bidirectional Translation & LLM ASL Assistant",
      ],
      metrics: [
        { label: "Graduation Grade", value: "A+ Distinction" },
        { label: "Model Test Accuracy", value: "92.36% (441 Classes)" },
        { label: "Sponsor Company", value: "Fotopia Technologies" },
        { label: "Translation Modes", value: "Webcam, Video Calls, Files" },
      ],
      codeSnippet: `# PyTorch & MediaPipe TCN Temporal Convolutional Network
import torch
import torch.nn as nn

class ASLSignLanguageTCN(nn.Module):
    def __init__(self, num_classes=441, landmark_dim=126):
        super(ASLSignLanguageTCN, self).__init__()
        # MediaPipe 3D Landmark Input Features (x, y, z per joint)
        self.tcn_layers = nn.Sequential(
            TemporalBlock(landmark_dim, 256, kernel_size=5, stride=1, dilation=1),
            TemporalBlock(256, 512, kernel_size=5, stride=1, dilation=2),
            TemporalBlock(512, 512, kernel_size=5, stride=1, dilation=4)
        )
        self.classifier = nn.Linear(512, num_classes) # Achieves 92.36% Accuracy

    def forward(self, x):
        features = self.tcn_layers(x)
        return self.classifier(features[:, :, -1])`,
    },
    {
      title: "Distributed Online Marketplace",
      category: "Web",
      featured: false,
      tagline: "Distributed Frontend E-Commerce & Microservice Architecture",
      description:
        "A scalable distributed online marketplace built with React frontend, low-latency .NET Core C# microservices, and relational SQL databases.",
      images: [MarketplaceApp, MarketplaceApp2, MarketplaceApp3, MarketplaceApp4],
      languages: ["React", "JavaScript", ".NET Core", "C#", "SQL Server"],
      projectLink:
        "https://github.com/shahed137003/distributed-online-marketplace-system.git",
      liveDemo: "https://www.linkedin.com/posts/habiba-kenawy-65606227a_frontenddevelopment-reactjs-dotnetcore-activity-7337887411802103808-otiz?utm_source=share&utm_medium=member_ios&rcm=ACoAAFALtuMBMZVoXyMPaNbjsc0okuTQVV9wKHI",
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
      featured: false,
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
      featured: false,
      tagline: "High-Speed React 18 & Vite Modern Storefront",
      description:
        "A sleek, modern React + Vite e-commerce web application featuring dynamic product catalog filtering, interactive cart state, and smooth Framer Motion animations.",
      images: [Velora, Velora2, Velora3, Velora4, Velora5, Velora6],
      languages: ["React 18", "JavaScript", "Tailwind CSS", "Vite"],
      projectLink: "https://github.com/shahed137003/Velora-E-commerce-app.git",
      liveDemo: "https://shahed137003.github.io/Velora-E-commerce-app/",
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
      featured: true,
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
      title: "Interactive Quoridor AI Board Game",
      category: "Desktop",
      featured: false,
      tagline: "Classic 2-Player Strategy Board Game with PyQt5 GUI & Minimax AI",
      description:
        "A complete implementation of the classic 2-player Quoridor strategy board game built with Python 3.11 and PyQt5. Features an interactive GUI board display with pawn movement & wall placement, full rule enforcement, BFS/A* pathfinding validation (ensuring walls never block all paths), and AI opponents ranging from Easy (Greedy Heuristics) to Hard (Minimax with Alpha–Beta Pruning).",
      images: [Quoridor1, Quoridor2, Quoridor3, Quoridor4],
      languages: ["Python 3.11", "PyQt5", "Minimax AI", "Alpha-Beta Pruning", "BFS Pathfinding"],
      projectLink: "https://github.com/MariamHany4/Quoridor-Game.git",
      liveDemo: null,
      architectureFlow: [
        "PyQt5 Interactive GUI Board",
        "BFS/A* Pathfinding Validation",
        "Minimax AI with Alpha-Beta Pruning",
        "Real-Time Game State Engine",
      ],
      metrics: [
        { label: "AI Engine", value: "Minimax + Alpha-Beta" },
        { label: "GUI Framework", value: "Python PyQt5" },
        { label: "Path Validation", value: "BFS Unreachable Check" },
        { label: "AI Difficulties", value: "Easy, Medium, Hard" },
      ],
      codeSnippet: `# Minimax AI Engine with Alpha-Beta Pruning & Path Heuristics
def minimax(board, depth, alpha, beta, is_maximizing):
    if depth == 0 or board.is_game_over():
        return evaluate_heuristics(board)
    
    if is_maximizing:
        max_eval = -float('inf')
        for move in board.get_valid_moves():
            board.make_move(move)
            eval = minimax(board, depth - 1, alpha, beta, False)
            board.undo_move(move)
            max_eval = max(max_eval, eval)
            alpha = max(alpha, eval)
            if beta <= alpha:
                break # Alpha-Beta Cutoff
        return max_eval`,
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

  const cardBgStyle = isDarkMode
    ? "bg-[#10030a]/50 backdrop-blur-xl border border-[#FF007A]/30 hover:border-[#FF007A] shadow-[0_8px_30px_rgba(255,0,122,0.2)] hover:shadow-[0_15px_45px_rgba(255,0,122,0.4)] text-white sign-language-grid-bg"
    : "bg-white/50 backdrop-blur-xl border border-[#be123c]/25 hover:border-[#be123c] shadow-[0_8px_25px_rgba(225,29,72,0.08)] hover:shadow-[0_15px_35px_rgba(225,29,72,0.2)] text-[#4c0519] sign-language-grid-bg";

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
            : "bg-[#ffe4e6] border-[#be123c]/30 text-[#800020]"
        }`}>
          <FaCrown className={isDarkMode ? "text-[#FDA4AF]" : "text-[#800020]"} />
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
                  : "bg-[#ffe4e6] text-[#800020] hover:text-[#4c0519] border border-[#be123c]/30 hover:border-[#be123c]"
              }`}
            >
              <span className="text-sm">{cat.icon}</span>
              <span>{cat.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] ${
                isDarkMode ? "bg-[#0b0207] text-[#FDA4AF]" : "bg-[#fecdd3] text-[#800020]"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <FaSearch className={`absolute left-4 top-1/2 -translate-y-1/2 text-sm ${
            isDarkMode ? "text-[#FDA4AF]" : "text-[#800020]"
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
              className={`w-full max-w-sm rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 group relative flex flex-col justify-between ${
                project.isGraduationProject
                  ? "border-2 border-[#FF007A] shadow-[0_0_40px_rgba(255,0,122,0.45)] ring-2 ring-[#FF007A]/30"
                  : ""
              } ${cardBgStyle}`}
            >
              {/* Graduation Project Top Badge */}
              {project.isGraduationProject && (
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 via-[#FF007A] to-[#E01E5A] text-white text-[11px] font-black shadow-lg border border-amber-300/40 tracking-wider uppercase">
                  <FaGraduationCap className="text-sm text-yellow-200" />
                  <span>Grad Project • Grade A+</span>
                </div>
              )}

              {project.featured && !project.isGraduationProject && (
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#E01E5A] to-[#FF007A] text-white text-xs font-bold shadow-lg border border-[#FDA4AF]/40">
                  <FaStar className="text-xs text-yellow-300" /> Featured
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
                    {project.sponsor && (
                      <span className="text-[10px] font-mono font-bold text-amber-400 flex items-center gap-1 bg-amber-950/70 px-2.5 py-0.5 rounded-md border border-amber-500/40 shadow-sm">
                        <FaBuilding className="text-[9px]" /> {project.sponsor}
                      </span>
                    )}
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
                          ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/40"
                          : "bg-[#ffe4e6] text-[#800020] border-[#be123c]/30"
                      }`}
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#FF007A]/20">
                  <button
                    onClick={() => setInspectProject(project)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1.5 ${
                      isDarkMode
                        ? "bg-[#10030a] border-[#FF007A]/45 text-white hover:bg-[#FF007A]/30"
                        : "bg-white border-[#be123c]/35 text-[#4c0519] hover:bg-[#ffe4e6]"
                    }`}
                  >
                    <FaMicrochip className="text-xs" /> Architecture
                  </button>

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-[#FF007A] text-white text-xs font-bold shadow-md hover:scale-105 transition-all flex items-center gap-1"
                    >
                      {getDemoLabel(project.liveDemo)}
                    </a>
                  )}

                  <button
                    onClick={() => openProject(project)}
                    className="px-3 py-2 rounded-xl bg-gradient-to-r from-[#E01E5A] to-[#FF007A] text-white text-xs font-bold shadow-md hover:scale-105 transition-all"
                  >
                    Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* SYSTEM ARCHITECTURE INSPECTOR MODAL */}
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
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    {inspectProject.metrics?.map((m, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl border flex flex-col justify-between ${
                          isDarkMode
                            ? "bg-[#10030a] border-[#FF007A]/30"
                            : "bg-[#fff1f2] border-[#be123c]/25"
                        }`}
                      >
                        <span className={`text-xs ${
                          isDarkMode ? "text-gray-300" : "text-[#881337]"
                        }`}>{m.label}</span>
                        <span className={`text-xs sm:text-sm font-bold mt-1 ${
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
                <div className={`pt-3 border-t flex flex-wrap justify-end gap-3 ${
                  isDarkMode ? "border-[#FF007A]/30" : "border-[#be123c]/20"
                }`}>
                  {inspectProject.liveDemo && (
                    <a
                      href={inspectProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF007A] to-[#E01E5A] text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2"
                    >
                      {getDemoLabel(inspectProject.liveDemo)} →
                    </a>
                  )}
                  <a
                    href={inspectProject.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#10030a] border border-[#FF007A]/40 text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#FF007A]/30"
                  >
                    GitHub Repo →
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
              className={`relative max-w-5xl w-full rounded-3xl overflow-hidden border shadow-2xl ${
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
                className="absolute top-4 right-4 z-30 bg-black/70 text-white p-2.5 rounded-full hover:bg-[#FF007A] transition-all cursor-pointer"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes size={18} />
              </button>

              <div className="relative bg-black h-72 sm:h-[450px] flex items-center justify-center overflow-hidden">
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
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-[#FF007A] transition-all cursor-pointer"
                    >
                      <FaChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) =>
                          prev === selectedProject.images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-[#FF007A] transition-all cursor-pointer"
                    >
                      <FaChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Bar for Multiple Images */}
              {selectedProject.images.length > 1 && (
                <div className="p-3 bg-black/40 border-t border-b border-[#FF007A]/20 flex gap-2 overflow-x-auto justify-center">
                  {selectedProject.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-16 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        currentIndex === i
                          ? "border-[#FF007A] scale-105 shadow-[0_0_10px_#FF007A]"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    {selectedProject.isGraduationProject && (
                      <span className="text-xs font-mono font-bold text-amber-400 block mb-1">
                        🎓 GRADUATION PROJECT • GRADE A+ • SPONSORED BY FOTOPIA TECHNOLOGIES
                      </span>
                    )}
                    <h3 className={`text-2xl sm:text-3xl font-extrabold ${
                      isDarkMode ? "text-white" : "text-[#4c0519]"
                    }`}>
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {selectedProject.liveDemo && (
                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-[#FF007A] to-[#E01E5A] text-white shadow-md transition-all flex items-center gap-2"
                      >
                        {getDemoLabel(selectedProject.liveDemo)}
                      </a>
                    )}
                    <a
                      href={selectedProject.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center gap-2 ${
                        isDarkMode
                          ? "bg-[#10030a] border-[#FF007A]/40 text-white hover:bg-[#FF007A]/30"
                          : "bg-[#ffe4e6] border-[#be123c]/30 text-[#4c0519] hover:bg-[#be123c]/20"
                      }`}
                    >
                      <FaGithub /> GitHub Code
                    </a>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDarkMode ? "text-gray-200" : "text-[#881337]"
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
