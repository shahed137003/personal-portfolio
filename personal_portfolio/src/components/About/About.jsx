import React, { useState } from "react";
import "./About.css";
import avatar from "../../assets/avataaars.png";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import {
  FaLaptopCode,
  FaCertificate,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaBrain,
  FaEye,
  FaNetworkWired,
  FaMicrochip,
  FaCopy,
  FaCheck,
  FaGraduationCap,
  FaTimes,
  FaShieldAlt,
  FaAward,
  FaRegCheckCircle,
  FaLanguage,
  FaCompass,
} from "react-icons/fa";
import { SiCoursera, SiReact, SiPython } from "react-icons/si";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function About() {
  const [activeCertCategory, setActiveCertCategory] = useState("All");
  const [selectedCertModal, setSelectedCertModal] = useState(null);
  const [activePillar, setActivePillar] = useState(0);
  const [copiedLabel, setCopiedLabel] = useState(null);

  // 3D Tilt Card Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    toast.info(`Copied ${label} to clipboard!`, {
      position: "bottom-right",
      autoClose: 2000,
      theme: "dark",
      style: {
        background: "#1e083c",
        border: "1px solid #A044FF",
        color: "#E0B3FF",
        borderRadius: "12px",
      },
    });
    setTimeout(() => setCopiedLabel(null), 2500);
  };

  const engineeringPillars = [
    {
      id: 0,
      title: "AI & NLP Transformers",
      icon: <FaBrain className="text-2xl text-[#E0B3FF]" />,
      badge: "Deep Learning Core",
      desc: "Fine-tuning BERT & LLaMA variants for Named Entity Recognition, text classification, and Retrieval-Augmented Generation (RAG).",
      metrics: "10% Accuracy Gain • LangGraph • FAISS",
    },
    {
      id: 1,
      title: "Computer Vision Systems",
      icon: <FaEye className="text-2xl text-[#A044FF]" />,
      badge: "Real-Time Surveillance",
      desc: "Architecting Convolutional Neural Networks (CNNs), YOLOv8 object detection, and OpenCV motion contour pipelines.",
      metrics: "Real-Time 30+ FPS • OpenCV • PyTorch",
    },
    {
      id: 2,
      title: "Full-Stack Distributed Web",
      icon: <FaNetworkWired className="text-2xl text-[#E0B3FF]" />,
      badge: "Microservices & UI",
      desc: "Building highly scalable distributed React 18 single-page interfaces powered by low-latency .NET Core C# APIs.",
      metrics: "<80ms API Response • React 18 • .NET Core",
    },
    {
      id: 3,
      title: "Systems & Embedded GUI",
      icon: <FaMicrochip className="text-2xl text-[#A044FF]" />,
      badge: "Low-Level Engineering",
      desc: "Designing operating system schedulers, custom N-Ary tree XML parsers, and ARM Cortex embedded architectures in C++ & Qt.",
      metrics: "C++ OOP Engine • Qt Desktop Widgets",
    },
  ];

  const certCategories = ["All", "AI/ML & Data Science", "Web & Software Dev", "Engineering & Tools"];

  const certificates = [
    {
      title: "Cellula Technology Training (NLP)",
      issuer: "Cellula Technologies",
      date: "2025",
      category: "AI/ML & Data Science",
      credentialID: "CT-2025-NLP-SH",
      description:
        "Intensive applied research program mastering transformer-based NLP architectures (BERT, LLaMA Guard). Achieved +10% accuracy improvement over benchmark baselines.",
      skillsEarned: ["Transformers", "BERT", "LLaMA Guard", "Named Entity Recognition (NER)", "Sentiment Analysis"],
      icon: <FaBrain className="text-2xl text-[#E0B3FF]" />,
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/EcXq7biTanJEopbgpGO51bgBlKg6xPekPaJvIEZygabwmw?e=PU7gzl",
    },
    {
      title: "React & React Native Development",
      issuer: "Information Technology Institute (ITI)",
      date: "Summer 2024",
      category: "Web & Software Dev",
      credentialID: "ITI-2024-FE-SH",
      description:
        "Comprehensive software engineering internship building production-grade dynamic web single-page apps and cross-platform mobile user interfaces.",
      skillsEarned: ["React 18", "React Native", "State Management", "RESTful APIs", "Component Architecture"],
      icon: <SiReact className="text-2xl text-[#E0B3FF]" />,
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/Ea0KEazQtCBAhj9KLt3BgPQBd2KvFEvKLqAMLn8cvwNuxQ?e=4A9C3I",
    },
    {
      title: "Cellula Technology Training (Computer Vision)",
      issuer: "Cellula Technologies",
      date: "2025",
      category: "AI/ML & Data Science",
      credentialID: "CT-2025-CV-SH",
      description:
        "Designed and optimized Convolutional Neural Networks (CNNs) in PyTorch and OpenCV for real-time object detection and feature extraction.",
      skillsEarned: ["PyTorch", "OpenCV", "YOLOv8", "CNN Architecture", "Real-Time Video Pipelines"],
      icon: <FaEye className="text-2xl text-[#A044FF]" />,
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/EYKLfG5qYiRPt-OnnpmYkXYBEL6sOJdk2SgD597-rdD7yQ?e=nUt36H",
    },
    {
      title: "MATLAB Programming for Engineers",
      issuer: "Coursera",
      date: "2024",
      category: "Engineering & Tools",
      credentialID: "COURSERA-MATLAB-SH",
      description:
        "Mastered MATLAB numerical modeling, algorithmic engineering workflows, matrix transformations, and scientific data visualization.",
      skillsEarned: ["MATLAB", "Numerical Analysis", "Matrix Transformations", "Algorithm Modeling"],
      icon: <SiCoursera className="text-2xl text-[#E0B3FF]" />,
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/EXsuyG-PxdNHsG1T7Wbm6J4B0_cDT020yFNA_uARdqacyA?e=bb1cFe",
    },
    {
      title: "Python for Everybody Specialization",
      issuer: "Coursera / Univ. of Michigan",
      date: "2024",
      category: "AI/ML & Data Science",
      credentialID: "COURSERA-PY-SH",
      description:
        "Comprehensive Python specialization covering programmatic data structures, relational database SQL integration, web APIs, and data processing.",
      skillsEarned: ["Python 3", "Data Structures", "SQL & Relational Databases", "Web Scraping & APIs"],
      icon: <SiPython className="text-2xl text-[#A044FF]" />,
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/Ed9YmS-jMz5MmUPUvIJOL7kBO_35rVwIW3yBDJB894QMDg?e=SnQRCD",
    },
  ];

  const filteredCerts =
    activeCertCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCertCategory);

  return (
    <section className="text-white relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16" id="aboutSection">
      <ToastContainer />

      {/* Pure Purple Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#6A3093]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-[#A044FF]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e083c] border border-[#A044FF]/40 text-xs sm:text-sm font-semibold text-[#E0B3FF] mb-3 shadow-[0_0_15px_rgba(160,68,255,0.3)]">
          Senior Computer Engineering Profile
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-[68px] font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0B3FF] to-[#A044FF] tracking-wide">
          About Me
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base mt-3">
          Bridging advanced Artificial Intelligence & Computer Vision research with robust full-stack software architecture.
        </p>
      </motion.div>

      {/* TOP ROW: BALANCED LEFT COLUMN (5 COLS) + RIGHT COLUMN (7 COLS) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* LEFT COLUMN (5 COLS): 3D HOLOGRAPHIC ID BADGE + ACADEMIC STANDING & FAST FACTS */}
        <motion.div
          className="lg:col-span-5 flex flex-col justify-between gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* 3D Holographic ID Card */}
          <motion.div
            style={{ perspective: 1000, rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full bg-gradient-to-br from-[#180630]/95 via-[#0e021e]/95 to-[#180630]/95 border-2 border-[#A044FF]/60 rounded-3xl p-7 shadow-[0_0_45px_rgba(160,68,255,0.35)] amethyst-card-floating relative overflow-hidden flex-1 flex flex-col justify-between"
          >
            <div>
              {/* Top Status Header */}
              <div className="flex items-center justify-between border-b border-[#A044FF]/30 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-purple-radar absolute inline-flex h-full w-full rounded-full bg-[#E0B3FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#A044FF]"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E0B3FF]">
                    Senior Engineering Year
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/40">
                  Ain Shams Univ
                </span>
              </div>

              {/* Profile Avatar & Title */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-[#A044FF] via-[#E0B3FF] to-[#6A3093] shadow-[0_0_25px_rgba(160,68,255,0.5)] mb-4">
                  <img
                    src={avatar}
                    alt="Shahd Mohamed"
                    className="w-full h-full object-cover rounded-full bg-[#0e021e]"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Shahd Mohamed
                </h3>
                <p className="text-sm text-[#E0B3FF] font-semibold mt-1">
                  AI & Computer Vision Engineer
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Faculty of Engineering • Cairo, Egypt
                </p>
              </div>

              {/* Interactive Quick-Copy Stack */}
              <div className="space-y-3 mb-6">
                <div
                  onClick={() => copyToClipboard("Shahd137003@gmail.com", "Email")}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#130326] border border-[#A044FF]/35 hover:border-[#E0B3FF] cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <MdEmail className="text-xl text-[#E0B3FF]" />
                    <div>
                      <div className="text-[11px] text-gray-400 uppercase font-semibold">
                        Email Address
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#E0B3FF] transition-colors truncate">
                        Shahd137003@gmail.com
                      </div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[#1e083c] text-[#E0B3FF] font-semibold">
                    {copiedLabel === "Email" ? "Copied!" : "Copy"}
                  </span>
                </div>

                <div
                  onClick={() => copyToClipboard("+20 1092968238", "Phone Number")}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#130326] border border-[#A044FF]/35 hover:border-[#E0B3FF] cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <MdPhone className="text-xl text-[#A044FF]" />
                    <div>
                      <div className="text-[11px] text-gray-400 uppercase font-semibold">
                        Phone Number
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#E0B3FF] transition-colors">
                        +20 1092968238
                      </div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[#1e083c] text-[#E0B3FF] font-semibold">
                    {copiedLabel === "Phone Number" ? "Copied!" : "Copy"}
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Standing Footer inside card */}
            <div className="p-4 rounded-2xl bg-[#130326] border border-[#A044FF]/40 text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#E0B3FF]">
                <FaGraduationCap className="text-base" /> B.Sc. Computer Engineering (Candidate)
              </div>
              <p className="text-[11px] text-gray-300 mt-1">
                Embedded Microcontrollers, Algorithms, AI Systems & Compiler Theory
              </p>
            </div>
          </motion.div>

          {/* Added Left-Side Fast Facts & Core Focus Card to fully balance vertical space */}
          <div className="bg-gradient-to-br from-[#180630]/95 to-[#0e021e]/95 border border-[#A044FF]/45 rounded-3xl p-6 shadow-xl space-y-4">
            <h4 className="text-sm font-bold text-[#E0B3FF] uppercase tracking-wider flex items-center gap-2">
              <FaCompass /> Engineering Standing & Focus
            </h4>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#130326] border border-[#A044FF]/30">
                <span className="text-gray-400 block mb-0.5">University</span>
                <span className="font-bold text-white">Ain Shams University</span>
              </div>
              <div className="p-3 rounded-xl bg-[#130326] border border-[#A044FF]/30">
                <span className="text-gray-400 block mb-0.5">Faculty</span>
                <span className="font-bold text-[#E0B3FF]">Faculty of Engineering</span>
              </div>
              <div className="p-3 rounded-xl bg-[#130326] border border-[#A044FF]/30">
                <span className="text-gray-400 block mb-0.5">Major</span>
                <span className="font-bold text-white">Computer Engineering</span>
              </div>
              <div className="p-3 rounded-xl bg-[#130326] border border-[#A044FF]/30">
                <span className="text-gray-400 block mb-0.5">Languages</span>
                <span className="font-bold text-[#E0B3FF]">Arabic & English</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN (7 COLS): INTERACTIVE CORE SPECIALIZATION PILLARS BENTO GRID */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-between"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#180630]/95 to-[#0e021e]/95 border border-[#A044FF]/45 rounded-3xl p-6 sm:p-8 shadow-2xl h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E0B3FF]">
                    Interactive Core Pillars
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
                    Technical Specializations
                  </h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/30">
                  Click to Highlight
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                My engineering approach combines theoretical rigor in algorithms and low-level computer architecture with cutting-edge applied Artificial Intelligence and scalable web microservices.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {engineeringPillars.map((pillar) => {
                const isSelected = activePillar === pillar.id;
                return (
                  <div
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-gradient-to-br from-[#270b4c] to-[#140326] border-[#A044FF] shadow-[0_0_28px_rgba(160,68,255,0.5)] scale-[1.02]"
                        : "bg-[#130326] border-[#A044FF]/25 hover:border-[#A044FF]/60"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3.5 rounded-xl bg-[#1e083c] border border-[#A044FF]/40">
                          {pillar.icon}
                        </div>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/30">
                          {pillar.badge}
                        </span>
                      </div>

                      <h4 className="font-extrabold text-white text-lg mb-2">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#A044FF]/25 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#E0B3FF]">
                        {pillar.metrics}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* FULL-WIDTH BOTTOM SECTION: OFFICIAL CERTIFICATIONS & DIPLOMAS VAULT */}
      <motion.div
        className="max-w-7xl mx-auto bg-gradient-to-br from-[#180630]/95 to-[#0e021e]/95 border border-[#A044FF]/50 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Top Seal Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-[#A044FF]/30 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-[#E0B3FF] text-base" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#E0B3FF]">
                Official & Verified Credentials
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Certifications & Diploma Showcase
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              Click any verified credential card to inspect official issuer verification and competencies.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {certCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCertCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCertCategory === cat
                    ? "bg-gradient-to-r from-[#6A3093] to-[#A044FF] text-white shadow-[0_0_15px_rgba(160,68,255,0.6)] border border-[#E0B3FF]/40"
                    : "bg-[#130326] text-purple-300 border border-[#A044FF]/30 hover:border-[#A044FF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FULL-WIDTH 3-COLUMN CERTIFICATE DIPLOMA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.title}
                layout
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#140328] to-[#0a0117] border border-[#A044FF]/40 hover:border-[#E0B3FF] p-6 shadow-lg hover:shadow-[0_0_35px_rgba(160,68,255,0.45)] transition-all duration-300 overflow-hidden"
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3.5 rounded-xl bg-[#1e083c] border border-[#A044FF]/45 group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e083c] border border-[#A044FF]/40 text-xs font-bold text-[#E0B3FF]">
                      <FaAward className="text-xs" />
                      <span>Verified • {cert.date}</span>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <h4
                    onClick={() => setSelectedCertModal(cert)}
                    className="text-lg font-extrabold text-white mt-1 group-hover:text-[#E0B3FF] transition-colors cursor-pointer leading-snug"
                  >
                    {cert.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-300 mt-2.5 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Earned Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {cert.skillsEarned.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-[#A044FF]/25">
                  <button
                    type="button"
                    onClick={() => setSelectedCertModal(cert)}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#1e083c] hover:bg-[#A044FF] text-[#E0B3FF] hover:text-white border border-[#A044FF]/40 text-xs font-bold transition-all"
                  >
                    <FaEye className="text-xs" /> Inspect ID
                  </button>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-[#6A3093] to-[#A044FF] hover:shadow-[0_0_15px_#A044FF] text-white text-xs font-bold transition-all"
                  >
                    <span>Official Document</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* OFFICIAL CREDENTIAL INSPECTION MODAL (PURE OLD PURPLE) */}
      <AnimatePresence>
        {selectedCertModal && (
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertModal(null)}
          >
            <motion.div
              className="relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(160,68,255,0.6)] border-2 border-[#A044FF] bg-gradient-to-br from-[#16032e] to-[#0d011c]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Diploma Top Border */}
              <div className="h-2.5 w-full bg-gradient-to-r from-[#6A3093] via-[#E0B3FF] to-[#A044FF]" />

              {/* Modal Header */}
              <div className="p-6 border-b border-[#A044FF]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#1e083c] border border-[#A044FF]/50">
                    {selectedCertModal.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <FaRegCheckCircle className="text-[#E0B3FF]" />
                      <span className="text-xs font-bold text-[#E0B3FF] uppercase tracking-wider">
                        Official Verified Credential
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                      {selectedCertModal.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCertModal(null)}
                  className="bg-[#1e083c] text-white p-2.5 rounded-full hover:bg-[#A044FF] transition-all"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#120324] border border-[#A044FF]/40">
                  <div>
                    <span className="text-[11px] text-gray-400 font-semibold uppercase">
                      Issuing Authority
                    </span>
                    <p className="text-sm font-bold text-white mt-0.5">
                      {selectedCertModal.issuer}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] text-gray-400 font-semibold uppercase">
                      Credential ID // Date
                    </span>
                    <p className="text-sm font-mono font-bold text-[#E0B3FF] mt-0.5">
                      {selectedCertModal.credentialID} ({selectedCertModal.date})
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#E0B3FF] uppercase tracking-wider mb-2">
                    Qualification Summary
                  </h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {selectedCertModal.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#E0B3FF] uppercase tracking-wider mb-2.5">
                    Verified Competencies & Skills Earned
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertModal.skillsEarned.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/45"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-[#A044FF]/30 flex justify-end gap-3">
                  <a
                    href={selectedCertModal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#6A3093] via-[#8E2DE2] to-[#A044FF] text-white font-bold text-sm shadow-[0_0_20px_rgba(160,68,255,0.6)]"
                  >
                    <span>Open Official Signed Certificate Document</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
