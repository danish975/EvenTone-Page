"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#", active: false },
  { label: "Events", href: "#", active: true },
  { label: "Communities", href: "#", active: false },
  { label: "About", href: "#", active: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md shadow-primary-500/25">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Event<span className="text-primary-600">One</span>
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  link.active
                    ? "bg-primary-600 text-white shadow-md shadow-primary-600/25"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              className="hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search className="w-[18px] h-[18px] text-gray-600" />
            </button>
            <button
              className="relative hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-[18px] h-[18px] text-gray-600" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="hidden md:block w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden ring-2 ring-primary-100 cursor-pointer ml-1">
              <Image
                src="/images/hero/campus.jpg"
                alt="User avatar"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    link.active
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
