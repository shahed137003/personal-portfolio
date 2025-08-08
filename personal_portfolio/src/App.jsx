import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Particles from "./components/Background/Particles";
import HeroSection from "./components/Hero Section/HeroSection";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MultiStepLoader from "./components/Spinner/MultiStepLoader";

function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <>
      {!loadingFinished ? (
        <MultiStepLoader onFinish={() => setLoadingFinished(true)} />
      ) : (
        <div>
          <NavBar />
          <HeroSection />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <Particles
            className="w-full h-full relative"
            particleColors={["#833CAA"]}
            particleCount={2000}
            particleSpread={10}
            speed={0.5}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      )}
    </>
  );
}

export default App;
