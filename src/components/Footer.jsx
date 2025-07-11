"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.p className="text-gray-400 mb-4" whileHover={{ scale: 1.05 }}>
            © {new Date().getFullYear()} Sanjay Shrestha. All rights reserved.
          </motion.p>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/yourusername", color: "hover:text-white" },
              { icon: Linkedin, href: "https://linkedin.com/in/yourusername", color: "hover:text-blue-400" },
              { icon: Mail, href: "mailto:yourname@example.com", color: "hover:text-red-400" },
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.div key={index} whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <a href={href} className={`text-gray-400 ${color} transition-all duration-300`}>
                  <Icon className="h-6 w-6" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
