"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Globe, Mail, Phone, MapPin, Search, X, Facebook, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import { getBusinesses } from "../../../lib/data/businesses";

export default function BusinessDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log(businesses)

  // Fetch businesses from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBusinesses();
        setBusinesses(data);
      } catch (err) {
        setError("Failed to fetch businesses");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter businesses based on search query
  const filteredBusinesses = businesses.filter((business) => {
    return (
      !searchQuery ||
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar darkMode={true} />

      {/* Header */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Palestinian Business Directory
            </h1>
            <p className="text-gray-600 mb-8">
              Browse our curated directory of Palestinian-owned businesses and startups in Cairo and beyond.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden focus-within:border-[#009688] transition-colors">
                <Search className="w-5 h-5 text-gray-400 ml-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search businesses or locations..."
                  className="w-full py-3 px-4 outline-none text-gray-700"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="p-2 mr-1 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredBusinesses.length > 0 ? (
          <div className="space-y-4">
            {filteredBusinesses.map((business, index) => (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                {/* Logo */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 relative flex-shrink-0 bg-gray-100">
                  {business.logo.startsWith('/') ? (
                    <div className="w-full h-full flex items-center justify-center p-2">
                      <Image
                        src={business.logo}
                        alt={`${business.name} logo`}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <img
                      src={business.logo}
                      alt={`${business.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{business.name}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span>{business.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {business.website && (
                        <a
                          href={business.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition-colors"
                        >
                          <Globe className="w-4 h-4 mr-1" />
                          Website
                        </a>
                      )}

                      {business.instagram && (
                        <a
                          href={`https://instagram.com/${business.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition-colors"
                        >
                          <Instagram className="w-4 h-4 mr-1" />
                          Instagram
                        </a>
                      )}

                      {business.facebook && (
                        <a
                          href={business.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition-colors"
                        >
                          <Facebook className="w-4 h-4 mr-1" />
                          Facebook
                        </a>
                      )}

                      {business.youtube && (
                        <a
                          href={business.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition-colors"
                        >
                          <Youtube className="w-4 h-4 mr-1" />
                          YouTube
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mt-3">{business.description}</p>

                  <div className="mt-3 flex items-center gap-3">
                    {business.email && (
                      <a
                        href={`mailto:${business.email}`}
                        className="text-[#009688] hover:text-[#007a6c] text-sm transition-colors"
                      >
                        <Mail className="w-4 h-4 inline mr-1" />
                        Contact via Email
                      </a>
                    )}

                    {business.phone && (
                      <a
                        href={`tel:${business.phone.replace(/\s+/g, '')}`}
                        className="text-[#009688] hover:text-[#007a6c] text-sm transition-colors"
                      >
                        <Phone className="w-4 h-4 inline mr-1" />
                        {business.phone}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No businesses found</h3>
            <p className="text-gray-600">
              Try adjusting your search to find businesses.
            </p>
          </div>
        )}
      </div>

      {/* Join Directory CTA */}
      <div className="bg-[#009688]/10 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Own a Palestinian Business?
          </h2>
          <p className="text-gray-600 mb-4">
            Join our business directory to increase your visibility and connect with customers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 bg-[#009688] text-white rounded-lg hover:bg-[#007a6c] transition-colors text-sm"
          >
            Apply to Join
          </Link>
        </div>
      </div>
    </div>
  );
}