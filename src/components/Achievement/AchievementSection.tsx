import React from "react";
import SectionTitle from "../SectionTitle";
import Numbers from "./Numbers";
import AchievementCarousel from "./AchievementCarousel";

function AchievementSection() {
  return (
    <section id="achievements" className="bg-primary text-black pb-4 ">
      {/* Section Title */}
      <SectionTitle
        title="ACHIEVEMENTS"
        boxColor="#ffe4e1"
        lineColor="#000000"
      />
      <Numbers />
      {/* Achievement Carousel */}
      <AchievementCarousel />
      {/* Decorative Wave */}
      <div className="relative top-24 overflow-hidden w-full leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-transparent relative block [width:calc(127%+1.3px)] h-[82px] rotate-y-180 md:[width:calc(127%+1.3px)] md:h-20 "
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-primary"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default AchievementSection;
