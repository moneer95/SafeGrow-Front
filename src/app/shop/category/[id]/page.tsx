"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../../../components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { categories, getProducts } from "../../../../../lib/data/shop";

export default function CategoryPage() {
  const params = useParams();


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      setLoading(false);
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }



  const category = categories.find(c => c.id === params.id);
  const categoryProducts = products.filter(p => p.categoryId === params.id);

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar darkMode={true} />
        <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Category not found</h2>
            <p className="mt-4 text-gray-500">The category you're looking for doesn't exist.</p>
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

  return (
    <div className="bg-white">
      <Navbar darkMode={true} />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <Link
          href="/shop"
          className="inline-flex items-center text-[#009688] hover:text-[#007a6c] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to categories
        </Link>

        {/* Category Header */}
        <div className={`${category.bgColor} rounded-2xl p-8 mb-16`}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-white/80">
                <category.icon className={`w-8 h-8 ${category.color}`} />
              </div>
              <h1 className={`text-3xl font-bold ${category.color}`}>
                {category.name}
              </h1>
            </div>
            <p className="text-lg text-gray-600">{category.description}</p>
            <div className="mt-6 flex items-center gap-2 text-gray-600">
              <Download className="w-5 h-5" />
              <span>All products include instant digital delivery</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
          {categoryProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={`https://dash.safe-grow.com${product.imageSrc}`}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white/90">
                    <Download className="w-4 h-4" />
                    <span className="text-sm">Digital Product</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <product.icon className={`w-5 h-5 ${category.color}`} />
                  <span className={`text-sm font-medium ${category.color}`}>
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <Link href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-2">{product.description}</p>

                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">${product.price}</p>
                    <p className="text-sm text-gray-500">Includes all file formats</p>
                  </div>
                  <div className={`${category.color} font-medium group-hover:opacity-80 transition-colors`}>
                    View Details →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {categoryProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">
              We're currently working on adding new digital products to this category.
              Check back soon or explore other categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}