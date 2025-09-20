import React, { useRef } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // from EmailJS dashboard
        "your_template_id", // from EmailJS dashboard
        form.current,
        "your_public_key" // from EmailJS dashboard
      )
      .then(() => {
        toast.success("✅ Message sent successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          theme: "colored",
          toastStyle: {
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
          toastStyle: {
            background: "linear-gradient(to right, #A044FF, #6A3093)",
            color: "#fff",
            borderRadius: "12px",
          },
        });
      });
  };

  return (
    <div className="text-white w-full px-4 py-12" id="contactSection">
      {/* Toast container */}
      <ToastContainer />

      {/* Section Heading */}
     <motion.h1
  className="relative text-[36px] sm:text-[50px] lg:text-[70px] font-extrabold font-serif text-center 
             text-transparent bg-clip-text bg-gradient-to-br from-[#6A3093] to-[#A044FF] 
             mb-12 tracking-wide"
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  viewport={{ once: true }}
>
  Contact

  {/* Decorative underline */}
  <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-28 sm:w-40 h-[3px] rounded-full 
                   bg-gradient-to-r from-[#6A3093] to-[#A044FF] 
                   shadow-[0_0_10px_#A044FF]" />
</motion.h1>


      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-15">
        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="transition duration-300 ease-in transform hover:scale-105 w-full lg:w-1/2 bg-gradient-to-br from-[#07000b] to-[#6E48AA] border border-[#6E48AA] opacity-90 rounded-2xl hover:shadow-[3px_4px_5px] shadow-[#6E48AA] p-6 sm:p-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h1 className="flex items-center gap-2 text-[#6E48AA] text-lg sm:text-xl lg:text-2xl font-bold">
            <FaRegCommentDots className="text-[#6E48AA] w-5 h-5 sm:w-6 sm:h-6" />
            Send me a message
          </h1>

          <p className="text-sm text-gray-400 mb-4 mt-3">
            Feel free to reach out if you have any questions, collaboration
            ideas, or just want to connect.
          </p>

          {/* Input Fields */}
          {[
            {
              id: "name",
              label: "Name",
              type: "text",
              placeholder: "Enter your name",
              name: "user_name",
            },
            {
              id: "email",
              label: "Email",
              type: "email",
              placeholder: "Enter your email",
              name: "user_email",
            },
            {
              id: "subject",
              label: "Select a subject",
              type: "text",
              placeholder: "Enter your subject",
              name: "subject",
            },
          ].map((field) => (
            <div className="mb-4" key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-base sm:text-lg lg:text-[22px] font-semibold text-[#6E48AA] mb-2"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                required
                className="w-full px-3 sm:px-4 py-2 rounded-[8px] bg-[#07000b] border border-[#6E48AA] text-white placeholder-gray-400 focus:outline-none focus:border-[#9D50BB] transition duration-200"
              />
            </div>
          ))}

          {/* Message */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-base sm:text-lg lg:text-[22px] font-semibold text-[#6E48AA] mb-2"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              className="w-full h-32 px-3 sm:px-4 py-2 rounded-[8px] bg-[#07000b] border border-[#6E48AA] text-white placeholder-gray-400 focus:outline-none focus:border-[#9D50BB] transition duration-200"
            />
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            className="flex items-center justify-center gap-2 w-full lg:w-auto border border-[#6E48AA] rounded-2xl bg-gradient-to-br from-[#6A3093] to-[#A044FF] px-6 py-2 mt-4 font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FiSend className="text-lg" />
            Send your message
          </motion.button>
        </motion.form>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h1 className="flex items-center gap-3 text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6A3093] to-[#A044FF] mb-2">
            <FiSend className="text-xl sm:text-2xl lg:text-3xl text-[#A044FF]" />
            Let’s Connect
          </h1>

          {[
            {
              icon: <MdPhone />,
              title: "Phone",
              value: "+20 1092968238",
              color: "#A044FF",
              gradient: "bg-gradient-to-br from-[#050008] to-[#A044FF]",
              border: "border-[#A044FF]",
            },
            {
              icon: <MdEmail />,
              title: "Email",
              value: "Shahd137003@gmail.com",
              color: "#6A3093",
              gradient: "bg-gradient-to-r from-[#050008] to-[#6A3093]",
              border: "border-[#6A3093]",
            },
            {
              icon: <FaGithub />,
              title: "GitHub",
              value: "https://github.com/shahed137003",
              link: "https://github.com/shahed137003",
              color: "#A044FF",
              gradient: "bg-gradient-to-br from-[#050008] to-[#A044FF]",
              border: "border-[#A044FF]",
            },
            {
              icon: <FaLinkedin />,
              title: "LinkedIn",
              value: "https://www.linkedin.com/in/shahd-mohamed-2ab8bb315",
              link: "https://www.linkedin.com/in/shahd-mohamed-2ab8bb315",
              color: "#6A3093",
              gradient: "bg-gradient-to-r from-[#050008] to-[#6A3093]",
              border: "border-[#6A3093]",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link || "#"}
              target={item.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`transition duration-300 ease-in transform hover:scale-110 w-full min-h-[60px] sm:min-h-[80px] ${item.gradient} border ${item.border} rounded-xl p-3 sm:p-4 flex items-center gap-3 cursor-pointer`}
              whileHover={{ scale: 1.1, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div
                className={`p-2 rounded-full shadow-inner`}
                style={{
                  backgroundColor: `${item.color}33`,
                }}
              >
                {React.cloneElement(item.icon, {
                  className: `text-xl sm:text-2xl lg:text-3xl`,
                  style: {
                    color: item.color,
                    filter: `drop-shadow(0 0 6px ${item.color})`,
                  },
                })}
              </div>
              <div>
                <h1 className="text-xs sm:text-sm lg:text-[15px] text-gray-400 font-serif italic">
                  {item.title}
                </h1>
                <p className="text-white text-xs sm:text-sm lg:text-[14px] font-semibold break-all">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
