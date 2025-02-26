"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar darkMode={true} />
      
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Link 
          href="/"
          className="inline-flex items-center text-[#009688] hover:text-[#007a6c] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-gray-500 mb-8">Last Updated: 26 Feb 2025</p>
            
            <p className="text-gray-700">
              Welcome to SafeGrow. These Terms of Service ("Terms") govern your use of the SafeGrow website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing or using the SafeGrow website, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy. These Terms constitute a legal agreement between you and SafeGrow.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services</h2>
            <p className="text-gray-700">
              SafeGrow provides various services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Digital product sales</li>
              <li>Business support programs</li>
              <li>Mentorship and guidance</li>
              <li>Community resources</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
            <p className="text-gray-700">
              Some features of our website may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Provide accurate and complete information when creating your account</li>
              <li>Update your information to keep it current</li>
              <li>Protect your account password and not share it with others</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Purchases and Payments</h2>
            <p className="text-gray-700">
              When making a purchase through our website, you agree to provide accurate and complete payment information. All prices are listed in US Dollars unless otherwise specified. We use secure third-party payment processors to handle transactions.
            </p>
            <p className="text-gray-700 mt-4">
              For digital products, delivery will be made electronically to the email address provided at checkout. We do not offer refunds for digital products once they have been delivered, except as required by applicable law.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on the SafeGrow website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of SafeGrow or its content suppliers and is protected by international copyright laws.
            </p>
            <p className="text-gray-700 mt-4">
              When you purchase a digital product, you are granted a non-exclusive, non-transferable license to use the product for personal or specified commercial purposes, as indicated in the product description. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. User Conduct</h2>
            <p className="text-gray-700">
              You agree not to use our website for any unlawful purpose or in any way that could damage, disable, overburden, or impair our services. Prohibited activities include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Attempting to gain unauthorized access to our systems or user accounts</li>
              <li>Using our website to transmit malware or other harmful code</li>
              <li>Engaging in any activity that interferes with or disrupts our services</li>
              <li>Impersonating any person or entity, or falsely stating your affiliation with a person or entity</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700">
              To the fullest extent permitted by applicable law, SafeGrow shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or in connection with your use of our website or services.
            </p>
            <p className="text-gray-700 mt-4">
              Our total liability for any claims arising under these Terms shall not exceed the amount you paid to us for the applicable product or service.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify, defend, and hold harmless SafeGrow, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from your use of our website, violation of these Terms, or infringement of any intellectual property or other rights of any person or entity.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of Egypt, without regard to its conflict of law provisions. Any dispute arising under these Terms shall be resolved exclusively in the courts of Cairo, Egypt.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our website after the posting of revised Terms constitutes your acceptance of such changes.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">Email:</span> <a href="mailto:info@safe-grow.com" className="text-[#009688] hover:text-[#007a6c]">info@safe-grow.com</a>
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Phone:</span> <a href="tel:01044081993" className="text-[#009688] hover:text-[#007a6c]">0104 4081993</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}