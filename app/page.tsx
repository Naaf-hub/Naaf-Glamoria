"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-librecaslon  text-white selection:bg-[#a8856e] selection:text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image src="/images/homePageImages/background.jpeg" fill alt="Luxury Real Estate Background" className="object-cover " priority />
        {/* <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30" /> */}
      </div>

      {/* Content Container */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 md:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="mx-auto max-w-4xl text-center">
          {/* Brand Name */}
       

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="mb-8   text-4xl text-[#154415] leading-[1.5] font-medium  ">
            Stay Golden. Stay Glowing. <span className=" font-bold uppercase"><br /> naaf glamoria</span> <br /> Coming Soon.
          </motion.h1>

          {/* Subheading */}
        

          {/* Contact Button */}
          <motion.div variants={itemVariants}>
            <a
              href="mailto:info@sat-realty.com"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20  px-8 py-4 text-sm font-medium backdrop-blur-sm transition-all hover:border-[#a8856e] hover:bg-[#a8856e]/10 hover:text-[#a8856e]"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-0 right-0 text-center"
        >
          <p className="text-xs text-[#154415] tracking-widest ">&copy; {new Date().getFullYear()} Naaf Glamoria. All rights reserved.</p>
        </motion.div>
      </main>
    </div>
  );
}
