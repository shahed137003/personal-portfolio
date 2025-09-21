import React, { useState } from 'react';
import avatar from '../../assets/avataaars.png';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaLaptopCode, FaCertificate } from "react-icons/fa";
import { SiCoursera, SiReact, SiPython } from "react-icons/si";
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    { 
      title: "Cellula Technology Training (NLP)", 
      source: "Internship", 
      description: "Researched and implemented transformer-based models (BERT, DistilBERT, LLaMA Guard).Enhanced sentiment analysis and NER tasks with a 10% performance improvement over baselines.", 
      icon: <FaLaptopCode />, 
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/EcXq7biTanJEopbgpGO51bgBlKg6xPekPaJvIEZygabwmw?e=PU7gzl" 
    },
    { 
      title: "React & React Native Development", 
      source: "ITI Internship", 
      description: "Built dynamic UIs and mobile apps with React & React Native while working on real-world projects.", 
      icon: <SiReact />, 
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/Ea0KEazQtCBAhj9KLt3BgPQBd2KvFEvKLqAMLn8cvwNuxQ?e=4A9C3I" 
    },
    { 
      title: "Cellula Technology Training (Computer Vision)", 
      source: "Internship", 
      description: "Designed and optimized CNN-based object detection models in TensorFlow and PyTorch.", 
      icon: <FaLaptopCode />, 
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/EYKLfG5qYiRPt-OnnpmYkXYBEL6sOJdk2SgD597-rdD7yQ?e=nUt36H" 
    },
      
  { 
  title: "MATLAB Programming", 
  source: "Coursera", 
  description: "Learned MATLAB basics, data visualization, scripting, and algorithm development for engineering applications.", 
  icon: <SiCoursera />, 
  link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/EXsuyG-PxdNHsG1T7Wbm6J4B0_cDT020yFNA_uARdqacyA?e=bb1cFe" 
},
 { 
      title: "Python for Everybody Specialization", 
      source: "Coursera", 
      description: "Comprehensive introduction to Python, covering data structures, web scraping, and databases.", 
       icon: <SiCoursera />,  
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/Ed9YmS-jMz5MmUPUvIJOL7kBO_35rVwIW3yBDJB894QMDg?e=SnQRCD" 
    }
   
  ];

  const visibleCerts = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section className="text-white relative z-10 w-full px-4 py-16" id="aboutSection">
      
    <motion.h1
  className="relative text-[40px] sm:text-[50px] lg:text-[70px] font-extrabold font-serif text-center 
             text-transparent bg-clip-text bg-gradient-to-r from-[#6A3093] via-[#8E2DE2] to-[#A044FF] 
             mb-10 tracking-wide"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
  About Me

  {/* Underline glow */}
  <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-32 h-[3px] rounded-full 
                   bg-gradient-to-r from-[#6A3093] via-[#8E2DE2] to-[#A044FF] 
                   shadow-[0_0_15px_#A044FF] animate-pulse" />
</motion.h1>


      <div className="flex flex-col lg:flex-row gap-10 lg:gap-15 justify-center items-center">
        
        {/* Avatar Card */}
        <motion.div
          className="transition duration-300 ease-in transform hover:scale-105 w-full max-w-sm bg-gradient-to-br from-[#050008]/80 to-[#6A3093]/80 border border-[#6A3093] backdrop-blur-md rounded-2xl hover:shadow-[0px_0px_25px] shadow-[#6A3093] p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={avatar}
            alt="Avatar"
            className="w-28 h-28 sm:w-32 sm:h-32 border-[3px] border-[#6A3093] bg-[#050008] rounded-full mx-auto mt-2 transition duration-300 ease-in transform hover:scale-110 hover:rotate-3"
          />

          <h1 className="text-center pt-4 text-2xl sm:text-3xl text-[#6A3093] font-bold">Shahd Mohamed</h1>

          <p className="text-center text-gray-200 mt-3 text-base sm:text-lg leading-relaxed">
            A <span className="text-[#6A3093]">Computer Engineering</span> student at
            <span className="text-[#6A3093]"> Ain Shams University</span> with a passion for
            technology and innovation.
          </p>

          <div className="mt-6 space-y-3 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <MdEmail className="text-[#6A3093] text-xl sm:text-2xl" />
              <a
                href="mailto:Shahd137003@gmail.com"
                aria-label="Send email to Shahd"
                className="text-white hover:text-[#A044FF]"
              >
                Shahd137003@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MdPhone className="text-[#6A3093] text-xl sm:text-2xl" />
              <span>+20 1092968238</span>
            </div>

            <div className="flex items-center gap-3">
              <MdLocationOn className="text-[#6A3093] text-xl sm:text-2xl" />
              <span>Cairo, Egypt</span>
            </div>
          </div>
        </motion.div>

        {/* Description Card */}
        <motion.div
          className="transition duration-300 ease-in transform hover:scale-105 w-full lg:max-w-2xl bg-gradient-to-br from-[#050008]/80 to-[#6A3093]/80 border border-[#6A3093] backdrop-blur-md rounded-2xl hover:shadow-[0px_0px_25px] shadow-[#6A3093] p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
        <div className="flex items-center gap-3 font-bold text-xl sm:text-2xl group">
  <FaLaptopCode
    className="
      text-3xl sm:text-4xl 
      text-[#6A3093] 
      drop-shadow-[0_0_8px_#A044FF] 
      transition-transform duration-300 
      group-hover:rotate-12 group-hover:scale-110
    "
  />
  <h1
    className="
      text-transparent bg-clip-text 
      bg-gradient-to-r from-[#6A3093] via-[#A044FF] to-[#6A3093] 
      drop-shadow-[0_0_10px_rgba(160,68,255,0.6)]
      transition-all duration-300 
      group-hover:tracking-wide group-hover:scale-105
    "
  >
    What Drives Me As Computer Engineer
  </h1>
</div>
<ul className="mt-6 space-y-4 pl-6 sm:pl-10 lg:pl-20 text-sm sm:text-base">
  {[
    {
      title: "Web Development",
      desc: "I build responsive user interfaces with React, Tailwind, and JavaScript.",
    },
    {
      title: "Machine Learning & AI",
      desc: "Worked on NLP, CV, and moderation systems with DistilBERT and LLaMA Guard.",
    },
    {
      title: "Problem Solving",
      desc: "Competitive programming on Codeforces, HackerRank, and LeetCode.",
    },
    {
      title: "Software Engineering",
      desc: "Built scheduling visualizers, distributed apps, and multithreaded systems using Java, Python & C++.",
    },
    {
      title: "UI/UX Design",
      desc: "Exploring human-centered design to improve usability & visuals.",
    },
  ].map((item, i) => (
    <li
      key={i}
      className="
        relative pl-6 
        text-gray-300 
        leading-relaxed
        group transition-all duration-300
        hover:translate-x-1
      "
    >
      {/* Custom bullet marker */}
      <span
        className="
          absolute left-0 top-2 w-2 h-2 rounded-full
          bg-gradient-to-r from-[#6A3093] to-[#A044FF]
          shadow-[0_0_6px_#A044FF]
          group-hover:scale-125 transition-transform duration-300
        "
      />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A3093] to-[#A044FF] font-semibold">
        {item.title}
      </span>{" "}
      — {item.desc}
    </li>
  ))}
</ul>

        </motion.div>
      </div>

      {/* Divider Line */}
      <div className="w-full flex justify-center my-12">
        <div className="h-[2px] w-3/4 bg-gradient-to-r from-transparent via-[#6A3093] to-transparent"></div>
      </div>

      {/* Certificates Section */}
      <motion.div
        className="mt-12 w-full max-w-5xl mx-auto bg-gradient-to-br from-[#050008]/10 to-[#1a0033]/10 border border-[#6A3093]/50 rounded-2xl p-8 opacity-95 backdrop-blur-md shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Title */}
      {/* Section Title */}
<div className="flex items-center gap-3 font-extrabold text-2xl sm:text-3xl mb-8 relative">
  <FaCertificate className="text-4xl sm:text-5xl text-[#6A3093] drop-shadow-[0_0_10px_#6A3093]" />
  <h1 className="bg-gradient-to-r from-[#6A3093] to-[#A044FF] text-transparent bg-clip-text 
                 drop-shadow-[0_0_8px_rgba(160,68,255,0.8)] 
                 hover:drop-shadow-[0_0_15px_rgba(160,68,255,1)] 
                 transition duration-300">
    Certificates & Achievements
  </h1>
</div>


        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleCerts.map((cert, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-[#050008]/80 to-[#6A3093]/80 rounded-xl p-5 border border-[#6A3093]/40 shadow-md hover:shadow-[0px_0px_25px] hover:shadow-[#6A3093]/80 transition transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
                whileHover={{ scale: 1.05, rotate: 1 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col items-start gap-3">
                  <div className="text-[#A044FF] text-3xl">{cert.icon}</div>
                  <h2 className="text-white font-semibold text-lg">{cert.title}</h2>
                  <p className="text-sm text-gray-300 italic">{cert.source}</p>
                  <p className="text-gray-400 text-sm">{cert.description}</p>

                  {/* Link Button */}
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-block px-4 py-1 bg-[#6A3093] text-white text-sm font-medium rounded-lg shadow hover:bg-[#A044FF] transition"
                  >
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        {certificates.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-[#6A3093] text-white font-medium rounded-lg shadow hover:bg-[#A044FF] transition"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
