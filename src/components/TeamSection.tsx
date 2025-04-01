import React from "react";
import SectionTitle from "./SectionTitle";
import TeamCard from "./TeamCard";

function TeamSection() {
  return (
    <section id="team" className="bg-primary pb-12 pt-8">
      <SectionTitle title="TEAM" boxColor="#ffe4e1" lineColor="#000" />
      <div className="grid grid-cols-1 md:grid-cols-3 px-12 md:px-24">
        <TeamCard
          name="Vrinda Rastogi"
          position="Founder"
          imgsrc="/team/vridna.jpg"
        />
        <TeamCard
          name="Shivangi Rawat"
          position="Vice President"
          imgsrc="/team/Shivangi.jpg"
        />
        <TeamCard
          name="Devshi Satish Mishra"
          position="General Secretary"
          imgsrc="/team/Devshi.jpg"
        />
      </div>
    </section>
  );
}

export default TeamSection;
