"use client";

import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white text-gray-900 pt-16">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-[#87CA2F]">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-700">
          We’re here to help you get involved, answer your questions, and guide
          you through the process of supporting SafeGrow or applying for
          assistance. Whether you’re a Palestinian refugee seeking support, a
          donor looking to make an impact, or a mentor offering your expertise,
          we’d love to hear from you.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="flex lg:flex-row flex-col">
        {/* Card 1: Donors and Supporters */}
        <div
          className="bg-teal-600 flex flex-col justify-center items-center text-white h-96 w-full p-8 relative"
          style={{
            backgroundImage: "url('/Grad1.jpg')",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
          }}
        >
          <h2 className="text-4xl font-bold">For Donors and Supporters</h2>
          <p className="mt-4 w-[80%] text-center text-lg">
            Interested in donating, mentoring, or purchasing goods from our
            participants? Contact us to learn more about how you can make a
            difference through SafeGrow.
          </p>
        </div>

        {/* Card 2: Refugees */}
        <div
          className="bg-orange-400 flex flex-col justify-center items-center w-full text-white h-96 p-8 relative"
          style={{
            backgroundImage: "url('/Grad2.webp')",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
          }}
        >
          <h2 className="text-4xl font-bold">For Refugees</h2>
          <p className="mt-4 w-[80%] text-center text-lg">
            If you need help, have questions about our grant programs, or need
            assistance with your application, our team is ready to provide
            guidance. Please reach out and we’ll be happy to assist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
