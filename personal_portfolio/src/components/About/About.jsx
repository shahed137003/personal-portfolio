import React from 'react';
import avatar from '../../assets/avataaars.png';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaLaptopCode } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="text-white relative z-10 w-full px-4 py-16" id="aboutSection">
      <motion.h1
        className="text-[40px] sm:text-[50px] lg:text-[70px] font-bold font-serif text-center text-transparent bg-clip-text bg-gradient-to-bl from-[#6A3093] to-[#A044FF] mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        About Me
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-15 justify-center items-center">
        
        {/* Avatar Card */}
        <motion.div
          className="transition duration-300 ease-in transform hover:scale-105 w-full max-w-sm bg-gradient-to-br from-[#050008] to-[#6A3093] border border-[#6A3093] opacity-90 rounded-2xl hover:shadow-[3px_4px_15px] shadow-[#6A3093] p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={avatar}
            alt="Avatar"
            className="w-28 h-28 sm:w-32 sm:h-32 border-[2.5px] border-[#6A3093] bg-[#050008] rounded-full mx-auto mt-2 transition duration-300 ease-in transform hover:scale-110"
          />

          <h1 className="text-center pt-4 text-2xl sm:text-3xl text-[#6A3093] font-bold">Shahd Mohamed</h1>

          <p className="text-center text-white mt-3 text-base sm:text-lg leading-relaxed">
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
          className="transition duration-300 ease-in transform hover:scale-105 w-full lg:max-w-2xl bg-gradient-to-br from-[#050008] to-[#6A3093] border border-[#6A3093] opacity-90 rounded-2xl hover:shadow-[3px_4px_15px] shadow-[#6A3093] p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.15
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className='flex items-center gap-3 text-[#6A3093] font-bold text-xl sm:text-2xl'>
            <FaLaptopCode className='text-3xl sm:text-4xl' />
            <h1>What Drives Me as a Computer Engineer</h1>
          </div>

          <ul className='mt-5 list-disc leading-7 pl-6 sm:pl-10 lg:pl-20 marker:text-[#6A3093] text-sm sm:text-base'>
            <li><span className='text-[#6A3093]'> Web Development</span> — I build clean, responsive, and interactive user interfaces using React, Tailwind CSS, and JavaScript.</li>
            <li><span className='text-[#6A3093]'> Machine Learning & AI</span> — Projects in NLP and Computer Vision, including ethical moderation systems using DistilBERT and LLaMA Guard.</li>
            <li><span className='text-[#6A3093]'> Problem Solving</span> — Active problem solver on Codeforces, HackerRank, and LeetCode, sharpening algorithmic thinking.</li>
            <li><span className='text-[#6A3093]'> Software Engineering</span> — Proficient in Java, Python, and C++ — built scheduling visualizers, multithreaded systems, and distributed applications.</li>
            <li><span className='text-[#6A3093]'> UI/UX Design</span> — I explore user-centered design to improve usability and visual appeal.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
