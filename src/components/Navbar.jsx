"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon, Sun, Menu, X, Download, Home, User,
  FolderOpen, Code, GraduationCap, Contact
} from "lucide-react";
import profileImage from '../assets/demoimg.jpeg';

const Navbar = ({ darkMode, setDarkMode, activeSection, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollYRef = useRef(0);

  // 🛠 Prevent body scroll when sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollYRef.current}px`;
    } else {
      const savedScrollY = scrollYRef.current;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, savedScrollY);
    }

    return () => {
      const savedScrollY = scrollYRef.current;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, savedScrollY);
    };
  }, [mobileMenuOpen]);

  const scrollToHome = () => {
    const section = document.getElementById("home");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Sanjay_Shrestha_Resume.pdf";
    link.click();
  };

  const menuItems = [
    { name: "Home", icon: Home, id: "home" },
    { name: "About", icon: User, id: "about" },
    { name: "TechStack", icon: Code, id: "tech-stack" },
    { name: "Education", icon: GraduationCap, id: "education" },
    { name: "Projects", icon: FolderOpen, id: "projects" },
    { name: "Contact", icon: Contact, id: "contact" }
  ];

  return (
    <>
      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full ${darkMode ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-md z-40 border-b ${darkMode ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              onClick={scrollToHome}
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className={`font-extrabold text-xl lg:text-2xl tracking-tight ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
                SAN
              </span>
              <span className="font-extrabold text-xl lg:text-2xl tracking-tight bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, #2563EB, #9333EA)",
                  fontFamily: "Inter, sans-serif",
                }}>
                JAY
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? darkMode ? "text-blue-400" : "text-blue-600"
                      : darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-2">
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-md ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                      <Sun className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                      <Moon className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <motion.button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-2 rounded-md ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed right-0 top-0 h-full w-80 z-50 ${darkMode ? "bg-gray-900" : "bg-white"} shadow-2xl overflow-y-auto`}
            >
              <div className="flex flex-col h-full">
                {/* Profile Section */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <img src={profileImage} className="w-16 h-16 rounded-full" alt="Profile" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Sanjay Shrestha</h3>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Full-Stack Developer</p>
                    </div>
                  </div>

                  {/* Resume */}
                  <motion.button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleResumeDownload();
                    }}
                    className={`flex items-center justify-center w-full px-4 py-3 rounded-lg font-medium text-sm transition-colors ${darkMode ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-4 h-4 mr-3" />
                    Resume
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 p-6">
                  <nav className="space-y-1">
                    {menuItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          scrollToSection(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center w-full px-4 py-3 rounded-lg text-left font-medium transition-colors ${
                          activeSection === item.id
                            ? darkMode ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-700"
                            : darkMode ? "text-gray-300 hover:bg-gray-800 hover:text-white" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.name}
                      </motion.button>
                    ))}
                  </nav>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                  <motion.button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`flex items-center w-full px-4 py-3 rounded-lg font-medium text-sm transition-colors ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        {darkMode ? <Moon className="w-4 h-4 mr-3" /> : <Sun className="w-4 h-4 mr-3" />}
                        Dark Mode
                      </div>
                      <div className={`w-10 h-6 rounded-full ${darkMode ? "bg-blue-600" : "bg-gray-300"} relative`}>
                        <motion.div
                          className="w-4 h-4 bg-white rounded-full absolute top-1"
                          animate={{ x: darkMode ? 20 : 4 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      </div>
                    </div>
                  </motion.button>
                  <p className={`text-xs text-center mt-4 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                    Designed & Built by Sanjay Shrestha<br />
                    © 2025. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
