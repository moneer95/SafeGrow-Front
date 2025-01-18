"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const GetInvolved = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Section */}
          <motion.div 
            className="w-full lg:w-5/12 text-center lg:text-left"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            {...fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Get <span className="text-[#86CA2F]">Involved</span>
            </h2>
            
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-[#86CA2F] rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                  <span className="relative">I Need Help</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-3 font-medium text-[#86CA2F] bg-white border-2 border-[#86CA2F] rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                  <span className="relative">I Want to Help</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            className="w-full lg:w-7/12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Image2.jpg"
                alt="Support for Palestinian refugees"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end p-8">
                <div className="max-w-xl">
                  <p className="text-lg text-white leading-relaxed">
                    If you're a Palestinian refugee in Cairo, <span className="text-[#86CA2F] font-semibold">SafeGrow</span> offers a range of support tailored to your needs. Our three specialized programs are designed to help you build a sustainable livelihood and create a better future.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;