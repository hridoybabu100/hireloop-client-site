"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, CrownDiamond, Flame, ThunderboltFill } from "@gravity-ui/icons";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' or 'yearly'

  const plans = [
    {
      id: "starter",
      name: "Starter",
      icon: CrownDiamond,
      iconColor: "text-pink-400",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      isPopular: false,
    },
    {
      id: "growth",
      name: "Growth",
      icon: Flame,
      iconColor: "text-purple-400",
      monthlyPrice: 17,
      yearlyPrice: 12, // discounted price value per month
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      isPopular: true, // Highlights the center card dynamically matching screenshot layout
    },
    {
      id: "premium",
      name: "Premium",
      icon: ThunderboltFill,
      iconColor: "text-indigo-400",
      monthlyPrice: 99,
      yearlyPrice: 74,
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      isPopular: false,
    },
  ];

  // Section Component Entrance Staggers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  return (
    <section className="relative w-full bg-black py-24 px-4 md:px-8 text-white flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* --- EXTRA FACILITY: CONTINUOUS FLOATING BACKGROUND CIRCLE ANIMATIONS --- */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          x: [-20, 20, -20],
          y: [-10, 30, -10],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{
          scale: [1.2, 1, 1.2],
          x: [40, -30, 40],
          y: [20, -15, 20],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* Main Section Header */}
      <div className="text-center mb-12 flex flex-col items-center max-w-2xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-purple-500/30 px-3 py-1 rounded-md text-xs font-semibold tracking-widest text-purple-400 uppercase bg-purple-950/20 mb-4"
        >
          <span className="w-1 h-1 rounded-full bg-purple-400"></span>
          Pricing
          <span className="w-1 h-1 rounded-full bg-purple-400"></span>
        </motion.div>

        <motion.h2 
          initial={{ y: -15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent leading-tight"
        >
          Pay for the leverage, <br /> not the listings
        </motion.h2>
      </div>

      {/* --- SMART INTERACTIVE BILLING TOGGLE --- */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex items-center bg-zinc-900/90 p-1 rounded-full border border-zinc-800 shadow-inner mb-16"
      >
        <button
          onClick={() => setBillingCycle("monthly")}
          className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full cursor-pointer z-10 ${
            billingCycle === "monthly" ? "text-black font-semibold" : "text-zinc-400 hover:text-white"
          }`}
        >
          Monthly
          {billingCycle === "monthly" && (
            <motion.div 
              layoutId="activeBillingBg" 
              className="absolute inset-0 bg-white rounded-full -z-10"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}
        </button>

        <button
          onClick={() => setBillingCycle("yearly")}
          className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full cursor-pointer flex items-center gap-2 z-10 ${
            billingCycle === "yearly" ? "text-black font-semibold" : "text-zinc-400 hover:text-white"
          }`}
        >
          Yearly
          {billingCycle === "yearly" && (
            <motion.div 
              layoutId="activeBillingBg" 
              className="absolute inset-0 bg-white rounded-full -z-10"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-all ${
            billingCycle === "yearly" ? "bg-purple-600 text-white" : "bg-purple-500/20 text-purple-400"
          }`}>
            25%
          </span>
        </button>
      </motion.div>

      {/* --- CARDS CONFIGURATION GRID --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl relative z-10"
      >
        {plans.map((plan) => {
          const IconComponent = plan.icon;
          const currentPrice = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

          return (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 min-h-[480px] ${
                plan.isPopular 
                  ? "bg-gradient-to-b from-zinc-900/90 to-zinc-950 border-zinc-700/80 shadow-[0_0_30px_rgba(168,85,247,0.15)]" 
                  : "bg-zinc-950/40 border-zinc-900 hover:border-zinc-800"
              }`}
            >
              <div>
                {/* Header Information Element inside Card */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-zinc-900 border border-zinc-800 ${plan.iconColor}`}>
                      <IconComponent className="text-xl" />
                    </div>
                    <span className="text-lg font-bold text-zinc-100">{plan.name}</span>
                  </div>

                  {/* Pricing Output Counter Block */}
                  <div className="flex items-baseline">
                    <span className="text-3xl font-extrabold">$</span>
                    <motion.span 
                      key={currentPrice}
                      initial={{ scale: 0.9, opacity: 0.4 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-4xl font-extrabold tracking-tight"
                    >
                      {currentPrice}
                    </motion.span>
                    <span className="text-xs text-zinc-500 ml-1 font-medium">/month</span>
                  </div>
                </div>

                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                  Start building your insights hub:
                </p>

                {/* Features Listing Array */}
                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                      <div className="flex-shrink-0 mt-0.5 p-0.5 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-500">
                        <Plus className="text-xs" />
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* --- ACTION BUTTON WITH CARD IMAGE CONTAINER ACCOMMODATION --- */}
              <div className="flex flex-col gap-4 mt-auto">
                
                {/* Smart Placeholder for Card Image/Graphic Facility */}
                {plan.isPopular && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-purple-500/10 border border-purple-500/20 flex items-center justify-center overflow-hidden mb-2"
                  >
                    {/* Replace the content inside here with your <img> component when needed */}
                    <span className="text-[10px] text-purple-400/80 tracking-widest uppercase font-mono">
                      [ Optional Premium Asset Image Space ]
                    </span>
                  </motion.div>
                )}

                <button
                  type="button"
                  className={`w-full py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 group cursor-pointer ${
                    plan.isPopular
                      ? "bg-white text-black hover:bg-zinc-200 shadow-lg"
                      : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800"
                  }`}
                >
                  <span>Choose This Plan</span>
                  <ArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}