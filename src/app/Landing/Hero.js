"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { Users, HandHeart, Italic } from "lucide-react";
import StoryActions from "../../components/StoryActions";


const Hero = () => {
  const images = [
    "/iloveimg-converted/1.jpg",
    "/iloveimg-converted/2.jpg",
    "/iloveimg-converted/3.jpg",
    "/iloveimg-converted/4.jpg",
    "/iloveimg-converted/7.jpg",
    "/iloveimg-converted/8.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setIsPopupVisible(true); // Show the popup
  };

  const closePopup = () => {
    setIsPopupVisible(false); // Hide the popup
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setImageLoaded(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7500);

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
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col justify-center lg:top-[15%] items-start h-full text-white">
        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl mt-24 font-bold leading-tight mb-6">
          Empowering{" "}
          <span className="text-[#87CA2F]">Palestinians</span> <br />
          to Build Sustainable Futures
        </h1>

        {/* Subtext */}
        <p className="text-lg lg:text-xl mb-8 max-w-xl">
          SafeGrow provides grants, mentorship, and resources to help displaced Palestinians  create sustainable, meaningful livelihoods. Whether you're looking for support or want to make a difference, SafeGrow is here to connect you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://dash.safe-grow.com/safegrow-new-case?new=1"
            className="group px-10 py-3 bg-gray-50 text-[#009688] font-semibold rounded-md hover:bg-gray-100 hover:text-[#009688] flex items-center justify-center transition-all duration-300 w-full sm:w-auto hover:scale-105 active:scale-95"
          >
            <Users className="w-5 h-5 mr-2" />

            <h2> <i>I need help - </i> أبحث عن الدعم </h2>
          </Link>

          <div>
            {/* Button */}
            <button
              className="px-10 py-3 bg-[#009688] text-white font-semibold rounded-md hover:bg-[#009688] flex items-center justify-center w-full sm:w-auto transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleButtonClick} // Add click handler
            >
              <HandHeart className="w-5 h-5 mr-2" />
              I Want to Help
            </button>

            {/* Popup */}
            {isPopupVisible && (
              <div className="fixed inset-0 flex items-center w-full justify-center bg-black bg-opacity-50 z-50 ">
                <div className="bg-white h-[90vh] p-6 rounded-lg shadow-lg  w-10/12 overflow-scroll">
                  <StoryActions />
                  <button
                    className="px-4 py-2 flex mx-auto bg-[#009688] text-white rounded-md hover:bg-[#00796b] transition-colors duration-300"
                    onClick={closePopup} // Close the popup
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex
              ? "bg-white"
              : "bg-gray-400 hover:bg-white"
              }`}
          ></div>
        ))}
      </div>

      {/* Low-Quality Image Placeholder with Blur Effect */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 pointer-events-none z-0 ${imageLoaded ? "opacity-0" : "opacity-0 blur-sm"
          }`}
        style={{
          backgroundImage: `url('${images[currentIndex]}')`,
        }}
      >
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