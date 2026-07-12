import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaCopy,
  FaCheck,
  FaBolt,
  FaFileDownload,
  FaTimes,
  FaLayerGroup,
  FaBriefcase,
  FaLaptopCode,
  FaEnvelope,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function FloatingActionBar() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            className="fixed bottom-24 right-6 z-50 w-64 p-5 rounded-3xl bg-[#0f021e]/95 backdrop-blur-2xl border border-[#A044FF]/60 shadow-[0_0_35px_rgba(160,68,255,0.45)]"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#A044FF]/30">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E0B3FF]">
                Quick Navigation Hub
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-white p-1"
              >
                <FaTimes />
              </button>
            </div>

            <div className="space-y-1.5">
              {quickNavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#190632]/80 hover:bg-[#A044FF]/30 text-white font-semibold text-xs transition-all text-left"
                >
                  <span className="text-[#E0B3FF]">{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-[#A044FF]/30">
              <a
                href="#contactSection"
                onClick={() => scrollToSection("contactSection")}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#6A3093] via-[#8E2DE2] to-[#A044FF] text-white font-bold text-xs shadow-[0_0_15px_rgba(160,68,255,0.5)] hover:shadow-[0_0_25px_rgba(224,179,255,0.8)] transition-all"
              >
                <FaEnvelope /> Hire Shahd Mohamed
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 p-2 rounded-full bg-[#0e021e]/95 backdrop-blur-xl border border-[#A044FF]/50 shadow-[0_8px_32px_rgba(160,68,255,0.45)]"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {/* Quick Hub Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full font-bold text-xs transition-all ${
            isMenuOpen
              ? "bg-[#A044FF] text-white shadow-[0_0_15px_#A044FF]"
              : "bg-[#180630] text-[#E0B3FF] hover:bg-[#A044FF]/30 border border-[#A044FF]/40"
          }`}
          title="Quick Hub"
        >
          <FaBolt className="text-sm" />
          <span className="hidden sm:inline">Hub</span>
        </button>

        {/* Pure Purple Status badge */}
        <div className="hidden sm:flex items-center gap-2 pl-2 pr-2.5 py-1 text-xs font-semibold text-purple-200 border-r border-[#A044FF]/30">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E0B3FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A044FF]"></span>
          </span>
          <span>Open to Roles</span>
        </div>

        {/* Quick Copy Email */}
        <button
          onClick={copyEmail}
          className="relative group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#6A3093]/70 to-[#A044FF]/50 hover:from-[#6A3093] hover:to-[#A044FF] text-white transition-all duration-300 shadow-sm"
          title="Copy Email"
        >
          {copied ? <FaCheck className="text-[#E0B3FF] text-sm" /> : <MdEmail className="text-lg" />}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-[#130326] border border-[#A044FF]/50 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            {copied ? "Email Copied!" : "Copy Email"}
          </span>
        </button>

        {/* Github */}
        <a
          href="https://github.com/shahed137003"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e0a3c]/70 hover:bg-[#A044FF]/30 text-purple-200 hover:text-white transition-all duration-300 border border-[#A044FF]/30 hover:border-[#A044FF]"
          title="GitHub"
        >
          <FaGithub className="text-lg" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shahd-mohamed-2ab8bb315"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e0a3c]/70 hover:bg-[#A044FF]/30 text-purple-200 hover:text-white transition-all duration-300 border border-[#A044FF]/30 hover:border-[#A044FF]"
          title="LinkedIn"
        >
          <FaLinkedin className="text-lg" />
        </a>

        {/* Scroll to Top */}
        <AnimatePresence>
          {showTopBtn && (
            <motion.button
              onClick={scrollToTop}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white shadow-md hover:shadow-[0_0_15px_#A044FF] transition-all duration-300"
              title="Scroll to top"
            >
              <FaArrowUp className="text-sm" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
