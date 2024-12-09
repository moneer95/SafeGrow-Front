import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col space-y-10`}
      >
      {/* <TopBar /> */}
 
      <div>
        {children}
      </div>
      </body>
    </html>
  );
}
