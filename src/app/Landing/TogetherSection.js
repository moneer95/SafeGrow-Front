"use client";

import Image from "next/image";

const TogetherSection = () => {
  return (
    <div className="relative bg-white text-white pt-40">
      <div
        className="py-32 bg-cover top-[30%] bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/image2.jpg')", // Ensure this image exists in the public directory
          backgroundPosition: "top center",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content Wrapper */}
        <div className="relative max-w-5xl mx-auto text-start flex flex-col md:flex-row items-center justify-center px-4">
          {/* Text Content */}
          <h1 className="text-3xl w-[70%] md:text-5xl font-medium leading-tight mb-4 md:mb-0 md:mr-6">
            <span className="text-[#87CA2F]">Together,</span> we’re building a
            world where we can all grow and thrive.
          </h1>

          {/* Logo Image */}
          <div>
            <Image
              src="/Logo.png" // Ensure this image exists in the public directory
              alt="SafeGrow Logo"
              width={256} // 64 * 4 (as h-64 and w-64 correspond to 16rem = 256px)
              height={256}
              className="object-cover h-64 w-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TogetherSection;
