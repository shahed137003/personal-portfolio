import React from 'react'
import {
  FaLaptopCode, FaMicrochip, FaTools, FaDatabase, FaReact, FaPython, FaJava,
  FaHtml5, FaCss3Alt, FaCuttlefish, FaJsSquare, FaGitAlt, FaGithub, FaCode,
  FaBrain, FaJs, FaUsers, FaComments, FaLightbulb, FaProjectDiagram, FaUserFriends, FaLanguage
} from "react-icons/fa";
import { GiArtificialIntelligence, GiProcessor } from 'react-icons/gi';
import { TbTopologyStar3 } from "react-icons/tb";
import { MdGpsFixed } from "react-icons/md";
import { BsUsbPlug } from "react-icons/bs";
import {
  SiCplusplus, SiArduino, SiAnaconda, SiMysql, SiMongodb, SiPostgresql,
  SiFirebase, SiTensorflow, SiPytorch, SiScikitlearn, SiNumpy, SiPandas,
  SiJupyter, SiKeras, SiTailwindcss, SiDjango, SiTypescript
} from "react-icons/si";
import { motion } from 'framer-motion';

// ================= Technical Skills ===================
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
  { name: "VS Code", icon: <FaCode className="text-white text-xl" /> },
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

// ================= Non-Technical Skills ===================
const NonTechnicalSkills = [
  { name: "Teamwork", icon: <FaUsers className="text-white text-xl" />, details: "Led group projects and collaborated effectively." },
  { name: "Communication", icon: <FaComments className="text-white text-xl" />, details: "Strong verbal and written communication skills." },
  { name: "Problem Solving", icon: <FaLightbulb className="text-white text-xl" />, details: "Creative thinker with structured problem-solving approach." },
  { name: "Leadership", icon: <FaUserFriends className="text-white text-xl" />, details: "Experience in guiding and motivating teams." },
  { name: "Project Management", icon: <FaProjectDiagram className="text-white text-xl" />, details: "Skilled at planning, scheduling, and task delegation." },
];

const LanguageSkills = [
  { name: "Arabic", level: 100, color: "from-green-400 to-green-600", details: "Native language with full professional proficiency", flag: "/flags/egypt.png" },
  { name: "English", level: 85, color: "from-blue-400 to-blue-600", details: "Fluent with academic & business communication skills", flag: "/flags/uk.png" },
  { name: "French", level: 40, color: "from-purple-400 to-purple-600", details: "Beginner conversational skills", flag: "/flags/france.png" },
];

export default function Skills() {
  return (
    <div className="text-white relative z-10 w-full px-4 py-10" id="skillSection">
      {/* Title */}
  <motion.h1
  className="relative text-4xl sm:text-5xl md:text-[70px] font-extrabold font-serif text-center 
             text-transparent bg-clip-text bg-gradient-to-r from-[#6E48AA] via-[#764BA2] to-[#9D50BB] 
             mb-12 tracking-wide"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
  Skills

  {/* Underline Glow */}
  <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-28 sm:w-36 h-[3px] rounded-full 
                   bg-gradient-to-r from-[#6E48AA] via-[#764BA2] to-[#9D50BB] 
                   shadow-[0_0_12px_#9D50BB] animate-pulse" />
</motion.h1>


      <div className="flex flex-col gap-10 items-center">
      <motion.div
  className="transition-transform duration-200 ease-in hover:scale-[1.02] w-full max-w-[900px] bg-gradient-to-br from-[#050008e4] to-[#0e001ae3] border border-[#6A3093]/50 opacity-90 rounded-2xl hover:shadow-[3px_4px_15px_#764BA2] p-4 sm:p-6"
  initial={{ opacity: 0, scale: 0.95, y: 30 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.05 }}
>
  <h2
    className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#6E48AA] via-[#764BA2] to-[#9D50BB] 
               font-extrabold italic pl-1 pb-3 text-xl sm:text-2xl md:text-3xl 
               drop-shadow-[0_0_8px_rgba(157,80,187,0.7)] 
               hover:drop-shadow-[0_0_15px_rgba(157,80,187,1)] 
               tracking-wide transition duration-300 ease-in-out"
  >
    Technical Skills
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    {/* Left Column */}
    <div className="flex flex-col gap-4">
      <SkillCard 
        title="Programming Languages" 
        icon={<FaLaptopCode className="text-[25px]" />} 
        color="#6E48AA" 
        bgFrom="#07000b" 
        bgTo="#6E48AA" 
        description="Core coding languages I use to build software and algorithms." 
        items={programmingLanguages} 
        minHeight="h-[150px]" 
      />
      <SkillCard 
        title="Embedded Systems" 
        icon={<FaMicrochip className="text-[25px]" />} 
        color="#764BA2" 
        bgFrom="#050008" 
        bgTo="#764BA2" 
        description="Hardware-software integration for microcontrollers and devices." 
        items={EmbeddedSkills} 
        minHeight="h-[50px]" 
      />
      <SkillCard 
        title="Tools & Technologies" 
        icon={<FaTools className="text-[25px]" />} 
        color="#9D50BB" 
        bgFrom="#050008" 
        bgTo="#9D50BB" 
        description="Developer tools supporting workflow, version control, and IDEs." 
        items={ToolsAndTechnologySkills} 
        minHeight="h-[50px]" 
      />
    </div>

    {/* Right Column */}
    <div className="flex flex-col gap-4">
      <SkillCard 
        title="Database" 
        icon={<FaDatabase className="text-[25px]" />} 
        color="#6E48AA" 
        bgFrom="#050008" 
        bgTo="#6E48AA" 
        description="Data storage technologies for applications." 
        items={DatabaseSkills} 
        minHeight="h-[50px]" 
      />
      <SkillCard 
        title="AI & Machine Learning" 
        icon={<GiArtificialIntelligence className="text-[25px]" />} 
        color="#764BA2" 
        bgFrom="#050008" 
        bgTo="#764BA2" 
        description="ML frameworks and libraries for AI projects." 
        items={AiMlSkills} 
        minHeight="h-[50px]" 
      />
      <SkillCard 
        title="Web Development" 
        icon={<FaReact className="text-[25px]" />} 
        color="#9D50BB" 
        bgFrom="#050008" 
        bgTo="#9D50BB" 
        description="Frontend web development for responsive UIs." 
        items={WebDevSkills} 
        minHeight="h-[50px]" 
      />
    </div>
  </div>
</motion.div>


        {/* Non-Technical Skills */}
        <motion.div
          className="transition-transform duration-200 ease-in hover:scale-[1.02] w-full max-w-[900px] bg-gradient-to-br from-[#050008e4] to-[#0e001ae3] border border-[#6A3093]/50 opacity-90 rounded-2xl hover:shadow-[3px_4px_15px_#A044FF] p-4 sm:p-6"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.05 }}
        >
       <h2
  className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#6E48AA] via-[#764BA2] to-[#9D50BB] 
             font-extrabold italic pl-1 pb-3 text-xl sm:text-2xl md:text-3xl 
             drop-shadow-[0_0_8px_rgba(157,80,187,0.7)] 
             hover:drop-shadow-[0_0_15px_rgba(157,80,187,1)] 
             tracking-wide transition duration-300 ease-in-out"
>
  Non-Technical Skills
</h2>


          <div className="flex flex-wrap gap-3">
            {NonTechnicalSkills.map((skill, i) => (
              <motion.div
                key={i}
                className="px-3 py-2 bg-gradient-to-br from-[#050008]  to-[#6E48AA] border border-[#6E48AA] rounded-xl flex items-center gap-2 text-sm cursor-pointer hover:bg-[#6A3093]/70 transition relative"
                whileHover={{ scale: 1.1 }}
              >
                {skill.icon}
                <span>{skill.name}</span>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition text-xs bg-[#764BA2] text-white px-2 py-1 rounded">
                  {skill.details}
                </div>
              </motion.div>
            ))}
          </div>

       {/* Languages Section */}
<div className="mt-10 border-t-2 border-[#764BA2] rounded-2xl p-6 bg-[#0b0016]/50 shadow-lg shadow-[#6E48AA]/30">
  {/* Title */}
  <div className="flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6E48AA] via-[#764BA2] to-[#9D50BB] 
                  font-extrabold text-xl sm:text-2xl mb-6 drop-shadow-[0_0_10px_rgba(157,80,187,0.8)]">
    <FaLanguage className="text-3xl text-[#9D50BB] animate-pulse" />
    <h2 className="tracking-wide">Languages</h2>
  </div>

  {/* Languages List */}
  <div className="space-y-6">
    {LanguageSkills.map((lang, i) => (
      <motion.div
        key={i}
        className="w-full group"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
      >
        {/* Language Name & Level */}
        <div className="flex justify-between items-center text-sm sm:text-base text-gray-200 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold group-hover:text-[#9D50BB] transition-colors duration-300">
              {lang.name}
            </span>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.3 }}
            className="text-[#9D50BB] font-medium"
          >
            {lang.level}%
          </motion.span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-gray-800/70 rounded-full overflow-hidden relative shadow-inner">
          <motion.div
            className={`h-3 bg-gradient-to-r ${lang.color} rounded-full shadow-lg shadow-[#6E48AA]/40`}
            initial={{ width: 0 }}
            whileInView={{ width: `${lang.level}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Glow effect inside the progress bar */}
            <div className="absolute inset-0 bg-white/20 blur-md animate-pulse"></div>
          </motion.div>
        </div>
      </motion.div>
    ))}
  </div>
</div>

        </motion.div>
      </div>
    </div>
  );
}

// Reusable SkillCard
function SkillCard({ title, icon, color, bgFrom, bgTo, description, items }) {
  return (
    <motion.div
      className="rounded-2xl p-4 sm:p-6 cursor-pointer"
      style={{
        background: `linear-gradient(to bottom right, ${bgFrom}, ${bgTo})`,
        border: `1px solid ${color}`,
        opacity: 0.9,
      }}
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.02, rotate: 0.5 }}
      transition={{ type: "spring", stiffness: 140, damping: 12 }}
    >
      <div className="flex items-center gap-3 font-bold text-sm sm:text-[15px]" style={{ color }}>
        {icon}
        <h1 className="italic">{title}</h1>
      </div>
      <p className="text-[12px] text-white pt-1 pl-9">{description}</p>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-1 pt-4 sm:pt-6 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, ease: "easeInOut" }
          }
        }}
      >
        {items.map((lang) => (
          <motion.div
            key={lang.name}
            className="rounded-[8px] p-1 flex items-center gap-1 cursor-pointer"
            style={{ backgroundColor: color }}
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 15 },
              visible: { opacity: 1, scale: 1, y: 0 }
            }}
            whileHover={{ y: -5, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          >
            {lang.icon}
            <p className="text-white text-[12px] tracking-wide">{lang.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
