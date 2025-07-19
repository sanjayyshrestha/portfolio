"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Intro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const text = "SANJAY".split("");

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    initial: { y: 50, opacity: 0, scale: 0.8, rotateX: 90 },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #000000 0%, #1a1a1a 30%, #2d2d2d 60%, #000000 100%)",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.5,
        delay: 2.5,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {/* Background blur */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        exit={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Animated Text */}
      <motion.h1
        className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight flex gap-1"
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          textShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {text.map((letter, i) => (
          <motion.span
            key={i}
            className={`inline-block ${
              i >= 3
                ? "bg-clip-text text-transparent"
                : "text-white"
            }`}
            style={
              i >= 3
                ? {
                    backgroundImage:
                      "linear-gradient(to right, #2563EB, #9333EA)",
                    filter:
                      "drop-shadow(0 4px 20px rgba(37, 99, 235, 0.6))",
                  }
                : {}
            }
            variants={letterVariants}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Particle sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-60"
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          initial={{ scale: 0, opacity: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            y: [-20, 0, 20],
          }}
          transition={{
            duration: 2,
            delay: 1 + i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
