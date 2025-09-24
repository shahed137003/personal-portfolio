import React, { useRef } from "react";
import { FaRegCommentDots, FaGithub, FaLinkedin, FaClock, FaHandshake } from "react-icons/fa";
import { FiSend, FiUser, FiMail, FiTag, FiEdit } from "react-icons/fi";
import { MdEmail, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("your_service_id", "your_template_id", form.current, "your_public_key")
      .then(() => {
        toast.success("✅ Message sent successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          theme: "colored",
          toastStyle: { background: "linear-gradient(to right, #6A3093, #A044FF)", color: "#fff", borderRadius: "12px" },
        });
        e.target.reset();
      })
      .catch(() => {
        toast.error("❌ Failed to send message. Please try again.", {
          position: "bottom-right",
          autoClose: 4000,
          theme: "colored",
          toastStyle: { background: "linear-gradient(to right, #A044FF, #6A3093)", color: "#fff", borderRadius: "12px" },
        });
      });
  };

  const contactItems = [
    { icon: <MdPhone />, title: "Phone", value: "+20 1092968238", color: "#A044FF", gradient: "from-[#0D0017] to-[#A044FF]" },
    { icon: <MdEmail />, title: "Email", value: "Shahd137003@gmail.com", color: "#6A3093", gradient: "from-[#0D0017] to-[#6A3093]" },
    { icon: <FaGithub />, title: "GitHub", value: "github.com/shahed137003", link: "https://github.com/shahed137003", color: "#A044FF", gradient: "from-[#0D0017] to-[#A044FF]" },
    { icon: <FaLinkedin />, title: "LinkedIn", value: "linkedin.com/in/shahd-mohamed-2ab8bb315", link: "https://www.linkedin.com/in/shahd-mohamed-2ab8bb315", color: "#6A3093", gradient: "from-[#0D0017] to-[#6A3093]" },
    { icon: <FaClock />, title: "Response Time", value: "Fast replies within 24 hours", color: "#FFD700", gradient: "from-[#0D0017] to-[#FFD700]" },
    { icon: <FaHandshake />, title: "Collaboration", value: "Open to projects & teamwork", color: "#00C9A7", gradient: "from-[#0D0017] to-[#00C9A7]" },
  ];

  const inputFields = [
    { id: "name", label: "Name", type: "text", placeholder: "Enter your name", name: "user_name", icon: <FiUser /> },
    { id: "email", label: "Email", type: "email", placeholder: "Enter your email", name: "user_email", icon: <FiMail /> },
    { id: "subject", label: "Subject", type: "text", placeholder: "Enter your subject", name: "subject", icon: <FiTag /> },
  ];

  return (
    <section className="text-white w-full px-4 sm:px-6 lg:px-20 py-12" id="contactSection">
      <ToastContainer />
      
      {/* Section Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-[70px] font-extrabold font-serif  text-center text-transparent bg-clip-text bg-gradient-to-br from-[#6A3093] to-[#A044FF] mb-12 relative"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contact
        <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-28 sm:w-40 h-[3px] rounded-full bg-gradient-to-r from-[#6A3093] to-[#A044FF] shadow-[0_0_10px_#A044FF]" />
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="w-full lg:w-1/2 bg-gradient-to-br from-[#0f0f0f]/70 to-[#6E48AA]/40 backdrop-blur-md border border-[#6E48AA]/50 rounded-3xl shadow-xl p-6 sm:p-8 transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold mb-6">
            <motion.span
              className="text-[#6E48AA]"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaRegCommentDots className="w-6 h-6" />
            </motion.span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6E48AA] via-[#A044FF] to-[#FF6EC7] animate-gradient-x">
              Send me a message
            </span>
          </motion.h2>

          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            Feel free to reach out if you have any questions, collaboration ideas, or just want to connect.
          </p>

          <div className="flex flex-col gap-4">
            {inputFields.map((field) => (
              <div className="relative" key={field.id}>
                <label htmlFor={field.id} className="block text-base sm:text-lg font-semibold text-[#A044FF] mb-2">{field.label}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{field.icon}</span>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                    className="w-full pl-10 px-4 py-3 rounded-xl bg-[#0f0f0f]/80 border border-[#6E48AA]/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A044FF] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                  />
                </div>
              </div>
            ))}

            <div className="relative">
              <label htmlFor="message" className="block text-base sm:text-lg font-semibold text-[#A044FF] mb-2">Your message</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400"><FiEdit /></span>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  required
                  className="w-full pl-10 h-36 px-4 py-3 rounded-xl bg-[#0f0f0f]/80 border border-[#6E48AA]/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A044FF] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md resize-none"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              className="flex items-center justify-center gap-2 w-full lg:w-auto rounded-2xl bg-gradient-to-r from-[#6A3093] to-[#A044FF] px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl mt-2"
              whileHover={{ scale: 1.08, boxShadow: "0 0 15px rgba(160,68,255,0.7)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FiSend className="text-lg" /> Send
            </motion.button>
          </div>
        </motion.form>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6A3093] to-[#A044FF] mb-4 drop-shadow-[0_0_6px_#A044FF]">
            <FiSend className="text-2xl sm:text-3xl text-[#A044FF] animate-pulse" /> Let’s Connect
          </h2>

          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link || "#"}
              target={item.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="relative overflow-hidden group w-full min-h-[80px] sm:min-h-[90px] rounded-xl p-[2px] transition-all duration-500"
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-70 blur-md group-hover:opacity-100 transition`} />
              <div className="relative flex items-center gap-4 bg-[#0D0017] rounded-xl h-full w-full px-4 py-3 border border-white/10 shadow-lg shadow-black/50 group-hover:shadow-[#A044FF]/50">
                <motion.div className="p-2 rounded-full bg-black/30" whileHover={{ rotate: 15, scale: 1.2 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                  {React.cloneElement(item.icon, { className: "text-xl sm:text-2xl lg:text-3xl", style: { color: item.color, filter: `drop-shadow(0 0 6px ${item.color})` } })}
                </motion.div>
                <div>
                  <h3 className="text-xs sm:text-sm lg:text-[15px] text-gray-400 font-serif italic">{item.title}</h3>
                  <p className="text-white text-sm sm:text-base lg:text-[15px] font-semibold break-words group-hover:text-[#A044FF] transition-colors">{item.value}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
