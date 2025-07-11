"use client"

import { motion } from "framer-motion"
import { Download, Mail, Github, Linkedin, ChevronDown } from "lucide-react"
import Button from "./ui/Button"

const Hero = ({ scrollToSection }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8">
          <motion.div variants={fadeInUp} className="space-y-4">
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Sanjay Shrestha
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              Full-Stack Developer | Cloud & DevOps Learner
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Building scalable web applications with modern technologies and cloud-native solutions
            </motion.p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div {...scaleOnHover}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg"
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

          <motion.div variants={fadeInUp} className="flex justify-center space-x-6 pt-8">
            {[
              {
                icon: Github,
                href: "https://github.com/yourusername",
                color: "hover:text-gray-900 dark:hover:text-white",
              },
              { icon: Linkedin, href: "https://linkedin.com/in/yourusername", color: "hover:text-blue-600" },
              { icon: Mail, href: "mailto:yourname@example.com", color: "hover:text-red-500" },
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.div key={index} whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <a href={href} className={`text-gray-600 dark:text-gray-400 ${color} transition-all duration-300`}>
                  <Icon className="h-8 w-8" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
