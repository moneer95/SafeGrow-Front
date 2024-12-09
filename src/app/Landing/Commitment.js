"use client";

import React from "react";
import Image from "next/image";

const Commitment = () => {
  return (
    <div className="bg-[#87CA2F] text-gray-900 py-16 px-4">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-white">Our Commitment</h1>
        <p className="mt-4 text-lg text-white">
          At SafeGrow, we are committed to making a lasting impact in the lives
          of Palestinian refugees while maintaining the highest standards of
          transparency and accountability. Our approach ensures that every
          donation, every mentorship, and every grant is used to create
          meaningful change. Here&apos;s how we uphold our commitment:
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Commitment 1 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 p-4 rounded-full">
            <Image
              src="/search.png"
              alt="Transparent Fund Allocation"
              width={64}
              height={64}
              className="h-16 w-16"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Transparent Fund Allocation
            </h3>
            <p className="mt-2 text-sm text-white">
              We provide regular updates on how donations are allocated and
              ensure that funds directly support our programs. Whether it&apos;s a
              business startup or tools for freelancers, you can trust that
              your contribution is making a difference.
            </p>
          </div>
        </div>

        {/* Commitment 2 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 p-4 rounded-full">
            <Image
              src="/clipboard.png"
              alt="Ongoing Impact Reporting"
              width={64}
              height={64}
              className="h-16 w-16"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Ongoing Impact Reporting
            </h3>
            <p className="mt-2 text-sm text-white">
              SafeGrow shares stories of progress and success with our community
              of donors and supporters. From business launches to personal
              growth, we track the impact of our grants and provide clear,
              regular reports on how your support is helping refugees reclaim
              their futures.
            </p>
          </div>
        </div>

        {/* Commitment 3 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 p-4 rounded-full">
            <Image
              src="/team.png"
              alt="Ethical Partnerships"
              width={64}
              height={64}
              className="h-16 w-16"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Ethical Partnerships
            </h3>
            <p className="mt-2 text-sm text-white">
              We partner with local businesses in Cairo and international
              supporters who share our values of equity, dignity, and
              empowerment. Every partnership is designed to benefit both
              refugees and the wider community in a sustainable and ethical way.
            </p>
          </div>
        </div>

        {/* Commitment 4 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 p-4 rounded-full">
            <Image
              src="/deep-learning.png"
              alt="Continuous Learning"
              width={64}
              height={64}
              className="h-16 w-16"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Continuous Learning and Adaptation
            </h3>
            <p className="mt-2 text-sm text-white">
              SafeGrow is committed to listening to the needs of the communities
              we serve. We continuously refine our programs based on feedback
              from refugees, partners, and supporters to ensure that we are
              providing the most effective support possible.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-12">
        <p className="text-sm max-w-3xl mx-auto text-white">
          By supporting SafeGrow, you are not just contributing financially — you are helping to restore dignity, empower livelihoods, and create sustainable futures for Palestinian refugees. We believe in a future built on transparency, collaboration, and real, measurable impact.
        </p>
      </div>
    </div>
  );
};

export default Commitment;
