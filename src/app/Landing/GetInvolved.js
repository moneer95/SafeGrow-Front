"use client";

import Image from "next/image";

const GetInvolved = () => {
  return (
    <div className="flex flex-col md:flex-row py-32">
      {/* Left Section */}
      <div className="w-full md:w-[45%] h-[400px] bg-[#86CA2F] text-white flex flex-col justify-center items-center py-12 px-6">
        <div className="flex justify-center items-center space-x-3">
          <h2 className="text-[5rem] font-bold">Get</h2>
          <span className="relative top-3 text-5xl">Involved</span>
        </div>
        <div className="mt-8 flex flex-col space-y-4">
          <button className="bg-transparent border-2 border-white text-white font-semibold px-10 py-2 rounded-full hover:shadow-lg">
            I Need Help
          </button>
          <button className="bg-white text-orange-500 font-semibold px-10 py-2 rounded-full shadow-md hover:shadow-lg">
            I Want to Help
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full md:w-[55%] h-[500px] lg:bottom-[50px] relative overflow-hidden mt-8 md:mt-0"
        style={{
          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.8)", // Right and bottom shadow
        }}
      >
        {/* Scrolling Image */}
        <div className="absolute inset-0 animate-scroll-vertical">
          <Image
            src="/Image2.jpg" // Ensure this image exists in the public directory
            alt="Olive branch"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
        </div>

        {/* Text Overlay */}
        <div className="absolute bg-black bg-opacity-50 inset-0 flex items-center justify-center px-6">
          <p className="text-lg w-[80%] mx-auto text-white">
            If you’re a Palestinian refugee in Cairo,{" "}
            <span className="text-[#87CA2F]">SafeGrow</span> offers a range of
            support tailored to your needs. Our three grant programs are
            designed to help you build a sustainable livelihood.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
