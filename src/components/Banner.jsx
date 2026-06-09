"use client";

import React from "react";
import { motion } from "framer-motion";
import { Magnifier, LocationArrow } from "@gravity-ui/icons";

export default function Banner() {
  // Animation Configuration Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Smoothly delays the entry of each child block
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  };

  const trendingPositions = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

  return (
    <section className="relative w-full bg-black min-h-[85vh] py-20 px-4 flex flex-col items-center justify-center text-white overflow-hidden select-none">
      
      {/* Background Radial Ambient Glow (Bottom Sphere Look) */}
      <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[350px] bg-gradient-to-t from-indigo-600/30 via-purple-600/10 to-transparent rounded-full blur-[80px] pointer-events-none z-0" />

      {/* Main Animation Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center"
      >
        
        {/* 1. Badge Announcement */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-zinc-950/80 border border-zinc-800/80 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-zinc-400 shadow-xl backdrop-blur-sm mb-6"
        >
          <span role="img" aria-label="briefcase" className="text-sm">💼</span>
          <span className="font-bold text-white">50,000+</span> 
          <span className="text-zinc-500 font-light">NEW JOBS THIS MONTH</span>
        </motion.div>

        {/* 2. Main Main Title Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent leading-[1.15]"
        >
          Find Your Dream Job Today
        </motion.h1>

        {/* 3. Description Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mt-4 leading-relaxed font-normal"
        >
          HireLoop connects top talent with world-class companies. Browse thousands of
          curated opportunities and land your next role — faster.
        </motion.p>

        {/* 4. Dual Input Search Bar Container */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-3xl mt-10 p-1.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md flex flex-col sm:flex-row items-center gap-2 shadow-2xl focus-within:border-purple-500/50 transition-colors duration-300"
        >
          {/* Column 1: Job Title / Keyword */}
          <div className="relative flex items-center flex-1 w-full px-2">
            <Magnifier className="absolute left-3 text-xl text-zinc-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent pl-10 pr-3 py-3 text-sm text-zinc-200 placeholder-zinc-500 outline-none"
            />
          </div>

          {/* Separation Border line for large views */}
          <div className="hidden sm:block h-6 w-[1px] bg-zinc-800" />

          {/* Column 2: Location Filtering */}
          <div className="relative flex items-center flex-1 w-full px-2">
            <LocationArrow className="absolute left-3 text-xl text-zinc-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent pl-10 pr-3 py-3 text-sm text-zinc-200 placeholder-zinc-500 outline-none"
            />
          </div>

          {/* Interactive Search Execution Action Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            className="w-full sm:w-auto h-11 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 transition-colors cursor-pointer"
          >
            <Magnifier className="text-lg" />
            <span className="sm:hidden lg:inline">Search</span>
          </motion.button>
        </motion.div>

        {/* 5. Trending Hot Tag Pills Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs text-zinc-500"
        >
          <span className="font-medium">Trending Position</span>
          <div className="flex flex-wrap gap-2">
            {trendingPositions.map((position, index) => (
              <motion.button
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(39, 39, 42, 0.6)",
                  borderColor: "rgba(168, 85, 247, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 rounded-full bg-zinc-900/40 border border-zinc-800 text-zinc-300 transition-colors cursor-pointer font-medium"
              >
                {position}
              </motion.button>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}