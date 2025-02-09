"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgramCard from "../../components/programs/ProgramCard";
import CommitmentSection from "../../components/programs/CommitmentSection";
import SafeConnectJobs from "../../components/programs/SafeConnectJobs";
import { programs, commitments } from "../../../lib/data/programs";
import Navbar from "../../components/Navbar";
import StoryActions from "../../components/StoryActions";

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveProgram(hash);
    }
  }, []);

  const selectedProgram = programs.find(p => p.id === activeProgram);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar darkMode />
      {/* Programs Navigation */}
      <div className="bg-white border-b border-gray-100 top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program) => (
              <motion.button
                key={program.id}
                onClick={() => setActiveProgram(program.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 
                  ${program.bgColor} 
                  ${activeProgram === program.id ? 'ring-2 ring-offset-2 ' + program.color.replace('text-', 'ring-') : ''}
                  hover:shadow-lg`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className={`text-xl font-bold ${program.color} mb-2`}>
                  {program.name}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {program.description}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Program Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {!activeProgram ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Choose a Program
                <span className="block mt-2 text-2xl font-medium text-gray-600">
                  Select one of our specialized programs above to learn more
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each program is designed to provide comprehensive support and resources
                tailored to your specific needs and goals.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeProgram}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {selectedProgram && (
                <>
                  <ProgramCard
                    program={selectedProgram}
                    currentImageIndex={currentImageIndex[selectedProgram.id] || 0}
                    onPrevImage={() => {
                      setCurrentImageIndex(prev => ({
                        ...prev,
                        [selectedProgram.id]: ((prev[selectedProgram.id] || 0) - 1 + selectedProgram.gallery.length) % selectedProgram.gallery.length
                      }));
                    }}
                    onNextImage={() => {
                      setCurrentImageIndex(prev => ({
                        ...prev,
                        [selectedProgram.id]: ((prev[selectedProgram.id] || 0) + 1) % selectedProgram.gallery.length
                      }));
                    }}
                    onImageSelect={(index) => {
                      setCurrentImageIndex(prev => ({
                        ...prev,
                        [selectedProgram.id]: index
                      }));
                    }}
                  />
                  {selectedProgram.id === "safeconnect" && <SafeConnectJobs />}

                  {/* Action Srction */}
                  <StoryActions />

                  <div className="mt-12">
                    <CommitmentSection commitments={commitments} />
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Programs;