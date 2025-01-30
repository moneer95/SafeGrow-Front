"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

const About = () => {
  const [expandedProgram, setExpandedProgram] = useState(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const programs = [
    {
      id: "safebuild",
      name: "SafeBuild",
      color: "text-green-700",
      description: "This program supports displaced Palestinians who want to create small, local businesses. From food carts to artisan craft stalls, SafeBuild provides the financial resources, equipment, and mentorship to get these ventures off the ground and generate income quickly."
    },
    {
      id: "safeconnect",
      name: "SafeConnect",
      color: "text-[#F15A28]",
      description: "For displaced Palestinians skilled in fields like graphic design, photography, or coding, SafeConnect provides a pathway to remote or freelance work. We offer essential tools like laptops and cameras, help build professional portfolios and resumes, and connect individuals with international mentors who guide them in marketing and online engagement - empowering them to promote their skills and grow their businesses independently. We can also help those displaced connect with local businesses that might want to hire them."
    },
    {
      id: "saferevive",
      name: "SafeRevive",
      color: "text-[#F9B043]",
      description: "SafeRevive helps displaced Palestinians who need mentorship in their field or guidance in how to find work through resume editing, networking or skills like marketing that can help them growth their businesses., SafeRevive provides mentorship needed to restore livelihoods."
    }
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
              SafeGrow is a unique initiative designed to empower displaced Palestinians  by connecting them with work opportunities and providing essential resources for rebuilding their livelihoods. SafeGrow matches displaced Palestinians with businesses that need hired help.             </motion.p>

            <motion.p
              className="text-lg leading-relaxed"
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              In addition to our local operations, we offer international supporters the chance to contribute through curated donation packages. These packages, available in our “I Want to Help” section, allow donors to directly support SafeGrow initiatives while also gaining access to unique creations from local artisans and freelancers, like digital photography prints. This approach ensures transparency and provides a meaningful way to support displaced Palestinians in rebuilding their lives through work and self-sustainability.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed"
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Through our three specialized programs - SafeBuild, SafeConnect, and SafeRevive - we provide the tools, mentorship, and financial resources needed to start small businesses, find freelance work, or rebuild enterprises destroyed by displacement and war. SafeGrow stands for self-sufficiency, dignity, and community solidarity, working together for a brighter, more sustainable future for all.            </motion.p>

            <motion.div
              className="relative p-6 bg-white rounded-2xl shadow-lg"
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Specialized Programs</h3>
              <div className="space-y-4">
                {programs.map((program) => (
                  <div key={program.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <ArrowRightCircle className="w-5 h-5 flex-shrink-0 text-gray-400" />
                        <Link href={`/programs#${program.id}`}>
                          <span className={`text-xl font-bold ${program.color} hover:opacity-80 transition-opacity cursor-pointer`}>
                            {program.name}
                          </span>
                        </Link>
                      </div>
                      <button
                        onClick={() => setExpandedProgram(expandedProgram === program.id ? null : program.id)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
                        aria-label={expandedProgram === program.id ? "Show less" : "Show more"}
                      >
                        <motion.div
                          animate={{ rotate: expandedProgram === program.id ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="w-5 h-5 text-gray-600" />
                        </motion.div>
                      </button>
                    </div>
                    <AnimatePresence>
                      {expandedProgram === program.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 pl-8">{program.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-lg leading-relaxed">
                Through these programs, SafeGrow bridges the gap between local businesses and displaced Palestinians  in need of work, while offering international supporters a meaningful way to contribute to long-term solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;