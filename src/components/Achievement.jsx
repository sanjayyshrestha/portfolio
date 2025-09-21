"use client"

import { motion } from "framer-motion"
import { Award, CalendarDays } from "lucide-react"
import locusLogo from '../assets/locus-logo.png'
import locusFellowship from '../assets/locus-fellowship.jpg'
import leapFrog60 from '../assets/lf-60.jpg'
import lfLogo from '../assets/lf-logo.jpeg'
const CertificationsAchievements = () => {
  const certifications = [
    {
      id: 1,
      title: "Software Fellowship",
      issuer: "LOCUS",
      issuedDate: "Aug 2025",
      certificateImage: locusFellowship,
      issuerLogo: locusLogo,
    },
     {
      id: 2,
      title: "60 Days Challenge",
      issuer: "Leapfrog Technology,Inc.",
      issuedDate: "Sep 2025",
      certificateImage: leapFrog60,
      issuerLogo: lfLogo,
    },
    
  ]

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="transform transition-all duration-300"
            >
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src={cert.certificateImage || "/placeholder.svg"}
                    alt={`${cert.title} Certificate`}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 w-10 h-10 mr-3">
                      <img
                        src={cert.issuerLogo || "/placeholder.svg"}
                        alt={`${cert.issuer} Logo`}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">{cert.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center text-gray-500 text-xs">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span>Issued {cert.issuedDate}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsAchievements