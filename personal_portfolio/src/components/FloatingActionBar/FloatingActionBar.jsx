import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaCopy,
  FaCheck,
  FaBolt,
  FaTimes,
  FaLayerGroup,
  FaBriefcase,
  FaLaptopCode,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function FloatingActionBar() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("Shahd137003@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickNavLinks = [
    { label: "About Me", id: "aboutSection", icon: <FaLayerGroup /> },
    { label: "Experience", id: "experienceSection", icon: <FaBriefcase /> },
    { label: "Skills Arsenal", id: "skillSection", icon: <FaBolt /> },
    { label: "Projects & AI", id: "projectSection", icon: <FaLaptopCode /> },
    { label: "Get In Touch", id: "contactSection", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* Interactive Quick Hub Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className={`fixed bottom-24 right-6 z-50 w-64 p-5 rounded-3xl backdrop-blur-2xl border shadow-2xl ${
              isDarkMode
                ? "bg-[#180510]/95 border-[#FF007A]/60 shadow-[0_0_35px_rgba(255,0,122,0.45)] text-white"
                : "bg-[#fff1f2]/95 border-[#be123c]/40 shadow-[0_0_30px_rgba(225,29,72,0.25)] text-[#4c0519]"
            }`}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#FF007A]/30">
              <span className={`text-xs font-bold uppercase tracking-wider ${
                isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
              }`}>
                Quick Navigation Hub
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-[#FF007A] p-1"
              >
                <FaTimes />
              </button>
            </div>

            <div className="space-y-1.5 mb-3">
              {quickNavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-xs transition-all text-left ${
                    isDarkMode
                      ? "bg-[#10030a]/80 hover:bg-[#FF007A]/30 text-white"
                      : "bg-[#ffe4e6] hover:bg-[#fecdd3] text-[#4c0519]"
                  }`}
                >
                  <span className={isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}>{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>

            {/* Quick Hub Theme Switcher */}
            <button
              onClick={toggleTheme}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                isDarkMode
                  ? "bg-[#10030a] border-[#FF007A]/40 text-[#FDA4AF]"
                  : "bg-[#fecdd3] border-[#be123c]/30 text-[#BE123C]"
              }`}
            >
              <span>{isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
              {isDarkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-[#BE123C]" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Bar */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`flex items-center gap-1.5 p-2 rounded-full backdrop-blur-xl border shadow-xl ${
            isDarkMode
              ? "bg-[#180510]/90 border-[#FF007A]/50 shadow-[0_0_25px_rgba(255,0,122,0.35)]"
              : "bg-[#fff1f2]/95 border-[#be123c]/30 shadow-[0_0_20px_rgba(225,29,72,0.2)]"
          }`}
        >
          {/* Quick Hub Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-3 rounded-full font-bold text-xs transition-all duration-300 flex items-center gap-2 ${
              isMenuOpen
                ? "bg-[#FF007A] text-[#180510]"
                : isDarkMode
                ? "bg-[#10030a] hover:bg-[#FF007A]/30 text-[#FDA4AF]"
                : "bg-[#ffe4e6] hover:bg-[#fecdd3] text-[#BE123C]"
            }`}
          >
            <FaBolt className="text-sm" />
            <span className="hidden sm:inline">Quick Hub</span>
          </button>

          {/* Direct Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className={`p-3 rounded-full transition-all duration-300 ${
              isDarkMode
                ? "hover:bg-[#FF007A]/20 text-[#FDA4AF]"
                : "hover:bg-[#be123c]/15 text-[#BE123C]"
            }`}
          >
            {isDarkMode ? <FaSun className="text-yellow-300 text-sm" /> : <FaMoon className="text-[#BE123C] text-sm" />}
          </button>

          {/* Email Copy Button */}
          <button
            onClick={copyEmail}
            className={`p-3 rounded-full transition-all duration-300 relative ${
              copied
                ? "bg-emerald-500 text-white"
                : isDarkMode
                ? "hover:bg-[#FF007A]/20 text-[#FDA4AF]"
                : "hover:bg-[#be123c]/15 text-[#BE123C]"
            }`}
            title="Copy Email Address"
          >
            {copied ? <FaCheck className="text-sm" /> : <FaCopy className="text-sm" />}
          </button>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/shahd-mohamed-883a4b248/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 ${
              isDarkMode ? "hover:bg-[#FF007A]/20 text-[#FDA4AF]" : "hover:bg-[#be123c]/15 text-[#BE123C]"
            }`}
            title="LinkedIn Profile"
          >
            <FaLinkedin className="text-sm" />
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/shahed137003"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 ${
              isDarkMode ? "hover:bg-[#FF007A]/20 text-[#FDA4AF]" : "hover:bg-[#be123c]/15 text-[#BE123C]"
            }`}
            title="GitHub Profile"
          >
            <FaGithub className="text-sm" />
          </a>
        </motion.div>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showTopBtn && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-gradient-to-r from-[#E01E5A] via-[#F43F5E] to-[#FF007A] text-[#180510] shadow-[0_0_20px_rgba(255,0,122,0.7)] hover:scale-110 transition-transform duration-300"
              title="Scroll to top"
            >
              <FaArrowUp className="text-sm font-extrabold" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
