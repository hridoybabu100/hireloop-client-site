"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Magnifier, 
  ChartAreaStacked, 
  LayoutHeaderCellsLarge, 
  Bookmark, 
  LayoutHeaderCursor, 
  SquareArticle, 
  ChartDonut, 
  ChartLine
} from "@gravity-ui/icons";

export default function FeaturesSection() {
  // Features Data Structure
  const features = [
    {
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
      icon: Magnifier,
    },
    {
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
      icon: ChartAreaStacked,
    },
    {
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
      icon: LayoutHeaderCellsLarge,
    },
    {
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
      icon: Bookmark,
    },
    {
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
      icon: LayoutHeaderCursor,
    },
    {
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
      icon: SquareArticle,
    },
    {
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
      icon: ChartDonut,
    },
    {
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
      icon: ChartLine,
    },
  ];

  // Animation configuration for container cascading stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Staggers the appearance of each card sequentially
      },
    },
  };

  // Animation configuration for individual elements
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="w-full bg-black py-20 px-4 md:px-8 text-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Header Animations */}
      <div className="text-center mb-16 flex flex-col items-center max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-purple-500/30 px-3 py-1 rounded-md text-xs font-semibold tracking-widest text-purple-400 uppercase bg-purple-950/20 mb-4"
        >
          <span className="w-1 h-1 rounded-full bg-purple-400"></span>
          Features Job
          <span className="w-1 h-1 rounded-full bg-purple-400"></span>
        </motion.div>

        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent"
        >
          Everything you need <br /> to succeed
        </motion.h2>
      </div>

      {/* Grid Layout Animations */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl"
      >
        {features.map((feature, idx) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                backgroundColor: "rgba(24, 24, 27, 0.8)", // Subtle hover background tint (zinc-900)
                borderColor: "rgba(168, 85, 247, 0.4)", // Glow tint boundary change
                transition: { duration: 0.2 } 
              }}
              className="flex items-start p-5 gap-4 rounded-xl border border-zinc-800 bg-zinc-950/40 transition-all duration-300 select-none cursor-pointer group"
            >
              {/* Icon Container with Gravity UI Icon */}
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-purple-400 group-hover:text-purple-300 transition-colors shadow-inner">
                <IconComponent className="text-2xl" />
              </div>

              {/* Text Block */}
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}