import React, { useState, useEffect } from "react";

import "./App.css";

import Intro from "./components/header/Intro";
import Navbar from "./components/header/Navbar";
import Contact from "./components/header/Contact";

import DarkMode from "./components/main/DarkMode";

import About from "./components/main/About";
import Education from "./components/main/Education";
import Experience from "./components/main/Experience";
import Projects from "./components/main/Projects";
import Personal from "./components/main/Personal";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight } = currentTarget;

    const rect = currentTarget.getBoundingClientRect();

    const xPercent = ((clientX - rect.left) / offsetWidth) * 100;
    const yPercent = ((clientY - rect.top) / offsetHeight) * 100;

    document.documentElement.style.setProperty("--x", `${xPercent}%`);
    document.documentElement.style.setProperty("--y", `${yPercent}%`);
  };

  const [activeSection, setActiveSection] = useState("about");
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      const style = window.getComputedStyle(section);
      const marginTop = parseInt(style.marginTop, 10);
      const marginBottom = parseInt(style.marginBottom, 10);

      const effectiveTop = rect.top - marginTop;
      const effectiveBottom = rect.bottom + marginBottom;

      if (effectiveTop <= 0 && effectiveBottom > 0) {
        currentSection = section.id;
      }
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={darkMode ? "dark app" : "light app"}
      onMouseMove={handleMouseMove}
    >
      <div className="container">
        <div className="left">
          <header>
            <Intro />
            <Navbar activeSection={activeSection} />
            <Contact />
          </header>
        </div>
        <div className="right">
          <main>
            <DarkMode toggleDarkMode={toggleDarkMode} />
            <About activeSection={activeSection} />
            <Education activeSection={activeSection} />
            <Experience activeSection={activeSection} />
            <Projects activeSection={activeSection} />
            <Personal activeSection={activeSection} />
          </main>
          <footer>
            <p>
              Built with <b>React.js</b> & <b>ChatGPT</b> &copy;{" "}
              2024 Solène PETTIER
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
