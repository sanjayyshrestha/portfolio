"use client";

import React from 'react';
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import { GraduationCap, MapPin, Calendar, Globe } from "lucide-react";

const education = [
  {
    "degree": "+2 Science",
    "school": "Kathmandu Model Secondary School",
    "location": "Bagbazar,Kathmandu",
    "period": "2023 - 2025",
    //gpa: "3.9/4.0", // Uncomment and add if needed
    //honors: "Magna Cum Laude", // Uncomment and add if needed
    description: "Focused on foundational science and computer programming concepts with practical training.",
    coursework: [
      "Database Mangement Systems",
      "Web technology",
      "Object Oriented Programming",
      "Operating System",
      "Computer Networks",
    ],
    projects: [
      "Designed and implemented a Library Management System using C demonstrating basic data structures and file handling.",
      "Developed Bus Reservation and Telephone Billing systems and a Tic Tac Toe game in C applying modular programming and algorithmic logic."
    ],
  },
  {
    "degree": "SEE",
    "school": "Kathmandu International School",
    "location": "Guheshwori,Kharibot",
    "period": "2018 - 2023",
    gpa: "3.75", // Uncomment and add if needed
    //honors: "Magna Cum Laude", // Uncomment and add if needed
    description: "Completed secondary education with a basic foundation in computer science including programming, computer hardware, internet basics and software applications.",
    coursework: [
      "C programming",
      "Computer Networks",
    ],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center">
            <div className="p-2 bg-blue-600 rounded-full mr-3">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Academic Background</h3>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 hidden md:block"></div>

            <div className="space-y-10">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900 z-10 hidden md:block"></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="p-1 bg-blue-500 rounded-full">
                            <GraduationCap className="w-3 h-3 text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                        </div>
                        
                        <div className="text-md font-medium text-gray-700 dark:text-gray-300 mb-1">
                          <span>{edu.school}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span className="mr-3">{edu.location}</span>
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{edu.period}</span>
                        </div>
                        
                        {/* Conditional rendering for GPA and Honors if they exist */}
                        {(edu.gpa || edu.honors) && (
                          <div className="flex items-center gap-3 mb-3">
                            {edu.gpa && (
                              <Badge className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                                GPA: {edu.gpa}
                              </Badge>
                            )}
                            {edu.honors && (
                              <Badge variant="outline" className="border-blue-500 text-blue-600 dark:text-blue-400">
                                {edu.honors}
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="mb-5">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          Relevant Coursework
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <Badge 
                              key={courseIndex}
                              variant="secondary" 
                              className="text-xs bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                       
                      {edu.projects && (
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            Notable Projects
                          </h5>
                          <ul className="space-y-1.5">
                            {edu.projects.map((project, projIndex) => (
                              <li
                                key={projIndex}
                                className="text-sm text-gray-600 dark:text-gray-300 flex items-start group"
                              >
                                <Globe className="w-3 h-3 mr-2 mt-1 text-gray-500 flex-shrink-0 group-hover:text-blue-500 transition-colors" />
                                <span className="group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};