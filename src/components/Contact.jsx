"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Users, Shield } from "lucide-react"

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Ready to discuss your next project or explore opportunities? Let's connect!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Let's Talk</h3>
          <div className="space-y-6">
            {[
              { icon: Mail, title: "Email", value: "sanjayshrestha772@gmail.com", color: "text-red-500" },
              { icon: Linkedin, title: "LinkedIn", value: "linkedin.com/in/sanjayyshrestha7", color: "text-blue-600" },
              { icon: Github, title: "GitHub", value: "github.com/sanjayyshrestha", color: "text-gray-900 dark:text-white" },
            ].map((contact) => (
              <div
                key={contact.title}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300"
              >
                <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${contact.color} transition-colors duration-300`}>
                  <contact.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300">{contact.title}</p>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{contact.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Single parent animation controls everything */}
          {/* <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <Users className="h-5 w-5 text-blue-600 mr-2 transition-colors duration-300" />
              <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">Available for</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Full-time roles", "Contract work", "Consulting", "Collaboration"].map((item) => (
                <div
                  key={item}
                  className="flex items-center text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300"
                >
                  <Shield className="h-3 w-3 text-green-500 mr-2 transition-colors duration-300" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
