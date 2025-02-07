"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pagination } from "../components/ui/pagination";

interface StoryContentProps {
  content: {
    title: string;
    subtitle: string;
    pages: {
      content: string;
      image?: string;
    }[];
  };
}

export default function StoryContent({ content }: StoryContentProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(page);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {content.title}
        </h1>
        <p className="text-xl text-gray-600">{content.subtitle}</p>
      </div>

      {/* Content */}
      <div className="min-h-[60vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {content.pages[currentPage - 1].image && (
              <img
                src={content.pages[currentPage - 1].image}
                alt={`Story illustration ${currentPage}`}
                className="w-full h-64 object-cover rounded-xl mb-8"
              />
            )}
            <div
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{
                __html: content.pages[currentPage - 1].content,
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="mt-12">
        <Pagination
          currentPage={currentPage}
          totalPages={content.pages.length}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Page Indicator */}
      <div className="mt-6 text-center text-sm text-gray-500">
        Page {currentPage} of {content.pages.length}
      </div>
    </div>
  );
}