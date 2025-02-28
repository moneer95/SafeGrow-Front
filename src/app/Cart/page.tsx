"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useCart } from "../../../lib/hooks/useCart";
import PayForm from "../../components/MobCheckout";
import PayPalCheckout from "../../components/PayPalCheckout"


export default function Cart() {
  const { items, removeItem, updateQuantity, total } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  console.log(items)


  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar darkMode={true} />
        <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
            <p className="mt-4 text-gray-500">Start shopping to add items to your cart.</p>
            <Link
              href="/shop"
              className="mt-8 inline-flex items-center text-[#009688] hover:text-[#007a6c] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Navbar darkMode={true} />

      {/* {isOpen && <PayForm
        amount={total().toFixed(2)}
        products_ids={items.map(item => item.id)}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />} */}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>

            <PayPalCheckout />

          </div>
        </div>
        )}


            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
              <Link
                href="/shop"
                className="inline-flex items-center text-[#009688] hover:text-[#007a6c] transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
                  <div className="space-y-6">
                    {items.map((item) => (
                      <motion.div
                        key={`${item.id}-${item.selectedSize}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                      >
                        {/* Product Image */}
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                          <img
                            src={`https://dash.safe-grow.com${item.imageSrc}`}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                              {item.selectedSize && (
                                <p className="text-sm text-gray-600">Size: {item.selectedSize}</p>
                              )}
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <button
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="p-1 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                              >
                                <Minus className="w-4 h-4 text-gray-600" />
                              </button>
                              <span className="text-lg font-medium text-gray-900">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                              >
                                <Plus className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                            <p className="text-lg font-bold text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-4">
                  <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                    <div className="space-y-4">
                      <div className="flex justify-between text-base text-gray-600">
                        <span>Subtotal</span>
                        <span>${total().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-base text-gray-600">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between text-lg font-bold text-gray-900">
                          <span>Total</span>
                          <span>${total().toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsOpen(true)}
                      className="mt-6 w-full bg-[#009688] text-white py-3 px-4 rounded-lg hover:bg-[#007a6c] transition-colors font-medium"
                    >
                      Proceed to Checkout
                    </button>

                    <p className="mt-4 text-sm text-gray-500 text-center">
                      Shipping and taxes will be calculated at checkout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
}