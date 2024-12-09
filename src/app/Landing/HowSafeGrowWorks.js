"use client";

import Image from "next/image";

const HowSafeGrowWorks = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="text-center text-4xl text-gray-500 font-bold ">
          How <span className="text-[#86CA2F]">SafeGrow</span> Works
        </h2>
        <p className="text-center text-lg mx-auto lg:w-[80%] text-gray-600 mt-4">
          SafeGrow connects Palestinian refugees in Cairo with meaningful work
          opportunities and sustainable livelihoods through our three
          specialized programs.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* SafeBuild */}
          <div className="flex flex-col items-center text-left p-6">
            <div
              className="w-64 flex items-start rounded-full justify-start h-64 mb-4 bg-[#87CA2F]"
              style={{
                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.8)", // Right and bottom shadow
              }}
            >
              <Image
                src="/HowWorks1.png"
                alt="SafeBuild"
                width={500}
                height={500}
                className="rounded-full"
              />
            </div>

            <h3 className="text-2xl font-bold text-[#87CA2F]">SafeBuild</h3>
            <p className="text-gray-600 text-start mt-4">
              This program supports refugees who want to create small, local
              businesses or be matched with employment. SafeBuild provides
              financial resources, equipment, and mentorship to generate income
              quickly.
            </p>
          </div>

          {/* SafeConnect */}
          <div className="flex flex-col items-center text-left p-6">
            <div
              className="w-64 flex items-start rounded-full justify-start h-64 mb-4 bg-[#ED5C2B]"
              style={{
                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.8)", // Right and bottom shadow
              }}
            >
              <Image
                src="/HowWorks1.png"
                alt="SafeConnect"
                width={500}
                height={500}
                className="rounded-full"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#ED5C2B]">
              SafeConnect
            </h3>
            <p className="text-gray-600 text-start mt-4">
              For refugees skilled in fields like graphic design, photography,
              or coding, SafeConnect provides a pathway to remote or freelance
              work. We offer essential tools like laptops and cameras, help
              build professional portfolios and resumes, and connect individuals
              with international mentors who guide them in marketing and online
              engagement - empowering them to promote their skills and grow
              their businesses independently.
            </p>
          </div>

          {/* SafeRevive */}
          <div className="flex flex-col items-center text-left p-6">
            <div
              className="w-64 flex items-start rounded-full justify-start h-64 mb-4 bg-[#FBB13C]"
              style={{
                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.8)", // Right and bottom shadow
              }}
            >
              <Image
                src="/HowWorks1.png"
                alt="SafeRevive"
                width={500}
                height={500}
                className="rounded-full"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#FBB13C]">
              SafeRevive
            </h3>
            <p className="text-gray-600 text-start mt-4">
              SafeRevive helps refugees rebuild businesses that were destroyed
              by displacement, providing resources and mentorship to restore
              livelihoods.
            </p>
          </div>
        </div>

        <p className="text-center w-[80%] mx-auto text-gray-600 mt-12">
          Through these programs, SafeGrow bridges the gap between local
          businesses and refugees in need of work while offering international
          supporters a meaningful way to contribute to long-term solutions.
        </p>
      </div>
    </div>
  );
};

export default HowSafeGrowWorks;
