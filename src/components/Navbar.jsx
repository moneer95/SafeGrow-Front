"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Briefcase, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ darkMode = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", bgColor: "bg-[#009688]" },
    { name: "About-Us", href: "/about", bgColor: "bg-[#009688]" },
    { name: "Programs", href: "/programs", bgColor: "bg-[#009688]" },
    { name: "Stories", href: "/stories", bgColor: "bg-[#009688]" },
    { name: "Shop", href: "/shop", bgColor: "bg-[#009688]" },
    { name: "Directory", href: "/businesses", bgColor: "bg-[#009688]" },
    { name: "Contact", href: "/contact", bgColor: "bg-[#009688]" },
  ];

  const textColor = darkMode ? "text-gray-800" : "text-white";

  return (
    <header className="relative z-50 w-full">
      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-2 py-3 bg-opacity-70 lg:px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 lg:static lg:left-0 transform lg:translate-x-0 z-50">
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
                className={`py-2 px-4 rounded-md transition-colors ${
                  pathname === link.href
                    ? `${link.bgColor} text-white font-bold`
                    : "hover:bg-gray-700 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Business Kit Action Button for Desktop */}
        <div className="hidden lg:flex items-center">
          <Link 
            href="/business-kits"
            className={`flex items-center gap-2 py-2 px-4 rounded-md transition-all duration-300
              ${darkMode 
                ? "bg-gray-100 text-gray-800 hover:text-white" 
                : "bg-white/10 text-white"}
              border-2 ${darkMode ? "border-gray-800" : "border-white/40"}
              hover:bg-[#009688] hover:border-[#009688]
              backdrop-blur-sm
              transform hover:scale-105 hover:shadow-lg`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="font-medium">Explore Business Kits</span>
          </Link>
        </div>

        {/* Mobile Action Buttons and Menu */}
        <div className="lg:hidden flex items-center gap-2 z-10">
          {/* Business Kits Button */}
          <Link href="/business-kits">
            <button
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-100 text-gray-800"
                  : "bg-white/10 text-white"
              }`}
              aria-label="Business Kits"
            >
              <Briefcase className="w-5 h-5" />
            </button>
          </Link>

          {/* Hire Palestinian Button */}
          <Link href="/programs#safeconnect">
            <button
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-100 text-gray-800"
                  : "bg-white/10 text-white"
              }`}
              aria-label="Hire Palestinian"
            >
              <Users className="w-5 h-5" />
            </button>
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle navigation menu"
            className={`p-2 rounded-lg transition-all duration-300 ${
              darkMode
                ? "bg-gray-100 text-gray-800"
                : "bg-white/10 text-white"
            }`}
          >
            <FaBars className="h-5 w-5" />
          </button>
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
        <ul className="flex flex-col space-y-6 text-xl text-white mt-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`py-2 px-6 rounded-md text-center ${
                  pathname === link.href
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