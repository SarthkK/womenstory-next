import React from "react";
import SectionTitle from "../SectionTitle";
import CardSection from "./CardSection";

function WhatSection() {
  return (
    <section id="services" className="bg-[#ffe4e1] text-black pt-5 pb-12">
      <SectionTitle title="WHAT WE DO" boxColor="#FF8686" />
      <CardSection />
    </section>
  );
}

export default WhatSection;
