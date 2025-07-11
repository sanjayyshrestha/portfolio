"use client"

import { motion } from "framer-motion"
import { Code2, Server, Database, Cloud } from "lucide-react"
import Card from "./ui/Card"
import Badge from "./ui/Badge"

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a strong foundation in modern web technologies and a growing
              expertise in cloud infrastructure and DevOps practices. My journey in software development is driven by a
              love for creating scalable, efficient solutions that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With proficiency in TypeScript, React, and Node.js, I build robust applications from concept to
              deployment. I'm particularly interested in microservices architecture, containerization, and cloud-native
              development patterns that enable teams to deliver software faster and more reliably.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently expanding my knowledge in AWS services, Docker, and CI/CD pipelines to bridge the gap between
              development and operations. I believe in writing clean, maintainable code and following best practices for
              security and performance.
            </p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Code2, title: "Frontend", desc: "React, TypeScript, Next.js", color: "text-blue-600" },
              { icon: Server, title: "Backend", desc: "Node.js, Express, APIs", color: "text-green-600" },
              { icon: Database, title: "Database", desc: "PostgreSQL, MongoDB", color: "text-purple-600" },
              { icon: Cloud, title: "Cloud", desc: "AWS, Docker, CI/CD", color: "text-orange-600" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="text-center p-6 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                  <item.icon className={`h-12 w-12 ${item.color} mx-auto mb-4`} />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
