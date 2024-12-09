"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import {
  Pagination,
  EffectCoverflow,
  Autoplay,
  Navigation,
} from "swiper/modules";

// Ensure you have a Loader component. If not, create a simple one or remove it.
const Loader = () => (
  <div className="flex justify-center items-center h-full">
    <div className="loader">Loading...</div>
    <style jsx>{`
      .loader {
        border: 8px solid #f3f3f3;
        border-top: 8px solid #87CA2F;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const Caresoul = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const properties = [
    {
      id: 1,
      name: "Bilal&apos;s Story",
      description:
        "Bilal ran a successful furniture-making business in Gaza. With SafeGrow grant support, he rebuilt his business from the ground up.",
      img: "/Car5.jpg",
    },
    {
      id: 2,
      name: "Aisha&apos;s Journey",
      description:
        "Aisha started her own bakery in Cairo, bringing sweet delights to her community.",
      img: "/Car6.jpg",
    },
    {
      id: 3,
      name: "Omar&apos;s Adventure",
      description:
        "Omar explored sustainable farming techniques in rural Morocco, enhancing food security.",
      img: "/Car7.jpg",
    },
    {
      id: 4,
      name: "Sara&apos;s Innovation",
      description:
        "Sara developed an app that connects local artisans with global markets, empowering creators.",
      img: "/Car1.jpg",
    },
    {
      id: 5,
      name: "Khalid&apos;s Mission",
      description:
        "Khalid is dedicated to providing clean water solutions in Yemen, improving health standards.",
      img: "/Car2.jpg",
    },
    {
      id: 6,
      name: "Laila&apos;s Vision",
      description:
        "Laila advocates for women's education in remote areas of Pakistan, fostering empowerment.",
      img: "/Car3.jpg",
    },
    {
      id: 7,
      name: "Ahmed&apos;s Initiative",
      description:
        "Ahmed launched a renewable energy project in Kenya, promoting sustainable living.",
      img: "/Car4.jpg",
    },
    {
      id: 8,
      name: "Maya&apos;s Creativity",
      description:
        "Maya&apos;s artwork has inspired many in her hometown in Indonesia, showcasing cultural heritage.",
      img: "/Car5.jpg",
    },
    {
      id: 9,
      name: "Zara&apos;s Leadership",
      description:
        "Zara leads a community center that empowers youth in Lebanon, fostering future leaders.",
      img: "/Car6.jpg",
    },
    {
      id: 10,
      name: "Hassan&apos;s Commitment",
      description:
        "Hassan works tirelessly to preserve cultural heritage in Iraq, maintaining historical sites.",
      img: "/Car7.jpg",
    },
  ];

  useEffect(() => {
    // Set loading to false after component mounts
    setLoading(false);

    // Function to check screen width
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    // Initial check
    checkScreenWidth();

    // Add event listener
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <div className="bg-white text-gray-900 w-full">
      {/* Section name */}
      <div className="text-center pt-12 px-4">
        <h1 className="text-4xl font-bold text-[#87CA2F]">Stories of Impact</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-5xl mx-auto">
          At SafeGrow, we believe in the power of stories to inspire change and
          build connections. Through our programs, Palestinian refugees are not
          only sharing their journeys but also reclaiming their futures. With
          tenacity, faith, and your support, they&apos;re rebuilding businesses,
          forging new opportunities, and creating sustainable livelihoods. These
          stories reflect the strength, resilience, and dignity of the people we
          serve and the profound impact of SafeGrow&apos;s mission.
        </p>
      </div>

      {/* Carousels Section */}
      <>
        {isMobile ? (
          <>
            {loading ? (
              <Loader />
            ) : (
              <div
                className="container overflow-hidden h-[800px] py-[50px] max-w-[1440px] mx-auto p-8"
                id="Topics"
              >
                <br />
                <br />
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={60}
                  slidesPerView={1} // Shows 1 main slide and partial slides on sides
                  centeredSlides={true} // Centers the active slide
                  loop={true} // Enables infinite loop
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  navigation // Enables navigation buttons
                  // pagination={{ clickable: true }} // Enables clickable pagination dots
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 }, // Very small screens
                    640: { slidesPerView: 1, spaceBetween: 20 }, // Small screens (like mobile)
                    1024: { slidesPerView: 3, spaceBetween: 30 }, // Larger screens
                  }}
                  className="property-swiper"
                >
                  {properties.map((property, index) => (
                    <SwiperSlide key={property.id}>
                      <div
                        className={`transition-transform duration-500 ${
                          activeIndex === index ? "scale-105" : "scale-100"
                        }`}
                      >
                        <div
                          className={`relative p-6 flex cursor-pointer ${
                            activeIndex === index
                              ? "bg-transparent z-50 hover:filter hover:grayscale hover:brightness-75 h-[400px] transition-all"
                              : "bg-transparent"
                          }`}
                        >
                          <Image
                            src={property.img}
                            alt={property.name}
                            layout="fill"
                            objectFit="cover"
                            className={`w-full h-full absolute left-0 bottom-0 object-cover rounded-lg transition-all duration-500 ${
                              activeIndex === index
                                ? "filter-none"
                                : "filter grayscale brightness-75"
                            }`}
                          />
                          <div className="absolute inset-0 w-full bg-gradient-to-t from-black via-black/40 to-transparent opacity-1000 rounded-lg"></div>
                          {/* Content Positioned at the Bottom */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex flex-col items-start bg-gradient-to-t from-black via-transparent to-transparent rounded-b-lg">
                            <span className="text-white ml-2 font-extrabold text-md">
                              {property.name}
                            </span>
                            {activeIndex === index ? (
                              <span className="text-white w-full text-left px-2 py-1 rounded-full text-xs">
                                {property.description}
                              </span>
                            ) : (
                              <span className="text-white w-full text-left px-2 py-1 rounded-full text-xs">
                                {property.description.substring(0, 70)}...
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button className="bg-[#00303A] text-[#D9D9D9] border outline-none w-[60%] ml-[20%] mt-20 hover:bg-[#D9D9D9] hover:text-[#00303A] hover:border hover:border-[#00303A] font-semibold px-8 py-4 rounded-full transition duration-300">
                  Get Started
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="relative w-full h-[800px] mx-auto">
            <Swiper
              ref={swiperRef} // Assign ref to Swiper
              spaceBetween={30}
              slidesPerView={3.8}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 2000 }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-[130%]"
            >
              {properties.map((property, index) => (
                <SwiperSlide key={property.id}>
                  <div
                    className={`transition-all mt-[100px] duration-500 transform ${
                      activeIndex === index ? "scale-100" : "scale-100"
                    }`}
                  >
                    <div
                      className={`relative p-6 flex cursor-pointer ${
                        activeIndex === index
                          ? "bg-transparent z-50 hover:filter hover:grayscale hover:brightness-75 h-[400px] transition-all"
                          : "bg-transparent h-[200px] z-10 mt-[300px]"
                      }`}
                    >
                      <Image
                        src={property.img}
                        alt={property.name}
                        layout="fill"
                        objectFit="cover"
                        className={`w-full h-full absolute bottom-0 object-cover rounded-lg transition-all duration-500 ${
                          activeIndex === index
                            ? "filter-none"
                            : "filter grayscale brightness-75"
                        }`}
                      />
                      {/* Gradient overlay for inner shadow effect */}
                      <div className="absolute inset-0 w-full ml-6 bg-gradient-to-t from-black via-black/40 to-transparent opacity-1000 rounded-lg"></div>
                      {/* Position content at the bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-10 z-20 flex flex-col items-start">
                        <span className="text-white text-left carsoulitems font-extrabold px-2 py-1 z-40 rounded-full text-xl">
                          {property.name}
                        </span>
                        {activeIndex === index ? (
                          <span className="text-white text-left w-[90%] px-2 carsoulitems z-40 py-1 rounded-full text-xs">
                            {property.description}
                          </span>
                        ) : (
                          <span className="text-white w-[70%] text-left px-2 carsoulitems z-40 py-1 rounded-full text-xs">
                            {property.description.substring(0, 70)}.....
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom navigation buttons */}
            <div className="flex justify-between max-w-[1440px] items-center mt-10 mx-auto">
              <div className="flex gap-4 ml-[100px] mt-10">
                <button
                  className="px-6 py-4 text-gray-900 bg-transparent border border-gray-900 rounded-full"
                  onClick={() => swiperRef.current.swiper.slidePrev()}
                >
                  &#10094;
                </button>
                <button
                  className="px-6 py-4 text-gray-900 bg-transparent border border-gray-900 rounded-full"
                  onClick={() => swiperRef.current.swiper.slideNext()}
                >
                  &#10095;
                </button>
              </div>
            </div>
          </div>
        )}
      </>

      {/* Footer CTA */}
      <div className="text-center pb-12 px-4">
        <h2 className="text-2xl font-bold">Inspired by these stories?</h2>
        <Link href="/donate" className="mt-4 inline-block text-lg text-[#87CA2F] underline font-semibold hover:text-[#6da02b]"> {/* Replaced <a> with <Link /> */}
            Find out how you can help by donating or becoming a mentor today.
        </Link>
      </div>
    </div>
  );
};

export default Caresoul;
