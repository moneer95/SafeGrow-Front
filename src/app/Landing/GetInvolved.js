"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, HandHeart } from "lucide-react";
import Link from "next/link";

const GetInvolved = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Section */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            {...fadeIn}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get <span className="text-[#86CA2F]">Involved</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join our community of change-makers and make a real difference. Whether you need support or want to offer help, there's a place for you in our mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="http://44.201.121.211/safegrow-new-case?new=1">
                <motion.button
                  className="px-10 py-3 bg-gray-50 text-[#009688] font-semibold rounded-md hover:bg-gray-100 hover:text-[#009688] flex items-center justify-center w-full sm:w-auto transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Users className="w-5 h-5 mr-2" />
                  I Need Help
                </motion.button>
              </Link>

              <Link href="/business-kits">
                <motion.button
                  className="px-10 py-3 bg-[#009688] text-white font-semibold rounded-md hover:bg-[#009688] flex items-center justify-center w-full sm:w-auto transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <HandHeart className="w-5 h-5 mr-2" />
                  I Want to Help
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900">Our Support Programs</h3>
                  <p className="text-gray-600">Comprehensive assistance tailored to your needs</p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "SafeBuild",
                      description: "Access resources and support to establish your foundation in Cairo"
                    },
                    {
                      title: "SafeConnect",
                      description: "Join our community network and access vital services"
                    },
                    {
                      title: "SafeRevive",
                      description: "Develop skills and opportunities for sustainable growth"
                    }
                  ].map((program, index) => (
                    <motion.div
                      key={program.title}
                      className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                      whileHover={{ x: 8 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{program.title}</h4>
                      <p className="text-gray-600">{program.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-500">
                    Each of our programs is designed to provide you with the tools, mentorship, and resources to take control of your future. Once you fill out your application, SafeGrow will evaluate your needs, skillset, and available opportunities to set you up for success.
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