'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Briefcase, Building2, DollarSign } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-zinc-950 border-b border-zinc-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left Aligned */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-violet-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div className="text-2xl font-semibold tracking-tight text-white">
              HireLoop
            </div>
          </Link>

          {/* Right Side Container */}
          <div className="flex items-center gap-8">
            {/* Desktop Navigation - Right Aligned */}
            <div className="hidden md:flex items-center gap-8">
              <Link 
                href="/jobs" 
                className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <Briefcase className="w-4 h-4" />
                Browse Jobs
              </Link>
              <Link 
                href="/companies" 
                className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <Building2 className="w-4 h-4" />
                Companies
              </Link>
              <Link 
                href="/pricing" 
                className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <DollarSign className="w-4 h-4" />
                Pricing
              </Link>
            </div>

            {/* Vertical Divider + Auth Buttons */}
            <div className="hidden md:flex items-center gap-6">
              {/* Vertical Divider */}
              <div className="w-px h-6 bg-zinc-700" />
              
              <Link 
                href="/sign-in" 
                className="text-sm font-medium text-zinc-300 hover:text-white px-5 py-2 transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/get-started" 
                className="bg-white hover:bg-zinc-100 text-zinc-900 px-6 py-2 rounded-2xl text-sm font-semibold transition-all active:scale-95"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-zinc-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-zinc-800 py-6 bg-zinc-950">
            <div className="flex flex-col gap-6 px-2">
              <Link 
                href="/jobs" 
                className="flex items-center gap-3 text-lg text-zinc-300 hover:text-white py-2 px-4 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                <Briefcase className="w-5 h-5" />
                Browse Jobs
              </Link>
              <Link 
                href="/companies" 
                className="flex items-center gap-3 text-lg text-zinc-300 hover:text-white py-2 px-4 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                <Building2 className="w-5 h-5" />
                Companies
              </Link>
              <Link 
                href="/pricing" 
                className="flex items-center gap-3 text-lg text-zinc-300 hover:text-white py-2 px-4 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                <DollarSign className="w-5 h-5" />
                Pricing
              </Link>

              <div className="h-px bg-zinc-800 my-4" />

              <Link 
                href="/sign-in" 
                className="text-center py-3 text-lg font-medium text-zinc-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                href="/get-started" 
                className="bg-white text-zinc-900 text-center py-3.5 rounded-2xl font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;