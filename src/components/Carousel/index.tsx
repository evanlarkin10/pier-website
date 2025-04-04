import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import Button from "@/components/Button";
import Text from "@/components/Text";
import { WEBREZ_BOOKING_URL } from "@/utils/constants";

const Carousel = ({
  slides,
}: {
  slides: { id: number; image: string; title: string; subtitle?: string }[];
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const changeSlide = (direction: "prev" | "next") => {
    setCurrentSlide((prev) => {
      if (direction === "prev") {
        return prev === 0 ? 2 : prev - 1;
      } else {
        return (prev + 1) % 3;
      }
    });
  };
  return (
    <div className="relative h-[760px] w-full overflow-hidden group">
      {slides.map((slide, index) => (
        <Fragment key={slide.id}>
          <Image
            key={slide.id}
            src={slide.image}
            alt={`Slide ${slide.id}`}
            fill
            className={`object-cover transition-opacity duration-1000 absolute top-0 left-0
              ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            priority={index === 0}
            draggable={false}
          />
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              text-white text-5xl font-bold text-center z-[1] transition-opacity duration-1000
              ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <Text
              variant="h1"
              additionalClasses="text-white font-notoSerif drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]"
            >
              {slide.title}
            </Text>
            {slide.subtitle && (
              <Text
                variant="h3"
                additionalClasses="text-white !font-inter drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]"
              >
                {slide.subtitle}
              </Text>
            )}
          </div>
        </Fragment>
      ))}
      <div className="absolute bottom-64 left-1/2 transform -translate-x-1/2">
        <Button
          size="lg"
          color="tertiary"
          variant="solid"
          text="Book Now"
          onClick={() => window.open(WEBREZ_BOOKING_URL, "_blank")}
        />
      </div>
      {/* Navigation Buttons */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={() => changeSlide("prev")}
          className="bg-black/50 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={() => changeSlide("next")}
          className="bg-black/50 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Carousel;
