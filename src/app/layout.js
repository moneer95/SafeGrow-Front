import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Footer";
import Head from "next/head";
import { Toaster } from "sonner";
import FloatingCheckout from "../components/FloatingCheckout";

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

export const metadata = {
  title: "Safe Grow",
  description: "Empowering Palestinian Refugees to Build Sustainable Futures",
  icons: {
    icon: "/favicon.ico",
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-grow">
          {children}
        </main>
        <FloatingCheckout />
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}