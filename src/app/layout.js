"use client";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Footer";
import Head from "next/head";
import { Toaster } from "sonner";
import FloatingCheckout from "../components/FloatingCheckout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Safe Grow",
//   description: "Empowering Palestinian Refugees to Build Sustainable Futures",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://safe-grow.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "SafeGrow",
              "description": "Supporting displaced Palestinians through business grants, mentorship, and sustainable livelihood programs.",
              "url": "https://safe-grow.com",
              "logo": "https://safe-grow.com/Logo.png",
              "sameAs": [
                "https://instagram.com/safegrow_org"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cairo",
                "addressCountry": "EG"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* 🟢 Wrap the entire layout with PayPalScriptProvider */}
        <PayPalScriptProvider
          options={{
            "client-id": "AcJbep8WckvKr8vz7sU6P8tqsUAWUnK9HtY1SkklEJkjy4_WL-RlZn5p11KYS71fK7YpZ1-TKLazOT_R",
            currency: "USD", // Optional: Set the currency
          }}
        >
          <main className="flex-grow">{children}</main>
          <FloatingCheckout />
          <Footer />
          <Toaster position="top-center" richColors />
        </PayPalScriptProvider>
      </body>
    </html>
  );
}