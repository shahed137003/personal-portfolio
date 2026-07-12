import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp, FaCopy, FaCheck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function FloatingActionBar() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
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

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 p-2 rounded-full bg-[#0d021c]/90 backdrop-blur-xl border border-[#A044FF]/40 shadow-[0_8px_32px_rgba(160,68,255,0.35)]"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      {/* Status indicator badge */}
      <div className="hidden sm:flex items-center gap-2 pl-3 pr-2 py-1 text-xs font-semibold text-gray-200 border-r border-[#A044FF]/30">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span>Open to Work</span>
      </div>

      {/* Quick Copy Email */}
      <button
        onClick={copyEmail}
        className="relative group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#6A3093]/60 to-[#A044FF]/40 hover:from-[#6A3093] hover:to-[#A044FF] text-white transition-all duration-300 shadow-sm"
        title="Copy Email"
      >
        {copied ? <FaCheck className="text-emerald-400 text-sm" /> : <MdEmail className="text-lg" />}
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-[#130326] border border-[#A044FF]/50 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          {copied ? "Email Copied!" : "Copy Email"}
        </span>
      </button>

      {/* Github */}
      <a
        href="https://github.com/shahed137003"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e0a3c]/60 hover:bg-[#A044FF]/30 text-gray-200 hover:text-white transition-all duration-300 border border-white/10 hover:border-[#A044FF]/60"
        title="GitHub"
      >
        <FaGithub className="text-lg" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/shahd-mohamed-2ab8bb315"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e0a3c]/60 hover:bg-[#A044FF]/30 text-gray-200 hover:text-white transition-all duration-300 border border-white/10 hover:border-[#A044FF]/60"
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
  );
}
