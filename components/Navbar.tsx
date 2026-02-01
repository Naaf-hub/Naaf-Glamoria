"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full text-[#154415] bg-white">
      {/* =======================
          DESKTOP LAYOUT
          ======================= */}
      <div className="hidden md:flex flex-col w-full">
        {/* Top Row: Navigation Links */}
        <div className="flex justify-center items-center py-4 border-b border-[#154415]">
          <ul className="flex space-x-8 text-xs font-medium font-montserrat tracking-widest">
            <li>
              <a href="#" className="hover:text-[#154415] transition-colors">
                SHOP
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#154415] transition-colors">
                COLLECTIONS
              </a>
            </li>
            <li>
              {/* Assuming 'OUR VALUES' is a page, using placeholder # for now */}
              <a href="#" className="hover:text-[#154415] transition-colors">
                OUR VALUES
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#154415] transition-colors">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#154415] transition-colors">
                CONTACT
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom Row: Search, Logo, Icons */}
        <div className="flex justify-between items-center px-12 py-10">
          {/* Left: Search */}
          <div className="flex items-center space-x-2 cursor-pointer hover:text-[#154415] transition-colors">
            <Search className="w-4 h-4" />
            <span className="text-xs font-medium font-montserrat tracking-widest">SEARCH</span>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="/">
              <Image src="/svgs/naaflogo.svg" alt="Naaf Glamoria Logo" width={160} height={60} className="object-contain" />
            </a>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-6">
            <button className="hover:text-[#154415] transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="hover:text-[#154415] transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="hover:text-[#154415] transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* =======================
          MOBILE LAYOUT
          ======================= */}
      <div className="flex md:hidden justify-between items-center px-6 py-4 border-b border-gray-100 bg-white">
        {/* Left: Hamburger Menu */}
        <button onClick={() => setIsMenuOpen(true)}>
          <Menu className="w-6 h-6 text-[#154415]" />
        </button>

        {/* Center: Logo */}
        <a href="/">
          <Image src="/svgs/naaflogo.svg" alt="Naaf Glamoria Logo" width={100} height={40} className="object-contain" />
        </a>

        {/* Right: Shopping Bag */}
        <button className="hover:text-[#154415] transition-colors">
          <ShoppingBag className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* 1. Backdrop (Dark overlay behind the menu) */}
          <div 
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* 2. Side Menu (Restricted width to 75%) */}
          <div className="fixed top-0 left-0 bottom-0 z-50 w-[60%] sm:w-[60%] bg-white flex flex-col p-6 shadow-2xl animate-in slide-in-from-left duration-300">
            {/* Header with Close Button */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-medium font-montserrat text-[#154415]">Menu</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8 text-[#154415]" />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col space-y-6 text-lg font-medium font-montserrat  text-[#154415]">
              <li>
                <a href="#" className="block hover:text-gray-600 transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                  SHOP
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-gray-600 transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                  COLLECTIONS
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-gray-600 transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                  OUR VALUES
                </a>
              </li>
              <li>
                <a href="/about" className="block hover:text-gray-600 transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="/contact" className="block hover:text-gray-600 transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                  CONTACT
                </a>
              </li>
            </ul>

            {/* Secondary Actions (Mobile Menu) */}
            <div className="mt-auto flex flex-col space-y-4 pt-8 border-t border-gray-100">
              <div className="flex items-center space-x-3 text-[#154415]">
                <Search className="w-5 h-5" />
                <span className="text-sm font-medium font-montserrat tracking-widest">SEARCH</span>
              </div>
              <div className="flex items-center space-x-3 text-[#154415]">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium font-montserrat tracking-widest">WISHLIST</span>
              </div>
              <div className="flex items-center space-x-3 text-[#154415]">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium font-montserrat tracking-widest">ACCOUNT</span>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;