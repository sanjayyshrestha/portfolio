"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Intro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const text = "SANJAY".split("");

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    initial: { y: 40, opacity: 0, rotateX: 90 },
    animate: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #000000 0%, #1a1a1a 30%, #2d2d2d 60%, #000000 100%)",
      }}
      initial={{ opacity: 1, y: 0, scale: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -150,
        scale: 1.2,
      }}
      transition={{
        duration: 0.7,
        delay: 1.5,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {/* Subtle glow layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.05), transparent 70%)",
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        exit={{ scale: 1.3, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Animated name */}
      <motion.h1
        className="text-white font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight flex gap-1"
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
        }}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {text.map((letter, i) => (
          <motion.span
            key={i}
            className={`inline-block ${
              i >= 3 ? "bg-clip-text text-transparent" : "text-white"
            }`}
            style={
              i >= 3
                ? {
                    backgroundImage:
                      "linear-gradient(to right, #2563EB, #9333EA)",
                    filter:
                      "drop-shadow(0 2px 10px rgba(147, 51, 234, 0.4))",
                  }
                : {}
            }
            variants={letterVariants}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Sparkle particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-50"
          style={{
            left: `${20 + i * 12}%`,
            top: `${35 + (i % 2) * 25}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
            y: [-10, 0, 10],
          }}
          transition={{
            duration: 1.6,
            delay: 0.8 + i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
