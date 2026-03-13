"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Ravi Kumar Reddy",
    event: "Telugu Wedding, Hyderabad",
    rating: 5,
    quote:
      "The music added a divine atmosphere to our wedding ceremony. Highly recommended for traditional Telugu weddings.",
  },
  {
    name: "Lakshmi Devi",
    event: "Temple Festival, Secunderabad",
    rating: 5,
    quote:
      "Authentic Nadaswaram and Thavil performance. Our temple festival felt truly special and spiritually elevating.",
  },
  {
    name: "Srinivas Rao",
    event: "Wedding, Vijayawada",
    rating: 5,
    quote:
      "Our wedding felt truly traditional because of the beautiful Nadaswaram music. Everyone still talks about it.",
  },
  {
    name: "Priya & Karthik",
    event: "Reception, Jubilee Hills",
    rating: 5,
    quote:
      "They played the perfect blend of classical and contemporary melodies. It was the absolute highlight of our reception!",
  },
  {
    name: "Venkateswara Swamy Temple",
    event: "Brahmotsavam, Tirupati",
    rating: 5,
    quote:
      "Their dedication and devotion are evident in every note. A mesmerizing Sannai Melam experience for all the devotees.",
  }
];

export const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 md:py-32 relative bg-[#080808]">
      <div className="absolute inset-0 bg-[url('/mandala-texture.png')] bg-repeat opacity-[0.03] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10 w-full overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col mb-10 md:mb-12 gap-6">
          <div className="w-full">
            <span className="text-gold tracking-[0.2em] text-xs font-semibold uppercase block mb-4">
              CLIENT STORIES
            </span>
            <h2 className="font-serif text-[40px] md:text-5xl text-white leading-tight">
              What Our{" "}
              <span className="text-gold italic font-light">Clients Say</span>
            </h2>
          </div>
          <div className="flex justify-end w-full">
            <Link
              href="/testimonials"
              className="group flex items-center gap-2 text-gold tracking-widest text-[13px] font-medium hover:text-white transition-colors whitespace-nowrap"
            >
              VIEW ALL
              <span className="inline-block transition-transform group-hover:translate-x-1 font-serif text-lg leading-none mb-0.5">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-5 md:-ml-6 w-full">
            {testimonials.map((t, index) => (
              <div 
                key={index}
                className="flex-[0_0_88%] md:flex-[0_0_45%] lg:flex-[0_0_33.33%] min-w-0 pl-5 md:pl-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group min-h-[300px] p-8 md:p-10 border border-[#1a1a1a] bg-[#0a0a0a] rounded-[2px] hover:border-gold/30 transition-all duration-500 flex flex-col relative"
                >
                  {/* Decorative quotes */}
                  <span className="absolute top-8 right-8 font-sans font-black italic text-[#1a1a1a] text-5xl tracking-tighter leading-none select-none pointer-events-none">
                    //
                  </span>
                  
                  <div className="flex gap-1.5 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={15} className="text-gold fill-gold" />
                    ))}
                  </div>
                  
                  <p className="font-sans text-white/80 text-[15px] leading-[1.8] font-light italic flex-grow mb-8 pr-4">
                    "{t.quote}"
                  </p>
                  
                  <div className="w-full h-[1px] bg-[#1a1a1a] mb-6" />
                  
                  <div>
                    <h4 className="font-sans font-medium text-white text-[15px]">
                      {t.name}
                    </h4>
                    <p className="font-sans text-white/40 text-[13px] font-light mt-1.5 flex items-center">
                      {t.event}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-12 md:hidden">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "bg-gold w-8" : "bg-[#222] w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

