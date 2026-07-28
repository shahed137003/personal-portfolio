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
import { useTheme } from "../../context/ThemeContext";

export default function About() {
  const [activeCertCategory, setActiveCertCategory] = useState("All");
  const [selectedCertModal, setSelectedCertModal] = useState(null);
  const [activePillar, setActivePillar] = useState(0);
  const [copiedLabel, setCopiedLabel] = useState(null);
  const [hoveredCert, setHoveredCert] = useState(null);
  const { isDarkMode } = useTheme();

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
      theme: isDarkMode ? "dark" : "light",
      style: {
        background: isDarkMode ? "#180510" : "#ffe4e6",
        border: isDarkMode ? "1px solid #FF007A" : "1px solid #be123c",
        color: isDarkMode ? "#FDA4AF" : "#4c0519",
        borderRadius: "12px",
      },
    });
    setTimeout(() => setCopiedLabel(null), 2500);
  };

  const frontendPillars = [
    {
      id: 0,
      title: "React & Modern Frontend",
      icon: <SiReact className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#be123c]"}`} />,
      badge: "Component Architecture",
      desc: "Building scalable, performant single-page applications with React 18, hooks, and modern state management patterns.",
      metrics: "SPA • Reusable Components • Hooks",
    },
    {
      id: 1,
      title: "UI/UX & Responsive Design",
      icon: <FaPalette className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#be123c]"}`} />,
      badge: "Design Systems",
      desc: "Creating pixel-perfect, accessible interfaces with Tailwind CSS, Framer Motion animations, and responsive layouts.",
      metrics: "Mobile-First • Accessibility • Animations",
    },
    {
      id: 2,
      title: "Performance Optimization",
      icon: <FaRocket className={`text-2xl ${isDarkMode ? "text-[#FF007A]" : "text-[#BE123C]"}`} />,
      badge: "Web Vitals",
      desc: "Optimizing load times, bundle sizes, and rendering performance with lazy loading, code splitting, and memoization.",
      metrics: "Lighthouse 90+ • Code Splitting • Caching",
    },
    {
      id: 3,
      title: "Cross-Platform Development",
      icon: <FaMobileAlt className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />,
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
      icon: <SiReact className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />,
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/Ea0KEazQtCBAhj9KLt3BgPQBd2KvFEvKLqAMLn8cvwNuxQ?e=4A9C3I",
      level: "Advanced",
      color: "#FF007A",
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
      icon: <SiJavascript className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />,
      link: "https://coursera.org/verify/specialization/JS-SH",
      level: "Intermediate",
      color: "#E01E5A",
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
      icon: <SiFigma className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />,
      link: "https://coursera.org/verify/specialization/FIGMA-SH",
      level: "Intermediate",
      color: "#FF007A",
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
      icon: <SiTailwindcss className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />,
      link: "https://coursera.org/verify/specialization/TW-SH",
      level: "Advanced",
      color: "#E01E5A",
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
      icon: <FaLaptopCode className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />,
      link: "https://coursera.org/verify/specialization/FE-FOUND-SH",
      level: "Beginner",
      color: "#FDA4AF",
    },
  ];

  const filteredCerts =
    activeCertCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCertCategory);

  return (
    <section className={`relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16 transition-colors duration-500 ${
      isDarkMode ? "text-white" : "text-[#2e0854]"
    }`} id="aboutSection">
      <ToastContainer />

      {/* Rose Carmine Ambient Glows */}
      <div className={`absolute top-1/4 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
        isDarkMode ? "bg-[#FF007A]/25" : "bg-[#fda4af]/20"
      }`} />
      <div className={`absolute bottom-1/3 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDarkMode ? "bg-[#E01E5A]/20" : "bg-[#fecdd3]/15"
      }`} />

      {/* Section Title */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 shadow-sm ${
          isDarkMode
            ? "bg-[#10030a] border border-[#FF007A]/40 text-[#FDA4AF] shadow-[0_0_15px_rgba(255,0,122,0.3)]"
            : "bg-[#ffe4e6] border border-[#be123c]/30 text-[#BE123C]"
        }`}>
          Frontend & AI Engineer Profile
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-[68px] font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-[#FF007A] to-[#E01E5A] dark:from-white dark:via-[#FDA4AF] dark:to-[#FF007A] tracking-wide">
          About Me
        </h1>
        <p className={`max-w-2xl mx-auto text-sm sm:text-base mt-3 ${
          isDarkMode ? "text-gray-300" : "text-[#881337]"
        }`}>
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
            className={`w-full rounded-3xl p-7 relative overflow-hidden flex-1 flex flex-col justify-between transition-all duration-500 ${
              isDarkMode
                ? "bg-gradient-to-br from-[#180510]/95 via-[#0b0207]/95 to-[#180510]/95 border-2 border-[#FF007A]/60 shadow-[0_0_45px_rgba(255,0,122,0.35)] amethyst-card-floating"
                : "bg-gradient-to-br from-[#ffffff] via-[#fff1f2] to-[#ffe4e6] border-2 border-[#be123c]/40 shadow-[0_10px_35px_rgba(225,29,72,0.15)]"
            }`}
          >
            <div>
              {/* Top Status Header */}
              <div className={`flex items-center justify-between border-b pb-4 mb-6 ${
                isDarkMode ? "border-[#FF007A]/30" : "border-[#be123c]/25"
              }`}>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-purple-radar absolute inline-flex h-full w-full rounded-full bg-[#FDA4AF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF007A]"></span>
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    Frontend Engineer
                  </span>
                </div>
                <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${
                  isDarkMode
                    ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/40"
                    : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
                }`}>
                  React Specialist
                </span>
              </div>

              {/* Profile Avatar & Title */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-[#FF007A] via-[#FDA4AF] to-[#E01E5A] shadow-[0_0_25px_rgba(255,0,122,0.5)] mb-4">
                  <img
                    src={avatar}
                    alt="Shahd Mohamed"
                    className="w-full h-full object-cover rounded-full bg-[#0b0207]"
                  />
                </div>

                <h3 className={`text-2xl sm:text-3xl font-extrabold ${
                  isDarkMode ? "text-white" : "text-[#4c0519]"
                }`}>
                  Shahd Mohamed
                </h3>
                <p className={`text-sm font-semibold mt-1 ${
                  isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                }`}>
                  Frontend Engineer
                </p>
                <p className={`text-xs mt-1 ${
                  isDarkMode ? "text-gray-400" : "text-[#881337]"
                }`}>
                  Cairo, Egypt
                </p>
              </div>

              {/* Interactive Quick-Copy Stack */}
              <div className="space-y-3 mb-6">
                <div
                  onClick={() => copyToClipboard("Shahd137003@gmail.com", "Email")}
                  className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all group ${
                    isDarkMode
                      ? "bg-[#10030a] border-[#FF007A]/35 hover:border-[#FDA4AF]"
                      : "bg-[#fff1f2] border-[#be123c]/30 hover:border-[#e11d48]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MdEmail className={`text-xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />
                    <div>
                      <div className={`text-[11px] uppercase font-semibold ${
                        isDarkMode ? "text-gray-400" : "text-[#881337]"
                      }`}>
                        Email Address
                      </div>
                      <div className={`text-xs sm:text-sm font-bold truncate group-hover:text-[#FF007A] transition-colors ${
                        isDarkMode ? "text-white" : "text-[#4c0519]"
                      }`}>
                        Shahd137003@gmail.com
                      </div>
                    </div>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-lg font-semibold ${
                    isDarkMode
                      ? "bg-[#10030a] text-[#FDA4AF]"
                      : "bg-[#fecdd3] text-[#BE123C]"
                  }`}>
                    {copiedLabel === "Email" ? "Copied!" : "Copy"}
                  </span>
                </div>

                <div
                  onClick={() => copyToClipboard("+20 1092968238", "Phone Number")}
                  className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all group ${
                    isDarkMode
                      ? "bg-[#10030a] border-[#FF007A]/35 hover:border-[#FDA4AF]"
                      : "bg-[#fff1f2] border-[#be123c]/30 hover:border-[#e11d48]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MdPhone className={`text-xl ${isDarkMode ? "text-[#FF007A]" : "text-[#BE123C]"}`} />
                    <div>
                      <div className={`text-[11px] uppercase font-semibold ${
                        isDarkMode ? "text-gray-400" : "text-[#881337]"
                      }`}>
                        Phone Number
                      </div>
                      <div className={`text-xs sm:text-sm font-bold group-hover:text-[#FF007A] transition-colors ${
                        isDarkMode ? "text-white" : "text-[#4c0519]"
                      }`}>
                        +20 1092968238
                      </div>
                    </div>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-lg font-semibold ${
                    isDarkMode
                      ? "bg-[#10030a] text-[#FDA4AF]"
                      : "bg-[#fecdd3] text-[#BE123C]"
                  }`}>
                    {copiedLabel === "Phone Number" ? "Copied!" : "Copy"}
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Standing Footer inside card */}
            <div className={`p-4 rounded-2xl border text-center ${
              isDarkMode
                ? "bg-[#10030a] border-[#FF007A]/40"
                : "bg-[#ffe4e6] border-[#be123c]/30"
            }`}>
              <div className={`flex items-center justify-center gap-2 text-xs font-bold ${
                isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
              }`}>
                <FaGraduationCap className="text-base" /> Frontend Engineering
              </div>
              <p className={`text-[11px] mt-1 ${
                isDarkMode ? "text-gray-300" : "text-[#881337]"
              }`}>
                React • UI/UX • Performance • Accessibility
              </p>
            </div>
          </motion.div>

          {/* Left-Side Fast Facts */}
          <div className={`rounded-3xl p-6 shadow-xl space-y-4 border ${
            isDarkMode
              ? "bg-gradient-to-br from-[#180510]/95 to-[#0b0207]/95 border-[#FF007A]/45"
              : "bg-gradient-to-br from-[#ffffff] to-[#fff1f2] border-[#be123c]/30 shadow-[0_4px_20px_rgba(225,29,72,0.08)]"
          }`}>
            <h4 className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${
              isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
            }`}>
              <FaCompass /> Frontend Specialization
            </h4>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className={`p-3 rounded-xl border ${
                isDarkMode ? "bg-[#10030a] border-[#FF007A]/30" : "bg-[#fff1f2] border-[#be123c]/25"
              }`}>
                <span className={`block mb-0.5 ${isDarkMode ? "text-gray-400" : "text-[#881337]"}`}>Core Framework</span>
                <span className={`font-bold ${isDarkMode ? "text-white" : "text-[#4c0519]"}`}>React 18</span>
              </div>
              <div className={`p-3 rounded-xl border ${
                isDarkMode ? "bg-[#10030a] border-[#FF007A]/30" : "bg-[#fff1f2] border-[#be123c]/25"
              }`}>
                <span className={`block mb-0.5 ${isDarkMode ? "text-gray-400" : "text-[#881337]"}`}>Styling</span>
                <span className={`font-bold ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`}>Tailwind CSS</span>
              </div>
              <div className={`p-3 rounded-xl border ${
                isDarkMode ? "bg-[#10030a] border-[#FF007A]/30" : "bg-[#fff1f2] border-[#be123c]/25"
              }`}>
                <span className={`block mb-0.5 ${isDarkMode ? "text-gray-400" : "text-[#881337]"}`}>Animations</span>
                <span className={`font-bold ${isDarkMode ? "text-white" : "text-[#4c0519]"}`}>Framer Motion</span>
              </div>
              <div className={`p-3 rounded-xl border ${
                isDarkMode ? "bg-[#10030a] border-[#FF007A]/30" : "bg-[#fff1f2] border-[#be123c]/25"
              }`}>
                <span className={`block mb-0.5 ${isDarkMode ? "text-gray-400" : "text-[#881337]"}`}>State Management</span>
                <span className={`font-bold ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`}>Redux Toolkit</span>
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
          <div className={`rounded-3xl p-6 sm:p-8 shadow-2xl h-full flex flex-col justify-between border ${
            isDarkMode
              ? "bg-gradient-to-br from-[#180510]/95 to-[#0b0207]/95 border-[#FF007A]/45"
              : "bg-gradient-to-br from-[#ffffff] to-[#fff1f2] border-[#be123c]/35 shadow-[0_10px_30px_rgba(225,29,72,0.1)]"
          }`}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    Frontend Specializations
                  </span>
                  <h3 className={`text-xl sm:text-3xl font-extrabold mt-1 ${
                    isDarkMode ? "text-white" : "text-[#4c0519]"
                  }`}>
                    Technical Expertise
                  </h3>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                  isDarkMode
                    ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/30"
                    : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
                }`}>
                  Click to Highlight
                </span>
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${
                isDarkMode ? "text-gray-300" : "text-[#881337]"
              }`}>
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
                        ? isDarkMode
                          ? "bg-gradient-to-br from-[#280816] to-[#10030a] border-[#FF007A] shadow-[0_0_28px_rgba(255,0,122,0.5)] scale-[1.02]"
                          : "bg-gradient-to-br from-[#ffe4e6] to-[#fecdd3] border-[#be123c] shadow-[0_8px_25px_rgba(225,29,72,0.2)] scale-[1.02]"
                        : isDarkMode
                        ? "bg-[#10030a] border-[#FF007A]/25 hover:border-[#FF007A]/60"
                        : "bg-[#fff1f2] border-[#be123c]/25 hover:border-[#be123c]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3.5 rounded-xl border ${
                          isDarkMode ? "bg-[#10030a] border-[#FF007A]/40" : "bg-[#fecdd3] border-[#be123c]/35"
                        }`}>
                          {pillar.icon}
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                          isDarkMode ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/30" : "bg-[#fecdd3] text-[#BE123C] border-[#be123c]/30"
                        }`}>
                          {pillar.badge}
                        </span>
                      </div>

                      <h4 className={`font-extrabold text-lg mb-2 ${
                        isDarkMode ? "text-white" : "text-[#4c0519]"
                      }`}>
                        {pillar.title}
                      </h4>
                      <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                        isDarkMode ? "text-gray-300" : "text-[#881337]"
                      }`}>
                        {pillar.desc}
                      </p>
                    </div>

                    <div className={`pt-3 border-t flex items-center justify-between ${
                      isDarkMode ? "border-[#FF007A]/25" : "border-[#be123c]/20"
                    }`}>
                      <span className={`text-xs font-mono font-bold ${
                        isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                      }`}>
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
              <div className="p-2 rounded-xl bg-gradient-to-r from-[#E01E5A] to-[#FF007A] shadow-[0_0_20px_rgba(255,0,122,0.4)]">
                <FaCertificate className="text-white text-xl" />
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider ${
                isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
              }`}>
                Professional Credentials
              </span>
            </div>
            <h3 className={`text-3xl sm:text-4xl font-extrabold ${
              isDarkMode ? "text-white" : "text-[#4c0519]"
            }`}>
              Certifications &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007A] to-[#E01E5A] dark:from-[#FDA4AF] dark:to-[#FF007A]">
                Verified Skills
              </span>
            </h3>
            <p className={`text-sm mt-2 max-w-xl ${
              isDarkMode ? "text-gray-400" : "text-[#881337]"
            }`}>
              {certificates.length} professional certifications across frontend development, design, and engineering.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {certCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCertCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeCertCategory === cat
                    ? "bg-gradient-to-r from-[#E01E5A] to-[#FF007A] text-white shadow-[0_0_25px_rgba(255,0,122,0.5)] scale-105"
                    : isDarkMode
                    ? "bg-[#10030a] text-[#FDA4AF] border border-[#FF007A]/30 hover:border-[#FF007A] hover:bg-[#180510]"
                    : "bg-[#ffe4e6] text-[#BE123C] border border-[#be123c]/30 hover:border-[#be123c] hover:bg-[#fecdd3]"
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

        {/* Certificate Grid */}
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
                <div className={`relative h-full rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-[#180510] to-[#0b0207] border-[#FF007A]/30 hover:border-[#FDA4AF] hover:shadow-[0_0_40px_rgba(255,0,122,0.3)]"
                    : "bg-gradient-to-br from-[#ffffff] to-[#fff1f2] border-[#be123c]/30 hover:border-[#e11d48] hover:shadow-[0_10px_35px_rgba(225,29,72,0.18)]"
                }`}>
                  
                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl border ${
                          isDarkMode ? "bg-[#10030a] border-[#FF007A]/40" : "bg-[#ffe4e6] border-[#be123c]/30"
                        }`}>
                          {cert.icon}
                        </div>
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                          isDarkMode ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/30" : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
                        }`}>
                          {cert.date}
                        </span>
                      </div>

                      <span className={`text-[11px] font-bold uppercase tracking-wider ${
                        isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                      }`}>
                        {cert.issuer}
                      </span>
                      <h4 className={`text-lg font-extrabold mt-1 group-hover:text-[#FF007A] transition-colors ${
                        isDarkMode ? "text-white" : "text-[#4c0519]"
                      }`}>
                        {cert.title}
                      </h4>
                      <p className={`text-xs mt-2 leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-[#881337]"
                      }`}>
                        {cert.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {cert.skillsEarned.map((skill, i) => (
                          <span
                            key={i}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border ${
                              isDarkMode
                                ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/30"
                                : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`mt-6 pt-4 border-t flex justify-between items-center ${
                      isDarkMode ? "border-[#FF007A]/25" : "border-[#be123c]/20"
                    }`}>
                      <span className={`text-xs font-mono font-bold ${
                        isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                      }`}>
                        ID: {cert.credentialID}
                      </span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-bold text-white bg-gradient-to-r from-[#E01E5A] to-[#FF007A] px-3 py-1.5 rounded-lg shadow-sm hover:shadow-md transition-all"
                      >
                        Verify <FaExternalLinkAlt className="text-[9px]" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}