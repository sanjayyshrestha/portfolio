"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Download, Home, User, FolderOpen, Code, GraduationCap, Contact, Award } from "lucide-react"
import profileImage from "../assets/demoimg.jpeg"

const Navbar = ({ darkMode, setDarkMode, activeSection, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector("#home")
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      setShowNavbar(rect.top + rect.height * 0.3 < 0)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    { name: "Contact", icon: Contact, id: "contact" },
  ]

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Sanjay_Shrestha_Resume.pdf"
    link.click()
  }

  return (
    <>
      {/* Desktop Navbar */}
      {showNavbar && (
        <nav
  className={`fixed top-0 w-full z-40 backdrop-blur-md border-b transition-all duration-300 ${
    darkMode
      ? "bg-gray-900 border-gray-800"
      : "bg-white border-gray-200"
  }`}
>

          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
            {/* Logo */}
            <div className="font-bold text-xl cursor-pointer" onClick={() => scrollToSection("home")}>
              <span className={`${darkMode ? "text-gray-100" : "text-gray-800"}`}>SAN</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">JAY</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-md font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-blue-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-500"
                      : darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-md">
                {darkMode ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
              </button>
              <div className="md:hidden">
                <button onClick={() => setMobileMenuOpen(prev => !prev)} className="p-2">
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="relative w-72 h-full bg-white dark:bg-gray-900 flex flex-col p-6">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-6">
              <img src={profileImage} alt="Profile" className="w-16 h-16 rounded-full border border-gray-300 dark:border-gray-700 mb-2" />
              <h2 className={`font-semibold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>Sanjay Shrestha</h2>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Full-Stack Developer</p>
              <button
                onClick={handleResumeDownload}
                className="mt-4 w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" /> Resume
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col space-y-2 flex-grow">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => { scrollToSection(item.id); setMobileMenuOpen(false) }}
                  className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "bg-blue-100 dark:bg-blue-600 text-blue-700 dark:text-white"
                      : darkMode
                      ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Dark Mode Toggle */}
            

          </div>
        </div>
      )}
    </>
  )
}

export default Navbar


//dark mode toggle
//  <button
//   onClick={toggleDarkMode}
//   className="mt-auto w-full py-3 px-4 rounded-md bg-gray-200 dark:bg-gray-800 text-sm font-medium flex items-center justify-between hover:bg-gray-300 dark:hover:bg-gray-700"
// >
//   {/* Icon + Text */}
//   <span className="flex items-center">
//     {darkMode ? (
//       <Sun className="w-5 h-5 mr-2 text-yellow-400" />
//     ) : (
//       <Moon className="w-5 h-5 mr-2 text-gray-600" />
//     )}
//     <span className={darkMode ? "text-white" : "text-gray-900"}>Dark Mode</span>
//   </span>

//   {/* Toggle Switch */}
//   <span
//     className={`relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
//       darkMode ? "bg-blue-600" : "bg-gray-300"
//     }`}
//   >
//     <div
//       className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
//         darkMode ? "translate-x-6" : "translate-x-0"
//       }`}
//     ></div>
//   </span>
// </button>
