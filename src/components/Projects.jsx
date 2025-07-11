"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Award } from "lucide-react"
import Card from "./ui/Card"
import Badge from "./ui/Badge"
import leafstack from '../assets/leafstack.png'
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work demonstrating full-stack development and cloud deployment skills
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-200 dark:hover:border-blue-800 bg-white dark:bg-gray-900">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="absolute top-4 right-4"
                    >
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        <Award className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </motion.div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: tagIndex * 0.1 }}
                      >
                        <Badge
                          variant="outline"
                          className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a
                        href={project.github}
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </motion.div>
                    {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a
                        href={project.live}
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    </motion.div> */}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
