"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowRight, HeartHandshake, CheckCircle } from "lucide-react";
import { categories } from "../../../lib/data/shop";

export default function Shop() {
  return (
    <div className="bg-white">
      <Navbar darkMode="true" />
      
      {/* Hero Section */}
      <div className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/shop-main.jpeg"
            alt="Shop hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Digital Palestinian Art & Design
              <span className="block mt-4 text-2xl font-medium text-white/90">
                Support Artists, Receive Instant Downloads
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-white/80 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Browse our collection of high-quality digital products created by talented Palestinian artists. 
              From photography to design templates, every purchase directly supports the creator.
            </motion.p>

            <motion.div 
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-white/90">
                <Download className="w-5 h-5" />
                <span>Instant Digital Delivery</span>
              </div>
              <div className="w-1 h-1 bg-white/30 rounded-full" />
              <div className="text-white/90">Commercial License Available</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Browse Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of digital products, each designed to preserve and 
            share Palestinian culture while supporting artists and creators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/shop/category/${category.id}`}>
                <div className={`group h-full rounded-2xl overflow-hidden ${category.bgColor} transition-all duration-300 hover:shadow-xl`}>
                  {/* Image Section */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Category Icon */}
                    <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-white/90 backdrop-blur-sm">
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold ${category.color} mb-2`}>
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Download className="w-4 h-4" />
                        <span className="text-sm">Digital Download</span>
                      </div>
                      <div className={`flex items-center ${category.color} font-medium`}>
                        View Products
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Instant Delivery",
              description: "Receive your digital products immediately after purchase via email",
              icon: Download
            },
            {
              title: "Support Artists",
              description: "Your purchase directly supports Palestinian artists and creators",
              icon: HeartHandshake
            },
            {
              title: "Quality Guaranteed",
              description: "All products are carefully curated and quality checked",
              icon: CheckCircle
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex p-3 rounded-xl bg-[#009688]/10 mb-4">
                <feature.icon className="w-6 h-6 text-[#009688]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}