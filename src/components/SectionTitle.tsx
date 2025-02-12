import React from "react";

function SectionTitle({
  title,
  boxColor,
  lineColor = "#a5a5a5",
}: {
  title: string;
  boxColor: string;
  lineColor?: string;
}) {
  return (
    <div className="text-center relative py-6">
      <h1 className="text-4xl font-bold pb-5 text-black">{title}</h1>
      <div
        style={{ background: boxColor }}
        className="relative left-1/2 h-[5px] translate-x-[-50%] w-12 z-10"
      ></div>
      <div
        style={{ background: lineColor }}
        className={`relative left-1/2 translate-x-[-50%] bottom-[3px] h-[1px] w-28`}
      ></div>
    </div>
  );
}

export default SectionTitle;
