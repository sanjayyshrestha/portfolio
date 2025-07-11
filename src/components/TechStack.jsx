"use client"

import { motion } from "framer-motion"
import { Code2 } from "lucide-react"
import Card from "./ui/Card"
import Badge from "./ui/Badge"

const TechIcon = ({ name }) => {
  const icons = {
    TypeScript: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <rect width="24" height="24" rx="5" fill="#3178C6" />
        <path d="M9.5 16.5v-3h3v3h1.5v-4.5h-6v4.5h1.5zm7.5-4.5h-1.5v6h1.5v-6z" fill="white" />
      </svg>
    ),
    React: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <path
          d="M12 1c-6.628 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z"
          fill="#61DAFB"
        />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path
          d="M12 0c6.628 0 12 5.373 12 12 0 6.628-5.372 12-12 12S0 18.628 0 12C0 5.372 5.372 0 12 0z"
          fill="#339933"
        />
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M8 8h8v8H8z" fill="black" />
      </svg>
    ),
    Express: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <rect width="24" height="24" rx="3" fill="#000000" />
        <path d="M12 6l6 6-6 6-6-6z" fill="white" />
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" fill="#336791" />
        <path d="M8 8h8v8H8z" fill="white" />
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" fill="#47A248" />
        <path d="M8 8h8v8H8z" fill="white" />
      </svg>
    ),
    AWS: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <rect width="24" height="24" rx="3" fill="#FF9900" />
        <path d="M6 8h12v8H6z" fill="white" />
      </svg>
    ),
    Docker: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" fill="#2496ED" />
        <path d="M8 8h8v8H8z" fill="white" />
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" fill="#F05032" />
        <path d="M8 8h8v8H8z" fill="white" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" fill="#06B6D4" />
        <path d="M8 8h8v8H8z" fill="white" />
      </svg>
    ),
  }

  return icons[name] || <Code2 className="w-12 h-12 text-blue-600" />
}

const TechStack = () => {
  const techStack = [
    { name: "TypeScript", category: "Language", level: 90 },
    { name: "React", category: "Frontend", level: 95 },
    { name: "JavaScript", category: "Language", level: 92 },
    { name: "Node.js", category: "Backend", level: 85 },
    { name: "Express", category: "Backend", level: 82 },
    { name: "PostgreSQL", category: "Database", level: 80 },
    { name: "MongoDB", category: "Database", level: 78 },
    { name: "AWS", category: "Cloud", level: 75 },
    { name: "Docker", category: "DevOps", level: 70 },
    { name: "Git", category: "Tools", level: 92 },
    { name: "Tailwind CSS", category: "Styling", level: 90 },
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
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {techStack.map((tech, index) => (
            <motion.div key={tech.name} variants={fadeInUp} whileHover={{ scale: 1.05, y: -10 }} className="group">
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800 bg-white dark:bg-gray-900">
                <motion.div
                  className="mb-4 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <TechIcon name={tech.name} />
                </motion.div>
                <Badge variant="secondary" className="mb-3 text-xs">
                  {tech.category}
                </Badge>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{tech.name}</h3>

                {/* Skill Level Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{tech.level}%</span>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
