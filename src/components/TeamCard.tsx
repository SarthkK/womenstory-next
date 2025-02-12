import Image from "next/image";
import React from "react";

function TeamCard({
  name,
  position,
  imgsrc,
}: {
  name: string;
  position: string;
  imgsrc: string;
}) {
  return (
    <div className="flex text-black flex-col items-center p-8 bg-white m-3">
      <Image
        src={imgsrc}
        width={300}
        height={400}
        alt="Founder photo"
        className="rounded-full"
      />
      <h4 className="text-xl mt-2">{name}</h4>
      <span>{position}</span>
    </div>
  );
}

export default TeamCard;
