"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useCart } from "@/lib/hooks/useCart";

export default function Success() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      clearCart();
    } else {
      router.push("/");
    }
  }, [sessionId, clearCart, router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar darkMode={true} />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Thank You for Your Purchase!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Your order has been confirmed. You will receive an email shortly with your order details
            and any digital products you purchased.
          </p>

          <div className="space-y-4">
            <Link
              href="/shop"
              className="inline-block w-full sm:w-auto px-8 py-3 bg-[#009688] text-white rounded-lg hover:bg-[#007a6c] transition-colors"
            >
              Continue Shopping
            </Link>
            
            <p className="text-sm text-gray-500">
              If you have any questions, please email{" "}
              <a
                href="mailto:support@safegrow.org"
                className="text-[#009688] hover:text-[#007a6c]"
              >
                support@safegrow.org
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}