// components/MultiStepLoader.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, FaCode, FaRocket, FaCrown, FaStar, FaGem, 
  FaSpinner, FaMagic, FaAtom, FaGalacticRepublic,
  FaInfinity, FaCircleNotch, FaBolt, FaFire, FaCheck
} from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiJavascript } from 'react-icons/si';

// Cosmic Particle System
function CosmicParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5,
    color: ['#6A3093', '#A044FF', '#E0B3FF', '#FFFFFF', '#9D50BB'][Math.floor(Math.random() * 5)]
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}40`,
            left: p.x + '%',
            top: p.y + '%',
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, 0, -20, 0],
            scale: [1, 1.5, 1, 0.5, 1],
            opacity: [0.2, 0.8, 0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Aurora Background Effect
function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: '60%',
            height: '60%',
            background: `radial-gradient(circle, ${['#6A309330', '#A044FF25', '#E0B3FF20'][i]}, transparent 70%)`,
            left: `${[10, 50, 80][i]}%`,
            top: `${[20, 60, 30][i]}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Ultra Premium Spinner
function PremiumSpinner() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-32 h-32">
      {/* Outer Glow Ring */}
      <motion.div
        className="absolute inset-[-8px] rounded-full"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(circle, #A044FF40, transparent 70%)',
          filter: 'blur(12px)',
        }}
      />

      {/* Main Rotating Ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from ${rotation}deg, #6A3093, #A044FF, #E0B3FF, #FFFFFF, #E0B3FF, #A044FF, #6A3093)`,
          padding: '4px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Secondary Ring (Counter-Rotating) */}
      <motion.div
        className="absolute inset-2 rounded-full border-2 border-transparent"
        style={{
          background: `conic-gradient(from ${-rotation * 0.7}deg, #E0B3FF40, #A044FF60, #6A309340, #E0B3FF40)`,
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Center Core */}
      <motion.div
        className="absolute inset-3 rounded-full bg-black flex items-center justify-center overflow-hidden"
        animate={{
          boxShadow: [
            'inset 0 0 30px rgba(160,68,255,0.3)',
            'inset 0 0 60px rgba(160,68,255,0.6)',
            'inset 0 0 30px rgba(160,68,255,0.3)',
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Inner Core Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#A044FF20] to-[#6A309320]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* React Icon with Pulse */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaReact className="text-4xl text-[#61DAFB] drop-shadow-[0_0_20px_rgba(97,218,251,0.5)]" />
        </motion.div>

        {/* Orbiting Electrons */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: ['#61DAFB', '#A044FF', '#E0B3FF'][i],
              boxShadow: `0 0 10px ${['#61DAFB', '#A044FF', '#E0B3FF'][i]}`,
            }}
            animate={{
              x: [0, 40 * Math.cos(i * 2.094 + rotation * 0.02), 0],
              y: [0, 40 * Math.sin(i * 2.094 + rotation * 0.02), 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Sparkle Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            left: '50%',
            top: '50%',
            x: -2,
            y: -2,
          }}
          animate={{
            x: [0, 50 * Math.cos(i * 0.785 + rotation * 0.03), 0],
            y: [0, 50 * Math.sin(i * 0.785 + rotation * 0.03), 0],
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.25,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated Loading Text with Typewriter Effect
function TypewriterText({ text, delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50 + delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-6 bg-[#E0B3FF] ml-0.5"
        />
      )}
    </motion.span>
  );
}

// Floating Tech Icons
function FloatingTechIcons() {
  const icons = [
    { Icon: FaReact, color: '#61DAFB', label: 'React' },
    { Icon: SiJavascript, color: '#F7DF1E', label: 'JavaScript' },
    { Icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind' },
    { Icon: SiFigma, color: '#A044FF', label: 'Figma' },
    { Icon: FaBolt, color: '#FFD700', label: 'Fast' },
    { Icon: FaFire, color: '#FF4500', label: 'Hot' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ Icon, color, label }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${[5, 15, 85, 92, 10, 88][i]}%`,
            top: `${[10, 85, 15, 80, 45, 55][i]}%`,
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 15, 0, -15, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1, 0.8, 1],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        >
          <div className="relative group">
            <div 
              className="p-3 rounded-2xl backdrop-blur-sm bg-black/50 border border-white/10"
              style={{ boxShadow: `0 0 30px ${color}20` }}
            >
              <Icon className="text-2xl sm:text-3xl" style={{ color }} />
            </div>
            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[10px] font-mono text-white/60 bg-black/80 px-2 py-0.5 rounded">
                {label}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Progress Rings
function ProgressRings({ step }) {
  return (
    <div className="flex items-center gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <motion.div
            className="relative w-10 h-10"
            animate={{
              scale: i === step ? 1.1 : 0.9,
            }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-10 h-10 -rotate-90">
              <defs>
                <linearGradient id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6A3093" />
                  <stop offset="50%" stopColor="#A044FF" />
                  <stop offset="100%" stopColor="#E0B3FF" />
                </linearGradient>
              </defs>
              <circle
                cx="20"
                cy="20"
                r="16"
                fill="none"
                stroke="#1e083c"
                strokeWidth="3"
              />
              <motion.circle
                cx="20"
                cy="20"
                r="16"
                fill="none"
                stroke={`url(#gradient-${i})`}
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: i < step ? 1 : i === step ? 0.5 : 0,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </svg>
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-xs font-bold"
              animate={{
                color: i <= step ? '#E0B3FF' : '#4a4a4a',
              }}
            >
              {i < step ? (
                <FaCheck className="text-[#E0B3FF] text-xs" />
              ) : i === step ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <FaCircleNotch className="text-[#A044FF] text-xs" />
                </motion.div>
              ) : (
                <span className="text-white/30 text-xs">{i}</span>
              )}
            </motion.div>
          </motion.div>
          <div className="text-[8px] text-white/40 uppercase tracking-wider">
            Step {i}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MultiStepLoader({ onFinish }) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 1) {
      const timer1 = setTimeout(() => setStep(2), 2000);
      return () => clearTimeout(timer1);
    }
    if (step === 2) {
      const timer2 = setTimeout(() => {
        setStep(3);
        onFinish();
      }, 2000);
      return () => clearTimeout(timer2);
    }
  }, [step, onFinish]);

  if (step < 3) {
    return (
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
        {/* Background Effects */}
        <CosmicParticles />
        <AuroraBackground />
        <FloatingTechIcons />

        {/* Central Glow */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #A044FF15, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-10 px-6 text-center">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#6A3093] via-[#A044FF] to-[#E0B3FF] rounded-full blur-xl opacity-50" />
            <div className="relative flex items-center gap-3 px-6 py-2 rounded-full bg-black/80 border border-[#A044FF]/40 backdrop-blur-sm">
              <FaGem className="text-[#E0B3FF] text-sm animate-pulse" />
              <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E0B3FF] to-[#A044FF] tracking-wider uppercase">
                Premium Portfolio Experience
              </span>
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-[#E0B3FF]"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Premium Spinner */}
          <PremiumSpinner />

          {/* Loading Text with Typewriter */}
          <div className="space-y-2">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0B3FF] via-[#A044FF] to-[#6A3093]">
                <TypewriterText 
                  text={step === 1 ? "Crafting Your Experience" : "Almost Ready..."} 
                  delay={200}
                />
              </span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-gray-400"
            >
              {step === 1 ? "Loading cutting-edge portfolio components" : "Finalizing the wow factor"}
            </motion.p>
          </div>

          {/* Progress Rings */}
          <ProgressRings step={step} />

          {/* Loading Bar */}
          <motion.div
            className="w-64 h-1 rounded-full bg-[#1e083c] overflow-hidden"
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #6A3093, #A044FF, #E0B3FF)',
              }}
              animate={{
                width: step === 1 ? '45%' : '100%',
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Decorative Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-4 text-xs text-gray-500"
          >
            <span className="flex items-center gap-1.5">
              <FaCrown className="text-[#E0B3FF] text-[10px]" />
              <span>Premium Quality</span>
            </span>
            <span className="w-px h-3 bg-gray-700" />
            <span className="flex items-center gap-1.5">
              <FaStar className="text-[#A044FF] text-[10px]" />
              <span>5/5 Experience</span>
            </span>
            <span className="w-px h-3 bg-gray-700" />
            <span className="flex items-center gap-1.5">
              <FaInfinity className="text-[#E0B3FF] text-[10px]" />
              <span>Infinite Detail</span>
            </span>
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
}