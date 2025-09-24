import React from "react";
import { FaHeart, FaCoffee, FaReact } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        relative bg-black/50 backdrop-blur-md py-4 px-6
        border-t border-[#833CAA]/60
        flex flex-col sm:flex-row items-center justify-center gap-2
        text-gray-300 text-sm sm:text-base
        tracking-wide select-none
      "
    >
    <div className="absolute top-0 left-0 w-full h-1.5 
                bg-gradient-to-r from-[#6A3093] via-[#A044FF] to-[#6E48AA] 
                blur-[2px] shadow-[0_0_20px_rgba(160,68,255,0.6)] 
                animate-[glow_2s_ease-in-out_infinite]" />


      <p className="flex flex-wrap justify-center items-center gap-2 text-center">
        © 2025 <span className="font-semibold text-[#A044FF]">Shahd Mohamed</span>
      </p>

      <p className="flex items-center gap-2 text-center">
        Made with 
        <FaHeart className="text-pink-500 animate-pulse drop-shadow-[0_0_6px_#ff5c8a]" />
        and lots of 
        <FaCoffee className="text-yellow-400 drop-shadow-[0_0_6px_#FFD700]" />
      </p>

      <p className="flex items-center gap-1 text-xs sm:text-sm opacity-80">
        Powered by <FaReact className="text-[#61DBFB] animate-spin-slow" /> React
      </p>
    </footer>
  );
}
