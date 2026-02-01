"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Footer } from "@/components/Footer";

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
      <div className="absolute hidden md:block inset-0 z-0 select-none">
        <Image src="/images/homePageImages/bgImage1.jpeg" fill alt="Luxury Real Estate Background" className="object-cover " priority />
        {/* <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30" /> */}
      </div>
      <div className="absolute  md:hidden inset-0 z-0 select-none">
        <Image src="/images/homePageImages/bgImageMobile.png" fill alt="Luxury Real Estate Background" className="object-cover " priority />
        {/* <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30" /> */}
      </div>

      {/* Content Container */}
      <main className="relative z-10 flex min-h-screen flex-col  justify-center items-center px-4 md:px-20">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className=" max-w-2xl text-center">
          {/* Brand Name */}

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="mb-8   text-2xl md:text-5xl text-[#154415] leading-[1.5]   ">
            Stay Golden. Stay Glowing.{" "}
            <span className="uppercase  ">
              <br /> Naaf Glamoria
            </span>{" "}
            <br /> Coming Soon.
          </motion.h1>

          {/* Subheading */}

          {/* Contact Button */}
          <motion.div variants={itemVariants}>
            <a
              href="mailto:info@sat-realty.com"
              className="group inline-flex text-[#154415] items-center gap-3 rounded-full border border-[#154415]  px-6 py-4 md:text-lg  backdrop-blur-sm transition-all hover:border-[#154415] hover:bg-[#154415] hover:text-white"
            >
              <Mail className="h-4 w-4 group-hover:text-white   text-[#154415]" />
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4 group-hover:text-white  text-[#154415] transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        {/* Footer Info */}
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
}
