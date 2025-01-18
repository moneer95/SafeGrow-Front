"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const programs = [
    { name: "SafeBuild", color: "text-green-700" },
    { name: "SafeConnect", color: "text-[#F15A28]" },
    { name: "SafeRevive", color: "text-[#F9B043]" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-[#86CA2F]/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About SafeGrow
              <span className="block mt-2 text-3xl lg:text-4xl font-medium text-gray-600">Who We Are</span>
            </h2>
            <div className="w-24 h-1 bg-green-200 mx-auto rounded-full" />
          </motion.div>

          {/* Content */}
          <div className="space-y-8 text-gray-600">
            <motion.p 
              className="text-lg leading-relaxed"
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              SafeGrow is a unique initiative designed to empower Palestinian refugees by connecting them with work
              opportunities and providing essential resources for rebuilding their livelihoods. Operating as both a business
              entity and a recruitment intermediary, we bridge the gap between refugees and local businesses in Cairo,
              ensuring fair compensation and transparent operations.
            </motion.p>

            <motion.p 
              className="text-lg leading-relaxed"
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Through our &quot;I Want to Help&quot; platform, international supporters can contribute via curated donation
              packages, gaining access to unique creations from local artisans and freelancers while directly supporting
              our initiatives. This innovative approach ensures transparency and creates meaningful impact in rebuilding
              lives through work and self-sustainability.
            </motion.p>

            <motion.div 
              className="relative p-6 bg-white rounded-2xl shadow-lg"
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Specialized Programs</h3>
              <div className="space-y-4">
                {programs.map((program, index) => (
                  <div key={program.name} className="flex items-center gap-3">
                    <ArrowRightCircle className="w-5 h-5 flex-shrink-0 text-gray-400" />
                    <span className={`text-xl font-bold ${program.color}`}>
                      {program.name}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-lg leading-relaxed">
                Through these programs, we provide the tools, mentorship, and financial resources needed to start small
                businesses, find freelance work, or rebuild enterprises affected by displacement. SafeGrow stands for
                self-sufficiency, dignity, and community solidarity.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;