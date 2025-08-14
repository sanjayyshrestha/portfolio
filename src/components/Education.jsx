"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import { GraduationCap, MapPin, Calendar, Globe } from "lucide-react";
import kmc from '../assets/kmc-logo.jpg'
import kins from '../assets/kins-logo.jpg'

const education = [
  {
    degree: "+2 Science",
    school: "Kathmandu Model Secondary School",
    location: "Bagbazar,Kathmandu",
    period: "2023 - 2025",
    logo:kmc, // Add your school logo path here
    //gpa: "3.9/4.0", // Uncomment and add if needed
    //honors: "Magna Cum Laude", // Uncomment and add if needed
    // description:
    //   "Focused on foundational science and computer programming concepts with practical training.",
    // coursework: [
    //   "Database Mangement Systems",
    //   "Web technology",
    //   "Operating System",
    //   "Computer Networks",
    // ],
    // projects: [
    //   "Designed and implemented a Library Management System using C demonstrating basic data structures and file handling.",
    //   "Developed Bus Reservation and Telephone Billing systems and a Tic Tac Toe game in C applying modular programming and algorithmic logic.",
    // ],
  },
  {
    degree: "SEE",
    school: "Kathmandu International School",
    location: "Guheshwori,Kharibot",
    period: "2018 - 2023",
    //gpa: "3.75", // Uncomment and add if needed
    logo: kins, // Add your school logo path here
    //honors: "Magna Cum Laude", // Uncomment and add if needed
    // description:
    //   "Completed secondary education with a basic foundation in computer science including programming, computer hardware, internet basics and software applications.",
    // coursework: ["C programming"],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 transition-colors duration-300 ease-in-out">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full transition-colors duration-300 ease-in-out"></div>
        </div>

        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center">
            <div className="p-2 bg-blue-600 rounded-full mr-3 transition-colors duration-300 ease-in-out">
              <GraduationCap className="h-5 w-5 text-white transition-colors duration-300 ease-in-out" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-300 ease-in-out">
              Academic Background
            </h3>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 hidden md:block transition-colors duration-300 ease-in-out"></div>

            <div className="space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900 z-10 hidden md:block transition-colors duration-300 ease-in-out"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <Card className="p-5 bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 ease-in-out">
                      <div className="mb-4">
                        {/* Header with Logo and Degree */}
                        <div className="flex items-start gap-3 mb-3">
                          {/* Logo Container */}
                          <div className="flex-shrink-0">
                            {edu.logo ? (
                              <img
                                src={edu.logo}
                                alt={`${edu.school} logo`}
                                className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-lg bg-white dark:bg-gray-100 p-1 border border-gray-200 dark:border-gray-300 shadow-sm relative sm:mt-0 mt-1 transition-colors duration-300 ease-in-out"
                                onError={(e) => {
                                  // Fallback to icon if logo fails to load
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                            ) : null}
                            {/* Fallback Icon */}
                            <div 
                              className={`w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 transition-colors duration-300 ease-in-out ${edu.logo ? 'hidden' : 'flex'}`}
                              style={{ display: edu.logo ? 'none' : 'flex' }}
                            >
                              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400 transition-colors duration-300 ease-in-out" />
                            </div>
                          </div>

                          {/* Degree and School Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white sm:mb-1 break-words transition-colors duration-300 ease-in-out">
                              {edu.degree}
                            </h4>
                            <div className="text-sm sm:text-md font-medium text-gray-700 dark:text-gray-300 mb-2 break-words transition-colors duration-300 ease-in-out">
                              <span>{edu.school}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 dark:text-gray-400 mb-2 gap-1 sm:gap-3 transition-colors duration-300 ease-in-out">
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1 flex-shrink-0 transition-colors duration-300 ease-in-out" />
                            <span className="break-words">{edu.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1 flex-shrink-0 transition-colors duration-300 ease-in-out" />
                            <span>{edu.period}</span>
                          </div>
                        </div>

                        {(edu.gpa || edu.honors) && (
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            {edu.gpa && (
                              <Badge className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-xs transition-colors duration-300 ease-in-out">
                                GPA: {edu.gpa}
                              </Badge>
                            )}
                            {edu.honors && (
                              <Badge
                                variant="outline"
                                className="border-blue-500 text-blue-600 dark:text-blue-400 text-xs transition-colors duration-300 ease-in-out"
                              >
                                {edu.honors}
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>

                      {edu.description && (
                      <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm leading-relaxed transition-colors duration-300 ease-in-out">
                        {edu.description}
                      </p>
                      )}
                        

                      {edu.coursework &&(

                      <div className="mb-5">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center text-sm transition-colors duration-300 ease-in-out">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0 transition-colors duration-300 ease-in-out"></div>
                          Relevant Coursework
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <Badge
                              key={courseIndex}
                              variant="secondary"
                              className="text-xs bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 ease-in-out cursor-pointer break-words"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      )}

                      {edu.projects && (
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center text-sm transition-colors duration-300 ease-in-out">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0 transition-colors duration-300 ease-in-out"></div>
                            Notable Projects
                          </h5>
                          <ul className="space-y-1.5">
                            {edu.projects.map((project, projIndex) => (
                              <li
                                key={projIndex}
                                className="text-sm text-gray-600 dark:text-gray-300 flex items-start group transition-colors duration-300 ease-in-out"
                              >
                                <Globe className="w-3 h-3 mr-2 mt-1 text-gray-500 flex-shrink-0 group-hover:text-blue-500 transition-colors duration-300 ease-in-out" />
                                <span className="group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300 ease-in-out break-words">
                                  {project}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </Card>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};