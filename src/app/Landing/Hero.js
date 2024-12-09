"use client";

import React from "react";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center relative pb-64 max-h-[1000px]"
      style={{ backgroundImage: "url('/image1.jpg')" }}
    >

      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col justify-center lg:top-[15%]  items-start h-full text-white">
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
            <button className="px-10 py-3 bg-white text-[#87CA2F] font-semibold rounded-md hover:text-[#000] hover:bg-[#F3F3F3]">
              I Need Help
            </button>
          </Link>
          <Link href={"/Donation"}>
          <button className="px-10 py-3 bg-[#87CA2F] text-white font-semibold rounded-md hover:bg-gray-200 hover:text-black">
            I Want to Help
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
