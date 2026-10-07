"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import type { HomeData } from "@/types/event";
import AvatarGroup from "./AvatarGroup";

interface HeroSectionProps {
  data: HomeData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-primary-50/60 via-white to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-xs font-semibold tracking-widest mb-6"
            >
              {data.eyebrow}
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-5"
            >
              {data.title}{" "}
              <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-blue-500 bg-clip-text text-transparent">
                {data.highlight}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-base lg:text-lg text-gray-500 leading-relaxed max-w-lg mb-8"
            >
              {data.description}
            </motion.p>
          </motion.div>

          {/* Right - Hero Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Decorative lines */}
            <div className="absolute -top-4 right-12 w-20 h-20">
              <svg
                viewBox="0 0 80 80"
                fill="none"
                className="w-full h-full text-primary-300/60"
              >
                <path
                  d="M10 5C30 5 60 15 70 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M25 2C40 2 65 10 75 45"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Decorative curved text */}
            <div className="absolute -top-2 right-0 z-20">
              <svg
                viewBox="0 0 140 80"
                className="w-36 h-20 text-primary-400/70"
              >
                <path
                  id="curve"
                  d="M10 70 Q70 0 130 30"
                  fill="none"
                  stroke="none"
                />
                <text
                  className="fill-primary-500/80 font-semibold"
                  fontSize="13"
                  letterSpacing="1"
                >
                  <textPath href="#curve">
                    Good Events Better People
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Main Image */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/15 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src={data.heroImage}
                alt="Campus events"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating Card - Events Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -left-8 top-8 z-30 bg-white rounded-2xl shadow-xl shadow-gray-200/60 p-3.5 flex items-center gap-3 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={data.heroImage}
                  alt="Events"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 leading-tight">
                  {data.eventStats.events}
                </p>
                <p className="text-xs text-gray-400 font-medium">
                  Events this semester
                </p>
              </div>
            </motion.div>

            {/* Floating Card - Students Joined */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="absolute -right-4 bottom-24 z-30 bg-white rounded-2xl shadow-xl shadow-gray-200/60 p-3.5 border border-gray-100"
            >
              <p className="text-xl font-bold text-gray-900 leading-tight">
                {data.eventStats.students}
              </p>
              <p className="text-xs text-gray-400 font-medium mb-2">
                Students Joined
              </p>
              <AvatarGroup count={25} max={4} />
            </motion.div>

            {/* Create Event Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="absolute -right-2 bottom-2 z-30 w-28 h-28 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 shadow-xl shadow-primary-600/30 flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl hover:shadow-primary-600/40 hover:scale-105 transition-all duration-300 group"
            >
              <Calendar className="w-5 h-5 text-white/90 mb-1" />
              <span className="text-[11px] font-semibold text-white text-center leading-tight">
                Create
                <br />
                Your Event
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-white/80 mt-1 group-hover:translate-x-0.5 transition-transform" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
