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
  FaCrown,
  FaPalette,
  FaMobileAlt,
  FaRocket,
  FaArrowRight,
  FaStar,
  FaMedal,
} from "react-icons/fa";
import { SiCoursera, SiReact, SiPython, SiJavascript, SiTailwindcss, SiFigma } from "react-icons/si";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function About() {
  const [activeCertCategory, setActiveCertCategory] = useState("All");
  const [selectedCertModal, setSelectedCertModal] = useState(null);
  const [activePillar, setActivePillar] = useState(0);
  const [copiedLabel, setCopiedLabel] = useState(null);
  const [hoveredCert, setHoveredCert] = useState(null);

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

  const frontendPillars = [
    {
      id: 0,
      title: "React & Modern Frontend",
      icon: <SiReact className="text-2xl text-[#61DAFB]" />,
      badge: "Component Architecture",
      desc: "Building scalable, performant single-page applications with React 18, hooks, and modern state management patterns.",
      metrics: "SPA • Reusable Components • Hooks",
    },
    {
      id: 1,
      title: "UI/UX & Responsive Design",
      icon: <FaPalette className="text-2xl text-[#E0B3FF]" />,
      badge: "Design Systems",
      desc: "Creating pixel-perfect, accessible interfaces with Tailwind CSS, Framer Motion animations, and responsive layouts.",
      metrics: "Mobile-First • Accessibility • Animations",
    },
    {
      id: 2,
      title: "Performance Optimization",
      icon: <FaRocket className="text-2xl text-[#A044FF]" />,
      badge: "Web Vitals",
      desc: "Optimizing load times, bundle sizes, and rendering performance with lazy loading, code splitting, and memoization.",
      metrics: "Lighthouse 90+ • Code Splitting • Caching",
    },
    {
      id: 3,
      title: "Cross-Platform Development",
      icon: <FaMobileAlt className="text-2xl text-[#E0B3FF]" />,
      badge: "Mobile & Web",
      desc: "Building responsive web applications and cross-platform mobile experiences using React Native and PWA technologies.",
      metrics: "PWA • React Native • Progressive Web",
    },
  ];

  const certCategories = ["All", "Frontend Development", "Design & Tools", "Engineering"];

  const certificates = [
    {
      title: "React & React Native Development",
      issuer: "Information Technology Institute (ITI)",
      date: "Summer 2024",
      category: "Frontend Development",
      credentialID: "ITI-2024-FE-SH",
      description:
        "Comprehensive software engineering internship building production-grade dynamic web single-page apps and cross-platform mobile user interfaces.",
      skillsEarned: ["React 18", "React Native", "State Management", "RESTful APIs", "Component Architecture"],
      icon: <SiReact className="text-2xl text-[#61DAFB]" />,
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/Ea0KEazQtCBAhj9KLt3BgPQBd2KvFEvKLqAMLn8cvwNuxQ?e=4A9C3I",
      level: "Advanced",
      color: "#61DAFB",
    },
    {
      title: "Modern JavaScript & ES6+",
      issuer: "Coursera",
      date: "2024",
      category: "Frontend Development",
      credentialID: "COURSERA-JS-SH",
      description:
        "Mastered modern JavaScript features including ES6+, asynchronous programming, and functional programming patterns.",
      skillsEarned: ["ES6+", "Async/Await", "Functional Programming", "DOM Manipulation"],
      icon: <SiJavascript className="text-2xl text-[#F7DF1E]" />,
      link: "https://coursera.org/verify/specialization/JS-SH",
      level: "Intermediate",
      color: "#F7DF1E",
    },
    {
      title: "UI/UX Design with Figma",
      issuer: "Coursera",
      date: "2024",
      category: "Design & Tools",
      credentialID: "COURSERA-FIGMA-SH",
      description:
        "Learned modern UI/UX design principles, prototyping, and design systems using Figma.",
      skillsEarned: ["Figma", "Prototyping", "Design Systems", "User Research"],
      icon: <SiFigma className="text-2xl text-[#A044FF]" />,
      link: "https://coursera.org/verify/specialization/FIGMA-SH",
      level: "Intermediate",
      color: "#A044FF",
    },
    {
      title: "Tailwind CSS Mastery",
      issuer: "Coursera",
      date: "2024",
      category: "Frontend Development",
      credentialID: "COURSERA-TW-SH",
      description:
        "Built responsive, utility-first designs with Tailwind CSS, including custom configurations and dark mode.",
      skillsEarned: ["Tailwind CSS", "Responsive Design", "Dark Mode", "Custom Theming"],
      icon: <SiTailwindcss className="text-2xl text-[#06B6D4]" />,
      link: "https://coursera.org/verify/specialization/TW-SH",
      level: "Advanced",
      color: "#06B6D4",
    },
    {
      title: "Frontend Development Foundations",
      issuer: "Coursera",
      date: "2024",
      category: "Engineering",
      credentialID: "COURSERA-FE-FOUND-SH",
      description:
        "Comprehensive frontend engineering foundations covering HTML5, CSS3, responsive design, and modern web standards.",
      skillsEarned: ["HTML5", "CSS3", "Responsive Design", "Web Standards"],
      icon: <FaLaptopCode className="text-2xl text-[#E0B3FF]" />,
      link: "https://coursera.org/verify/specialization/FE-FOUND-SH",
      level: "Beginner",
      color: "#E0B3FF",
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
          Frontend Engineer Profile
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-[68px] font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0B3FF] to-[#A044FF] tracking-wide">
          About Me
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base mt-3">
          Crafting beautiful, performant user experiences with modern frontend technologies.
        </p>
      </motion.div>

      {/* TOP ROW: BALANCED LEFT COLUMN (5 COLS) + RIGHT COLUMN (7 COLS) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* LEFT COLUMN (5 COLS) */}
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
                    Frontend Engineer
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/40">
                  React Specialist
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
                  Frontend Engineer
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Cairo, Egypt
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
                <FaGraduationCap className="text-base" /> Frontend Engineering
              </div>
              <p className="text-[11px] text-gray-300 mt-1">
                React • UI/UX • Performance • Accessibility
              </p>
            </div>
          </motion.div>

          {/* Left-Side Fast Facts */}
          <div className="bg-gradient-to-br from-[#180630]/95 to-[#0e021e]/95 border border-[#A044FF]/45 rounded-3xl p-6 shadow-xl space-y-4">
            <h4 className="text-sm font-bold text-[#E0B3FF] uppercase tracking-wider flex items-center gap-2">
              <FaCompass /> Frontend Specialization
            </h4>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#130326] border border-[#A044FF]/30">
                <span className="text-gray-400 block mb-0.5">Core Framework</span>
                <span className="font-bold text-white">React 18</span>
              </div>
              <div className="p-3 rounded-xl bg-[#130326] border border-[#A044FF]/30">
                <span className="text-gray-400 block mb-0.5">Styling</span>
                <span className="font-bold text-[#E0B3FF]">Tailwind CSS</span>
              </div>
              <div className="p-3 rounded-xl bg-[#130326] border border-[#A044FF]/30">
                <span className="text-gray-400 block mb-0.5">Animations</span>
                <span className="font-bold text-white">Framer Motion</span>
              </div>
              <div className="p-3 rounded-xl bg-[#130326] border border-[#A044FF]/30">
                <span className="text-gray-400 block mb-0.5">State Management</span>
                <span className="font-bold text-[#E0B3FF]">Redux Toolkit</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN (7 COLS) */}
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
                    Frontend Specializations
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
                    Technical Expertise
                  </h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/30">
                  Click to Highlight
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                My frontend engineering approach combines modern React development with responsive design, performance optimization, and creating exceptional user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {frontendPillars.map((pillar) => {
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

      {/* MODERN CERTIFICATIONS SECTION */}
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Section Header with Stats */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-r from-[#6A3093] to-[#A044FF] shadow-[0_0_20px_rgba(160,68,255,0.4)]">
                <FaCertificate className="text-white text-xl" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E0B3FF]">
                Professional Credentials
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Certifications &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0B3FF] to-[#A044FF]">
                Verified Skills
              </span>
            </h3>
            <p className="text-gray-400 text-sm mt-2 max-w-xl">
              {certificates.length} professional certifications across frontend development, design, and engineering.
            </p>
          </div>

          {/* Category Filters - Modern Pill Style */}
          <div className="flex flex-wrap gap-2">
            {certCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCertCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeCertCategory === cat
                    ? "bg-gradient-to-r from-[#6A3093] to-[#A044FF] text-white shadow-[0_0_25px_rgba(160,68,255,0.5)] scale-105"
                    : "bg-[#130326] text-purple-300 border border-[#A044FF]/30 hover:border-[#A044FF] hover:bg-[#1e083c]"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-[10px] opacity-60">
                    ({certificates.filter(c => c.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Grid - Modern Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredCert(cert.title)}
                onMouseLeave={() => setHoveredCert(null)}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-[#140328] to-[#0a0117] rounded-2xl border border-[#A044FF]/30 overflow-hidden transition-all duration-500 hover:border-[#E0B3FF] hover:shadow-[0_0_40px_rgba(160,68,255,0.3)] hover:-translate-y-2">
                  
                  {/* Animated Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A044FF]/5 via-transparent to-[#6A3093]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Top Glow Line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E0B3FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-6 flex flex-col h-full">
                    {/* Header with Icon and Level Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#1e083c] border border-[#A044FF]/30 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(160,68,255,0.1)]">
                        {cert.icon}
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className={`text-[10px] font-bold px-3 py-1 rounded-full border
                          ${cert.level === "Advanced" ? "bg-[#6A3093]/30 text-[#E0B3FF] border-[#6A3093]" :
                            cert.level === "Intermediate" ? "bg-[#A044FF]/20 text-[#A044FF] border-[#A044FF]/50" :
                            "bg-[#1e083c] text-purple-300 border-[#A044FF]/30"}`}
                        >
                          {cert.level}
                        </span>
                        <span className="text-[10px] text-gray-500 font-mono">
                          {cert.date}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <span className="text-[11px] font-bold text-purple-300 uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                      <h4 
                        onClick={() => setSelectedCertModal(cert)}
                        className="text-lg font-extrabold text-white mt-1 group-hover:text-[#E0B3FF] transition-colors cursor-pointer"
                      >
                        {cert.title}
                      </h4>
                      
                      <p className="text-xs text-gray-400 mt-2.5 leading-relaxed line-clamp-2">
                        {cert.description}
                      </p>

                      {/* Skills Pills */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {cert.skillsEarned.slice(0, 3).map((skill, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/20"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skillsEarned.length > 3 && (
                          <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-[#1e083c] text-gray-400 border border-[#A044FF]/20">
                            +{cert.skillsEarned.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer Actions - Modern Minimal */}
                    <div className="mt-6 pt-4 border-t border-[#A044FF]/20 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedCertModal(cert)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1e083c] hover:bg-[#A044FF] text-[#E0B3FF] hover:text-white border border-[#A044FF]/30 text-xs font-semibold transition-all duration-300 group/btn"
                      >
                        <FaEye className="text-xs" />
                        <span>Details</span>
                      </button>
                      
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#6A3093] to-[#A044FF] text-white text-xs font-semibold hover:shadow-[0_0_20px_rgba(160,68,255,0.5)] transition-all duration-300"
                      >
                        <span>Verify</span>
                        <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    {/* Decorative Corner Accent */}
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-[#A044FF]/5 blur-2xl group-hover:bg-[#A044FF]/20 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredCerts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400">No certifications found in this category.</p>
          </motion.div>
        )}
      </motion.div>

      {/* MODERN CREDENTIAL INSPECTION MODAL */}
      <AnimatePresence>
        {selectedCertModal && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertModal(null)}
          >
            <motion.div
              className="relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(160,68,255,0.4)] border border-[#A044FF]/40 bg-gradient-to-br from-[#16032e] to-[#0d011c]"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Premium Decorative Top Border */}
              <div className="h-1 w-full bg-gradient-to-r from-[#6A3093] via-[#E0B3FF] to-[#A044FF]" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A044FF]/5 via-transparent to-[#6A3093]/5 pointer-events-none" />

              {/* Modal Header */}
              <div className="relative p-6 border-b border-[#A044FF]/20 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#1e083c] border border-[#A044FF]/30 shadow-[0_0_20px_rgba(160,68,255,0.2)]">
                    {selectedCertModal.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <FaRegCheckCircle className="text-[#E0B3FF] text-sm" />
                      <span className="text-xs font-bold text-[#E0B3FF] uppercase tracking-wider">
                        Verified Credential
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                      {selectedCertModal.title}
                    </h3>
                    <span className="text-sm text-purple-300 font-semibold">
                      {selectedCertModal.issuer}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCertModal(null)}
                  className="p-2 rounded-full bg-[#1e083c] hover:bg-[#A044FF] text-white transition-all duration-300 flex-shrink-0"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="relative p-6 sm:p-8 space-y-6">
                {/* Credential ID & Date */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#120324] border border-[#A044FF]/30">
                  <div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                      Credential ID
                    </span>
                    <p className="text-sm font-mono font-bold text-[#E0B3FF] mt-1">
                      {selectedCertModal.credentialID}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                      Date Earned
                    </span>
                    <p className="text-sm font-bold text-white mt-1">
                      {selectedCertModal.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold text-[#E0B3FF] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <FaStar className="text-[#E0B3FF] text-xs" />
                    Description
                  </h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {selectedCertModal.description}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-xs font-bold text-[#E0B3FF] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FaMedal className="text-[#E0B3FF] text-xs" />
                    Skills & Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertModal.skillsEarned.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/30 shadow-[0_0_10px_rgba(160,68,255,0.1)]"
                      >
                        ✓ {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-[#A044FF]/20 flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedCertModal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#6A3093] via-[#8E2DE2] to-[#A044FF] text-white font-bold text-sm shadow-[0_0_30px_rgba(160,68,255,0.3)] hover:shadow-[0_0_50px_rgba(160,68,255,0.5)] transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>View Verified Document</span>
                  </a>
                  <button
                    onClick={() => setSelectedCertModal(null)}
                    className="px-6 py-3.5 rounded-xl bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/30 text-sm font-semibold hover:bg-[#A044FF] hover:text-white transition-all duration-300"
                  >
                    Close
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