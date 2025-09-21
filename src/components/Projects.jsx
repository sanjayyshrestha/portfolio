"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Award, AlertCircle } from "lucide-react"
import Card from "./ui/Card"
import Badge from "./ui/Badge"
import leafstack from '../assets/leafstack.png'
import sajiloYatra from '../assets/sajilo-yatra.png'
const Projects = () => {
  const projects = [
    {
      title: "LeafStack",
      description:
        "A digital platform that connects readers with a wide selection of books available for purchase. LeafStack aims to simplify the book-buying experience and support book distribution through an accessible online marketplace.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/sanjayyshrestha/leafstack",
      live: "https://example.com",
      image: leafstack,
      featured: true,
    },
     {
      title: "Sajilo Yatra",
      description:
        "Sajilo Yatra is a digital platform designed to simplify, personalize and elevate the travel experience across Nepal. Whether you are a local explorer or an international visitor, Sajilo Yatra helps you discover hidden destinations, plan your journey with ease and connect with authentic local experiences.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/sanjayyshrestha/sajilo-yatra",
      live: "https://example.com",
      image: sajiloYatra,
      featured: true,
    },
    // {
    //   title: "DevOps Monitoring Dashboard",
    //   description: "Real-time monitoring dashboard for microservices with automated alerting and performance metrics.",
    //   tags: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   image: "https://via.placeholder.com/400x200",
    //   featured: true,
    // },
  ]

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

  return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Exciting projects are on the way. Stay tuned!
          </p>
        </motion.div>

        {/* Coming Soon Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex flex-col items-center justify-center"
        >
          <AlertCircle className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4 animate-bounce" />
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Coming Soon...
          </motion.h3>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
