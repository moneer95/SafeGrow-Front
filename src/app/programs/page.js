"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const Programs = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const programs = [
    {
      id: "safebuild",
      name: "SafeBuild",
      color: "text-green-700",
      bgColor: "bg-green-50",
      accentColor: "bg-green-700",
      supervisor: "Sarah Ahmed",
      email: "safebuild@safegrow.org",
      description: "SafeBuild empowers entrepreneurs to create thriving local businesses in Cairo. From food carts to artisan craft stalls, we provide comprehensive support including financial resources, equipment, and expert mentorship to help you establish and grow your venture.",
      features: [
        "Business startup funding",
        "Essential equipment provision",
        "Expert mentorship",
        "Business planning support",
        "Local market insights"
      ],
      gallery: ["/iloveimg-converted/1.jpg", "/iloveimg-converted/2.jpg", "/iloveimg-converted/3.jpg", "/iloveimg-converted/5.jpg", "/iloveimg-converted/10.jpg", "/iloveimg-converted/6.jpg"]
    },
    {
      id: "safeconnect",
      name: "SafeConnect",
      color: "text-[#F15A28]",
      bgColor: "bg-orange-50",
      accentColor: "bg-[#F15A28]",
      supervisor: "Mohammed Khalil",
      email: "safeconnect@safegrow.org",
      description: "SafeConnect opens doors to remote and freelance opportunities for skilled professionals in fields like graphic design, photography, and coding. We provide essential tools, portfolio development support, and connections with international mentors to help you build a thriving independent career.",
      features: [
        "Professional equipment provision",
        "Portfolio development",
        "International mentor matching",
        "Online presence building",
        "Freelance platform guidance"
      ],
      gallery: ["/iloveimg-converted/20.jpg", "/iloveimg-converted/19.jpg", "/iloveimg-converted/22.jpg", "/iloveimg-converted/16.jpg", "/iloveimg-converted/24.jpg", "/iloveimg-converted/28.jpg"]
    },
    {
      id: "saferevive",
      name: "SafeRevive",
      color: "text-[#F9B043]",
      bgColor: "bg-yellow-50",
      accentColor: "bg-[#F9B043]",
      supervisor: "Layla Hassan",
      email: "saferevive@safegrow.org",
      description: "SafeRevive provides specialized mentorship and guidance to help you enhance your professional journey. Whether you need support with resume building, networking strategies, or business growth techniques, our experienced mentors are here to help you achieve your goals.",
      features: [
        "Professional mentorship",
        "Resume and portfolio review",
        "Networking strategies",
        "Marketing skills development",
        "Business growth guidance"
      ],
      gallery: ["/iloveimg-converted/4.jpg", "/iloveimg-converted/7.jpg"]
    }
  ];

  const commitments = [
    {
      icon: "/search.png",
      title: "Transparent Fund Allocation",
      description: "We provide regular updates on how donations are allocated and ensure that funds directly support our programs. Whether it's a business startup or tools for freelancers, you can trust that your contribution is making a difference."
    },
    {
      icon: "/clipboard.png",
      title: "Ongoing Impact Reporting",
      description: "SafeGrow shares stories of progress and success with our community of donors and supporters. From business launches to personal growth, we track the impact of our grants and provide clear, regular reports on how your support is helping create sustainable futures."
    },
    {
      icon: "/team.png",
      title: "Ethical Partnerships",
      description: "We partner with local businesses in Cairo and international supporters who share our values of equity, dignity, and empowerment. Every partnership is designed to benefit both individuals and the wider community in a sustainable and ethical way."
    },
    {
      icon: "/deep-learning.png",
      title: "Continuous Learning",
      description: "SafeGrow is committed to listening to the needs of the communities we serve. We continuously refine our programs based on feedback from participants, partners, and supporters to ensure that we are providing the most effective support possible."
    }
  ];

  const nextImage = (programId) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [programId]: ((prev[programId] || 0) + 1) % programs.find(p => p.id === programId)?.gallery.length
    }));
  };

  const prevImage = (programId) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [programId]: ((prev[programId] || 0) - 1 + programs.find(p => p.id === programId)?.gallery.length) % programs.find(p => p.id === programId)?.gallery.length
    }));
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar darkMode />
      {/* Programs Navigation */}
      <div className=" border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Programs</h2> */}
          <div className="flex flex-wrap gap-4">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => {
                  setActiveSection(program.id);
                  document.getElementById(program.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeSection === program.id 
                    ? `${program.bgColor} ${program.color} shadow-md`
                    : "bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                {program.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-24">
          {programs.map((program) => (
            <motion.section
              key={program.id}
              id={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${program.bgColor} rounded-3xl p-8 lg:p-12 shadow-lg shadow-gray-100/50`}
            >
              <div className="max-w-4xl mx-auto">
                <h2 className={`text-4xl font-bold ${program.color} mb-6`}>
                  {program.name}
                </h2>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {program.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <ArrowRight className={`w-5 h-5 ${program.color}`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Gallery with Pagination */}
                <div className="relative mb-12">
                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={program.gallery[currentImageIndex[program.id] || 0]}
                      alt={`${program.name} Gallery Image`}
                      fill
                      className="object-cover transition-opacity duration-300"
                    />
                    
                    {/* Navigation Buttons */}
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                      <button
                        onClick={() => prevImage(program.id)}
                        className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => nextImage(program.id)}
                        className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Pagination Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {program.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(prev => ({ ...prev, [program.id]: index }))}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === (currentImageIndex[program.id] || 0)
                            ? "bg-white w-4"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Program Contact</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600">Program Supervisor</p>
                      <p className="font-medium text-gray-900">{program.supervisor}</p>
                    </div>
                    <a
                      href={`mailto:${program.email}`}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${program.bgColor} ${program.color} hover:opacity-90 transition-opacity`}
                    >
                      <Mail className="w-5 h-5" />
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Commitment Section */}
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
    </div>
  );
};

export default Programs;