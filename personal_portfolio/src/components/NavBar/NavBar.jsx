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
        if (section && section.offsetTop - 120 <= window.scrollY) {
          current = link.name.toLowerCase();
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-[#000000e8] backdrop-blur-md py-4 px-6 md:px-10 text-white border-b border-[#833CAA]/50 fixed w-full flex items-center justify-between z-50 shadow-2xl transition-all duration-500 ease-in-out">
      
      {/* Logo */}
      <a
        href="#homeSection"
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#833CAA] to-[#A044FF] text-xl sm:text-4xl font-bold tracking-wide hover:scale-110 transition-transform duration-500 ease-in-out hover:drop-shadow-[0_0_10px_#A044FF]"
      >
        Shahd Mohamed
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-x-8">
        <ul className="flex gap-x-8 text-lg items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className={`pb-1 font-medium transition-all duration-500 ease-in-out ${
                  activeSection === link.name.toLowerCase()
                    ? "text-[#A044FF] border-b-2 border-[#A044FF]"
                    : "text-white hover:text-[#A044FF] hover:border-b-2 hover:border-[#A044FF]"
                }`}
              >
                {link.name}
              </a>
              {/* Animated gradient underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[#833CAA] to-[#A044FF] transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-4 ml-6">
          <a
            href="/resume.pdf" // replace with your resume path
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-[#A044FF] text-[#A044FF] font-semibold hover:bg-gradient-to-r hover:from-[#833CAA] hover:to-[#A044FF] hover:text-white transition-all duration-500 ease-in-out shadow-md"
          >
            Resume
          </a>
          <a
            href="#contactSection"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#833CAA] to-[#A044FF] text-white font-semibold hover:shadow-[0_0_12px_#A044FF] transition-all duration-500 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-2xl cursor-pointer hover:text-[#A044FF] transition-colors duration-500 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#000000f5] backdrop-blur-md border-t border-[#833CAA]/50 md:hidden shadow-lg transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg">
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => setIsOpen(false)}>
              <a
                href={link.href}
                className={`font-medium transition-all duration-500 ease-in-out ${
                  activeSection === link.name.toLowerCase()
                    ? "text-[#A044FF] scale-105"
                    : "text-white hover:text-[#A044FF] hover:scale-105"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Resume & Contact Buttons in Mobile */}
          <li>
      <a
  href="https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/Eflb-VaMeDFJvvtI9lXVATQB8ADzuvxMWqnA-kNeNJb4Gw?e=b0mpJW"
  target="_blank"

  className="block px-6 py-2 rounded-lg border border-[#A044FF] text-[#A044FF] font-semibold hover:bg-gradient-to-r hover:from-[#833CAA] hover:to-[#A044FF] hover:text-white transition-all duration-500 ease-in-out shadow-md"
  onClick={() => setIsOpen(false)}
>
  Resume
</a>

          </li>
          <li>
            <a
              href="#contactSection"
              className="block px-6 py-2 rounded-lg bg-gradient-to-r from-[#833CAA] to-[#A044FF] text-white font-semibold hover:shadow-[0_0_12px_#A044FF] transition-all duration-500 ease-in-out"
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
