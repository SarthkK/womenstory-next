import React from "react";
import SectionTitle from "../SectionTitle";
import CardSection from "./CardSection";

function WhatSection() {
  return (
    <section id="services" className="bg-primary text-black pt-5 pb-12">
      <SectionTitle title="WHAT WE DO" boxColor="#ffe4e1" lineColor="#000" />
      <CardSection />
    </section>
  );
}

export default WhatSection;
