"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../../lib/hooks/useCart';
import { usePathname } from "next/navigation";


const FloatingCheckout = () => {
  const pathname = usePathname(); // Get current URL path

  const { items, total } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);


  console.log(pathname)

  if (totalItems === 0) return null;
  if(pathname == "/Cart") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-8 left-1/2 md:left-3/4  transform -translate-x-1/2 z-40"
      >
        <Link href="/Cart">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 bg-[#009688] text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <span className="font-medium">{totalItems} items</span>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div className="font-semibold">${total().toFixed(2)}</div>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex items-center gap-1 font-medium">
              Checkout
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingCheckout;