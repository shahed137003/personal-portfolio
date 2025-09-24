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

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && section.offsetTop - 100 <= window.scrollY) {
          current = link.name.toLowerCase();
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-[#000000e8] backdrop-blur-md py-4 px-8 text-white border-b border-[#833CAA] fixed w-full flex items-center justify-between z-50 shadow-xl transition-all duration-500 ease-in-out">
      
      {/* Logo */}
      <a
        href="#homeSection"
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#833CAA] to-[#A044FF] text-4xl font-bold tracking-wide hover:scale-105 transition-transform duration-500 ease-in-out"
      >
        Shahd Mohamed
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-10 text-lg items-center">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            <a
              href={link.href}
              className={`pb-1 font-medium transition-all duration-500 ease-in-out ${
                activeSection === link.name.toLowerCase()
                  ? "text-[#A044FF] border-b-2 border-[#A044FF]"
                  : "hover:text-[#A044FF] hover:border-b-2 hover:border-[#A044FF]"
              }`}
            >
              {link.name}
            </a>
            {/* Animated gradient underline on hover */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[#833CAA] to-[#A044FF] transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-2xl cursor-pointer hover:text-[#A044FF] transition-colors duration-500 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#000000f5] backdrop-blur-md border-t border-[#833CAA] md:hidden shadow-lg transition-all duration-500 ease-in-out">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg">
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => setIsOpen(false)}>
                <a
                  href={link.href}
                  className={`font-medium transition-colors duration-500 ease-in-out ${
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
      )}
    </nav>
  );
}
