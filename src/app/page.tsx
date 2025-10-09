import React from "react";
import { Navbar } from "@/components/organisms/navbar";
import HeroSection from "@/components/organisms/hero-section";
import Contact from "@/components/organisms/contact";
import FloatingSideBar from "@/components/organisms/floating-side-nav";

export default function Home() {
  return (
    <main className=" md:w-2/3 mx-auto ">
      <Navbar />   
      <HeroSection />  
      <Contact />

      {/* Floating Social Links - Desktop */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-40 hidden lg:block">
        <FloatingSideBar />
      </div>

      {/* Floating Social Links - Mobile */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <FloatingSideBar />
      </div>
    </main>
  );
}
