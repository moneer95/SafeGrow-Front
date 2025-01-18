"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const stories = [
  {
    id: 1,
    name: "Zain Spices: Honoring Palestinian Heritage Through Flavor",
    description:
      "Abdelrahman fled Gaza in May 2024 after enduring unimaginable hardship. With SafeGrow's support, he founded Zain Spices, bringing authentic Palestinian flavors to Cairo while creating a sustainable livelihood for his family.",
    img: "/iloveimg-converted/10.jpg",
    color: "#87CA2F"
  },
  {
    id: 2,
    name: "Rama Kitchen: A Story of Love, Loss, and Resilience",
    description:
      "After losing her daughter Rama, Maha found strength in starting Rama Kitchen. With SafeGrow's help, she shares Palestinian culinary traditions, offering delicious, homemade meals crafted with love and tradition.",
    img: "/iloveimg-converted/27.jpg",
    color: "#ED5C2B"
  },
  {
    id: 3,
    name: "Raw'a: A Legacy Rebuilt with Passion and Perseverance",
    description:
      "Bilal rebuilt his family's thriving furniture business, Raw'a, in Cairo with SafeGrow's support. His exquisite craftsmanship and resilience stand as a testament to his determination to provide for his family and community.",
    img: "/iloveimg-converted/14.jpg",
    color: "#FBB13C"
  },
  {
    id: 4,
    name: "Rama Kitchen: A Story of Love, Loss, and Resilience",
    description:
      "After losing her daughter Rama, Maha found strength in starting Rama Kitchen. With SafeGrow's help, she shares Palestinian culinary traditions, offering delicious, homemade meals crafted with love and tradition.",
    img: "/iloveimg-converted/27.jpg",
    color: "#ED5C2B"
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          {...fadeIn}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Stories of Impact
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At SafeGrow, we believe in the power of stories to inspire change and build connections.
            Through our programs, Palestinian refugees are not only sharing their journeys but also
            reclaiming their futures. These stories reflect the strength, resilience, and dignity
            of the people we serve.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          {...fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={isMobile ? 1 : 3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="pb-12"
          >
            {stories.map((story, index) => (
              <SwiperSlide key={story.id}>
                <Link href={`/stories/${story.id}`}>
                  <motion.div
                    className={`transition-all duration-500 cursor-pointer ${
                      activeIndex === index ? 'scale-105' : 'scale-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                      <Image
                        src={story.img}
                        alt={story.name}
                        fill
                        className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                          activeIndex === index ? 'brightness-90' : 'brightness-75'
                        }`}
                      />
                      <div
                        className="absolute inset-0 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(to bottom, 
                            transparent 0%, 
                            rgba(0, 0, 0, 0.7) 50%, 
                            rgba(0, 0, 0, 0.85) 100%
                          )`
                        }}
                      />

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                        <p className="text-sm leading-relaxed opacity-90">
                          {activeIndex === index ? story.description : `${story.description.substring(0, 70)}...`}
                        </p>
                        <span className="inline-flex items-center mt-4 text-white font-medium group-hover:text-[#86CA2F] transition-colors duration-300">
                          Read full story
                          <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          {...fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Inspired by these stories?
          </h3>
          <Link
            href="/Donation"
            className="inline-flex items-center text-[#86CA2F] hover:text-[#6da02b] font-semibold transition-colors"
          >
            Find out how you can help
            <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Carousel;