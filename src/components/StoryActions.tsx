"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Users, Briefcase, HeartHandshake } from "lucide-react";
import Link from "next/link";

const actions = [
  {
    icon: ShoppingBag,
    title: "Purchase a Business Starter Kit",
    description: "Empower a displaced Palestinian to build a sustainable livelihood through one of our specialized programs.",
    href: "/business-kits",
    color: "bg-green-50",
    iconColor: "text-green-700",
    hoverColor: "hover:bg-green-100"
  },
  {
    icon: ShoppingBag,
    title: "Buy Palestinian-Made Products",
    description: "Support artisans and freelancers by purchasing their unique creations from our shop, directly funding their businesses and our programs.",
    href: "/shop",
    color: "bg-orange-50",
    iconColor: "text-[#F15A28]",
    hoverColor: "hover:bg-orange-100"
  },
  {
    icon: Users,
    title: "Hire a Palestinian",
    description: "Connect with skilled workers through SafeGrow and bring their talent into your business.",
    href: "https://dash.safe-grow.com/employer-job-posting?new=1",
    color: "bg-yellow-50",
    iconColor: "text-[#F9B043]",
    hoverColor: "hover:bg-yellow-100"
  },
  {
    icon: HeartHandshake,
    title: "Become a Mentor",
    description: "Share your expertise in business, freelancing, or digital skills to help someone succeed.",
    href: "https://dash.safe-grow.com/mentor-application?new=1",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverColor: "hover:bg-blue-100"
  }
];

export default function StoryActions() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Make an Impact
            <span className="block mt-2 text-xl font-medium text-gray-600">
              Choose how you want to help
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={action.href}>
                <div className={`group h-full p-6 rounded-2xl ${action.color} ${action.hoverColor} transition-all duration-300 cursor-pointer`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/80 group-hover:bg-white transition-colors">
                      <action.icon className={`w-6 h-6 ${action.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {action.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}