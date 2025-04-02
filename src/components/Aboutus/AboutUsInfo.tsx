"use client";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

function AboutUsInfo() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });
  const { ref: refimg, inView: inViewimg } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="flex flex-col md:flex-row">
      {/* Text Section */}
      <div className="flex flex-col gap-3 justify-center text-lg mb-6 md:mb-0 lg:w-1/2 items-center">
        <p
          ref={ref1}
          className={`mb-4 w-3/4 transition-opacity duration-700 delay-100 ${
            inView1 ? "opacity-100 animate-fadeUp" : "opacity-0"
          }`}
        >
          The.Women.Story is an initiative based in India with a vision to
          empower women from all walks of life. We at The.Women.Story believe
          that true feminism is more than just online activism; it&apos;s more
          about bringing tangible changes in women&apos;s lives everywhere.
        </p>
        <p
          className={`mb-4 w-3/4 transition-opacity duration-1000 delay-100 ${
            inView1 ? "opacity-100 animate-fadeUp" : "opacity-0"
          }`}
        >
          At The.Women.Story, we are dedicated to ensuring that women&apos;s
          voices and stories are heard and respected, showcasing the diverse
          experiences and journeys of women. By sharing these stories, we aim to
          inspire and empower others, fostering a community where each woman is
          celebrated. Each story is unique, and we aim to provide a platform for
          the same.
        </p>
        <p
          className={`mb-4 w-3/4 transition-opacity duration-700 delay-200 ${
            inView1 ? "opacity-100 animate-fadeUp" : "opacity-0"
          }`}
        >
          Through workshops, events, and community engagements, we aim to bring
          a shift in how women&apos;s issues are perceived and addressed. Our
          core values are rooted in inclusivity, accessibility, and grassroots
          changes. Join us at The.Women.Story in our journey to create a world
          where every woman feels empowered, valued, and heard.
        </p>
      </div>

      {/* Image Section */}
      <div
        ref={refimg}
        className={`justify-center items-center gap-4 hidden lg:flex flex-col transition-opacity duration-700 ${
          inViewimg ? "opacity-100 animate-fadeUp" : "opacity-0"
        }`}
      >
        <div className="flex gap-5 items-center">
          <Image
            className="transition duration-300 transform hover:scale-110"
            src="/aboutus/1.jpg"
            alt="About Image 1"
            width={246}
            height={310}
          />
          <Image
            className="transition duration-300 transform hover:scale-110"
            src="/aboutus/2.jpeg"
            alt="About Image 2"
            width={246}
            height={280}
          />
        </div>
        <Image
          className="transition duration-300 transform hover:scale-110"
          src="/aboutus/3.jpeg"
          alt="About Image 3"
          width={361}
          height={481}
        />
      </div>
    </div>
  );
}

export default AboutUsInfo;
