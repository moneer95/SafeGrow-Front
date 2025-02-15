"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Quote } from "lucide-react";
import StoryActions from "../../../components/StoryActions";
import DOMPurify from "dompurify";

export default function StoryPage() {
  const params = useParams();
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);




  // Traditional data fetching with useEffect
  useEffect(() => {
    fetch("https://dash.safe-grow.com/api/method/safegrow.api.get_stories")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setStories(data.message);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching stories:", err);
        setError(err);
        setLoading(false);
      });
  }, []);


  console.log(stories)

  if (loading) return <div>Loading story...</div>;
  if (error) return <div>Error loading story.</div>;

  // Find the story based on URL parameter 
  const story =
    stories.find((s) => s.slug === params.id) || stories[0];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/stories"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Stories
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-12"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="aspect-[21/9] relative">
            <Image
              src={`https://dash.safe-grow.com${story.img}`}
              alt={story.story_title || story.name}
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, transparent 0%, ${story.color}80 100%)`,
              }}
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center gap-4 mb-4 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {story.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {story.date}
              </span>
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">
              {story.story_title || story.name}
            </h1>
            <p className="text-lg max-w-3xl">{story.description}</p>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            className="lg:col-span-2 space-y-8 max-h-72 overflow-scroll"
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            {
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(story.full_story),
                }}
              />
            }
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            {/* Quote */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Quote className="w-8 h-8" style={{ color: story.color }} />
              <p className="text-gray-800 italic">{story.quote}</p>
            </div>

            {/* Impact */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Impact</h3>
              <ul className="space-y-2">
                {story.impact.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: story.color }}
                    />
                    {item.impact}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Action Section */}
        <StoryActions />

        {/* Gallery */}
        <motion.div
          className="mt-12"
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {story.gallery.map((img, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-lg overflow-hidden group"
              >
                <Image
                  src={`https://dash.safe-grow.com${img.img}`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, ${story.color}40 100%)`,
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
