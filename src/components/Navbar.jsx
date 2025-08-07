"use client"
import { useState, useEffect } from "react"
import {
  Moon, Sun, Menu, X, Download, Home, User, FolderOpen, Code,
  GraduationCap, Contact, Award,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import profileImage from "../assets/demoimg.jpeg"

const Navbar = ({ darkMode, setDarkMode, activeSection, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)

  // Show navbar after scrolling 60% of the hero section height
  useEffect(() => {
    const handleScroll = () => {
      const heroImage = document.querySelector("#home img")

      if (!heroImage) return

      const rect = heroImage.getBoundingClientRect()
      const thresholdPassed = rect.top + rect.height * 0.3 < 0

      setShowNavbar(thresholdPassed)
    }

    window.addEventListener("scroll", handleScroll)

    // Initial check on mount
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileMenuOpen)
    return () => document.body.classList.remove("overflow-hidden")
  }, [mobileMenuOpen])

  const menuItems = [
    { name: "Home", icon: Home, id: "home" },
    { name: "About", icon: User, id: "about" },
    { name: "TechStack", icon: Code, id: "tech-stack" },
    { name: "Education", icon: GraduationCap, id: "education" },
    { name: "Projects", icon: FolderOpen, id: "projects" },
    { name: "Certifications", icon: Award, id: "certifications" },
    { name: "Contact", icon: Contact, id: "contact" },
  ]

  const handleDarkModeToggle = () => {
    setDarkMode(prev => !prev)
  }

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Sanjay_Shrestha_Resume.pdf"
    link.click()
  }

  return (
    <>
      {/* Animated Navbar */}
      <AnimatePresence>
        {showNavbar && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 30,
              duration: 0
            }}
            className={`fixed top-0 w-full z-40 backdrop-blur-md border-b transition-all ${
              darkMode ? "bg-gray-900/90 border-gray-800" : "bg-white/90 border-gray-200"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
              {/* Logo */}
              <div className="font-extrabold text-xl cursor-pointer" onClick={() => scrollToSection("home")}>
                <span className={`${darkMode ? "text-gray-100" : "text-gray-800"}`}>SAN</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">JAY</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                {menuItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-md font-medium transition-all ${
                      activeSection === item.id
                        ? darkMode ? "text-blue-400" : "text-blue-600"
                        : darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"
                    }`}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
                    )}
                  </button>
                ))}
              </div>

              {/* Right Controls */}
              <div className="flex items-center space-x-2 md:space-x-4">
                <button onClick={handleDarkModeToggle} className="p-2 rounded-md">
                  {darkMode ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>
                <div className="md:hidden">
                  <button onClick={() => setMobileMenuOpen(prev => !prev)} className="p-2">
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar - Right Aligned */}
            <motion.div
              key="mobile-sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className={`relative w-72 h-full z-50 flex flex-col bg-white dark:bg-gray-900 shadow-xl`}
            >
              <div className="flex flex-col p-6 h-full">
                {/* Profile Section */}
                <div className="flex items-center space-x-4 mb-8">
                  <img src={profileImage} alt="Profile" className="w-14 h-14 rounded-full border border-gray-300 dark:border-gray-700" />
                  <div>
                    <h2 className={`font-semibold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>Sanjay Shrestha</h2>
                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Full-Stack Developer</p>
                  </div>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col space-y-2 flex-grow">
                  {menuItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id)
                        setMobileMenuOpen(false)
                      }}
                      className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        activeSection === item.id
                          ? darkMode
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100 text-blue-700"
                          : darkMode
                            ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                            : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-4" />
                      {item.name}
                    </button>
                  ))}
                </nav>

                {/* Footer Buttons */}
                <div className="mt-auto space-y-4">
                  <button
                    onClick={handleResumeDownload}
                    className="w-full flex items-center justify-center px-4 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Resume
                  </button>

                  <button
                    onClick={handleDarkModeToggle}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-md bg-gray-200 dark:bg-gray-800 text-sm font-medium"
                  >
                    <span className="flex items-center">
                      {darkMode ? <Sun className="w-5 h-5 mr-2 text-gray-300" /> : <Moon className="w-5 h-5 mr-2 text-gray-600" />}
                      Dark Mode
                    </span>
                    <span className="w-12 h-6 flex items-center bg-gray-300 dark:bg-blue-600 rounded-full p-1 cursor-pointer">
                      <motion.div
                        className="w-5 h-5 bg-white rounded-full shadow-md"
                        animate={{ x: darkMode ? 24 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar