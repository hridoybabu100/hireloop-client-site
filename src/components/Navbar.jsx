"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.03)]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-bold">
            P
          </div>

          <div>
            <h2 className="text-white font-bold leading-none">
              Programming
            </h2>
            <p className="text-xs text-gray-400">Hero</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 rounded-full border border-white/10 bg-white/5 px-6 py-3">
          <Link
            href="/jobs"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Browse Jobs
          </Link>

          <Link
            href="/company"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Company
          </Link>

          <Link
            href="/pricing"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Pricing
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-violet-400 hover:text-violet-300 transition"
          >
            Sign In
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg"
          >
            Get Started
          </motion.button>
        </div>
      </nav>
    </header>
  );
}