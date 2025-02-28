"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Globe, Mail, Phone, MapPin, Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar.jsx";
import { businesses, categories } from "../../../lib/data/businesses.ts";

export default function BusinessDirectory() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);

  useEffect(() => {
    let filtered = businesses;
    
    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(business => business.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(business => 
        business.name.toLowerCase().includes(query) || 
        business.description.toLowerCase().includes(query) ||
        business.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredBusinesses(filtered);
  }, [selectedCategory, searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  // Get featured businesses
  const featuredBusinesses = businesses.filter(business => business.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar darkMode={true} />
      
      {/* Hero Section */}
      <div className="relative py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Business Directory
              <span className="block mt-4 text-2xl font-medium text-gray-600">
                Discover Palestinian-Owned Businesses in Cairo
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Browse our curated directory of Palestinian-owned businesses and startups that are part of the SafeGrow network. 
              Support these businesses and help create sustainable livelihoods.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden focus-within:border-[#009688] transition-colors">
                <Search className="w-5 h-5 text-gray-400 ml-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search businesses..."
                  className="w-full py-3 px-4 outline-none text-gray-700"
                />
                {searchQuery && (
                  <button 
                    onClick={clearSearch}
                    className="p-2 mr-1 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Businesses */}
      {featuredBusinesses.length > 0 && !searchQuery && selectedCategory === "all" && (
        <div className="bg-[#009688]/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Featured Businesses
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredBusinesses.map((business, index) => (
                  <BusinessCard 
                    key={business.id} 
                    business={business} 
                    index={index} 
                    featured={true}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Category Filters */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-[#009688] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBusinesses.map((business, index) => (
              <BusinessCard 
                key={business.id} 
                business={business} 
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No businesses found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria to find businesses.
            </p>
          </div>
        )}
      </div>

      {/* Join Directory CTA */}
      <div className="bg-[#009688]/10 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Own a Palestinian Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our business directory to increase your visibility and connect with customers and supporters.
              SafeGrow helps Palestinian-owned businesses thrive through networking, resources, and promotion.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#009688] text-white rounded-lg hover:bg-[#007a6c] transition-colors"
            >
              Apply to Join Directory
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface BusinessCardProps {
  business: any;
  index: number;
  featured?: boolean;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business, index, featured = false }) => {
  const CategoryIcon = business.categoryIcon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className={`group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white ${
        featured ? "border-2 border-[#009688]" : "border border-gray-100"
      }`}
    >
      {/* Logo Section */}
      <div className="relative h-48 w-full bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={business.logo}
            alt={`${business.name} logo`}
            className="w-full h-full object-cover"
          />
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center rounded-full bg-[#009688] px-3 py-1 text-xs font-medium text-white">
              Featured
            </span>
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700">
            <CategoryIcon className="w-3 h-3 mr-1" />
            {business.category.charAt(0).toUpperCase() + business.category.slice(1)}
          </span>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {business.name}
        </h3>
        <p className="text-gray-600 mb-6">
          {business.description}
        </p>
        
        {/* Contact Info */}
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm">{business.location}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
            <a 
              href={`tel:${business.phone.replace(/\s+/g, '')}`}
              className="text-sm hover:text-[#009688] transition-colors"
            >
              {business.phone}
            </a>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
            <a 
              href={`mailto:${business.email}`}
              className="text-sm hover:text-[#009688] transition-colors"
            >
              {business.email}
            </a>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
          <a
            href={`https://instagram.com/${business.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-[#E1306C] transition-colors"
          >
            <Instagram className="w-5 h-5 mr-2" />
            <span className="text-sm">@{business.instagram}</span>
          </a>
          
          {business.website && (
            <a
              href={business.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#009688] hover:text-[#007a6c] transition-colors"
            >
              <Globe className="w-5 h-5 mr-1" />
              <span className="text-sm">Visit Website</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};