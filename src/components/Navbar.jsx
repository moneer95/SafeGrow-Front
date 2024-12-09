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
  const [activePage, setActivePage] = useState(0);

  const pathname = usePathname(); // Get the current path


  // Define navigation links with dynamic background colors
  const navLinks = [
    { name: "Home", href: "/", bgColor: "bg-[#009688]" },
    { name: "Help Us", href: "/Donation", bgColor: "bg-[#009688]" },
    { name: "About Us", href: "/about", bgColor: "bg-[#009688]" },
    { name: "Contact Us", href: "/contact", bgColor: "bg-[#009688]" },
  ];


  function handleClick(idx){
    setMenuOpen(false);
    setActivePage(idx)
  }

  const textColor = darkMode ? "text-gray-800" :  "text-white";


  return (
    <header className="relative z-50 w-full">
      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-opacity-70 ">
        {/* Hamburger menu on mobile */}
        <div className="lg:hidden z-10">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle navigation menu"
            className="text-white"
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        {/* Logo Section */}
        <div className="flex items-center space-x-2 lg:static absolute left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 z-50">
          <Link href="/">
            <div className="flex items-center justify-center">
              <Image
                src="/Logo.png"
                alt="SafeGrow Logo"
                width={104}
                height={104}
                className=""
              />
              <div className={`ml-2 ${textColor}`}>
                <h1 className="text-lg font-bold">SafeGrow</h1>
                <p className="text-sm">SafeBuild, SafeConnect, SafeRevive</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className={`hidden lg:flex space-x-8 text-lg ${textColor}`}>
          {navLinks.map((link, idx) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`py-2 px-4 rounded-md transition-colors ${
                  pathname === link.href
                  ? `${link.bgColor} text-white font-bold`
                    : "hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => handleClick(idx)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center">
          <input
            type="text"
            className="bg-transparent border-b border-white text-white placeholder-gray-300 px-2 py-1 focus:outline-none"
            placeholder="Search..."
          />
          <IoIosSearch className="text-white ml-2" />
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
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
        <ul className="flex flex-col space-y-6 text-xl text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`py-2 px-6 rounded-md text-center ${
                  link.active
                    ? `${link.bgColor} font-bold`
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
