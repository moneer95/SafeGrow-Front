"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const commitments = [
  {
    icon: "/search.png",
    title: "Transparent Fund Allocation",
    description: "We provide regular updates on how donations are allocated and ensure that funds directly support our programs. Whether it's a business startup or tools for freelancers, you can trust that your contribution is making a difference."
  },
  {
    icon: "/clipboard.png",
    title: "Ongoing Impact Reporting",
    description: "SafeGrow shares stories of progress and success with our community of donors and supporters. From business launches to personal growth, we track the impact of our grants and provide clear, regular reports on how your support is helping refugees reclaim their futures."
  },
  {
    icon: "/team.png",
    title: "Ethical Partnerships",
    description: "We partner with local businesses in Cairo and international supporters who share our values of equity, dignity, and empowerment. Every partnership is designed to benefit both refugees and the wider community in a sustainable and ethical way."
  },
  {
    icon: "/deep-learning.png",
    title: "Continuous Learning",
    description: "SafeGrow is committed to listening to the needs of the communities we serve. We continuously refine our programs based on feedback from refugees, partners, and supporters to ensure that we are providing the most effective support possible."
  }
];

const Commitment = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
          <p className="mt-6 text-lg text-gray-600">
            At SafeGrow, we are committed to making a lasting impact in the lives of Palestinian 
            refugees while maintaining the highest standards of transparency and accountability. 
            Our approach ensures that every donation, every mentorship, and every grant is used 
            to create meaningful change.
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
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#009688] flex items-center justify-center">
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            By supporting SafeGrow, you are not just contributing financially — you are helping 
            to restore dignity, empower livelihoods, and create sustainable futures for 
            Palestinian refugees. We believe in a future built on transparency, collaboration, 
            and real, measurable impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Commitment;