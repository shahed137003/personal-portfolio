import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFileDownload, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const resumeLink =
    "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/Eflb-VaMeDFJvvtI9lXVATQB8ADzuvxMWqnA-kNeNJb4Gw?e=b0mpJW";

  const navLinks = [
    { name: "Home", href: "#homeSection" },
    { name: "About", href: "#aboutSection" },
    { name: "Experience", href: "#experienceSection" },
    { name: "Skills", href: "#skillSection" },
    { name: "Projects", href: "#projectSection" },
    { name: "Contact", href: "#contactSection" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "home";
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && section.offsetTop - 150 <= window.scrollY) {
          current = link.name.toLowerCase();
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-3 sm:top-5 left-0 w-full z-50 px-4 sm:px-8">
      <nav
        className={`max-w-6xl mx-auto rounded-full transition-all duration-500 backdrop-blur-2xl border shadow-2xl ${
          scrolled
            ? isDarkMode
              ? "bg-[#180510]/90 border-[#FF007A]/45 shadow-[0_10px_40px_rgba(255,0,122,0.3)] py-2.5 px-6 sm:px-8"
              : "bg-white/90 border-[#be123c]/60 shadow-[0_10px_35px_rgba(225,29,72,0.2)] py-2.5 px-6 sm:px-8"
            : isDarkMode
            ? "bg-[#10030a]/80 border-[#FF007A]/35 shadow-[0_8px_30px_rgba(255,0,122,0.2)] py-3 px-6 sm:px-8"
            : "bg-white/80 border-[#be123c]/50 shadow-[0_8px_25px_rgba(225,29,72,0.15)] py-3 px-6 sm:px-8"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-3">
            <a
              href="#homeSection"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDA4AF] via-[#FF007A] to-[#E01E5A] text-xl sm:text-2xl font-extrabold font-serif tracking-wide hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(255,0,122,0.6)]"
            >
              Shahd
            </a>

            <span
              className={`hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold border ${
                isDarkMode
                  ? "bg-[#FF007A]/15 border-[#FF007A]/40 text-[#FDA4AF]"
                  : "bg-[#ffe4e6] border-[#be123c]/40 text-[#BE123C]"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#FF007A] animate-ping" />
              Frontend & AI Engineer
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
            <ul className="flex gap-x-1 lg:gap-x-2 text-sm font-semibold items-center">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name.toLowerCase();
                return (
                  <li key={link.name} className="relative">
                    <a
                      href={link.href}
                      className={`px-3.5 py-1.5 rounded-full transition-all duration-300 relative z-10 ${
                        isActive
                          ? isDarkMode
                            ? "text-[#180510] font-extrabold"
                            : "text-white font-extrabold"
                          : isDarkMode
                          ? "text-gray-300 hover:text-white"
                          : "text-[#BE123C] hover:text-[#4c0519]"
                      }`}
                    >
                      {link.name}
                    </a>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className={`absolute inset-0 z-0 rounded-full border ${
                          isDarkMode
                            ? "bg-gradient-to-r from-[#E01E5A] to-[#FF007A] border-[#FDA4AF]/60 shadow-[0_0_15px_rgba(255,0,122,0.6)]"
                            : "bg-gradient-to-r from-[#be123c] to-[#e11d48] border-[#BE123C]/50 shadow-[0_0_15px_rgba(225,29,72,0.35)]"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Right Action Group */}
            <div className="flex items-center gap-2.5">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark/light theme"
                className={`p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
                  isDarkMode
                    ? "border-[#FF007A]/50 text-[#FF007A] hover:bg-[#FF007A]/20 hover:text-white shadow-[0_0_15px_rgba(255,0,122,0.3)]"
                    : "border-[#be123c]/50 text-[#BE123C] hover:bg-[#ffe4e6] hover:text-[#4c0519] shadow-[0_0_15px_rgba(225,29,72,0.2)]"
                }`}
              >
                {isDarkMode ? <FaSun className="text-yellow-300 text-sm" /> : <FaMoon className="text-[#BE123C] text-sm" />}
              </button>

              {/* Resume Download */}
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-bold transition-all duration-300 ${
                  isDarkMode
                    ? "border-[#FF007A]/50 text-[#FF007A] hover:bg-[#FF007A] hover:text-[#180510]"
                    : "border-[#be123c] text-[#BE123C] hover:bg-[#be123c] hover:text-white"
                }`}
              >
                <FaFileDownload /> Resume
              </a>

              {/* Contact Button */}
              <a
                href="#contactSection"
                className="px-4.5 py-1.5 rounded-full bg-gradient-to-r from-[#E01E5A] via-[#F43F5E] to-[#FF007A] text-[#180510] text-xs font-extrabold shadow-[0_0_20px_rgba(255,0,122,0.6)] hover:shadow-[0_0_30px_rgba(255,0,122,0.85)] transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className={`p-2 rounded-full border transition-all duration-300 ${
                isDarkMode ? "border-[#FF007A]/50 text-[#FF007A]" : "border-[#be123c]/50 text-[#BE123C]"
              }`}
            >
              {isDarkMode ? <FaSun className="text-yellow-300 text-xs" /> : <FaMoon className="text-[#BE123C] text-xs" />}
            </button>

            <div
              className={`text-xl cursor-pointer p-1.5 rounded-full ${
                isDarkMode ? "text-gray-200 hover:text-[#FF007A]" : "text-[#4c0519] hover:text-[#be123c]"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 pt-4 pb-2" : "max-h-0 opacity-0 pt-0 pb-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-3 text-base">
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => setIsOpen(false)}>
                <a
                  href={link.href}
                  className={`font-semibold transition-all duration-300 ${
                    activeSection === link.name.toLowerCase()
                      ? isDarkMode
                        ? "text-[#FF007A] drop-shadow-[0_0_8px_#FF007A]"
                        : "text-[#BE123C] font-bold"
                      : isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-[#BE123C] hover:text-[#4c0519]"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2 flex gap-3">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#E01E5A] to-[#FF007A] text-[#180510] text-xs font-extrabold shadow-md"
              >
                <FaFileDownload /> Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
