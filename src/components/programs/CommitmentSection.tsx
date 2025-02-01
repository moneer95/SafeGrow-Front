"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Commitment {
  icon: string;
  title: string;
  description: string;
}

interface CommitmentSectionProps {
  commitments: Commitment[];
}

export default function CommitmentSection({ commitments }: CommitmentSectionProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          {...fadeIn}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Commitment
            <span className="block mt-2 text-3xl lg:text-4xl font-medium text-gray-600">
              Building Trust Through Transparency
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#009688] mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 leading-relaxed">
            At SafeGrow, we are committed to making a lasting impact while maintaining 
            the highest standards of transparency and accountability. Our approach ensures 
            that every donation, every mentorship, and every grant creates meaningful change.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.title}
              className="relative"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              {...fadeIn}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#009688] flex items-center justify-center shadow-md">
                      <Image
                        src={commitment.icon}
                        alt={commitment.title}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {commitment.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          {...fadeIn}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            By supporting SafeGrow, you are not just contributing financially — you are helping 
            to restore dignity, empower livelihoods, and create sustainable futures. We believe 
            in a future built on transparency, collaboration, and real, measurable impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}