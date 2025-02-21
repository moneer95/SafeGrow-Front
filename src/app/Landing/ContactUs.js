"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const ContactUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const contactCards = [
    {
      title: "For Mentors and Supporters",
      description: "Interested in donating, mentoring, or purchasing goods from our participants? Contact us to learn more about how you can make a difference through SafeGrow.",
      image: "/Grad1.jpg",
      color: "#009688",
      contact: [
        { icon: Mail, text: "programs@safe-grow.com" },
      ]
    },
    {
      title: "For Palestinians",
      description: "If you need help, have questions about our grant programs, or need assistance with your application, our team is ready to provide guidance. Please reach out and we'll be happy to assist.",
      image: "/Grad2.webp",
      color: "#00796B",
      contact: [
        { icon: Mail, text: "info@safe-grow.com" },
      ]
    }
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          {...fadeIn}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
            <span className="block mt-2 text-3xl lg:text-4xl font-medium text-gray-600">
              We're Here to Help
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Whether you're a Palestinian refugee seeking support, a donor looking to make 
            an impact, or a mentor offering your expertise, we'd love to hear from you. 
            Our team is committed to providing timely and helpful responses to all inquiries.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              {...fadeIn}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden group">
                {/* Background Image with Overlay */}
                <div className="relative h-[400px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, ${card.color}90 0%, ${card.color} 100%)`
                    }}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {card.title}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    {card.contact.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-white">
                        <item.icon className="w-5 h-5" />
                        <span className="text-lg">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location Section */}
        <motion.div 
          className="mt-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          {...fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;