import React from 'react'
import Card from "./ui/Card"
import Badge from "./ui/Badge"
import { GraduationCap, MapPin, Calendar, Globe } from "lucide-react"

const education = [
  {
   "degree": "+2 Science",
  "school": "Kathmandu Model Secondary School",
  "location": "Bagbazar,Kathmandu",  // If location needs updating, just let me know
  "period": "2023 - 2025",
    //gpa: "3.9/4.0",
    //honors: "Magna Cum Laude",
    description: "Focused on foundational science and computer programming concepts with practical training.",
    coursework: [
      "Database Systems",
      "Software Engineering",
      "Web Development",
      "Cloud Computing",
      "Object Oriented Programming",
      "Operating System",
      "Computer Networks",
    ],
    projects: [
      "Built a library management system as final project",
       "Developed a dynamic e-commerce website using PHP, SQL, HTML/CSS, and jQuery",
    "Created a student management system with CRUD functionality using PHP and MySQL",
    ],
  },
]

export const Experience = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-4">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Academic Background</h3>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-500 hidden md:block"></div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10 hidden md:block"></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                            <GraduationCap className="w-4 h-4 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                        </div>
                        
                        <div className="flex items-center text-green-600 dark:text-green-400 font-semibold mb-2">
                          <span className="text-lg">{edu.school}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="mr-4">{edu.location}</span>
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{edu.period}</span>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                            GPA: {edu.gpa}
                          </Badge>
                          <Badge variant="outline" className="border-green-500 text-green-600 dark:text-green-400">
                            {edu.honors}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          Relevant Coursework
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <Badge 
                              key={courseIndex}
                              variant="secondary" 
                              className="text-xs hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-pointer"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          Notable Projects
                        </h5>
                        <ul className="space-y-2">
                          {edu.projects.map((project, projIndex) => (
                            <li
                              key={projIndex}
                              className="text-sm text-gray-600 dark:text-gray-300 flex items-start group"
                            >
                              <Globe className="w-3 h-3 mr-2 mt-1 text-blue-500 flex-shrink-0 group-hover:text-purple-500 transition-colors" />
                              <span className="group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                                {project}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
  )
}