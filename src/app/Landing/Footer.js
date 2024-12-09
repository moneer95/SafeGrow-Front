"use client";

import React from "react";

const NewsletterSignup = () => {
  return (
    <div className="bg-black text-white py-8 px-4">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Text Content */}
        <p className="text-lg md:text-xl font-light">
          <strong className="font-bold">Sign up</strong> for our quarterly
          newsletter to receive updates on SafeGrow&apos;s impact, stories from the
          community, and opportunities to get involved.
        </p>

        {/* Signup Button */}
        <button className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-2 px-10 rounded-full shadow-md transition">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NewsletterSignup;
