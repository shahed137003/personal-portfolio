import React from 'react';
import { FaGithub, FaLinkedin, FaFolderOpen } from "react-icons/fa";
import { motion } from 'framer-motion';
import './HeroSection.css';
import { RoboAnimation } from '../Glare/RoboAnimation';
import FloatingPaper from '../Glare/floatingpaper';
import { FaHeart } from 'react-icons/fa';
export default function HeroSection() {
  return (
    <div className="relative w-full h-screen  flex flex-col justify-center items-start pl-10 md:pl-20" id="homeSection">

 
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-white relative z-10 max-w-5xl text-left"
      >
           {/* Floating Heart */}
  
        {/* Name with gradient animation */}
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-[40px] sm:text-[36px] lg:text-[76px] font-bold font-serif italic bg-clip-text text-transparent 
                     bg-gradient-to-r from-[#9400D3] to-[#4B0082] animate-gradient-shift leading-tight "
        >
          Shahd Mohamed
        </motion.h1>
    
        {/* Robo Animation */}
        <motion.div
          className="my-5 flex justify-start"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <RoboAnimation size={64} className="sm:size-48 md:size-64" />
        </motion.div>
 {/* Floating Heart */}
<motion.div
  className="absolute z-20 text-4xl sm:text-6xl lg:text-6xl drop-shadow-lg cursor-pointer"
  style={{ top: '50px', left: '75%', transform: 'translateX(-50%)' }}
  animate={{
    y: [0, -20, 0],
    scale: [1, 1.2, 1],
    color: [ "#9400D3", "#4B0082"] // cycling colors
  }}
  transition={{
    repeat: Infinity,
    duration: 4,
    ease: "easeInOut"
  }}
>
  <FaHeart />
</motion.div>


        {/* Typing SVG */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative overflow-hidden flex justify-start items-center rounded-2xl  px-3"
        >
       
          <div className="absolute inset-0 bg-gradient-to-r from-[#9400D3]/30 via-[#BF5AE0]/30 to-[#4B0082]/30 
                          blur-xl rounded-lg animate-pulse pointer-events-none " />

          {/* Typing SVG */}
          <img
            src="https://readme-typing-svg.demolab.com?font=sans+Code&size=24&duration=3000&pause=1000&color=BF5AE0&center=false&vCenter=true&width=435&lines=Computer+Engineering+Student;AI+%26+Web+Development+Lover;Creative+Problem+Solver;Open+Source+Contributor"
            alt="Typing SVG"
            className="relative max-w-full drop-shadow-[0_0_10px_#BF5AE0] animate-fadeIn"
          />

          {/* Optional floating glow circle */}
          <motion.div
            className="absolute w-6 h-6 bg-[#BF5AE0] rounded-full opacity-50 blur-md"
            animate={{ x: [0, 10, -10, 0], y: [0, -5, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Description */}
   <motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.35, ease: "easeInOut" }}
  className="mt-3 text-[16px] sm:text-[13px] lg:text-[18px] italic  space-y-1 leading-relaxed text-left"
>
  <p className="text-white/90">
    I’m a passionate{" "}
    <span className="bg-gradient-to-r from-[#BF5AE0] via-[#9D50BB] to-[#6E48AA] bg-clip-text text-transparent font-semibold drop-shadow-md">
      AI Engineer
    </span>{" "}
    and{" "}
    <span className="bg-gradient-to-r from-[#BF5AE0] via-[#9D50BB] to-[#6E48AA] bg-clip-text text-transparent font-semibold drop-shadow-md mr-1">
      Frontend Web Developer
    </span>
    , deeply interested in Computer Vision and NLP.
  </p>
  <p className="text-white/80 hover:text-white transition-colors duration-300">
    I specialize in designing and implementing{" "}
    <span className="text-[#BF5AE0] font-medium">machine learning-powered applications</span> with modern, responsive, and user-friendly interfaces, blending AI capabilities with smooth user experiences.
  </p>
  <p className="text-white/80 hover:text-white transition-colors duration-300">
    My work bridges the gap between{" "}
    <span className="text-[#BF5AE0] font-medium">cutting-edge AI algorithms</span> and practical digital solutions, delivering impactful and intuitive experiences for users.
  </p>
</motion.div>

        {/* Social Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="flex flex-col sm:flex-row gap-6 mt-8 justify-start"
        >
          {/* Github */}
          <motion.button
            whileHover={{ scale: 1.15, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="transition-all duration-300 ease-in-out px-6 py-2 border-2 border-[#BF5AE0] rounded-xl text-[#BF5AE0] flex items-center justify-center gap-3 shadow-md shadow-[#BF5AE0] hover:shadow-lg hover:shadow-[#BF5AE0]/70 bg-black/20 backdrop-blur-sm"
            onClick={() => window.open("https://github.com/shahed137003", "_blank", "noopener,noreferrer")}
            title="Github"
          >
            Github <FaGithub className="text-xl" />
          </motion.button>

          {/* Linkedin */}
          <motion.button
            whileHover={{ scale: 1.15, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="transition-all duration-300 ease-in-out px-6 py-2 rounded-4xl text-white flex items-center justify-center gap-2 bg-gradient-to-br from-[#9400D3] to-[#4B0082] shadow-md shadow-[#9400D3]/50 hover:shadow-lg hover:shadow-[#4B0082]/80"
            onClick={() => window.open("https://www.linkedin.com/in/shahd-mohamed-2ab8bb315", "_blank", "noopener,noreferrer")}
            title="Linkedin"
          >
            Linkedin <FaLinkedin />
          </motion.button>

          {/* View My Work */}
          <motion.button
            whileHover={{ scale: 1.15, rotate: 2, y: -2 }}
            whileTap={{ scale: 0.95, rotate: 0 }}
            className="relative overflow-hidden px-6 py-2 rounded-xl text-white flex items-center justify-center gap-2 bg-gradient-to-r from-[#9400D3] to-[#4B0082] font-semibold shadow-lg shadow-[#4B0082]/50 hover:shadow-xl hover:shadow-[#4B0082] transition-all duration-300 ease-in-out"
            onClick={() => window.scrollTo({ top: document.getElementById('projectSection').offsetTop, behavior: 'smooth' })}
            title="View My Work"
          >
            {/* Glowing background effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#BF5AE0]/30 via-[#9D50BB]/30 to-[#6E48AA]/30 rounded-xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></span>

            {/* Icon and text */}
            <FaFolderOpen className="text-xl z-10" />
            <span className="z-10">View My Work</span>

            {/* Animated shine overlay */}
            <span className="absolute -left-10 top-0 w-6 h-full bg-white/20 rotate-12 animate-[shine_2s_linear_infinite]"></span>
          </motion.button>
        </motion.div>

      {/* Scroll Indicator */}
<motion.div
  className="absolute mt-9 left-8/12  -translate-x-1/2 w-6 h-12 border-2 border-[#4B0082] rounded-full flex justify-center items-end cursor-pointer backdrop-blur-sm"
  animate={{ y: [0, 12, 0] }}
  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
  onClick={() =>
    document
      .getElementById("aboutSection")
      .scrollIntoView({ behavior: "smooth" })
  }
>
  <motion.div
    className="w-3 h-3 bg-gradient-to-r from-[#9400D3] to-[#4B0082] rounded-full shadow-[0_0_15px_#BF5AE0] mb-1"
    animate={{ y: [0, 6, 0], scale: [1, 1.3, 1] }}
    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
  />
</motion.div>

      </motion.div>
    </div>
  );
}
