import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbaar from "@/components/Navbaar";
import Footer from "@/components/footer";
import Loading from "@/components/loading";
import { Suspense } from "react";

import {
  ClerkProvider
} from '@clerk/nextjs'





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "pirated Courses",
  description: "find paid Courses here and get it free of cost ",

 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<ClerkProvider>
  


    <html lang="en">

      <body
        className={`   relative ${geistSans.variable} ${geistMono.variable} dark  antialiased`}
        >
          <Suspense fallback={<Loading/>}>
          

          <div className="sticky  ">

        <Navbaar/>

          </div>
          <section className="flex justify-center items-center">

        {children}
          </section>
        
        <Footer />
          
          </Suspense>
      </body>
    </html>
          </ClerkProvider>
  
  );
}
