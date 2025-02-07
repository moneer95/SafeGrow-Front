"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import { ArrowLeft, HeartHandshake, Image as ImageIcon, Palette, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import WatermarkedImage from "../../../components/WatermarkedImage";
import { photographers } from "../../../../lib/data/photography";

export default function ProductDetails() {
  const params = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [additionalDonation, setAdditionalDonation] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedArtist, setSelectedArtist] = useState(0);
  
  const artist = photographers[selectedArtist];
  const portfolio = artist?.portfolio[0];

  if (!artist || !portfolio) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar darkMode={true} />
        <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Artist not found</h2>
            <p className="mt-4 text-gray-500">The artist you're looking for doesn't exist.</p>
            <Link 
              href="/shop"
              className="mt-8 inline-flex items-center text-[#009688] hover:text-[#007a6c] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to shop
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolio.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolio.images.length) % portfolio.images.length);
  };

  const selectArtist = (index) => {
    setSelectedArtist(index);
    setCurrentImageIndex(0);
  };

  return (
    <div className="bg-white">
      <Navbar darkMode={true} />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Link 
          href="/shop"
          className="inline-flex items-center text-[#009688] hover:text-[#007a6c] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <WatermarkedImage
                src={portfolio.images[currentImageIndex]}
                alt={`${portfolio.title} by ${artist.name}`}
                watermarkText={`©SafeGrow`}
                className="rounded-2xl"
              />
              
              {/* Navigation Buttons */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-4">
              {portfolio.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden ${
                    currentImageIndex === index ? "ring-2 ring-[#009688]" : ""
                  }`}
                >
                  <WatermarkedImage
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    watermarkText={`© SafeGrow`}
                    className="rounded-lg"
                  />
                </button>
              ))}
            </div>

            {/* Artist Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">More Artists</h3>
              <div className="grid grid-cols-2 gap-4">
                {photographers.map((photographer, index) => (
                  <button
                    key={photographer.id}
                    onClick={() => selectArtist(index)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 ${
                      selectedArtist === index
                        ? "bg-[#009688]/10 ring-2 ring-[#009688]"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <h4 className="font-medium text-gray-900">{photographer.name}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{photographer.bio}</p>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <ImageIcon className="w-5 h-5 text-[#009688]" />
              <span className="text-sm font-medium text-[#009688]">Photography</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{portfolio.title}</h1>
            <div className="mt-3">
              <p className="text-3xl tracking-tight text-gray-900">${portfolio.price}</p>
            </div>

            <div className="mt-6">
              <p className="text-lg text-gray-700 leading-relaxed">{portfolio.description}</p>
            </div>

            {/* Artist Info */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Artist</h3>
              <h4 className="text-[#009688] font-medium mb-2">{artist.name}</h4>
              <p className="text-gray-600">{artist.bio}</p>
            </div>

            {/* Size Selection */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Size</h3>
              <div className="flex flex-wrap gap-3">
                {portfolio.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all duration-300
                      ${selectedSize === size
                        ? "border-[#009688] text-[#009688] bg-[#009688]/5"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Donation */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Support</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600 mb-4">
                  Your purchase supports {artist.name}'s work and contributes to the SafeConnect program, 
                  helping other artists establish their careers.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[0, 25, 50, 100].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setAdditionalDonation(amount)}
                      className={`
                        px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all duration-300
                        ${additionalDonation === amount
                          ? "border-[#009688] text-[#009688] bg-[#009688]/5"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                        }
                      `}
                    >
                      {amount === 0 ? "No additional support" : `+$${amount}`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              className="mt-8 flex w-full items-center justify-center rounded-xl border border-transparent bg-[#009688] px-8 py-4 text-lg font-medium text-white hover:bg-[#007a6c] focus:outline-none focus:ring-2 focus:ring-[#009688] focus:ring-offset-2 transition-colors duration-300"
            >
              Add to cart
              <Heart className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}