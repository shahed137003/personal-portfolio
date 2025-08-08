import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#homeSection" },
    { name: "About", href: "#aboutSection" },
    { name: "Skills", href: "#skillSection" },
    { name: "Projects", href: "#projectSection" },
    { name: "Contact", href: "#contactSection" },
  ];

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.querySelector(link.href));
      let current = "home";

      sections.forEach((section, index) => {
        if (section && section.offsetTop - 100 <= window.scrollY) {
          current = navLinks[index].name.toLowerCase();
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-[#000000e8] backdrop-blur-md py-4 px-8 text-white border-b border-[#833CAA] fixed w-full flex items-center justify-between z-50 shadow-lg">
      {/* Logo */}
      <a href="#homeSection" className="text-transparent bg-clip-text bg-gradient-to-r from-[#833CAA] to-[#A044FF] text-4xl font-bold tracking-wide hover:scale-105 transition-transform duration-300">
        SM
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-8 text-lg items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={`transition-all duration-300 pb-1 ${
                activeSection === link.name.toLowerCase()
                  ? "text-[#A044FF] border-b-2 border-[#A044FF]"
                  : "hover:text-[#A044FF] hover:border-b-2 hover:border-[#A044FF]"
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-2xl cursor-pointer hover:text-[#A044FF] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[64px] left-0 w-full bg-[#000000f5] backdrop-blur-md border-t border-[#833CAA] md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg">
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => setIsOpen(false)}>
              <a
                href={link.href}
                className={`transition-colors duration-300 ${
                  activeSection === link.name.toLowerCase()
                    ? "text-[#A044FF]"
                    : "hover:text-[#A044FF]"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
