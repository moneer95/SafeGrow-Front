"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";

export default function StoriesPage() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'your_app' with your actual app name and ensure the URL is correct.
    fetch("https://dash.safe-grow.com/api/method/safegrow.api.get_stories")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        // Frappe API returns data inside data.message
        setStories(data.message || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching stories:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading stories...</div>;
  if (error) return <div>Error loading stories.</div>;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar darkMode />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Stories of Impact
            <span className="block mt-2 text-3xl lg:text-4xl font-medium text-gray-600">
              Real Lives, Real Change
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Each story represents a journey of resilience, determination, and hope. 
            Through SafeGrow's support, these individuals have transformed challenges 
            into opportunities, creating lasting impact in their communities.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/stories/${story.slug}`}>
                <div className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={`https://dash.safe-grow.com${story.img}`}
                      alt={story.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h2 className="text-xl font-bold text-white mb-2">
                      {story.name}
                    </h2>
                    <p className="text-white/90 line-clamp-2 mb-4 text-sm">
                      {story.description}
                    </p>
                    <div className="flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read full story
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div 
          className="text-center mt-16"
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These stories represent just a fraction of the lives touched by SafeGrow. 
            Join us in creating more success stories and empowering Palestinian refugees 
            to build sustainable futures.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
