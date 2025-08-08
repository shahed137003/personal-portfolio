import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import './HeroSection.css';
import { RoboAnimation } from '../Glare/RoboAnimation';
import FloatingPaper from '../Glare/floatingpaper';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center" id="homeSection">
      {/* Floating Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingPaper count={10} />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-white relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[40px] sm:text-[56px] lg:text-[76px] font-bold italic text-transparent bg-clip-text bg-gradient-to-br from-[#9400D3] to-[#4B0082] leading-tight"
        >
          Shahd Mohamed
        </motion.h1>

        <div className="my-4">
          <RoboAnimation size={64} className="sm:size-56 md:size-64" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="overflow-hidden"
        >
          <img
            src="https://readme-typing-svg.demolab.com?font=sans+Code&size=24&duration=3000&pause=1000&color=BF5AE0&center=false&vCenter=true&width=435&lines=Computer+Engineering+Student;AI+%26+Web+Development+Lover;Creative+Problem+Solver;Open+Source+Contributor"
            alt="Typing SVG"
            className="max-w-full"
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="text-[16px] sm:text-[15px] lg:text-[18px] font-serif font-thin mt-4 "
        >
          <p>
            I’m a passionate <span className="text-[#BF5AE0]">AI Engineer</span> and
            <span className="text-[#BF5AE0]"> Frontend Web Developer</span> with a strong foundation in both intelligent
          </p>
          <p>system design and interactive web development. I specialize in building machine learning-powered</p>
          <p>applications with modern, user-friendly interfaces. My work bridges the gap between cutting-edge AI</p>
          <p>algorithms and intuitive digital experiences.</p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 mt-8"
          >
         <button
      className="transition duration-300 ease-in transform hover:scale-110 px-6 py-3 border-2 border-[#BF5AE0] rounded-xl text-[#BF5AE0] flex items-center justify-center gap-3 shadow-md shadow-[#BF5AE0]"
      onClick={() => window.open("https://github.com/shahed137003", "_blank", "noopener,noreferrer")}
    >
      Github <FaGithub className="text-xl" />
    </button>

            <button className="transition duration-300 ease-in transform hover:scale-110 hover:shadow-lg hover:shadow-[#4B0082] bg-gradient-to-br from-[#9400D3] to-[#4B0082] px-6 py-3 rounded-4xl text-white flex items-center justify-center gap-3"
             onClick={() => window.open("https://www.linkedin.com/in/shahd-mohamed-2ab8bb315", "_blank", "noopener,noreferrer")}
            >
              Linkedin <FaLinkedin />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
