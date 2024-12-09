"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import About from "../components/About";
import Event from "../components/Event";
import Footer from "../components/Footer";
import Loading from "./loading";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import SpeakerCarousel from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="bg-black">
      <Hero/>
        <About/>
        <Event/>
        <SpeakerCarousel/>
        <Sponsors/>
        <Team/>
        <Footer/>
      </div>
    </>
  );
}