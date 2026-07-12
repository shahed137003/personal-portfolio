import React, { useRef, useState } from "react";
import {
  FaRegCommentDots,
  FaGithub,
  FaLinkedin,
  FaClock,
  FaHandshake,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { FiSend, FiUser, FiMail, FiTag, FiEdit } from "react-icons/fi";
import { MdEmail, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();
  const [copiedText, setCopiedText] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(() => {
        toast.success("✅ Message sent successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          theme: "colored",
          style: {
            background: "linear-gradient(to right, #6A3093, #A044FF)",
            color: "#fff",
            borderRadius: "12px",
          },
        });
        e.target.reset();
      })
      .catch(() => {
        toast.error("❌ Failed to send message. Please try again.", {
          position: "bottom-right",
          autoClose: 4000,
          theme: "colored",
          style: {
            background: "linear-gradient(to right, #A044FF, #6A3093)",
            color: "#fff",
            borderRadius: "12px",
          },
        });
      });
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    toast.info(`📋 Copied ${label} to clipboard!`, {
      position: "bottom-right",
      autoClose: 2000,
      theme: "dark",
    });
    setTimeout(() => setCopiedText(null), 2500);
  };

  const contactItems = [
    {
      icon: <MdPhone />,
      title: "Phone",
      value: "+20 1092968238",
      color: "#A044FF",
      gradient: "from-[#0D0017] to-[#A044FF]",
      onClick: () => copyToClipboard("+20 1092968238", "Phone Number"),
    },
    {
      icon: <MdEmail />,
      title: "Email",
      value: "Shahd137003@gmail.com",
      link: "mailto:Shahd137003@gmail.com",
      color: "#6A3093",
      gradient: "from-[#0D0017] to-[#6A3093]",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/shahed137003",
      link: "https://github.com/shahed137003",
      color: "#A044FF",
      gradient: "from-[#0D0017] to-[#A044FF]",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/shahd-mohamed-2ab8bb315",
      link: "https://www.linkedin.com/in/shahd-mohamed-2ab8bb315",
      color: "#6A3093",
      gradient: "from-[#0D0017] to-[#6A3093]",
    },
    {
      icon: <FaClock />,
      title: "Response Time",
      value: "Within 24 hours",
      color: "#FFD700",
      gradient: "from-[#0D0017] to-[#FFD700]",
    },
    {
      icon: <FaHandshake />,
      title: "Collaboration",
      value: "Open to AI & Web projects",
      color: "#00C9A7",
      gradient: "from-[#0D0017] to-[#00C9A7]",
    },
  ];

  const inputFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      name: "user_name",
      icon: <FiUser />,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email address",
      name: "user_email",
      icon: <FiMail />,
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "Project inquiry or greeting",
      name: "subject",
      icon: <FiTag />,
    },
  ];

  return (
    <section
      className="text-white w-full px-4 sm:px-8 lg:px-16 py-16"
      id="contactSection"
    >
      <ToastContainer />

      {/* Section Heading */}
      <motion.h1
        className="relative text-4xl sm:text-5xl md:text-[70px] font-extrabold font-serif text-center 
                   text-transparent bg-clip-text bg-gradient-to-r from-[#6E48AA] via-[#8E2DE2] to-[#A044FF] 
                   mb-12 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Get In Touch
        <span
          className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-28 sm:w-36 h-[3px] rounded-full 
                     bg-gradient-to-r from-[#6E48AA] via-[#8E2DE2] to-[#A044FF] 
                     shadow-[0_0_15px_#A044FF] animate-pulse"
        />
      </motion.h1>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="w-full lg:w-3/5 bg-gradient-to-br from-[#120324]/90 to-[#070112]/90 backdrop-blur-xl border border-[#A044FF]/40 rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-[0_0_35px_rgba(160,68,255,0.3)] transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 text-2xl sm:text-3xl font-bold mb-6">
            <FaRegCommentDots className="text-[#A044FF] text-3xl animate-pulse" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#E0B3FF] to-[#A044FF]">
              Send me a message
            </span>
          </div>

          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            Have a project, job opportunity, or research collaboration in mind? Drop a note below and I’ll get back to you promptly!
          </p>

          <div className="flex flex-col gap-4">
            {inputFields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm sm:text-base font-semibold text-[#E0B3FF] mb-1.5"
                >
                  {field.label}
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                    {field.icon}
                  </span>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#090114]/80 border border-[#A044FF]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#A044FF] transition-all text-sm sm:text-base shadow-sm"
                  />
                </div>
              </div>
            ))}

            {/* Message Box */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm sm:text-base font-semibold text-[#E0B3FF] mb-1.5"
              >
                Your Message
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3.5 text-gray-400">
                  <FiEdit />
                </span>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your idea or project..."
                  required
                  className="w-full pl-11 pr-4 py-3 h-36 rounded-xl bg-[#090114]/80 border border-[#A044FF]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#A044FF] transition-all text-sm sm:text-base shadow-sm resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto self-start rounded-2xl bg-gradient-to-r from-[#6A3093] to-[#A044FF] px-8 py-3.5 font-semibold text-white shadow-lg hover:shadow-[0_0_20px_rgba(160,68,255,0.7)] mt-2 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              <FiSend className="text-lg" /> Send Message
            </motion.button>
          </div>
        </motion.form>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full lg:w-2/5"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E0B3FF] mb-2">
            Connect With Me
          </h2>

          {contactItems.map((item, index) => {
            const content = (
              <div className="relative flex items-center gap-4 bg-[#120324]/90 rounded-2xl h-full w-full px-5 py-4 border border-[#A044FF]/35 shadow-lg hover:border-[#A044FF] transition-all duration-300">
                <div
                  className="p-3 rounded-xl bg-[#1e083c] text-xl sm:text-2xl"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base font-semibold truncate group-hover:text-[#E0B3FF] transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return item.link ? (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group w-full transition-transform hover:-translate-y-1"
              >
                {content}
              </a>
            ) : (
              <div
                key={index}
                onClick={item.onClick}
                className="group w-full cursor-pointer transition-transform hover:-translate-y-1"
              >
                {content}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
