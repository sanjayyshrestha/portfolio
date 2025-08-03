"use client";

import { motion } from "framer-motion";
import Badge from "./ui/Badge";
import pfp from "../assets/pfp.jpeg"; // Use .webp if available for better quality
import { Github, Linkedin } from 'lucide-react'
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
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full "
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
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  {/* ✅ Set group here for stable hover detection */}
  <div className="w-72 h-72 md:w-80 md:h-80 [perspective:1000px] mx-auto group">
    <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
      {/* Front Side */}
      <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden">
        <img
          src={pfp}
          alt="Sanjay Shrestha - Full-stack Developer"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Back Side */}
    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#169948] text-white flex flex-col items-center justify-center rounded-xl px-6 py-4 text-center space-y-4">
  {/* Professional Headline */}
  <h3 className="text-lg md:text-xl font-semibold">Software Developer</h3>

  {/* Intro Summary */}
  <p className="text-sm md:text-base leading-relaxed">
    I’m Sanjay, a passionate developer from Nepal who enjoys building scalable applications and learning through hands-on projects across the full stack.
  </p>

  {/* Focus Area - (This was an empty comment, assuming you might add something here later) */}

  {/* Social Links at the bottom */}
  <div className="flex justify-center items-center gap-4 mt-4 relative top-2 sm:top-3"> {/* Added margin-top for spacing */}
    {/* LinkedIn Link */}
    <a
      href="https://www.linkedin.com/in/sanjayyshrestha7/" // <--- REPLACE WITH YOUR ACTUAL LINKEDIN URL
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-200 transition-colors"
      aria-label="LinkedIn Profile"
    >
      <Linkedin className="w-7 h-7 md:w-8 md:h-8" />
    </a>

    {/* GitHub Link */}
    <a
      href="https://github.com/sanjayyshrestha" // <--- REPLACE WITH YOUR ACTUAL GITHUB URL
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-300 transition-colors"
      aria-label="GitHub Profile"
    >
      <Github className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  </div>
</div>
    </div>
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
