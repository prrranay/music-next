import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Acadmie",
  description: "Learn to play music like a pro with the help of experienced instructors at the Music Academy. Our courses cover a wide range of instruments and genres, and we offer one-on-one lessons as well as group classes for all skill levels. Join us today and take your musical skills to the next level!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center"><Navbar/></div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
