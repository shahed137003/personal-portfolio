import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { FaMicrochip, FaTools, FaDatabase, FaReact, FaProjectDiagram } from 'react-icons/fa';
import { GiArtificialIntelligence, GiProcessor } from 'react-icons/gi';
import { TbTopologyStar3 } from "react-icons/tb";
import { MdGpsFixed } from "react-icons/md";
import { BsUsbPlug } from "react-icons/bs";

import { motion } from 'framer-motion';


import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaCuttlefish,
  FaJsSquare
} from "react-icons/fa";
import { SiCplusplus, SiArduino } from "react-icons/si";
import { FaGitAlt, FaGithub, FaCode } from "react-icons/fa";
import { SiAnaconda } from "react-icons/si";
import { SiMysql, SiMongodb, SiPostgresql, SiFirebase } from "react-icons/si";
import { SiTensorflow, SiPytorch, SiScikitlearn, SiNumpy, SiPandas, SiJupyter, SiKeras } from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { FaJs} from "react-icons/fa";
import { SiTailwindcss, SiDjango } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
const programmingLanguages = [
  { name: "C++", icon: <SiCplusplus className="text-white text-xl" /> },
  { name: "C", icon: <FaCuttlefish className="text-white text-xl" /> },
  { name: "Java", icon: <FaJava className="text-white text-xl" /> },
  { name: "Python", icon: <FaPython className="text-white text-xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-white text-xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-white text-xl" /> },
];

const EmbeddedSkills = [
  { name: "Arduino", icon: <SiArduino className="text-white text-xl" /> },
  { name: "TM4C123G", icon: <GiProcessor className="text-white text-xl" /> },
  { name: "UART", icon: <BsUsbPlug className="text-white text-xl" /> },
  { name: "GPIO", icon: <FaMicrochip className="text-white text-xl" /> },
  { name: "PWM", icon: <TbTopologyStar3 className="text-white text-xl" /> },
  { name: "GPS System", icon: <MdGpsFixed className="text-white text-xl" /> },
  
];

const ToolsAndTechnologySkills = [
  { name: "Git", icon: <FaGitAlt className="text-white text-xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-xl" /> },
  { name: "VS Code", icon: <FaCode  className="text-white text-xl" /> },
  { name: "Anaconda", icon: <SiAnaconda className="text-white text-xl" /> },
];


const DatabaseSkills = [
  { name: "MySQL", icon: <SiMysql className="text-white text-xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-white text-xl" /> },
  { name: "SQL", icon: <FaDatabase className="text-white text-xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-white text-xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-white text-xl" /> },
];


const AiMlSkills = [
  { name: "TensorFlow", icon: <SiTensorflow className="text-white text-xl" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-white text-xl" /> },
  { name: "Keras", icon: <SiKeras className="text-white text-xl" /> },
  { name: "Scikit-learn", icon: <SiScikitlearn className="text-white text-xl" /> },
  { name: "NumPy", icon: <SiNumpy className="text-white text-xl" /> },
  { name: "Pandas", icon: <SiPandas className="text-white text-xl" /> },
  { name: "Jupyter", icon: <SiJupyter className="text-white text-xl" /> },
  { name: "DL", icon: <FaBrain className="text-white text-xl" /> },
];

const WebDevSkills = [
  { name: "React", icon: <FaReact className="text-white text-xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-white text-xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-white text-xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-white text-xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-white text-xl" /> },

  { name: "Django", icon: <SiDjango className="text-white text-xl" /> },
];
export default function Skills() {
  return (
    <div className="text-white relative z-10 w-full px-4 py-10" id="skillSection">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-[70px] font-bold font-serif text-center text-transparent bg-clip-text bg-gradient-to-br from-[#6E48AA] via-[#764BA2] to-[#9D50BB] mb-10"
        
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Skills
      </motion.h1>

      <div className="flex justify-center">
        <motion.div
          className="transition duration-300 ease-in transform hover:scale-105 w-full max-w-[900px] bg-gradient-to-br from-[#050008] to-[#151515] border-[0.5px] border-[#764BA2] opacity-90 rounded-2xl hover:shadow-[3px_4px_15px] shadow-[#764BA2] p-4 sm:p-6"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.1,
          }}
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-[#6E48AA] via-[#764BA2] to-[#9D50BB] font-bold italic pl-1 pb-3 text-xl sm:text-2xl md:text-3xl transition duration-300 ease-in transform hover:scale-105">
            Technical Skills
          </h2>

          {/* Responsive container for all cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {/* Programming Languages */}
              <SkillCard
                title="Programming Languages"
                icon={<FaLaptopCode className="text-[25px]" />}
                color="#6E48AA"
                bgFrom="#07000b"
                bgTo="#6E48AA"
                description="This section highlights the core coding languages. These are the fundamental tools I use to build software and algorithms."
                items={programmingLanguages}
              />

              {/* Embedded Systems */}
              <SkillCard
                title="Embedded Systems"
                icon={<FaMicrochip className="text-[25px]" />}
                color="#764BA2"
                bgFrom="#050008"
                bgTo="#764BA2"
                description='"Embedded Systems" refers to hardware-software integration, where you program microcontrollers to interact with real-world devices.'
                items={EmbeddedSkills}
              />

              {/* Tools & Technologies */}
              <SkillCard
                title="Tools & Technologies"
                icon={<FaTools className="text-[25px]" />}
                color="#9D50BB"
                bgFrom="#050008"
                bgTo="#9D50BB"
                description="This includes developer tools that support your workflow, such as version control (Git), containerization (Docker), design tools (Figma), and IDEs (VS Code, Qt Creator)."
                items={ToolsAndTechnologySkills}
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {/* Database */}
              <SkillCard
                title="Database"
                icon={<FaDatabase className="text-[25px]" />}
                color="#6E48AA"
                bgFrom="#050008"
                bgTo="#6E48AA"
                description="This section lists your skills in data storage technologies, which are essential for saving and retrieving information in web and software applications."
                items={DatabaseSkills}
              />

              {/* AI & Machine Learning */}
              <SkillCard
                title="AI & Machine Learning"
                icon={<GiArtificialIntelligence className="text-[25px]" />}
                color="#764BA2"
                bgFrom="#050008"
                bgTo="#764BA2"
                description="This title reflects experience in machine learning fields. It includes frameworks and libraries you use to build models for NLP, computer vision."
                items={AiMlSkills}
              />

              {/* Web Development */}
              <SkillCard
                title="Web Development"
                icon={<FaReact className="text-[25px]" />}
                color="#9D50BB"
                bgFrom="#050008"
                bgTo="#9D50BB"
                description="This section covers my skills in building websites and web apps, including only the frontend (what users see)."
                items={WebDevSkills}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* A reusable skill card component */
function SkillCard({ title, icon, color, bgFrom, bgTo, description, items }) {
  return (
    <div
      className={`transition duration-300 ease-in transform hover:scale-105 w-full bg-gradient-to-br from-[${bgFrom}] to-[${bgTo}] border border-[${color}] opacity-90 rounded-2xl hover:shadow-[3px_4px_5px] shadow-[${color}] p-4 sm:p-6`}
    >
      <div className={`flex items-center gap-3 text-[${color}] font-bold text-sm sm:text-[15px]`}>
        {icon}
        <h1 className="italic">{title}</h1>
      </div>
      <p className="text-[12px] text-white pt-1 pl-9">{description}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 pt-4 sm:pt-6 px-4 sm:px-6">
        {items.map((lang) => (
          <div
            key={lang.name}
            className={`bg-[${color}] rounded-[8px] shadow-md transition-all duration-300 p-1 flex items-center gap-1`}
          >
            {lang.icon}
            <p className="text-white text-[12px] tracking-wide">{lang.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
