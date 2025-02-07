"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";

// Using the same stories data from the Carousel component
const stories = [
  {
    id: 1,
    name: "Zain Spices: Honoring Palestinian Heritage Through Flavor",
    description:
      `Abdelrahman fled Gaza in May 2024 after enduring months of unimaginable hardship. He lost his parents, siblings, and his home to the ongoing genocide, leaving with his wife and two young children to protect what remained of his family. Despite this immense tragedy, Abdelrahman carried with him a deep sense of resilience—and a vision for rebuilding his life through his culture’s rich traditions.
      In Gaza, Palestinians have a centuries-old history of spice making, tracing back to their role as a vibrant trading hub along the Silk Road. Inspired by this heritage and recognizing a gap in the Egyptian market for fresh, high-quality, and flavorful spices, Abdelrahman founded Zain Spices, named after his youngest son. His mission was clear: to bring the authentic flavors of Palestinian spice culture to Cairo while creating a sustainable livelihood for his family.
      Crafting Excellence with SafeGrow’s Support

      Through SafeBuild, SafeGrow funded two essential pieces of equipment for Zain Spices: a roasting machine to enhance the natural flavors of cloves and spices, and a large-scale 10-kilogram grinder for producing finely ground, rich spice blends. With these tools, Abdelrahman has perfected the art of roasting and grinding whole spices, delivering a product that is both all-natural and bursting with authentic flavor.
      SafeGrow also supported Abdelrahman through SafeRevive, connecting him with local organic supermarket RDNA. This connection allowed him to showcase his products at RDNA’s annual Christmas market, where his spices were met with overwhelming praise. Customers were impressed by the quality, aroma, and unique offerings of Zain Spices, including his traditional Palestinian blends like Gazawi Dukka and Za’atar.
      A Growing Business with Big Dreams

      Since joining SafeGrow, Abdelrahman has scaled production and expanded his customer base, reaching individuals who appreciate the craftsmanship and heritage behind his products. Zain Spices now boasts an impressive lineup of 36 blends, including innovative creations like Thai Spice, Masala Spice, Seven Spices, Fish Seasoning, Healthy Indomie, and more.
      Abdelrahman dreams of growing his business further and hiring a team of displaced Palestinians, offering them an opportunity to rebuild their lives through meaningful work. His story is one of perseverance, cultural pride, and a steadfast commitment to supporting others in his community.
      Building the Future, One Spice at a Time
      Through Zain Spices, Abdelrahman has not only reclaimed his livelihood but also created a bridge between his heritage and his future. His work stands as a testament to the power of resilience and the profound impact of SafeGrow’s mission to empower displaced Palestinians.
      `,
    img: "/iloveimg-converted/10.jpg",
    color: "#87CA2F"
  },
  {
    id: 2,
    name: "Rama Kitchen: A Story of Love, Loss, and Resilience",
    description:
      "After losing her daughter Rama, Maha found strength in starting Rama Kitchen. With SafeGrow's help, she shares Palestinian culinary traditions, offering delicious, homemade meals crafted with love and tradition.",
    img: "/iloveimg-converted/21.jpg",
    color: "#ED5C2B"
  },
  {
    id: 3,
    name: "Raw'a: A Legacy Rebuilt with Passion and Perseverance",
    description:
      "Bilal rebuilt his family's thriving furniture business, Raw'a, in Cairo with SafeGrow's support. His exquisite craftsmanship and resilience stand as a testament to his determination to provide for his family and community.",
    img: "/iloveimg-converted/4.jpg",
    color: "#FBB13C"
  },

];

export default function StoriesPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar 
        darkMode
      />
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
              <Link href={`/stories/${story.id}`}>
                <div className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={story.img}
                      alt={story.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h2 className="text-2xl font-bold text-white mb-2">
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