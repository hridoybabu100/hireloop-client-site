"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  // Cascading reveal variants for section content blocks
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Gap between item animation triggers
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[60vh] bg-black text-white flex flex-col items-center justify-center px-4 overflow-hidden select-none">
      
      {/* 1. Next.js Optimized Grid Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-80 pointer-events-none z-0">
        <Image
          src="/images/cta-bg.png" // Place your downloaded grid image here
          alt="Abstract Perspective Grid Layout"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105"
        />
        {/* Subtle vignette gradient mask overlays to merge graphic into edge boundaries smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* 2. Interactive Motion Elements Container */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center px-2"
      >
        {/* Main Header Text Heading */}
        <motion.h2
          variants={childVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]"
        >
          Your next role is <br /> already looking for you
        </motion.h2>

        {/* Subtitle Information Block */}
        <motion.p
          variants={childVariants}
          className="text-zinc-400 text-sm sm:text-base max-w-xl mt-5 leading-relaxed font-normal"
        >
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </motion.p>

        {/* Action Call Buttons wrapper */}
        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto"
        >
          {/* Main Core Conversion CTA Button */}
        <Link href={'/auth/sing'}>
          <motion.button
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            type="button"
            className="w-full sm:w-auto h-12 px-6 rounded-xl bg-white text-black font-semibold text-sm shadow-md hover:bg-zinc-100 transition-colors duration-200 cursor-pointer flex items-center justify-center"
          >
            Create a free account
          </motion.button>
        </Link>

          {/* Secondary Subversive Direction Action Button */}
          <motion.button
            whileHover={{ 
              scale: 1.03,
              backgroundColor: "rgba(24, 24, 27, 0.8)",
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            type="button"
            className="w-full sm:w-auto h-12 px-6 rounded-xl bg-zinc-950/40 border border-zinc-800 text-zinc-200 font-medium text-sm transition-all duration-200 backdrop-blur-sm cursor-pointer flex items-center justify-center"
          >
            View pricing
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
}