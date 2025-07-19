"use client";

import { motion } from "framer-motion";
import Badge from "./ui/Badge";
import pfp from "../assets/pfp.jpeg"; // Use .webp if available for better quality

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const personalTraits = [
    "Problem Solver",
    "Team Player",
    "Quick Learner",
    "Detail Oriented",
    "Adaptable",
    "Communicative",
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="flex flex-col items-center justify-center text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mt-2"
            variants={itemVariants}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Left Column: Text */}
          <motion.div
            className="order-2 sm:order-1 space-y-6 text-base md:text-lg  md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.p
  className="text-gray-700 dark:text-gray-300 leading-relaxed"
  variants={itemVariants}
>
  👋 Hi, I’m Sanjay, a computer science enthusiast and software developer from Nepal. I enjoy building clean, scalable applications and continuously improving my skills across both front-end and back-end development.
</motion.p>

<motion.p
  className="text-gray-700 dark:text-gray-300 leading-relaxed"
  variants={itemVariants}
>
  Lately, I’ve been exploring to understand how to deliver software more efficiently and reliably. I am always curious about how things work under the hood and love learning through hands-on projects.
</motion.p>

          </motion.div>

          {/* Right Column: Image */}
         <motion.div
  className="flex justify-center items-center p-4 order-1 sm:order-2 md:w-2/5"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
>
  <div
    className="
      relative
      w-72 h-72 md:w-80 md:h-80
      rounded-xl overflow-hidden
     border-none
      group
      flex items-center justify-center
      mx-auto
    "
  >
    <img
      src={pfp}
      alt="Sanjay Shrestha - Full-stack Developer"
      className="w-full h-full object-cover transition-transform duration-500"
      loading="lazy"
    />
  </div>
</motion.div>

        </div>

        {/* Personal Traits */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {personalTraits.map((trait) => (
            <motion.div key={trait} variants={itemVariants}>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {trait}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
