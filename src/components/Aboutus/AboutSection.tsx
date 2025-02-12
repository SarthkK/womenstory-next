import React from "react";
import SectionTitle from "../SectionTitle";
import AboutUsInfo from "./AboutUsInfo";
import AboutUsCarousel from "./AboutUsCarousel";

const AboutUs = () => {
  return (
    <section id="about" className="bg-[#ffe4e1] text-black pb-12">
      <SectionTitle title="ABOUT US" boxColor="#FF8686" />
      <div className="mx-auto px-4">
        <AboutUsInfo />
        {/* Mobile carousel */}
        <AboutUsCarousel />
      </div>
    </section>
  );
};

export default AboutUs;
