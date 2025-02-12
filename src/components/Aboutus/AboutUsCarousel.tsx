"use client";
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

function AboutUsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  // Functions to navigate slides
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  // Check if prev/next buttons should be enabled
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full max-w-md mx-auto lg:hidden">
      {/* Embla Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center">
          {/* Slide 1 */}
          <div className="flex-[0_0_100%] p-2">
            <Image
              className=""
              src="/aboutus/1.jpeg"
              alt="About Image 1"
              width={340}
              height={400}
            />
          </div>

          {/* Slide 2 */}
          <div className="flex-[0_0_100%] p-2">
            <Image
              className=""
              src="/aboutus/2.jpeg"
              alt="About Image 2"
              width={361}
              height={481}
            />
          </div>

          {/* Slide 3 */}
          <div className="flex-[0_0_100%] p-2">
            <Image
              className=""
              src="/aboutus/3.jpeg"
              alt="About Image 3"
              width={361}
              height={481}
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className={`absolute bottom-2 left-1/4 transform -translate-y-1/2 p-2 bg-white/45 rounded-full ${
          !prevBtnEnabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="text-gray-700" />
      </button>

      <button
        className={`absolute bottom-2 right-1/4 transform -translate-y-1/2 p-2 bg-white/45 rounded-full ${
          !nextBtnEnabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="text-gray-700" />
      </button>
    </div>
  );
}

export default AboutUsCarousel;
