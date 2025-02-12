"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

function AchievementCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full mx-auto pt-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_100%] w-full h-fit">
            <div className="flex flex-col lg:flex-row justify-center h-full items-center px-12 md:px-24 lg:px-48 gap-4 lg:gap-12 p-4">
              <div className="w-fit">
                <Image
                  src="/achievements/1.JPG"
                  alt="Certificate"
                  width={800}
                  height={800}
                  className="shadow-md"
                />
              </div>
              <div className="w-fit pt-6">
                <p className="text-sm lg:text-2xl leading-relaxed">
                  1st In a heartfelt initiative, volunteers from{" "}
                  <strong>The Women Story</strong> conducted an enlightening
                  &apos;Health and Hygiene&apos; awareness event for Udaan NGO
                  students. This enriching session imparted essential knowledge,
                  fostering healthier habits and nurturing a brighter, healthier
                  future for our beloved young learners, reaffirming our
                  commitment to community well-being.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-[0_0_100%] w-full h-fit">
            <div className="flex flex-col lg:flex-row justify-center h-full items-center px-12 md:px-24 lg:px-48 gap-4 lg:gap-12 p-4">
              <div className="w-fit">
                <Image
                  src="/achievements/1.JPG"
                  alt="Certificate"
                  width={800}
                  height={800}
                  className="shadow-md"
                />
              </div>
              <div className="w-fit pt-6">
                <p className="text-sm lg:text-2xl leading-relaxed">
                  1st In a heartfelt initiative, volunteers from{" "}
                  <strong>The Women Story</strong> conducted an enlightening
                  &apos;Health and Hygiene&apos; awareness event for Udaan NGO
                  students. This enriching session imparted essential knowledge,
                  fostering healthier habits and nurturing a brighter, healthier
                  future for our beloved young learners, reaffirming our
                  commitment to community well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className={`absolute top-1/2 left-12 transform -translate-y-1/2 p-2 bg-white/45 rounded-full ${
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
        className={`absolute top-1/2 right-12 transform -translate-y-1/2 p-2 bg-white/45 rounded-full ${
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

export default AchievementCarousel;
