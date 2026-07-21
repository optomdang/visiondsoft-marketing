"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ClickableLandingImage } from "@/components/clickable-landing-image";
import { LANDING_SLIDES, LANDING_SLIDER } from "@/content/landing";
import { cn } from "@/lib/cn";

const AUTO_INTERVAL_MS = 3000;

export function LandingFeatureSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const scrollToSlide = useCallback((index: number) => {
    const container = scrollRef.current;
    const slide = container?.children[index] as HTMLElement | undefined;
    if (!container || !slide) return;
    container.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });
  }, []);

  const goToSlide = useCallback(
    (index: number, manual: boolean) => {
      if (manual) setAutoPlay(false);
      setActiveIndex(index);
      scrollToSlide(index);
    },
    [scrollToSlide],
  );

  useEffect(() => {
    if (!autoPlay) return;

    const id = window.setInterval(() => {
      setActiveIndex(prev => {
        const next = (prev + 1) % LANDING_SLIDES.length;
        scrollToSlide(next);
        return next;
      });
    }, AUTO_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [autoPlay, scrollToSlide]);

  return (
    <section className="overflow-hidden bg-white py-10 sm:py-12">
      <div className="mx-auto mb-5 max-w-[1024px] px-6">
        <h2 className="text-3xl font-bold tracking-tight text-apple-text sm:text-5xl">
          {LANDING_SLIDER.title}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-apple-secondary sm:text-base">
          {LANDING_SLIDER.note}
        </p>
      </div>

      <div
        ref={scrollRef}
        className="apple-slider flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 md:px-[max(1.5rem,calc((100vw-1024px)/2))]"
      >
        {LANDING_SLIDES.map((slide, index) => (
          <article
            key={`${slide.index}-${slide.title}`}
            className="group relative flex w-[300px] shrink-0 snap-start flex-col rounded-3xl bg-apple-muted px-4 pt-3 pb-3 sm:w-[450px] sm:px-5 sm:pt-4 sm:pb-3"
          >
            <div className="shrink-0 space-y-0.5">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-apple-secondary sm:text-[11px]">
                {slide.index}
              </span>
              <h3 className="text-lg font-semibold leading-[1.2] text-apple-text sm:text-xl">
                {slide.title}
              </h3>
              <p className="text-xs leading-snug text-apple-secondary sm:text-sm">
                {slide.description}
              </p>
            </div>
            <ClickableLandingImage
              src={slide.image}
              alt={slide.imageAlt}
              useNativeImg
              wrapperClassName="mt-1.5 w-full overflow-hidden rounded-2xl bg-white shadow-sm"
              className="block h-auto w-full"
            />
          </article>
        ))}
      </div>

      <div
        className="mt-4 flex justify-center gap-2 px-6"
        role="tablist"
        aria-label="Chọn slide tính năng"
      >
        {LANDING_SLIDES.map((slide, index) => (
          <button
            key={`${slide.index}-${slide.title}-dot`}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Slide ${index + 1}: ${slide.title}`}
            onClick={() => goToSlide(index, true)}
            className={cn(
              "rounded-full transition-all duration-300",
              index === activeIndex
                ? "h-2.5 w-2.5 bg-apple-text"
                : "h-2 w-2 bg-apple-border hover:bg-apple-secondary",
            )}
          />
        ))}
      </div>
    </section>
  );
}
