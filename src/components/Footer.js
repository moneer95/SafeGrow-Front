"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Programs', href: '/programs' },
    { name: 'Business Kits', href: '/business-kits' },
    { name: 'Mentors', href: '/programs#safeconnect' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const programs = [
    { name: 'SafeBuild', href: '/programs#safebuild' },
    { name: 'SafeConnect', href: '/programs#safeconnect' },
    { name: 'SafeRevive', href: '/programs#saferevive' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/safegrow_org?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            {...fadeIn}
          >
            <h3 className="text-2xl font-bold text-white mb-4">SafeGrow</h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering displaced Palestinians to build sustainable futures through 
              comprehensive support, community connection, and skill development.
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#009688] transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-[#009688] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div 
            className="space-y-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-white">Our Programs</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link 
                    href={program.href}
                    className="text-gray-400 hover:text-[#009688] transition-colors duration-300"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#009688]" />
                <span>+20 104 408 1993</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#009688]" />
                <a 
                  href="mailto:info@safegrow.org"
                  className="hover:text-[#009688] transition-colors duration-300"
                >
                  info@safe-grow.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#009688]" />
                <span>Building 6 - 4th district Badr - New Cairo - Cairo, Egypt</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © All Rights Reserved - Hashtag Marketing 2013-{new Date().getFullYear()}
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-[#009688] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#009688] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/return_exchange" className="hover:text-[#009688] transition-colors duration-300">
                Return & Exchange
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;