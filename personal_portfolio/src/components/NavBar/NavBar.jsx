import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#06010e]/85 backdrop-blur-xl py-3 border-b border-[#A044FF]/30 shadow-[0_4px_30px_rgba(160,68,255,0.25)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo & Status Badge */}
        <div className="flex items-center gap-3">
          <a
            href="#homeSection"
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#C873FF] via-[#A044FF] to-[#6A3093] text-xl sm:text-3xl font-extrabold font-serif tracking-wide hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(160,68,255,0.6)]"
          >
            Shahd Mohamed
          </a>

          <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#A044FF]/15 border border-[#A044FF]/40 text-[#E0B3FF] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            AI & Frontend Eng
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-8">
          <ul className="flex gap-x-6 lg:gap-x-8 text-base font-medium items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#6A3093]/70 to-[#A044FF]/60 border border-[#A044FF]/50 shadow-[0_0_12px_rgba(160,68,255,0.5)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Buttons */}
          <div className="flex gap-3 ml-2">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#A044FF] text-[#E0B3FF] text-sm font-semibold hover:bg-gradient-to-r hover:from-[#6A3093] hover:to-[#A044FF] hover:text-white transition-all duration-300 shadow-sm"
            >
              <FaFileDownload /> Resume
            </a>
            <a
              href="#contactSection"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#6A3093] to-[#A044FF] text-white text-sm font-semibold hover:shadow-[0_0_20px_#A044FF] transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl text-gray-200 cursor-pointer hover:text-[#A044FF] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#06010ef5] backdrop-blur-2xl border-b border-[#A044FF]/40 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 text-lg">
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => setIsOpen(false)}>
              <a
                href={link.href}
                className={`font-semibold transition-all duration-300 ${
                  activeSection === link.name.toLowerCase()
                    ? "text-[#C873FF] drop-shadow-[0_0_8px_#A044FF]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}

          <li className="flex gap-4 pt-2">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-[#A044FF] text-[#E0B3FF] font-semibold text-sm hover:bg-[#A044FF] hover:text-white transition-all"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
            <a
              href="#contactSection"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#6A3093] to-[#A044FF] text-white font-semibold text-sm shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
