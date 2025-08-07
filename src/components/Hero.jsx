"use client";

import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import Button from "./ui/Button";
import pfp from "../assets/demoimg.jpeg";
import { useState, useEffect } from "react";

const Hero = ({ scrollToSection }) => {
  const [mounted, setMounted] = useState(false);
  const roles = [
    "Full-Stack Developer",
    "Cloud & DevOps Learner",
    "AI/ML Enthusiast"
  ];

  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let typingTimeout;
    let erasingTimeout;
    let pauseTimeout;

    const currentText = roles[currentRoleIndex];

    if (isTyping) {
      if (charIndex < currentText.length) {
        typingTimeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, 60);
      } else {
        pauseTimeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      if (charIndex > 0) {
        erasingTimeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, 20);
      } else {
        setCurrentRoleIndex(prev => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [displayText, isTyping, currentRoleIndex, charIndex, mounted, roles]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-10 relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.10]"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="smallGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.8"/>
            </pattern>
            <pattern id="mediumGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <pattern id="gridDots" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="0" cy="0" r="1.2" fill="currentColor" opacity="0.6"/>
              <circle cx="30" cy="30" r="0.8" fill="currentColor" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" className="text-gray-300 dark:text-gray-600"/>
          <rect width="100%" height="100%" fill="url(#mediumGrid)" className="text-gray-400 dark:text-gray-500"/>
          <rect width="100%" height="100%" fill="url(#gridDots)" className="text-blue-300 dark:text-blue-600"/>
        </svg>

        {/* Static Geometric Elements */}
        <motion.div className="absolute top-24 left-32 w-8 h-8 opacity-[0.15] dark:opacity-[0.20]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400">
            <rect x="4" y="4" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </motion.div>

        <motion.div className="absolute top-64 right-48 w-6 h-6 opacity-[0.15] dark:opacity-[0.20]"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-purple-400">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </motion.div>

        <motion.div className="absolute bottom-48 left-24 w-7 h-7 opacity-[0.15] dark:opacity-[0.20]"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-green-400">
            <polygon points="12,2 22,20 2,20" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </motion.div>

        {/* Color blocks */}
        <div className="absolute top-32 right-64 w-4 h-4 opacity-[0.12] dark:opacity-[0.18] bg-orange-400 rotate-45"></div>
        <div className="absolute  bottom-72 right-32 w-3 h-3 opacity-[0.12] dark:opacity-[0.18] bg-pink-400 rounded-full"></div>
        <div className="absolute top-80 left-64 w-6 h-2 opacity-[0.12] dark:opacity-[0.18] bg-cyan-400 rounded-sm"></div>
        <div className="absolute bottom-32 left-48 w-2 h-6 opacity-[0.12] dark:opacity-[0.18] bg-indigo-400 rounded-sm"></div>
        <div className="absolute hidden md:block top-48 right-80 w-4 h-4 opacity-[0.12] dark:opacity-[0.18] bg-red-400 rotate-45"></div>
        {/* <div className="absolute bottom-64 left-80 w-3 h-8 opacity-[0.12] dark:opacity-[0.18] bg-yellow-400 rounded-sm"></div> */}
      </div>

      {/* Gradient Blur Backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-600/10 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16">
        <motion.div className="order-1 lg:order-1 flex justify-center items-center flex-1 p-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={pfp}
            alt="Sanjay Shrestha's Profile Picture"
            className="relative top-3 sm:top-0 rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-blue-400 dark:border-purple-600 transition-all duration-500 hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center lg:text-left space-y-8 order-2 lg:order-2 flex-1 pb-5"
        >
          <motion.div variants={fadeInUp} className="space-y-2 md:space-y-4">
            <motion.h1
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent pb-2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Sanjay Shrestha
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium min-h-[2rem] flex items-center justify-center lg:justify-start typing-text relative"
            >
              <span className="mr-2 text-xl md:text-2xl font-bold">{displayText}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="text-gray-600 dark:text-gray-300 font-bold"
              >
                |
              </motion.span>
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
              Building scalable web applications with modern technologies and cloud-native solutions
            </motion.p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <motion.div {...scaleOnHover}>
              <Button size="lg" className="bg-[#364BC5] text-white px-8 py-3 shadow-lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
            <motion.div {...scaleOnHover}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start space-x-6 pt-8 relative bottom-4">
            {[{
              icon: Github,
              href: "https://github.com/sanjayyshrestha",
              color: "hover:text-gray-900 dark:hover:text-white"
            }, {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/sanjayyshrestha7/",
              color: "hover:text-blue-600"
            }, {
              icon: Mail,
              href: "mailto:sanjayshrestha772@gmail.com",
              color: "hover:text-red-500"
            }].map(({ icon: Icon, href, color }, index) => (
              <motion.div key={index} whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <a href={href} target="_blank" rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 ${color} transition-all duration-300`}>
                  <Icon className="h-8 w-8" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ↓ Animated and Designed Scroll Down Button at Bottom Center */}
     {/* <motion.div
  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
  onClick={() => scrollToSection("about")}
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  <motion.div
    className="p-2 sm:p-3 md:p-4 rounded-full"
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-600 dark:text-gray-300" />
  </motion.div>
</motion.div> */}

    </section>
  );
};

export default Hero;