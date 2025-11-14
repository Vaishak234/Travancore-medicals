"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface HeroCarouselProps {
  images: string[];
  alt?: string;
}

export default function HeroCarousel({
  images,
  alt = "Medical Equipment",
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (images.length <= 1) return;

    // Clear any existing interval
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }

    // Set up new interval
    autoPlayIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 500);
        return nextIndex;
      });
    }, 2000);

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative w-full h-full overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            willChange: "transform",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 relative h-full"
            >
              <Image
                src={image}
                alt={`${alt} - Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Black overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="hidden md:flex absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 items-center justify-center"
            aria-label="Previous slide"
            disabled={isTransitioning}
          >
            <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>

          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 items-center justify-center"
            aria-label="Next slide"
            disabled={isTransitioning}
          >
            <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-white w-8 sm:w-10"
                  : "bg-white/50 w-2 sm:w-3 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      )}
    </div>
  );
}
