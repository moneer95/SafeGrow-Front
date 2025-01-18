"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";

const Hero = () => {

  return (
    <section
      className="bg-cover bg-center relative pb-64 max-h-[50px]"
      style={{ backgroundImage: "url('/iloveimg-converted/1.jpg')", backgroundPosition: "center" }}
    >
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 z-0"></div>

      {/* Content */}
      <div className="absolute max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col justify-center lg:top-[15%] items-center h-full text-white">
        <h1 className="text-4xl lg:text-5xl mt-24 font-bold leading-tight mb-6">
          Donate
        </h1>
      </div>
    </section>
  );
};

export default Hero;
