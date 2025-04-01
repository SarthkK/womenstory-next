"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates multiple times
    threshold: 0.8, // Starts animating when 80% of the section is visible
  });

  return (
    <section
      className="content min-h-screen flex items-center justify-center"
      id="home"
      ref={ref}
      style={{
        backgroundImage: `linear-gradient(rgba(255, 105, 180, 0.309), rgba(255, 105, 180, 0.512)), url('/heroBG.jpg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-5xl px-4">
        <div className="flex justify-center items-center h-full">
          <div
            className={`w-full md:w-1/2 flex flex-col justify-center transition-opacity duration-500 transform ${
              inView ? "opacity-100 translate-y-10" : "opacity-0 translate-y-25"
            }`}
          >
            <h1 className="text-4xl py-4 md:text-6xl font-bold mb-4 text-black">
              The.<span className="text-black">Women</span>.Story
            </h1>
            <div className="text-xl text-white mb-6">
              <p className=" [text-shadow:_0_1px_8px_rgb(0_0_0_/_0.8)] ">
                A hope to make women-related issues more inclusive, as social
                changes do not happen in isolation.
              </p>
            </div>
            <a
              href="#about"
              className="text-white border border-black w-fit px-6 py-3 rounded-lg bg-primary"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
