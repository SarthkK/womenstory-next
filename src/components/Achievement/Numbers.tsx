"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Numbers() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`container mx-auto px-4 delay-500 ${
        inView ? "opacity-100 animate-fadeUp" : "opacity-0"
      }`}
    >
      <div className="flex text-6xl text-[#c4006a] flex-wrap justify-center gap-6 numerical-data">
        <div className="w-full md:w-1/4 text-center">
          <h2 className="font-extrabold">
            {inView && <CountUp start={0} end={400} duration={2.5} />}+
          </h2>
          <p className="text-black text-center mt-2 text-lg">Women Helped</p>
        </div>
        <div className="w-full md:w-1/4 text-center">
          <h2 className="font-extrabold">
            {inView && <CountUp start={0} end={10} duration={2.5} />}+
          </h2>
          <p className="mt-2 text-lg text-black">Collaborated With</p>
        </div>
        <div className="w-full md:w-1/4 text-center">
          <h2 className="font-extrabold">
            {inView && <CountUp start={0} end={40} duration={2.5} />}+
          </h2>
          <p className="text-black mt-2 text-lg">Members</p>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
