"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import TechStack from "./components/TechStack"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()

  // State to store navbar height
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Set mounted state after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Effect for dark mode class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Effect to get dynamic navbar height
  useEffect(() => {
    if (mounted) {
      const navbarElement = document.querySelector('nav'); // Assuming your Navbar component renders a <nav> tag
      if (navbarElement) {
        setNavbarHeight(navbarElement.offsetHeight);
      }
      // Add a resize listener to update navbar height if it changes on resize
      const handleResize = () => {
        if (navbarElement) {
          setNavbarHeight(navbarElement.offsetHeight);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [mounted]); // Re-run when mounted state changes

  // Effect for scroll tracking and setting active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "tech-stack", "projects", "contact"];
      // Use dynamic navbarHeight for scroll position calculation
      // Adding a small buffer (e.g., 20px) to ensure active state changes slightly before section is fully at top
      const scrollPosition = window.scrollY + navbarHeight + 20; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    if (mounted) {
      window.addEventListener("scroll", handleScroll);
      // Call once to set initial active section after mount and navbar height is known
      handleScroll(); 
    }

    return () => {
      if (mounted) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [mounted, navbarHeight]); // Add navbarHeight as a dependency

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    // Add a small delay to ensure mobile menu closes first, if applicable
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Use dynamic navbarHeight for scrolling offset
        const offsetTop = element.offsetTop - navbarHeight; 
        
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    },0); 
  };

  if (!mounted) {
    return null; // Or a loading spinner, or just return an empty div if initial render is quick
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <Hero scrollToSection={scrollToSection} />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;