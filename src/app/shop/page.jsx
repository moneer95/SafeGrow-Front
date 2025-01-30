"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeartHandshake, Image as ImageIcon, Palette } from "lucide-react";

const products = [
  {
    id: 1,
    name: 'Photography Print',
    href: '/shop/1',
    price: '$175',
    description: 'High-quality digital photography print created by one of our talented professional photographers, capturing the essence of Palestinian culture and life.',
    category: 'Photography',
    icon: ImageIcon,
    imageSrc: 'https://www.maxfosterphotography.com/images/xl/Rise-Above.webp',
    imageAlt: 'Professional photograph showing urban landscape.',
  },
  {
    id: 2,
    name: 'Handwoven Textile Art',
    href: '/shop/2',
    price: '$350',
    description: 'A beautifully handcrafted piece of textile art, showcasing the artistry and skills of our Palestinian artisans using traditional techniques.',
    category: 'Textile Arts',
    icon: Palette,
    imageSrc: 'https://oxfordasiantextilegroup.wordpress.com/wp-content/uploads/2018/08/20183719_chest_panel.jpg?w=768',
    imageAlt: 'Handwoven textile piece with intricate patterns.',
  },
  {
    id: 3,
    name: 'Traditional Craft Piece',
    href: '/shop/3',
    price: '$250',
    description: 'A unique, custom-made craft piece, carefully designed and created with traditional Palestinian artistry, representing cultural heritage.',
    category: 'Artisan Crafts',
    icon: HeartHandshake,
    imageSrc: 'https://media.istockphoto.com/id/1346661870/photo/baskets-traditional-handicraft-products.jpg?s=612x612&w=0&k=20&c=CNV8ONrT8EoZFMPpdkHNOPqk2vTbLitB9n9FfmsLA88=',
    imageAlt: 'Handcrafted artisan piece showing traditional design.',
  },
];

export default function Shop() {
  return (
    <div className="bg-white">
      <Navbar darkMode="true" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Support Artisan Goods
          </motion.h1>
          <motion.p 
            className="text-lg leading-relaxed text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Support local artisans and freelancers by purchasing their unique creations. Each item you buy not only supports the artisan who created it but also helps fund SafeGrow's programs.
          </motion.p>
          <motion.div 
            className="bg-gray-50 rounded-xl p-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-600">
              Every purchase directly benefits the artisan, with a portion of the proceeds funding programs like SafeBuild, SafeConnect, and SafeRevive. You can also choose to contribute more during checkout to further support the program of your choice.
            </p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * (index + 3) }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-4 p-6">
                <div className="flex items-center gap-2">
                  <product.icon className="w-5 h-5 text-[#009688]" />
                  <span className="text-sm font-medium text-[#009688]">{product.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  <Link href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="flex-1 text-base text-gray-500">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-900">{product.price}</p>
                  <button className="text-[#009688] font-medium hover:text-[#007a6c] transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Info */}
        <motion.div 
          className="mt-24 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Customize Your Support</h2>
          <p className="text-gray-600">
            During checkout, you'll have the option to increase your purchase amount and select which SafeGrow program your additional contribution will support - whether that's helping a displaced Palestinian start a business, find freelance work, or rebuild a lost livelihood.
          </p>
        </motion.div>
      </div>
    </div>
  );
}