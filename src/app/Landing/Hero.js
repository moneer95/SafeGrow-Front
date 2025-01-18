"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const Hero = () => {
  const images = [
    "/iloveimg-converted/1.jpg",
    "/iloveimg-converted/2.jpg",
    "/iloveimg-converted/3.jpg",
    "/iloveimg-converted/4.jpg",
    "/iloveimg-converted/7.jpg",
    "/iloveimg-converted/8.jpg",
  ]; // Add your image paths here

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageLoaded(false); // Reset image loading state when switching image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7500); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="bg-cover bg-center relative pb-64 max-h-[1000px] transition-all duration-700"
      style={{
        backgroundImage: `url('${images[currentIndex]}')`,
      }}
    >
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col justify-center lg:top-[15%] items-start h-full text-white">
        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl mt-24 font-bold leading-tight mb-6">
          Empowering{" "}
          <span className="text-[#87CA2F]">Palestinian Refugees</span> <br />
          to Build Sustainable Futures
        </h1>

        {/* Subtext */}
        <p className="text-lg lg:text-xl mb-8 max-w-xl">
          SafeGrow provides grants, mentorship, and resources to help
          Palestinian refugees in Cairo, Egypt create sustainable, meaningful
          livelihoods. Whether you&apos;re looking for support or want to make a
          difference, SafeGrow is here to connect you.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Link href={"/Donation"}>
            <button className="px-10 py-3 bg-white text-[#009688] font-semibold rounded-md hover:text-[#000] hover:bg-[#F3F3F3]">
              I Need Help
            </button>
          </Link>
          <Link href={"/Donation"}>
            <button className="px-10 py-3 bg-[#009688] text-white font-semibold rounded-md hover:bg-gray-200 hover:text-black">
              I Want to Help
            </button>
          </Link>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex
                ? "bg-white"
                : "bg-gray-400 hover:bg-white"
            }`}
          ></div>
        ))}
      </div>

      {/* Low-Quality Image Placeholder with Blur Effect */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
          imageLoaded ? "opacity-100" : "opacity-0 blur-sm"
        }`}
        style={{
          backgroundImage: `url('${images[currentIndex]}')`,
        }}
      >
        {/* Trigger when the high-quality image has loaded */}
        <img
          src={images[currentIndex]}
          alt={`Hero Image ${currentIndex}`}
          className="hidden"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </section>
  );
};

export default Hero;
