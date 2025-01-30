"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import { ArrowLeft, HeartHandshake, Image as ImageIcon, Palette, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: 'Photography Print',
    price: '$175',
    description: 'High-quality digital photography print created by one of our talented professional photographers, capturing the essence of Palestinian culture and life.',
    category: 'Photography',
    icon: ImageIcon,
    imageSrc: 'https://www.maxfosterphotography.com/images/xl/Rise-Above.webp',
    imageAlt: 'Professional photograph showing urban landscape.',
    artist: 'Ahmad Khalil',
    artistBio: 'A Palestinian photographer with over 10 years of experience capturing the beauty and resilience of his culture.',
    details: [
      'Limited edition print (1 of 50)',
      'Museum-quality archival paper',
      'Certificate of authenticity included',
      'Available in multiple sizes',
      'Signed by the artist',
    ],
    sizes: ['12"x16"', '16"x20"', '20"x24"', '24"x36"'],
    impact: 'Your purchase directly supports Ahmad\'s work and contributes to the SafeConnect program, helping other artists establish their careers.',
  },
  {
    id: 2,
    name: 'Handwoven Textile Art',
    price: '$350',
    description: 'A beautifully handcrafted piece of textile art, showcasing the artistry and skills of our Palestinian artisans using traditional techniques.',
    category: 'Textile Arts',
    icon: Palette,
    imageSrc: 'https://oxfordasiantextilegroup.wordpress.com/wp-content/uploads/2018/08/20183719_chest_panel.jpg?w=768',
    imageAlt: 'Handwoven textile piece with intricate patterns.',
    artist: 'Layla Hassan',
    artistBio: 'A master weaver preserving traditional Palestinian textile techniques while creating contemporary pieces.',
    details: [
      'Hand-woven using traditional methods',
      '100% natural materials',
      'Unique, one-of-a-kind piece',
      'Traditional Palestinian patterns',
      'Includes hanging hardware',
    ],
    sizes: ['2\'x3\'', '3\'x4\'', '4\'x6\''],
    impact: 'Your purchase supports Layla\'s workshop and the SafeBuild program, helping artisans establish sustainable businesses.',
  },
  {
    id: 3,
    name: 'Traditional Craft Piece',
    price: '$250',
    description: 'A unique, custom-made craft piece, carefully designed and created with traditional Palestinian artistry, representing cultural heritage.',
    category: 'Artisan Crafts',
    icon: HeartHandshake,
    imageSrc: 'https://media.istockphoto.com/id/1346661870/photo/baskets-traditional-handicraft-products.jpg?s=612x612&w=0&k=20&c=CNV8ONrT8EoZFMPpdkHNOPqk2vTbLitB9n9FfmsLA88=',
    imageAlt: 'Handcrafted artisan piece showing traditional design.',
    artist: 'Omar Nasser',
    artistBio: 'A third-generation craftsman combining traditional techniques with contemporary design sensibilities.',
    details: [
      'Handcrafted from local materials',
      'Traditional design elements',
      'Each piece is unique',
      'Protective coating applied',
      'Display stand included',
    ],
    sizes: ['Small', 'Medium', 'Large'],
    impact: 'Your purchase helps preserve traditional craftsmanship and supports the SafeRevive program for artisan development.',
  },
];

export default function ProductDetails() {
  const params = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [additionalDonation, setAdditionalDonation] = useState(0);
  
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar darkMode="true" />
        <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
            <p className="mt-4 text-gray-500">The product you're looking for doesn't exist.</p>
            <Link 
              href="/shop"
              className="mt-8 inline-flex items-center text-[#009688] hover:text-[#007a6c] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to shop
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div className="bg-white">
      <Navbar darkMode="true" />
      <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Link 
          href="/shop"
          className="inline-flex items-center text-[#009688] hover:text-[#007a6c] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to shop
        </Link>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] w-full rounded-2xl overflow-hidden lg:aspect-auto lg:h-[600px] shadow-lg"
          >
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 lg:mt-0 lg:pl-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Icon className="w-5 h-5 text-[#009688]" />
              <span className="text-sm font-medium text-[#009688]">{product.category}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            <div className="mt-3">
              <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
            </div>

            <div className="mt-6">
              <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Artist Info */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Artist</h3>
              <h4 className="text-[#009688] font-medium mb-2">{product.artist}</h4>
              <p className="text-gray-600">{product.artistBio}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
              <ul className="space-y-3">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#009688]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all duration-300
                      ${selectedSize === size
                        ? 'border-[#009688] text-[#009688] bg-[#009688]/5'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Donation */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Support</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600 mb-4">{product.impact}</p>
                <div className="flex flex-wrap gap-3">
                  {[0, 25, 50, 100].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setAdditionalDonation(amount)}
                      className={`
                        px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all duration-300
                        ${additionalDonation === amount
                          ? 'border-[#009688] text-[#009688] bg-[#009688]/5'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                        }
                      `}
                    >
                      {amount === 0 ? 'No additional support' : `+$${amount}`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              className="mt-8 flex w-full items-center justify-center rounded-xl border border-transparent bg-[#009688] px-8 py-4 text-lg font-medium text-white hover:bg-[#007a6c] focus:outline-none focus:ring-2 focus:ring-[#009688] focus:ring-offset-2 transition-colors duration-300"
            >
              Add to cart
              <Heart className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}