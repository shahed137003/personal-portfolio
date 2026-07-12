import React, { useState } from "react";
import avatar from "../../assets/avataaars.png";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLaptopCode, FaCertificate, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { SiCoursera, SiReact, SiPython } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [activeCertCategory, setActiveCertCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const certCategories = ["All", "AI/ML & Data Science", "Web & Software Dev", "Engineering & Tools"];

  const certificates = [
    {
      title: "Cellula Technology Training (NLP)",
      source: "Internship Training",
      category: "AI/ML & Data Science",
      description:
        "Researched and implemented transformer-based models (BERT, DistilBERT, LLaMA Guard). Enhanced sentiment analysis and NER tasks with a 10% performance improvement over baselines.",
      icon: <FaLaptopCode />,
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/EcXq7biTanJEopbgpGO51bgBlKg6xPekPaJvIEZygabwmw?e=PU7gzl",
    },
    {
      title: "React & React Native Development",
      source: "ITI Internship",
      category: "Web & Software Dev",
      description:
        "Built dynamic user interfaces and cross-platform mobile applications with React & React Native while working on production-level projects.",
      icon: <SiReact />,
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/Ea0KEazQtCBAhj9KLt3BgPQBd2KvFEvKLqAMLn8cvwNuxQ?e=4A9C3I",
    },
    {
      title: "Cellula Technology Training (Computer Vision)",
      source: "Internship Training",
      category: "AI/ML & Data Science",
      description:
        "Designed and optimized CNN-based object detection models in TensorFlow and PyTorch for real-time computer vision workflows.",
      icon: <FaLaptopCode />,
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/EYKLfG5qYiRPt-OnnpmYkXYBEL6sOJdk2SgD597-rdD7yQ?e=nUt36H",
    },
    {
      title: "MATLAB Programming for Engineers",
      source: "Coursera",
      category: "Engineering & Tools",
      description:
        "Mastered MATLAB computation, data visualization, numerical modeling, and algorithm development for engineering applications.",
      icon: <SiCoursera />,
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/EXsuyG-PxdNHsG1T7Wbm6J4B0_cDT020yFNA_uARdqacyA?e=bb1cFe",
    },
    {
      title: "Python for Everybody Specialization",
      source: "Coursera / Univ. of Michigan",
      category: "AI/ML & Data Science",
      description:
        "Comprehensive Python specialization covering data structures, relational databases, web APIs, and data processing.",
      icon: <SiPython />,
      link: "https://engasuedu-my.sharepoint.com/:b:/g/personal/2100898_eng_asu_edu_eg/Ed9YmS-jMz5MmUPUvIJOL7kBO_35rVwIW3yBDJB894QMDg?e=SnQRCD",
    },
  ];

  const filteredCerts =
    activeCertCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCertCategory);

  const displayedCerts = showAll ? filteredCerts : filteredCerts.slice(0, 3);

  return (
    <section className="text-white relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16" id="aboutSection">
      {/* Title */}
      <motion.h1
        className="relative text-4xl sm:text-5xl md:text-[70px] font-extrabold font-serif text-center 
                   text-transparent bg-clip-text bg-gradient-to-r from-[#6E48AA] via-[#8E2DE2] to-[#A044FF] 
                   mb-12 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        About Me
        <span
          className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-32 h-[3px] rounded-full 
                     bg-gradient-to-r from-[#6E48AA] via-[#8E2DE2] to-[#A044FF] 
                     shadow-[0_0_15px_#A044FF] animate-pulse"
        />
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-10 justify-center items-stretch max-w-6xl mx-auto">
        {/* Avatar Card */}
        <motion.div
          className="flex flex-col justify-between w-full lg:w-96 bg-gradient-to-br from-[#120324]/90 to-[#070112]/90 border border-[#A044FF]/40 backdrop-blur-xl rounded-2xl p-7 shadow-xl hover:shadow-[0_0_35px_rgba(160,68,255,0.35)] transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6A3093] to-[#A044FF] blur-md opacity-60 animate-pulse" />
              <img
                src={avatar}
                alt="Shahd Mohamed Avatar"
                className="relative w-32 h-32 border-2 border-[#A044FF] bg-[#050008] rounded-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h2 className="text-center pt-4 text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E0B3FF] via-[#A044FF] to-[#C873FF]">
              Shahd Mohamed
            </h2>

            <p className="text-center text-gray-300 mt-2 text-sm sm:text-base leading-relaxed">
              <span className="text-[#E0B3FF] font-semibold">Computer Engineering</span> student at{" "}
              <span className="text-[#E0B3FF] font-semibold">Ain Shams University</span> focused on AI & Web Development.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#A044FF]/20 space-y-3.5 text-sm sm:text-base text-gray-300">
            <div className="flex items-center gap-3">
              <MdEmail className="text-[#A044FF] text-xl shrink-0" />
              <a
                href="mailto:Shahd137003@gmail.com"
                className="hover:text-[#E0B3FF] transition-colors truncate"
              >
                Shahd137003@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MdPhone className="text-[#A044FF] text-xl shrink-0" />
              <span>+20 1092968238</span>
            </div>

            <div className="flex items-center gap-3">
              <MdLocationOn className="text-[#A044FF] text-xl shrink-0" />
              <span>Cairo, Egypt</span>
            </div>
          </div>
        </motion.div>

        {/* Core Competencies Card */}
        <motion.div
          className="flex-1 bg-gradient-to-br from-[#120324]/90 to-[#070112]/90 border border-[#A044FF]/40 backdrop-blur-xl rounded-2xl p-7 sm:p-8 shadow-xl hover:shadow-[0_0_35px_rgba(160,68,255,0.35)] transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center gap-3 font-bold text-xl sm:text-2xl mb-6">
            <FaLaptopCode className="text-3xl text-[#A044FF] drop-shadow-[0_0_8px_#A044FF]" />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0B3FF] to-[#A044FF]">
              What Drives Me As a Computer Engineer
            </h2>
          </div>

          <ul className="space-y-4 text-sm sm:text-base">
            {[
              {
                title: "Machine Learning & AI Engineering",
                desc: "Experienced with transformers, BERT, DistilBERT, LLaMA Guard, and computer vision object detection.",
              },
              {
                title: "Full-Stack Web Development",
                desc: "Building highly interactive frontend applications in React & Tailwind CSS paired with robust backend services.",
              },
              {
                title: "Algorithmic Problem Solving",
                desc: "Active competitive programmer solving complex data structures and algorithms challenges on Codeforces & LeetCode.",
              },
              {
                title: "Software & System Architecture",
                desc: "Building CPU scheduling simulators, multithreaded systems, and distributed platforms using C++, Python, and C#.",
              },
              {
                title: "UI/UX & Human-Centered Design",
                desc: "Designing clean, responsive interfaces that make complex software feel accessible and enjoyable.",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="relative pl-6 text-gray-300 leading-relaxed group transition-all duration-300 hover:translate-x-1"
              >
                <span className="absolute left-0 top-1.5 text-[#A044FF]">
                  <FaCheckCircle className="text-xs" />
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E0B3FF] font-semibold">
                  {item.title}:
                </span>{" "}
                {item.desc}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Certificates & Achievements Section */}
      <motion.div
        className="mt-16 max-w-6xl mx-auto bg-gradient-to-br from-[#0f031e]/80 to-[#070112]/90 border border-[#A044FF]/40 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 font-extrabold text-2xl sm:text-3xl">
            <FaCertificate className="text-3xl sm:text-4xl text-[#A044FF] drop-shadow-[0_0_10px_#A044FF]" />
            <h2 className="bg-gradient-to-r from-white via-[#E0B3FF] to-[#A044FF] text-transparent bg-clip-text">
              Certificates & Achievements
            </h2>
          </div>

          {/* Certificate Category Filter */}
          <div className="flex flex-wrap gap-2">
            {certCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCertCategory(cat);
                  setShowAll(false);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCertCategory === cat
                    ? "bg-gradient-to-r from-[#6A3093] to-[#A044FF] text-white shadow-md"
                    : "bg-[#180630]/60 text-gray-300 hover:text-white border border-[#A044FF]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert, i) => (
              <motion.div
                key={cert.title + i}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col justify-between bg-gradient-to-br from-[#16052b]/90 to-[#0a0117]/90 rounded-2xl p-6 border border-[#A044FF]/30 hover:border-[#A044FF] shadow-lg hover:shadow-[0_0_25px_rgba(160,68,255,0.4)] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[#A044FF] text-3xl drop-shadow-[0_0_10px_#A044FF]">
                      {cert.icon}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#A044FF]/20 text-[#E0B3FF] border border-[#A044FF]/30">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg leading-snug group-hover:text-[#E0B3FF] transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-[#A044FF] font-medium italic mt-1">
                    {cert.source}
                  </p>

                  <p className="text-gray-300 text-sm leading-relaxed mt-3">
                    {cert.description}
                  </p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#6A3093] to-[#A044FF] hover:shadow-[0_0_15px_rgba(160,68,255,0.7)] transition-all"
                >
                  <span>Verify Certificate</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCerts.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 bg-[#1f093b] hover:bg-[#6A3093] text-white font-semibold rounded-full border border-[#A044FF]/40 shadow-md transition-all"
            >
              {showAll ? "Show Less" : `View All (${filteredCerts.length})`}
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
