import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Particles from "./components/Background/Particles";
import HeroSection from "./components/Hero Section/HeroSection";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
function App() {
  
  return (
 <>
 
 <div>
  <NavBar/>
  <HeroSection />
  <About/>
  <Skills />
  <Projects></Projects>
  <Contact></Contact>
      <Particles   className="w-full h-full relative"
       particleColors={['#833CAA']}
    particleCount={2000}
    particleSpread={10}
    speed={0.5}
    particleBaseSize={100}
    moveParticlesOnHover={false}
    alphaParticles={false}
    disableRotation={false}
      
      />


    </div>
 </>
  );
}

export default App;
