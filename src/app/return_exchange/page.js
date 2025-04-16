"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ReturnsPolicy() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Return & Exchange Policy</h1>
            <p className="text-gray-500 mb-8">Last Updated: 26 Feb 2025</p>
            
            <p className="text-gray-700">
              At SafeGrow, we are dedicated to offering high-quality digital products that empower individuals and communities. We strive to maintain transparency, fairness, and compliance with Egyptian consumer protection laws in all transactions involving our digital goods. Below is our detailed return and refund policy.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Refund Eligibility</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">No Refunds After Access or Download</h3>
            <p className="text-gray-700">
              Once a digital product (such as eBooks, online courses, software, or downloadable content) has been accessed, downloaded, or delivered, we are unable to issue any refunds. This is because digital products are intangible and can be copied or consumed immediately after purchase.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pre-order Cancellations</h3>
            <p className="text-gray-700">
              If you have pre-ordered a product, you can cancel your order for a full refund up to 48 hours before the official release date. After this window, pre-order products are treated the same as any other digital product and will not be refundable once delivered.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Non-refundable Products</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Products</h3>
            <p className="text-gray-700">
              All digital products sold by SafeGrow, including downloadable content, online courses, and software, are non-refundable once accessed or downloaded. We encourage all customers to carefully review the product details before making a purchase to ensure it meets their needs.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Customization or Special Requests</h3>
            <p className="text-gray-700">
              If you purchase a customized digital product (e.g., personalized reports or unique content), refunds will not be issued once the product has been delivered.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Exceptions and Special Cases</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Issues or Delivery Problems</h3>
            <p className="text-gray-700">
              If you encounter any technical issues during the download or access of your product, please contact us immediately. We will make every effort to resolve the issue, whether through troubleshooting, providing an alternative download link, or offering a replacement.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Defective or Faulty Digital Products</h3>
            <p className="text-gray-700">
              In the rare case that you receive a defective or incomplete digital product that does not function as described, please reach out to us within 7 days of purchase. We will either provide a replacement or offer a solution to ensure you can access the product in full.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. How to Request a Refund or Support</h2>
            <p className="text-gray-700">
              If you believe you are eligible for a refund or need assistance with a digital product purchase, please follow these steps:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <span className="font-medium">Contact our Support Team:</span> Email us at{' '}
                <a href="mailto:info@safe-grow.com" className="text-[#009688] hover:text-[#007a6c]">
                  info@safe-grow.com
                </a>{' '}
                with your order number and a detailed explanation of the issue you are facing.
              </li>
              <li>
                <span className="font-medium">Provide Documentation:</span> If applicable, provide screenshots or any other relevant information that may assist our team in resolving your issue quickly.
              </li>
              <li>
                <span className="font-medium">Wait for Resolution:</span> Our customer support team will respond within 3-5 business days to address your inquiry. We aim to provide the best possible resolution for any concerns.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Consumer Rights Under Egyptian Law</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Consumer Protection</h3>
            <p className="text-gray-700">
              In accordance with Egyptian Consumer Protection Law (Law No. 181 of 2018), consumers are entitled to certain rights regarding online purchases. However, it is important to note that digital products are exempt from certain return and refund conditions due to their nature. Once accessed or downloaded, digital products are considered consumed and cannot be returned.
            </p>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-600">
                For any questions about our Return & Exchange Policy, please contact our support team at{' '}
                <a href="mailto:info@safe-grow.com" className="text-[#009688] hover:text-[#007a6c]">
                  info@safe-grow.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}