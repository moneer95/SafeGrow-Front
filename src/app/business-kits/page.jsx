"use client";

import { useState } from "react";
import { Sprout, Check, ArrowRight, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import CheckoutForm from "../../components/CheckoutForm";
import { motion } from "framer-motion";
import PayPalCheckout from "../../components/PayPalCheckout"
const kits = [
  {
    name: "Small Business Starter Kit",
    price: 300,
    description: "Support small, local businesses like crafting, tailoring, tutoring, or plant-growing. This kit provides the basics to help start and sustain a small venture.",
    features: [
      "Materials and equipment for businesses like crafting, tailoring, or tutoring",
      "Mentorship to guide them in the early stages of their business"
    ],
    impact: "Help create income-generating opportunities for displaced Palestinians and preserve cultural skills and traditions.",
    image: "/kit-photos/b1-kit.jpeg"
  },
  {
    name: "Freelancer & Online Business Kit",
    price: 1000,
    description: "For digital entrepreneurs and freelancers, this kit equips individuals with the tools to start or grow their online businesses—whether it's freelance work or selling products online.",
    features: [
      "Laptop, camera, or digital tools needed for online work",
      "Access to software, hosting, and online marketing tools",
      "Mentorship from industry professionals"
    ],
    impact: "Empower displaced Palestinians to tap into the global digital economy and build sustainable freelance careers.",
    image: "/kit-photos/b2-kit.jpeg",
    popular: true
  },
  {
    name: "Advanced Business Equipment Kit",
    price: 2000,
    description: "This kit is for those looking to launch more complex businesses, like woodworking or cooking ventures. It provides high-quality equipment to get these businesses off the ground.",
    features: [
      "Equipment for woodworking (e.g., saws, drills) or cooking (e.g., ovens, utensils)",
      "Business development support and mentorship for scaling"
    ],
    impact: "Help displaced Palestinians launch larger-scale businesses, creating long-term income and employment opportunities.",
    image: "/kit-photos/b3-kit.jpeg"
  }
];



export default function BusinessKits() {
  const [selectedKit, setSelectedKit] = useState(null);
  const [isOpen, setIsOpen] = useState(true); // Open the popup by default


  const handleDonate = (kit) => {
    setSelectedKit(kit);
    setIsOpen(true)
  };

  if (selectedKit) {
    <PayPalCheckout />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Navbar darkMode />
      <div className="relative py-24 sm:pt-2">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/iloveimg-converted/9.jpg"
            alt="Support background"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Business Kits
                <span className="block text-2xl sm:text-3xl mt-4 font-medium text-white/90">
                  Help Displaced Palestinians Build Sustainable Futures
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/90 max-w-3xl mx-auto">
                At SafeGrow, we believe that rebuilding livelihoods starts with providing the right tools.
                Our Business Kits are designed to support displaced Palestinians in creating sustainable businesses,
                launching freelance careers, or recovering from displacement.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* {selectedKit && <PayForm amount={selectedKit.price} products_ids={[selectedKit.name]} isOpen={isOpen} setIsOpen={setIsOpen} />} */}

      {/* Business Kits */}
      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Choose Your Impact
              <span className="block mt-2 text-xl font-medium text-gray-600">
                Three Business Kit Tiers
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {kits.map((kit, index) => (
              <motion.div
                key={kit.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-2xl border-4 ${kit.popular ? "border-[#009688]" : "border-gray-200"
                  } bg-white p-8 transition-all duration-300 hover:shadow-lg h-full`}
              >
                {kit.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-[#009688] px-4 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#009688]/30">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex flex-col flex-grow">
                  <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
                    <Image src={kit.image} alt={kit.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{kit.name}</h3>
                  <p className="mt-4 text-sm text-gray-600">{kit.description}</p>
                  <div className="mt-6 text-3xl font-bold text-gray-900">
                    ${kit.price}
                    <span className="text-base font-medium text-gray-500">/one-time</span>
                  </div>
                  <ul role="list" className="mt-8 space-y-3">
                    {kit.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-6 w-6 text-[#87CA2F] flex-shrink-0" />
                        <p className="ml-3 text-sm text-gray-600">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-medium text-gray-900 mb-2">Impact</h4>
                    <p className="text-sm text-gray-600">{kit.impact}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDonate(kit)}
                  className={`mt-8 w-full rounded-lg px-4 py-4 text-center text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${kit.popular
                      ? "bg-[#87CA2F] text-white hover:bg-[#87CA2F]/90"
                      : "bg-[#009688] text-white hover:bg-[#009688]/90"
                    }`}
                >
                  Get {kit.name}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* Questions Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              If you have any questions or need more details, don't hesitate to reach out. We're happy to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#009688] text-white rounded-lg hover:bg-[#009688]/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Learn More About SafeGrow
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}