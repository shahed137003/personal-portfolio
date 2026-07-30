import React, { useRef, useState } from "react";
import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaCopy,
  FaCheck,
  FaPaperPlane,
} from "react-icons/fa";
import { FiSend, FiUser, FiMail, FiTag, FiEdit } from "react-icons/fi";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../../context/ThemeContext";

export default function Contact() {
  const formRef = useRef();
  const [copiedLabel, setCopiedLabel] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("Frontend & React Projects");
  const { isDarkMode } = useTheme();

  const topics = [
    "Frontend & React Projects",
    "UI/UX & Web Development",
    "Full-Time / Internships",
    "General Inquiry",
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        formRef.current,
        "your_public_key"
      )
      .then(() => {
        toast.success("Message sent successfully! I will reply soon.", {
          position: "bottom-right",
          autoClose: 3500,
          theme: isDarkMode ? "dark" : "light",
          style: {
            background: isDarkMode ? "#180510" : "#ffe4e6",
            border: isDarkMode ? "1px solid #FF007A" : "1px solid #be123c",
            color: isDarkMode ? "#FDA4AF" : "#4c0519",
            borderRadius: "14px",
          },
        });
        e.target.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please email Shahd137003@gmail.com directly.", {
          position: "bottom-right",
          autoClose: 4000,
          theme: isDarkMode ? "dark" : "light",
          style: {
            background: isDarkMode ? "#180510" : "#ffe4e6",
            border: isDarkMode ? "1px solid #FF007A" : "1px solid #be123c",
            color: isDarkMode ? "#FDA4AF" : "#4c0519",
            borderRadius: "14px",
          },
        });
      });
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    toast.info(`Copied ${label} to clipboard`, {
      position: "bottom-right",
      autoClose: 2000,
      theme: isDarkMode ? "dark" : "light",
      style: {
        background: isDarkMode ? "#180510" : "#ffe4e6",
        border: isDarkMode ? "1px solid #FF007A" : "1px solid #be123c",
        color: isDarkMode ? "#FDA4AF" : "#4c0519",
        borderRadius: "12px",
      },
    });
    setTimeout(() => setCopiedLabel(null), 2500);
  };

  const contactCards = [
    {
      icon: <MdEmail className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#be123c]"}`} />,
      title: "Email Address",
      value: "Shahd137003@gmail.com",
      actionText: copiedLabel === "Email" ? "Copied" : "Copy",
      onClick: () => copyToClipboard("Shahd137003@gmail.com", "Email"),
    },
    {
      icon: <MdPhone className={`text-2xl ${isDarkMode ? "text-[#FF007A]" : "text-[#BE123C]"}`} />,
      title: "Phone Number",
      value: "+20 1092968238",
      actionText: copiedLabel === "Phone" ? "Copied" : "Copy",
      onClick: () => copyToClipboard("+20 1092968238", "Phone"),
    },
    {
      icon: <MdLocationOn className={`text-2xl ${isDarkMode ? "text-[#FDA4AF]" : "text-[#be123c]"}`} />,
      title: "Location",
      value: "Cairo, Egypt",
      actionText: "Remote / On-site",
      onClick: null,
    },
  ];

  return (
    <section className={`relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16 transition-colors duration-500 ${
      isDarkMode ? "text-white" : "text-[#2e0854]"
    }`} id="contactSection">
      <ToastContainer />

      {/* Rose Carmine Ambient Background Glows */}
      <div className={`absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
        isDarkMode ? "bg-[#FF007A]/25" : "bg-[#fda4af]/20"
      }`} />
      <div className={`absolute bottom-1/3 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDarkMode ? "bg-[#E01E5A]/20" : "bg-[#fecdd3]/15"
      }`} />

      {/* Section Title */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className={`inline-block px-4 py-1.5 rounded-full border text-xs sm:text-sm font-semibold mb-3 shadow-sm ${
          isDarkMode
            ? "bg-[#10030a] border-[#FF007A]/40 text-[#FDA4AF] shadow-[0_0_15px_rgba(255,0,122,0.3)]"
            : "bg-[#ffe4e6] border-[#be123c]/30 text-[#800020]"
        }`}>
          Get In Touch
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-[66px] font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-[#FF007A] to-[#E01E5A] dark:from-white dark:via-[#FDA4AF] dark:to-[#FF007A] tracking-wide">
          Let's Work Together
        </h1>
        <p className={`max-w-2xl mx-auto text-sm sm:text-base mt-3 ${
          isDarkMode ? "text-gray-300" : "text-[#881337]"
        }`}>
          Feel free to reach out for Frontend engineering collaborations, React web projects, or career opportunities.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* LEFT COLUMN (5 COLS) */}
        <motion.div
          className="lg:col-span-5 space-y-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={`rounded-3xl p-6 sm:p-7 border backdrop-blur-sm shadow-sm ${
            isDarkMode
              ? "bg-[#10030a]/10 border-[#FF007A]/15 shadow-[0_4px_20px_rgba(255,0,122,0.05)]"
              : "bg-white/12 border-[#be123c]/10 shadow-[0_4px_15px_rgba(225,29,72,0.03)]"
          }`}>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E01E5A] to-[#FF007A] dark:from-white dark:to-[#FDA4AF] mb-5">
              Contact Information
            </h3>

            <div className="space-y-3.5">
              {contactCards.map((card, idx) => (
                <div
                  key={idx}
                  onClick={card.onClick}
                  className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    isDarkMode
                      ? "bg-[#10030a]/20 border-[#FF007A]/20 hover:border-[#FF007A]"
                      : "bg-[#fff1f2]/30 border-[#be123c]/20 hover:border-[#e11d48]"
                  } ${card.onClick ? "cursor-pointer group" : ""}`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-3 rounded-xl border ${
                      isDarkMode ? "bg-[#10030a]/60 border-[#FF007A]/30" : "bg-[#ffe4e6]/60 border-[#be123c]/20"
                    }`}>
                      {card.icon}
                    </div>
                    <div>
                      <span className={`text-[11px] font-semibold uppercase tracking-wider ${
                        isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                      }`}>
                        {card.title}
                      </span>
                      <p className={`text-sm sm:text-base font-bold transition-colors ${
                        isDarkMode ? "text-white group-hover:text-[#FDA4AF]" : "text-[#4c0519] group-hover:text-[#be123c]"
                      }`}>
                        {card.value}
                      </p>
                    </div>
                  </div>

                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border shrink-0 ${
                    isDarkMode ? "bg-[#10030a]/60 text-[#FDA4AF] border-[#FF007A]/30" : "bg-[#ffe4e6]/60 text-[#800020] border-[#be123c]/30"
                  }`}>
                    {card.actionText}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Profiles Card */}
          <div className={`rounded-3xl p-6 border backdrop-blur-sm shadow-sm ${
            isDarkMode
              ? "bg-[#10030a]/10 border-[#FF007A]/15 shadow-[0_4px_20px_rgba(255,0,122,0.05)]"
              : "bg-white/12 border-[#be123c]/10 shadow-[0_4px_15px_rgba(225,29,72,0.03)]"
          }`}>
            <h3 className={`text-lg font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-[#4c0519]"
            }`}>
              Connect on Social Media
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/shahed137003"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2.5 p-3.5 rounded-2xl border font-semibold text-xs sm:text-sm transition-all ${
                  isDarkMode
                    ? "bg-[#10030a]/30 border-[#FF007A]/25 hover:border-[#FF007A] text-white hover:text-[#FDA4AF]"
                    : "bg-[#fff1f2]/40 border-[#be123c]/20 hover:border-[#e11d48] text-[#4c0519] hover:text-[#BE123C]"
                }`}
              >
                <FaGithub className={`text-lg ${isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"}`} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/shahd-mohamed-883a4b248/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2.5 p-3.5 rounded-2xl border font-semibold text-xs sm:text-sm transition-all ${
                  isDarkMode
                    ? "bg-[#10030a]/30 border-[#FF007A]/25 hover:border-[#FF007A] text-white hover:text-[#FDA4AF]"
                    : "bg-[#fff1f2]/40 border-[#be123c]/20 hover:border-[#e11d48] text-[#4c0519] hover:text-[#BE123C]"
                }`}
              >
                <FaLinkedin className={`text-lg ${isDarkMode ? "text-[#FF007A]" : "text-[#BE123C]"}`} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN (7 COLS): INTERACTIVE MESSAGE FORM */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={`rounded-3xl p-6 sm:p-8 border backdrop-blur-sm shadow-sm ${
            isDarkMode
              ? "bg-[#10030a]/10 border-[#FF007A]/15 shadow-[0_4px_20px_rgba(255,0,122,0.05)]"
              : "bg-white/12 border-[#be123c]/10 shadow-[0_4px_15px_rgba(225,29,72,0.03)]"
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                }`}>
                  Send A Direct Message
                </span>
                <h3 className={`text-xl sm:text-2xl font-bold mt-1 ${
                  isDarkMode ? "text-white" : "text-[#4c0519]"
                }`}>
                  Interactive Contact Portal
                </h3>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                isDarkMode ? "bg-[#10030a] text-[#FDA4AF] border-[#FF007A]/30" : "bg-[#ffe4e6] text-[#BE123C] border-[#be123c]/30"
              }`}>
                Instant Reply
              </span>
            </div>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              {/* Topic Select Capsules */}
              <div>
                <label className={`block text-xs font-semibold uppercase mb-2 ${
                  isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                }`}>
                  Project Topic / Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTopic(t)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedTopic === t
                          ? "bg-gradient-to-r from-[#E01E5A] to-[#FF007A] text-white shadow-md"
                          : isDarkMode
                          ? "bg-[#10030a] text-[#FDA4AF] border border-[#FF007A]/30 hover:border-[#FF007A]"
                          : "bg-[#ffe4e6] text-[#BE123C] border border-[#be123c]/30 hover:border-[#be123c]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="user_topic" value={selectedTopic} />
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-semibold uppercase mb-1.5 ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                      isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                    }`} />
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="Jane Doe"
                      className={`w-full pl-11 pr-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none ${
                        isDarkMode
                          ? "bg-[#10030a] border-[#FF007A]/35 text-white placeholder-pink-400 focus:border-[#FDA4AF]"
                          : "bg-[#ffffff] border-[#be123c]/35 text-[#4c0519] placeholder-pink-400 focus:border-[#be123c]"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold uppercase mb-1.5 ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`}>
                    Your Email
                  </label>
                  <div className="relative">
                    <FiMail className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                      isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                    }`} />
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="jane@example.com"
                      className={`w-full pl-11 pr-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none ${
                        isDarkMode
                          ? "bg-[#10030a] border-[#FF007A]/35 text-white placeholder-pink-400 focus:border-[#FDA4AF]"
                          : "bg-[#ffffff] border-[#be123c]/35 text-[#4c0519] placeholder-pink-400 focus:border-[#be123c]"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label className={`block text-xs font-semibold uppercase mb-1.5 ${
                  isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                }`}>
                  Your Message
                </label>
                <div className="relative">
                  <FiEdit className={`absolute left-4 top-4 ${
                    isDarkMode ? "text-[#FDA4AF]" : "text-[#BE123C]"
                  }`} />
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell me about your project or frontend goals..."
                    className={`w-full pl-11 pr-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none ${
                      isDarkMode
                        ? "bg-[#10030a] border-[#FF007A]/35 text-white placeholder-pink-400 focus:border-[#FDA4AF]"
                        : "bg-[#ffffff] border-[#be123c]/35 text-[#4c0519] placeholder-pink-400 focus:border-[#be123c]"
                    }`}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#E01E5A] via-[#F43F5E] to-[#FF007A] text-white font-bold text-sm shadow-[0_0_20px_rgba(255,0,122,0.5)] hover:shadow-[0_0_30px_rgba(255,0,122,0.8)] transition-all flex items-center justify-center gap-2 mt-2"
              >
                <FaPaperPlane />
                <span>Send Message to Shahd</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
