"use client";

import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";
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

  // We'll use a local state to manage the typing animation
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // This effect runs only once when the component mounts
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
        }, 60); // typingSpeed
      } else {
        pauseTimeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500); // pauseTime
      }
    } else {
      if (charIndex > 0) {
        erasingTimeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, 20); // erasingSpeed
      } else {
        setCurrentRoleIndex(prev => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    // Cleanup function to clear timeouts
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
      clearTimeout(pauseTimeout);
    };

  }, [displayText, isTyping, currentRoleIndex, charIndex, mounted, roles]);

  // Framer Motion variants for animations
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
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16">
        {/* Photo Column */}
        <motion.div
          className="order-1 lg:order-1 flex justify-center items-center flex-1 p-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={pfp}
            alt="Sanjay Shrestha's Profile Picture"
            className="relative top-3 sm:top-0 rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-blue-400 dark:border-purple-600 transition-all duration-500 hover:scale-105"
          />
        </motion.div>

        {/* Text, Buttons, and Social Icons Column */}
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
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
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
              <Button
                size="lg"
                className="bg-[#364BC5] text-white px-8 py-3 shadow-lg"
              >
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

          <motion.div
            variants={fadeInUp}
            className="flex justify-center lg:justify-start space-x-6 pt-8 relative bottom-4"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/sanjayyshrestha",
                color: "hover:text-gray-900 dark:hover:text-white",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/sanjayyshrestha7/",
                color: "hover:text-blue-600",
              },
              {
                icon: Mail,
                href: "mailto:sanjayshrestha772@gmail.com",
                color: "hover:text-red-500",
              },
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.div className="" key={index} whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 ${color} transition-all duration-300`}
                >
                  <Icon className="h-8 w-8" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;