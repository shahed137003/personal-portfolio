import React, { useRef, useState } from "react";
import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaRegCommentDots,
} from "react-icons/fa";
import { FiSend, FiUser, FiMail, FiTag, FiEdit } from "react-icons/fi";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const formRef = useRef();
  const [copiedLabel, setCopiedLabel] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("AI & NLP Projects");

  const topics = [
    "AI & NLP Projects",
    "Full-Stack Web Dev",
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
          theme: "dark",
          style: {
            background: "#1e083c",
            border: "1px solid #A044FF",
            color: "#E0B3FF",
            borderRadius: "14px",
          },
        });
        e.target.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please email Shahd137003@gmail.com directly.", {
          position: "bottom-right",
          autoClose: 4000,
          theme: "dark",
          style: {
            background: "#1e083c",
            border: "1px solid #A044FF",
            color: "#E0B3FF",
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
      theme: "dark",
      style: {
        background: "#1e083c",
        border: "1px solid #A044FF",
        color: "#E0B3FF",
        borderRadius: "12px",
      },
    });
    setTimeout(() => setCopiedLabel(null), 2500);
  };

  const contactCards = [
    {
      icon: <MdEmail className="text-2xl text-[#E0B3FF]" />,
      title: "Email Address",
      value: "Shahd137003@gmail.com",
      actionText: copiedLabel === "Email" ? "Copied" : "Copy",
      onClick: () => copyToClipboard("Shahd137003@gmail.com", "Email"),
    },
    {
      icon: <MdPhone className="text-2xl text-[#A044FF]" />,
      title: "Phone Number",
      value: "+20 1092968238",
      actionText: copiedLabel === "Phone" ? "Copied" : "Copy",
      onClick: () => copyToClipboard("+20 1092968238", "Phone"),
    },
    {
      icon: <MdLocationOn className="text-2xl text-[#E0B3FF]" />,
      title: "Location",
      value: "Cairo, Egypt",
      actionText: "Remote / On-site",
      onClick: null,
    },
  ];

  return (
    <section className="text-white relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16" id="contactSection">
      <ToastContainer />

      {/* Pure Purple Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#6A3093]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-[#A044FF]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e083c] border border-[#A044FF]/40 text-xs sm:text-sm font-semibold text-[#E0B3FF] mb-3 shadow-[0_0_15px_rgba(160,68,255,0.3)]">
          Get In Touch
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-[66px] font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0B3FF] to-[#A044FF] tracking-wide">
          Let's Work Together
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base mt-3">
          Feel free to reach out for AI engineering collaborations, full-stack web development projects, or career opportunities.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* LEFT COLUMN (5 COLS): PURPLE DIRECT CONTACT CARDS & SOCIALS */}
        <motion.div
          className="lg:col-span-5 space-y-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#180630]/95 to-[#0e021e]/95 border border-[#A044FF]/40 rounded-3xl p-6 sm:p-7 shadow-xl">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E0B3FF] mb-5">
              Contact Information
            </h3>

            <div className="space-y-3.5">
              {contactCards.map((card, idx) => (
                <div
                  key={idx}
                  onClick={card.onClick}
                  className={`p-4 rounded-2xl bg-[#130326] border border-[#A044FF]/30 hover:border-[#A044FF] transition-all flex items-center justify-between ${
                    card.onClick ? "cursor-pointer group" : ""
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-[#1e083c] border border-[#A044FF]/40">
                      {card.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider">
                        {card.title}
                      </span>
                      <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#E0B3FF] transition-colors">
                        {card.value}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1e083c] text-[#E0B3FF] border border-[#A044FF]/30 shrink-0">
                    {card.actionText}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Profiles Card */}
          <div className="bg-gradient-to-br from-[#180630]/95 to-[#0e021e]/95 border border-[#A044FF]/40 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-4">
              Connect on Social Media
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/shahed137003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-[#130326] border border-[#A044FF]/35 hover:border-[#A044FF] text-white hover:text-[#E0B3FF] font-semibold text-xs sm:text-sm transition-all"
              >
                <FaGithub className="text-lg text-[#E0B3FF]" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/shahd-mohamed-2ab8bb315"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-[#130326] border border-[#A044FF]/35 hover:border-[#A044FF] text-white hover:text-[#E0B3FF] font-semibold text-xs sm:text-sm transition-all"
              >
                <FaLinkedin className="text-lg text-[#E0B3FF]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN (7 COLS): PURE PURPLE MODERN MESSAGE FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="lg:col-span-7 bg-gradient-to-br from-[#180630]/95 to-[#0e021e]/95 border border-[#A044FF]/45 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 text-2xl sm:text-3xl font-bold mb-6">
            <FaRegCommentDots className="text-[#A044FF] text-3xl" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#E0B3FF] to-[#A044FF]">
              Send Me a Message
            </span>
          </div>

          {/* Interactive Purple Topic Selector */}
          <div className="mb-6">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#E0B3FF] mb-2.5">
              Inquiry Topic
            </label>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <button
                  type="button"
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedTopic === topic
                      ? "bg-gradient-to-r from-[#6A3093] to-[#A044FF] text-white shadow-[0_0_15px_rgba(160,68,255,0.6)] border border-[#E0B3FF]/40"
                      : "bg-[#130326] text-purple-200 border border-[#A044FF]/30 hover:border-[#A044FF]"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <input type="hidden" name="inquiry_topic" value={selectedTopic} />

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#E0B3FF] mb-1.5">
                  Your Name *
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400" />
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f021e]/90 border border-[#A044FF]/35 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E0B3FF] focus:shadow-[0_0_15px_rgba(160,68,255,0.4)] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#E0B3FF] mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400" />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="name@example.com"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f021e]/90 border border-[#A044FF]/35 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E0B3FF] focus:shadow-[0_0_15px_rgba(160,68,255,0.4)] transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#E0B3FF] mb-1.5">
                Subject
              </label>
              <div className="relative">
                <FiTag className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400" />
                <input
                  type="text"
                  name="subject"
                  defaultValue={selectedTopic}
                  placeholder="Subject or project title"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f021e]/90 border border-[#A044FF]/35 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E0B3FF] focus:shadow-[0_0_15px_rgba(160,68,255,0.4)] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#E0B3FF] mb-1.5">
                Message *
              </label>
              <div className="relative">
                <FiEdit className="absolute left-3.5 top-3.5 text-purple-400" />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project, ideas, or opportunity..."
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f021e]/90 border border-[#A044FF]/35 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E0B3FF] focus:shadow-[0_0_15px_rgba(160,68,255,0.4)] transition-all resize-none"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#6A3093] via-[#8E2DE2] to-[#A044FF] text-white font-bold shadow-[0_0_20px_rgba(160,68,255,0.6)] hover:shadow-[0_0_30px_rgba(224,179,255,0.8)] transition-all"
            >
              <FiSend className="text-lg" /> Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
