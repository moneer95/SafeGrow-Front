"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname for dynamic active state

export default function Navbar({ darkMode = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname(); // Get the current path

  // Define navigation links
  const navLinks = [
    { name: "Home", href: "/", bgColor: "bg-[#009688]" },
    { name: "Donate", href: "/Donation", bgColor: "bg-[#009688]" },
    { name: "About Us", href: "/about", bgColor: "bg-[#009688]" },
    { name: "Our Stories", href: "/stories", bgColor: "bg-[#009688]" },
    { name: "Shop", href: "/shop", bgColor: "bg-[#009688]" },
    { name: "Contact Us", href: "/contact", bgColor: "bg-[#009688]" },
  ];

  const textColor = darkMode ? "text-gray-800" : "text-white";

  return (
    <header className="relative z-50 w-full">
      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-2 py-3 bg-opacity-70 lg:px-6">

        {/* Logo Section */}
        <div className="flex items-center space-x-2 lg:static  lg:left-0 transform  lg:translate-x-0 z-50">
          <Link href="/">
            <div className="flex items-start flex-col justify-center">
              <Image
                src="/Logo.png"
                alt="SafeGrow Logo"
                width={50}
                height={60}
                className="block"
              />
              <div className={`ml-2 ${textColor}`}>
                <h1 className="text-lg font-bold">SafeGrow</h1>
                <p className="text-xs lg:text-sm">SafeBuild, SafeConnect, SafeRevive</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className={`hidden lg:flex space-x-8 text-lg ${textColor}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`py-2 px-4 rounded-md transition-colors ${pathname === link.href
                  ? `${link.bgColor} text-white font-bold`
                  : "hover:bg-gray-700 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Bar for Desktop */}
        <div className="hidden lg:flex items-center">
          <input
            type="text"
            className={`bg-transparent border-b placeholder-gray-300 px-2 py-1 focus:outline-none ${darkMode ? "border-gray-800 text-gray-800" : "border-white text-white"
              }`}
            placeholder="Search..."
          />
          <IoIosSearch
            className={`ml-2 ${darkMode ? "text-gray-800" : "text-white"}`}
          />
        </div>


        {/* Hamburger menu on mobile */}
        <div className="lg:hidden z-10">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle navigation menu"
            className={`${textColor}`}
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>

      </nav>


      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          <IoIosClose className="h-10 w-10" />
        </button>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col space-y-6 text-xl text-white mt-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`py-2 px-6 rounded-md text-center ${pathname === link.href
                  ? `${link.bgColor} text-white font-bold`
                  : "hover:bg-gray-700 hover:text-white"
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
