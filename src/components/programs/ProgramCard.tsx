"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Mail, Send } from "lucide-react";
import Image from "next/image";

interface ProgramCardProps {
  program: {
    id: string;
    name: string;
    color: string;
    bgColor: string;
    description: string;
    features: string[];
    gallery: string[];
    supervisor: string;
    email: string;
  };
  currentImageIndex: number;
  onPrevImage: () => void;
  onNextImage: () => void;
  onImageSelect: (index: number) => void;
}

export default function ProgramCard({
  program,
  currentImageIndex,
  onPrevImage,
  onNextImage,
  onImageSelect,
}: ProgramCardProps) {
  return (
    <motion.section
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
              src={program.gallery[currentImageIndex]}
              alt={`${program.name} Gallery Image`}
              fill
              className="object-cover transition-opacity duration-300"
            />
            
            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={onPrevImage}
                className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={onNextImage}
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
                onClick={() => onImageSelect(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-white flex items-center justify-between rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold">Program Application</h3>
          <div className="flex items-center justify-between">
            <a
              href={`http://44.201.121.211/safegrow-new-case`}
              target="_blank"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${program.bgColor} ${program.color} hover:opacity-90 transition-opacity`}
            >
              <Send className="w-5 h-5" />
              <span>Submit your Application !</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}