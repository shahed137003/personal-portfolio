import { motion } from "framer-motion";
import { Bot } from 'lucide-react';
import React from "react";

export function RoboAnimation({ 
  size = 96, 
  color = "text-[#4B0082]",
  glowColor = "bg-purple-500/20"
}) {
  return (
    <div className="absolute -mt-10 ml-220 hidden md:block">
      <motion.div
        className="relative"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className={`absolute -inset-4 ${glowColor} rounded-full blur-xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <Bot width={size} height={size} className={color} />
      </motion.div>
    </div>
  );
}
