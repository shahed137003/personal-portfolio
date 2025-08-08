// components/MultiStepLoader.jsx
import React, { useState, useEffect } from 'react';

function Spinner() {
  return (
    <div className="w-16 h-16 border-4 border-[#6A3093] border-t-transparent rounded-full animate-spin shadow-[0_0_15px_#6A3093]"></div>
  );
}

export default function MultiStepLoader({ onFinish }) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 1) {
      const timer1 = setTimeout(() => setStep(2), 1200);
      return () => clearTimeout(timer1);
    }
    if (step === 2) {
      const timer2 = setTimeout(() => {
        setStep(3);
        onFinish();
      }, 1200);
      return () => clearTimeout(timer2);
    }
  }, [step, onFinish]);

  if (step < 3) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#050505aa] to-[#1a1919] text-[#9D50BB] gap-6 px-6 text-center">
        <Spinner />
        <p className="text-2xl font-semibold tracking-wider select-none drop-shadow-[0_0_5px_rgba(157,80,187,0.8)]">
          {step === 1 && 'Loading my portfolio...'}
          {step === 2 && 'Almost there...'}
        </p>
        <div className="w-20 h-1 rounded-full bg-[#9D50BB] animate-pulse opacity-80" />
      </div>
    );
  }

  return null;
}
