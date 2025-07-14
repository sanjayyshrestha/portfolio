"use client"

import { motion } from "framer-motion"
import { Code, Server, Database, Cloud } from "lucide-react"

import Card from "./ui/Card"
import Badge from "./ui/Badge"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const skills = [
    { icon: Code, title: "Frontend", desc: "React, TypeScript, Next.js", color: "text-blue-600" },
                { icon: Server, title: "Backend", desc: "Node.js, Express, APIs", color: "text-green-600" },
                { icon: Database, title: "Database", desc: "PostgreSQL, MongoDB", color: "text-purple-600" },
                { icon: Cloud, title: "Cloud", desc: "AWS, Docker, CI/CD", color: "text-orange-600" },
  ]

  const tags = ["Problem Solver", "Team Player", "Quick Learner", "Detail Oriented"]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            variants={itemVariants}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div className="space-y-6" initial="hidden" animate="visible" variants={containerVariants}>
            <motion.p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" variants={itemVariants}>
              I am a passionate full-stack developer with a strong foundation in modern web technologies and a growing
              expertise in cloud infrastructure and DevOps practices. My journey in software development is driven by a
              love for creating scalable, efficient solutions that solve real-world problems.
            </motion.p>
            <motion.p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" variants={itemVariants}>
              With proficiency in TypeScript, React and Node.js, I build robust applications from concept to deployment.
              I am particularly interested in microservices architecture, containerization and cloud-native development
              patterns that enable teams to deliver software faster and more reliably.
            </motion.p>
            <motion.p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" variants={itemVariants}>
              Currently expanding my knowledge in AWS services, Docker and CI/CD pipelines to bridge the gap between
              development and operations. I believe in writing clean, maintainable code and following best practices for
              security and performance.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
              <Card className="text-center p-6 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                <skill.icon className={`h-12 w-12 ${skill.color}  mx-auto mb-4`} />

  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{skill.desc}</p>
                  </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

       <motion.div
                className="flex flex-wrap gap-4 pt-4 mt-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {["Problem Solver", "Team Player", "Quick Learner", "Detail Oriented"].map((trait, index) => (
                  <motion.div
                    key={trait}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Badge variant="secondary" className="px-3 py-1 text-sm">
                      {trait}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
      </div>
    </section>
  )
}


