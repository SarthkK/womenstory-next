"use client";
import React, { JSX } from "react";
import { useInView } from "react-intersection-observer";

function Card({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: JSX.Element;
}) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center md:flex-row bg-white p-10 gap-5 shadow-md hover:-translate-y-5 duration-500 ${
        inView ? "animate-fadeUp" : "opacity-0"
      }`}
    >
      {icon}
      <div className="flex flex-col gap-3">
        <p className="font-bold text-2xl">{title}</p>
        <p className=" text-sm">{content}</p>
      </div>
    </div>
  );
}

export default Card;
