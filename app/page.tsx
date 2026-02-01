"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react"; // Added Mail icon for mobile design
import Image from "next/image";
import Navbar from "@/components/Navbar";

// 1. Animation Variants (Reused for consistent feel)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden font-librecaslon text-[#154415]">
      {/* 1. Background Image */}
      <div className="absolute hidden lg:block inset-0 z-0">
        <Image src="/images/homePageImages/dESKTOP2.png" alt="Naaf Glamoria Background" fill className="object-cover" priority />
        {/* Optional: Mobile-only gradient at bottom to ensure text readability if image is dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent lg:hidden" />
      </div>
      <div className="absolute lg:hidden inset-0 z-0">
        <Image src="/images/homePageImages/mobile.jpeg" alt="Naaf Glamoria Background" fill className="object-cover" priority />
        {/* Optional: Mobile-only gradient at bottom to ensure text readability if image is dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent lg:hidden" />
      </div>

      {/* 2. Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* 3. Main Layout Content */}
      <main className="relative z-10 h-screen w-full pt-20">
        <div className="grid h-full w-full grid-cols-1 lg:grid-cols-12">
          {/* Left Spacer (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-6" />

          {/* Content Area */}
          <div className="col-span-1 lg:col-span-6 h-full w-full">
            {/* =========================================
                DESKTOP VERSION (Hidden on Mobile)
                (Kept exactly as requested)
               ========================================= */}
            <div className="hidden lg:flex h-full flex-col justify-center items-center px-0 pr-32 xl:pr-48 text-center">
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
                <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl xl:text-8xl leading-[1.2] md:leading-[1.1] font-medium">
                  Coming Soon...
                </motion.h1>

                <div className="flex flex-col items-center gap-3">
                  <motion.p variants={itemVariants} className="text-xl md:text-3xl font-bold text-[#154415]">
                    Stay Golden Stay Glowing
                  </motion.p>
                  <motion.p variants={itemVariants} className="font-caslon font-medium text-xl text-[#154415] md:text-2xl ">
                    Naaf Glamoria
                  </motion.p>
                </div>

                <motion.div variants={itemVariants} className="pt-4 flex justify-center">
                  <a
                    href="https://wa.me/918590715189?text=Hi%20Naaf%20Glamoria,%20I%E2%80%99m%20interested%20in%20your%20unique%20jewelry%20collection.%20Could%20you%20help%20me%20find%20the%20perfect%20piece?"
                    target="_blank"
                    className="group flex items-center gap-3 px-8 py-3 border border-[#154415] rounded-full hover:bg-[#154415] hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-sm"
                  >
                    <span className="text-base md:text-lg tracking-wide">Contact Us</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* =========================================
                MOBILE VERSION (Hidden on Desktop)
                (Matches your uploaded image exactly)
               ========================================= */}
            <div className="flex lg:hidden h-full font-librecaslon flex-col justify-end items-center pb-5 px-6 text-center">
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center gap-1">
                {/* 1. Main Headline "Stay Golden..." */}
                <motion.h2 variants={itemVariants} className="text-[2.5rem] uppercase leading-[1.1] font-medium text-[#154415]">
                  Coming Soon
                </motion.h2>

                {/* 2. Brand Name "NAAF GLAMORIA" */}
                <motion.p variants={itemVariants} className="mt-2 text-lg  font-extrabold tracking-wider  text-[#154415]">
                  Stay Golden Stay Glowing
                </motion.p>

                {/* 3. "Coming Soon." */}
                <motion.p variants={itemVariants} className="text-lg mt-4 font-medium text-[#154415]">
                  NAAF GLAMORIA
                </motion.p>

                {/* 4. Button (With Mail Icon as per image) */}
                <motion.div variants={itemVariants} className="pt-8">
                  <a
                    href="https://wa.me/918590715189?text=Hi%20Naaf%20Glamoria,%20I%E2%80%99m%20interested%20in%20your%20unique%20jewelry%20collection.%20Could%20you%20help%20me%20find%20the%20perfect%20piece?"
                    target="_blank"
                    className="flex items-center gap-3 px-8 py-3 border border-[#154415] rounded-full bg-transparent text-[#154415] hover:bg-[#154415] hover:text-white transition-colors duration-300"
                  >
                    <span className="text-base font-medium">Contact Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
