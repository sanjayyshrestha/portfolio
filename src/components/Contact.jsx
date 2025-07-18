"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Send,Users,Shield  } from "lucide-react"
import Card from "./ui/Card"
import Button from "./ui/Button"
import Input from "./ui/Input"
import Textarea from "./ui/Textarea"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Ready to discuss your next project or explore opportunities? Let's connect!
      </p>
    </motion.div>

    {/* This div now ensures the content is centered and takes appropriate width */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto" // Added max-w and mx-auto to center and constrain width
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Talk</h3>
      <div className="space-y-6">
        {[
          { icon: Mail, title: "Email", value: "sanjayshrestha772@gmail.com", color: "text-red-500" },
          { icon: Linkedin, title: "LinkedIn", value: "linkedin.com/in/sanjayyshrestha7", color: "text-blue-600" },
          {
            icon: Github,
            title: "GitHub",
            value: "github.com/sanjayyshrestha",
            color: "text-gray-900 dark:text-white",
          },
        ].map((contact, index) => (
          <motion.div
            key={contact.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 10 }}
            className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300"
          >
            <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${contact.color}`}>
              <contact.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{contact.title}</p>
              <p className="text-gray-600 dark:text-gray-300">{contact.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg"
      >
        <div className="flex items-center mb-4">
          <Users className="h-5 w-5 text-blue-600 mr-2" />
          <h4 className="font-semibold text-gray-900 dark:text-white">Available for</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"> {/* Adjusted for better mobile display */}
          {["Full-time roles", "Contract work", "Consulting", "Collaboration"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center text-sm text-gray-600 dark:text-gray-300"
            >
              <Shield className="h-3 w-3 text-green-500 mr-2" />
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

  )
}

export default Contact
