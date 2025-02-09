"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import { ArrowLeft, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import WatermarkedImage from "../../../components/WatermarkedImage";
import { products } from "../../../../lib/data/shop";

export default function ProductDetails() {
  const params = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [additionalDonation, setAdditionalDonation] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const product = products.find(p => p.id === Number(params.id));

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar darkMode={true} />
        <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
            <p className="mt-4 text-gray-500">The product you're looking for doesn't exist.</p>
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
    setCurrentImageIndex((prev) => 
      (prev + 1) % (product.additionalImages.length + 1)
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      (prev - 1 + product.additionalImages.length + 1) % (product.additionalImages.length + 1)
    );
  };

  const currentImage = currentImageIndex === 0 
    ? product.imageSrc 
    : product.additionalImages[currentImageIndex - 1];

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
                src={currentImage}
                alt={`${product.name} by ${product.artist.name}`}
                watermarkText={`© ${product.artist.name} - SafeGrow`}
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
              <button
                onClick={() => setCurrentImageIndex(0)}
                className={`relative aspect-square rounded-lg overflow-hidden ${
                  currentImageIndex === 0 ? "ring-2 ring-[#009688]" : ""
                }`}
              >
                <WatermarkedImage
                  src={product.imageSrc}
                  alt={`${product.name} main image`}
                  watermarkText={`© SafeGrow`}
                  className="rounded-lg"
                />
              </button>
              {product.additionalImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index + 1)}
                  className={`relative aspect-square rounded-lg overflow-hidden ${
                    currentImageIndex === index + 1 ? "ring-2 ring-[#009688]" : ""
                  }`}
                >
                  <WatermarkedImage
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    watermarkText={`© SafeGrow`}
                    className="rounded-lg"
                  />
                </button>
              ))}
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
              <product.icon className="w-5 h-5 text-[#009688]" />
              <span className="text-sm font-medium text-[#009688]">{product.category}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            <div className="mt-3">
              <p className="text-3xl tracking-tight text-gray-900">From ${product.price}</p>
            </div>

            <div className="mt-6">
              <p className="text-lg text-gray-700 leading-relaxed">{product.longDescription}</p>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#009688] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Artist Info */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Artist</h3>
              <h4 className="text-[#009688] font-medium mb-2">{product.artist.name}</h4>
              <p className="text-gray-600">{product.artist.bio}</p>
            </div>

            {/* Size Selection */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`
                      px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all duration-300
                      ${selectedSize === size.name
                        ? "border-[#009688] text-[#009688] bg-[#009688]/5"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }
                    `}
                  >
                    {size.name} - ${size.price}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Donation */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Support</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600 mb-4">
                  Your purchase supports {product.artist.name}'s work and contributes to the SafeConnect program, 
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