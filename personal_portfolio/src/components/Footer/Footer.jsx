import React from 'react';

export default function Footer() {
  return (
    <footer
      className="
        bg-[#0f0f0f8f] backdrop-blur-md py-3 px-4
        text-gray-400 border-t border-[#833CAA]
        w-full absolute
        flex items-center justify-center
        select-none
        text-xs sm:text-sm md:text-base
        tracking-wide
        z-50
      "
    >
      <p className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-center max-w-[700px] mx-auto">
        © 2025 Shahd Mohamed. Made with
        <span
          role="img"
          aria-label="love"
          className="text-pink-500 animate-pulse"
          style={{ filter: 'drop-shadow(0 0 4px #E75480)' }}
        >
          ❤️
        </span>
        and lots of coffee ☕
      </p>
    </footer>
  );
}
