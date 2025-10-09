import React from "react";
import { Navbar } from "@/components/organisms/navbar";
import HeroSection from "@/components/organisms/hero-section";

export default function Home() {
  return (
    <div className=" md:w-2/3 mx-auto ">
      <Navbar />   
      <HeroSection />  
    </div>
  );
}
