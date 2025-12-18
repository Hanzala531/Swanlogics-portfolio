import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section aria-labelledby="about-title" className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20">
      <div className="grid gap-8 md:gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start">
        {/* Left: Tag + Image + Copy */}
        <div className="space-y-4 sm:space-y-10">
          <div className="inline-flex relative items-center gap-2 sm:gap-3 rounded-full bg-purple-100 px-3 py-1.5 sm:px-5 sm:py-2">
            <span className="font-dewi  text-xs sm:text-sm font-bold text-black"># Who We Are?</span>
            <img src="/Star.png" alt="mask group" className="w-4 h-4 absolute -right-20 sm:-right-26 lg:-right-30  xl:-right-72 bottom-1 sm:w-8 sm:h-8" />
          </div>

          <div className="overflow-hidden rounded-[12px] sm:rounded-[20px] shadow-surface">
            <img src="/image 1.png" alt="Our team collaborating" className="aspect-[4/3] w-full object-cover" />
          </div>

          <p className="font-hanken text-sm sm:text-base leading-relaxed text-brand-gray">
            We're a passionate team delivering digital experiences designed to drive growth. From strategy and design to
            development and online campaigns, we build websites that reflect your vision and achieve business goals.
          </p>
        </div>

        {/* Right: Headline + CTA */}
        <div className="space-y-6 sm:space-y-8">
          <h2 id="about-title" className="text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Dedicated To Your
            <br />
            Success With Innovative
            <br className="hidden sm:block" />
            <span className="block sm:inline">Digital Marketing Solutions</span>
          </h2>

          {/* Mobile CTA */}
          <div className="flex justify-center md:hidden">
            <Button
              onClick={() => navigate("/quote")}
              className="flex !text-brand-ink items-center gap-2 rounded-full bg-lime-300 px-6 py-3 sm:px-8 sm:py-4 font-bold text-sm sm:text-base w-full max-w-xs justify-center"
            >
              More About Us
            </Button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 relative">
            <Button
              onClick={() => navigate("/quote")}
              className="flex !text-brand-ink items-center gap-2 rounded-full bg-lime-300 px-6 py-5 font-bold"
            >
              More About Us
            </Button>
            <span className='absolute left-32  bg-lime-300 p-4 rounded-full '>
               <img src="/Arrow 1-1.svg" alt="arrow" className=" rounded-full text-brand-ink w-[10px] h-[10px]  " />
</span>
            <img src="/maskArrow.svg" alt="bend arrow" className="absolute top-32 md:left-32 lg:left-60 " />
          </div>
        </div>
      </div>
    </section>
  );
}
