import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/Hero Section/HeroSection";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MultiStepLoader from "./components/Spinner/MultiStepLoader";
import FloatingActionBar from "./components/FloatingActionBar/FloatingActionBar";
import GeometricBackground from "./components/Background/GeometricBackground";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function MainContent() {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <>
      {!loadingFinished ? (
        <MultiStepLoader onFinish={() => setLoadingFinished(true)} />
      ) : (
        <div className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
          isDarkMode ? "bg-[#05010a] text-white" : "bg-[#fbf7ff] text-[#2e0854]"
        }`}>
          {/* Exact Geometric Grid & Animated Gradient Orbs from Sign Language Project Home */}
          <GeometricBackground />

          <div className="relative z-10">
            <NavBar />
            <FloatingActionBar />
            <HeroSection />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
